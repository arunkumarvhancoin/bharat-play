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
  } = payload;

  const cleanPhone = phone.replace(/[^0-9]/g, "").slice(-10);
  const nameParts = fullName.trim().split(/\s+/);
  const firstName = nameParts[0] || "Guest";
  const lastName = nameParts.slice(1).join(" ") || "-";

  const statusTag = paymentStatus === "PAID" ? "PAID" : "NOT PAID";
  const leadTitle = `Bharat Play: ${fullName.trim()} (${members} · ${slot}) [${statusTag}]`;

  const detailsNotes = [
    `Bharat Play Reservation Details:`,
    `• Members: ${members}`,
    `• Chosen Slot: ${slot}`,
    `• Total Amount: ₹${totalPayable}`,
    `• Payment Status: ${paymentStatus}`,
    orderId ? `• Cashfree Order/Link ID: ${orderId}` : null,
    paymentId ? `• Cashfree Payment ID: ${paymentId}` : null,
    notes ? `• Notes: ${notes}` : null,
    `• Registered: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} (IST)`,
  ]
    .filter(Boolean)
    .join("\n");

  let leadId = null;

  try {
    // 1. Create or insert contact directly in Supabase
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

    // 2. Insert Lead directly into Supabase leads table
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
        source: "Event",
        status: paymentStatus === "PAID" ? "Converted" : "New",
        priority: "High",
        value: totalPayable,
        converted_contact_id: contactId,
        created_at: new Date().toISOString(),
      }),
    });

    const leadData = await leadRes.json();
    leadId = Array.isArray(leadData) && leadData[0]?.id ? leadData[0].id : null;
  } catch (err) {
    console.warn("Direct Supabase REST insert notice:", err);
  }

  // 3. Additionally notify external CRM webhook if configured
  try {
    const crmApiUrl =
      process.env.NEXT_PUBLIC_CRM_API_URL ||
      "https://niral-crm.vercel.app/api/webhooks/bharat-play";

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
        source: source || "Bharat Play Booking Form",
      }),
    });
  } catch (crmErr) {
    console.warn("CRM secondary webhook notice:", crmErr);
  }

  return { success: true, leadId };
}

export async function updatePaymentStatusInSupabase(
  identifier: { phone?: string | null; email?: string | null; orderId?: string | null },
  isPaid: boolean
) {
  if (!isPaid) return; // Strict requirement: Only successful payments change status to PAID. Never downgrade.

  try {
    const { phone, email } = identifier;
    const cleanPhone = phone ? phone.replace(/[^0-9]/g, "").slice(-10) : null;
    const cleanEmail = email ? email.trim().toLowerCase() : null;

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
