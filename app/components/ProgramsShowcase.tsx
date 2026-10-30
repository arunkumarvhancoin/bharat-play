"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Gamepad2, Compass, Building2, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const SHOWCASE_PROGRAMS = [
  {
    tag: "TABLETOP PLAY",
    name: "Game Session",
    desc: "Casual board game sessions exploring urban livability, governance, and complex systems.",
    format: "1–3 Hours · Tabletop",
    href: "/programs/game-sessions",
    icon: Gamepad2,
    badgeColor: "bg-white text-[#C2410C]",
    chips: ["Casual Tabletop", "Urban Governance", "4–40 Players"],
    borderColor: "border-[#C2410C]",
    shadowColor: "#C2410C",
    tagBg: "bg-[#C2410C] text-white",
    textColor: "text-[#C2410C]",
  },
  {
    tag: "COHORT LABS",
    name: "Play Workshops",
    desc: "Serious game sessions deploying game as a tool and play as a process for tangible outcomes.",
    format: "Half / Full Day · Intensive",
    href: "/programs/play-workshops",
    icon: Compass,
    badgeColor: "bg-white text-[#15803D]",
    chips: ["Intensive Cohort", "Simulation Labs", "Measurable Outcomes"],
    borderColor: "border-[#15803D]",
    shadowColor: "#15803D",
    tagBg: "bg-[#15803D] text-white",
    textColor: "text-[#15803D]",
  },
  {
    tag: "PUBLIC EXHIBITS",
    name: "Play Exhibition",
    desc: "Curated exhibits in halls, campuses, and museums sparking curiosity through purposeful play.",
    format: "Public Showcase · Exhibits",
    href: "/programs/play-exhibition",
    icon: Building2,
    badgeColor: "bg-white text-[#0C2444]",
    chips: ["Museums & Halls", "Public Showcases", "Purposeful Play"],
    borderColor: "border-[#0C2444]",
    shadowColor: "#0C2444",
    tagBg: "bg-[#0C2444] text-white",
    textColor: "text-[#0C2444]",
  },
  {
    tag: "ACADEMIC STUDIOS",
    name: "Courses",
    desc: "Undergraduate systems studios: ENVS102 (Disasters) & CSIT122 (IoT Systems) at FLAME University.",
    format: "Academic Cohorts · Systems",
    href: "/programs/courses",
    icon: GraduationCap,
    badgeColor: "bg-white text-[#C2410C]",
    chips: ["FLAME University", "ENVS102 Disasters", "CSIT122 IoT"],
    borderColor: "border-[#C2410C]",
    shadowColor: "#C2410C",
    tagBg: "bg-[#C2410C] text-white",
    textColor: "text-[#C2410C]",
  },
];

export default function ProgramsShowcase() {
  return (
    <section
      className="py-14 sm:py-20 md:py-24 px-4 md:px-8 bg-[#EAF3ED] text-brand-navy border-b border-[#12352B]/15 relative z-10"
      id="programs"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* ============================================================ */}
        {/* SECTION HEADER (EDITORIAL & SWISS PRINTED FEEL)              */}
        {/* ============================================================ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 sm:pb-8 mb-8 sm:mb-10 border-b-2 border-[#12352B]/15 gap-4">
          <div>
            <span className="inline-block px-3 py-0.5 rounded-full bg-white text-[#12352B] border border-[#12352B] font-mono text-xs font-bold uppercase tracking-wider mb-2.5 shadow-[2px_2px_0px_#12352B]">
              ENGAGEMENT PATHWAYS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#12352B] leading-[0.95]">
              OUR <span className="text-brand-orange">PROGRAMS.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-2.5 max-w-md">
            <p className="font-mono text-xs text-slate-700 uppercase tracking-wider text-left sm:text-right">
              Structured operational pathways engineered for universities, institutions, and civic bodies.
            </p>
            <Link
              href="/programs"
              className="group inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#12352B] hover:text-white bg-white hover:bg-[#12352B] border-2 border-[#12352B] px-4 py-2 rounded-full transition-all shadow-[3px_3px_0px_#12352B] active:translate-x-0.5 active:translate-y-0.5"
            >
              <span>VIEW ALL 4 PROGRAMMES</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 4-COLUMN SINGLE ROW WITH MULTI-COLORED PHYSICAL OFFSET CARDS */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {SHOWCASE_PROGRAMS.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={prog.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.4 }}
                className="h-full flex"
              >
                <div
                  className={`bg-white border-2 ${prog.borderColor} rounded-[22px] p-5 sm:p-6 flex flex-col justify-between w-full h-full transition-transform duration-300 hover:-translate-y-1.5`}
                  style={{ boxShadow: `8px 8px 0px ${prog.shadowColor}` }}
                >
                  <div>
                    {/* Top Row: Icon & Tag Badge */}
                    <div className="flex items-center justify-between gap-2.5 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${prog.badgeColor} border-2 ${prog.borderColor} flex items-center justify-center shadow-xs shrink-0`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`px-2.5 py-1 rounded-full ${prog.tagBg} font-mono text-[10px] font-bold uppercase tracking-wider`}>
                        {prog.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`font-display text-xl sm:text-2xl font-black uppercase tracking-tight ${prog.textColor} mb-1 leading-tight`}>
                      {prog.name}
                    </h3>

                    {/* Format Callout */}
                    <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-brand-orange mb-3">
                      {prog.format}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed mb-4 line-clamp-3">
                      {prog.desc}
                    </p>

                    {/* Highlights / Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {prog.chips.map((chip) => (
                        <span
                          key={chip}
                          className={`px-2 py-0.5 rounded-md bg-[#F8FAF9] border ${prog.borderColor}/30 text-slate-800 text-[10px] font-mono font-medium shadow-[1px_1px_0px_${prog.shadowColor}]`}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions Row */}
                  <div className={`pt-4 border-t-2 ${prog.borderColor}/15 flex items-center justify-between gap-2 mt-auto`}>
                    <Link
                      href={prog.href}
                      className={`group inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider ${prog.textColor} hover:text-brand-orange transition-colors`}
                    >
                      <span className="underline decoration-2 underline-offset-4">VIEW PROGRAMME</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href={prog.href}
                      className={`w-8 h-8 rounded-full bg-white border-2 ${prog.borderColor} flex items-center justify-center ${prog.textColor} hover:bg-slate-900 hover:text-white transition-all shadow-[2px_2px_0px_${prog.shadowColor}] shrink-0`}
                      aria-label={`Open ${prog.name}`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
