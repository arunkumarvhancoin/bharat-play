import crypto from "crypto";
import { NextResponse } from "next/server";
import { updatePaymentStatusInSupabase, getCrmEndpoints } from "@/app/lib/supabaseRegistration";

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get("x-webhook-signature");
    const timestamp = request.headers.get("x-webhook-timestamp");

    const secretKey =
      process.env.CASHFREE_SECRET_KEY ||
      Buffer.from(
        "Y2Zza19tYV9wcm9kXzdlNzk3NDE4ZWIzNzQ0NDQ3N2Y5OWVjY2QxOGJmZTRkXzJiMjYxYmE0",
        "base64"
      ).toString("utf8");

    // Verify webhook signature if header is provided
    if (signature && timestamp && secretKey) {
      const expectedSignature = crypto
        .createHmac("sha256", secretKey)
        .update(timestamp + rawBody)
        .digest("base64");

      if (expectedSignature !== signature) {
        console.warn("Cashfree Webhook signature mismatch");
        return NextResponse.json({ error: "Invalid webhook signature" }, { status: 401 });
      }
    }

    let body;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const eventType = body?.type || body?.event || "";
    const data = body?.data || body;

    // Check payment status from webhook payload
    const isSuccess =
      eventType.includes("SUCCESS") ||
      data?.payment?.payment_status === "SUCCESS" ||
      data?.order?.order_status === "PAID" ||
      data?.link_status === "PAID";

    const customer = data?.customer_details || data?.order?.customer_details;
    const payment = data?.payment;
    const order = data?.order;
    const linkNotes = data?.link_notes || {};

    const targetAmount = payment?.payment_amount || order?.order_amount || data?.link_amount;
    const isGame =
      Boolean(order?.order_note?.toLowerCase().includes("game")) ||
      Boolean(order?.order_note?.toLowerCase().includes("city runners")) ||
      linkNotes.orderType === "game_purchase";
    const baseSlot = linkNotes.slot || (isGame ? "Physical Board Game Delivery" : "Standard Slot");
    const baseMembers = isGame
      ? `${linkNotes.attendeesCount || 1} Unit(s)`
      : `${linkNotes.attendeesCount || 1} Member(s)`;
    const eventTitle = linkNotes.eventTitle || order?.order_note || data?.link_purpose || "Bharat Play Order";
    const refId = order?.order_id || data?.link_id;

    const paymentStatus = isSuccess ? "PAID" : "NOT PAID";

    const crmUrls = getCrmEndpoints();

    if (isSuccess) {
      await updatePaymentStatusInSupabase(
        {
          phone: customer?.customer_phone,
          email: customer?.customer_email,
          orderId: refId,
          paymentId: payment?.cf_payment_id || payment?.payment_id,
          paymentMethod: payment?.payment_group || "Cashfree",
        },
        true
      );
    }

    for (const crmApiUrl of crmUrls) {
      try {
        await fetch(crmApiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: customer?.customer_name,
            email: customer?.customer_email,
            phone: customer?.customer_phone,
            members: baseMembers,
            slot: baseSlot,
            totalPayable: targetAmount,
            notes: `PAYMENT STATUS: ${paymentStatus} (Cashfree Webhook: ${eventType}) | ${isGame ? "Game Order" : "Event"}: ${eventTitle} | Ref: ${refId}`,
            source: isGame
              ? (isSuccess ? "City Runners Order - Paid" : "City Runners Order - Cashfree")
              : (isSuccess ? "Paid via Cashfree" : "Cashfree - Not Paid"),
            paymentMethod: payment?.payment_group || "Cashfree",
            paymentStatus: paymentStatus,
            orderId: refId,
            orderType: isGame ? "game_purchase" : "event_booking",
            productName: isGame ? "City Runners Board Game" : undefined,
          }),
        });
      } catch {
        // Continue to other endpoints
      }
    }

    return NextResponse.json({ received: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Cashfree webhook processing error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

