import { NextResponse } from "next/server";
import { saveRegistrationToSupabase } from "@/app/lib/supabaseRegistration";

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
    const orderId = uniqueId;

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
    const defaultReturnUrl = `${baseUrlForReturn}/events/${eventSlug}?order_id=${orderId}`;

    const finalReturnUrl = returnUrl
      ? returnUrl.replace("{order_id}", orderId).replace("{link_id}", orderId)
      : defaultReturnUrl;

    // For test payment: Cashfree strictly requires order_amount >= 1.00 INR.
    // Set to 1.00 INR for testing without modifying frontend website pricing details.
    const orderAmount = 1.00;

    const payload = {
      order_id: orderId,
      order_amount: orderAmount,
      order_currency: "INR",
      customer_details: {
        customer_id: `cust_${cleanPhone}`,
        customer_name: name.trim(),
        customer_email: email.trim().toLowerCase(),
        customer_phone: cleanPhone,
      },
      order_meta: {
        return_url: finalReturnUrl,
        notify_url: `${baseUrlForReturn}/api/cashfree/webhook`,
      },
      order_note: `Bharat Play: ${eventTitle || "Seat Reservation"} (${attendeesCount} pax)`.slice(0, 100),
    };

    const res = await fetch(`${baseUrl}/orders`, {
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
      console.error("Cashfree order creation failed:", data);
      return NextResponse.json(
        {
          error: data.message || "Failed to initialize payment gateway",
          details: data,
        },
        { status: res.status }
      );
    }

    // Persist registration directly into Supabase with initial "NOT PAID" status
    try {
      await saveRegistrationToSupabase({
        fullName: name.trim(),
        email: email.trim(),
        phone: cleanPhone,
        members: `${attendeesCount} ${
          attendeesCount === 1 ? "Member (Solo)" : `Members (${attendeesCount})`
        }`,
        slot: slot,
        totalPayable: orderAmount,
        paymentStatus: "NOT PAID",
        orderId: data.order_id,
        eventTitle,
        source: "Cashfree - Not Paid",
      });
    } catch (crmErr) {
      console.warn("Background CRM lead sync notice:", crmErr);
    }

    return NextResponse.json({
      success: true,
      orderId: data.order_id,
      paymentSessionId: data.payment_session_id,
      amount: data.order_amount,
      cashfreeEnv: env,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Create Cashfree order error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

