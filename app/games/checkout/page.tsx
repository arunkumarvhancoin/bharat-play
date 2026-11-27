import { Suspense } from "react";
import { Metadata } from "next";
import CheckoutClient from "../../checkout/CheckoutClient";

export const metadata: Metadata = {
  title: "Checkout — City Runners Board Game | Bharat Play",
  description:
    "Order the official tabletop simulation board game edition of City Runners. Fast pan-India delivery, secure online payment.",
};

export default function GamesCheckoutPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-28 pb-20 selection:bg-brand-orange selection:text-white">
      <Suspense
        fallback={
          <div className="max-w-[1100px] mx-auto px-4 py-20 text-center font-mono text-sm text-slate-500">
            <div className="w-10 h-10 border-4 border-brand-orange border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            Loading checkout...
          </div>
        }
      >
        <CheckoutClient />
      </Suspense>
    </main>
  );
}
