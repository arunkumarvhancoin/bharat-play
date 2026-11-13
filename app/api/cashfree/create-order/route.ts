import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      eventId,
      eventTitle,
      name,
      email,
      phone,
      attendeesCount = 1,
      slot = "Standard Slot",
      amount,
      returnUrl,
    } = body;

    if (!name || !email || !phone || !amount) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, phone, amount)" },
        { status: 400 }
      );
    }

    // Clean and validate phone number (Must be 10 digits for Indian numbers)
    const cleanPhone = phone.replace(/[^0-9]/g, "").slice(-10);
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit mobile number" },
        { status: 400 }
      );
    }

    const appId = process.env.CASHFREE_APP_ID || "";
    const secretKey = process.env.CASHFREE_SECRET_KEY || "";
    const env = process.env.CASHFREE_ENV || "sandbox";

    if (!appId || !secretKey) {
      console.error("Cashfree credentials missing in environment variables");
      return NextResponse.json(
        { error: "Payment gateway credentials not configured" },
        { status: 500 }
      );
    }

    const baseUrl =
      env === "production"
        ? "https://api.cashfree.com/pg"
        : "https://sandbox.cashfree.com/pg";

    const uniqueId = `bp_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const linkId = uniqueId;

    // Determine the return URL for the user after payment completion
    const origin =
      request.headers.get("origin") ||
      request.headers.get("referer") ||
      "https://bharatplay.com";

    const defaultReturnUrl = `${origin.replace(/\/$/, "")}/reservation/status?link_id={link_id}&event_id=${encodeURIComponent(
      eventId || ""
    )}`;

    const finalReturnUrl = returnUrl || defaultReturnUrl;

    const payload = {
      link_id: linkId,
      link_amount: parseFloat(amount),
      link_currency: "INR",
      link_purpose: `Bharat Play: ${eventTitle || "Seat Reservation"} (${attendeesCount} pax)`,
      customer_details: {
        customer_name: name.trim(),
        customer_email: email.trim().toLowerCase(),
        customer_phone: cleanPhone,
      },
      link_meta: {
        return_url: finalReturnUrl,
        upi_intent: "false",
      },
      link_notes: {
        eventId: eventId || "general",
        eventTitle: eventTitle || "Bharat Play Event",
        slot: slot || "General",
        attendeesCount: String(attendeesCount),
      },
      link_notify: {
        send_sms: false,
        send_email: false,
      },
    };

    const res = await fetch(`${baseUrl}/links`, {
      method: "POST",
      headers: {
        "x-client-id": appId,
        "x-client-secret": secretKey,
        "x-api-version": "2023-08-01",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Cashfree link creation failed:", data);
      return NextResponse.json(
        {
          error: data.message || "Failed to initialize payment gateway",
          details: data,
        },
        { status: res.status }
      );
    }

    // Optional: Sync lead to CRM as payment initiated
    try {
      const crmApiUrl =
        process.env.NEXT_PUBLIC_CRM_API_URL ||
        "https://niral-crm.vercel.app/api/webhooks/bharat-play";

      await fetch(crmApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: name.trim(),
          email: email.trim(),
          phone: cleanPhone,
          members: `${attendeesCount} ${
            attendeesCount === 1 ? "Member (Solo)" : `Members (${attendeesCount})`
          }`,
          slot,
          totalPayable: parseFloat(amount),
          notes: `Event: ${eventTitle} | Slot: ${slot} | Cashfree Link: ${data.link_url} | Status: Payment Initiated`,
          source: "Bharat Play Cashfree Checkout",
        }),
      });
    } catch (crmErr) {
      console.warn("Background CRM lead sync notice:", crmErr);
    }

    return NextResponse.json({
      success: true,
      paymentUrl: data.link_url,
      linkId: data.link_id,
      amount: data.link_amount,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Create Cashfree order error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

