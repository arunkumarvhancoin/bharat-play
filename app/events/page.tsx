"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

const EVENTS = [
  {
    date: "18 OCT",
    year: "2026",
    title: "CITY RUNNERS PLAYTEST",
    location: "CHENNAI STUDIO",
    type: "WORKSHOP",
    status: "OPEN",
    color: "text-brand-orange",
    desc: "A hands-on, 4-hour participatory workshop where civic leaders and students will playtest our newest iteration of City Runners. The focus will be on testing new mechanics that simulate municipal budgeting constraints and rapid urbanization.",
    img: "https://images.unsplash.com/photo-1739368732843-800f36a9b7d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    date: "12 NOV",
    year: "2026",
    title: "CASCADE SIMULATION",
    location: "MUMBAI",
    type: "EXPERIENCE",
    status: "FULL",
    color: "text-brand-green",
    desc: "An immersive tabletop experience designed for cybersecurity professionals and urban planners. Teams will have 60 minutes to prevent a simulated cyber-physical attack from shutting down critical HVAC systems in a smart hospital.",
    img: "https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    date: "05 DEC",
    year: "2026",
    title: "PROSPERA SHOWCASE",
    location: "PUNE METROPOLIS",
    type: "EXHIBITION",
    status: "OPEN",
    color: "text-brand-navy",
    desc: "A full-day public exhibition showcasing the results of the Prospera game played by over 500 local students. See how the next generation balances rapid industrialization with environmental preservation through interactive maps and data visualization.",
    img: "https://images.unsplash.com/photo-1789289779061-2fb536bbe64f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
  },
  {
    date: "15 JAN",
    year: "2027",
    title: "FUTURES LITERACY LAB",
    location: "VIRTUAL",
    type: "ONLINE",
    status: "OPEN",
    color: "text-brand-orange",
    desc: "An online symposium exploring how serious games can build futures literacy in the Global South. Features keynote speakers from FLAME University and interactive digital whiteboarding sessions.",
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18"
  }
];

export default function EventsPage() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150); 
      mouseY.set(e.clientY - 200); 
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <main className="min-h-screen bg-brand-offwhite pt-32 pb-32">
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-24">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-green font-mono text-xs uppercase tracking-widest hover:text-brand-navy transition-colors">
          <ArrowLeft className="w-4 h-4" /> BACK TO HOME
        </Link>
      </div>
      
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter text-brand-navy mb-8 leading-[0.85]"
            >
              WHAT&apos;S <span className="text-brand-green">PLAYING</span> NOW.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-brand-gray font-medium max-w-2xl"
            >
              Join our upcoming simulations, participatory workshops, and serious game experiences designed to rethink urban infrastructure.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-6 relative">
        <div className="flex flex-col border-t border-gray-300 relative z-10">
          {EVENTS.map((evt, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group border-b border-gray-300 grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-12 hover:bg-white transition-colors cursor-pointer relative"
            >
              <div className="md:col-span-3 flex items-center gap-6 px-4 md:px-8 border-l-4 border-transparent group-hover:border-brand-navy transition-all">
                <h3 className={`font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter ${evt.color}`}>
                  {evt.date}
                </h3>
                <span className="font-mono text-sm text-brand-gray tracking-widest">{evt.year}</span>
              </div>
              
              {/* Mobile Image */}
              <div className="block md:hidden px-4 mt-6 mb-2">
                <div className="w-full aspect-video rounded-sm overflow-hidden bg-gray-100">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${evt.img}')` }}
                  />
                </div>
              </div>

              <div className="md:col-span-6 px-4 md:px-0 flex flex-col justify-center">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy uppercase tracking-tighter mb-4 group-hover:translate-x-2 transition-transform">
                  {evt.title}
                </h2>
                <p className="text-gray-500 font-medium leading-relaxed mb-6 max-w-lg">
                  {evt.desc}
                </p>
                <div className="flex gap-4 font-mono text-xs uppercase tracking-widest text-brand-gray font-bold">
                  <span>{evt.location}</span>
                  <span className="text-gray-300">|</span>
                  <span>{evt.type}</span>
                </div>
              </div>

              <div className="md:col-span-3 flex justify-start md:justify-end px-4 md:px-8">
                <button className={`px-6 py-3 font-mono text-xs uppercase tracking-widest font-bold rounded-sm border ${evt.status === 'FULL' ? 'border-gray-300 text-gray-400 bg-gray-50' : 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-colors z-20 relative'} w-full md:w-auto mt-4 md:mt-0`}>
                  {evt.status === 'FULL' ? 'WAITLIST ONLY' : 'REGISTER NOW'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Custom Cursor Image */}
      <AnimatePresence>
        {hoveredIdx !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{ x: cursorX, y: cursorY }}
            className="fixed top-0 left-0 w-[300px] h-[400px] pointer-events-none z-50 overflow-hidden rounded-sm shadow-2xl hidden md:block"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center will-change-transform"
              style={{ backgroundImage: `url('${EVENTS[hoveredIdx].img}')` }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
