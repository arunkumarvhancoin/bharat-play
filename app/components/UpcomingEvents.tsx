"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const UPCOMING_EVENTS = [
  {
    id: "game-design",
    date: "24 OCT",
    title: "SERIOUS GAME DESIGN",
    meta: "Workshop · Youth",
    color: "group-hover:text-brand-green",
    link: "#event",
  },
  {
    id: "playing-cities",
    date: "02 NOV",
    title: "PLAYING WITH CITIES",
    meta: "Public Session · Chennai",
    color: "group-hover:text-brand-orange",
    link: "#event",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="pb-24 px-4 md:px-6 bg-white border-b border-gray-200" id="upcoming">
      <div className="max-w-[1400px] mx-auto w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
          
          <div className="md:col-span-3">
            {/* Empty space for grid alignment with the 01 Events number above */}
          </div>

          <div className="md:col-span-9 flex flex-col border-t border-gray-200">
            {UPCOMING_EVENTS.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link 
                  href={event.link}
                  className="group flex flex-col md:flex-row md:items-center py-6 md:py-8 border-b border-gray-200 hover:bg-brand-offwhite transition-colors duration-300 px-4 -mx-4 md:px-6 md:-mx-6 rounded-sm relative block"
                >
                  <div className="font-mono text-sm tracking-widest font-bold text-brand-gray w-full md:w-32 mb-4 md:mb-0 group-hover:text-brand-navy transition-colors">
                    {event.date}
                  </div>
                  
                  <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between transform group-hover:translate-x-2 transition-transform duration-300">
                    <div className="flex flex-col">
                      <h3 className={`font-display text-2xl md:text-3xl font-bold uppercase tracking-tighter text-brand-navy ${event.color} transition-colors duration-300`}>
                        {event.title}
                      </h3>
                      <span className="text-brand-gray text-sm md:text-base font-medium mt-1">{event.meta}</span>
                    </div>
                    
                    <div className="mt-4 md:mt-0 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-gray group-hover:text-brand-navy transition-colors">
                      REGISTER
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            
            <div className="pt-8">
              <Link href="/events" className="inline-flex items-center gap-3 text-brand-navy font-bold text-xs uppercase tracking-widest hover:text-brand-orange transition-colors group">
                VIEW FULL CALENDAR
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
