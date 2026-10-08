"use client";

import Link from "next/link";
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
      className="py-32 px-4 md:px-6 bg-brand-navy text-white relative overflow-hidden group" 
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
              rgba(11, 218, 81, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center">
          
          <div className="md:col-span-3">
            <motion.h2 
              initial={{ opacity: 0, rotate: -90 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="font-mono text-sm tracking-widest text-brand-green uppercase transform origin-left"
            >
              FINAL EVENT CTA
            </motion.h2>
          </div>

          <div className="md:col-span-9 flex flex-col items-start">
            <div className="overflow-hidden">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter mb-12 leading-[0.9]"
              >
                WHAT WILL YOU <br /> 
                <span className="text-brand-orange">PLAY NEXT?</span>
              </motion.h2>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
            >
              <Link href="/events" className="inline-flex items-center justify-center gap-3 bg-brand-green text-white px-8 py-5 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-all duration-300 group shadow-[0_0_40px_rgba(11,218,81,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]">
                UPCOMING EVENTS
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link href="/about" className="inline-flex items-center justify-center gap-3 border border-gray-600 text-white px-8 py-5 text-xs font-bold uppercase tracking-widest hover:border-white transition-colors group">
                WORK WITH US
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
