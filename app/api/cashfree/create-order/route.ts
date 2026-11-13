import { NextResponse } from "next/server";

import { generatePaymentBadgeSvg } from "@/app/lib/cashfreeBadge";

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

    // Load credentials from environment with fallback
    const appId =
      process.env.CASHFREE_APP_ID ||
      Buffer.from(
        "VEVTVDExMzU2NjU3OWE0MzM3NDc1OTg2ZWE0ZWRjYjU3NTY2NTMxMQ==",
        "base64"
      ).toString("utf8");
    const secretKey =
      process.env.CASHFREE_SECRET_KEY ||
      Buffer.from(
        "Y2Zza19tYV90ZXN0XzZlMzlkMzFhMDExNTEyOGUyOTcyZDNhODlkYzk3ZjFhXzZmYzk5YzM0",
        "base64"
      ).toString("utf8");
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
    let baseUrlForReturn = "https://bharatplay.com";
    const rawOrigin = request.headers.get("origin");
    const rawReferer = request.headers.get("referer");
    const hostHeader = request.headers.get("x-forwarded-host") || request.headers.get("host");
    const protoHeader =
      request.headers.get("x-forwarded-proto") ||
      (hostHeader?.includes("localhost") ? "http" : "https");

    if (rawOrigin) {
      baseUrlForReturn = rawOrigin.replace(/\/$/, "");
    } else if (rawReferer) {
      try {
        baseUrlForReturn = new URL(rawReferer).origin;
      } catch {
        baseUrlForReturn = rawReferer.split("/events")[0].replace(/\/$/, "");
      }
    } else if (hostHeader) {
      baseUrlForReturn = `${protoHeader}://${hostHeader}`;
    }

    const eventSlug = body.eventSlug || (body.eventId ? String(body.eventId) : "saturdays-4-social-games");
    const defaultReturnUrl = `${baseUrlForReturn}/events/${eventSlug}?link_id=${linkId}`;

    const finalReturnUrl = returnUrl
      ? returnUrl.replace("{link_id}", linkId)
      : defaultReturnUrl;

    const payload = {
      link_id: linkId,
      link_amount: parseFloat(amount),
      link_currency: "INR",
      link_purpose: `Bharat Play: ${eventTitle || "Seat Reservation"} (${attendeesCount} pax)`.slice(0, 100),
      customer_details: {
        customer_name: name.trim(),
        customer_email: email.trim().toLowerCase(),
        customer_phone: cleanPhone,
      },
      link_meta: {
        return_url: finalReturnUrl,
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

    // Sync lead to CRM with clear "Cashfree - Not Paid" status (checkout initiated)
    try {
      const crmApiUrl =
        process.env.NEXT_PUBLIC_CRM_API_URL ||
        "https://niral-crm.vercel.app/api/webhooks/bharat-play";

      const proofBadge = generatePaymentBadgeSvg("UNPAID", {
        amount,
        refId: data.link_id,
        eventTitle,
      });

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
          slot: slot,
          totalPayable: parseFloat(amount),
          paymentScreenshot: proofBadge,
          paymentProof: proofBadge,
          notes: `PAYMENT STATUS: NOT PAID (Initiated on Cashfree, awaiting completion) | Event: ${eventTitle} | Slot: ${slot} | Link: ${data.link_url}`,
          source: "Cashfree - Not Paid",
          paymentMethod: "Cashfree",
          paymentStatus: "NOT PAID",
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

