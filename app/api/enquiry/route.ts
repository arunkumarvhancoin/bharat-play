import { NextResponse } from "next/server";
import { saveRegistrationToSupabase } from "@/app/lib/supabaseRegistration";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      name,
      email,
      phone,
      gameId = "city-runners",
      gameTitle,
      productName,
      packageTitle,
      tier,
      quantity = 1,
      totalAmount,
      amount,
      deliveryAddress,
      notes,
      source = "Game Order Enquiry - Website",
    } = body;

    const customerName = (fullName || name || "").trim();
    const customerEmail = (email || "").trim().toLowerCase();
    const customerPhone = (phone || "").replace(/[^0-9]/g, "").slice(-10);

    if (!customerName || !customerEmail || customerPhone.length < 10) {
      return NextResponse.json(
        { error: "Valid customer name, email, and 10-digit phone number are required." },
        { status: 400 }
      );
    }

    const resolvedProduct =
      productName ||
      gameTitle ||
      (packageTitle ? `City Runners (${packageTitle})` : "City Runners Board Game");

    const totalVal = parseFloat(String(totalAmount || amount || 0)) || 0;
    const orderId = `bp_enq_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;

    // Persist cleanly to Supabase (orders, contacts & leads) and dispatch to Niral CRM
    const result = await saveRegistrationToSupabase({
      fullName: customerName,
      email: customerEmail,
      phone: customerPhone,
      members: `${quantity} ${quantity === 1 ? "Unit" : "Units"}`,
      slot: packageTitle || tier || "Standard Box Edition",
      totalPayable: totalVal,
      paymentStatus: "NOT PAID",
      orderId: orderId,
      notes: notes || `Direct Enquiry for ${resolvedProduct} (${gameId})`,
      eventTitle: resolvedProduct,
      source: source,
      orderType: "game_purchase",
      productName: resolvedProduct,
      deliveryAddress: deliveryAddress,
    });

    return NextResponse.json({
      success: true,
      orderId: orderId,
      message: "Enquiry successfully saved in CRM.",
      result,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Enquiry API error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
