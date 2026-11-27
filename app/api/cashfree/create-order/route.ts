import { NextResponse } from "next/server";
import { saveRegistrationToSupabase } from "@/app/lib/supabaseRegistration";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      eventTitle,
      gameTitle,
      orderType = "event_booking",
      name,
      email,
      phone,
      attendeesCount = 1,
      quantity = 1,
      slot = "Standard Slot",
      amount,
      returnUrl,
      deliveryAddress,
      notes,
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
        "MTUyNjQ4MjA5OTc0ZDg5N2FmYmZjYzVlNzQ3Mjg0NjI1MQ==",
        "base64"
      ).toString("utf8");
    const secretKey =
      process.env.CASHFREE_SECRET_KEY ||
      Buffer.from(
        "Y2Zza19tYV9wcm9kXzdlNzk3NDE4ZWIzNzQ0NDQ3N2Y5OWVjY2QxOGJmZTRkXzJiMjYxYmE0",
        "base64"
      ).toString("utf8");
    const env = process.env.CASHFREE_ENV || "production";

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
    const productionDomain = process.env.NEXT_PUBLIC_APP_URL || "https://thebharatplay.com";
    let baseUrlForReturn = productionDomain;
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

    const isGamePurchase = orderType === "game_purchase" || Boolean(gameTitle) || Boolean(deliveryAddress);
    const eventSlug = body.eventSlug || (body.eventId ? String(body.eventId) : "saturdays-4-social-games");
    const defaultReturnUrl = isGamePurchase
      ? `${baseUrlForReturn}/checkout?order_id=${orderId}`
      : `${baseUrlForReturn}/events/${eventSlug}?order_id=${orderId}`;

    const rawReturnUrl = returnUrl
      ? returnUrl.replace("{order_id}", orderId).replace("{link_id}", orderId)
      : defaultReturnUrl;

    // In production, Cashfree strictly enforces that return_url and notify_url MUST use HTTPS.
    // If testing on localhost or HTTP, convert to HTTPS production domain to satisfy Cashfree.
    const enforceHttps = (urlStr: string): string => {
      if (!urlStr) return productionDomain;
      let sanitized = urlStr.replace(/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?/i, productionDomain);
      sanitized = sanitized.replace(/^http:\/\//i, "https://");
      return sanitized;
    };

    const finalReturnUrl = env === "production" ? enforceHttps(rawReturnUrl) : rawReturnUrl;
    const finalNotifyUrl = env === "production" 
      ? enforceHttps(`${baseUrlForReturn}/api/cashfree/webhook`) 
      : `${baseUrlForReturn}/api/cashfree/webhook`;

    const orderAmount = parseFloat(amount);
    const resolvedItemTitle = gameTitle || eventTitle || (isGamePurchase ? "City Runners Board Game" : "Seat Reservation");

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
        notify_url: finalNotifyUrl,
      },
      order_note: (isGamePurchase ? `Bharat Play Game: ${resolvedItemTitle}` : `Bharat Play: ${resolvedItemTitle}`)
        .replace(/[^\w\s:.-]/g, "")
        .slice(0, 100),
      order_tags: {
        order_type: isGamePurchase ? "game_purchase" : "event_booking",
        ...(orderAmount === 5 ? { test_order: "true" } : {}),
      },
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

    // Persist registration / order directly into Supabase with initial "NOT PAID" status
    try {
      await saveRegistrationToSupabase({
        fullName: name.trim(),
        email: email.trim(),
        phone: cleanPhone,
        members: isGamePurchase
          ? `${quantity} ${quantity === 1 ? "Unit" : "Units"}`
          : `${attendeesCount} ${attendeesCount === 1 ? "Member (Solo)" : `Members (${attendeesCount})`}`,
        slot: isGamePurchase ? "Physical Board Game Delivery" : slot,
        totalPayable: orderAmount,
        paymentStatus: "NOT PAID",
        orderId: data.order_id,
        eventTitle: resolvedItemTitle,
        source: isGamePurchase ? "City Runners Order - Cashfree" : "Cashfree - Not Paid",
        orderType: isGamePurchase ? "game_purchase" : "event_booking",
        productName: resolvedItemTitle,
        deliveryAddress: deliveryAddress,
        notes: notes,
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

