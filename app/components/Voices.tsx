"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const QUOTES = [
  {
    quote: "The games from the course deserve to reach the stores.",
    name: "Nikhil Gehlot",
    role: "Founder, Toynik",
  },
  {
    quote: "The courses opened my mind and inspired me to become an effective civil servant, especially working to reduce disaster risks.",
    name: "Student",
    role: "Participant",
  },
  {
    quote: "I feel as a university, we should further build upon the course on Disaster resilience in the terms to follow.",
    name: "Abhineety Goel",
    role: "Assistant Professor, Env. Studies",
  },
  {
    quote: "I wish to take my game out to the society, beyond the classroom, as we do believe that we are part of something transformative!",
    name: "Student",
    role: "Participant",
  }
];

export default function Voices() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-40 px-4 md:px-6 bg-white border-b border-gray-200 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-start">
          
          <div className="md:col-span-3 flex flex-col justify-between">
            <h2 className="font-mono text-sm tracking-widest text-brand-gray uppercase mb-4">
              VOICES FROM THE PLAYGROUND
            </h2>
            <Link href="/testimonials" className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-brand-navy hover:text-brand-orange transition-colors">
              READ ALL TESTIMONIALS &rarr;
            </Link>
          </div>

          <div className="md:col-span-9 min-h-[260px] md:min-h-[400px] flex flex-col justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className="w-full"
              >
                <p className="font-display text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-brand-navy leading-[1.05] mb-8 sm:mb-16 text-balance h-auto min-h-[100px] sm:min-h-[180px] flex items-center">
                  &quot;{QUOTES[index].quote}&quot;
                </p>
                <div className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-brand-navy flex flex-col gap-1">
                  <span className="text-brand-orange">{QUOTES[index].name}</span>
                  <span className="text-brand-gray">{QUOTES[index].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Animated Progress Pagination */}
            <div className="flex gap-3 sm:gap-4 mt-6 md:mt-0 md:absolute md:right-0 md:bottom-0">
              {QUOTES.map((_, i) => (
                <div key={i} className="relative w-8 sm:w-12 h-1 bg-gray-200 rounded-full overflow-hidden cursor-pointer" onClick={() => setIndex(i)}>
                  {i === index && (
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                      className="absolute top-0 left-0 h-full bg-brand-navy"
                    />
                  )}
                </div>
              ))}
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
