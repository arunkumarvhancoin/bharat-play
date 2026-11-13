import { NextRequest, NextResponse, connection } from "next/server";

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

    const appId = process.env.CASHFREE_APP_ID || "";
    const secretKey = process.env.CASHFREE_SECRET_KEY || "";
    const env = process.env.CASHFREE_ENV || "sandbox";

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

    // If paid, notify CRM of successful payment
    if (isPaid) {
      try {
        const crmApiUrl =
          process.env.NEXT_PUBLIC_CRM_API_URL ||
          "https://niral-crm.vercel.app/api/webhooks/bharat-play";

        await fetch(crmApiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: data.customer_details?.customer_name,
            email: data.customer_details?.customer_email,
            phone: data.customer_details?.customer_phone,
            totalPayable: data.link_amount || data.order_amount,
            notes: `Cashfree Payment Confirmed! ID: ${targetId} | Status: ${status}`,
            source: "Bharat Play Payment Verification",
          }),
        });
      } catch (crmErr) {
        console.warn("CRM payment update notice:", crmErr);
      }
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
      createdAt: data.link_created_at || data.created_at,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Verify Cashfree payment error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

