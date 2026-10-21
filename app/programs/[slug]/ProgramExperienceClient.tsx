/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Users, 
  CheckCircle2, 
  Award, 
  ExternalLink,
  Layers,
  PackageCheck,
  History,
  MapPin
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ProgramItem } from "../../data/programs";
import { GAMES } from "../../data/games";

interface ProgramExperienceClientProps {
  program: ProgramItem;
  otherPrograms: ProgramItem[];
}

export default function ProgramExperienceClient({ program, otherPrograms }: ProgramExperienceClientProps) {
  const [selectedMedia, setSelectedMedia] = useState<Record<string, string>>({});

  return (
    <main className="min-h-screen bg-brand-offwhite text-brand-navy pt-28 pb-32 selection:bg-brand-orange selection:text-white">
      
      {/* 01. TOP BREADCRUMB */}
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-6 pt-4 mb-8">
        <Link 
          href="/programs" 
          className="inline-flex items-center gap-2 text-brand-orange font-mono text-xs uppercase tracking-widest hover:text-brand-navy transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO ALL PROGRAMS
        </Link>
      </div>

      {/* 02. HERO SECTION */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 bg-brand-navy text-white rounded-sm">
                PROGRAM #{program.displayNumber}
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 bg-brand-orange text-white rounded-xs">
                {program.tag}
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm bg-emerald-50 text-emerald-700 border border-emerald-200">
                {program.duration.badge}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-brand-navy mb-6 leading-[0.9]"
            >
              {program.name}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-xs md:text-sm font-bold text-brand-orange uppercase tracking-wider mb-6"
            >
              {program.subtitle}
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-brand-navy/85 font-medium max-w-3xl leading-relaxed"
            >
              {program.description}
            </motion.p>
          </div>

          {/* Right Column: Hero Visual & At a Glance Specs */}
          <div className="lg:col-span-4 space-y-6">
            <div className="w-full aspect-[4/3] bg-brand-navy rounded-sm overflow-hidden relative shadow-lg border border-gray-200">
              {program.image ? (
                <>
                  <img 
                    src={program.image} 
                    alt={program.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="font-mono text-[10px] uppercase font-bold text-brand-orange tracking-widest block mb-1">
                      BHARAT PLAY INTERVENTIONS
                    </span>
                    <p className="font-display text-lg font-bold uppercase leading-tight">
                      {program.tagline}
                    </p>
                  </div>
                </>
              ) : (
                <div className="w-full h-full p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/90 text-white relative">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-white/10 text-brand-orange border border-white/10">
                      {program.tag}
                    </span>
                    <span className="font-mono text-xs uppercase font-bold text-white/60">
                      #{program.displayNumber}
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase font-bold text-brand-orange tracking-widest block mb-1">
                      BHARAT PLAY INTERVENTIONS
                    </span>
                    <p className="font-display text-xl md:text-2xl font-bold uppercase leading-tight text-white mb-2">
                      {program.name}
                    </p>
                    <p className="font-mono text-xs text-white/70 line-clamp-2">
                      {program.tagline}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm space-y-4 text-xs font-medium">
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-gray pb-2 border-b border-gray-100">
                SPECIFICATIONS AT A GLANCE
              </h3>
              
              <div className="flex justify-between items-center py-1">
                <span className="font-mono text-gray-500 uppercase">FORMAT</span>
                <span className="font-semibold text-brand-navy text-right">{program.format}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-t border-gray-100">
                <span className="font-mono text-gray-500 uppercase">DURATION</span>
                <span className="font-bold text-brand-orange text-right">{program.duration.label}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-t border-gray-100">
                <span className="font-mono text-gray-500 uppercase">CAPACITY</span>
                <span className="font-bold text-brand-green text-right">{program.cohortSize.label}</span>
              </div>
              <div className="flex justify-between items-start py-1 border-t border-gray-100">
                <span className="font-mono text-gray-500 uppercase shrink-0 pt-0.5">LEAD</span>
                <span className="font-semibold text-brand-navy text-right">{program.leadFacilitator}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 02.5. AVAILABLE PLAY SESSIONS (FOR GAME SESSIONS) */}
      {program.id === "game-sessions" && (
        <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-24">
          <div className="bg-white border border-gray-200 rounded-sm p-5 sm:p-8 md:p-14 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-8 border-b border-gray-200 gap-6">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-orange" /> BHARAT PLAY SIMULATION SUITE
                </span>
                <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-brand-navy">
                  AVAILABLE GAME SESSIONS.
                </h2>
              </div>
              <p className="max-w-md text-brand-gray text-sm md:text-base font-medium leading-relaxed">
                Choose from our 5 tabletop simulations for your team or cohort. Each game session is paired with a certified game master and cognitive debrief.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {GAMES.map((game) => (
                <div 
                  key={game.id}
                  className="bg-brand-offwhite border border-gray-200 rounded-sm overflow-hidden flex flex-col justify-between hover:border-brand-navy transition-all group shadow-sm hover:shadow-md"
                >
                  <div>
                    {/* Visual */}
                    <div className="relative aspect-video w-full bg-brand-navy overflow-hidden">
                      {game.image ? (
                        <>
                          <img 
                            src={game.image} 
                            alt={`${game.name} Play`}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                        </>
                      ) : (
                        <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/90 text-white relative">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-white">
                              #{game.displayNumber}
                            </span>
                            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-orange">
                              {game.difficulty}
                            </span>
                          </div>
                          <div>
                            <span className="font-mono text-[10px] uppercase font-bold text-brand-orange block mb-0.5">
                              {game.theme}
                            </span>
                            <p className="font-display text-lg font-bold uppercase tracking-tight text-white">
                              {game.name} Play
                            </p>
                          </div>
                        </div>
                      )}
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-navy text-white">
                          #{game.displayNumber}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-orange">
                          {game.format.split("/")[0].trim()}
                        </span>
                        <span className="font-mono text-[10px] font-bold text-white/90">
                          {game.players.label} PLAYERS
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy group-hover:text-brand-orange transition-colors mb-1">
                          {game.name} Play
                        </h3>
                        <p className="font-mono text-xs font-bold uppercase tracking-wide text-brand-green">
                          {game.subtitle}
                        </p>
                      </div>

                      <p className="text-sm text-brand-navy/85 font-medium leading-relaxed line-clamp-3">
                        {game.shortDescription}
                      </p>

                      <div className="pt-3 border-t border-gray-200 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                        <span className="text-brand-gray flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-brand-orange" />
                          <span>{game.duration.label}</span>
                        </span>
                        <span className="text-brand-navy font-bold">
                          AGE {game.age}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 pt-0 space-y-2">
                    <a
                      href={`https://wa.me/916381531026?text=${encodeURIComponent(`Hi Bharat Play! I would like to book or inquire about a ${game.name} Play session for our organization.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-brand-navy text-white hover:bg-brand-orange px-4 py-3 rounded-sm font-mono text-xs font-bold uppercase tracking-widest transition-colors shadow-sm group/btn"
                    >
                      <span>BOOK {game.name.toUpperCase()} PLAY</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>

                    <Link
                      href={`/games/${game.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 border border-gray-300 text-brand-navy hover:bg-white px-4 py-2.5 rounded-sm font-mono text-[11px] font-bold uppercase tracking-wider transition-colors"
                    >
                      <span>EXPLORE GAME RULES & DOSSIER</span>
                      <ExternalLink className="w-3 h-3 text-brand-gray" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 03. CONDUCTED SESSIONS & FIELD ARCHIVE (AUTHENTIC DEPLOYMENTS & LINKEDIN) */}
      {program.conductedSessions && program.conductedSessions.length > 0 && (
        <section id="conducted-archive" className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-24 scroll-mt-28">
          <div className="bg-white border border-gray-200 rounded-sm p-5 sm:p-8 md:p-14 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-8 border-b border-gray-200 gap-6">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-2 flex items-center gap-2">
                  <History className="w-4 h-4 text-brand-orange" /> FIELD ARCHIVE & COMPLETED ENGAGEMENTS
                </span>
                <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-brand-navy">
                  CONDUCTED {program.name.toUpperCase()}.
                </h2>
              </div>
              <p className="max-w-md text-brand-gray text-sm md:text-base font-medium leading-relaxed">
                A verified public record of facilitated gameplay, university labs, and institutional workshops deployed in the field.
              </p>
            </div>

            <div className="space-y-20">
              {program.conductedSessions.map((session) => {
                const currentImg = selectedMedia[session.id] || session.image;
                const allPhotos = (session.galleryImages && session.galleryImages.length > 0 
                  ? session.galleryImages 
                  : [session.image]).filter(Boolean);

                return (
                  <article 
                    key={session.id}
                    id={session.id}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-20 border-b border-gray-200 last:border-b-0 last:pb-0 group scroll-mt-36"
                  >
                    {/* Visual / Video Column (lg:col-span-5) */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="rounded-sm overflow-hidden border border-gray-200 shadow-md bg-brand-navy relative">
                        {session.videoSrc && currentImg === session.image ? (
                          <div className="relative aspect-video w-full bg-brand-navy">
                            <video 
                              controls 
                              poster={session.image}
                              preload="metadata"
                              className="w-full h-full object-cover"
                            >
                              <source src={session.videoSrc} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        ) : currentImg ? (
                          <div className="relative aspect-video w-full bg-brand-navy overflow-hidden">
                            <img 
                              src={currentImg} 
                              alt={session.title} 
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                            <div className="absolute bottom-3 left-4 right-4">
                              <span className="font-mono text-[10px] uppercase font-bold text-brand-orange tracking-widest">
                                {session.format}
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="aspect-video w-full p-6 flex flex-col justify-between bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/90 text-white relative">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-white/10 text-brand-orange border border-white/10">
                                {session.tag}
                              </span>
                              <span className="font-mono text-[10px] uppercase font-bold text-white/60">
                                #{session.number}
                              </span>
                            </div>
                            <div>
                              <span className="font-mono text-[10px] uppercase font-bold text-brand-orange block mb-1">
                                {session.format}
                              </span>
                              <p className="font-display text-lg font-bold uppercase tracking-tight text-white leading-tight">
                                {session.title}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Photo Gallery Thumbnails (Authentic Pictures) */}
                      {allPhotos.length > 1 && (
                        <div>
                          <span className="font-mono text-[10px] uppercase font-bold text-brand-gray block mb-2 tracking-wider">
                            SESSION PHOTO GALLERY ({allPhotos.length} PICTURES)
                          </span>
                          <div className="flex items-center gap-2 overflow-x-auto pb-1">
                            {allPhotos.map((imgUrl, pIdx) => (
                              <button
                                key={pIdx}
                                type="button"
                                onClick={() => setSelectedMedia((prev) => ({ ...prev, [session.id]: imgUrl }))}
                                className={`relative w-20 aspect-video rounded-xs overflow-hidden border-2 transition-all shrink-0 ${
                                  currentImg === imgUrl 
                                    ? "border-brand-orange shadow-sm scale-102" 
                                    : "border-gray-200 opacity-70 hover:opacity-100"
                                }`}
                              >
                                <img 
                                  src={imgUrl} 
                                  alt={`Photo ${pIdx + 1}`} 
                                  className="w-full h-full object-cover" 
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content Column (lg:col-span-7) */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-xl font-bold text-brand-orange">
                            #{session.number}
                          </span>
                          <span className="font-mono text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded bg-brand-navy text-white">
                            {session.tag}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-xs font-bold text-brand-gray">
                          <span className="text-brand-orange">{session.date}</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-brand-navy mb-1 group-hover:text-brand-orange transition-colors">
                          {session.title}
                        </h3>
                        <p className="font-mono text-xs font-bold uppercase tracking-wide text-brand-green">
                          {session.subtitle}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4 text-xs font-mono font-medium text-brand-gray pt-1">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                          <span className="text-brand-navy font-semibold">{session.venue}</span>
                        </span>
                        {session.partner && (
                          <span className="flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5 text-brand-green" />
                            <span>{session.partner}</span>
                          </span>
                        )}
                        <span className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-brand-navy" />
                          <span>{session.participants}</span>
                        </span>
                      </div>

                      <p className="text-brand-navy/90 text-sm md:text-base font-medium leading-relaxed">
                        {session.description}
                      </p>

                      {/* Context & Operational Challenge */}
                      {session.contextChallenge && (
                        <div className="p-4 bg-brand-offwhite border border-gray-200 rounded-sm space-y-1">
                          <span className="font-mono text-[10px] uppercase font-bold text-brand-orange block tracking-wider">
                            THE CONTEXT & OPERATIONAL CHALLENGE
                          </span>
                          <p className="text-xs md:text-sm text-brand-navy font-medium leading-relaxed">
                            {session.contextChallenge}
                          </p>
                        </div>
                      )}

                      {/* Simulation Deployed */}
                      {session.simulationDeployed && (
                        <div className="p-4 bg-white border border-gray-200 rounded-sm space-y-1 shadow-2xs">
                          <span className="font-mono text-[10px] uppercase font-bold text-brand-navy block tracking-wider">
                            SIMULATION SANDBOX & SCENARIOS DEPLOYED
                          </span>
                          <p className="text-xs md:text-sm text-brand-gray font-medium leading-relaxed">
                            {session.simulationDeployed}
                          </p>
                        </div>
                      )}

                      {/* Verified Field Findings */}
                      {session.keyInsights && session.keyInsights.length > 0 && (
                        <div className="space-y-2 pt-2">
                          <span className="font-mono text-[10px] uppercase font-bold text-brand-green tracking-wider block">
                            KEY DISCOVERIES & FIELD FINDINGS
                          </span>
                          <div className="space-y-2">
                            {session.keyInsights.map((insight, iIdx) => (
                              <div key={iIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-brand-navy/85">
                                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                                <span>{insight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Civic Takeaway Quote */}
                      <div className="border-l-4 border-brand-orange bg-brand-offwhite p-4 rounded-r-xs">
                        <span className="font-mono text-[10px] uppercase font-bold text-brand-orange block mb-0.5">
                          KEY CIVIC & PEDAGOGICAL TAKEAWAY
                        </span>
                        <p className="font-display text-sm md:text-base font-bold text-brand-navy uppercase">
                          &ldquo;{session.takeaway}&rdquo;
                        </p>
                      </div>

                      {/* Participant / Faculty Voice Quote */}
                      {session.testimonialQuote && (
                        <div className="p-4 bg-brand-navy text-white rounded-sm space-y-2 shadow-sm">
                          <p className="font-display text-sm md:text-base font-bold italic leading-snug">
                            &ldquo;{session.testimonialQuote.quote}&rdquo;
                          </p>
                          <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-white/70 pt-2 border-t border-white/10 gap-2">
                            <span className="font-bold text-brand-orange">{session.testimonialQuote.speaker}</span>
                            <span>{session.testimonialQuote.role}</span>
                          </div>
                        </div>
                      )}

                      {/* Direct Inquire / Book CTA & LinkedIn Event */}
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <a 
                          href={`https://wa.me/916381531026?text=${encodeURIComponent(`Hi Bharat Play! I would like to inquire about hosting a session similar to ${session.title} for our organization.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-navy text-white hover:bg-brand-orange px-5 py-3 rounded-sm font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm group/btn"
                        >
                          <span>INQUIRE ABOUT THIS FORMAT</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </div>

                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 04. PROGRAM MODULES & TIMELINE */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-24">
        <div className="bg-white border border-gray-200 rounded-sm p-5 sm:p-8 md:p-14 shadow-xl">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              CURRICULUM ARCHITECTURE
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-brand-navy mb-4">
              HOW {program.name.toUpperCase()} UNFOLDS.
            </h2>
            <p className="text-brand-gray text-base md:text-lg font-medium leading-relaxed">
              Every phase is engineered with pedagogical intention, transitioning from system immersion to cognitive synthesis and organizational application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {program.modules.map((mod) => (
              <div 
                key={mod.number}
                className="p-5 sm:p-8 border border-gray-200 bg-brand-offwhite rounded-xs flex flex-col justify-between hover:border-brand-navy transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-3xl font-bold text-brand-orange">
                      {mod.number}
                    </span>
                    <span className="font-mono text-xs uppercase font-bold px-2.5 py-1 rounded-xs bg-white border border-gray-200 text-brand-navy shadow-2xs">
                      {mod.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy group-hover:text-brand-orange transition-colors mb-3">
                    {mod.title}
                  </h3>
                  <p className="text-brand-gray text-sm md:text-base font-medium leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                {mod.duration && (
                  <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between font-mono text-xs">
                    <span className="text-gray-500 uppercase">TIMEFRAME:</span>
                    <span className="font-bold text-brand-navy">{mod.duration}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. STRATEGIC OUTCOMES & LEARNING IMPACT */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-green mb-3 block">
              MEASURABLE CAPABILITIES
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-brand-navy mb-6">
              STRATEGIC OUTCOMES.
            </h2>
            <p className="text-brand-gray text-base md:text-lg font-medium leading-relaxed mb-6">
              Participants leave not just with conceptual knowledge, but with systemic muscle memory and cognitive tools applicable immediately to real-world complexity.
            </p>
            <div className="p-6 bg-white border border-gray-200 rounded-sm">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-gray block mb-1">
                INSTITUTIONAL VALUE
              </span>
              <p className="font-display text-lg font-bold text-brand-navy">
                &ldquo;Purposeful play turns abstract policy and risk modeling into an experiential common language across leadership silos.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {program.outcomes.map((outcome, idx) => (
              <div 
                key={idx}
                className="bg-white border border-gray-200 p-5 sm:p-8 rounded-sm shadow-sm flex items-start gap-4 sm:gap-5 hover:border-brand-green transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-brand-green flex items-center justify-center shrink-0 border border-emerald-200">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-brand-navy mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-brand-gray text-sm md:text-base font-medium leading-relaxed">
                    {outcome.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 06. AUDIENCES & DELIVERABLES */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Target Audiences */}
          <div className="bg-white border border-gray-200 p-5 sm:p-8 md:p-12 rounded-sm shadow-sm space-y-6">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block">
              IDEAL COHORTS
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-brand-navy">
              WHO THIS IS DESIGNED FOR.
            </h3>
            <div className="space-y-6 divide-y divide-gray-100">
              {program.audiences.map((aud, aIdx) => (
                <div key={aIdx} className={aIdx > 0 ? "pt-6" : ""}>
                  <h4 className="font-display text-base sm:text-lg font-bold text-brand-navy mb-1.5 flex items-center gap-2">
                    <Users className="w-4 h-4 text-brand-orange" />
                    {aud.title}
                  </h4>
                  <p className="text-xs md:text-sm text-brand-gray font-medium leading-relaxed">
                    {aud.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tangible Deliverables */}
          <div className="bg-white border border-gray-200 p-5 sm:p-8 md:p-12 rounded-sm shadow-sm space-y-6">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-green block">
              WHAT IS INCLUDED
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-brand-navy">
              DELIVERABLES & TOOLKITS.
            </h3>
            <div className="space-y-6 divide-y divide-gray-100">
              {program.deliverables.map((del, dIdx) => (
                <div key={dIdx} className={dIdx > 0 ? "pt-6" : ""}>
                  <h4 className="font-display text-lg font-bold text-brand-navy mb-1.5 flex items-center gap-2">
                    <PackageCheck className="w-4 h-4 text-brand-green" />
                    {del.title}
                  </h4>
                  <p className="text-xs md:text-sm text-brand-gray font-medium leading-relaxed">
                    {del.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 07. OTHER PROGRAMS SWITCHER */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-24">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gray block mb-1">
              EXPLORE OUR OTHER PATHWAYS
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-brand-navy">
              MORE PURPOSEFUL PLAY PROGRAMS.
            </h2>
          </div>
          <Link
            href="/programs"
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-brand-orange hover:text-brand-navy transition-colors"
          >
            VIEW ALL <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherPrograms.map((op) => (
            <Link
              key={op.id}
              href={`/programs/${op.slug}`}
              className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm hover:shadow-md hover:border-brand-navy transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-brand-orange">
                    #{op.displayNumber}
                  </span>
                  <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-xs bg-gray-100 text-brand-navy">
                    {op.tag}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy group-hover:text-brand-orange transition-colors mb-2">
                  {op.name}
                </h3>

                <p className="text-xs text-brand-gray font-medium line-clamp-3 mb-6 leading-relaxed">
                  {op.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between font-mono text-xs">
                <span className="text-gray-500 uppercase">{op.duration.label}</span>
                <span className="text-brand-orange font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  VIEW PROGRAM &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 10. FINAL CALL TO ACTION */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6">
        <div className="bg-brand-navy text-white rounded-sm p-6 sm:p-10 md:p-14 lg:p-16 border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              READY TO COLLABORATE?
            </span>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-tight mb-4">
              BRING {program.name.toUpperCase()} TO YOUR ORGANIZATION.
            </h3>
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium">
              We travel across India and internationally to run high-impact simulation sessions and custom workshops for colleges, companies, and civil society.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
            <a
              href={`https://wa.me/916381531026?text=${encodeURIComponent(program.whatsappMessage)}`}
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
