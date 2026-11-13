"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  Calendar,
  MapPin,
  Users,
  Download,
  ArrowRight,
  RefreshCw,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { EVENTS_DATA, ScheduledEvent } from "../../data/events";

interface PaymentDetails {
  success: boolean;
  isPaid: boolean;
  status: string;
  linkId: string;
  amount: number;
  amountPaid: number;
  currency: string;
  customer?: {
    customer_name?: string;
    customer_email?: string;
    customer_phone?: string;
  };
  notes?: {
    eventId?: string;
    eventTitle?: string;
    slot?: string;
    attendeesCount?: string;
  };
  purpose?: string;
  createdAt?: string;
}

export default function ReservationStatusClient() {
  const searchParams = useSearchParams();
  const linkId = searchParams.get("link_id") || "";
  const orderId = searchParams.get("order_id") || "";
  const eventId = searchParams.get("event_id") || "";

  const [loading, setLoading] = useState(Boolean(linkId || orderId));
  const [data, setData] = useState<PaymentDetails | null>(null);
  const [error, setError] = useState<string | null>(
    !linkId && !orderId ? "No reservation or order ID found in the link." : null
  );

  const matchedEvent = EVENTS_DATA.find(
    (e: ScheduledEvent) => e.id === eventId || e.id === data?.notes?.eventId
  );

  const fetchStatus = useCallback(() => {
    const targetId = linkId || orderId;
    if (!targetId) {
      setLoading(false);
      setError("No reservation or order ID found in the link.");
      return;
    }

    setLoading(true);
    setError(null);

    fetch(
      `/api/cashfree/verify-payment?${linkId ? `link_id=${encodeURIComponent(linkId)}` : `order_id=${encodeURIComponent(orderId)}`}`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.error) {
          setError(json.error || "Unable to verify reservation details.");
        } else {
          setData(json);
        }
      })
      .catch((err: unknown) => {
        const msg = err instanceof Error ? err.message : "Failed to load status";
        setError(msg);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [linkId, orderId]);

  useEffect(() => {
    if (!linkId && !orderId) return;

    let isMounted = true;
    fetch(
      `/api/cashfree/verify-payment?${linkId ? `link_id=${encodeURIComponent(linkId)}` : `order_id=${encodeURIComponent(orderId)}`}`
    )
      .then((res) => res.json())
      .then((json) => {
        if (!isMounted) return;
        if (json.error) {
          setError(json.error);
        } else {
          setData(json);
        }
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err instanceof Error ? err.message : "Failed to load status");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [linkId, orderId]);

  const downloadCalendarFile = () => {
    if (!matchedEvent) return;
    const startTimeFormatted = matchedEvent.date.replace(/-/g, "") + "T103000Z";
    const endTimeFormatted = matchedEvent.date.replace(/-/g, "") + "T133000Z";

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Bharat Play//Event Schedule//EN",
      "BEGIN:VEVENT",
      `UID:${matchedEvent.id}-${Date.now()}@bharatplay.com`,
      `DTSTAMP:${startTimeFormatted}`,
      `DTSTART:${startTimeFormatted}`,
      `DTEND:${endTimeFormatted}`,
      `SUMMARY:${matchedEvent.title} - Bharat Play`,
      `DESCRIPTION:${matchedEvent.description} Slot: ${data?.notes?.slot || "Standard Slot"}`,
      `LOCATION:${matchedEvent.venueAddress || matchedEvent.venue}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `${matchedEvent.id}-confirmed.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isConfirmed = data?.isPaid || data?.status === "PAID";

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 pt-28 sm:pt-32 pb-20 selection:bg-orange-500 selection:text-white px-4">
      <div className="max-w-2xl mx-auto">
        {loading ? (
          <div className="bg-white border-2 border-[#0C2444] rounded-[24px] p-8 sm:p-12 text-center shadow-lg sm:[box-shadow:10px_10px_0px_#0C2444]">
            <div className="w-12 h-12 border-4 border-[#0C2444] border-t-transparent rounded-full animate-spin mx-auto mb-5" />
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-navy mb-2">
              Verifying Payment with Cashfree...
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Please wait while we confirm your transaction and reserve your seats.
            </p>
          </div>
        ) : error ? (
          <div className="bg-white border-2 border-rose-600 rounded-[24px] p-8 sm:p-10 text-center shadow-lg sm:[box-shadow:10px_10px_0px_#dc2626]">
            <div className="w-14 h-14 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-2">
              Verification Notice
            </h2>
            <p className="text-sm text-slate-600 mb-6">{error}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={fetchStatus}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0C2444] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#13335c] transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retry Verification</span>
              </button>
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Browse All Events</span>
              </Link>
            </div>
          </div>
        ) : isConfirmed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white border-2 border-emerald-600 rounded-[26px] overflow-hidden shadow-xl sm:[box-shadow:12px_12px_0px_#15803D]"
          >
            {/* Header Badge */}
            <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-700 text-white px-6 py-8 text-center relative overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center mx-auto mb-3.5 shadow-md">
                <CheckCircle2 className="w-9 h-9 text-white" />
              </div>
              <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-emerald-100 block mb-1">
                ONLINE PAYMENT CONFIRMED · CASHFREE
              </span>
              <h1 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                Seat Reservation Confirmed! 🎉
              </h1>
              <p className="text-xs sm:text-sm text-emerald-50 mt-1 max-w-md mx-auto">
                Thank you, {data?.customer?.customer_name || "Gamer"}! Your reservation is officially locked in.
              </p>
            </div>

            {/* Details Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Payment Receipt Box */}
              <div className="bg-[#FAFDF9] border border-emerald-200 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Total Amount Paid
                  </span>
                  <div className="font-display text-2xl sm:text-3xl font-black text-[#0C2444]">
                    ₹{data?.amountPaid || data?.amount}
                  </div>
                  <span className="font-mono text-[10px] text-emerald-700 font-semibold">
                    ✓ Verified via Cashfree Sandbox
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Reference ID
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-800 bg-white border border-slate-200 px-2.5 py-1 rounded-md block mt-1">
                    {data?.linkId}
                  </span>
                </div>
              </div>

              {/* Event Summary Card */}
              {matchedEvent && (
                <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 bg-slate-50/60 space-y-3">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-brand-orange block">
                    RESERVED EVENT DETAILS
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-brand-navy">
                    {matchedEvent.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 font-medium">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>{matchedEvent.formattedDate} ({matchedEvent.time})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="truncate">{matchedEvent.venue}, {matchedEvent.city}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>
                        {data?.notes?.attendeesCount || "1"} Seat(s) Reserved
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Slot: {data?.notes?.slot || matchedEvent.slots[0] || "Standard"}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Next Steps / Reassurance */}
              <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 text-xs text-amber-950 space-y-1">
                <p className="font-bold flex items-center gap-1.5 text-amber-900">
                  <span>📱</span> What Happens Next:
                </p>
                <p className="text-slate-700 leading-relaxed">
                  1. A confirmation receipt has been generated for your transaction.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  2. We have registered your pass in our system. Just mention your phone number or name at the venue entrance.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  3. If you have any questions or group requests, ping us directly on WhatsApp (+91 82371 32553).
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                {matchedEvent && (
                  <button
                    type="button"
                    onClick={downloadCalendarFile}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#0C2444] hover:bg-[#13335c] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-sky-300" />
                    <span>Add to Calendar (.ics)</span>
                  </button>
                )}

                <a
                  href={`https://wa.me/918237132553?text=${encodeURIComponent(
                    `Hi Bharat Play! I just completed my online reservation via Cashfree for ${
                      matchedEvent?.title || "your event"
                    } (Ref: ${data?.linkId}). Looking forward to joining!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>

              <div className="text-center pt-2">
                <Link
                  href={matchedEvent ? `/events/${matchedEvent.id}` : "/events"}
                  className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-slate-500 hover:text-brand-orange transition-colors uppercase tracking-wider"
                >
                  <span>Return to Event Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Payment Pending or Incomplete Screen */
          <div className="bg-white border-2 border-amber-500 rounded-[26px] overflow-hidden shadow-xl sm:[box-shadow:12px_12px_0px_#f59e0b]">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-amber-100 block mb-1">
                TRANSACTION STATUS
              </span>
              <h1 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                Payment {data?.status === "ACTIVE" ? "Awaiting Payment" : data?.status}
              </h1>
              <p className="text-xs sm:text-sm text-amber-50 mt-1 max-w-md mx-auto">
                Your payment session was initiated but not completed yet.
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-5 text-center">
              <p className="text-xs sm:text-sm text-slate-600">
                If money was deducted from your account, Cashfree will automatically reconcile and confirm your reservation within a few minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  type="button"
                  onClick={fetchStatus}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0C2444] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#13335c] transition-all cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Check Status Again</span>
                </button>

                <Link
                  href={matchedEvent ? `/events/${matchedEvent.id}` : "/events"}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>Retry Booking</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

