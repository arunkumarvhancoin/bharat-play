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

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://bnngllvepqkkbabzjskr.supabase.co";
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_V0d8rFcCHZ_mPlb5lAa2cg_8ONMNOGv";
const BHARAT_PLAY_ORG_ID = "e3ee4e16-abca-43ca-b556-8d0d5635ce47";

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
  const nameParts = fullName.trim().split(/\s+/);
  const firstName = nameParts[0] || "Guest";
  const lastName = nameParts.slice(1).join(" ") || "-";

  const isGameOrder = orderType === "game_purchase" || Boolean(productName) || Boolean(deliveryAddress);
  const statusTag = paymentStatus === "PAID" ? "PAID" : "NOT PAID";
  const leadTitle = isGameOrder
    ? `Bharat Play Game Order: ${fullName.trim()} (${productName || "City Runners"} · ${members}) [${statusTag}]`
    : `Bharat Play: ${fullName.trim()} (${members} · ${slot}) [${statusTag}]`;

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
    orderId ? `• Cashfree Order/Link ID: ${orderId}` : null,
    paymentId ? `• Cashfree Payment ID: ${paymentId}` : null,
    notes ? `• Customer Notes: ${notes}` : null,
    `• Timestamp: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} (IST)`,
  ]
    .filter(Boolean)
    .join("\n");

  let leadId = null;

  try {
    // 1. Direct Game Purchase / Enquiry: Store in 'orders' table
    if (isGameOrder) {
      try {
        const orderRes = await fetch(`${SUPABASE_URL}/rest/v1/orders`, {
          method: "POST",
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
            "Content-Type": "application/json",
            Prefer: "return=representation",
          },
          body: JSON.stringify({
            order_id: orderId || `bp_enq_${Date.now()}`,
            customer_name: fullName.trim() || "Guest Buyer",
            email: email.trim().toLowerCase() || "guest@bharatplay.com",
            phone: cleanPhone || "0000000000",
            product_name: productName || "City Runners",
            quantity: parseInt(members) || 1,
            amount: totalPayable,
            payment_status: paymentStatus || "ENQUIRY",
            is_paid: paymentStatus === "PAID",
            paid_at: paymentStatus === "PAID" ? new Date().toISOString() : null,
            address_building: deliveryAddress?.building,
            address_street: deliveryAddress?.street,
            address_landmark: deliveryAddress?.landmark,
            address_city: deliveryAddress?.city,
            address_state: deliveryAddress?.state,
            address_pincode: deliveryAddress?.pincode,
            notes: notes || detailsNotes,
            created_at: new Date().toISOString(),
          }),
        });

        const orderData = await orderRes.json();
        leadId = Array.isArray(orderData) && orderData[0]?.id ? orderData[0].id : orderId;
      } catch (orderErr) {
        console.warn("Direct Supabase orders insert notice:", orderErr);
      }
    }

    // 2. ALWAYS Save into contacts & leads pipeline for CRM tracking (both games & events)
    const contactRes = await fetch(`${SUPABASE_URL}/rest/v1/contacts`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        organization_id: BHARAT_PLAY_ORG_ID,
        first_name: firstName,
        last_name: lastName,
        email: email.trim().toLowerCase(),
        phone: cleanPhone,
        company_name: "Bharat Play",
        status: paymentStatus === "PAID" ? "customer" : "lead",
        notes: detailsNotes,
      }),
    });

    const contactData = await contactRes.json();
    const contactId = Array.isArray(contactData) && contactData[0]?.id ? contactData[0].id : null;

    const leadRes = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        organization_id: BHARAT_PLAY_ORG_ID,
        title: leadTitle,
        first_name: firstName,
        last_name: lastName,
        email: email.trim().toLowerCase(),
        phone: cleanPhone,
        company: "Bharat Play",
        source: source || (isGameOrder ? "Game Order Enquiry" : "Event"),
        status: paymentStatus === "PAID" ? "Converted" : "New",
        priority: "High",
        value: totalPayable,
        converted_contact_id: contactId,
        created_at: new Date().toISOString(),
      }),
    });

    const leadData = await leadRes.json();
    if (!leadId) {
      leadId = Array.isArray(leadData) && leadData[0]?.id ? leadData[0].id : null;
    }
  } catch (err) {
    console.warn("Direct Supabase REST insert notice:", err);
  }

  // 3. Additionally notify external Niral CRM webhook (Dispatches to both local dev server and production)
  const crmUrls = Array.from(
    new Set(
      [
        process.env.NEXT_PUBLIC_CRM_API_URL,
        "http://localhost:3001/api/webhooks/bharat-play",
        "https://niral-crm.vercel.app/api/webhooks/bharat-play",
      ].filter(Boolean) as string[]
    )
  );

  for (const crmApiUrl of crmUrls) {
    try {
      await fetch(crmApiUrl, {
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
          notes: detailsNotes,
          source: source || (isGameOrder ? "City Runners Order - Cashfree" : "Bharat Play Booking Form"),
          deliveryAddress: formattedAddress,
          shippingAddress: deliveryAddress,
          productName: productName || (isGameOrder ? "City Runners Board Game" : undefined),
          orderType: isGameOrder ? "game_purchase" : "event_booking",
        }),
      });
    } catch {
      // Continue to other endpoints
    }
  }

  return { success: true, leadId };
}

export async function updatePaymentStatusInSupabase(
  identifier: {
    phone?: string | null;
    email?: string | null;
    orderId?: string | null;
    paymentId?: string | null;
    paymentMethod?: string | null;
  },
  isPaid: boolean
) {
  if (!isPaid) return; // Strict requirement: Only successful payments change status to PAID. Never downgrade.

  try {
    const { phone, email, orderId, paymentId, paymentMethod } = identifier;
    const cleanPhone = phone ? phone.replace(/[^0-9]/g, "").slice(-10) : null;
    const cleanEmail = email ? email.trim().toLowerCase() : null;

    // 1. Update orders table: explicitly record PAID status, boolean true, timestamp and payment method
    if (orderId) {
      try {
        await fetch(`${SUPABASE_URL}/rest/v1/orders?order_id=eq.${encodeURIComponent(orderId)}`, {
          method: "PATCH",
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            payment_status: "PAID",
            is_paid: true,
            paid_at: new Date().toISOString(),
            payment_id: paymentId || undefined,
            payment_method: paymentMethod || "Cashfree",
            updated_at: new Date().toISOString(),
          }),
        });
      } catch (orderUpdateErr) {
        console.warn("Direct Supabase orders patch notice:", orderUpdateErr);
      }
    }

    // 2. Update leads table status to Converted and tag to [PAID]

    let filter = `organization_id=eq.${BHARAT_PLAY_ORG_ID}&status=neq.Converted`;
    if (cleanPhone) {
      filter += `&phone=eq.${cleanPhone}`;
    } else if (cleanEmail) {
      filter += `&email=eq.${encodeURIComponent(cleanEmail)}`;
    }

    const findRes = await fetch(`${SUPABASE_URL}/rest/v1/leads?${filter}&order=created_at.desc&limit=1`, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });

    const found = await findRes.json();
    if (Array.isArray(found) && found[0]?.id) {
      const existing = found[0];
      const updatedTitle = existing.title.replace(/\[(NOT PAID|UNPAID)\]/g, "[PAID]");

      await fetch(`${SUPABASE_URL}/rest/v1/leads?id=eq.${existing.id}`, {
        method: "PATCH",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: updatedTitle.includes("[PAID]") ? updatedTitle : `${existing.title} [PAID]`,
          status: "Converted",
          updated_at: new Date().toISOString(),
          created_at: new Date().toISOString(),
        }),
      });
    }
  } catch (err) {
    console.warn("Direct Supabase status upgrade notice:", err);
  }
}
