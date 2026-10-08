"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "50+", label: "EVENTS HOSTED" },
  { value: "1200+", label: "PARTICIPANTS" },
  { value: "30+", label: "WORKSHOPS" },
  { value: "15+", label: "COLLABORATORS" },
];

export default function ImpactNumbers() {
  return (
    <section className="py-24 px-4 md:px-6 bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
          <div className="md:col-span-3">
            <h2 className="font-mono text-sm tracking-widest text-brand-gray uppercase">
              IMPACT
            </h2>
          </div>

          <div className="md:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col"
              >
                <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-brand-navy mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-xs tracking-widest uppercase text-brand-gray font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
