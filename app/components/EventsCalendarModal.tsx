"use client";

import { useState, useEffect } from "react";
import {
  X,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Users,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { EVENTS_DATA, ScheduledEvent } from "../data/events";

interface EventsCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function EventsCalendarModal({ isOpen, onClose }: EventsCalendarModalProps) {
  // Default to October 2026 (matching active event data)
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(9); // 0-indexed: 9 = October
  const [selectedDate, setSelectedDate] = useState("2026-10-24");

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

  // Navigation handlers
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  // Calendar math
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  // Adjust so Monday is 0 (Sunday becomes 6)
  const startOffset = (firstDayIndex + 6) % 7;
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  const formatDayISO = (day: number) => {
    const mm = String(currentMonth + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    return `${currentYear}-${mm}-${dd}`;
  };

  const hasEventOnDate = (isoDate: string) => {
    return EVENTS_DATA.some((e) => e.date === isoDate);
  };

  const eventsOnSelectedDate = EVENTS_DATA.filter((e) => e.date === selectedDate);

  // Format selected date display
  const formatSelectedDateDisplay = (isoDate: string) => {
    const [y, m, d] = isoDate.split("-").map(Number);
    const dateObj = new Date(y, m - 1, d);
    return dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Upcoming upcoming sessions list (for quick selection)
  const upcomingEvents = EVENTS_DATA.filter(
    (e) => e.date >= "2026-10-01" && e.date !== selectedDate
  ).slice(0, 3);

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
            className="fixed inset-0 bg-brand-navy/70 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white border-2 border-brand-navy rounded-sm shadow-2xl z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 sm:py-5 border-b-2 border-brand-navy bg-[#faf8f5]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xs bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <CalendarIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#2563EB] block">
                    INTERACTIVE SCHEDULE
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-brand-navy">
                    EVENTS CALENDAR
                  </h2>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close calendar modal"
                className="w-9 h-9 rounded-xs border border-brand-navy/20 hover:border-brand-navy hover:bg-brand-navy hover:text-white flex items-center justify-center transition-colors text-brand-navy"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-7">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                
                {/* LEFT: Calendar Grid */}
                <div className="lg:col-span-6 bg-[#faf8f5] border border-brand-navy/15 p-5 rounded-xs">
                  {/* Month Switcher */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-brand-navy/15">
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-orange block">
                        CHOOSE MONTH
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-brand-navy tracking-tight">
                        {MONTH_NAMES[currentMonth]} {currentYear}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={prevMonth}
                        aria-label="Previous Month"
                        className="w-8 h-8 border border-brand-navy/20 hover:border-brand-navy hover:bg-brand-navy hover:text-white rounded-xs flex items-center justify-center transition-colors text-brand-navy"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={nextMonth}
                        aria-label="Next Month"
                        className="w-8 h-8 border border-brand-navy/20 hover:border-brand-navy hover:bg-brand-navy hover:text-white rounded-xs flex items-center justify-center transition-colors text-brand-navy"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Quick Month Shortcuts */}
                  <div className="flex items-center gap-2 mb-4">
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentYear(2026);
                        setCurrentMonth(9);
                        setSelectedDate("2026-10-24");
                      }}
                      className={`font-mono text-[10px] font-bold uppercase px-2.5 py-1 rounded-xs border transition-colors ${
                        currentMonth === 9
                          ? "bg-brand-navy text-white border-brand-navy"
                          : "bg-white text-brand-navy border-brand-navy/20 hover:border-brand-navy"
                      }`}
                    >
                      OCTOBER 2026
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentYear(2026);
                        setCurrentMonth(10);
                        setSelectedDate("2026-11-01");
                      }}
                      className={`font-mono text-[10px] font-bold uppercase px-2.5 py-1 rounded-xs border transition-colors ${
                        currentMonth === 10
                          ? "bg-brand-navy text-white border-brand-navy"
                          : "bg-white text-brand-navy border-brand-navy/20 hover:border-brand-navy"
                      }`}
                    >
                      NOVEMBER 2026
                    </button>
                  </div>

                  {/* Day Labels */}
                  <div className="grid grid-cols-7 gap-1 text-center mb-1">
                    {DAY_LABELS.map((day) => (
                      <span key={day} className="font-mono text-[10px] font-bold uppercase text-brand-gray py-0.5">
                        {day}
                      </span>
                    ))}
                  </div>

                  {/* Days Grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {/* Previous Month Days */}
                    {Array.from({ length: startOffset }).map((_, i) => (
                      <div
                        key={`prev-${i}`}
                        className="aspect-square flex items-center justify-center text-[11px] font-mono text-brand-navy/20 select-none"
                      >
                        {daysInPrevMonth - startOffset + i + 1}
                      </div>
                    ))}

                    {/* Current Month Days */}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const dayNum = i + 1;
                      const isoDate = formatDayISO(dayNum);
                      const isSelected = selectedDate === isoDate;
                      const hasEvent = hasEventOnDate(isoDate);

                      return (
                        <button
                          key={`day-${dayNum}`}
                          type="button"
                          onClick={() => setSelectedDate(isoDate)}
                          className={`relative aspect-square flex flex-col items-center justify-center font-mono text-xs font-bold rounded-xs transition-all ${
                            isSelected
                              ? "bg-brand-orange text-white shadow-sm font-black z-10"
                              : hasEvent
                              ? "bg-white text-brand-navy border border-brand-orange/40 hover:border-brand-orange hover:bg-orange-50/50"
                              : "text-brand-navy/70 hover:bg-gray-100"
                          }`}
                        >
                          <span>{dayNum}</span>
                          {/* Dot indicator for dates with scheduled events */}
                          {hasEvent && !isSelected && (
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-0.5" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* RIGHT: Event Details Pane */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Selected Date Header */}
                    <div className="pb-3 mb-4 border-b-2 border-brand-navy">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-orange block">
                        SELECTED DATE
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-brand-navy">
                        {formatSelectedDateDisplay(selectedDate)}
                      </h3>
                    </div>

                    {/* If events exist on this date */}
                    {eventsOnSelectedDate.length > 0 ? (
                      <div className="space-y-4">
                        {eventsOnSelectedDate.map((event: ScheduledEvent) => {
                          const whatsappMessage = encodeURIComponent(
                            `Hi Bharat Play! I would like to register/inquire about the "${event.title}" session on ${event.date} (${event.time}).`
                          );

                          return (
                            <div
                              key={event.id}
                              className="bg-[#faf8f5] border-2 border-brand-navy/15 p-5 rounded-xs"
                            >
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-brand-orange text-white rounded-xs">
                                  {event.category}
                                </span>
                                <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-brand-navy text-white rounded-xs">
                                  {event.game}
                                </span>
                              </div>

                              <h4 className="font-display text-xl font-bold uppercase tracking-tight text-brand-navy mb-2">
                                {event.title}
                              </h4>

                              <div className="space-y-1.5 font-mono text-xs text-brand-gray mb-3">
                                <div className="flex items-center gap-2">
                                  <Clock className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                                  <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                                  <span className="truncate">{event.venue}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Users className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                                  <span>{event.capacity}</span>
                                </div>
                              </div>

                              <p className="text-xs sm:text-sm text-brand-navy/80 font-normal leading-relaxed mb-4">
                                {event.description}
                              </p>

                              <a
                                href={`https://wa.me/918237132553?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shadow-xs"
                              >
                                <MessageCircle className="w-4 h-4" />
                                <span>REGISTER VIA WHATSAPP</span>
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      /* Empty state: No events on this specific date */
                      <div className="p-5 bg-gray-50 border border-gray-200 rounded-xs text-center">
                        <div className="w-10 h-10 rounded-full bg-gray-100 text-brand-gray flex items-center justify-center mx-auto mb-2">
                          <CalendarIcon className="w-5 h-5" />
                        </div>
                        <h4 className="font-display text-base font-bold uppercase text-brand-navy mb-1">
                          No Public Session on This Date
                        </h4>
                        <p className="text-xs text-brand-gray mb-4">
                          Pick any orange-highlighted date on the calendar, or browse nearby upcoming sessions:
                        </p>

                        {/* Quick upcoming list */}
                        <div className="space-y-2 text-left">
                          {upcomingEvents.map((ue: ScheduledEvent) => (
                            <button
                              key={ue.id}
                              type="button"
                              onClick={() => {
                                const [y, m] = ue.date.split("-").map(Number);
                                setCurrentYear(y);
                                setCurrentMonth(m - 1);
                                setSelectedDate(ue.date);
                              }}
                              className="w-full text-left p-2.5 bg-white border border-gray-200 hover:border-brand-orange rounded-xs transition-colors flex items-center justify-between group"
                            >
                              <div>
                                <span className="font-mono text-[10px] font-bold text-brand-orange uppercase block">
                                  {ue.date} · {ue.time.split("–")[0].trim()}
                                </span>
                                <span className="font-display text-xs font-bold uppercase text-brand-navy group-hover:text-brand-orange transition-colors">
                                  {ue.title}
                                </span>
                              </div>
                              <span className="font-mono text-xs text-brand-orange font-bold group-hover:translate-x-1 transition-transform">
                                &rarr;
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
