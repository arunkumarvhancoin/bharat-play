/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Users, 
  Clock, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Layers,
  Award,
  Compass,
  BookOpen,
  Tent,
  History,
  MapPin,
  Play,
  X,
  FileText
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PROGRAMS, ProgramConductedSession } from "../data/programs";

function getProgramIcon(id: string) {
  switch (id) {
    case "game-sessions":
      return <Layers className="w-4 h-4 text-brand-orange" />;
    case "play-workshops":
      return <Compass className="w-4 h-4 text-brand-green" />;
    case "play-exhibition":
      return <Tent className="w-4 h-4 text-brand-orange" />;
    case "courses":
      return <BookOpen className="w-4 h-4 text-brand-green" />;
    default:
      return <Layers className="w-4 h-4 text-brand-orange" />;
  }
}

interface FlattenedConductedSession extends ProgramConductedSession {
  programId: string;
  programName: string;
  programSlug: string;
}

const ALL_CONDUCTED_SESSIONS: FlattenedConductedSession[] = PROGRAMS.flatMap((p) => 
  (p.conductedSessions || []).map((s) => ({
    ...s,
    programId: p.id,
    programName: p.name,
    programSlug: p.slug
  }))
);

export default function ProgramsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedModalSession, setSelectedModalSession] = useState<FlattenedConductedSession | null>(null);
  const [selectedCardImage, setSelectedCardImage] = useState<Record<string, string>>({});
  const [modalActiveImage, setModalActiveImage] = useState<string | null>(null);

  const displayedSessions = activeFilter === "all"
    ? ALL_CONDUCTED_SESSIONS
    : ALL_CONDUCTED_SESSIONS.filter((s) => s.programId === activeFilter);

  return (
    <main className="min-h-screen bg-brand-offwhite pt-32 pb-32 selection:bg-brand-orange selection:text-white">
      
      {/* BREADCRUMB */}
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-brand-orange font-mono text-xs uppercase tracking-widest hover:text-brand-navy transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO HOME
        </Link>
      </div>

      {/* HEADER SECTION (HERO) */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gray mb-4 flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-brand-orange" /> BHARAT PLAY / PURPOSEFUL PLAY PROGRAMS
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-brand-navy mb-8 leading-[0.88]"
            >
              PROGRAMS FOR <br className="hidden sm:inline" />
              <span className="text-brand-orange">PURPOSEFUL PLAY.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-brand-gray font-medium max-w-3xl leading-relaxed"
            >
              Four structured engagement pathways designed to bring serious simulation, systems thinking, and participatory governance into classrooms, institutions, public squares, and leadership teams.
            </motion.p>
          </div>

          {/* Quick Stats Pill Panel */}
          <div className="lg:col-span-4 bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
            <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-orange block mb-4">
              PROGRAMS AT A GLANCE
            </span>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-r border-gray-100 pr-2">
                <span className="font-display text-3xl font-bold text-brand-navy block">4</span>
                <span className="font-mono text-[11px] text-brand-gray uppercase">Active Formats</span>
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-brand-green block">100+</span>
                <span className="font-mono text-[11px] text-brand-gray uppercase">Cohorts Trained</span>
              </div>
              <div className="border-r border-gray-100 pr-2 pt-3 border-t">
                <span className="font-display text-3xl font-bold text-brand-navy block">2h–8w</span>
                <span className="font-mono text-[11px] text-brand-gray uppercase">Session Range</span>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <span className="font-display text-3xl font-bold text-brand-orange block">Pan-India</span>
                <span className="font-mono text-[11px] text-brand-gray uppercase">On-Site & Campus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROVEN IN THE FIELD: CONDUCTED GAMES, WORKSHOPS & ENGAGEMENTS (SHOWED FIRST) */}
      <section id="conducted-archive" className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-20 scroll-mt-28">
        <div className="bg-white border border-gray-200 rounded-sm p-5 sm:p-8 md:p-14 shadow-xl">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-8 border-b border-gray-200 gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 flex items-center gap-2">
                <History className="w-4 h-4 text-brand-orange" /> VERIFIED FIELD ARCHIVE
              </span>
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-brand-navy uppercase leading-[0.9]">
                CONDUCTED GAMES, <br />
                <span className="text-brand-green">WORKSHOPS & ENGAGEMENTS.</span>
              </h2>
            </div>
            <div className="max-w-md space-y-4">
              <p className="text-brand-gray text-base md:text-lg font-medium leading-relaxed">
                Explore real case studies from conducted sessions across university campuses, alumni networks, and civic innovation forums.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono font-bold text-brand-navy">
                <span className="px-2.5 py-1 bg-brand-offwhite border border-gray-200 rounded">Shiv Nadar Univ</span>
                <span className="px-2.5 py-1 bg-brand-offwhite border border-gray-200 rounded">BITSAA Chennai</span>
                <span className="px-2.5 py-1 bg-brand-offwhite border border-gray-200 rounded">FLAME Univ</span>
                <span className="px-2.5 py-1 bg-brand-offwhite border border-gray-200 rounded">IIT (BHU)</span>
                <span className="px-2.5 py-1 bg-brand-offwhite border border-gray-200 rounded">GIPE Pune</span>
                <span className="px-2.5 py-1 bg-brand-offwhite border border-gray-200 rounded">ASSIST NGO</span>
              </div>
            </div>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 hide-scrollbar -mx-2 px-2 sm:mx-0 sm:px-0">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`font-mono text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm transition-all whitespace-nowrap shrink-0 border ${
                activeFilter === "all"
                  ? "bg-brand-navy text-white border-brand-navy shadow-sm"
                  : "bg-brand-offwhite text-brand-gray hover:text-brand-navy border-gray-200 hover:border-gray-300"
              }`}
            >
              ALL CONDUCTED ENGAGEMENTS ({ALL_CONDUCTED_SESSIONS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("game-sessions")}
              className={`font-mono text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm transition-all whitespace-nowrap shrink-0 border ${
                activeFilter === "game-sessions"
                  ? "bg-brand-orange text-white border-brand-orange shadow-sm"
                  : "bg-brand-offwhite text-brand-gray hover:text-brand-orange border-gray-200 hover:border-gray-300"
              }`}
            >
              GAME SESSIONS ({PROGRAMS.find((p) => p.id === "game-sessions")?.conductedSessions?.length || 0})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("play-workshops")}
              className={`font-mono text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm transition-all whitespace-nowrap shrink-0 border ${
                activeFilter === "play-workshops"
                  ? "bg-brand-green text-white border-brand-green shadow-sm"
                  : "bg-brand-offwhite text-brand-gray hover:text-brand-green border-gray-200 hover:border-gray-300"
              }`}
            >
              PLAY WORKSHOPS ({PROGRAMS.find((p) => p.id === "play-workshops")?.conductedSessions?.length || 0})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("play-exhibition")}
              className={`font-mono text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm transition-all whitespace-nowrap shrink-0 border ${
                activeFilter === "play-exhibition"
                  ? "bg-brand-orange text-white border-brand-orange shadow-sm"
                  : "bg-brand-offwhite text-brand-gray hover:text-brand-orange border-gray-200 hover:border-gray-300"
              }`}
            >
              PLAY EXHIBITIONS ({PROGRAMS.find((p) => p.id === "play-exhibition")?.conductedSessions?.length || 0})
            </button>
            {(PROGRAMS.find((p) => p.id === "courses")?.conductedSessions?.length || 0) > 0 && (
              <button
                type="button"
                onClick={() => setActiveFilter("courses")}
                className={`font-mono text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm transition-all whitespace-nowrap shrink-0 border ${
                  activeFilter === "courses"
                    ? "bg-brand-green text-white border-brand-green shadow-sm"
                    : "bg-brand-offwhite text-brand-gray hover:text-brand-green border-gray-200 hover:border-gray-300"
                }`}
              >
                COURSES ({PROGRAMS.find((p) => p.id === "courses")?.conductedSessions?.length || 0})
              </button>
            )}
          </div>

          {/* Conducted Sessions Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedSessions.map((session) => {
              const currentCardImg = selectedCardImage[session.id] || session.image;
              const cardPhotos = (session.galleryImages && session.galleryImages.length > 0 
                ? session.galleryImages 
                : [session.image]).filter(Boolean);

              return (
                <article 
                  key={session.id}
                  id={session.id}
                  className="bg-brand-offwhite border border-gray-200 rounded-sm overflow-hidden flex flex-col justify-between hover:border-brand-navy transition-all group shadow-sm hover:shadow-md"
                >
                  <div>
                    {/* Media (Video or Real Image) */}
                    <div className="relative aspect-video w-full bg-brand-navy overflow-hidden">
                      {session.videoSrc && currentCardImg === session.image ? (
                        <video 
                          controls 
                          poster={session.image}
                          preload="metadata"
                          className="w-full h-full object-cover"
                        >
                          <source src={session.videoSrc} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : currentCardImg ? (
                        <>
                          <img 
                            src={currentCardImg} 
                            alt={session.title} 
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-transparent to-transparent pointer-events-none" />
                        </>
                      ) : (
                        <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/90 text-white relative">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-brand-navy/90 text-white border border-white/20">
                              {session.tag}
                            </span>
                            <span className="font-mono text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-brand-orange text-white">
                              {session.programName}
                            </span>
                          </div>
                          <div>
                            <span className="font-mono text-[10px] uppercase font-bold text-brand-orange block mb-0.5">
                              {session.format}
                            </span>
                            <p className="font-display text-base font-bold uppercase tracking-tight text-white line-clamp-2">
                              {session.title}
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="absolute top-3 left-3 flex items-center gap-1.5 pointer-events-none">
                        <span className="font-mono text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-brand-navy/90 text-white border border-white/20">
                          {session.tag}
                        </span>
                        <span className="font-mono text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-brand-orange text-white">
                          {session.programName}
                        </span>
                      </div>

                      {(!session.videoSrc || currentCardImg !== session.image) && (
                        <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                          <span className="font-mono text-[10px] uppercase font-bold text-brand-orange block">
                            {session.date}
                          </span>
                          <p className="font-mono text-xs font-semibold text-white/90 truncate">
                            {session.venue}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Card Gallery Thumbnails (Switch pictures directly on card) */}
                    {cardPhotos.length > 1 && (
                      <div className="p-3 bg-white border-b border-gray-200/60 flex items-center justify-between gap-2">
                        <span className="font-mono text-[9px] uppercase font-bold text-brand-gray tracking-wider">
                          PICTURES ({cardPhotos.length})
                        </span>
                        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
                          {cardPhotos.map((imgUrl, pIdx) => (
                            <button
                              key={pIdx}
                              type="button"
                              onClick={() => setSelectedCardImage((prev) => ({ ...prev, [session.id]: imgUrl }))}
                              className={`w-9 h-6 rounded-xs overflow-hidden border transition-all shrink-0 ${
                                currentCardImg === imgUrl 
                                  ? "border-brand-orange shadow-xs scale-105" 
                                  : "border-gray-200 opacity-60 hover:opacity-100"
                              }`}
                            >
                              <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="p-6 space-y-3">
                      <div className="flex flex-wrap items-center justify-between text-xs font-mono text-brand-gray pb-2 border-b border-gray-200/60 gap-2">
                        <span className="text-brand-orange font-bold">{session.date}</span>
                        <span className="truncate max-w-[170px] font-medium">{session.venue}</span>
                      </div>

                      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-brand-navy group-hover:text-brand-orange transition-colors">
                        {session.title}
                      </h3>
                      <p className="font-mono text-xs font-bold uppercase text-brand-green">
                        {session.subtitle}
                      </p>
                      <p className="text-xs text-brand-gray font-medium line-clamp-3 leading-relaxed">
                        {session.description}
                      </p>

                      {session.contextChallenge && (
                        <div className="p-2.5 bg-gray-50 border border-gray-200/80 rounded-xs">
                          <span className="font-mono text-[9px] uppercase font-bold text-brand-navy block mb-0.5">
                            OPERATIONAL CHALLENGE
                          </span>
                          <p className="text-[11px] text-brand-gray line-clamp-2 leading-snug">
                            {session.contextChallenge}
                          </p>
                        </div>
                      )}

                      <div className="border-l-3 border-brand-orange bg-white p-3 rounded-r-xs mt-3">
                        <span className="font-mono text-[9px] uppercase font-bold text-brand-orange block mb-0.5">
                          KEY CIVIC TAKEAWAY
                        </span>
                        <p className="font-display text-xs font-bold text-brand-navy uppercase line-clamp-2">
                          &ldquo;{session.takeaway}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Actions (Details right here on site, zero external LinkedIn links) */}
                  <div className="p-6 pt-0 border-t border-gray-200/60 mt-4 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedModalSession(session);
                        setModalActiveImage(null);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-navy hover:text-brand-orange transition-colors group/btn py-1"
                    >
                      <FileText className="w-3.5 h-3.5 text-brand-orange group-hover/btn:scale-110 transition-transform" />
                      <span>CASE STUDY DOSSIER</span>
                    </button>

                    <div className="flex items-center gap-3">
                      <Link
                        href={`/programs/${session.programSlug}#${session.id}`}
                        className="text-xs font-mono font-bold uppercase text-brand-gray hover:text-brand-navy transition-colors inline-flex items-center gap-1"
                      >
                        <span>PROGRAM</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* FULL IN-SITU CASE STUDY DOSSIER MODAL (ALL DETAILS RIGHT HERE ON SITE) */}
      <AnimatePresence>
        {selectedModalSession && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-brand-navy/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedModalSession(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-sm shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-gray-200 relative my-auto p-4 sm:p-7 md:p-10 space-y-6 sm:space-y-8"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-brand-navy text-white">
                    #{selectedModalSession.number}
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-brand-orange text-white">
                    {selectedModalSession.programName}
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-gray-100 text-brand-navy">
                    {selectedModalSession.tag}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedModalSession(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-brand-orange hover:text-white flex items-center justify-center text-brand-navy transition-colors shrink-0"
                  aria-label="Close Case Study"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Title & Metadata */}
              <div>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-brand-navy mb-2">
                  {selectedModalSession.title}
                </h3>
                <p className="font-mono text-xs md:text-sm font-bold uppercase text-brand-green mb-4">
                  {selectedModalSession.subtitle}
                </p>

                <div className="flex flex-wrap gap-4 text-xs font-mono font-medium text-brand-gray pt-1 border-t border-gray-100">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                    <span className="text-brand-navy font-semibold">{selectedModalSession.date}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                    <span className="text-brand-navy font-semibold">{selectedModalSession.venue}</span>
                  </span>
                  {selectedModalSession.partner && (
                    <span className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-brand-green" />
                      <span>{selectedModalSession.partner}</span>
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-brand-navy" />
                    <span>{selectedModalSession.participants}</span>
                  </span>
                </div>
              </div>

              {/* Media Player / Full Photo Gallery Viewer */}
              <div className="space-y-4">
                <div className="relative aspect-video w-full bg-brand-navy rounded-sm overflow-hidden shadow-md">
                  {selectedModalSession.videoSrc && !modalActiveImage ? (
                    <video 
                      controls 
                      poster={selectedModalSession.image}
                      preload="metadata"
                      className="w-full h-full object-cover"
                    >
                      <source src={selectedModalSession.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (modalActiveImage || selectedModalSession.image) ? (
                    <img 
                      src={modalActiveImage || selectedModalSession.image} 
                      alt={selectedModalSession.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full min-h-[240px] p-8 flex flex-col justify-center items-center bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/90 text-white text-center">
                      <span className="font-mono text-xs uppercase font-bold tracking-widest text-brand-orange mb-2">
                        {selectedModalSession.tag}
                      </span>
                      <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white max-w-lg mb-2">
                        {selectedModalSession.title}
                      </h3>
                      <p className="font-mono text-xs text-white/70">
                        {selectedModalSession.format} · {selectedModalSession.venue}
                      </p>
                    </div>
                  )}
                </div>

                {/* Photo Gallery Thumbnails */}
                {selectedModalSession.galleryImages && selectedModalSession.galleryImages.length > 1 && (
                  <div>
                    <span className="font-mono text-[10px] uppercase font-bold text-brand-gray block mb-2 tracking-wider">
                      SESSION PHOTO GALLERY — CLICK TO VIEW REAL PICTURES ({selectedModalSession.galleryImages.length})
                    </span>
                    <div className="flex items-center gap-2 overflow-x-auto pb-1">
                      {selectedModalSession.videoSrc && (
                        <button
                          type="button"
                          onClick={() => setModalActiveImage(null)}
                          className={`relative w-24 aspect-video rounded-xs overflow-hidden border-2 transition-all shrink-0 bg-brand-navy flex items-center justify-center text-white font-mono text-[10px] font-bold ${
                            modalActiveImage === null ? "border-brand-orange shadow-sm" : "border-gray-200 opacity-70"
                          }`}
                        >
                          <Play className="w-4 h-4 mr-1 text-brand-orange" /> VIDEO
                        </button>
                      )}
                      {selectedModalSession.galleryImages.map((imgUrl, gIdx) => (
                        <button
                          key={gIdx}
                          type="button"
                          onClick={() => setModalActiveImage(imgUrl)}
                          className={`relative w-24 aspect-video rounded-xs overflow-hidden border-2 transition-all shrink-0 ${
                            modalActiveImage === imgUrl ? "border-brand-orange shadow-sm scale-102" : "border-gray-200 opacity-70 hover:opacity-100"
                          }`}
                        >
                          <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Narrative Content: Challenge, Simulation, Insights */}
              <div className="space-y-6 pt-2">
                <div>
                  <h4 className="font-mono text-xs uppercase font-bold text-brand-gray tracking-wider mb-2">
                    EXECUTIVE SUMMARY
                  </h4>
                  <p className="text-brand-navy text-sm md:text-base font-medium leading-relaxed">
                    {selectedModalSession.description}
                  </p>
                </div>

                {selectedModalSession.contextChallenge && (
                  <div className="p-5 bg-brand-offwhite border border-gray-200 rounded-sm space-y-1">
                    <span className="font-mono text-xs uppercase font-bold text-brand-orange block tracking-wider">
                      THE OPERATIONAL & CIVIC CHALLENGE
                    </span>
                    <p className="text-sm md:text-base text-brand-navy font-medium leading-relaxed">
                      {selectedModalSession.contextChallenge}
                    </p>
                  </div>
                )}

                {selectedModalSession.simulationDeployed && (
                  <div className="p-5 bg-white border border-gray-200 rounded-sm space-y-1 shadow-xs">
                    <span className="font-mono text-xs uppercase font-bold text-brand-navy block tracking-wider">
                      SIMULATION MECHANICS & SCENARIOS DEPLOYED
                    </span>
                    <p className="text-sm md:text-base text-brand-gray font-medium leading-relaxed">
                      {selectedModalSession.simulationDeployed}
                    </p>
                  </div>
                )}

                {selectedModalSession.keyInsights && selectedModalSession.keyInsights.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <span className="font-mono text-xs uppercase font-bold text-brand-green tracking-wider block">
                      KEY DISCOVERIES & FIELD FINDINGS
                    </span>
                    <div className="space-y-2">
                      {selectedModalSession.keyInsights.map((insight, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-brand-navy">
                          <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                          <span className="font-medium leading-relaxed">{insight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="border-l-4 border-brand-orange bg-brand-offwhite p-5 rounded-r-xs">
                  <span className="font-mono text-[10px] uppercase font-bold text-brand-orange block mb-1">
                    CORE PEDAGOGICAL & CIVIC TAKEAWAY
                  </span>
                  <p className="font-display text-base md:text-lg font-bold text-brand-navy uppercase">
                    &ldquo;{selectedModalSession.takeaway}&rdquo;
                  </p>
                </div>

                {selectedModalSession.testimonialQuote && (
                  <div className="p-6 bg-brand-navy text-white rounded-sm space-y-3 shadow-md">
                    <p className="font-display text-base md:text-lg font-bold italic leading-relaxed">
                      &ldquo;{selectedModalSession.testimonialQuote.quote}&rdquo;
                    </p>
                    <div className="flex flex-wrap items-center justify-between text-xs font-mono text-white/70 pt-2 border-t border-white/10 gap-2">
                      <span className="font-bold text-brand-orange">{selectedModalSession.testimonialQuote.speaker}</span>
                      <span>{selectedModalSession.testimonialQuote.role}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <a
                  href={`https://wa.me/916381531026?text=${encodeURIComponent(`Hi Bharat Play! I was reading the case study for "${selectedModalSession.title}" and would like to inquire about hosting a similar session for our institution.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-orange text-white hover:bg-brand-navy px-6 py-3.5 rounded-sm font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  <span>INQUIRE ABOUT THIS SIMULATION</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                  <Link
                    href={`/programs/${selectedModalSession.programSlug}#${selectedModalSession.id}`}
                    onClick={() => setSelectedModalSession(null)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 font-mono text-xs font-bold uppercase text-brand-navy hover:text-brand-orange transition-colors px-4 py-2.5 border border-gray-200 rounded-sm"
                  >
                    <span>VIEW BLUEPRINT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setSelectedModalSession(null)}
                    className="font-mono text-xs font-bold uppercase text-brand-gray hover:text-brand-navy transition-colors px-3 py-2"
                  >
                    CLOSE
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* QUICK JUMP NAV BAR FOR PROGRAM BLUEPRINTS */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-16 sticky top-20 md:top-24 z-30">
        <div className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-sm p-2 shadow-lg flex items-center justify-between overflow-x-auto gap-2 hide-scrollbar">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-gray px-3 whitespace-nowrap hidden sm:inline">
              PROGRAM BLUEPRINTS:
            </span>
            <a
              href="#conducted-archive"
              className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-white transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 border border-emerald-200"
            >
              <History className="w-3.5 h-3.5" />
              <span>FIELD ARCHIVE</span>
            </a>
          </div>
          <div className="flex items-center gap-2 flex-nowrap w-full sm:w-auto">
            {PROGRAMS.map((program) => (
              <a
                key={program.id}
                href={`#${program.id}`}
                className="font-mono text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-sm text-brand-navy hover:text-white hover:bg-brand-navy transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 border border-transparent hover:border-brand-navy"
              >
                <span className="text-brand-orange">{program.displayNumber}</span>
                <span>{program.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED PROGRAM CARDS LIST */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6 space-y-24 mb-32">
        {PROGRAMS.map((program) => {
          return (
            <article 
              key={program.id} 
              id={program.id} 
              className="scroll-mt-36 bg-white border border-gray-200 rounded-sm shadow-xl p-5 sm:p-8 md:p-14 lg:p-16 relative overflow-hidden group"
            >
              {/* Background Number Watermark */}
              <div className="absolute top-4 right-6 md:top-8 md:right-12 font-display text-[80px] sm:text-[140px] md:text-[220px] font-bold text-gray-50 leading-none select-none pointer-events-none z-0">
                {program.displayNumber}
              </div>

              <div className="relative z-10">
                
                {/* Top Badge Strip */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 bg-brand-navy text-white rounded-sm">
                      PROGRAM {program.programNumber}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 bg-brand-orange text-white rounded-xs flex items-center gap-1.5 shadow-2xs">
                      {getProgramIcon(program.id)}
                      {program.tag}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm border bg-emerald-50 text-emerald-700 border-emerald-200">
                      {program.duration.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 font-mono text-xs font-semibold text-brand-gray">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-brand-navy" /> {program.duration.label}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-brand-green" /> {program.cohortSize.label}
                    </span>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
                  
                  {/* Left Column: Title & Descriptions */}
                  <div className="lg:col-span-7 space-y-5">
                    <div>
                      <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-brand-navy leading-[0.95] mb-2">
                        <Link href={`/programs/${program.slug}`} className="hover:text-brand-orange transition-colors">
                          {program.name}
                        </Link>
                      </h2>
                      <p className="font-mono text-xs md:text-sm text-brand-orange font-bold uppercase tracking-wide">
                        {program.subtitle}
                      </p>
                    </div>

                    <p className="text-lg md:text-xl text-brand-navy/85 font-medium leading-relaxed">
                      {program.description}
                    </p>

                    {/* Academic Lineage Note */}
                    <div className="bg-white border-l-2 border-brand-navy p-4 rounded-r-xs text-xs text-brand-gray font-medium leading-relaxed">
                      <span className="font-mono text-[10px] uppercase font-bold text-brand-navy block mb-0.5">PEDAGOGICAL & FIELD ORIGIN</span>
                      {program.institutionalBacking}
                    </div>

                    {/* Focus Areas Box */}
                    <div className="bg-brand-offwhite border-l-4 border-brand-orange border-y border-r border-gray-200 p-6 rounded-r-sm">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-orange block mb-2">
                        CORE PILLARS & LEARNING DOMAINS
                      </span>
                      <p className="font-display text-xl md:text-2xl font-bold text-brand-navy leading-snug mb-4">
                        {program.tagline}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {program.focusAreas.map((focus, fIdx) => (
                          <span 
                            key={fIdx} 
                            className="font-mono text-xs font-semibold bg-white border border-gray-200 text-brand-navy px-3 py-1 rounded-sm shadow-2xs"
                          >
                            {focus}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Verified Conducted Engagements Pill Strip */}
                    {program.conductedSessions && program.conductedSessions.length > 0 && (
                      <div className="bg-white border border-gray-200 p-4 rounded-sm space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-green flex items-center gap-1.5">
                            <History className="w-3.5 h-3.5 text-brand-green" />
                            VERIFIED CONDUCTED ENGAGEMENTS
                          </span>
                          <span className="font-mono text-[10px] font-bold text-brand-gray">
                            {program.conductedSessions.length} SESSIONS ARCHIVED
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {program.conductedSessions.map((session) => (
                            <Link
                              key={session.id}
                              href={`/programs/${program.slug}#conducted-archive`}
                              className="font-mono text-xs font-semibold bg-brand-offwhite border border-gray-200 text-brand-navy hover:text-brand-orange hover:border-brand-orange px-2.5 py-1 rounded-sm transition-colors flex items-center gap-1.5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                              <span>{session.partner || session.venue.split(",")[0]}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Specifications Dossier Card */}
                  <div className="lg:col-span-5 bg-brand-offwhite border border-gray-200 rounded-sm p-6 md:p-8 space-y-6">
                    <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gray pb-3 border-b border-gray-200 flex items-center justify-between">
                      <span>PROGRAM BLUEPRINT</span>
                      <span className="text-brand-orange">#{program.displayNumber}</span>
                    </h3>

                    <div className="space-y-4 divide-y divide-gray-200 text-sm">
                      
                      {/* Format Row */}
                      <div className="pt-2">
                        <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-gray block mb-1">
                          DELIVERY FORMAT
                        </span>
                        <span className="font-semibold text-brand-navy">
                          {program.format}
                        </span>
                      </div>

                      {/* Duration Breakdown */}
                      <div className="pt-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-gray">
                            SESSION DURATION
                          </span>
                          <span className="font-mono text-xs font-bold text-brand-orange">
                            {program.duration.label}
                          </span>
                        </div>
                        <p className="text-xs text-brand-gray font-medium mt-1">
                          {program.duration.details}
                        </p>
                      </div>

                      {/* Cohort Size */}
                      <div className="pt-4 flex justify-between items-center">
                        <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-gray">
                          COHORT CAPACITY
                        </span>
                        <span className="font-display text-lg font-bold text-brand-green">
                          {program.cohortSize.min} – {program.cohortSize.max}+
                        </span>
                      </div>

                      {/* Lead Facilitator */}
                      <div className="pt-4">
                        <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-gray block mb-1">
                          LEAD INSTRUCTION
                        </span>
                        <span className="font-semibold text-brand-navy text-xs">
                          {program.leadFacilitator}
                        </span>
                      </div>

                      {/* Target Audience */}
                      <div className="pt-4">
                        <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-gray block mb-1">
                          RECOMMENDED AUDIENCE
                        </span>
                        <p className="text-xs text-brand-gray font-medium">
                          {program.targetAudience}
                        </p>
                      </div>

                    </div>

                    {/* Action CTAs */}
                    <div className="pt-4 space-y-2">
                      <Link
                        href={`/programs/${program.slug}`}
                        className="w-full inline-flex items-center justify-center gap-2 bg-brand-navy text-white hover:bg-brand-orange px-6 py-3.5 rounded-sm font-mono text-xs font-bold uppercase tracking-widest transition-colors shadow-md group"
                      >
                        <span>EXPLORE {program.name.toUpperCase()} DOSSIER</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <a
                        href={`https://wa.me/916381531026?text=${encodeURIComponent(program.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 border border-gray-300 text-brand-navy hover:bg-brand-offwhite px-6 py-3 rounded-sm font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        CHAT ON WHATSAPP &rarr;
                      </a>
                    </div>

                  </div>

                </div>

                {/* Modules Preview Accordion/Grid */}
                <div className="pt-8 border-t border-gray-100">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gray block mb-6">
                    PROGRAM PHASES & TIMELINE
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {program.modules.map((mod) => (
                      <div 
                        key={mod.number}
                        className="p-5 border border-gray-200 bg-brand-offwhite rounded-xs flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-mono text-xl font-bold text-brand-orange">
                              {mod.number}
                            </span>
                            <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-xs bg-white border border-gray-200 text-brand-navy">
                              {mod.tag}
                            </span>
                          </div>
                          <h4 className="font-display text-lg font-bold uppercase tracking-tight text-brand-navy mb-2">
                            {mod.title}
                          </h4>
                          <p className="text-xs text-brand-gray font-medium leading-relaxed">
                            {mod.description}
                          </p>
                        </div>
                        {mod.duration && (
                          <div className="mt-4 pt-3 border-t border-gray-200 font-mono text-[11px] font-bold text-brand-navy">
                            {mod.duration}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </article>
          );
        })}
      </section>


      {/* COMPARATIVE SPECIFICATIONS MATRIX TABLE */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-32">
        <div className="bg-white border border-gray-200 rounded-sm p-5 sm:p-8 md:p-14 shadow-xl">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-orange" /> COMPARATIVE DOSSIER
            </span>
            <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-navy uppercase mb-4">
              PROGRAMS SPECIFICATIONS MATRIX.
            </h3>
            <p className="text-brand-gray text-base md:text-lg font-medium">
              Compare the 4 programs side-by-side to select the ideal pathway for your institution, university classroom, or organizational retreat.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-brand-navy font-mono text-[11px] font-bold uppercase tracking-wider text-brand-navy">
                  <th className="py-4 px-4">Program</th>
                  <th className="py-4 px-4">Primary Mode</th>
                  <th className="py-4 px-4">Duration</th>
                  <th className="py-4 px-4">Cohort Capacity</th>
                  <th className="py-4 px-4">Target Audience</th>
                  <th className="py-4 px-4 text-right">Explore</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 font-medium text-sm text-brand-navy">
                {PROGRAMS.map((program) => (
                  <tr key={program.id} className="hover:bg-brand-offwhite transition-colors">
                    <td className="py-5 px-4 font-display font-bold text-base text-brand-navy whitespace-nowrap">
                      <Link href={`/programs/${program.slug}`} className="hover:text-brand-orange transition-colors">
                        <span className="text-brand-orange font-mono text-xs mr-2">{program.displayNumber}</span>
                        {program.name}
                      </Link>
                    </td>
                    <td className="py-5 px-4 text-xs text-brand-gray max-w-[220px]">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-sm bg-gray-100 text-brand-navy">
                        {program.tag}
                      </span>
                    </td>
                    <td className="py-5 px-4 font-mono font-bold text-xs whitespace-nowrap text-brand-orange">
                      {program.duration.label}
                    </td>
                    <td className="py-5 px-4 font-mono text-xs whitespace-nowrap">
                      {program.cohortSize.label}
                    </td>
                    <td className="py-5 px-4 text-xs text-brand-gray max-w-[280px]">
                      {program.targetAudience}
                    </td>
                    <td className="py-5 px-4 text-right whitespace-nowrap">
                      <Link
                        href={`/programs/${program.slug}`}
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-brand-orange hover:text-brand-navy transition-colors"
                      >
                        VIEW PROGRAM <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL WORKSHOP / UNIVERSITY FACILITATION BANNER */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6">
        <div className="bg-brand-navy text-white rounded-sm p-6 sm:p-10 md:p-14 lg:p-16 border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              COLLABORATIVE PARTNERSHIPS & CUSTOM PROGRAMS
            </span>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-tight mb-4">
              TAILOR A PURPOSEFUL PLAY PROGRAM FOR YOUR INSTITUTION.
            </h3>
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium">
              Led by Dr. Balaji Kalluri and our systems innovation team, we customize game scenarios, workshop canvases, and curriculum rubrics to match your organization&apos;s specific research, policy, or team goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
            <a
              href="https://wa.me/916381531026?text=Hi%20Bharat%20Play%2C%20I%20would%20like%20to%20discuss%20custom%20programs%20for%20our%20institution."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-5 rounded-sm font-mono text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-colors shadow-lg"
            >
              CHAT ON WHATSAPP <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-5 rounded-sm font-mono text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              CONTACT TEAM
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
