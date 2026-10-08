"use client";

import { useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const TOPICS = [
  {
    id: "cities",
    title: "CITIES",
    description: "Urban systems. Mobility. Housing. Public space. Governance. Livability.",
    color: "bg-stone-200",
  },
  {
    id: "climate",
    title: "CLIMATE",
    description: "Climate literacy. Resilience. Sustainability. Collective action.",
    color: "bg-emerald-100",
  },
  {
    id: "education",
    title: "EDUCATION",
    description: "Experiential learning. Future skills. Serious games.",
    color: "bg-orange-100",
  },
  {
    id: "systems",
    title: "SYSTEMS",
    description: "Complexity. Interconnectedness. Unintended consequences. Design.",
    color: "bg-blue-100",
  },
];

export default function TopicExplorer() {
  const [activeTopic, setActiveTopic] = useState(TOPICS[0].id);

  return (
    <section className="py-32 px-6 bg-stone-50 border-t border-stone-200 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-8 items-start">
          
          {/* Header */}
          <div className="w-full md:w-1/3">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter uppercase">
              What Do We <br />
              Play With?
            </h2>
            <p className="mt-6 text-stone-600 max-w-sm">
              We focus on the complex, messy, interconnected systems that shape our world.
            </p>
          </div>
          
          {/* Interactive List */}
          <div className="w-full md:w-2/3">
            <div className="flex flex-col">
              {TOPICS.map((topic) => (
                <div 
                  key={topic.id}
                  className="group relative border-b border-stone-300 py-8 cursor-pointer"
                  onMouseEnter={() => setActiveTopic(topic.id)}
                >
                  <div className="flex items-center justify-between z-10 relative pointer-events-none">
                    <h3 className={clsx(
                      "font-display text-4xl md:text-6xl font-bold tracking-tighter transition-colors duration-300",
                      activeTopic === topic.id ? "text-stone-900" : "text-stone-400 group-hover:text-stone-600"
                    )}>
                      {topic.title}
                    </h3>
                  </div>
                  
                  <AnimatePresence>
                    {activeTopic === topic.id && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-xl text-stone-600 max-w-2xl">
                          {topic.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Background Highlight */}
                  <div className={clsx(
                    "absolute inset-0 -z-0 opacity-0 transition-opacity duration-500 rounded-lg -mx-4 px-4",
                    topic.color,
                    activeTopic === topic.id ? "opacity-50" : "opacity-0"
                  )} />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
