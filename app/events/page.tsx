"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, Sparkles, MapPin, History, Award } from "lucide-react";
import { motion } from "framer-motion";

const PAST_EVENTS = [
  {
    id: "saturdays-serious-social-games",
    number: "01",
    tag: "PUBLIC GAMEPLAY SERIES",
    title: "SATURDAYS4SERIOUSSOCIALGAMES",
    subtitle: "Play. Connect. Think differently.",
    desc: "Saturdays4SeriousSocialGames is Bharat Play's public gameplay series that brings people together to explore real-world challenges through purposeful play. Rather than treating games as just entertainment, the sessions use gameplay to encourage conversation, curiosity, systems thinking and responsible citizenship. The series has explored themes connected to livable cities, urban resilience and disaster preparedness, giving participants an opportunity to experience complex issues together, discuss different perspectives and think about the communities and cities they are part of.",
    format: "Public gameplay series",
    venue: "Bharat Play Innovation cum Experience Center, Kolathur, Chennai",
    focus: "Purposeful Play · Social Learning · Urban Challenges",
    date: "PUBLIC SERIES",
    time: "WEEKLY SESSIONS",
    takeaway: "Transforming complex urban resilience and disaster preparedness into communal conversations and systems thinking.",
  },
  {
    id: "resilient-cities-disaster",
    number: "02",
    tag: "DISASTER PREPAREDNESS",
    title: "RESILIENT CITIES / DISASTER PREPAREDNESS",
    subtitle: "Understanding resilient cities through play.",
    desc: "As part of Saturdays4SeriousSocialGames, this session brought participants together to explore disaster preparedness and urban resilience through purposeful gameplay. The experience looked at how disaster risk, preparedness and the way cities are planned are connected to everyday urban life. The session encouraged participants to think beyond disasters as isolated events and consider how livability, resilience, preparedness and responsible citizenship come together when building better cities. It was held on 12 September 2026 at the Bharat Play Experience Center in Chennai.",
    format: "Saturdays4SeriousSocialGames Session",
    venue: "Bharat Play Experience Center, Kolathur, Chennai",
    focus: "Resilience · Disaster Preparedness · Livable Cities",
    date: "12 SEP 2026",
    time: "5:30–7:30 PM",
    takeaway: "Connecting disaster risk, municipal preparedness and everyday urban life through hands-on simulation.",
  },
  {
    id: "city-runners-bitsaa",
    number: "03",
    tag: "INTERGENERATIONAL GATHERING",
    title: "CITY RUNNERS × BITSAA CHENNAI",
    subtitle: "Cities. Systems. People.",
    desc: "Bharat Play brought City Runners to an intergenerational gathering with BITSAA Chennai around Gandhi Jayanti. The experience brought together parents, young people and alumni to explore the complexity of cities through collaborative gameplay. Through City Runners, participants were encouraged to look at cities as interconnected systems, consider different perspectives and understand how individual decisions can connect to larger urban challenges. The experience created space for intergenerational learning, civic awareness, systems thinking and collective conversation — all through play.",
    format: "City Runners Play Experience",
    venue: "BITSAA Chennai Community Gathering",
    partner: "BITSAA Chennai",
    focus: "Systems Thinking · Civic Awareness · Intergenerational Learning",
    date: "03 OCT 2026",
    time: "GANDHI JAYANTI GATHERING",
    takeaway: "Intergenerational civic learning enabling parents, youth and alumni to negotiate real-world urban complexity together.",
  }
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
                  href="/benefits" 
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

      {/* SECTION: OTHER EVENTS DONE BY BHARAT PLAY (NO IMAGES, ARCHITECTURAL DOSSIER LAYOUT) */}
      <section className="bg-white py-32 px-4 md:px-6 border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto w-full">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 pb-12 border-b border-gray-200 gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 flex items-center gap-2">
                <History className="w-4 h-4 text-brand-orange" /> FIELD ARCHIVE & COMPLETED ENGAGEMENTS
              </span>
              <h3 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-brand-navy uppercase leading-[0.9]">
                OTHER EVENTS DONE <br/> <span className="text-brand-green">BY BHARAT PLAY.</span>
              </h3>
            </div>
            <p className="max-w-md text-brand-gray text-base md:text-lg font-medium leading-relaxed">
              A curated public record of our facilitated gameplay series, resilience sessions, and community partnerships across Chennai.
            </p>
          </div>

          {/* Chronological Architectural Ledger */}
          <div className="divide-y divide-gray-200">
            {PAST_EVENTS.map((event, idx) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="py-16 md:py-20 first:pt-0 last:pb-0 group"
              >
                {/* Top Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl md:text-3xl font-bold text-brand-orange">
                      {event.number}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded bg-brand-navy text-white">
                      {event.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-brand-gray">
                    <span className="text-brand-orange">{event.date}</span>
                    <span>·</span>
                    <span>{event.time}</span>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                  
                  {/* Left Column: Subtitle, Title & Narrative Description (lg:col-span-7) */}
                  <div className="lg:col-span-7 flex flex-col">
                    <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-wider text-brand-green mb-2 block">
                      {event.subtitle}
                    </span>
                    <h4 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-brand-navy mb-6 leading-[1.05] group-hover:text-brand-orange transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-base md:text-lg text-brand-navy/85 font-medium leading-relaxed">
                      {event.desc}
                    </p>
                  </div>

                  {/* Right Column: Structured Metadata Card & Takeaway (lg:col-span-5) */}
                  <div className="lg:col-span-5 flex flex-col gap-5">
                    
                    {/* Metadata Card */}
                    <div className="bg-brand-offwhite border border-gray-200 p-6 md:p-7 rounded-sm space-y-4">
                      
                      <div className="flex items-start gap-3 pb-3.5 border-b border-gray-200">
                        <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <div>
                          <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-gray block">
                            VENUE
                          </span>
                          <span className="font-semibold text-brand-navy text-sm block mt-0.5">
                            {event.venue}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 pb-3.5 border-b border-gray-200">
                        <Sparkles className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <div>
                          <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-gray block">
                            FORMAT
                          </span>
                          <span className="font-semibold text-brand-navy text-sm block mt-0.5">
                            {event.format}
                          </span>
                        </div>
                      </div>

                      {event.partner && (
                        <div className="flex items-start gap-3 pb-3.5 border-b border-gray-200">
                          <Award className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <div>
                            <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-gray block">
                              COMMUNITY PARTNER
                            </span>
                            <span className="font-semibold text-brand-navy text-sm block mt-0.5">
                              {event.partner}
                            </span>
                          </div>
                        </div>
                      )}

                      <div>
                        <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-gray block mb-2">
                          FOCUS THEMES
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {event.focus.split("·").map((f, fIdx) => (
                            <span 
                              key={fIdx} 
                              className="font-mono text-xs font-semibold bg-white border border-gray-200 text-brand-navy px-2.5 py-1 rounded-sm"
                            >
                              {f.trim()}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Key Outcome / Takeaway Banner */}
                    <div className="border-l-4 border-brand-orange bg-white p-5 rounded-r border border-l-brand-orange border-gray-200 shadow-sm">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-orange block mb-1">
                        KEY CIVIC OUTCOME
                      </span>
                      <p className="font-display text-base md:text-lg font-bold uppercase tracking-tight text-brand-navy">
                        {event.takeaway}
                      </p>
                    </div>

                  </div>

                </div>
              </motion.article>
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
