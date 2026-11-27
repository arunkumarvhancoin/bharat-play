"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Trophy,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Share2,
  Building2,
  Landmark,
  ShieldCheck,
  Zap,
  Flame,
  Radio,
  Tv,
  Newspaper,
  HeartHandshake,
  School,
  Compass,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Check,
  ExternalLink,
  Target,
  GraduationCap,
  Lightbulb,
} from "lucide-react";
import { ScheduledEvent } from "../../data/events";

interface Chennai2050ChallengeViewProps {
  event: ScheduledEvent;
  otherEvents: ScheduledEvent[];
}

export default function Chennai2050ChallengeView({
  event,
}: Chennai2050ChallengeViewProps) {
  // Registration Form State
  const [schoolName, setSchoolName] = useState("");
  const [schoolBoard, setSchoolBoard] = useState("CBSE");
  const [numberOfTeams, setNumberOfTeams] = useState<"1" | "2">("1");
  const [preferredDate, setPreferredDate] = useState<
    "26-jan-2026" | "tamil-new-year" | "either"
  >("26-jan-2026");
  const [coordinatorName, setCoordinatorName] = useState("");
  const [coordinatorRole, setCoordinatorRole] = useState("");
  const [coordinatorPhone, setCoordinatorPhone] = useState("");
  const [coordinatorEmail, setCoordinatorEmail] = useState("");
  const [team1Members, setTeam1Members] = useState("");
  const [team2Members, setTeam2Members] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // FAQ open/close state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Share link handler
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    }
  };

  // Form Validation
  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!schoolName.trim()) errs.schoolName = "School name is required";
    if (!coordinatorName.trim())
      errs.coordinatorName = "Faculty coordinator name is required";
    if (!coordinatorPhone.trim() || coordinatorPhone.replace(/\D/g, "").length < 10)
      errs.coordinatorPhone = "Valid 10-digit mobile number required";
    if (!coordinatorEmail.trim() || !coordinatorEmail.includes("@"))
      errs.coordinatorEmail = "Valid email address required";
    if (!team1Members.trim())
      errs.team1Members = "Please list student names for Team 1 (4-6 students)";
    if (numberOfTeams === "2" && !team2Members.trim())
      errs.team2Members = "Please list student names for Team 2 (4-6 students)";

    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // WhatsApp Message Generator
  const generateWhatsAppRegistration = () => {
    const dateText =
      preferredDate === "26-jan-2026"
        ? "26 Jan 2026 (Republic Day)"
        : preferredDate === "tamil-new-year"
        ? "Tamil New Year Day (14 Apr 2026)"
        : "Either Date (Republic Day or Tamil New Year)";

    return [
      `🏆 *SCHOOL REGISTRATION: INNOVATION CHALLENGE CHENNAI@2050*`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `🏫 *School:* ${schoolName.trim()} (${schoolBoard})`,
      `👥 *Delegation:* ${numberOfTeams} ${numberOfTeams === "1" ? "Team (4-6 Students)" : "Teams (2 Teams, 8-12 Students)"}`,
      `📅 *Preferred Date:* ${dateText}`,
      `📍 *Venue:* Victoria Hall, Central, Chennai`,
      ``,
      `👤 *Faculty Coordinator:*`,
      `• *Name:* ${coordinatorName.trim()}`,
      `• *Designation:* ${coordinatorRole.trim() || "Teacher In-Charge"}`,
      `• *Phone:* ${coordinatorPhone.trim()}`,
      `• *Email:* ${coordinatorEmail.trim()}`,
      ``,
      `📋 *Team 1 Student Roster:*`,
      `${team1Members.trim()}`,
      ...(numberOfTeams === "2"
        ? [
            ``,
            `📋 *Team 2 Student Roster:*`,
            `${team2Members.trim()}`,
          ]
        : []),
      ...(additionalNotes.trim()
        ? [
            ``,
            `📝 *Notes/Requests:* ${additionalNotes.trim()}`,
          ]
        : []),
      ``,
      `Hi Arun Kumar Sir & Bharat Play Team! We are registering our school team(s) for the INNOVATION CHALLENGE: CHENNAI@2050. Please confirm our slot and share the competition orientation kit! 🎯`,
    ].join("\n");
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || isSubmitting) return;

    setIsSubmitting(true);
    const waText = generateWhatsAppRegistration();
    const waUrl = `https://wa.me/918237132553?text=${encodeURIComponent(waText)}`;

    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank");
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const generateSponsorInquiry = (category: string) => {
    const text = [
      `💼 *SPONSORSHIP & PARTNERSHIP INQUIRY: CHENNAI@2050*`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `🎯 *Event:* INNOVATION CHALLENGE: CHENNAI@2050`,
      `🏛️ *Venue:* Victoria Hall, Central, Chennai`,
      `🏷️ *Category of Interest:* ${category}`,
      ``,
      `Hello Bharat Play Team! Our organization is interested in exploring sponsorship / funding / media partnership opportunities for the Chennai@2050 1-Day Applied Game Challenge. Please share your partnership deck and commercial proposal.`,
    ].join("\n");

    const waUrl = `https://wa.me/918237132553?text=${encodeURIComponent(text)}`;
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank");
    }
  };

  const downloadCalendarFile = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Bharat Play//Chennai 2050 Innovation Challenge//EN",
      "BEGIN:VEVENT",
      `UID:${event.id || "chennai-2050"}-${Date.now()}@bharatplay.com`,
      `DTSTAMP:20260126T033000Z`,
      `DTSTART:20260126T033000Z`,
      `DTEND:20260126T120000Z`,
      `SUMMARY:INNOVATION CHALLENGE: CHENNAI@2050 (1-Day Applied Game Championship)`,
      `DESCRIPTION:1-Day In-Person Applied Game Championship for school children across Chennai competing across City Runners, Energetic, and Master of Disaster (MoD). Victoria Hall, Central.`,
      `LOCATION:Victoria Public Hall, EVR Periyar Salai, Park Town, Chennai, Tamil Nadu 600003`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `Chennai_2050_Innovation_Challenge.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-900 pb-24">
      {/* =================================================================== */}
      {/* 1. TOP BREADCRUMB & STICKY SUB-BAR                                 */}
      {/* =================================================================== */}
      <div className="bg-white/95 backdrop-blur-md border-b border-amber-200/60 sticky top-0 z-40 transition-all shadow-xs">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 overflow-hidden">
            <Link
              href="/"
              className="text-[#C2410C] hover:underline shrink-0"
            >
              BHARAT PLAY
            </Link>
            <span className="text-slate-300">/</span>
            <span className="truncate text-slate-700">
              CHENNAI@2050 CHALLENGE
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">COPIED</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-orange-600" />
                  <span className="hidden sm:inline">SHARE</span>
                </>
              )}
            </button>

            <a
              href="#register"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C2410C] hover:bg-[#9A3412] text-white text-xs font-black tracking-wide shadow-xs transition-transform hover:scale-[1.02] cursor-pointer"
            >
              <span>REGISTER SCHOOL TEAM</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. HERO SHOWCASE: High-Energy Tournament Launch                     */}
      {/* =================================================================== */}
      <section className="relative overflow-hidden pt-10 pb-16 bg-gradient-to-b from-orange-50/60 via-[#faf8f5] to-[#faf8f5]">
        {/* Decorative Grid Mesh */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#C2410C 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          {/* Main Tournament Hero Card */}
          <div
            className="bg-white rounded-[28px] border-3 border-[#0C2444] p-6 sm:p-10 md:p-12 relative overflow-hidden"
            style={{ boxShadow: "10px 10px 0px #0C2444" }}
          >
            {/* Corner Badge */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C2410C] text-white text-xs font-black tracking-wide uppercase shadow-xs">
                <Trophy className="w-3.5 h-3.5 text-amber-200" />
                <span>1-Day Applied Game Championship</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0C2444] text-white text-xs font-bold">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>₹30,000 Cash Prize Pool</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700 text-white text-xs font-bold">
                <School className="w-3 h-3 text-emerald-200" />
                <span>Ages 10+ · Grades 6–12</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold">
                <span>📍 Victoria Hall, Central</span>
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="max-w-4xl">
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.08] mb-4">
                INNOVATION CHALLENGE:{" "}
                <span className="text-[#C2410C] underline decoration-[#0C2444] decoration-4 underline-offset-6">
                  CHENNAI@2050
                </span>
              </h1>
              <p className="text-base sm:text-xl text-slate-700 font-medium leading-relaxed mb-8">
                Chennai’s landmark 1-Day In-Person Tabletop Championship. School
                children (aged 10+) from across Chennai unite in squads of 4 to 6
                to compete across <strong>3 Applied Games</strong> — simulating
                urban governance, clean energy transition, and climate disaster
                resilience.
              </p>
            </div>

            {/* Quick 4-Fact Bento Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-2 pb-8 border-t border-b border-slate-200 mb-8">
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                <span className="text-[11px] font-bold text-[#C2410C] uppercase tracking-wider block font-mono">
                  Tentative Date
                </span>
                <span className="text-sm sm:text-base font-black text-slate-900 block mt-0.5">
                  26 Jan 2026
                </span>
                <span className="text-[11px] text-slate-600 block">
                  Republic Day · Alt: Tamil New Year Day
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                <span className="text-[11px] font-bold text-[#0C2444] uppercase tracking-wider block font-mono">
                  Venue &amp; Location
                </span>
                <span className="text-sm sm:text-base font-black text-slate-900 block mt-0.5">
                  Victoria Hall, Central
                </span>
                <span className="text-[11px] text-slate-600 block">
                  Adjacent to Ripon Bldg &amp; Central Station
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block font-mono">
                  School Teams
                </span>
                <span className="text-sm sm:text-base font-black text-slate-900 block mt-0.5">
                  1 or 2 Teams / School
                </span>
                <span className="text-[11px] text-slate-600 block">
                  4 to 6 Student Delegates per Team
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200/80">
                <span className="text-[11px] font-bold text-orange-800 uppercase tracking-wider block font-mono">
                  Prize Stakes
                </span>
                <span className="text-sm sm:text-base font-black text-[#C2410C] block mt-0.5">
                  ₹30,000 Cash Pool
                </span>
                <span className="text-[11px] text-slate-600 block">
                  Trophies &amp; Medals Conferred by GCC
                </span>
              </div>
            </div>

            {/* CTAs & Inspiration */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#register"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#C2410C] hover:bg-[#9A3412] text-white font-black text-sm tracking-wide shadow-md transition-all hover:translate-y-[-2px] cursor-pointer"
              >
                <span>REGISTER SCHOOL TEAM (FREE)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#sponsorship"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0C2444] hover:bg-[#143560] text-white font-bold text-sm tracking-wide shadow-sm transition-all hover:translate-y-[-2px] cursor-pointer"
              >
                <HeartHandshake className="w-4 h-4 text-amber-300" />
                <span>COMMERCIAL SPONSORS &amp; DECK</span>
              </a>

              <button
                type="button"
                onClick={downloadCalendarFile}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-800 font-bold text-sm transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C2410C]" />
                <span>ADD TO CALENDAR</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 3. THE 3 APPLIED GAMES CHAMPIONSHIP BRACKET (WITS Model)           */}
      {/* =================================================================== */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#C2410C] text-xs font-black tracking-wider uppercase mb-3">
            <span>TOURNAMENT ARCHITECTURE</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            3 Applied Games. 3 Real-World Frontiers.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Modeled after premier global simulation championships (like TTOX
            WITS), teams face three rigorous stages that test systems
            intuition, civic strategy, and emergency decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Game 1: City Runners */}
          <div
            className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-7 relative flex flex-col justify-between hover:border-[#C2410C] transition-all hover:shadow-lg group"
            style={{ boxShadow: "6px 6px 0px #e2e8f0" }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-orange-50 text-[#C2410C] border border-orange-200 text-xs font-black font-mono">
                  ROUND 1
                </span>
                <span className="text-xs font-bold text-slate-400">
                  MORNING STAGE
                </span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-orange-100 border border-orange-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Building2 className="w-6 h-6 text-[#C2410C]" />
              </div>

              <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">
                1. City Runners
              </h3>
              <p className="text-xs font-mono font-bold text-[#C2410C] uppercase tracking-wider mb-4">
                Urban Governance &amp; Liveability
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Teams step into the shoes of city administrators, transport
                planners, and citizen advocates. They balance municipal budgets,
                metro rail transit corridors, air pollution thresholds, public
                parks, and resident happiness while navigating rapid urban
                expansion.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Public transit network efficiency &amp; last-mile feeder buses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Zoning tradeoffs, wetlands retention &amp; green coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Civic fiscal accountability &amp; citizen satisfaction</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold text-slate-500">
                6 Players per Pod
              </span>
              <span className="text-xs font-black text-[#C2410C]">
                Qualifying Round
              </span>
            </div>
          </div>

          {/* Game 2: Energetic */}
          <div
            className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-7 relative flex flex-col justify-between hover:border-[#0C2444] transition-all hover:shadow-lg group"
            style={{ boxShadow: "6px 6px 0px #e2e8f0" }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0C2444] border border-blue-200 text-xs font-black font-mono">
                  ROUND 2
                </span>
                <span className="text-xs font-bold text-slate-400">
                  AFTERNOON STAGE
                </span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-blue-100 border border-blue-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Zap className="w-6 h-6 text-[#0C2444]" />
              </div>

              <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">
                2. Energetic
              </h3>
              <p className="text-xs font-mono font-bold text-[#0C2444] uppercase tracking-wider mb-4">
                Decarbonization &amp; Clean Energy Math
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                A high-stakes, cooperative clean energy transition simulation.
                Students must decarbonize the regional power grid by 2050
                without causing blackouts, bankruptcy, or public backlash.
                Teams coordinate solar, offshore wind, hydro, and grid storage.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Real carbon budget arithmetic &amp; gigawatt balancing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Navigating public acceptance &amp; financial capital</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Phasing out fossil reliance with high grid stability</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold text-slate-500">
                Co-op Grid Systems
              </span>
              <span className="text-xs font-black text-[#0C2444]">
                Semi-Final Bracket
              </span>
            </div>
          </div>

          {/* Game 3: MoD (Master of Disaster) */}
          <div
            className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-7 relative flex flex-col justify-between hover:border-emerald-700 transition-all hover:shadow-lg group"
            style={{ boxShadow: "6px 6px 0px #e2e8f0" }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-black font-mono">
                  FINAL ROUND
                </span>
                <span className="text-xs font-bold text-emerald-600">
                  CHAMPIONSHIP ARENA
                </span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6 text-emerald-800" />
              </div>

              <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">
                3. Master of Disaster (MoD)
              </h3>
              <p className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider mb-4">
                Disaster Preparedness &amp; Flood Resilience
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                The ultimate final showdown grounded in Chennai’s acute climate
                vulnerabilities. Finalist teams face compounding shocks: severe
                monsoonal deluges, coastal cyclone surges, extreme heat, and
                potable water scarcity — testing collective survival and rapid
                restoration.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Chennai flood topography &amp; storm drain defense</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Emergency relief logistics &amp; vulnerable community rescue</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Post-disaster infrastructure and hospital grid revival</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold text-slate-500">
                Finalists Live Arena
              </span>
              <span className="text-xs font-black text-emerald-700">
                Trophy Decider
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 4. PRIZE POOL & DIGNITARY CONFERMENT                               */}
      {/* =================================================================== */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 py-10">
        <div
          className="bg-[#0C2444] rounded-[28px] border-3 border-slate-900 text-white p-7 sm:p-10 md:p-12 relative overflow-hidden"
          style={{ boxShadow: "8px 8px 0px #C2410C" }}
        >
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-8 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5 text-amber-300" />
              <span>Championship Honors &amp; Awards</span>
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
              ₹30,000 Cash Pool &amp; City Dignitary Honors
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Winners are celebrated not just with cash prizes and perpetual
              silver cups, but recognized directly by Chennai’s civic and
              educational authorities.
            </p>
          </div>

          {/* 3 Prize Cards Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10 relative z-10">
            {/* 1st Prize */}
            <div className="bg-gradient-to-b from-amber-500/20 to-amber-600/10 border-2 border-amber-400/60 rounded-2xl p-6 text-center relative overflow-hidden">
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase">
                WINNER
              </div>
              <div className="w-12 h-12 rounded-full bg-amber-400/30 flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-6 h-6 text-amber-300" />
              </div>
              <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest block">
                FIRST PRIZE
              </span>
              <span className="text-3xl sm:text-4xl font-black text-white block my-1">
                ₹15,000
              </span>
              <p className="text-xs text-slate-300 mt-2">
                Chennai@2050 Championship Cup, Gold Medals &amp; Merit Citations
              </p>
            </div>

            {/* 2nd Prize */}
            <div className="bg-white/5 border border-white/20 rounded-2xl p-6 text-center relative">
              <div className="w-12 h-12 rounded-full bg-slate-300/20 flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-slate-200" />
              </div>
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest block">
                SECOND PRIZE
              </span>
              <span className="text-3xl sm:text-4xl font-black text-white block my-1">
                ₹10,000
              </span>
              <p className="text-xs text-slate-300 mt-2">
                Runner-Up Rolling Trophy, Silver Medals &amp; Citations
              </p>
            </div>

            {/* 3rd Prize */}
            <div className="bg-white/5 border border-white/20 rounded-2xl p-6 text-center relative">
              <div className="w-12 h-12 rounded-full bg-amber-700/30 flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-amber-400" />
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
                THIRD PRIZE
              </span>
              <span className="text-3xl sm:text-4xl font-black text-white block my-1">
                ₹5,000
              </span>
              <p className="text-xs text-slate-300 mt-2">
                Second Runner-Up Trophy, Bronze Medals &amp; Citations
              </p>
            </div>
          </div>

          {/* Dignitaries Callout */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/10 border border-white/15 relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-400/40 flex items-center justify-center shrink-0">
                <Landmark className="w-6 h-6 text-orange-300" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-orange-300 uppercase tracking-wider block">
                  VALEDICTORY &amp; AWARD CONFERMENT
                </span>
                <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                  Trophies &amp; Cash Citations Conferred by:
                </p>
                <p className="text-xs sm:text-sm text-slate-300">
                  • Joint Commissioner, Greater Chennai Corporation (GCC) · OR
                  Mayor of Chennai Corporation · OR Principal Education Secretary
                </p>
              </div>
            </div>

            <a
              href="#register"
              className="px-5 py-2.5 rounded-xl bg-[#C2410C] hover:bg-[#ea580c] text-white font-bold text-xs shrink-0 transition-colors shadow-xs"
            >
              REGISTER DELEGATION NOW
            </a>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 5. SCHOOL TEAM REGISTRATION FORM                                   */}
      {/* =================================================================== */}
      <section id="register" className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Context & Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C2410C]/10 text-[#C2410C] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <span>SCHOOL DELEGATION</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Register Your School Teams
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Schools across Chennai are invited to register <strong>1 or 2 teams</strong>. Each team consists of 4 to 6 student delegates (Aged 10+, Grades 6 to 12) accompanied by a faculty coordinator.
              </p>
            </div>

            <div className="space-y-3.5">
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <span className="text-xs font-mono font-bold text-[#C2410C] uppercase tracking-wider block mb-1">
                  Rule 1: Squad Composition
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Each team must have 4 to 6 student members. Schools may send Team A and Team B to compete in separate tournament brackets.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <span className="text-xs font-mono font-bold text-[#0C2444] uppercase tracking-wider block mb-1">
                  Rule 2: No Prior Board Game Mastery Needed
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bharat Play facilitators will guide every team through rules and trial simulations prior to round scoring. Pure systems thinking, communication, and strategy prevail.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  Rule 3: Sponsored &amp; Free Entry
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  School team entry is fully sponsored by our commercial partners. There is zero participation fee for registered schools.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200">
              <span className="text-xs font-bold text-amber-900 block mb-1">
                Need Help or Bulk School Registration?
              </span>
              <p className="text-xs text-amber-800 leading-relaxed mb-3">
                Talk directly with our championship directors on WhatsApp to confirm multiple branches or special requirements.
              </p>
              <a
                href="https://wa.me/918237132553?text=Hi%20Bharat%20Play%20Team!%20I%20represent%20a%20school%20and%20would%20like%20to%20know%20more%20about%20the%20Chennai@2050%20Championship."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#C2410C] hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat with Arun Kumar / Bharat Play (+91 82371 32553)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Registration Card */}
          <div
            className="lg:col-span-7 bg-white rounded-3xl border-2 border-slate-300 p-6 sm:p-8 relative"
            style={{ boxShadow: "8px 8px 0px #0C2444" }}
          >
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-emerald-700" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Registration Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{coordinatorName}</strong>! Your school registration details for <strong>{schoolName}</strong> have been opened in WhatsApp for instant confirmation with our team.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800"
                  >
                    Edit / Register Another School
                  </button>
                  <button
                    type="button"
                    onClick={downloadCalendarFile}
                    className="px-5 py-2 rounded-xl bg-[#0C2444] text-white text-xs font-bold hover:bg-[#143560]"
                  >
                    Download Calendar Entry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-5">
                <div className="border-b border-slate-200 pb-3 mb-2 flex items-center justify-between">
                  <span className="text-sm font-black text-slate-900 uppercase tracking-wide">
                    Official School Registration Form
                  </span>
                  <span className="text-[11px] font-mono font-bold text-[#C2410C]">
                    Zero Fee · Sponsored Entry
                  </span>
                </div>

                {/* School Name & Board */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      School Name &amp; Campus Location *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. SBOA School / DAV Girls, Gopalapuram"
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#C2410C]"
                    />
                    {formErrors.schoolName && (
                      <span className="text-[11px] text-red-600">
                        {formErrors.schoolName}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Affiliated Board
                    </label>
                    <select
                      value={schoolBoard}
                      onChange={(e) => setSchoolBoard(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#C2410C] bg-white"
                    >
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE / ISC">ICSE / ISC</option>
                      <option value="Matriculation">Matriculation</option>
                      <option value="Tamil Nadu State Board">State Board</option>
                      <option value="Cambridge (IGCSE)">Cambridge (IGCSE)</option>
                      <option value="IB (International Baccalaureate)">IB</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Number of Teams & Preferred Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Number of Teams to Register
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setNumberOfTeams("1")}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                          numberOfTeams === "1"
                            ? "bg-[#0C2444] text-white border-[#0C2444]"
                            : "bg-white text-slate-700 border-slate-300"
                        }`}
                      >
                        1 Team (4-6 Students)
                      </button>
                      <button
                        type="button"
                        onClick={() => setNumberOfTeams("2")}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                          numberOfTeams === "2"
                            ? "bg-[#0C2444] text-white border-[#0C2444]"
                            : "bg-white text-slate-700 border-slate-300"
                        }`}
                      >
                        2 Teams (8-12 Students)
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Preferred Date Slot
                    </label>
                    <select
                      value={preferredDate}
                      onChange={(e) =>
                        setPreferredDate(
                          e.target.value as "26-jan-2026" | "tamil-new-year" | "either"
                        )
                      }
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#C2410C] bg-white"
                    >
                      <option value="26-jan-2026">
                        26 Jan 2026 (Republic Day) — Primary
                      </option>
                      <option value="tamil-new-year">
                        14 Apr 2026 (Tamil New Year Day) — Alternative
                      </option>
                      <option value="either">
                        Either Date Works for Our School
                      </option>
                    </select>
                  </div>
                </div>

                {/* Faculty Coordinator Info */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <span className="text-[11px] font-mono font-bold text-[#C2410C] uppercase tracking-wider block">
                    Teacher / Faculty In-Charge Details
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">
                        Coordinator Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Mrs. Lakshmi Narayanan"
                        value={coordinatorName}
                        onChange={(e) => setCoordinatorName(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white"
                      />
                      {formErrors.coordinatorName && (
                        <span className="text-[11px] text-red-600">
                          {formErrors.coordinatorName}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">
                        Designation / Department
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Head of Science / Social Studies"
                        value={coordinatorRole}
                        onChange={(e) => setCoordinatorRole(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">
                        WhatsApp Contact Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={coordinatorPhone}
                        onChange={(e) => setCoordinatorPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white"
                      />
                      {formErrors.coordinatorPhone && (
                        <span className="text-[11px] text-red-600">
                          {formErrors.coordinatorPhone}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        placeholder="teacher@school.edu.in"
                        value={coordinatorEmail}
                        onChange={(e) => setCoordinatorEmail(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white"
                      />
                      {formErrors.coordinatorEmail && (
                        <span className="text-[11px] text-red-600">
                          {formErrors.coordinatorEmail}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Student Roster Fields */}
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Team 1 Student Roster (Names &amp; Grades) *
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. 1. Aditi Sharma (Gr 9), 2. K. Karthik (Gr 10), 3. Rohan Verma (Gr 8), 4. Meera S. (Gr 9)..."
                      value={team1Members}
                      onChange={(e) => setTeam1Members(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#C2410C]"
                    />
                    {formErrors.team1Members && (
                      <span className="text-[11px] text-red-600">
                        {formErrors.team1Members}
                      </span>
                    )}
                  </div>

                  {numberOfTeams === "2" && (
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">
                        Team 2 Student Roster (Names &amp; Grades) *
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. 1. Sanjay R. (Gr 11), 2. Priya Nair (Gr 10), 3. Harish V. (Gr 9), 4. Sneha G. (Gr 11)..."
                        value={team2Members}
                        onChange={(e) => setTeam2Members(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#C2410C]"
                      />
                      {formErrors.team2Members && (
                        <span className="text-[11px] text-red-600">
                          {formErrors.team2Members}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Additional Notes or Special Requests (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. dietary preferences, special accessibility needs, arrival timing"
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#C2410C]"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#C2410C] hover:bg-[#9A3412] text-white font-black text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>
                    SUBMIT &amp; CONFIRM ON WHATSAPP (+91 82371 32553)
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 6. COMMERCIAL FUNDING & SPONSORSHIP SECTION                        */}
      {/* =================================================================== */}
      <section
        id="sponsorship"
        className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 scroll-mt-20"
      >
        <div className="bg-white rounded-[28px] border-2 border-slate-300 p-6 sm:p-10 relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0C2444] border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <HeartHandshake className="w-3.5 h-3.5 text-[#0C2444]" />
              <span>COMMERCIAL SPONSORSHIPS &amp; IN-KIND PARTNERS</span>
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Fuel Chennai&apos;s Next Generation of Civic Innovators
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              We invite civic-minded corporate leaders, banks, hospitality
              groups, transit operators, and real estate developers to sponsor
              the event, power our student prizes, and align with Greater Chennai
              Corporation’s sustainability vision.
            </p>
          </div>

          {/* Targeted Commercial Sectors Bento */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <Building2 className="w-6 h-6 text-[#C2410C] mx-auto mb-1.5" />
              <span className="text-xs font-bold text-slate-900 block">
                Commercial Banks
              </span>
              <span className="text-[10px] text-slate-500 block">
                Financial Literacy &amp; ESG
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <Compass className="w-6 h-6 text-[#0C2444] mx-auto mb-1.5" />
              <span className="text-xs font-bold text-slate-900 block">
                Hotels &amp; Tourism
              </span>
              <span className="text-[10px] text-slate-500 block">
                Hospitality &amp; Heritage
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <Zap className="w-6 h-6 text-amber-600 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-slate-900 block">
                Public Transport
              </span>
              <span className="text-[10px] text-slate-500 block">
                CMRL &amp; Urban Mobility
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <Landmark className="w-6 h-6 text-emerald-700 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-slate-900 block">
                Real Estate
              </span>
              <span className="text-[10px] text-slate-500 block">
                Sustainable Infrastructure
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <Flame className="w-6 h-6 text-orange-600 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-slate-900 block">
                Restaurants &amp; F&amp;B
              </span>
              <span className="text-[10px] text-slate-500 block">
                Student Meals &amp; Catering
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <ShieldCheck className="w-6 h-6 text-indigo-700 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-slate-900 block">
                Tech &amp; Retail
              </span>
              <span className="text-[10px] text-slate-500 block">
                STEM &amp; Innovation Kits
              </span>
            </div>
          </div>

          {/* Action Row */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#C2410C] uppercase tracking-wider block">
                Sponsorship Proposal Deck (PDF)
              </span>
              <p className="text-sm font-bold text-slate-900 mt-0.5">
                Detailed deliverables, branding tiers, CSR certifications, and
                Victoria Hall exhibition floor plans.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => generateSponsorInquiry("Corporate Sponsor / Banking / Real Estate")}
                className="px-5 py-2.5 rounded-xl bg-[#0C2444] hover:bg-[#143560] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-amber-300" />
                <span>Request Deck via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 7. PR & MEDIA PARTNERS (Print, Radio, TV)                           */}
      {/* =================================================================== */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 py-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border-2 border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Radio className="w-3.5 h-3.5 text-orange-400" />
              <span>MEDIA &amp; BROADCAST COLLABORATIONS</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Official Media Partners: Print, Radio &amp; Television
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We are finalizing partnerships with leading Chennai print dailies, FM radio stations (Suryan FM, Radio Mirchi, etc.), and regional TV networks for both paid campaigns and in-kind event coverage.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 text-xs text-slate-200">
              <Newspaper className="w-4 h-4 text-orange-400" />
              <span>Print Dailies</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 text-xs text-slate-200">
              <Radio className="w-4 h-4 text-amber-400" />
              <span>FM Radio</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 text-xs text-slate-200">
              <Tv className="w-4 h-4 text-emerald-400" />
              <span>Regional TV</span>
            </div>

            <button
              type="button"
              onClick={() => generateSponsorInquiry("Media Partner / Radio / TV / Print")}
              className="px-4 py-2 rounded-xl bg-[#C2410C] hover:bg-[#ea580c] text-white text-xs font-bold cursor-pointer"
            >
              Partner with Us
            </button>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 8. BUSINESS OUTCOME: PLAY LABS IN SCHOOLS                           */}
      {/* =================================================================== */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12">
        <div
          className="bg-white rounded-[28px] border-3 border-[#C2410C] p-6 sm:p-10 relative overflow-hidden"
          style={{ boxShadow: "8px 8px 0px #C2410C" }}
        >
          <div className="max-w-3xl mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#C2410C] text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <GraduationCap className="w-3.5 h-3.5 text-[#C2410C]" />
              <span>LONG-TERM INSTITUTIONAL VISION</span>
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Beyond the Championship: Equipping Schools with PLAY LABS
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              The 1-day challenge is a catalyst. Delegates and jury will
              recommend participating schools establish permanent <strong>PLAY LABS</strong>{" "}
              on campus — where students sharpen problem-solving mindsets and
              build civic simulation tools for real societal change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80">
              <div className="w-10 h-10 rounded-xl bg-[#C2410C]/10 flex items-center justify-center mb-3">
                <Lightbulb className="w-5 h-5 text-[#C2410C]" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">
                Early Systems Thinking
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learners develop intuition for complex interdependencies — budget
                deficits, water logging, renewable grid balancing — through
                screen-free tactile play.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80">
              <div className="w-10 h-10 rounded-xl bg-[#0C2444]/10 flex items-center justify-center mb-3">
                <Target className="w-5 h-5 text-[#0C2444]" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">
                Learners Become Game Builders
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Students do not just play games; they learn to model local
                neighborhood issues into physical simulations that can be taken
                beyond classrooms to spark public dialogue.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
              <div className="w-10 h-10 rounded-xl bg-emerald-700/10 flex items-center justify-center mb-3">
                <School className="w-5 h-5 text-emerald-800" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">
                Faculty &amp; NEP 2020 Alignment
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seamlessly integrates with experiential learning mandates under
                NEP 2020 with ready curriculum rubrics, faculty toolkits, and
                accredited student fellowships.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <span className="text-xs text-slate-500">
              Interested in setting up a Bharat Play Play Lab at your school?
            </span>
            <a
              href="https://wa.me/918237132553?text=Hi%20Bharat%20Play!%20We%20are%20interested%20in%20setting%20up%20a%20PLAY%20LAB%20at%20our%20school%20campus."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C2410C] hover:bg-[#9A3412] text-white text-xs font-bold transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Request Play Lab Campus Briefing</span>
            </a>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 9. VENUE SHOWCASE: VICTORIA HALL, CENTRAL                          */}
      {/* =================================================================== */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C2410C]">
              <MapPin className="w-4 h-4" />
              <span>CENTRAL CHENNAI HERITAGE VENUE</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Victoria Public Hall, Park Town, Central
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Situated right next to the Greater Chennai Corporation headquarters
              (Ripon Building) and Chennai Central Railway &amp; Metro station.
              Easily accessible by suburban trains, metro, and city buses from
              all Chennai neighborhoods.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://maps.google.com/?q=Victoria+Public+Hall+EVR+Periyar+Salai+Park+Town+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0C2444] text-white text-xs font-bold hover:bg-[#143560] transition-colors"
            >
              <Compass className="w-4 h-4 text-amber-300" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 10. FREQUENTLY ASKED QUESTIONS                                     */}
      {/* =================================================================== */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Everything schools, teachers, and parents need to know about the
              1-day championship.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "What is the age group and grade eligibility?",
                a: "The championship is designed for school children aged 10+ (typically Grades 6 through 12). Teams can have a mix of age groups from the same school.",
              },
              {
                q: "How many students are there in a team, and how many teams can a school register?",
                a: "Each team consists of 4 to 6 student delegates. Schools are welcome to register either 1 team (Team A) or 2 teams (Team A and Team B) to represent their institution.",
              },
              {
                q: "Do students need prior board game or simulation experience?",
                a: "No prior experience is necessary! On the championship morning, our expert facilitators run dedicated rule walkthroughs and interactive mini-rounds so all delegates play on an equal, intuitive footing.",
              },
              {
                q: "Is there any registration fee for schools?",
                a: "School participation is fully sponsored by our commercial partners. Registered schools and student delegates pay zero registration fees.",
              },
              {
                q: "Why are there two tentative dates mentioned (26 Jan & Tamil New Year)?",
                a: "The primary scheduled date is Republic Day (26 Jan 2026), with Tamil New Year Day (14 Apr 2026) reserved as an alternative to accommodate school examination schedules. Your preferred date can be selected in the registration form.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-4 h-4 text-[#C2410C] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
