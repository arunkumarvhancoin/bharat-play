"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Users,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface ScheduledEvent {
  id: string;
  date: string; // YYYY-MM-DD
  time: string;
  title: string;
  category: string;
  game: string;
  venue: string;
  capacity: string;
  description: string;
}

const EVENTS_DATA: ScheduledEvent[] = [
  // OCTOBER 2026
  {
    id: "bitsaa-gathering-oct3",
    date: "2026-10-03",
    time: "10:00 AM – 1:00 PM",
    title: "City Runners × BITSAA Gathering",
    category: "Community Lab",
    game: "City Runners",
    venue: "BITSAA Center, Chennai",
    capacity: "24 Participants · Invitees & Alumni",
    description: "Intergenerational gathering bringing parents, youth, and alumni together to navigate city infrastructure systems.",
  },
  {
    id: "sat-oct10",
    date: "2026-10-10",
    time: "5:30 PM – 7:30 PM",
    title: "Saturdays 4 Serious Social Games · Urban Heat",
    category: "Public Series",
    game: "City Runners & BiBo",
    venue: "Bharat Play Experience Center, Kolathur, Chennai",
    capacity: "16 Participants · Open Public Session",
    description: "Hands-on tabletop session deliberating urban heatwaves, tree canopy coverage, and municipal budget allocation.",
  },
  {
    id: "sun-oct11",
    date: "2026-10-11",
    time: "10:30 AM – 1:00 PM",
    title: "City Runners Public Tabletop Lab",
    category: "Systems Simulation",
    game: "City Runners",
    venue: "Bharat Play Experience Center, Kolathur, Chennai",
    capacity: "12 Participants · All Ages 12+",
    description: "High-stakes multi-ward tabletop simulation exploring participatory urban governance and crisis management.",
  },
  {
    id: "carnival-oct16",
    date: "2026-10-16",
    time: "10:00 AM – 4:00 PM",
    title: "Carnival of Games for Good (Day 1)",
    category: "Design Bootcamp",
    game: "Curated Game Suite",
    venue: "Besant Nagar, Chennai",
    capacity: "30 Participants · Serious Game Cohort",
    description: "Intensive serious game design sprint translating social, urban, and ecological dilemmas into playable analog experiences.",
  },
  {
    id: "carnival-oct17",
    date: "2026-10-17",
    time: "4:00 PM – 7:30 PM",
    title: "Carnival of Games for Good · Public Showcase",
    category: "Public Exhibition",
    game: "Student & Community Prototypes",
    venue: "Besant Nagar, Chennai",
    capacity: "Open Public Walkthrough",
    description: "Community showcase testing innovative play prototypes with live facilitators and multi-stakeholder debriefs.",
  },
  {
    id: "navratri-oct20",
    date: "2026-10-20",
    time: "4:30 PM – 7:00 PM",
    title: "Vijayadasami Family Resilience Workshop",
    category: "Intergenerational Workshop",
    game: "Master of Disasters",
    venue: "Inner Companion Sanctuary, Chrompet, Chennai",
    capacity: "20 Families & Children (Age 8+)",
    description: "Participatory family play workshop exploring household resilience and Chennai flood countermapping through Maa Shailaputri themes.",
  },
  {
    id: "sat-oct24",
    date: "2026-10-24",
    time: "5:30 PM – 7:30 PM",
    title: "Saturdays 4 Serious Social Games · Livable Cities",
    category: "Public Series",
    game: "City Runners & Cascade",
    venue: "Bharat Play Experience Center, Kolathur, Chennai",
    capacity: "16 Participants · Open Registration",
    description: "Weekly public gameplay exploring the interconnected systems of urban mobility, housing, and citizen participation.",
  },
  {
    id: "sun-oct25",
    date: "2026-10-25",
    time: "10:30 AM – 1:00 PM",
    title: "City Runners Sunday Simulation",
    category: "Systems Simulation",
    game: "City Runners",
    venue: "Bharat Play Experience Center, Kolathur, Chennai",
    capacity: "12 Participants · Open Registration",
    description: "Step into ward commissioner roles to negotiate competing municipal priorities and crisis scenarios.",
  },
  {
    id: "sat-oct31",
    date: "2026-10-31",
    time: "5:30 PM – 7:30 PM",
    title: "Saturdays 4 Serious Social Games · Monsoon Prep",
    category: "Public Series",
    game: "Master of Disasters & City Runners",
    venue: "Bharat Play Experience Center, Kolathur, Chennai",
    capacity: "16 Participants · Open Registration",
    description: "Seasonal flood resilience simulation testing drainage management, emergency supply chains, and civic cooperation.",
  },

  // NOVEMBER 2026
  {
    id: "sun-nov1",
    date: "2026-11-01",
    time: "10:30 AM – 1:00 PM",
    title: "City Runners Open Tabletop Lab",
    category: "Systems Simulation",
    game: "City Runners",
    venue: "Bharat Play Experience Center, Kolathur, Chennai",
    capacity: "12 Participants · All Ages 12+",
    description: "Explore the trade-offs of fast-growing megacities through collaborative board gameplay.",
  },
  {
    id: "playing-cities-nov2",
    date: "2026-11-02",
    time: "5:00 PM – 7:30 PM",
    title: "Playing with Cities · Public Session",
    category: "Public Lab",
    game: "City Runners & Prospera",
    venue: "Chennai City Hub",
    capacity: "25 Participants · Open Public Registration",
    description: "Deconstruct municipal governance and urban economic trade-offs in an engaging analog simulation.",
  },
  {
    id: "sat-nov7",
    date: "2026-11-07",
    time: "5:30 PM – 7:30 PM",
    title: "Saturdays 4 Serious Social Games · Energy Transitions",
    category: "Public Series",
    game: "BiBo & EnergeticPlay",
    venue: "Bharat Play Experience Center, Kolathur, Chennai",
    capacity: "16 Participants · Open Registration",
    description: "Simulate urban renewable grids, energy equity, and decentralized community microgrids.",
  },
  {
    id: "sat-nov14",
    date: "2026-11-14",
    time: "10:00 AM – 1:00 PM",
    title: "Children's Day Special: Purposeful Tabletop Play",
    category: "Youth & Family",
    game: "Master of Disasters & BiBo",
    venue: "Bharat Play Experience Center, Kolathur, Chennai",
    capacity: "24 Children & Parents (Ages 8–16)",
    description: "Screen-free intergenerational celebration building civic empathy and environmental awareness through play.",
  },
  {
    id: "sat-nov21",
    date: "2026-11-21",
    time: "5:30 PM – 7:30 PM",
    title: "Saturdays 4 Serious Social Games · Coastal Ecology",
    category: "Public Series",
    game: "City Runners & Cascade",
    venue: "Bharat Play Experience Center, Kolathur, Chennai",
    capacity: "16 Participants · Open Registration",
    description: "Explore the ecological vulnerabilities and economic dependencies of Chennai's coastal marshlands.",
  },
  {
    id: "sat-nov28",
    date: "2026-11-28",
    time: "10:30 AM – 1:30 PM",
    title: "City Runners Municipal Systems Studio",
    category: "Intensive Lab",
    game: "City Runners Extended Edition",
    venue: "Bharat Play Experience Center, Kolathur, Chennai",
    capacity: "16 Participants · Civic Leaders & Planners",
    description: "Deep-dive simulation with custom policy parameters, fiscal audits, and multi-round municipal deliberation.",
  },

  // SEPTEMBER 2026 (ARCHIVAL / PAST)
  {
    id: "sat-sep12",
    date: "2026-09-12",
    time: "5:30 PM – 7:30 PM",
    title: "Resilient Cities & Disaster Prep Lab",
    category: "Resilience Lab",
    game: "City Runners & Master of Disasters",
    venue: "Bharat Play Experience Center, Chennai",
    capacity: "Completed Session",
    description: "A hands-on simulation exploring disaster risk, municipal preparedness, and everyday urban resilience choices.",
  },
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function EventsCalendar() {
  // Default to October 2026 (current project timeline)
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(9); // 0-indexed: 9 = October
  const [selectedDate, setSelectedDate] = useState("2026-10-24");

  // Navigation handlers
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  // Compute days in month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  // Compute day of week for the 1st (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  // Adjust so Monday is 0 (Sunday becomes 6)
  const startOffset = (firstDayIndex + 6) % 7;

  // Days in previous month for trailing dates
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  // Find events on selected date
  const eventsOnSelectedDate = EVENTS_DATA.filter((e) => e.date === selectedDate);

  // Helper to format ISO date
  const formatDayISO = (day: number) => {
    const mm = String(currentMonth + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    return `${currentYear}-${mm}-${dd}`;
  };

  // Check if a date has events
  const hasEventOnDate = (isoDate: string) => {
    return EVENTS_DATA.some((e) => e.date === isoDate);
  };

  // Format selected date for display
  const formatSelectedDateDisplay = (isoDate: string) => {
    const [y, m, d] = isoDate.split("-").map(Number);
    const dateObj = new Date(y, m - 1, d);
    return dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="bg-white py-16 sm:py-24 px-4 md:px-6 border-b border-gray-200" id="calendar">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* ============================================================ */}
        {/* SECTION HEADER                                               */}
        {/* ============================================================ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b-2 border-brand-navy gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-2.5 h-2.5 bg-brand-orange rounded-full animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">
                INTERACTIVE SCHEDULE
              </span>
              <span className="text-brand-gray/30">/</span>
              <span className="font-mono text-xs uppercase tracking-widest text-brand-gray">
                SELECT A DATE TO VIEW SESSIONS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-brand-navy leading-none">
              EVENTS <span className="text-brand-orange">CALENDAR.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setCurrentYear(2026);
                setCurrentMonth(9);
                setSelectedDate("2026-10-24");
              }}
              className="font-mono text-xs font-bold uppercase px-3 py-1.5 border border-brand-navy/20 hover:border-brand-navy text-brand-navy rounded-xs transition-colors"
            >
              CURRENT MONTH (OCT 2026)
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* CALENDAR + EVENT DETAILS ASYMMETRICAL SWISS GRID            */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          
          {/* ======================================================== */}
          {/* LEFT: INTERACTIVE MONTHLY CALENDAR GRID (lg:col-span-6)  */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-5 bg-[#faf8f5] border-2 border-brand-navy/20 p-6 sm:p-8 rounded-xs shadow-xs">
            
            {/* Month & Year Navigation Bar */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b-2 border-brand-navy">
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-orange block">
                  MONTHLY DIRECTORY
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-brand-navy tracking-tight">
                  {MONTH_NAMES[currentMonth]} {currentYear}
                </h3>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={prevMonth}
                  aria-label="Previous Month"
                  className="w-9 h-9 border border-brand-navy/20 hover:border-brand-navy hover:bg-brand-navy hover:text-white rounded-xs flex items-center justify-center transition-colors text-brand-navy"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextMonth}
                  aria-label="Next Month"
                  className="w-9 h-9 border border-brand-navy/20 hover:border-brand-navy hover:bg-brand-navy hover:text-white rounded-xs flex items-center justify-center transition-colors text-brand-navy"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Days of Week Header */}
            <div className="grid grid-cols-7 gap-1 sm:gap-1.5 mb-2 text-center">
              {DAY_LABELS.map((day) => (
                <div
                  key={day}
                  className="font-mono text-xs font-bold uppercase tracking-wider text-brand-gray/80 py-1"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Day Cells Grid */}
            <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
              {/* Previous Month Trailing Days */}
              {Array.from({ length: startOffset }).map((_, i) => {
                const dayNum = daysInPrevMonth - startOffset + i + 1;
                return (
                  <div
                    key={`prev-${i}`}
                    className="aspect-square flex items-center justify-center text-xs font-mono text-brand-navy/20 cursor-default select-none rounded-xs"
                  >
                    {dayNum}
                  </div>
                );
              })}

              {/* Current Month Active Days */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const dayNum = i + 1;
                const isoDate = formatDayISO(dayNum);
                const isSelected = selectedDate === isoDate;
                const hasEvent = hasEventOnDate(isoDate);

                return (
                  <button
                    key={`current-${dayNum}`}
                    onClick={() => setSelectedDate(isoDate)}
                    className={`relative aspect-square flex flex-col items-center justify-center font-mono text-xs sm:text-sm font-bold rounded-xs transition-all duration-200 ${
                      isSelected
                        ? "bg-brand-orange text-white shadow-md scale-105 z-10 font-black"
                        : hasEvent
                        ? "bg-white text-brand-navy border-2 border-brand-navy/40 hover:border-brand-orange hover:bg-brand-orange/5"
                        : "bg-white/50 text-brand-navy/70 hover:bg-white hover:text-brand-navy"
                    }`}
                  >
                    <span>{dayNum}</span>

                    {/* Active Event Dot Indicator */}
                    {hasEvent && (
                      <span
                        className={`absolute bottom-1.5 w-1.5 h-1.5 rounded-full ${
                          isSelected ? "bg-white" : "bg-brand-orange"
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Calendar Legend */}
            <div className="pt-6 mt-6 border-t border-brand-navy/10 flex items-center justify-between text-xs font-mono text-brand-gray flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-brand-orange rounded-full" />
                <span>Scheduled Session</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-white border border-brand-navy/30 rounded-xs" />
                <span>Click any day to inspect</span>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT: DYNAMIC EVENT DETAILS PANEL (lg:col-span-6)       */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col">
            
            {/* Header for Selected Date */}
            <div className="pb-4 mb-6 border-b-2 border-brand-navy flex items-baseline justify-between flex-wrap gap-2">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-1">
                  SELECTED DATE RECORD
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-brand-navy tracking-tight">
                  {formatSelectedDateDisplay(selectedDate)}
                </h3>
              </div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-gray px-2.5 py-1 bg-[#faf8f5] border border-brand-navy/15 rounded-xs">
                {eventsOnSelectedDate.length} {eventsOnSelectedDate.length === 1 ? "SESSION" : "SESSIONS"}
              </span>
            </div>

            {/* Event List or Empty State */}
            <AnimatePresence mode="wait">
              {eventsOnSelectedDate.length > 0 ? (
                <motion.div
                  key={selectedDate}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {eventsOnSelectedDate.map((ev) => (
                    <article
                      key={ev.id}
                      className="bg-white border-2 border-brand-navy/20 hover:border-brand-navy p-6 sm:p-7 rounded-xs shadow-xs hover:shadow-lg transition-all"
                    >
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-3 pb-3 mb-4 border-b border-brand-navy/10 flex-wrap">
                        <span className="font-mono text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 bg-brand-navy text-white rounded-xs">
                          {ev.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-brand-orange">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{ev.time}</span>
                        </div>
                      </div>

                      {/* Event Title */}
                      <h4 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-brand-navy mb-2 leading-tight">
                        {ev.title}
                      </h4>

                      {/* Featured Game */}
                      <div className="flex items-center gap-2 mb-4 font-mono text-xs font-bold uppercase tracking-wider text-brand-green">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>FEATURED SIMULATION: {ev.game}</span>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-brand-navy/85 font-normal leading-relaxed mb-6">
                        {ev.description}
                      </p>

                      {/* Specs Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-brand-navy/10 text-xs font-mono mb-6">
                        <div className="flex items-start gap-2 text-brand-gray">
                          <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <span className="text-brand-navy font-semibold leading-snug">{ev.venue}</span>
                        </div>
                        <div className="flex items-center gap-2 text-brand-gray">
                          <Users className="w-4 h-4 text-brand-green shrink-0" />
                          <span className="text-brand-navy font-semibold">{ev.capacity}</span>
                        </div>
                      </div>

                      {/* Action Button: Direct WhatsApp Registration with pre-filled message */}
                      <a
                        href={`https://wa.me/916381531026?text=${encodeURIComponent(
                          `Hi Bharat Play, I would like to register/inquire for the session: "${ev.title}" on ${selectedDate} (${ev.time}).`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto bg-brand-orange text-white hover:bg-brand-navy px-6 py-3.5 rounded-xs font-mono text-xs font-bold uppercase tracking-widest transition-colors shadow-xs"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>REGISTER VIA WHATSAPP</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </article>
                  ))}
                </motion.div>
              ) : (
                /* Empty State: Helpful guidance & quick upcoming dates */
                <motion.div
                  key={`empty-${selectedDate}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#faf8f5] border-2 border-dashed border-brand-navy/20 p-8 sm:p-10 rounded-xs text-center flex flex-col items-center justify-center"
                >
                  <CalendarIcon className="w-10 h-10 text-brand-orange mb-3" />
                  <h4 className="font-display text-xl sm:text-2xl font-bold uppercase text-brand-navy mb-2">
                    NO PUBLIC SESSION ON THIS DATE
                  </h4>
                  <p className="text-sm text-brand-gray max-w-md mb-6 leading-relaxed">
                    We host public sessions primarily on weekends. You can click on any highlighted date in the calendar, or request a custom workshop for your team.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => setSelectedDate("2026-10-24")}
                      className="font-mono text-xs font-bold uppercase px-4 py-2.5 bg-white border border-brand-navy/20 hover:border-brand-orange hover:text-brand-orange text-brand-navy rounded-xs transition-colors shadow-xs"
                    >
                      JUMP TO NEXT SESSION (24 OCT)
                    </button>
                    <a
                      href={`https://wa.me/916381531026?text=${encodeURIComponent(
                        `Hi Bharat Play, we would like to inquire about hosting a custom private simulation on ${selectedDate}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-bold uppercase px-4 py-2.5 bg-brand-navy text-white hover:bg-brand-orange rounded-xs transition-colors shadow-xs"
                    >
                      BOOK THIS DATE AS PRIVATE LAB
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
