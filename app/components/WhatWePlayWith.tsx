"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import clsx from "clsx";

const TOPICS = [
  { id: "cities", title: "CITIES", desc: "We design games that help citizens and planners figure out how to make their cities better—focusing on traffic, housing, and everyday livability.", color: "text-brand-green", dot: "bg-brand-green" },
  { id: "climate", title: "CLIMATE", desc: "Climate change is complicated. Our simulations let you see the long-term effects of environmental choices before you make them in the real world.", color: "text-brand-orange", dot: "bg-brand-orange" },
  { id: "people", title: "PEOPLE", desc: "We build interactive experiences that bring communities together. By playing together, different groups can find common ground and solve shared problems.", color: "text-brand-navy", dot: "bg-brand-navy" },
  { id: "systems", title: "SYSTEMS", desc: "Government policies and massive systems are usually hard to understand. We turn them into engaging, playable scenarios so anyone can grasp how they work.", color: "text-brand-green", dot: "bg-brand-green" },
  { id: "learning", title: "LEARNING", desc: "Instead of sitting in a classroom listening to a lecture, we believe in learning by doing. We create hands-on educational games for the next generation.", color: "text-brand-orange", dot: "bg-brand-orange" },
  { id: "futures", title: "FUTURES", desc: "Nobody can predict the future, but you can playtest it. We help organizations imagine and prepare for tomorrow's challenges by simulating them today.", color: "text-brand-navy", dot: "bg-brand-navy" },
];

export default function WhatWePlayWith() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map the scroll progress (0 to 1) to the active index
    const index = Math.min(
      TOPICS.length - 1,
      Math.max(0, Math.floor(latest * TOPICS.length))
    );
    setActiveIndex(index);
  });

  const activeTopic = TOPICS[activeIndex];

  return (
    <section ref={containerRef} className="relative md:h-[600vh] bg-brand-offwhite" id="topics">
      
      {/* MOBILE LAYOUT (Stacked Cards, No Scroll Spy) */}
      <div className="md:hidden py-24 px-4 w-full">
        <h2 className="font-display text-4xl tracking-tighter text-brand-navy uppercase mb-12 font-bold pb-6 border-b border-gray-200">
          WHAT DO WE PLAY WITH.
        </h2>
        <div className="flex flex-col gap-12">
          {TOPICS.map((topic) => (
            <div key={topic.id} className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className={clsx("w-4 h-4 rounded-full", topic.dot)} />
                <h3 className={clsx("font-display text-4xl font-bold uppercase tracking-tighter", topic.color)}>
                  {topic.title}
                </h3>
              </div>
              <div className="bg-white rounded-sm shadow-xl border border-gray-100 p-8 relative overflow-hidden">
                <p className="text-xl font-medium text-brand-gray leading-relaxed relative z-10">
                  {topic.desc}
                </p>
                <div className="absolute -bottom-8 -right-4 font-display text-[120px] font-bold text-gray-50 leading-none select-none pointer-events-none z-0">
                  {topic.title.substring(0, 2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP LAYOUT (Sticky Viewport Container) */}
      <div className="hidden md:flex sticky top-0 h-screen w-full flex-col justify-center overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full px-4 md:px-6">
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tighter text-brand-navy uppercase mb-16 font-bold pb-6 border-b border-gray-200">
            WHAT DO WE PLAY WITH.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            
            {/* Left side list */}
            <div className="lg:col-span-5 relative flex flex-col justify-center">
              {/* Visual connecting line */}
              <div className="absolute left-[11px] top-[5%] bottom-[5%] w-px bg-gray-200 -z-10" />

              <div className="flex flex-col gap-4 md:gap-6">
                {TOPICS.map((topic, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <div
                      key={topic.id}
                      className={clsx(
                        "flex items-center gap-4 md:gap-6 text-left relative w-full transition-opacity duration-500",
                        isActive ? "opacity-100" : "opacity-40"
                      )}
                    >
                      <div 
                        className={clsx(
                          "w-6 h-6 rounded-full flex items-center justify-center bg-brand-offwhite border-2 transition-all duration-500 z-10 shrink-0",
                          isActive ? "border-brand-navy scale-125" : "border-gray-300 scale-100"
                        )}
                      >
                        <div 
                          className={clsx(
                            "w-2 h-2 rounded-full transition-colors duration-500",
                            isActive ? topic.dot : "bg-transparent"
                          )} 
                        />
                      </div>
                      
                      <h3 
                        className={clsx(
                          "font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter uppercase transition-colors duration-500",
                          isActive ? topic.color : "text-brand-gray"
                        )}
                      >
                        {topic.title}
                      </h3>

                      {/* Active Indicator Line */}
                      {isActive && (
                        <motion.div 
                          layoutId="activeIndicatorWWPW"
                          className="absolute -left-[22px] w-2 h-[120%] bg-brand-navy top-[-10%] rounded-r-sm"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right side explanation */}
            <div className="lg:col-span-7 flex flex-col justify-center relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTopic.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                  className="bg-white rounded-sm shadow-2xl border border-gray-100 relative overflow-hidden flex flex-col h-full min-h-[400px] p-8 md:p-16 justify-center"
                >
                  {/* Decorative background number */}
                  <div className="absolute -bottom-10 -right-10 font-display text-[200px] font-bold text-gray-50 leading-none select-none pointer-events-none z-0">
                    {activeTopic.title.substring(0, 2)}
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: 48 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className={clsx("h-1 mb-8 md:mb-12", activeTopic.dot)} 
                    />
                    
                    <h4 className="font-display text-3xl md:text-5xl text-brand-navy font-bold tracking-tighter mb-6 md:mb-8 uppercase">
                      {activeTopic.title}
                    </h4>
                    
                    <p className="text-2xl md:text-3xl font-medium text-brand-gray leading-relaxed">
                      {activeTopic.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
