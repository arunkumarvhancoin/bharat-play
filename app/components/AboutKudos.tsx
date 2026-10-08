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
    <section ref={containerRef} className="py-40 px-4 md:px-8 bg-brand-offwhite text-brand-navy">
      <div className="max-w-[1400px] mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column: Massive Typography */}
          <div className="lg:col-span-7 relative">
            <div className="sticky top-32 flex flex-col gap-16">
              <div>
                <h2 className="font-mono text-[10px] tracking-widest text-brand-gray uppercase mb-12 font-bold">
                  ABOUT BHARAT PLAY
                </h2>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                  className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.85] text-brand-navy max-w-2xl"
                >
                  A 21ST CENTURY <span className="text-brand-orange">INNOVATION</span> STUDIO FOR A COMPLICATED WORLD.
                </motion.h3>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
                className="hidden lg:block"
              >
                <Link href="/about" className="inline-flex items-center gap-3 text-brand-navy font-bold text-[10px] uppercase tracking-widest hover:text-brand-orange transition-colors group">
                  READ OUR FULL PHILOSOPHY
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Image and Context */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-12">
            
            {/* Dynamic Parallax Image */}
            <div className="w-full aspect-[3/4] bg-gray-200 relative overflow-hidden rounded-sm group">
              <motion.div 
                className="absolute -top-[15%] -bottom-[15%] left-0 right-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                style={{ y: imgY, backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop')" }}
              />
            </div>

            <div className="flex flex-col gap-8">
              <p className="text-2xl font-medium leading-tight text-brand-navy">
                We use purposeful play to explore complex problems, build understanding and imagine better futures.
              </p>
              
              <p className="text-lg text-brand-gray font-medium leading-relaxed">
                By merging systems-thinking, design & innovation management, engineering, policy, environmental & social sciences, we build tools that shape the transition pathways of future cities in the global south.
              </p>

              <div className="pl-6 border-l border-gray-300 mt-4">
                <p className="italic font-serif text-xl mb-4 text-gray-500 leading-snug">
                  &quot;Create games for change which will not only solve local problems but also address global issues.&quot;
                </p>
                <footer className="font-mono text-[10px] font-bold tracking-widest uppercase text-brand-navy">
                  — Prime Minister Narendra Modi
                </footer>
              </div>
            </div>

            {/* Mobile Link */}
            <div className="block lg:hidden mt-8">
              <Link href="/about" className="inline-flex items-center gap-3 text-brand-navy font-bold text-[10px] uppercase tracking-widest hover:text-brand-orange transition-colors group">
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
