import { Suspense } from "react";
import ReservationStatusClient from "./ReservationStatusClient";

export const metadata = {
  title: "Reservation Status · Bharat Play",
  description: "Check your event reservation and payment confirmation status with Bharat Play.",
};

export default function ReservationStatusPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center pt-28 pb-20">
          <div className="text-center p-8 bg-white border-2 border-[#0C2444] rounded-2xl shadow-md max-w-md w-full mx-4">
            <div className="w-10 h-10 border-4 border-[#0C2444] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="font-mono text-xs uppercase tracking-wider text-slate-600 font-bold">
              Verifying reservation status...
            </p>
          </div>
        </div>
      }
    >
      <ReservationStatusClient />
    </Suspense>
  );
}

