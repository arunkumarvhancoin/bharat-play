"use client";

import { ArrowRight } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export default function FinalCTA() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-[#091728] via-[#0E2038] to-[#0A1A2E] text-white relative overflow-hidden group select-none border-b border-blue-950" 
      id="join"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
               650px circle at ${mouseX}px ${mouseY}px,
               rgba(16, 185, 129, 0.15),
               transparent 80%
             )
          `,
        }}
      />

      <div className="max-w-[1000px] mx-auto w-full relative z-10 text-center flex flex-col items-center">
        
        {/* Playful Pill Badge (Saffron & White) */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/40 font-mono text-xs font-bold uppercase tracking-wider mb-6 shadow-md">
          <span>🎲 PURPOSEFUL PLAY</span>
          <span>·</span>
          <span className="text-white">COMMUNITY SESSIONS</span>
        </span>

        {/* Center-aligned Title */}
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-5 leading-[0.9] text-white"
          >
            WHAT WILL YOU <br /> 
            <span className="text-brand-orange">PLAY NEXT?</span>
          </motion.h2>
        </div>

        {/* Center-aligned Description */}
        <p className="text-blue-100/80 font-medium text-lg sm:text-xl md:text-2xl max-w-2xl mb-8 leading-relaxed">
          Step into a hands-on simulation. Deliberate, negotiate, and shape real solutions with our community.
        </p>
        
        {/* Center-aligned CTA with Green Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center w-full"
        >
          <button
            type="button"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent("open-events-calendar"));
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 group shadow-xl shadow-emerald-950/60 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>VIEW UPCOMING SESSIONS</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
