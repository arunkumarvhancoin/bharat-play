import crypto from "crypto";
import { NextResponse } from "next/server";
import { generatePaymentBadgeSvg } from "@/app/lib/cashfreeBadge";
import { updatePaymentStatusInSupabase } from "@/app/lib/supabaseRegistration";

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get("x-webhook-signature");
    const timestamp = request.headers.get("x-webhook-timestamp");

    const secretKey =
      process.env.CASHFREE_SECRET_KEY ||
      Buffer.from(
        "Y2Zza19tYV90ZXN0XzZlMzlkMzFhMDExNTEyOGUyOTcyZDNhODlkYzk3ZjFhXzZmYzk5YzM0",
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
    const baseSlot = linkNotes.slot || "Standard Slot";
    const baseMembers = `${linkNotes.attendeesCount || 1} Member(s)`;
    const eventTitle = linkNotes.eventTitle || data?.link_purpose || "Bharat Play Event";
    const refId = order?.order_id || data?.link_id;

    const paymentStatus = isSuccess ? "PAID" : "NOT PAID";

    const crmApiUrl =
      process.env.NEXT_PUBLIC_CRM_API_URL ||
      "https://niral-crm.vercel.app/api/webhooks/bharat-play";

    const proofBadge = generatePaymentBadgeSvg(isSuccess ? "PAID" : "UNPAID", {
      amount: targetAmount,
      refId,
      eventTitle,
    });

    if (isSuccess) {
      await updatePaymentStatusInSupabase(
        {
          phone: customer?.customer_phone,
          email: customer?.customer_email,
          orderId: refId,
        },
        true
      );
    }

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
          paymentScreenshot: proofBadge,
          paymentProof: proofBadge,
          notes: `PAYMENT STATUS: ${paymentStatus} (Cashfree Webhook: ${eventType}) | Event: ${eventTitle} | Ref: ${refId}`,
          source: isSuccess ? "Paid via Cashfree" : "Cashfree - Not Paid",
          paymentMethod: payment?.payment_group || "Cashfree",
          paymentStatus: paymentStatus,
        }),
      });
    } catch (crmErr) {
      console.warn("CRM webhook notification notice:", crmErr);
    }

    return NextResponse.json({ received: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Cashfree webhook processing error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

