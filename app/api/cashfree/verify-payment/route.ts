import { NextRequest, NextResponse, connection } from "next/server";
import { updatePaymentStatusInSupabase, getCrmEndpoints } from "@/app/lib/supabaseRegistration";

export async function GET(request: NextRequest) {
  await connection();
  try {
    const searchParams = request.nextUrl.searchParams;
    const linkId = searchParams.get("link_id");
    const orderId = searchParams.get("order_id");

    const targetId = linkId || orderId;

    if (!targetId) {
      return NextResponse.json(
        { error: "link_id or order_id parameter is required" },
        { status: 400 }
      );
    }

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
      return NextResponse.json(
        { error: "Payment gateway credentials not configured" },
        { status: 500 }
      );
    }

    const baseUrl =
      env === "production"
        ? "https://api.cashfree.com/pg"
        : "https://sandbox.cashfree.com/pg";

    // Check by link_id if available, otherwise by order_id
    const endpoint = linkId
      ? `${baseUrl}/links/${encodeURIComponent(linkId)}`
      : `${baseUrl}/orders/${encodeURIComponent(targetId)}`;

    const res = await fetch(endpoint, {
      method: "GET",
      headers: {
        "x-client-id": appId,
        "x-client-secret": secretKey,
        "x-api-version": "2023-08-01",
      },
      cache: "no-store",
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: data.message || "Failed to retrieve payment record", details: data },
        { status: res.status }
      );
    }

    // In Cashfree Links API: link_status can be "PAID", "ACTIVE", "EXPIRED", "CANCELLED"
    // In Cashfree Orders API: order_status can be "PAID", "ACTIVE", "EXPIRED"
    const status = (data.link_status || data.order_status || "UNKNOWN").toUpperCase();
    const isPaid = status === "PAID" || (data.link_amount_paid && data.link_amount_paid > 0);

    // Notify CRM with detailed status
    try {
      const crmUrls = getCrmEndpoints();

      const targetAmount = data.link_amount_paid || data.link_amount || data.order_amount;
      const isGame =
        Boolean(data.order_tags?.order_type === "game_purchase") ||
        Boolean(data.order_note?.toLowerCase().includes("game")) ||
        Boolean(data.order_note?.toLowerCase().includes("city runners")) ||
        Boolean(data.order_note?.toLowerCase().includes("edition")) ||
        Boolean(data.order_note?.toLowerCase().includes("unit")) ||
        data.link_notes?.orderType === "game_purchase" ||
        (!data.link_notes?.eventId && !data.order_note?.toLowerCase().includes("workshop"));
      const baseSlot = data.link_notes?.slot || (isGame ? "Physical Board Game Delivery" : "Standard Slot");
      const baseMembers = isGame
        ? `${data.link_notes?.attendeesCount || 1} Unit(s)`
        : `${data.link_notes?.attendeesCount || 1} Member(s)`;
      const eventTitle = data.link_notes?.eventTitle || data.order_note || data.link_purpose || "Bharat Play Order";

      if (isPaid) {
        await updatePaymentStatusInSupabase(
          {
            phone: data.customer_details?.customer_phone,
            email: data.customer_details?.customer_email,
            orderId: targetId,
            paymentId: data.cf_payment_id || data.payment_id || targetId,
            paymentMethod: data.payment_group || "Cashfree",
          },
          true
        );

        for (const crmApiUrl of crmUrls) {
          try {
            await fetch(crmApiUrl, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                fullName: data.customer_details?.customer_name,
                email: data.customer_details?.customer_email,
                phone: data.customer_details?.customer_phone,
                members: baseMembers,
                slot: baseSlot,
                totalPayable: targetAmount,
                notes: `PAYMENT STATUS: PAID (Verified via Cashfree) | ${isGame ? "Game Order" : "Event"}: ${eventTitle} | Amount Paid: ₹${targetAmount} | Ref: ${targetId} | Status: PAID`,
                source: isGame ? "City Runners Order - Cashfree" : "Paid via Cashfree",
                paymentMethod: "Cashfree",
                paymentStatus: "PAID",
                orderId: targetId,
                orderType: isGame ? "game_purchase" : "event_booking",
                productName: isGame ? "City Runners Board Game" : undefined,
              }),
            });
          } catch {
            // Continue
          }
        }
      } else {
        for (const crmApiUrl of crmUrls) {
          try {
            await fetch(crmApiUrl, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                fullName: data.customer_details?.customer_name,
                email: data.customer_details?.customer_email,
                phone: data.customer_details?.customer_phone,
                members: baseMembers,
                slot: baseSlot,
                totalPayable: targetAmount,
                notes: `PAYMENT STATUS: NOT PAID (Incomplete / Cancelled via Cashfree) | ${isGame ? "Game Order" : "Event"}: ${eventTitle} | Amount Pending: ₹${targetAmount} | Ref: ${targetId} | Status: ${status}`,
                source: isGame ? "City Runners Order - Cashfree" : "Cashfree - Not Paid",
                paymentMethod: "Cashfree",
                paymentStatus: "NOT PAID",
                orderId: targetId,
                orderType: isGame ? "game_purchase" : "event_booking",
                productName: isGame ? "City Runners Board Game" : undefined,
              }),
            });
          } catch {
            // Continue
          }
        }
      }
    } catch (crmErr) {
      console.warn("CRM payment update notice:", crmErr);
    }

    return NextResponse.json({
      success: true,
      isPaid,
      status,
      linkId: data.link_id || data.order_id,
      amount: data.link_amount || data.order_amount,
      amountPaid: data.link_amount_paid || (isPaid ? data.order_amount : 0),
      currency: data.link_currency || data.order_currency || "INR",
      customer: data.customer_details,
      notes: data.link_notes || {},
      purpose: data.link_purpose || data.order_note,
      paymentUrl: data.link_url || null,
      createdAt: data.link_created_at || data.created_at,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Verify Cashfree payment error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

