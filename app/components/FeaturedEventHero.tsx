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
    <section className="h-[100dvh] w-full relative overflow-hidden bg-brand-navy flex flex-col" id="events">
      
      {/* Background Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={event.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${event.image}')` }}></div>
          {/* Gradient Overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      {/* Background Marquee */}
      <div className="absolute top-24 md:top-32 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none whitespace-nowrap z-0">
        <motion.div 
          className="font-display text-[100px] md:text-[200px] font-bold uppercase tracking-tighter text-white"
          variants={marqueeVariants}
          animate="animate"
        >
          WHAT&apos;S PLAYING WHAT&apos;S PLAYING WHAT&apos;S PLAYING WHAT&apos;S PLAYING
        </motion.div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full h-full flex flex-col justify-end px-4 md:px-6 pb-12 md:pb-16 pt-32">
        
        <h1 className="font-mono text-xs tracking-widest text-white/50 uppercase mb-auto">
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
              >
                <h2 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tighter text-white leading-[0.9] mb-4 text-balance">
                  {event.title}
                </h2>
                <p className="text-lg md:text-2xl text-white/80 font-medium max-w-lg leading-relaxed">
                  {event.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-end pt-8 md:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col font-mono text-base md:text-xl font-bold tracking-widest uppercase text-white mb-8 text-left md:text-right gap-2"
              >
                <span className="text-brand-orange">{event.date}</span>
                <span className="text-white/70">{event.location}</span>
                <span className="text-white/70">{event.category}</span>
              </motion.div>
            </AnimatePresence>
            
            <Link href="/events" className="inline-flex items-center gap-3 text-white font-bold text-sm md:text-base uppercase tracking-widest hover:text-brand-orange transition-colors group">
              EXPLORE EVENT
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </div>

        </div>

        {/* Carousel Controls */}
        <div className="mt-12 md:mt-16 flex justify-between items-center border-t border-white/20 pt-6">
          <div className="flex gap-2">
            {FEATURED_EVENTS.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveIndex(i)}
                className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? "w-16 bg-brand-orange" : "w-6 bg-white/30 hover:bg-white/50"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button 
              onClick={() => setActiveIndex((prev) => (prev === 0 ? FEATURED_EVENTS.length - 1 : prev - 1))}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white transition-colors text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setActiveIndex((prev) => (prev + 1) % FEATURED_EVENTS.length)}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white transition-colors text-white"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
