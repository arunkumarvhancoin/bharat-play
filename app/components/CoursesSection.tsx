"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const COURSES = [
  {
    id: "environmental-leadership",
    title: "ENVIRONMENTAL LEADERSHIP",
    desc: "An intensive play-based studio exploring environmental diplomacy, carbon budgeting, and net-zero transitions using tactile tabletop models.",
    href: "/courses",
  },
  {
    id: "disaster-preparedness",
    title: "DISASTER PREPAREDNESS & RISK MANAGEMENT",
    desc: "Move beyond dry textbooks. Learners simulate real-world crisis conditions — coordinating flood defenses and relief logistics under extreme uncertainty.",
    href: "/courses",
  },
  {
    id: "internet-of-things",
    title: "INTERNET-OF-THINGS (IoT)",
    desc: "A hands-on systems course introducing smart city sensor grids, edge telemetry, and cyber-physical security simulations (CASCADE).",
    href: "/courses",
  },
  {
    id: "urban-futures",
    title: "URBAN FUTURES",
    desc: "Deconstruct municipal budgeting, spatial justice, and urban livability trade-offs by stepping into the shoes of commissioners and civic collectives.",
    href: "/courses",
  },
];

export default function CoursesSection() {
  return (
    <section className="pb-16 pt-8 md:pb-24 md:pt-16 px-4 md:px-6 bg-[#FDFBF7] border-b border-gray-200 relative z-10" id="courses">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6 sm:gap-8 pb-6 border-b border-amber-200/60">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#C2410C] text-white font-mono text-xs font-bold uppercase tracking-wider">
                ACADEMIC &amp; COHORT STUDIOS
              </span>
              <span className="font-mono text-xs font-bold text-slate-500 uppercase hidden sm:inline">
                · Interdisciplinary Curriculum
              </span>
            </div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-brand-navy uppercase leading-[0.95]"
            >
              PLAY-BASED <span className="text-brand-orange">COURSES.</span>
            </motion.h3>
            <p className="text-sm sm:text-base text-slate-600 font-medium mt-2 max-w-2xl">
              Unique interdisciplinary courses for graduates and undergraduates across Policy, Humanities &amp; Social Sciences, Engineering, Business, and Architecture.
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-2 shrink-0">
            <Link 
              href="/courses" 
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0C2444] hover:bg-[#13335c] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-sm transition-all group"
            >
              <span>EXPLORE ALL 4 COURSES</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <span className="text-[11px] font-mono text-slate-400 font-semibold">
              Benchmarked with FLAME, IITs, ETH, DTU, NUS &amp; IIHS
            </span>
          </div>
        </div>

        {/* Horizontal Course Cards */}
        <div className="space-y-4 sm:space-y-5">
          {COURSES.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="bg-white border border-slate-200/90 border-l-[6px] border-l-[#C2410C] p-6 sm:p-7 rounded-2xl shadow-xs hover:shadow-md transition-all group relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div className="flex-1">
                  <h4 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-brand-navy group-hover:text-brand-orange transition-colors mb-2 leading-snug">
                    {course.title}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-3xl">
                    {course.desc}
                  </p>
                </div>

                <div className="shrink-0">
                  <Link
                    href={course.href}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#C2410C] hover:bg-[#a3360a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs text-center"
                  >
                    <span>Explore Course</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Master Instructor & Student Prototyping Highlight Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-[24px] bg-white border-2 border-[#12352B] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm" style={{ boxShadow: "6px 6px 0px #12352B" }}>
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
              PROVEN PEDAGOGY &amp; RAPID PROTOTYPING
            </span>
            <h4 className="font-display text-xl font-bold uppercase text-brand-navy mb-1.5">
              Learners Rapid-Prototype Real Gamified Simulation Tools
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Taught by Master Instructor Dr. Balaji Kalluri (IISc Top-100 Design Educator) with guest faculty from IITM, IITK, IITKGP, NUS, DTU, Iowa State, FLAME, CEPT, and IISc. Learners have prototyped simulations across Urban Flooding, Landslides, Air Crashes, Heat Action Plans, and Cyber/Quantum Risks.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#15803D] hover:bg-[#166534] text-white font-mono text-xs font-bold uppercase tracking-wider shrink-0 transition-colors shadow-xs"
          >
            <span>VIEW STUDENT PROJECTS &amp; LAB</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
