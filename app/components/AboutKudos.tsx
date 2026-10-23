"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutKudos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="py-16 md:py-40 px-4 md:px-8 bg-brand-offwhite text-brand-navy">
      <div className="max-w-[1400px] mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative">
          
          {/* Left Column: Massive Typography (Sticky across the entire about section scroll) */}
          <div className="lg:col-span-7 lg:sticky lg:top-32 self-start flex flex-col gap-12 lg:gap-16 z-10">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 block">
                ABOUT BHARAT PLAY
              </span>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter text-brand-navy uppercase mb-8 sm:mb-12 font-bold pb-4 sm:pb-6 border-b border-gray-200">
                ABOUT US.
              </h2>
              
              <motion.h3 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.95] text-brand-navy max-w-2xl"
              >
                WE TURN REAL-WORLD PROBLEMS INTO <span className="text-brand-orange">GAMES</span> YOU ACTUALLY WANT TO PLAY.
              </motion.h3>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="hidden lg:block"
            >
              <Link href="/about" className="inline-flex items-center gap-3 text-brand-navy font-bold text-xs uppercase tracking-widest hover:text-brand-orange transition-colors group">
                READ OUR FULL PHILOSOPHY
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Image and Context */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-12 pb-16">
            
            {/* Dynamic Parallax Image (Original aspect ratio [3/4] restored) */}
            <div className="w-full aspect-[3/4] bg-gray-200 relative overflow-hidden rounded-sm group">
              <motion.div 
                className="absolute -top-[15%] -bottom-[15%] left-0 right-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                style={{ y: imgY, backgroundImage: "url('/about.webp')" }}
              />
            </div>

            <div className="flex flex-col gap-8">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-brand-navy">
                We create hands-on games and simulations that make solving big, real-world challenges genuinely fun and engaging.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-brand-gray font-medium leading-relaxed">
                Instead of just talking about the future, we let you play it. By combining game design with urban planning, policy, and engineering, we create hands-on experiences that let citizens, students, and leaders test ideas before they become reality.
              </p>

              <div className="pl-4 sm:pl-6 border-l-4 border-brand-orange mt-2 sm:mt-4">
                <p className="italic font-serif text-base sm:text-xl md:text-2xl mb-3 sm:mb-4 text-gray-600 leading-snug">
                  &quot;Create games for change which will not only solve local problems but also address global issues.&quot;
                </p>
                <footer className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-brand-navy">
                  — Prime Minister Narendra Modi
                </footer>
              </div>
            </div>

            {/* Mobile Link */}
            <div className="block lg:hidden mt-6">
              <Link href="/about" className="inline-flex items-center gap-2.5 text-brand-navy font-bold text-xs uppercase tracking-widest hover:text-brand-orange transition-colors group py-2">
                READ OUR FULL PHILOSOPHY
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
