"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SHOWCASE_PROGRAMS = [
  {
    tag: "TABLETOP PLAY",
    name: "Game Session",
    desc: "Casual board game sessions exploring urban livability, governance, and complex systems.",
    format: "1–3 Hours · Tabletop",
    href: "/programs/game-sessions",
  },
  {
    tag: "COHORT LABS",
    name: "Play Workshops",
    desc: "Serious game sessions deploying game as a tool and play as a process for tangible outcomes.",
    format: "Half / Full Day · Intensive",
    href: "/programs/play-workshops",
  },
  {
    tag: "PUBLIC EXHIBITS",
    name: "Play Exhibition",
    desc: "Curated exhibits in halls, campuses, and museums sparking curiosity through purposeful play.",
    format: "Public Showcase · Exhibits",
    href: "/programs/play-exhibition",
  },
  {
    tag: "ACADEMIC STUDIOS",
    name: "Courses",
    desc: "Undergraduate systems studios: ENVS102 (Disasters) & CSIT122 (IoT Systems) at FLAME University.",
    format: "Academic Cohorts · Systems",
    href: "/programs/courses",
  },
];

export default function ProgramsShowcase() {
  return (
    <section
      className="py-16 sm:py-24 md:py-28 px-4 md:px-8 bg-white text-brand-navy border-b border-gray-200 relative z-10"
      id="programs"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* ============================================================ */}
        {/* SECTION HEADER (CLEAN & NATURAL)                             */}
        {/* ============================================================ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-12 mb-8 sm:mb-12 border-b-2 border-brand-navy gap-6">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2.5">
              ENGAGEMENT PATHWAYS
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-brand-navy leading-[0.9]">
              OUR <span className="text-brand-orange">PROGRAMS.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-2.5 max-w-md">
            <p className="font-mono text-xs sm:text-sm text-brand-gray uppercase tracking-wider text-left sm:text-right">
              Structured operational pathways engineered for universities, institutions, and civic bodies.
            </p>
            <Link
              href="/programs"
              className="group inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-navy hover:text-brand-orange transition-colors"
            >
              <span>VIEW ALL PROGRAMMES</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ============================================================ */}
        {/* CLEAN TYPOGRAPHIC GRID WITHOUT TECHY INDEX NUMBERS           */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SHOWCASE_PROGRAMS.map((prog, idx) => (
            <motion.div
              key={prog.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <Link
                href={prog.href}
                className="group flex flex-col justify-between h-full min-h-[360px] bg-[#faf8f5] hover:bg-white border-2 border-brand-navy/15 hover:border-brand-navy p-7 sm:p-8 rounded-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Row: Clean Category Tag */}
                  <div className="pb-4 border-b border-brand-navy/15 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange">
                      {prog.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-brand-navy group-hover:text-brand-orange transition-colors mt-6 mb-3 leading-tight">
                    {prog.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-brand-navy/75 font-normal leading-relaxed">
                    {prog.desc}
                  </p>
                </div>

                {/* Bottom Row: Format & Arrow Link */}
                <div className="pt-6 mt-8 border-t border-brand-navy/15 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-gray">
                    {prog.format}
                  </span>
                  <div className="w-9 h-9 rounded-xs border border-brand-navy/20 flex items-center justify-center shrink-0 group-hover:bg-brand-navy group-hover:text-white group-hover:border-brand-navy transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
