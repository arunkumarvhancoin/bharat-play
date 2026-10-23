"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import EventsCalendar from "../components/EventsCalendar";

const PAST_EVENTS = [
  {
    id: "saturdays-serious-social-games",
    number: "01",
    title: "Saturdays 4 Serious Social Games",
    desc: "Weekly public tabletop sessions exploring urban livability, civic systems, and disaster preparedness.",
    venue: "Kolathur, Chennai",
    date: "Weekly Series",
  },
  {
    id: "resilient-cities-disaster",
    number: "02",
    title: "Resilient Cities & Disaster Prep",
    desc: "Hands-on simulation connecting disaster risk, municipal planning, and everyday civic choices.",
    venue: "Experience Center, Chennai",
    date: "12 Sep 2026",
  },
  {
    id: "city-runners-bitsaa",
    number: "03",
    title: "City Runners × BITSAA Chennai",
    desc: "Intergenerational play session bringing alumni, parents, and youth together to explore city trade-offs.",
    venue: "BITSAA, Chennai",
    date: "03 Oct 2026",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-brand-offwhite pt-32 pb-32 selection:bg-brand-orange selection:text-white">
      
      {/* BREADCRUMB */}
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-16">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-orange font-mono text-xs uppercase tracking-widest hover:text-brand-navy transition-colors">
          <ArrowLeft className="w-4 h-4" /> BACK TO HOME
        </Link>
      </div>
      
      {/* HEADER SECTION */}
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gray mb-6 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-brand-orange" /> BHARAT PLAY / EVENTS & PLAYTESTS
            </motion.h4>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter text-brand-navy mb-8 leading-[0.85]"
            >
              WHAT&apos;S <span className="text-brand-orange">PLAYING</span> NOW.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-brand-gray font-medium max-w-2xl leading-relaxed"
            >
              Join our weekly facilitated simulations, participatory workshops, and serious game experiences designed to deconstruct urban complexity.
            </motion.p>
          </div>
        </div>
      </div>

      {/* FEATURED EVENT HERO CARD — CITY RUNNERS */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-32">
        <div className="bg-brand-navy text-white rounded-sm p-8 md:p-14 lg:p-16 border border-gray-800 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-start">
              
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded bg-brand-orange text-white">
                  FEATURED EVENT
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded bg-white/10 text-white border border-white/20">
                  RECURRING WEEKLY
                </span>
              </div>

              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
                CITY RUNNERS
              </h2>

              <p className="text-xl md:text-2xl text-white/85 font-medium leading-relaxed mb-8">
                The flagship serious board game on participatory urban governance in India. Balance municipal coffers, navigate emergency monsoon deluges, and form cross-ward coalitions.
              </p>

              {/* Game Key Highlights / Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 bg-white/5 border border-white/10 p-6 rounded-sm">
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/60 block">SESSION DURATION</span>
                    <span className="font-display text-xl font-bold uppercase text-white">90 – 120 MINS</span>
                    <span className="font-mono text-xs text-brand-orange font-bold block">Fast-paced, high-stakes turns</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/60 block">GAMEPLAY ARCHITECTURE</span>
                    <span className="font-display text-lg font-bold uppercase text-white">SYSTEMS SIMULATION</span>
                    <span className="font-mono text-xs text-white/70 block">Interconnected Ward Board & Event Decks</span>
                  </div>
                </div>

                <div className="sm:col-span-2 pt-4 border-t border-white/10 space-y-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-orange block">CORE MECHANICS & EXPERIENCE</span>
                  <p className="text-xs text-white/85 leading-relaxed font-medium">
                    Players step into interdependent civic personas—navigating conflicting budgets, sudden climate crises (monsoon inundations & heatwaves), citizen grievances, and infrastructure trade-offs. No single actor can resolve challenges unilaterally; survival and city prosperity require cross-ward negotiation, coalition building, and collective resource pooling.
                  </p>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="https://wa.me/916381531026?text=Hi%20Bharat%20Play%2C%20I%20would%20like%20to%20reserve%20a%20seat%20for%20the%20Sunday%20City%20Runners%20session." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-5 rounded-sm font-mono text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-colors shadow-lg group"
                >
                  RESERVE YOUR SEAT
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
                <Link 
                  href="/games/city-runners" 
                  className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-5 rounded-sm font-mono text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
                >
                  EXPLORE GAMEPLAY MECHANICS
                </Link>
              </div>

            </div>

            {/* Right Image Artifact */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[4/3] w-full max-w-[480px] rounded-sm overflow-hidden border border-white/20 shadow-2xl group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/cr.webp" 
                  alt="City Runners Featured Playtest Session" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-orange block mb-1">
                    INTERACTIVE ANALOG LAB
                  </span>
                  <p className="text-xs text-white/90 font-medium">
                    Hands-on simulation unpacking municipal complexity, civic budgeting, and collective action.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* INTERACTIVE EVENTS CALENDAR: CLICK DATE TO INSPECT SESSIONS */}
      <EventsCalendar />

      {/* SECTION: OTHER EVENTS DONE BY BHARAT PLAY (COMPACT, SHORT CONTENT, FIRST 3 ONLY) */}
      <section className="bg-white py-12 sm:py-16 px-4 md:px-6 border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto w-full">
          
          {/* Section Header: Compact & Direct */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-brand-navy/20 gap-4">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-orange mb-1 block">
                FIELD ARCHIVE · 03 RECENT SESSIONS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-brand-navy uppercase">
                OTHER EVENTS DONE <span className="text-brand-green">BY BHARAT PLAY.</span>
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-brand-gray font-mono uppercase tracking-wider">
              Recent facilitated gameplay sessions & community labs
            </p>
          </div>

          {/* 3 Compact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PAST_EVENTS.map((event) => (
              <div
                key={event.id}
                className="bg-[#faf8f5] border border-brand-navy/20 hover:border-brand-navy p-5 rounded-xs flex flex-col justify-between transition-all duration-200 hover:shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-brand-navy/10">
                    <span className="font-mono text-xl font-black text-brand-orange">
                      {event.number}
                    </span>
                    <span className="font-mono text-[11px] font-bold uppercase text-brand-gray">
                      {event.date}
                    </span>
                  </div>

                  <h4 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                    {event.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-brand-navy/80 font-normal leading-relaxed">
                    {event.desc}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-brand-navy/10 flex items-center gap-1.5 text-[11px] font-mono text-brand-gray truncate">
                  <span>📍</span>
                  <span className="truncate">{event.venue}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CUSTOM CAMPUS / CORPORATE BOOKING CALLOUT */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6 pt-32">
        <div className="bg-white border border-gray-200 p-8 md:p-12 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-2 block">
              CAMPUS & INSTITUTIONAL BOOKINGS
            </span>
            <h4 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-brand-navy mb-2">
              LOOKING TO HOST A CUSTOM SESSION?
            </h4>
            <p className="text-brand-gray text-base font-medium max-w-xl">
              We bring City Runners directly to your university department, municipal training academy, or foundation with certified facilitators and customized scenario decks.
            </p>
          </div>
          <a
            href="https://wa.me/916381531026?text=Hi%20Bharat%20Play%2C%20I%20would%20like%20to%20request%20a%20custom%20campus%20or%20institutional%20City%20Runners%20workshop."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-navy text-white px-8 py-5 rounded-sm font-mono text-xs font-bold uppercase tracking-widest hover:bg-brand-orange transition-colors shrink-0"
          >
            REQUEST A WORKSHOP <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

    </main>
  );
}
