import { NextResponse } from "next/server";
import { saveRegistrationToSupabase } from "@/app/lib/supabaseRegistration";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      members = "1 Member (Solo)",
      slot = "Standard Slot",
      totalPayable = 649,
      paymentStatus = "NOT PAID",
      orderId,
      eventTitle,
      source,
    } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required" },
        { status: 400 }
      );
    }

    const result = await saveRegistrationToSupabase({
      fullName,
      email,
      phone,
      members,
      slot,
      totalPayable: parseFloat(totalPayable) || 0,
      paymentStatus: paymentStatus === "PAID" ? "PAID" : "NOT PAID",
      orderId,
      eventTitle,
      source,
    });

    return NextResponse.json(result);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Internal registration error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
