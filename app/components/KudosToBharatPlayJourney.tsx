/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import {
  MapPin,
  Calendar,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Compass,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface JourneyStop {
  id: string;
  stepNumber: string;
  sticker: string;
  location: string;
  date: string;
  title: string;
  twoLiner: string;
  primaryImage: string;
  primaryCaption: string;
  secondaryImage?: string;
  secondaryCaption?: string;
  tilt: string;
  themeColor: string;
}

const JOURNEY_STOPS: JourneyStop[] = [
  {
    id: "stop-01",
    stepNumber: "01",
    sticker: "🌱 The Spark",
    location: "FLAME University · Pune",
    date: "JULY 2023",
    title: "Genesis at FLAME University",
    twoLiner:
      "Where it all began. Dr. Balaji Kalluri prototypes City Runners with high school students, turning complex urban crises into tactile tabletop gameplay.",
    primaryImage: "/about/journey/flame_teens_gameplay.jpg",
    primaryCaption: "Teens playing City Runners at FLAME",
    secondaryImage: "/about/journey/flame_city_visioning.jpg",
    secondaryCaption: "Civic counter-mapping lab",
    tilt: "rotate-0 sm:rotate-[-2deg]",
    themeColor: "#C2410C",
  },
  {
    id: "stop-02",
    stepNumber: "02",
    sticker: "🇳🇱 Dutch Debut",
    location: "Maastricht, Netherlands",
    date: "NOV 2023",
    title: "BEHAVE Conference Premiere",
    twoLiner:
      "Taking BiBo to Europe! International scientists and economists in Maastricht playtest circular green buildings and net-zero trade-offs.",
    primaryImage: "/about/journey/maastricht_workshop.jpg",
    primaryCaption: "BiBo workshop at BEHAVE, Maastricht",
    secondaryImage: "/about/journey/maastricht_exhibition.jpg",
    secondaryCaption: "Serious games exhibition booth",
    tilt: "rotate-0 sm:rotate-[2deg]",
    themeColor: "#0C2444",
  },
  {
    id: "stop-03",
    stepNumber: "03",
    sticker: "❄️ Nordic Science",
    location: "Halden, Norway",
    date: "DEC 2023",
    title: "Nordic Energy Systems Lab",
    twoLiner:
      "Simulating just energy transitions and infrastructure resilience alongside Scandinavian researchers at the Institute for Energy Technology.",
    primaryImage: "/about/journey/ife_norway.jpg",
    primaryCaption: "Energy simulation with IFE Norway scientists",
    tilt: "rotate-0 sm:rotate-[-1.5deg]",
    themeColor: "#15803D",
  },
  {
    id: "stop-04",
    stepNumber: "04",
    sticker: "🎖️ Army Base",
    location: "Jhansi, Uttar Pradesh",
    date: "APR 2024",
    title: "Indian Army Leadership Lab",
    twoLiner:
      "Equipping officers of the Indian Army Corps of EME with serious games to design sustainable military cantonments and resource resilience.",
    primaryImage: "/about/journey/army_jhansi.jpg",
    primaryCaption: "BiBo lab with Army EME Officers in Jhansi",
    tilt: "rotate-0 sm:rotate-[1.8deg]",
    themeColor: "#0C2444",
  },
  {
    id: "stop-05",
    stepNumber: "05",
    sticker: "🏆 Global Merit",
    location: "Helsinki · Bangalore · NY",
    date: "2023 – 2024",
    title: "Creativity Honors & IISc Ambassador",
    twoLiner:
      "Awarded Leadership in Creativity by CCE Finland in Helsinki, and named among the Top 100 Design Ambassadors in India by IISc Bangalore.",
    primaryImage: "/about/journey/cce_finland_award.jpeg",
    primaryCaption: "Leadership in Creativity Award from CCE Finland",
    tilt: "rotate-0 sm:rotate-[-2deg]",
    themeColor: "#C2410C",
  },
  {
    id: "stop-06",
    stepNumber: "06",
    sticker: "🏛️ Civic Sandbox",
    location: "Bengaluru & Pune",
    date: "2024",
    title: "Civic Policy & Defence Tech",
    twoLiner:
      "Simulating ward-level municipal budgets with Janaagraha policy advocates in Bengaluru, and multi-crisis tabletop play at DIAT Pune.",
    primaryImage: "/about/journey/janaagraha.jpg",
    primaryCaption: "City Runners with Janaagraha, Bengaluru",
    secondaryImage: "/about/journey/diat_pune.jpg",
    secondaryCaption: "Crisis simulation at DIAT Pune",
    tilt: "rotate-0 sm:rotate-[1.5deg]",
    themeColor: "#15803D",
  },
  {
    id: "stop-07",
    stepNumber: "07",
    sticker: "🎓 IIT Circuit",
    location: "Madras · Kharagpur · Delhi",
    date: "2024 – 2025",
    title: "Premier IIT Tabletop Labs",
    twoLiner:
      "Multi-agency governance simulations at ICSR IIT Madras with municipal bodies, green buildings at IIT Kharagpur, and energy labs at IIT Delhi.",
    primaryImage: "/about/journey/iitm_good_governance.jpeg",
    primaryCaption: "Governance lab at ICSR IIT Madras",
    secondaryImage: "/about/journey/iitkgp_workshop.jpeg",
    secondaryCaption: "Green building lab at IIT Kharagpur",
    tilt: "rotate-0 sm:rotate-[-1.8deg]",
    themeColor: "#0C2444",
  },
  {
    id: "stop-08",
    stepNumber: "08",
    sticker: "📚 Teacher Fest",
    location: "Tellapur · Hyderabad",
    date: "MAY 2025",
    title: "Educator Lab: Gyanotsav Fest",
    twoLiner:
      "Training 40+ high school educators at Meru International School to replace lecture fatigue with tactile, screen-free classroom play.",
    primaryImage: "/about/journey/hyderabad_teachers.jpeg",
    primaryCaption: "Educator training lab at Meru International",
    tilt: "rotate-0 sm:rotate-[2deg]",
    themeColor: "#C2410C",
  },
  {
    id: "stop-09",
    stepNumber: "09",
    sticker: "🚀 Chennai HQ",
    location: "Kolathur · Chennai, Tamil Nadu",
    date: "JULY 2024 – PRESENT",
    title: "Bharat Play: The National Movement",
    twoLiner:
      "KUDOS formally incorporates into Bharat Play Innovations in Chennai — expanding purposeful play into family living rooms and communities nationwide.",
    primaryImage: "/about/journey/family_resilience.jpg",
    primaryCaption: "Family play workshop on Vijayadasami, Chennai",
    tilt: "rotate-0 sm:rotate-[-1.5deg]",
    themeColor: "#15803D",
  },
];

export default function KudosToBharatPlayJourney() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const collapseAndScrollUp = () => {
    setIsExpanded(false);
    const sectionEl = document.getElementById("our-journey");
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="our-journey" className="mb-16 sm:mb-24 md:mb-32 scroll-mt-24 sm:scroll-mt-28">
      {/* ============================================================== */}
      {/* SECTION HEADER — MOBILE OPTIMIZED & CLEAN                      */}
      {/* ============================================================== */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 sm:gap-6 mb-8 sm:mb-14">
        <div className="max-w-2xl">
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-3">
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-brand-orange text-white font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>OUR EXPEDITION TRAIL</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-mono text-[10px] sm:text-xs font-bold uppercase">
              <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-800" />
              <span>9 FIELD STOPS · 15 PHOTOS</span>
            </span>
          </div>

          {/* Main Title */}
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-brand-navy leading-[1.05] sm:leading-[1.0] mb-2 sm:mb-3">
            FROM <span className="text-brand-orange">KUDOS</span> TO{" "}
            <span className="text-[#0C2444]">BHARAT PLAY.</span>
          </h2>

          {/* Subtitle / Teaser */}
          <p className="text-sm sm:text-base md:text-lg text-slate-700 font-medium leading-relaxed max-w-xl">
            Follow our expedition trail through real field snapshots — tracing
            how a university lab in Pune journeyed across Europe, military bases,
            and premier IITs into a national movement.
          </p>
        </div>

        {/* Action Button to Expand / Collapse */}
        <div className="shrink-0 pt-1 sm:pt-0">
          <button
            type="button"
            onClick={toggleExpand}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
              isExpanded
                ? "bg-white text-brand-navy border-2 border-brand-navy hover:bg-slate-50 shadow-xs"
                : "bg-brand-orange hover:bg-orange-600 text-white shadow-md active:scale-95 sm:hover:scale-105"
            }`}
          >
            <span>
              {isExpanded
                ? "COLLAPSE JOURNEY TRAIL"
                : "EXPAND JOURNEY TRAIL (9 STOPS)"}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 transition-transform duration-200" />
            ) : (
              <ChevronDown className="w-4 h-4 transition-transform duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* EXPANDABLE SECTION CONTENT (ONLY SHOWN WHEN EXPANDED)          */}
      {/* ============================================================== */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-8 sm:mt-14 lg:mt-20">
              {/* ============================================================== */}
              {/* MEANDERING DOTTED TRAIL WITH ORGANIC PHOTO POLAROIDS           */}
              {/* ============================================================== */}
              <div className="relative">
                {/* Playful Dotted Trail Running Behind (Centered on Desktop, Left on Mobile) */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-4 bottom-12 w-0 border-l-3 border-dashed border-amber-300 pointer-events-none z-0 hidden lg:block"
                  aria-hidden="true"
                />
                <div
                  className="absolute left-4 sm:left-6 top-3 bottom-10 w-0 border-l-2 sm:border-l-3 border-dashed border-amber-300 pointer-events-none z-0 lg:hidden"
                  aria-hidden="true"
                />

                {/* Milestone Steps Stream */}
                <div className="space-y-10 sm:space-y-16 lg:space-y-24">
                  {JOURNEY_STOPS.map((stop, index) => {
                    const isEven = index % 2 === 1;
                    const hasSecondary = !!stop.secondaryImage;

                    return (
                      <div
                        key={stop.id}
                        id={stop.id}
                        className="relative z-10 pl-9 sm:pl-14 lg:pl-0 scroll-mt-28"
                      >
                        {/* PLAYFUL NUMBERED PIN ON THE TRAIL */}
                        {/* Desktop: Pin in center line */}
                        <div
                          className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-6 w-10 h-10 rounded-full border-2 border-[#0C2444] bg-white items-center justify-center font-mono text-xs font-black shadow-sm z-20 hover:scale-110 transition-transform duration-200"
                          style={{ color: stop.themeColor }}
                        >
                          {stop.stepNumber}
                        </div>

                        {/* Mobile: Pin on left line */}
                        <div
                          className="lg:hidden absolute left-4 sm:left-6 -translate-x-1/2 top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#0C2444] bg-white flex items-center justify-center font-mono text-[10px] sm:text-xs font-black shadow-xs z-20"
                          style={{ color: stop.themeColor }}
                        >
                          {stop.stepNumber}
                        </div>

                        {/* 2-COLUMN PLAYFUL EXPEDITION ROW */}
                        <div
                          className={`grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-12 items-center ${
                            isEven ? "lg:flex-row-reverse" : ""
                          }`}
                        >
                          {/* ==================================================== */}
                          {/* COLUMN 1: THE ORGANIC PHOTO WITH TILT & TAPE        */}
                          {/* ==================================================== */}
                          <div
                            className={`lg:col-span-6 ${
                              isEven ? "lg:order-2" : "lg:order-1"
                            }`}
                          >
                            {hasSecondary ? (
                              <div className="grid grid-cols-2 gap-2 sm:gap-3.5">
                                {/* Photo 1 */}
                                <div
                                  className={`relative group bg-white p-1.5 pb-2 sm:p-2 sm:pb-3 rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md border border-amber-200/90 transition-transform duration-300 sm:hover:rotate-0 sm:hover:scale-[1.03] ${stop.tilt}`}
                                >
                                  {/* Cute Tape Sticker */}
                                  <div className="absolute -top-1.5 sm:-top-2 left-1/2 -translate-x-1/2 w-9 sm:w-12 h-3 sm:h-3.5 bg-amber-200/80 border border-amber-300/80 rotate-[-1deg] shadow-2xs pointer-events-none" />
                                  <div className="w-full aspect-[4/3] sm:aspect-auto sm:h-44 lg:h-52 overflow-hidden rounded-lg sm:rounded-xl bg-slate-100">
                                    <img
                                      src={stop.primaryImage}
                                      alt={stop.primaryCaption}
                                      loading="lazy"
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                  </div>
                                  <p className="font-mono text-[9px] sm:text-[10px] text-slate-500 font-semibold mt-1 sm:mt-1.5 px-0.5 leading-tight truncate">
                                    📷 {stop.primaryCaption}
                                  </p>
                                </div>

                                {/* Photo 2 */}
                                <div
                                  className={`relative group bg-white p-1.5 pb-2 sm:p-2 sm:pb-3 rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md border border-amber-200/90 transition-transform duration-300 sm:hover:rotate-0 sm:hover:scale-[1.03] ${
                                    stop.tilt.includes("-")
                                      ? "rotate-0 sm:rotate-[1.5deg]"
                                      : "rotate-0 sm:rotate-[-1.5deg]"
                                  }`}
                                >
                                  {/* Cute Tape Sticker */}
                                  <div className="absolute -top-1.5 sm:-top-2 left-1/2 -translate-x-1/2 w-9 sm:w-12 h-3 sm:h-3.5 bg-amber-200/80 border border-amber-300/80 rotate-[1deg] shadow-2xs pointer-events-none" />
                                  <div className="w-full aspect-[4/3] sm:aspect-auto sm:h-44 lg:h-52 overflow-hidden rounded-lg sm:rounded-xl bg-slate-100">
                                    <img
                                      src={stop.secondaryImage}
                                      alt={stop.secondaryCaption || stop.title}
                                      loading="lazy"
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                  </div>
                                  <p className="font-mono text-[9px] sm:text-[10px] text-slate-500 font-semibold mt-1 sm:mt-1.5 px-0.5 leading-tight truncate">
                                    📷 {stop.secondaryCaption}
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <div
                                className={`relative group bg-white p-2 pb-2.5 sm:p-2.5 sm:pb-3.5 rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md border border-amber-200/90 max-w-lg transition-transform duration-300 sm:hover:rotate-0 sm:hover:scale-[1.02] ${stop.tilt}`}
                              >
                                {/* Cute Tape Sticker */}
                                <div className="absolute -top-2 sm:-top-2.5 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-3 sm:h-4 bg-amber-200/80 border border-amber-300/80 rotate-[-1deg] shadow-2xs pointer-events-none" />
                                <div className="w-full aspect-[16/10] sm:aspect-[4/3] lg:h-76 overflow-hidden rounded-lg sm:rounded-xl bg-slate-100">
                                  <img
                                    src={stop.primaryImage}
                                    alt={stop.primaryCaption}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                <p className="font-mono text-[10px] sm:text-[11px] text-slate-500 font-semibold mt-1.5 sm:mt-2 px-1 leading-tight">
                                  📷 {stop.primaryCaption}
                                </p>
                              </div>
                            )}
                          </div>

                          {/* ==================================================== */}
                          {/* COLUMN 2: TITLE & PUNCHY TWO-LINER (NO BOXED CARD)  */}
                          {/* ==================================================== */}
                          <div
                            className={`lg:col-span-6 flex flex-col justify-center ${
                              isEven
                                ? "lg:order-1 lg:text-right lg:items-end"
                                : "lg:order-2 lg:text-left lg:items-start"
                            }`}
                          >
                            {/* Fun Location & Sticker Pills */}
                            <div
                              className={`flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-2.5 ${
                                isEven ? "lg:justify-end" : "lg:justify-start"
                              }`}
                            >
                              <span className="inline-flex items-center gap-1 font-mono text-[10px] sm:text-[11px] font-bold text-brand-orange bg-amber-50 border border-amber-200/80 px-2 sm:px-2.5 py-0.5 rounded-full shadow-2xs">
                                <span>{stop.sticker}</span>
                              </span>

                              <span className="inline-flex items-center gap-1 font-mono text-[10px] sm:text-[11px] font-bold text-slate-600 bg-slate-100 px-2 sm:px-2.5 py-0.5 rounded-full">
                                <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400" />
                                <span>{stop.location}</span>
                              </span>

                              <span className="inline-flex items-center gap-1 font-mono text-[9px] sm:text-[11px] font-bold text-slate-500 bg-slate-100 px-1.5 sm:px-2 py-0.5 rounded-full">
                                <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400" />
                                <span>{stop.date}</span>
                              </span>
                            </div>

                            {/* Step Title */}
                            <h3 className="font-display text-xl sm:text-3xl lg:text-4xl font-black uppercase text-brand-navy tracking-tight leading-tight mb-1.5 sm:mb-2">
                              {stop.title}
                            </h3>

                            {/* Crisp Two-Liner Description */}
                            <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-normal leading-relaxed max-w-lg">
                              {stop.twoLiner}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* BOTTOM COLLAPSE BUTTON */}
                <div className="pt-10 sm:pt-16 lg:pt-20 text-center">
                  <button
                    type="button"
                    onClick={collapseAndScrollUp}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-50 text-brand-navy border-2 border-brand-navy font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <span>COLLAPSE EXPEDITION TRAIL</span>
                    <ChevronUp className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
