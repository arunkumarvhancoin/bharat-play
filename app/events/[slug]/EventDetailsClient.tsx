"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Users,
  Ticket,
  Share2,
  ExternalLink,
  Send,
  Download,
  Sparkles,
  Compass,
  Copy,
  Check,
  Navigation,
  Mail,
  X,
  ChevronRight,
  ChevronLeft,
  Play,
  Camera,
  Video as VideoIcon,
  Maximize2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScheduledEvent } from "../../data/events";

interface EventDetailsClientProps {
  event: ScheduledEvent;
  otherEvents: ScheduledEvent[];
}

const TEST_WHATSAPP_NUMBER = "7397468732"; // Test WhatsApp: +91 7397468732

export default function EventDetailsClient({ event, otherEvents }: EventDetailsClientProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(event.slots[0] || "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [attendeesCount, setAttendeesCount] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [activeMediaIndex, setActiveMediaIndex] = useState<number | null>(null);
  const [mediaFilter, setMediaFilter] = useState<"all" | "photos" | "videos">("all");

  const eventMedia = event.media && event.media.length > 0 ? event.media : [];

  const filteredMedia = eventMedia.filter((item) => {
    if (mediaFilter === "photos") return item.type === "image";
    if (mediaFilter === "videos") return item.type === "video";
    return true;
  });

  // Validate form
  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = "Please enter your name";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit mobile number";
    }
    if (!selectedSlot) {
      errs.slot = "Please select your preferred slot";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Build clean, friendly WhatsApp message
  const generateWhatsAppMessage = () => {
    return [
      `🎲 *New Reservation · ${event.title}*`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `📅 *Date:* ${event.formattedDate} (${event.time})`,
      `⏰ *Slot:* ${selectedSlot}`,
      `📍 *Venue:* ${event.venue}${event.city && !event.venue.includes(event.city) ? `, ${event.city}` : ""}`,
      `💰 *Admission / Price:* ${event.price}`,
      ``,
      `👤 *Attendee Details:*`,
      `• *Name:* ${name.trim()}`,
      `• *Phone:* ${phone.trim()}`,
      `• *Email:* ${email.trim()}`,
      `• *Number of Members:* ${attendeesCount} ${attendeesCount === 1 ? "Person (Solo)" : `Members / Group of ${attendeesCount}`}`,
      ``,
      `Hi Bharat Play team! We'd like to reserve our seats for this session. Please confirm our reservation! 😊`,
    ].join("\n");
  };

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/91${TEST_WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Show Thank You screen
    setIsSubmitted(true);

    // Open WhatsApp in new tab
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  const openWhatsAppDirect = () => {
    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/91${TEST_WHATSAPP_NUMBER}?text=${encodedMessage}`;
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  const downloadCalendarFile = () => {
    const startTimeFormatted = event.date.replace(/-/g, "") + "T103000Z";
    const endTimeFormatted = event.date.replace(/-/g, "") + "T133000Z";

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Bharat Play//Event Schedule//EN",
      "BEGIN:VEVENT",
      `UID:${event.id}-${Date.now()}@bharatplay.com`,
      `DTSTAMP:${startTimeFormatted}`,
      `DTSTART:${startTimeFormatted}`,
      `DTEND:${endTimeFormatted}`,
      `SUMMARY:${event.title} - Bharat Play`,
      `DESCRIPTION:${event.description} Slot: ${selectedSlot}`,
      `LOCATION:${event.venueAddress || event.venue}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `${event.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    }
  };

  const handleCopyAddress = () => {
    const fullAddress = `${event.venue}, ${event.venueAddress || ""}, ${event.city}`;
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(fullAddress);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2200);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `${event.title} · Bharat Play`,
          text: `Join us for ${event.title}! Screen-free serious games & tabletop systems thinking on ${event.formattedDate} at ${event.venue}.`,
          url: window.location.href,
        });
      } catch {
        // User dismiss or unsupported
      }
    } else {
      handleCopyLink();
    }
  };

  // Share Links
  const currentUrl = typeof window !== "undefined" ? window.location.href : `https://bharatplay.com/events/${event.id}`;
  const encodedUrl = encodeURIComponent(currentUrl);
  const shareMessage = `🎲 *Join me at ${event.title}!* \n\nScreen-free serious games & tabletop systems thinking on ${event.formattedDate} (${event.time}) at ${event.venue}.\n\nReserve your spot here:\n${currentUrl}`;
  const encodedShareMessage = encodeURIComponent(shareMessage);

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodedShareMessage}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Excited for ${event.title} with @BharatPlay! 🎲 Hands-on serious tabletop gaming on ${event.formattedDate}. Reserve your pass:`)}&url=${encodedUrl}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const telegramShareUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodeURIComponent(`🎲 ${event.title} - Bharat Play Session`)}`;
  const emailShareUrl = `mailto:?subject=${encodeURIComponent(`Invitation: ${event.title} (${event.formattedDate})`)}&body=${encodeURIComponent(`Hi,\n\nI thought you'd love to join this session with Bharat Play:\n\n${event.title}\nDate: ${event.formattedDate} (${event.time})\nVenue: ${event.venue}\nAddress: ${event.venueAddress || event.venue + ", " + event.city}\n\nCheck out the full details and reserve your spot here:\n${currentUrl}\n\nHope to see you there!`)}`;

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 pt-24 pb-20 selection:bg-orange-500 selection:text-white">
      {/* Subtle Warm Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-orange-100/50 via-amber-50/30 to-transparent rounded-full blur-3xl opacity-75" />
      </div>

      {/* Top Bar: Breadcrumb + Action Controls */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3 relative z-10">
        <div className="flex items-center justify-between gap-4 flex-wrap pb-3 border-b border-amber-200/60 font-mono text-xs uppercase tracking-wider text-slate-500">
          <div className="flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              HOME
            </Link>
            <span className="text-amber-300">/</span>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("open-events-calendar"));
                }
              }}
              className="hover:text-orange-600 transition-colors cursor-pointer"
            >
              EVENTS
            </button>
            <span className="text-amber-300">/</span>
            <span className="text-orange-600 font-bold truncate max-w-[200px] sm:max-w-none">
              {event.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("open-events-calendar"));
                }
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 hover:bg-orange-100 text-orange-800 border border-orange-200 text-xs font-semibold transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span>All Sessions</span>
            </button>

            <button
              type="button"
              onClick={() => setIsShareOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-amber-200/80 text-xs font-bold transition-all shadow-2xs cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-orange-500" />
              <span>SHARE</span>
            </button>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2-COLUMN BALANCED DASHBOARD: Eliminates Excessive Scrolling        */}
      {/* =================================================================== */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10 mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          
          {/* =============================================================== */}
          {/* LEFT COLUMN: HERO, HIGHLIGHTS & LOCATION GUIDE (7 COLS)         */}
          {/* =============================================================== */}
          <div className="lg:col-span-7 space-y-6">

            {/* 1. HERO CARD: Saffron Border with Hard Shadow */}
            <section
              className="bg-white rounded-[24px] border-2 border-[#C2410C] p-6 sm:p-8 relative overflow-hidden"
              style={{ boxShadow: "8px 8px 0px #C2410C" }}
            >
              {/* Subtle Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-100/40 via-amber-50/20 to-transparent rounded-full blur-xl pointer-events-none" />

              {/* Badges Row - Matte Solid 3 Colors */}
              <div className="flex flex-wrap items-center gap-2 mb-3.5 relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C2410C] text-white text-xs font-bold tracking-wide">
                  <span>🎲</span>
                  <span>{event.category}</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0C2444] text-white text-xs font-bold tracking-wide">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>{event.badge || "Filling Fast"}</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#15803D] text-white text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>{event.price}</span>
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3 relative z-10">
                {event.title}
              </h1>

              {/* Tagline / Brief Description */}
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6 relative z-10">
                {event.description}
              </p>

              {/* 4 Compact Specs Badges - Solid Matte */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 relative z-10 pt-1">
                <div className="p-2.5 rounded-xl bg-white border-2 border-slate-200 text-center">
                  <span className="text-[10px] font-bold text-[#C2410C] uppercase tracking-wider block font-mono">
                    Date
                  </span>
                  <span className="text-xs font-bold text-slate-900 block truncate">
                    {event.formattedDate.split(",")[0]}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white border-2 border-slate-200 text-center">
                  <span className="text-[10px] font-bold text-[#0C2444] uppercase tracking-wider block font-mono">
                    Duration
                  </span>
                  <span className="text-xs font-bold text-slate-900 block">
                    {event.duration || "2 Hours"}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white border-2 border-slate-200 text-center">
                  <span className="text-[10px] font-bold text-[#15803D] uppercase tracking-wider block font-mono">
                    Format
                  </span>
                  <span className="text-xs font-bold text-slate-900 block">
                    Screen-Free
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white border-2 border-slate-200 text-center">
                  <span className="text-[10px] font-bold text-[#0C2444] uppercase tracking-wider block font-mono">
                    Audience
                  </span>
                  <span className="text-xs font-bold text-slate-900 block">
                    {event.ageGroup || "Open for All"}
                  </span>
                </div>
              </div>

              {/* Special Venue Privilege (Discount on Games) */}
              {event.venueDiscount && (
                <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border-2 border-[#15803D] flex items-center gap-3 relative z-10">
                  <span className="text-xl shrink-0">🎁</span>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#15803D] block">
                      Special Venue Privilege
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-emerald-950">
                      {event.venueDiscount}
                    </p>
                  </div>
                </div>
              )}

              {/* Early Bird Ticketed Notice */}
              {event.isEarlyBird && (
                <div className="mt-4 p-3.5 rounded-xl bg-orange-50 border-2 border-[#C2410C] flex items-center gap-3 relative z-10">
                  <span className="text-xl shrink-0">🎟️</span>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C2410C] block">
                      Ticketed Session · Early Bird Reservations Open
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-orange-950">
                      This is a ticketed and priced session (not free). Reserve now for early bird priority allocation before public fee confirmation!
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* 2. PHOTOS & VIDEOS SECTION (Only shown if event has actual media) */}
            {eventMedia.length > 0 && (
              <section
                id="photos-and-videos"
                className="bg-white rounded-[24px] border border-amber-200/80 p-6 sm:p-7 shadow-xs relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                        LIVE FOOTAGE &amp; GALLERY
                      </span>
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      PHOTOS &amp; VIDEOS
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                      Authentic moments, live tabletop gameplay, and participant action from our sessions.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    {event.linkedinUrl && (
                      <a
                        href={event.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-bold shadow-xs transition-all"
                      >
                        <VideoIcon className="w-3.5 h-3.5" />
                        <span>LinkedIn Video</span>
                        <ExternalLink className="w-3 h-3 opacity-80" />
                      </a>
                    )}

                    {event.instagramUrl && (
                      <a
                        href={event.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C2410C] hover:bg-[#a3360a] text-white text-xs font-bold shadow-xs transition-all"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>Instagram Post</span>
                        <ExternalLink className="w-3 h-3 opacity-80" />
                      </a>
                    )}

                    {/* Filter Pills - Solid Matte */}
                    <div className="inline-flex rounded-xl bg-slate-100 p-1 text-xs font-bold font-mono">
                      <button
                        type="button"
                        onClick={() => setMediaFilter("all")}
                        className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                          mediaFilter === "all"
                            ? "bg-[#0C2444] text-white shadow-2xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        All ({eventMedia.length})
                      </button>
                      <button
                        type="button"
                        onClick={() => setMediaFilter("photos")}
                        className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                          mediaFilter === "photos"
                            ? "bg-[#0C2444] text-white shadow-2xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Photos ({eventMedia.filter((m) => m.type === "image").length})
                      </button>
                      {eventMedia.some((m) => m.type === "video") && (
                        <button
                          type="button"
                          onClick={() => setMediaFilter("videos")}
                          className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                            mediaFilter === "videos"
                              ? "bg-[#0C2444] text-white shadow-2xs"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          Videos ({eventMedia.filter((m) => m.type === "video").length})
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Media Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {filteredMedia.map((item, idx) => {
                    const originalIndex = eventMedia.findIndex((m) => m.url === item.url);
                    const isVideo = item.type === "video";

                    return (
                      <div
                        key={idx}
                        onClick={() => setActiveMediaIndex(originalIndex >= 0 ? originalIndex : idx)}
                        className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 cursor-pointer shadow-2xs hover:shadow-md transition-all hover:scale-[1.02]"
                      >
                        {isVideo ? (
                          <div className="relative w-full h-full bg-slate-950 flex items-center justify-center">
                            {item.poster ? (
                              <img
                                src={item.poster}
                                alt={item.title}
                                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                              />
                            ) : (
                              <video
                                src={item.url}
                                className="w-full h-full object-cover opacity-75"
                                preload="metadata"
                                muted
                              />
                            )}

                            {/* Glowing Play Icon Overlay */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                              <div className="w-12 h-12 rounded-full bg-orange-600/95 group-hover:bg-orange-500 group-hover:scale-110 text-white flex items-center justify-center shadow-lg transition-all">
                                <Play className="w-5 h-5 ml-0.5 fill-white" />
                              </div>
                            </div>

                            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-white text-[10px] font-mono font-bold flex items-center gap-1">
                              <VideoIcon className="w-3 h-3 text-red-400" />
                              <span>VIDEO</span>
                            </span>
                          </div>
                        ) : (
                          <div className="relative w-full h-full">
                            <img
                              src={item.url}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                              <span className="text-[11px] text-white font-medium truncate block">
                                {item.title}
                              </span>
                            </div>

                            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono font-bold flex items-center gap-1">
                              <Camera className="w-3 h-3 text-amber-300" />
                              <span>PHOTO</span>
                            </span>
                          </div>
                        )}

                        {/* Expand Icon */}
                        <div className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-black/50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Instagram Session Caption / Attribution */}
                <div className="mt-4 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/60 flex items-start gap-3">
                  <span className="text-xl shrink-0 mt-0.5">🎲</span>
                  <div className="text-xs text-slate-700 leading-relaxed">
                    <strong className="text-slate-900 block font-semibold mb-0.5">
                      Live from Bharat Play Experience Sessions
                    </strong>
                    <p className="text-slate-600">
                      Featuring real tabletop game setups, participant collaborations, and live debrief sessions across Chennai and partner institutions.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* 3. LOCATION & VENUE GUIDE (Compact & Clear with Map) */}
            <section
              id="location-guide"
              className="bg-white rounded-[24px] border-2 border-[#12352B] p-6 sm:p-7 relative overflow-hidden"
              style={{ boxShadow: "8px 8px 0px #12352B" }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono">
                      LOCATION &amp; VENUE
                    </span>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                    {event.venue}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>

                  {event.mapUrl && (
                    <a
                      href={event.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0C2444] hover:bg-[#12352B] text-white text-xs font-bold transition-colors shadow-2xs"
                    >
                      <Navigation className="w-3.5 h-3.5 text-amber-300" />
                      <span>Google Maps</span>
                      <ExternalLink className="w-3 h-3 opacity-75" />
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-3.5">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  📍 <strong className="text-slate-900">{event.venue}</strong> — {event.venueAddress}
                </p>

                {/* Conditional Map or Venue TBA Notice */}
                {event.venue.toLowerCase().includes("announced") ? (
                  <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-sm font-bold text-amber-900">
                      <MapPin className="w-4 h-4 text-[#C2410C]" />
                      <span>Venue To Be Announced Closer to the Date</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      The finalized venue will be shared directly with all registered participants via WhatsApp and email closer to the session date.
                    </p>
                    <div className="pt-2 text-xs font-mono font-semibold text-[#0C2444] flex items-center gap-1.5">
                      <span>✓ Priority attendees receive the exact Google Maps location pin and arrival instructions first.</span>
                    </div>
                  </div>
                ) : (
                  /* Embedded Map */
                  <div className="w-full h-52 sm:h-60 rounded-2xl overflow-hidden border border-slate-200 relative shadow-inner bg-slate-100">
                    <iframe
                      title="Event Location Google Map"
                      src={`https://maps.google.com/maps?q=${encodeURIComponent((event.venueAddress || event.venue) + ", " + event.city)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md border border-slate-200 text-[11px] font-bold text-slate-800 flex items-center gap-1.5 pointer-events-none">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span>{event.venue} · {event.city}</span>
                    </div>
                  </div>
                )}

                <div className="pt-1 flex items-center justify-between flex-wrap gap-2 text-xs">
                  {event.mapUrl ? (
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent((event.venueAddress || event.venue) + " " + event.city)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-emerald-800 hover:text-emerald-950 font-bold underline"
                    >
                      <Compass className="w-3.5 h-3.5" />
                      <span>Get Turn-by-Turn Directions</span>
                    </a>
                  ) : (
                    <span className="text-slate-500 font-mono text-[11px]">
                      Directions sent with venue announcement
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => setIsShareOpen(true)}
                    className="text-slate-500 hover:text-slate-800 font-semibold"
                  >
                    Share event →
                  </button>
                </div>
              </div>
            </section>

          </div>

          {/* =============================================================== */}
          {/* RIGHT COLUMN: STICKY BOOKING CARD & PASS WIDGET (5 COLS)        */}
          {/* =============================================================== */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
            
            {/* PHYSICAL OFFSET NAVY BOOKING CARD */}
            <div
              className="bg-white rounded-[24px] border-2 border-[#0C2444] p-6 sm:p-7 relative overflow-hidden"
              style={{ boxShadow: "10px 10px 0px #0C2444" }}
            >
              {/* Top Header Strip */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                    {event.badge?.toLowerCase().includes("early bird")
                      ? "EARLY BIRD ADMISSION"
                      : event.price.toLowerCase().includes("free")
                      ? "COMMUNITY ADMISSION"
                      : "PASS ADMISSION"}
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="font-display text-2xl sm:text-3xl font-black text-[#0C2444]">
                      {event.price}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {event.badge || "Live Sessions"}
                    </span>
                  </div>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-2xl shadow-2xs shrink-0">
                  🎟️
                </div>
              </div>

              {/* Key Event Snapshot Details */}
              <div className="space-y-3 mb-5 text-xs">
                {/* Date */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-amber-200/50">
                  <Calendar className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block">{event.formattedDate}</span>
                    <span className="text-slate-500 text-[11px]">{event.time}</span>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-amber-200/50">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block truncate">{event.venue}</span>
                    <span className="text-slate-500 text-[11px] truncate block">{event.venueAddress || event.city}</span>
                  </div>
                </div>

                {/* Capacity */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-amber-200/50">
                  <Users className="w-4 h-4 text-[#0C2444] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block">{event.capacity}</span>
                    <span className="text-slate-500 text-[11px]">Limited seats for curated gameplay</span>
                  </div>
                </div>
              </div>

              {/* Available Slots Preview */}
              <div className="mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block font-mono mb-2">
                  Session Slots:
                </span>
                <div className="space-y-1.5">
                  {event.slots.map((slot, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="font-medium truncate">{slot}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary Action Button - Solid Matte Saffron */}
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#C2410C] hover:bg-[#a3360a] text-white font-display text-base font-bold shadow-xs hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Ticket className="w-5 h-5 text-white" />
                <span>
                  {event.badge?.toLowerCase().includes("early bird")
                    ? "RESERVE EARLY BIRD SPOT"
                    : event.price.toLowerCase().includes("free")
                    ? "BOOK FREE SEATS NOW"
                    : `BOOK YOUR SEAT (${event.price})`}
                </span>
                <span>🎉</span>
              </button>

              {/* Sub-text reassurance */}
              <div className="mt-3.5 text-center">
                <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                  <span>⚡</span> Instant seat confirmation via WhatsApp (+91 {TEST_WHATSAPP_NUMBER})
                </p>
              </div>

              {/* Secondary Action Row: Share + Calendar */}
              <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsShareOpen(true)}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5 text-orange-500" />
                  <span>Share Event</span>
                </button>

                <button
                  type="button"
                  onClick={downloadCalendarFile}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#0C2444]" />
                  <span>Add Calendar</span>
                </button>
              </div>
            </div>


          </div>

        </div>

        {/* =============================================================== */}
        {/* OTHER UPCOMING SESSIONS (If available)                          */}
        {/* =============================================================== */}
        {otherEvents && otherEvents.length > 0 && (
          <div className="mt-12 pt-8 border-t border-amber-200/60">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                Other Upcoming Sessions
              </h3>
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new CustomEvent("open-events-calendar"));
                  }
                }}
                className="text-xs font-bold text-orange-600 hover:text-orange-700 uppercase font-mono cursor-pointer"
              >
                View Full Calendar →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {otherEvents.map((other) => (
                <Link
                  key={other.id}
                  href={`/events/${other.id}`}
                  className="p-4 rounded-2xl bg-white border border-amber-200/80 hover:border-[#0C2444] transition-all hover:-translate-y-0.5 shadow-2xs group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 block mb-1">
                      {other.formattedDate.split(",")[0]} · {other.time}
                    </span>
                    <h4 className="font-display text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug mb-1">
                      {other.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {other.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0C2444]">{other.price}</span>
                    <span className="text-orange-600 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                      Details <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* =================================================================== */}
      {/* BOOKING MODAL: Themed in Navy Blue (#0C2444)                        */}
      {/* =================================================================== */}
      <AnimatePresence>
        {isBookingOpen && (
          <div
            className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            data-lenis-prevent
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!isSubmitted) setIsBookingOpen(false);
              }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Container: Navy Blue Outline & Hard Shadow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
              className="relative w-full max-w-lg bg-[#FAF8F5] border-2 border-[#0C2444] rounded-[26px] z-10 overflow-hidden"
              style={{ boxShadow: "14px 14px 0px #0C2444" }}
            >
              {!isSubmitted ? (
                /* ========================================================= */
                /* STEP 1: NAVY BLUE REGISTRATION FORM                       */
                /* ========================================================= */
                <div>
                  {/* Navy Blue Header */}
                  <div className="px-6 py-5 bg-gradient-to-r from-[#0C2444] via-[#13335c] to-[#0C2444] text-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-sm text-sky-300 flex items-center justify-center text-xl shadow-xs border border-white/15">
                        🎲
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-sky-200 block">
                          {event.badge?.toLowerCase().includes("early bird")
                            ? "EARLY BIRD RESERVATION"
                            : event.price.toLowerCase().includes("free")
                            ? "FREE REGISTRATION"
                            : "SEAT RESERVATION"}
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
                          Grab Your Spot · Join Us!
                        </h3>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsBookingOpen(false)}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg transition-colors cursor-pointer"
                      aria-label="Close modal"
                    >
                      &times;
                    </button>
                  </div>

                  {/* Event summary banner inside modal */}
                  <div className="bg-sky-50/80 px-6 py-3 border-b border-sky-200/60 text-xs flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-800 block truncate max-w-xs">
                        {event.title}
                      </span>
                      <span className="text-slate-600">
                        {event.formattedDate} · {event.time}
                      </span>
                    </div>
                    <span className="font-bold text-[#0C2444] bg-sky-100 border border-sky-300 px-2.5 py-0.5 rounded-full text-[11px]">
                      {event.price}
                    </span>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleBookNow} className="p-6 space-y-4">
                    {/* Full Name - John Doe placeholder */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name <span className="text-[#0C2444] font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                        }}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all ${
                          errors.name
                            ? "border-red-400 bg-red-50/40"
                            : "border-sky-200 focus:border-[#0C2444] focus:ring-4 focus:ring-sky-100 bg-white"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email ID & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Email ID <span className="text-[#0C2444] font-bold">*</span>
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                          }}
                          placeholder="name@example.com"
                          className={`w-full px-4 py-3 rounded-xl border text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all ${
                            errors.email
                              ? "border-red-400 bg-red-50/40"
                              : "border-sky-200 focus:border-[#0C2444] focus:ring-4 focus:ring-sky-100 bg-white"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Phone Number <span className="text-[#0C2444] font-bold">*</span>
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                          }}
                          placeholder="10-digit mobile"
                          className={`w-full px-4 py-3 rounded-xl border text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all ${
                            errors.phone
                              ? "border-red-400 bg-red-50/40"
                              : "border-sky-200 focus:border-[#0C2444] focus:ring-4 focus:ring-sky-100 bg-white"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* How Many Members Are Coming */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          How Many Members Are Coming? <span className="text-[#0C2444] font-bold">*</span>
                        </label>
                        <span className="text-xs font-bold text-[#0C2444]">
                          {attendeesCount} {attendeesCount === 1 ? "Member (Solo)" : "Members"}
                        </span>
                      </div>

                      {/* Quick Selector Pills + Stepper Counter */}
                      <div className="flex items-center gap-2">
                        <div className="flex-1 grid grid-cols-4 gap-1.5">
                          {[1, 2, 3, 4].map((num) => (
                            <button
                              key={num}
                              type="button"
                              onClick={() => setAttendeesCount(num)}
                              className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                attendeesCount === num
                                  ? "bg-[#0C2444] text-white shadow-xs"
                                  : "bg-white border border-slate-200 text-slate-700 hover:border-[#0C2444]/40 hover:bg-sky-50/50"
                              }`}
                            >
                              {num === 1 ? "1 (Solo)" : `${num}`}
                            </button>
                          ))}
                        </div>

                        {/* Stepper for 5+ or granular adjustments */}
                        <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-xl p-1 shrink-0">
                          <button
                            type="button"
                            onClick={() => setAttendeesCount((prev) => Math.max(1, prev - 1))}
                            disabled={attendeesCount <= 1}
                            className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-800 font-bold text-sm flex items-center justify-center transition-colors cursor-pointer"
                            aria-label="Decrease members"
                          >
                            -
                          </button>
                          <span className="w-7 text-center text-xs font-bold text-[#0C2444]">
                            {attendeesCount}
                          </span>
                          <button
                            type="button"
                            onClick={() => setAttendeesCount((prev) => Math.min(25, prev + 1))}
                            disabled={attendeesCount >= 25}
                            className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-800 font-bold text-sm flex items-center justify-center transition-colors cursor-pointer"
                            aria-label="Increase members"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Bringing friends or team members? We&apos;ll reserve seats together for your group!
                      </p>
                    </div>

                    {/* Booking Slot Selection */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Choose Your Slot <span className="text-[#0C2444] font-bold">*</span>
                      </label>
                      <div className="space-y-2">
                        {event.slots.map((slot, i) => (
                          <label
                            key={i}
                            className={`flex items-center gap-3 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                              selectedSlot === slot
                                ? "bg-sky-50/90 border-2 border-[#0C2444] text-[#0C2444] font-bold shadow-xs"
                                : "bg-white border-slate-200 text-slate-700 hover:border-[#0C2444]/50"
                            }`}
                          >
                            <input
                              type="radio"
                              name="event-slot"
                              checked={selectedSlot === slot}
                              onChange={() => setSelectedSlot(slot)}
                              className="text-[#0C2444] accent-[#0C2444] focus:ring-blue-500"
                            />
                            <span>{slot}</span>
                          </label>
                        ))}
                      </div>
                      {errors.slot && (
                        <p className="text-xs text-red-600 mt-1">{errors.slot}</p>
                      )}
                    </div>

                    {/* Book Now Submit Button */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2.5 bg-[#0C2444] hover:bg-[#13335c] active:scale-[0.99] text-white font-display text-base font-bold py-4 px-6 rounded-full shadow-lg shadow-[#0C2444]/25 hover:shadow-[#0C2444]/40 transition-all cursor-pointer"
                      >
                        <Ticket className="w-5 h-5 text-sky-300" />
                        <span>
                          {event.badge?.toLowerCase().includes("early bird")
                            ? "CONFIRM EARLY BIRD RESERVATION 🎉"
                            : event.price.toLowerCase().includes("free")
                            ? "CONFIRM FREE REGISTRATION 🎉"
                            : `CONFIRM SEAT RESERVATION (${event.price}) 🎉`}
                        </span>
                      </button>
                      <p className="text-xs text-center text-slate-500 mt-2.5">
                        Confirmation will be sent to WhatsApp (+91 {TEST_WHATSAPP_NUMBER})
                      </p>
                    </div>
                  </form>
                </div>
              ) : (
                /* ========================================================= */
                /* STEP 2: CELEBRATION & WHATSAPP CONFIRMATION SCREEN        */
                /* ========================================================= */
                <div className="p-7 sm:p-9 text-center bg-white">
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", duration: 0.5, bounce: 0.35 }}
                    className="w-20 h-20 rounded-full bg-sky-100 text-[#0C2444] flex items-center justify-center mx-auto mb-4 border-2 border-[#0C2444] shadow-md text-3xl"
                  >
                    🥳
                  </motion.div>

                  <span className="text-xs font-bold uppercase tracking-widest text-[#0C2444] block mb-1">
                    YOU&apos;RE ON THE LIST!
                  </span>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 mb-2">
                    Thank You, {name}! 🎉
                  </h3>

                  <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6 leading-relaxed">
                    We&apos;re thrilled to have you for <strong className="text-slate-900">{event.title}</strong>!
                  </p>

                  {/* Ticket Receipt */}
                  <div className="bg-[#FAFDF9] border border-sky-200/80 rounded-2xl p-4 sm:p-5 mb-6 text-left text-xs space-y-2">
                    <div className="flex justify-between items-center pb-2 border-b border-sky-100">
                      <span className="text-slate-400 uppercase font-semibold text-[11px]">Event</span>
                      <span className="font-bold text-slate-900 text-right">{event.title}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 uppercase font-semibold text-[11px]">Slot</span>
                      <span className="font-bold text-[#0C2444] text-right">{selectedSlot}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 uppercase font-semibold text-[11px]">Members</span>
                      <span className="font-bold text-[#0C2444] text-right">
                        {attendeesCount} {attendeesCount === 1 ? "Member (Solo)" : "Members"}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 uppercase font-semibold text-[11px]">Date</span>
                      <span className="font-bold text-slate-900 text-right">{event.formattedDate}</span>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-sky-100">
                      <span className="text-slate-400 uppercase font-semibold text-[11px]">Attendee</span>
                      <span className="font-bold text-slate-900">{name} ({phone})</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={openWhatsAppDirect}
                      className="inline-flex items-center justify-center gap-2 flex-1 py-3.5 px-6 rounded-full bg-[#15803D] hover:bg-[#166534] text-white font-bold text-xs uppercase tracking-wider shadow-xs transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>OPEN WHATSAPP ({TEST_WHATSAPP_NUMBER})</span>
                    </button>

                    <button
                      type="button"
                      onClick={downloadCalendarFile}
                      className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-sky-50 hover:bg-sky-100 text-[#0C2444] border border-sky-200 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-[#0C2444]" />
                      <span>CALENDAR (.ICS)</span>
                    </button>
                  </div>

                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={() => {
                        setIsBookingOpen(false);
                        setIsSubmitted(false);
                      }}
                      className="text-xs font-semibold text-slate-400 hover:text-slate-700 transition-colors underline cursor-pointer"
                    >
                      Close and return to page
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =================================================================== */}
      {/* SHARE EVENT MODAL                                                   */}
      {/* =================================================================== */}
      <AnimatePresence>
        {isShareOpen && (
          <div
            className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            data-lenis-prevent
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsShareOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
              className="relative w-full max-w-md bg-white border-2 border-[#C2410C] rounded-[26px] z-10 overflow-hidden shadow-2xl"
              style={{ boxShadow: "12px 12px 0px #C2410C" }}
            >
              {/* Header */}
              <div className="px-6 py-5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm text-white flex items-center justify-center text-lg shadow-xs">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-100 block">
                      INVITE FRIENDS &amp; PEERS
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
                      Share Event
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsShareOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-lg transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </div>

              {/* Event Preview Strip */}
              <div className="bg-amber-50/80 px-6 py-3 border-b border-amber-200/60 text-xs">
                <span className="font-bold text-slate-800 block truncate">{event.title}</span>
                <span className="text-slate-500">
                  {event.formattedDate} · {event.venue}
                </span>
              </div>

              {/* Share Channels */}
              <div className="p-6 space-y-4">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Share directly to your favorite app:
                </p>

                <div className="grid grid-cols-2 gap-2.5">
                  {/* WhatsApp */}
                  <a
                    href={whatsappShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-emerald-950 font-bold text-xs transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Send className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="block font-bold">WhatsApp</span>
                      <span className="text-[10px] text-emerald-700 font-normal">Chat or Status</span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={linkedinShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/30 text-blue-950 font-bold text-xs transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="block font-bold">LinkedIn</span>
                      <span className="text-[10px] text-blue-700 font-normal">Network Post</span>
                    </div>
                  </a>

                  {/* X / Twitter */}
                  <a
                    href={twitterShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-900/10 hover:bg-slate-900/20 border border-slate-900/30 text-slate-900 font-bold text-xs transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-xs font-black text-xs">
                      𝕏
                    </div>
                    <div className="truncate">
                      <span className="block font-bold">X (Twitter)</span>
                      <span className="text-[10px] text-slate-600 font-normal">Post to feed</span>
                    </div>
                  </a>

                  {/* Telegram */}
                  <a
                    href={telegramShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#229ED9]/10 hover:bg-[#229ED9]/20 border border-[#229ED9]/30 text-sky-950 font-bold text-xs transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#229ED9] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Send className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="block font-bold">Telegram</span>
                      <span className="text-[10px] text-sky-700 font-normal">Send to Group</span>
                    </div>
                  </a>
                </div>

                {/* Email & System Share */}
                <div className="flex gap-2">
                  <a
                    href={emailShareUrl}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200/80 text-amber-900 font-semibold text-xs transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-700" />
                    <span>Email Invitation</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleNativeShare}
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-semibold text-xs transition-colors cursor-pointer"
                    title="Share via device apps"
                  >
                    <Share2 className="w-3.5 h-3.5 text-slate-600" />
                    <span>More Apps</span>
                  </button>
                </div>

                {/* Copy Link Input Bar */}
                <div className="pt-2">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Or Copy Event Link
                  </label>
                  <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-inner">
                    <input
                      type="text"
                      readOnly
                      value={currentUrl}
                      className="flex-1 px-2.5 py-1 text-xs text-slate-600 bg-transparent focus:outline-none select-all truncate"
                    />
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                        copiedLink
                          ? "bg-emerald-600 text-white"
                          : "bg-[#0C2444] hover:bg-[#12352B] text-white"
                      }`}
                    >
                      {copiedLink ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =================================================================== */}
      {/* MEDIA LIGHTBOX MODAL: FULL-RES PHOTOS & VIDEO PLAYER                */}
      {/* =================================================================== */}
      <AnimatePresence>
        {activeMediaIndex !== null && eventMedia[activeMediaIndex] && (
          <div
            className="fixed inset-0 z-[140] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
            data-lenis-prevent
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveMediaIndex(null)}
              className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center text-xl transition-colors cursor-pointer"
              aria-label="Close media preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            {eventMedia.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMediaIndex((prev) => (prev !== null ? (prev - 1 + eventMedia.length) % eventMedia.length : 0));
                }}
                className="absolute left-3 sm:left-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous media"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next Button */}
            {eventMedia.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMediaIndex((prev) => (prev !== null ? (prev + 1) % eventMedia.length : 0));
                }}
                className="absolute right-3 sm:right-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next media"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Main Media Preview Container */}
            <div
              className="relative max-w-4xl w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex items-center justify-center overflow-hidden rounded-2xl bg-black/60 shadow-2xl max-h-[75vh]">
                {eventMedia[activeMediaIndex].type === "video" ? (
                  <video
                    src={eventMedia[activeMediaIndex].url}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[75vh] w-auto max-w-full rounded-2xl"
                  />
                ) : (
                  <img
                    src={eventMedia[activeMediaIndex].url}
                    alt={eventMedia[activeMediaIndex].title}
                    className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl"
                  />
                )}
              </div>

              {/* Caption & Counter */}
              <div className="w-full mt-4 flex items-center justify-between text-white px-2 text-xs sm:text-sm font-medium">
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base leading-tight">
                    {eventMedia[activeMediaIndex].title}
                  </h4>
                  {eventMedia[activeMediaIndex].caption && (
                    <p className="text-slate-300 text-xs mt-0.5">
                      {eventMedia[activeMediaIndex].caption}
                    </p>
                  )}
                </div>

                <span className="font-mono text-xs text-slate-400 bg-white/10 px-3 py-1 rounded-full shrink-0">
                  {activeMediaIndex + 1} / {eventMedia.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Bottom Sticky Bar on Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3.5 flex items-center justify-between shadow-2xl">
        <div>
          <span className="text-[11px] font-bold text-emerald-800 uppercase block">
            {event.formattedDate.split(",")[0]} · {event.time}
          </span>
          <span className="font-display text-sm font-bold text-slate-900">
            {event.price}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsShareOpen(true)}
            className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            aria-label="Share"
          >
            <Share2 className="w-4 h-4 text-orange-500" />
          </button>

          <button
            type="button"
            onClick={() => setIsBookingOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0C2444] hover:bg-[#13335c] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
          >
            <Ticket className="w-4 h-4 text-sky-300" />
            <span>BOOK SPOT</span>
          </button>
        </div>
      </div>
    </div>
  );
}
