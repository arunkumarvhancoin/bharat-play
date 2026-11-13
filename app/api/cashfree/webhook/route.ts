import { NextResponse } from "next/server";
import { generatePaymentBadgeSvg } from "@/app/lib/cashfreeBadge";

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
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
    const baseSlot = linkNotes.slot || "Standard Slot";
    const baseMembers = `${linkNotes.attendeesCount || 1} Member(s)`;
    const eventTitle = linkNotes.eventTitle || data?.link_purpose || "Bharat Play Event";
    const refId = order?.order_id || data?.link_id;

    if (isSuccess) {
      try {
        const crmApiUrl =
          process.env.NEXT_PUBLIC_CRM_API_URL ||
          "https://niral-crm.vercel.app/api/webhooks/bharat-play";

        const paidBadge = generatePaymentBadgeSvg("PAID", {
          amount: targetAmount,
          refId,
          eventTitle,
        });

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
            paymentScreenshot: paidBadge,
            paymentProof: paidBadge,
            notes: `PAYMENT STATUS: PAID (Captured via Cashfree Webhook) | Event: ${eventTitle} | Ref ID: ${refId} | Status: PAID`,
            source: "Paid via Cashfree",
            paymentMethod: payment?.payment_group || "Cashfree",
            paymentStatus: "PAID",
          }),
        });
      } catch (crmErr) {
        console.warn("CRM webhook notification error:", crmErr);
      }
    } else {
      try {
        const crmApiUrl =
          process.env.NEXT_PUBLIC_CRM_API_URL ||
          "https://niral-crm.vercel.app/api/webhooks/bharat-play";

        const unpaidBadge = generatePaymentBadgeSvg("UNPAID", {
          amount: targetAmount,
          refId,
          eventTitle,
        });

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
            paymentScreenshot: unpaidBadge,
            paymentProof: unpaidBadge,
            notes: `PAYMENT STATUS: NOT PAID (Cashfree Webhook Event: ${eventType}) | Ref ID: ${refId}`,
            source: "Cashfree - Not Paid",
            paymentMethod: payment?.payment_group || "Cashfree",
            paymentStatus: "UNPAID",
          }),
        });
      } catch (crmErr) {
        console.warn("CRM webhook notification error:", crmErr);
      }
    }

    return NextResponse.json({ received: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Cashfree webhook processing error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

