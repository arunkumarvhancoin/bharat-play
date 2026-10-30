"use client";

import Link from "next/link";
import { ArrowRight, Ticket, Sparkles, Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { getUpcomingEvents } from "../data/events";

export default function UpcomingEvents() {
  const events = getUpcomingEvents();

  return (
    <section className="py-20 px-4 md:px-6 bg-[#FDFBF7] border-b border-amber-200/50" id="upcoming">
      <div className="max-w-[1300px] mx-auto w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 items-start">
          
          <div className="md:col-span-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C2410C] text-white text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Community Play Sessions
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              Upcoming Serious Games
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Experience research-backed tabletop games that tackle real-world urban and social challenges in a fun, collaborative setting.
            </p>

            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("open-events-calendar"));
                }
              }}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0C2444] hover:bg-[#13335c] text-white font-display text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <span>VIEW IN EVENTS CALENDAR</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="md:col-span-8 flex flex-col gap-4">
            {events.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Link 
                  href={`/events/${event.id}`}
                  className="group block bg-white border border-amber-200/70 hover:border-orange-300 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-0.5 rounded-full bg-[#C2410C] text-white text-xs font-bold">
                        🎲 {event.category}
                      </span>
                      <span className="px-3 py-0.5 rounded-full bg-[#0C2444] text-white text-xs font-bold">
                        {event.badge || "Saturday Special"}
                      </span>
                    </div>

                    <span className="text-xs font-bold text-white bg-[#15803D] px-3 py-0.5 rounded-full">
                      {event.price}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-display text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                        {event.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 line-clamp-2">
                        {event.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-3 font-medium">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-orange-500" />
                          <span>{event.formattedDate}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-orange-500" />
                          <span>{event.time}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-orange-500" />
                          <span>{event.venue}</span>
                        </span>
                      </div>
                    </div>

                    <div className="shrink-0 pt-2 sm:pt-0">
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C2410C] hover:bg-[#a3360a] text-white font-display text-xs font-bold shadow-xs transition-all">
                        <Ticket className="w-4 h-4 text-white" />
                        <span>JOIN US</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
