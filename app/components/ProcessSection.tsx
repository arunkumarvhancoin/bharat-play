"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STEPS = [
  { title: "QUESTION", desc: "We start with a difficult question." },
  { title: "IMAGINE", desc: "We explore possible futures." },
  { title: "DESIGN", desc: "We turn ideas into experiences." },
  { title: "PLAY", desc: "People experience the problem themselves." },
  { title: "LEARN", desc: "Play reveals systems, choices and consequences." },
  { title: "ACT", desc: "Insights become action." },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="py-40 bg-stone-900 text-stone-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-20">
        <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter">
          How We Play
        </h2>
      </div>
      
      <div className="relative">
        {/* Horizontal scroll container */}
        <motion.div style={{ x }} className="flex gap-12 px-6 w-max">
          {STEPS.map((step, i) => (
            <div key={i} className="flex flex-col min-w-[300px] md:min-w-[400px]">
              <div className="text-orange-500 font-mono text-sm mb-6 flex items-center gap-4">
                <span>0{i + 1}</span>
                <div className="h-[1px] bg-orange-500/30 flex-1" />
              </div>
              <h3 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-stone-300 mb-4 opacity-50 hover:opacity-100 transition-opacity duration-300">
                {step.title}
              </h3>
              <p className="text-xl text-stone-400 border-l-2 border-orange-500 pl-4 mt-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
