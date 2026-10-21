"use client";

import Link from "next/link";
import { ArrowRight, Layers, Compass, Tent, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { PROGRAMS } from "../data/programs";

function getProgramIcon(id: string) {
  switch (id) {
    case "game-sessions":
      return <Layers className="w-4 h-4 text-brand-orange" />;
    case "play-workshops":
      return <Compass className="w-4 h-4 text-brand-green" />;
    case "play-exhibition":
      return <Tent className="w-4 h-4 text-brand-orange" />;
    case "courses":
      return <BookOpen className="w-4 h-4 text-brand-green" />;
    default:
      return <Layers className="w-4 h-4 text-brand-orange" />;
  }
}

export default function ProgramsShowcase() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white border-b border-gray-200 relative z-10" id="programs-showcase">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-gray-200 gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-2 block flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" /> ENGAGEMENT PATHWAYS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-brand-navy leading-none">
              OUR <span className="text-brand-orange">PROGRAMS.</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <p className="text-xs sm:text-sm text-brand-gray font-medium max-w-sm hidden md:block">
              Four structured formats designed for classrooms, institutions, public squares, and leadership teams.
            </p>
            <Link 
              href="/programs" 
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-brand-navy hover:text-brand-orange transition-colors shrink-0"
            >
              <span>VIEW ALL</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4 Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROGRAMS.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <Link
                href={`/programs/${program.slug}`}
                className="bg-brand-offwhite border border-gray-200 hover:border-brand-navy hover:bg-white rounded-sm p-6 flex flex-col justify-between h-full transition-all duration-300 group shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-brand-orange">
                      #{program.displayNumber}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs bg-white border border-gray-200 text-brand-navy">
                      {getProgramIcon(program.id)}
                      <span>{program.tag}</span>
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-brand-navy group-hover:text-brand-orange transition-colors mb-1.5">
                    {program.name}
                  </h3>
                  <p className="font-mono text-[11px] font-bold uppercase text-brand-green mb-3">
                    {program.subtitle}
                  </p>
                  <p className="text-xs text-brand-gray font-medium leading-relaxed line-clamp-3 mb-6">
                    {program.shortDescription}
                  </p>
                </div>

                {/* Footer Meta */}
                <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-brand-gray font-semibold">
                    {program.duration.label}
                  </span>
                  <span className="text-brand-orange font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
