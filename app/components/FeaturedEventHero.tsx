"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const FEATURED_EVENTS = [
  {
    id: "cascade",
    title: "CASCADE",
    subtitle: "CYBER-PHYSICAL THREAT SIMULATION",
    date: "12 NOV",
    location: "MUMBAI",
    category: "SYSTEMS CHANGE",
    image: "https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "bg-brand-green"
  },
  {
    id: "prospera",
    title: "PROSPERA",
    subtitle: "URBAN PLANNER EXPERIENCE",
    date: "05 DEC",
    location: "PUNE",
    category: "SERIOUS GAMES",
    image: "https://images.unsplash.com/photo-1789289779061-2fb536bbe64f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    color: "bg-brand-navy"
  },
  {
    id: "city-runners",
    title: "CITY RUNNERS",
    subtitle: "A GAME ABOUT THE CITY WE WANT",
    date: "18 OCT",
    location: "CHENNAI",
    category: "URBAN FUTURES",
    image: "https://images.unsplash.com/photo-1739368732843-800f36a9b7d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "bg-brand-orange"
  }
];

export default function FeaturedEventHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURED_EVENTS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const event = FEATURED_EVENTS[activeIndex];

  // Marquee animation variants
  const marqueeVariants = {
    animate: {
      x: [0, -1036],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 20,
          ease: "linear" as const,
        },
      },
    },
  };

  return (
    <section className="pt-32 pb-16 px-4 md:px-6 bg-white border-b border-gray-200 overflow-hidden relative" id="events">
      
      {/* Background Marquee */}
      <div className="absolute top-24 left-0 w-full overflow-hidden opacity-5 pointer-events-none whitespace-nowrap z-0">
        <motion.div 
          className="font-display text-[100px] md:text-[200px] font-bold uppercase tracking-tighter text-brand-navy"
          variants={marqueeVariants}
          animate="animate"
        >
          WHAT&apos;S PLAYING WHAT&apos;S PLAYING WHAT&apos;S PLAYING WHAT&apos;S PLAYING
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        
        <h1 className="font-mono text-sm tracking-widest text-brand-gray uppercase mb-12">
          WHAT&apos;S PLAYING
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-end">
          
          <div className="md:col-span-8 flex flex-col justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                className="overflow-hidden"
              >
                <h2 className="font-display text-4xl md:text-6xl lg:text-9xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.85] mb-6 text-balance">
                  {event.title}
                </h2>
                <p className="text-xl md:text-2xl text-brand-gray font-medium max-w-lg leading-tight">
                  {event.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-end border-l border-gray-200 pl-4 md:border-none md:pl-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col font-mono text-sm font-bold tracking-widest uppercase text-brand-navy mb-8 text-left md:text-right gap-1"
              >
                <span className="text-brand-orange">{event.date}</span>
                <span>{event.location}</span>
                <span>{event.category}</span>
              </motion.div>
            </AnimatePresence>
            
            <Link href="/events" className="inline-flex items-center gap-3 text-brand-navy font-bold text-xs uppercase tracking-widest hover:text-brand-orange transition-colors group">
              EXPLORE EVENT
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </div>

        </div>

        {/* Large Editorial Image with Carousel Controls (No Scroll Effects) */}
        <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-brand-navy mt-12 relative overflow-hidden rounded-sm group">
          <AnimatePresence mode="wait">
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: `url('${event.image}')` }}></div>
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end z-10 bg-gradient-to-t from-black/60 to-transparent">
            {/* Pagination Line Indicators */}
            <div className="flex gap-2">
              {FEATURED_EVENTS.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveIndex(i)}
                  className={`h-1 transition-all duration-300 ${i === activeIndex ? "w-16 bg-white" : "w-6 bg-white/30 hover:bg-white/50"}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button 
                onClick={() => setActiveIndex((prev) => (prev === 0 ? FEATURED_EVENTS.length - 1 : prev - 1))}
                className="w-12 h-12 bg-black/20 border border-white/20 flex items-center justify-center hover:bg-black/50 transition-colors text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setActiveIndex((prev) => (prev + 1) % FEATURED_EVENTS.length)}
                className="w-12 h-12 bg-black/20 border border-white/20 flex items-center justify-center hover:bg-black/50 transition-colors text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
