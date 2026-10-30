"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  X,
  Clock,
  MapPin,
  Users,
  Sparkles,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getUpcomingEvents, ScheduledEvent } from "../data/events";

interface EventsCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EventsCalendarModal({ isOpen, onClose }: EventsCalendarModalProps) {
  const router = useRouter();
  const upcomingEvents = getUpcomingEvents();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleSelectEvent = (eventId: string) => {
    onClose();
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("start-navigation", { detail: { url: `/events/${eventId}` } })
      );
    }
    router.push(`/events/${eventId}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container: Physical Offset Card with Hard Shadow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
            className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#FAF8F5] border-2 border-[#0C2444] rounded-[26px] z-10 overflow-hidden"
            style={{ boxShadow: "14px 14px 0px #0C2444" }}
          >
            {/* Header: Cheerful Warm Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-amber-200/60 bg-white">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#C2410C] text-white flex items-center justify-center text-xl shadow-xs shrink-0">
                  🎲
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C2410C] block">
                      UPCOMING COMMUNITY SESSIONS
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase px-2.5 py-0.5 bg-[#15803D] text-white rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Live Sessions
                    </span>
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Events Calendar
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0C2444] text-white text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Upcoming Sessions ({upcomingEvents.length})</span>
                </span>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close modal"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center text-lg transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Body: Warm & Friendly Event Cards */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4" data-lenis-prevent>
              <p className="text-xs sm:text-sm text-slate-600">
                Click on any upcoming session below to view details and reserve your pass:
              </p>

              <div className="space-y-4">
                {upcomingEvents.map((event: ScheduledEvent, idx: number) => {
                  const cardStyle = idx % 2 === 0
                    ? { border: "border-[#C2410C]", shadow: "#C2410C" }
                    : { border: "border-[#0C2444]", shadow: "#0C2444" };

                  return (
                    <div
                      key={event.id}
                      onClick={() => handleSelectEvent(event.id)}
                      className={`bg-white border-2 ${cardStyle.border} rounded-[22px] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer group relative overflow-hidden`}
                      style={{ boxShadow: `8px 8px 0px ${cardStyle.shadow}` }}
                    >
                      {/* Badges Row - Matte Solid 3 Colors */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold px-3 py-1 bg-[#C2410C] text-white rounded-full">
                            🎲 {event.category}
                          </span>
                          <span className="text-xs font-bold px-3 py-1 bg-[#0C2444] text-white rounded-full flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-amber-300" />
                            {event.badge || "Every Saturday"}
                          </span>
                          <span className="text-xs font-medium px-3 py-1 bg-white text-slate-700 border border-slate-300 rounded-full">
                            📍 {event.city}
                          </span>
                        </div>

                        <span className="text-xs font-bold text-white bg-[#15803D] px-3 py-1 rounded-full">
                          {event.price}
                        </span>
                      </div>

                      {/* Event Content */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        {/* Matte Saffron Date Block */}
                        <div className="md:col-span-2 flex md:flex-col items-center justify-center p-3 bg-[#C2410C] text-white rounded-2xl shadow-xs text-center shrink-0">
                          <span className="text-[10px] font-bold uppercase tracking-wider opacity-90 leading-none mr-2 md:mr-0">
                            {event.formattedDate.split(",")[1]?.trim().split(" ")[1] || "NOV"}
                          </span>
                          <span className="font-display text-xl sm:text-2xl font-black leading-none my-1 mr-2 md:mr-0">
                            {event.formattedDate.split(",")[1]?.trim().split(" ")[0] || event.date.split("-")[2]}
                          </span>
                          <span className="text-[10px] font-bold uppercase opacity-90 leading-none">
                            {event.formattedDate.split(",")[0]?.slice(0, 3)}
                          </span>
                        </div>

                        {/* Info */}
                        <div className="md:col-span-7">
                          <div className="text-xs text-slate-500 flex items-center gap-2 mb-1">
                            <Clock className="w-3.5 h-3.5 text-[#C2410C] shrink-0" />
                            <span>{event.time}</span>
                          </div>

                          <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#C2410C] transition-colors mb-1.5 leading-snug">
                            {event.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mb-2">
                            {event.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-[#C2410C]" />
                              <span className="font-medium text-slate-700 truncate max-w-[200px]">{event.venue}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3.5 h-3.5 text-[#C2410C]" />
                              <span>{event.capacity}</span>
                            </span>
                          </div>
                        </div>

                        {/* CTA Button: Solid Matte Saffron */}
                        <div className="md:col-span-3 flex md:flex-col items-center justify-end gap-2 pt-2 md:pt-0">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectEvent(event.id);
                            }}
                            className="w-full inline-flex items-center justify-center gap-1.5 bg-[#C2410C] hover:bg-[#a3360a] text-white font-display text-xs font-bold py-3 px-5 rounded-full shadow-xs transition-all cursor-pointer"
                          >
                            <span>
                              {event.badge?.toLowerCase().includes("early bird")
                                ? "EARLY BIRD PASS"
                                : event.price.toLowerCase().includes("free")
                                ? "BOOK FREE SEAT"
                                : "RESERVE SEAT"}
                            </span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t border-amber-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <span className="text-xs text-slate-600">
                Want to host a playful serious game session for your team or college?
              </span>
              <a
                href={`https://wa.me/917397468732?text=${encodeURIComponent(
                  "Hi Bharat Play! I would like to inquire about hosting a serious game session for our college/organization."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#15803D] hover:bg-[#166534] text-white font-bold text-xs shadow-xs transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

