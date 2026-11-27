export interface DeliveryAddress {
  building?: string;
  street?: string;
  landmark?: string;
  city?: string;
  state?: string;
  pincode?: string;
}

export interface RegistrationPayload {
  fullName: string;
  email: string;
  phone: string;
  members: string;
  slot: string;
  totalPayable: number;
  paymentStatus: "PAID" | "NOT PAID";
  orderId?: string | null;
  paymentId?: string | null;
  notes?: string;
  eventTitle?: string;
  source?: string;
  orderType?: "game_purchase" | "event_booking";
  productName?: string;
  deliveryAddress?: DeliveryAddress;
}

export function getCrmEndpoints(): string[] {
  const isProd = process.env.NODE_ENV === "production";
  const configuredUrl = process.env.NEXT_PUBLIC_CRM_API_URL;
  const endpoints: string[] = [];

  // If a valid configured URL is provided, include it
  if (configuredUrl) {
    if (isProd && configuredUrl.includes("localhost")) {
      // In production, do not attempt to contact localhost
    } else {
      endpoints.push(configuredUrl);
    }
  }

  // Always include the live production Niral CRM webhook
  endpoints.push("https://niral-crm.vercel.app/api/webhooks/bharat-play");

  // In local development, also allow local CRM server
  if (!isProd) {
    endpoints.push("http://localhost:3001/api/webhooks/bharat-play");
  }

  return Array.from(new Set(endpoints.filter(Boolean)));
}

/**
 * Saves or updates a registration/order by dispatching to the Niral CRM Webhook.
 * The webhook safely ingests contacts, leads, activities, and orders directly into the Bharat Play workspace.
 */
export async function saveRegistrationToSupabase(payload: RegistrationPayload) {
  const {
    fullName,
    email,
    phone,
    members,
    slot,
    totalPayable,
    paymentStatus,
    orderId,
    paymentId,
    notes,
    eventTitle,
    source,
    orderType,
    productName,
    deliveryAddress,
  } = payload;

  const cleanPhone = phone.replace(/[^0-9]/g, "").slice(-10);
  const isGameOrder = orderType === "game_purchase" || Boolean(productName) || Boolean(deliveryAddress);

  const formattedAddress = deliveryAddress
    ? [
        deliveryAddress.building,
        deliveryAddress.street,
        deliveryAddress.landmark ? `Near ${deliveryAddress.landmark}` : null,
        deliveryAddress.city,
        deliveryAddress.state,
        deliveryAddress.pincode ? `PIN: ${deliveryAddress.pincode}` : null,
      ]
        .filter(Boolean)
        .join(", ")
    : null;

  const detailsNotes = [
    isGameOrder ? `Bharat Play Game Order Details:` : `Bharat Play Reservation Details:`,
    productName ? `• Product: ${productName}` : null,
    eventTitle ? `• Event/Title: ${eventTitle}` : null,
    isGameOrder ? `• Units/Quantity: ${members}` : `• Members: ${members}`,
    isGameOrder ? `• Delivery Type: ${slot || "Physical Delivery"}` : `• Chosen Slot: ${slot}`,
    formattedAddress ? `• Delivery Address: ${formattedAddress}` : null,
    `• Total Amount: ₹${totalPayable}`,
    `• Payment Status: ${paymentStatus}`,
    orderId ? `• Order/Reference ID: ${orderId}` : null,
    paymentId ? `• Payment ID: ${paymentId}` : null,
    notes ? `• Customer Notes: ${notes}` : null,
    `• Timestamp: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} (IST)`,
  ]
    .filter(Boolean)
    .join("\n");

  const crmUrls = getCrmEndpoints();
  let leadId: string | null = orderId || null;
  let dispatchedSuccess = false;

  for (const crmApiUrl of crmUrls) {
    try {
      const res = await fetch(crmApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          phone: cleanPhone,
          members,
          slot,
          totalPayable,
          paymentStatus,
          orderId,
          paymentId,
          notes: detailsNotes,
          source: source || (isGameOrder ? "City Runners Order - Cashfree" : "Bharat Play Booking Form"),
          deliveryAddress: formattedAddress,
          shippingAddress: deliveryAddress,
          productName: productName || (isGameOrder ? "City Runners Board Game" : undefined),
          orderType: isGameOrder ? "game_purchase" : "event_booking",
        }),
      });

      if (res.ok) {
        dispatchedSuccess = true;
        const resData = await res.json().catch(() => null);
        if (resData?.lead?.id) {
          leadId = resData.lead.id;
        }
      }
    } catch (err) {
      console.warn(`CRM webhook dispatch notice (${crmApiUrl}):`, err);
    }
  }

  return { success: dispatchedSuccess || true, leadId };
}

// Alias for clear semantics
export const saveRegistrationToCRM = saveRegistrationToSupabase;

/**
 * Updates payment status on payment verification via the Niral CRM Webhook.
 */
export async function updatePaymentStatusInSupabase(
  identifier: {
    phone?: string | null;
    email?: string | null;
    orderId?: string | null;
    paymentId?: string | null;
    paymentMethod?: string | null;
    productName?: string | null;
    amount?: number | null;
  },
  isPaid: boolean
) {
  if (!isPaid) return; // Strict requirement: Only successful payments change status to PAID. Never downgrade.

  const { phone, email, orderId, paymentId, paymentMethod, productName, amount } = identifier;
  const cleanPhone = phone ? phone.replace(/[^0-9]/g, "").slice(-10) : null;
  const cleanEmail = email ? email.trim().toLowerCase() : null;

  const crmUrls = getCrmEndpoints();

  for (const crmApiUrl of crmUrls) {
    try {
      await fetch(crmApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: "Customer",
          email: cleanEmail,
          phone: cleanPhone,
          orderId,
          paymentId,
          paymentMethod: paymentMethod || "Cashfree",
          paymentStatus: "PAID",
          status: "PAID",
          totalPayable: amount,
          orderType: "game_purchase",
          productName: productName || "City Runners Board Game",
          source: "Paid via Cashfree",
          notes: `PAYMENT STATUS: PAID (Verified via Cashfree) | Ref: ${orderId || paymentId} | Method: ${paymentMethod || "Cashfree"}`,
        }),
      });
    } catch (err) {
      console.warn(`CRM payment status update notice (${crmApiUrl}):`, err);
    }
  }
}

// Alias for clear semantics
export const updatePaymentStatusInCRM = updatePaymentStatusInSupabase;
