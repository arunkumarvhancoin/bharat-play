"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Quote, Video } from "lucide-react";
import { motion } from "framer-motion";

// Real field videos from /testimonials folder
const TESTIMONIAL_VIDEOS = [
  {
    id: "vid-1",
    title: "SNU Youth Reflection on City Runners",
    caption: "Student & youth participants share their takeaways on civic agency and city-level problem solving.",
    src: "/testimonials/SNU Youth Reflection on City Runners.mp4",
    poster: "/testimonials/posters/SNU Youth Reflection on City Runners.jpg",
    tag: "STUDENT VOICES",
    location: "Shiv Nadar University",
  },
  {
    id: "vid-2",
    title: "SNU Exhibition & Facilitation Showcase",
    caption: "Highlights from the interactive classroom simulation and systems thinking gameplay showcase.",
    src: "/testimonials/SNU Exhibition 23 Sep.mp4",
    poster: "/testimonials/posters/SNU Exhibition 23 Sep.jpg",
    tag: "EXHIBITION & LAB",
    location: "Campus Exhibition Hall",
  },
  {
    id: "vid-3",
    title: "Field Gameplay & Debrief Session",
    caption: "Live tabletop dynamics, multi-role negotiation, and post-game participant reflections.",
    src: "/testimonials/video_20260926_131453.mp4",
    poster: "/testimonials/posters/video_20260926_131453.jpg",
    tag: "LIVE GAMEPLAY",
    location: "Chennai Playtest Lab",
  },
  {
    id: "vid-4",
    title: "Tabletop Roleplay & Coalition Formation",
    caption: "Participants navigating cross-ward budgets, trade-offs, and emergency monsoon deluges.",
    src: "/testimonials/video_20261003_130427.mp4",
    poster: "/testimonials/posters/video_20261003_130427.jpg",
    tag: "ROLEPLAY & CONSENSUS",
    location: "Civic Innovation Hub",
  },
  {
    id: "vid-5",
    title: "Prof. Shiva Kumar @ FLAME University",
    caption: "Faculty reflection on experiential pedagogy, student participation, and systems-level learning.",
    src: "/testimonials/ProfShiva Kumar @FLAMEUniversity.mp4",
    poster: "/testimonials/posters/ProfShiva Kumar @FLAMEUniversity.jpg",
    tag: "FACULTY PERSPECTIVE",
    location: "FLAME University, Pune",
  },
  {
    id: "vid-6",
    title: "Prof. Kiran @ IIT BHU",
    caption: "Academic perspective on game-based simulation for engineering, complex systems, and civic problem-solving.",
    src: "/testimonials/Prof.Kiran IIT BHU.mp4",
    poster: "/testimonials/posters/Prof.Kiran IIT BHU.jpg",
    tag: "ACADEMIC LEADER",
    location: "IIT (BHU) Varanasi",
  },
  {
    id: "vid-7",
    title: "Divyaansh Chhipa @ GIPE",
    caption: "Economics and public policy student reflections on municipal trade-offs, fiscal constraints, and coalition building.",
    src: "/testimonials/Divyaansh Chhipa @GIPE.mp4",
    poster: "/testimonials/posters/Divyaansh Chhipa @GIPE.jpg",
    tag: "STUDENT REFLECTION",
    location: "Gokhale Institute (GIPE), Pune",
  },
  {
    id: "vid-8",
    title: "Bageshree @ ReEarth",
    caption: "Practitioner reflection on ecological awareness, environmental policy simulations, and youth climate agency.",
    src: "/testimonials/Bageshree@ReEarth.mp4",
    poster: "/testimonials/posters/Bageshree@ReEarth.jpg",
    tag: "CLIMATE & RESILIENCE",
    location: "ReEarth Collective",
  }
];

// Verified Real Testimonials from Bharat Play courses & sessions
const REAL_TESTIMONIALS = [
  {
    id: "01",
    quote: "The games from the course deserve to reach the stores.",
    name: "Nikhil Gehlot",
    role: "Founder, Toynik",
    tag: "Industry & Game Design",
    initials: "NG",
    highlight: true,
  },
  {
    id: "02",
    quote: "I feel as a university, we should further build upon the course on Disaster resilience in the terms to follow.",
    name: "Abhineety Goel",
    role: "Assistant Professor, Env. Studies",
    tag: "University Pedagogy",
    initials: "AG",
    highlight: true,
  },
  {
    id: "03",
    quote: "The courses opened my mind and inspired me to become an effective civil servant, especially working to reduce disaster risks.",
    name: "Course Participant",
    role: "Student, Disaster Resilience Course",
    tag: "Civic Leadership",
    initials: "CP",
    highlight: false,
  },
  {
    id: "04",
    quote: "I wish to take my game out to the society, beyond the classroom, as we do believe that we are part of something transformative!",
    name: "Course Participant",
    role: "Student, Game-Based Learning Cohort",
    tag: "Societal Impact",
    initials: "CP",
    highlight: false,
  }
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-brand-offwhite text-brand-navy pt-32 pb-32 selection:bg-brand-orange selection:text-white">
      
      {/* HEADER BREADCRUMB */}
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-16">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-orange font-mono text-xs uppercase tracking-widest hover:text-brand-navy transition-colors">
          <ArrowLeft className="w-4 h-4" /> BACK TO HOME
        </Link>
      </div>

      {/* SECTION 01 — HERO */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-8">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-xs font-bold tracking-widest text-brand-gray uppercase mb-8 flex items-center gap-2"
            >
              <Video className="w-4 h-4 text-brand-orange" /> BHARAT PLAY / VOICES & FIELD RECORDINGS
            </motion.h4>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.85] mb-8"
            >
              VOICES FROM THE <br/> <span className="text-brand-green">PLAYGROUND.</span>
            </motion.h1>
          </div>
          
          <div className="lg:col-span-4 flex flex-col justify-end lg:pt-28">
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-brand-gray"
            >
              Watch authentic video reflections from participants, university students, and educators, alongside verified testimonials from our courses and sessions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* TOP SECTION — TESTIMONIAL VIDEOS */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-gray-200">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">
              FIELD RECORDINGS & VIDEO REFLECTIONS
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-brand-navy">
              HEAR DIRECTLY FROM PLAYERS
            </h2>
          </div>
          <span className="font-mono text-xs text-brand-gray font-medium">
            {TESTIMONIAL_VIDEOS.length} AUTHENTIC RECORDINGS FROM FACILITATED COHORTS
          </span>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 [column-fill:_balance]">
          {TESTIMONIAL_VIDEOS.map((vid, idx) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="break-inside-avoid mb-8 bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Video Player — Native aspect ratio, unclipped with fast-loading poster */}
              <div className="relative w-full bg-black/95 overflow-hidden">
                <video
                  src={vid.src}
                  poster={vid.poster}
                  controls
                  preload="none"
                  playsInline
                  className="w-full h-auto block"
                />
              </div>

              {/* Video Meta Info */}
              <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-brand-offwhite text-brand-navy border border-gray-200">
                      {vid.tag}
                    </span>
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-brand-orange">
                      {vid.location}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                    {vid.title}
                  </h3>

                  <p className="text-sm text-brand-gray leading-relaxed font-medium">
                    {vid.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION — REAL WRITTEN TESTIMONIALS */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-gray-200">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">
              WRITTEN REFLECTIONS & ENDORSEMENTS
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-brand-navy">
              VOICES FROM ACADEMIA & INDUSTRY
            </h2>
          </div>
          <p className="max-w-md text-brand-gray text-sm md:text-base font-medium">
            Direct statements from our academic partners, industry collaborators, and student participants.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {REAL_TESTIMONIALS.map((item, idx) => {
            const colSpan = idx === 0 || idx === 3 ? "lg:col-span-7" : "lg:col-span-5";
            const borderAccent =
              idx === 0
                ? "border-l-4 border-l-brand-orange"
                : idx === 1
                ? "border-l-4 border-l-brand-green"
                : idx === 2
                ? "border-l-4 border-l-brand-navy"
                : "border-l-4 border-l-brand-orange";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative bg-white border border-gray-200 rounded-sm p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden ${colSpan} ${borderAccent}`}
              >
                {/* Decorative Quote Icon Watermark */}
                <div className="absolute top-4 right-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <Quote className="w-24 h-24 text-brand-navy" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-brand-offwhite text-brand-navy border border-gray-200">
                      {item.tag}
                    </span>
                    <Quote className="w-5 h-5 text-brand-orange/60 group-hover:text-brand-orange transition-colors" />
                  </div>

                  <p className="font-display text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-brand-navy leading-snug mb-8">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="relative z-10 border-t border-gray-100 pt-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-brand-offwhite border border-gray-200 flex items-center justify-center font-mono text-xs font-bold text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                      {item.initials}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display text-base md:text-lg font-bold uppercase tracking-tight text-brand-navy leading-tight">
                        {item.name}
                      </span>
                      <span className="text-xs text-brand-gray font-medium leading-tight mt-0.5">
                        {item.role}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] font-bold text-brand-gray/50 uppercase tracking-widest">
                    0{idx + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 md:px-6">
        <div className="max-w-[1000px] mx-auto w-full text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-green mb-4 block">
            EXPERIENCE IT YOURSELF
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.9] mb-8 sm:mb-12">
            JOIN THE NEXT <br/> <span className="text-brand-orange">PLAYTEST SESSION.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("open-events-calendar"));
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-navy text-white px-8 py-4 sm:py-5 rounded-sm font-mono text-xs font-bold uppercase tracking-widest hover:bg-brand-orange transition-colors cursor-pointer"
            >
              VIEW UPCOMING EVENTS <ArrowRight className="w-4 h-4" />
            </button>
            <Link href="/programs" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-brand-navy text-brand-navy px-8 py-4 sm:py-5 rounded-sm font-mono text-xs font-bold uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-colors">
              EXPLORE ALL PROGRAMS <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
