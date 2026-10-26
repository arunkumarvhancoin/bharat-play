/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Clock, MapPin, Users, Calendar as CalendarIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function FeaturedEventHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-transition every 8 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 8000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setActiveIndex((index + 3) % 3);
  };

  const openCalendar = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-events-calendar"));
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToSlide(activeIndex + 1);
      else goToSlide(activeIndex - 1);
    }
    touchStartX.current = null;
  };

  const FEATURED_UPCOMING_EVENT = {
    date: "24",
    month: "OCT",
    day: "SATURDAY",
    time: "5:30 PM – 7:30 PM",
    title: "Saturdays 4 Serious Social Games · Livable Cities",
    category: "PUBLIC PLAYTEST",
    game: "City Runners & Cascade",
    venue: "Kolathur, Chennai",
    capacity: "16 Seats · Tabletop Cohort",
  };

  const INSTITUTIONS = [
    { name: "CAMBRIDGE UNIVERSITY", scope: "GLOBAL" },
    { name: "IIT MADRAS", scope: "INDIA" },
    { name: "IIT BOMBAY", scope: "INDIA" },
    { name: "NEWCASTLE UNIVERSITY", scope: "GLOBAL" },
    { name: "IIT DELHI", scope: "INDIA" },
    { name: "FLAME UNIVERSITY", scope: "INDIA" },
    { name: "JANAAGRAHA", scope: "INDIA" },
    { name: "CCE FINLAND", scope: "GLOBAL" },
    { name: "EUROPEAN ENERGY NETWORK", scope: "GLOBAL" },
  ];

  const slides = [
    { num: "01", label: "CITY RUNNERS" },
    { num: "02", label: "BHARAT PLAY" },
    { num: "03", label: "RECOGNITION" },
  ];

  return (
    <section
      className="relative min-h-[100dvh] lg:h-[100dvh] w-full overflow-hidden bg-brand-navy text-white flex flex-col justify-between select-none"
      id="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Bharat Play Hero Showcase"
    >
      {/* ============================================================ */}
      {/* SUBTLE ARCHITECTURAL BACKGROUND                             */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Fine architectural millimeter grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.7) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Delicate structural architectural crosshairs and coordinate lines */}
        <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-px bg-white/[0.04]" />
        <div className="hidden lg:block absolute right-12 top-0 bottom-0 w-px bg-white/[0.04]" />
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.02]" />

        {/* Faint oversized typography cropped at the edge for editorial depth */}
        <div className="absolute -bottom-8 -right-10 pointer-events-none opacity-[0.018] font-display text-[22vw] font-black uppercase tracking-tighter leading-none text-white select-none">
          {activeIndex === 0 && "SYSTEM"}
          {activeIndex === 1 && "BHARAT"}
          {activeIndex === 2 && "REALITY"}
        </div>

        {/* Ambient organic glow tailored to active banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`glow-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {activeIndex === 0 && (
              <div className="absolute top-1/4 right-[5%] w-[680px] h-[680px] bg-brand-orange/[0.09] rounded-full blur-[180px]" />
            )}
            {activeIndex === 1 && (
              <div className="absolute top-1/3 left-1/4 w-[720px] h-[720px] bg-brand-green/[0.06] rounded-full blur-[200px]" />
            )}
            {activeIndex === 2 && (
              <div className="absolute bottom-1/4 right-1/4 w-[750px] h-[750px] bg-white/[0.035] rounded-full blur-[190px]" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top spacing to comfortably clear sticky header */}
      <div className="pt-16 sm:pt-20 md:pt-24" />

      {/* ============================================================ */}
      {/* MAIN CAROUSEL STAGE                                         */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-16 my-auto py-2 sm:py-4">
        <AnimatePresence mode="wait">
          
          {/* ============================================================ */}
          {/* BANNER 01 — CITY RUNNERS (Visual Focus: Featured Artifact)   */}
          {/* ============================================================ */}
          {activeIndex === 0 && (
            <motion.div
              key="banner-city-runners"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* LEFT: Bold Typography & Strong Hierarchy */}
                <div className="lg:col-span-7 flex flex-col justify-center order-1">
                  
                  {/* Small Eyebrow */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.08 }}
                    className="mb-4 sm:mb-6 flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    <span className="font-mono text-xs sm:text-[13px] font-semibold tracking-[0.25em] text-brand-orange uppercase">
                      FEATURED SERIOUS GAME
                    </span>
                  </motion.div>

                  {/* Large Headline (Stacked Confidently) */}
                  <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-5xl sm:text-7xl md:text-8xl xl:text-[9.5rem] font-black uppercase tracking-[-0.04em] text-white leading-[0.84] mb-5 sm:mb-7"
                  >
                    CITY<br />RUNNERS
                  </motion.h1>

                  {/* Supporting Line */}
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.22 }}
                    className="font-mono text-xs sm:text-sm md:text-base text-white/75 font-medium tracking-[0.14em] uppercase max-w-lg mb-8 sm:mb-10"
                  >
                    A GAME ABOUT THE CITY WE WANT
                  </motion.p>

                  {/* Primary CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.28 }}
                  >
                    <Link
                      href="/games/city-runners"
                      className="group inline-flex items-center gap-4 bg-brand-orange text-white px-7 sm:px-9 py-4 font-mono text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-[0_16px_40px_rgba(249,115,22,0.22)]"
                    >
                      <span>EXPLORE THE GAME</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </Link>
                  </motion.div>
                </div>

                {/* RIGHT: Contained Editorial Poster / Game Artifact (40-45% Hero) */}
                <div className="lg:col-span-5 flex items-center justify-center lg:justify-end order-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 1.04, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full max-w-[460px] lg:max-w-none group"
                  >
                    {/* Architectural framing corner markers */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-white/20 pointer-events-none" />
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-white/20 pointer-events-none" />

                    {/* Contained image frame with slight vertical overhang */}
                    <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] bg-[#0c1422] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
                      <img
                        src="/cr.webp"
                        alt="City Runners serious game board"
                        className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      
                      {/* Editorial subtle light gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15 pointer-events-none" />

                      {/* Minimal Metadata Badge */}
                      <div className="absolute top-4 left-4 z-10 bg-brand-navy/90 backdrop-blur-md px-3 py-1.5 border border-white/15 font-mono text-[11px] font-bold tracking-[0.22em] uppercase text-white/90">
                        01 / SERIOUS GAME
                      </div>

                      <div className="absolute bottom-3 right-4 z-10 font-mono text-[10px] text-white/60 tracking-widest uppercase">
                        TABLETOP ARTIFACT
                      </div>
                    </div>
                  </motion.div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ============================================================ */}
          {/* BANNER 02 — BHARAT PLAY (Visual Focus: Studio & Event)       */}
          {/* ============================================================ */}
          {activeIndex === 1 && (
            <motion.div
              key="banner-bharat-play"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                
                {/* LEFT: Typographic Statement & Purpose (Exactly as in original) */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  
                  {/* Eyebrow */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.08 }}
                    className="mb-3 sm:mb-4 flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    <span className="font-mono text-xs font-semibold tracking-[0.25em] text-white/70 uppercase">
                      SYSTEMS INNOVATION STUDIO
                    </span>
                  </motion.div>

                  {/* Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black uppercase tracking-[-0.035em] text-white leading-[0.92] mb-4 sm:mb-5 max-w-2xl"
                  >
                    WE MAKE COMPLEX<br />
                    <span className="text-brand-orange">SYSTEMS PLAYABLE.</span>
                  </motion.h1>

                  {/* Supporting Copy */}
                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.22 }}
                    className="text-sm sm:text-base md:text-lg text-white/75 font-normal leading-relaxed max-w-xl mb-6 sm:mb-8 font-sans"
                  >
                    We use serious games, simulations and facilitated experiences to explore complex systems, trade-offs and possibilities.
                  </motion.p>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.28 }}
                  >
                    <Link
                      href="/programs"
                      className="group inline-flex items-center gap-3.5 bg-brand-orange text-white px-6 sm:px-8 py-3.5 sm:py-4 font-mono text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-[0_12px_30px_rgba(249,115,22,0.22)]"
                    >
                      <span>EXPLORE PROGRAMS</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </Link>
                  </motion.div>
                </div>

                {/* RIGHT: ONE UPCOMING EVENT (WARM PAPER FRAME CARD) */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                    className="relative bg-[#FAF8F5] text-brand-navy p-6 sm:p-7 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.45)] border-2 border-brand-navy rotate-[1deg] hover:rotate-0 transition-all duration-300 group"
                  >
                    {/* Playful washi tape strip on top — high visibility & bold contrast */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#FDE047] text-brand-navy border-2 border-brand-navy shadow-lg rounded-xs rotate-[-1.5deg] z-20 pointer-events-none whitespace-nowrap flex items-center justify-center">
                      <span className="text-xs font-mono font-black tracking-widest uppercase">
                        ✦ MARK YOUR CALENDAR ✦
                      </span>
                    </div>

                    {/* Friendly Header Tag */}
                    <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-gray-200/80 pt-1">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-bold tracking-wide">
                        <Sparkles className="w-3.5 h-3.5 fill-current" />
                        Next Community Playtest
                      </span>
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                        Open to All
                      </span>
                    </div>

                    {/* Date Block & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* Tear-off calendar date badge */}
                      <div className="shrink-0 flex flex-col items-center justify-center w-16 py-2 px-1.5 bg-gradient-to-br from-brand-orange to-[#EA580C] text-white rounded-md shadow-md">
                        <span className="text-[10px] font-bold tracking-widest uppercase opacity-90 leading-none">
                          {FEATURED_UPCOMING_EVENT.month}
                        </span>
                        <span className="font-display text-3xl font-black leading-none my-0.5">
                          {FEATURED_UPCOMING_EVENT.date}
                        </span>
                        <span className="text-[9px] font-bold tracking-wider uppercase opacity-90 leading-none">
                          {FEATURED_UPCOMING_EVENT.day}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 text-xs text-brand-gray font-medium mb-1">
                          <Clock className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                          <span>{FEATURED_UPCOMING_EVENT.time}</span>
                        </div>
                        <h3 className="font-display text-base sm:text-lg font-bold text-brand-navy leading-snug group-hover:text-brand-orange transition-colors">
                          {FEATURED_UPCOMING_EVENT.title}
                        </h3>
                      </div>
                    </div>

                    {/* Friendly Note */}
                    <p className="text-xs sm:text-[13px] text-brand-navy/80 leading-relaxed mb-4 bg-orange-50/70 p-3 rounded-md border border-orange-200/60 font-medium">
                      🎲 Play <span className="font-bold text-brand-navy">City Runners & Cascade</span> in a relaxed, friendly tabletop lab. Explore city systems and meet fellow curious minds!
                    </p>

                    {/* Quick Metadata */}
                    <div className="flex items-center justify-between text-xs text-brand-navy/70 pb-4 mb-4 border-b border-gray-200/70 font-medium">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        <span className="font-semibold text-brand-navy">{FEATURED_UPCOMING_EVENT.venue}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        <span>{FEATURED_UPCOMING_EVENT.capacity}</span>
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={openCalendar}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-navy text-white px-5 py-3 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer group/btn"
                      >
                        <span>Join This Session</span>
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      <button
                        type="button"
                        onClick={openCalendar}
                        title="View All Dates on Calendar"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-3 border border-gray-300 hover:border-brand-navy text-brand-navy bg-white hover:bg-gray-50 rounded-md text-xs font-bold transition-colors cursor-pointer shadow-xs shrink-0"
                      >
                        <CalendarIcon className="w-4 h-4 text-brand-orange" />
                        <span className="hidden sm:inline">All Dates</span>
                      </button>
                    </div>
                  </motion.div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ============================================================ */}
          {/* BANNER 03 — RECOGNITION (Visual Focus: Quality & Breadth)    */}
          {/* ============================================================ */}
          {activeIndex === 2 && (
            <motion.div
              key="banner-our-work"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                
                {/* LEFT: Authoritative Statement & Narrative */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  
                  {/* Eyebrow */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.08 }}
                    className="mb-3 sm:mb-4 flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                    <span className="font-mono text-xs font-semibold tracking-[0.25em] text-white/70 uppercase">
                      RESEARCH & INSTITUTIONAL TRUST
                    </span>
                  </motion.div>

                  {/* Confident Large Statement */}
                  <motion.h1
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black uppercase tracking-[-0.035em] text-white leading-[0.92] mb-4 sm:mb-5"
                  >
                    PLAYING WITH<br />
                    REAL-WORLD<br />
                    <span className="text-brand-orange">QUESTIONS.</span>
                  </motion.h1>

                  {/* Supporting Copy */}
                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.22 }}
                    className="text-sm sm:text-base md:text-lg text-white/75 font-normal leading-relaxed max-w-xl font-sans"
                  >
                    From urban resilience and disaster preparedness to energy, cities and public systems, our games turn difficult questions into experiences people can explore together.
                  </motion.p>
                </div>

                {/* RIGHT: Minimal Institutional Recognition Strip / Typographic Wall */}
                <div className="lg:col-span-6 flex flex-col justify-center lg:pl-4">
                  
                  {/* Subtle introduce label */}
                  <div className="flex items-center justify-between border-b border-white/20 pb-2.5 mb-4 sm:mb-5">
                    <span className="font-mono text-xs font-bold tracking-[0.22em] text-brand-orange uppercase">
                      SELECTED INSTITUTIONS & COLLABORATORS
                    </span>
                    <span className="font-mono text-[10px] text-brand-green uppercase tracking-wider hidden sm:inline">
                      GOVT. OF INDIA COPYRIGHT
                    </span>
                  </div>

                  {/* Loose Editorial Typographic Wall (Clean proportional layout) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-3.5">
                    {INSTITUTIONS.map((inst, idx) => (
                      <motion.div
                        key={inst.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.12 + idx * 0.04,
                          ease: "easeOut",
                        }}
                        className="group flex items-baseline gap-2.5 border-b border-white/[0.07] pb-2 transition-colors hover:border-white/30"
                      >
                        <span className="font-mono text-[10px] text-white/30 tracking-widest">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div className="flex flex-col">
                          <span className="font-display text-xs sm:text-sm font-bold tracking-tight text-white/85 group-hover:text-white transition-colors">
                            {inst.name}
                          </span>
                          <span className="font-mono text-[9px] tracking-widest text-white/40 uppercase">
                            {inst.scope}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <p className="mt-4 font-mono text-[10px] text-white/35 tracking-widest uppercase">
                    DEPLOYED ACROSS ACADEMIA, POLICY BODIES & CIVIC LABS
                  </p>
                </div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* ============================================================ */}
      {/* EDITORIAL CAROUSEL NAVIGATION (Thin Line / Progress)        */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-16 pb-8 sm:pb-10 pt-4 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          
          {/* Navigation Line: 01 CITY RUNNERS ───── 02 BHARAT PLAY ───── 03 RECOGNITION */}
          <div
            className="flex items-center gap-2 sm:gap-6 md:gap-8 flex-wrap"
            role="tablist"
            aria-label="Editorial carousel navigation"
          >
            {slides.map((s, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={s.label}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Switch to banner ${s.num}: ${s.label}`}
                  onClick={() => goToSlide(idx)}
                  className="group relative flex items-center gap-1.5 sm:gap-3 py-2 text-left focus:outline-none cursor-pointer"
                >
                  <span
                    className={`font-mono text-[11px] sm:text-sm font-bold tracking-wider transition-colors duration-300 ${
                      isActive ? "text-brand-orange" : "text-white/40 group-hover:text-white/80"
                    }`}
                  >
                    {s.num}
                  </span>

                  <span
                    className={`font-mono text-[11px] sm:text-sm font-bold tracking-[0.16em] uppercase transition-colors duration-300 ${
                      isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
                    }`}
                  >
                    {s.label}
                  </span>

                  {/* Thin connecting/progress line */}
                  <div className="relative w-6 sm:w-16 md:w-24 h-[2px] bg-white/10 overflow-hidden ml-1">
                    {isActive && (
                      <motion.div
                        layoutId="active-indicator-bar"
                        className="absolute inset-0 bg-brand-orange"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      >
                        {!isPaused && (
                          <motion.div
                            key={`timer-${activeIndex}`}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 8, ease: "linear" }}
                            className="h-full bg-white/60"
                          />
                        )}
                      </motion.div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Subdued Previous / Next Editorial Arrows */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => goToSlide(activeIndex - 1)}
              className="w-9 h-9 border border-white/15 flex items-center justify-center hover:bg-white hover:text-brand-navy hover:border-white transition-all duration-200 text-white/70 focus:outline-none"
              aria-label="Previous banner"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => goToSlide(activeIndex + 1)}
              className="w-9 h-9 border border-white/15 flex items-center justify-center hover:bg-white hover:text-brand-navy hover:border-white transition-all duration-200 text-white/70 focus:outline-none"
              aria-label="Next banner"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
