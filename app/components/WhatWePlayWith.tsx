"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const TOPICS = [
  { id: "cities", title: "CITIES", items: ["Urban futures", "Livability", "Mobility", "Participation"], color: "text-brand-green", dot: "bg-brand-green", img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1200&auto=format&fit=crop" },
  { id: "climate", title: "CLIMATE", items: ["Sustainability", "Resilience", "Green futures", "Disaster recovery"], color: "text-brand-orange", dot: "bg-brand-orange", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop" },
  { id: "people", title: "PEOPLE", items: ["Communities", "Behaviour", "Participation", "Co-creation"], color: "text-brand-navy", dot: "bg-brand-navy", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop" },
  { id: "systems", title: "SYSTEMS", items: ["Complexity", "Decision-making", "Interconnections", "Policy"], color: "text-brand-green", dot: "bg-brand-green", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" },
  { id: "learning", title: "LEARNING", items: ["Education", "Youth", "Future skills", "Pedagogy"], color: "text-brand-orange", dot: "bg-brand-orange", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop" },
  { id: "futures", title: "FUTURES", items: ["Technology", "Innovation", "Possibilities", "Foresight"], color: "text-brand-navy", dot: "bg-brand-navy", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" },
];

export default function WhatWePlayWith() {
  const [activeId, setActiveId] = useState<string>("cities");

  return (
    <section className="py-32 px-4 md:px-6 bg-brand-offwhite overflow-hidden" id="topics">
      <div className="max-w-[1400px] mx-auto w-full">
        <h2 className="font-mono text-sm tracking-widest text-brand-gray uppercase mb-16 border-b border-gray-200 pb-2">
          WHAT DO WE PLAY WITH?
        </h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 min-h-[550px]"
        >
          
          {/* Interactive Network Navigation */}
          <div className="lg:col-span-5 relative flex flex-col justify-center">
            {/* Visual connecting line */}
            <div className="absolute left-[11px] top-[5%] bottom-[5%] w-px bg-gray-200 -z-10" />

            <div className="flex flex-col gap-8">
              {TOPICS.map((topic) => {
                const isActive = activeId === topic.id;
                return (
                  <button
                    key={topic.id}
                    onMouseEnter={() => setActiveId(topic.id)}
                    onClick={() => setActiveId(topic.id)}
                    className="flex items-center gap-6 md:gap-8 group text-left relative w-full"
                  >
                    <motion.div 
                      layout
                      className={clsx(
                        "w-6 h-6 rounded-full flex items-center justify-center bg-brand-offwhite border-2 transition-all duration-500 z-10",
                        isActive ? "border-brand-navy scale-125" : "border-gray-300 scale-100 group-hover:border-gray-400"
                      )}
                    >
                      <motion.div 
                        layout
                        className={clsx(
                          "w-2 h-2 rounded-full transition-colors duration-500",
                          isActive ? topic.dot : "bg-transparent group-hover:bg-gray-300"
                        )} 
                      />
                    </motion.div>
                    
                    <motion.h3 
                      layout
                      className={clsx(
                        "font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase transition-colors duration-500",
                        isActive ? topic.color : "text-brand-gray/40 hover:text-brand-gray/80"
                      )}
                    >
                      {topic.title}
                    </motion.h3>

                    {/* Active Indicator Line */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="absolute -left-[30px] w-2 h-[120%] bg-brand-navy top-[-10%] rounded-r-sm"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Content Area */}
          <div className="lg:col-span-7 flex flex-col justify-center relative">
            <AnimatePresence mode="wait">
              {TOPICS.map((topic) => (
                activeId === topic.id && (
                  <motion.div
                    key={topic.id}
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                    className="bg-white rounded-sm shadow-2xl border border-gray-100 relative overflow-hidden flex flex-col md:flex-row h-full min-h-[400px]"
                  >
                    {/* Decorative background number */}
                    <div className="absolute -bottom-10 -right-10 font-display text-[200px] font-bold text-gray-50 leading-none select-none pointer-events-none z-0">
                      {topic.title.substring(0, 2)}
                    </div>
                    
                    {/* The Image */}
                    <div className="w-full md:w-5/12 h-48 md:h-auto relative z-10 bg-gray-200">
                      <motion.div 
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${topic.img}')` }}
                      />
                    </div>

                    {/* The Content */}
                    <div className="w-full md:w-7/12 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: 48 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={clsx("h-1 mb-10", topic.dot)} 
                      />
                      
                      <ul className="space-y-6">
                        {topic.items.map((item, idx) => (
                          <motion.li 
                            key={item}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 + 0.3, type: "spring" }}
                            className="text-2xl md:text-3xl lg:text-4xl text-brand-navy font-bold tracking-tighter flex items-center gap-4"
                          >
                            <span className={clsx("font-mono text-sm opacity-50", topic.color)}>+</span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
