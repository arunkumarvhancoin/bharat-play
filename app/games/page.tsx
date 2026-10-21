"use client";

import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Users, 
  Clock, 
  Sparkles, 
  Gauge, 
  CheckCircle2, 
  GraduationCap, 
  Layers,
  Award
} from "lucide-react";
import { motion } from "framer-motion";
import { GAMES, GameItem } from "../data/games";

function getDifficultyStyle(difficulty: GameItem["difficulty"]) {
  switch (difficulty) {
    case "Low":
      return {
        badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
        indicator: "bg-emerald-500",
        meter: "w-1/4 bg-emerald-500"
      };
    case "Low to Medium":
      return {
        badge: "bg-teal-50 text-teal-700 border-teal-200",
        indicator: "bg-teal-500",
        meter: "w-2/5 bg-teal-500"
      };
    case "Medium":
      return {
        badge: "bg-amber-50 text-amber-700 border-amber-200",
        indicator: "bg-amber-500",
        meter: "w-3/5 bg-amber-500"
      };
    case "Medium to High":
      return {
        badge: "bg-orange-50 text-orange-700 border-orange-200",
        indicator: "bg-orange-500",
        meter: "w-5/6 bg-orange-500"
      };
  }
}

export default function GamesPage() {
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

      {/* HEADER SECTION */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gray mb-4 flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-brand-orange" /> BHARAT PLAY / SERIOUS GAMES CATALOG
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-brand-navy mb-6 sm:mb-8 leading-[0.9] text-balance"
            >
              SERIOUS GAMES FOR <br className="hidden sm:inline" />
              <span className="text-brand-orange">COMPLEX SYSTEMS.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-brand-gray font-medium max-w-3xl leading-relaxed"
            >
              A curated suite of 5 analog tabletop simulations and participatory labs. Designed to unpack urban livability, architecture, net-zero engineering, cyber resilience, and organizational risk.
            </motion.p>
          </div>

          {/* Quick Stats Pill Panel */}
          <div className="lg:col-span-4 bg-white border border-gray-200 p-5 sm:p-6 rounded-sm shadow-sm">
            <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-orange block mb-4">
              SUITE AT A GLANCE
            </span>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-r border-gray-100 pr-2">
                <span className="font-display text-3xl font-bold text-brand-navy block">5</span>
                <span className="font-mono text-[11px] text-brand-gray uppercase">Active Simulations</span>
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-brand-green block">10+</span>
                <span className="font-mono text-[11px] text-brand-gray uppercase">Age Minimum</span>
              </div>
              <div className="border-r border-gray-100 pr-2 pt-3 border-t">
                <span className="font-display text-3xl font-bold text-brand-navy block">2–12</span>
                <span className="font-mono text-[11px] text-brand-gray uppercase">Players / Session</span>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <span className="font-display text-3xl font-bold text-brand-orange block">1–2h</span>
                <span className="font-mono text-[11px] text-brand-gray uppercase">Play + 1h Debrief</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK JUMP NAV BAR */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-14 sm:mb-20 sticky top-20 md:top-24 z-30">
        <div className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-sm p-1.5 sm:p-2 shadow-lg flex items-center justify-between overflow-x-auto gap-1.5 sm:gap-2 hide-scrollbar">
          <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-gray px-2 sm:px-3 whitespace-nowrap hidden sm:inline">
            JUMP TO:
          </span>
          <div className="flex items-center gap-1.5 sm:gap-2 flex-nowrap w-full sm:w-auto">
            {GAMES.map((game) => (
              <a
                key={game.id}
                href={`#${game.id}`}
                className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-sm text-brand-navy hover:text-white hover:bg-brand-navy transition-all whitespace-nowrap shrink-0 flex items-center gap-1 border border-transparent hover:border-brand-navy"
              >
                <span className="text-brand-orange">{game.displayNumber}</span>
                <span>{game.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED GAME CARDS LIST */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6 space-y-16 sm:space-y-24 mb-32">
        {GAMES.map((game) => {
          const diffStyle = getDifficultyStyle(game.difficulty);

          return (
            <article 
              key={game.id} 
              id={game.id} 
              className="scroll-mt-36 bg-white border border-gray-200 rounded-sm shadow-xl p-5 sm:p-8 md:p-14 lg:p-16 relative overflow-hidden group"
            >
              {/* Background Number Watermark */}
              <div className="absolute top-2 right-4 sm:top-4 sm:right-6 md:top-8 md:right-12 font-display text-[80px] sm:text-[140px] md:text-[220px] font-bold text-gray-50 leading-none select-none pointer-events-none z-0">
                {game.displayNumber}
              </div>

              <div className="relative z-10">
                
                {/* Top Badge Strip */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 bg-brand-navy text-white rounded-sm">
                      GAME {game.gameNumber}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 bg-brand-orange text-white rounded-xs flex items-center gap-1.5 shadow-2xs">
                      <Award className="w-3.5 h-3.5" /> {game.institutionalBadge}
                    </span>
                    <span className={`font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm border ${diffStyle.badge}`}>
                      DIFFICULTY: {game.difficulty}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 font-mono text-xs font-semibold text-brand-gray">
                    <span className="flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-brand-orange" /> Age {game.age}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-brand-green" /> {game.players.label}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-brand-navy" /> {game.duration.label}
                    </span>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
                  
                  {/* Left Column: Title & Descriptions */}
                  <div className="lg:col-span-7 space-y-5">
                    <div>
                      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-brand-navy leading-[0.95] mb-2">
                        <Link href={`/games/${game.id}`} className="hover:text-brand-orange transition-colors">
                          {game.name}
                        </Link>
                      </h2>
                      <p className="font-mono text-xs md:text-sm text-brand-orange font-bold uppercase tracking-wide">
                        {game.subtitle}
                      </p>
                    </div>

                    <p className="text-lg md:text-xl text-brand-navy/85 font-medium leading-relaxed">
                      {game.description}
                    </p>

                    {/* Authentic Origin Note */}
                    <div className="bg-white border-l-2 border-brand-navy p-4 rounded-r-xs text-xs text-brand-gray font-medium leading-relaxed">
                      <span className="font-mono text-[10px] uppercase font-bold text-brand-navy block mb-0.5">ACADEMIC & FIELD LINEAGE</span>
                      {game.academicOrigin}
                    </div>

                    {/* Core Theme Box */}
                    <div className="bg-brand-offwhite border-l-4 border-brand-orange border-y border-r border-gray-200 p-6 rounded-r-sm">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-orange block mb-2">
                        THEMES & CURRICULAR DOMAINS
                      </span>
                      <p className="font-display text-xl md:text-2xl font-bold text-brand-navy leading-snug mb-4">
                        {game.theme}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {game.themes.map((themeTag, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="font-mono text-xs font-semibold bg-white border border-gray-200 text-brand-navy px-3 py-1 rounded-sm shadow-2xs"
                          >
                            {themeTag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Competencies / Takeaway */}
                    <div className="flex items-start gap-3 pt-2">
                      <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-1" />
                      <div>
                        <span className="font-mono text-[11px] uppercase font-bold tracking-widest text-brand-gray block mb-1">
                          CORE COMPETENCY DEVELOPED
                        </span>
                        <p className="text-base text-brand-navy font-semibold">
                          {game.keyLearning}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Specifications Dossier Card */}
                  <div className="lg:col-span-5 bg-brand-offwhite border border-gray-200 rounded-sm p-6 md:p-8 space-y-6">
                    <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gray pb-3 border-b border-gray-200 flex items-center justify-between">
                      <span>GAMEPLAY SPECIFICATIONS</span>
                      <span className="text-brand-orange">#{game.displayNumber}</span>
                    </h3>

                    <div className="space-y-4 divide-y divide-gray-200 text-sm">
                      
                      {/* Theme Row */}
                      <div className="pt-2">
                        <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-gray block mb-1">
                          PRIMARY THEME
                        </span>
                        <span className="font-semibold text-brand-navy">
                          {game.theme}
                        </span>
                      </div>

                      {/* Difficulty Gauge */}
                      <div className="pt-4">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-gray flex items-center gap-1.5">
                            <Gauge className="w-3.5 h-3.5 text-brand-orange" /> DIFFICULTY
                          </span>
                          <span className="font-mono text-xs font-bold text-brand-navy">
                            {game.difficulty}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${diffStyle.meter}`} />
                        </div>
                      </div>

                      {/* Age */}
                      <div className="pt-4 flex justify-between items-center">
                        <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-gray">
                          RECOMMENDED AGE
                        </span>
                        <span className="font-display text-lg font-bold text-brand-navy">
                          {game.age}
                        </span>
                      </div>

                      {/* Players */}
                      <div className="pt-4 flex justify-between items-center">
                        <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-gray">
                          PLAYER CAPACITY
                        </span>
                        <span className="font-display text-lg font-bold text-brand-green">
                          (min) {game.players.min} & (max) {game.players.max}
                        </span>
                      </div>

                      {/* Duration */}
                      <div className="pt-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-gray">
                            SESSION DURATION
                          </span>
                          <span className="font-mono text-xs font-bold text-brand-orange">
                            {game.duration.label}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div className="bg-white border border-gray-200 p-2.5 rounded-sm text-center">
                            <span className="font-display text-xl font-bold text-brand-navy block">{game.duration.playHours} hr</span>
                            <span className="font-mono text-[10px] text-gray-500 uppercase">Interactive Play</span>
                          </div>
                          <div className="bg-white border border-gray-200 p-2.5 rounded-sm text-center">
                            <span className="font-display text-xl font-bold text-brand-orange block">{game.duration.reflectionHours} hr</span>
                            <span className="font-mono text-[10px] text-gray-500 uppercase">Debrief & Reflection</span>
                          </div>
                        </div>
                      </div>

                      {/* Best For */}
                      <div className="pt-4">
                        <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-gray block mb-2">
                          IDEAL COHORTS
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {game.bestFor.map((item, bIdx) => (
                            <span key={bIdx} className="font-mono text-[10px] font-semibold bg-white border border-gray-200 text-brand-gray px-2 py-0.5 rounded-sm">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Action CTAs */}
                    <div className="pt-4 space-y-2">
                      <Link
                        href={`/games/${game.id}`}
                        className="w-full inline-flex items-center justify-center gap-2 bg-brand-navy text-white hover:bg-brand-orange px-6 py-3.5 rounded-sm font-mono text-xs font-bold uppercase tracking-widest transition-colors shadow-md group"
                      >
                        <span>EXPLORE {game.name.toUpperCase()} DOSSIER</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <a
                        href={`https://wa.me/916381531026?text=${encodeURIComponent(`Hi Bharat Play, I would like to inquire about hosting a game session of ${game.name}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 border border-gray-300 text-brand-navy hover:bg-brand-offwhite px-6 py-3 rounded-sm font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        BOOK SESSION ON WHATSAPP
                      </a>
                    </div>

                  </div>

                </div>

              </div>
            </article>
          );
        })}
      </section>

      {/* COMPARATIVE SPECIFICATIONS MATRIX TABLE */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-32">
        <div className="bg-white border border-gray-200 rounded-sm p-8 md:p-14 shadow-xl">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-orange" /> COMPARATIVE DOSSIER
            </span>
            <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-brand-navy uppercase mb-4">
              GAMES SPECIFICATIONS MATRIX.
            </h3>
            <p className="text-brand-gray text-base md:text-lg font-medium">
              Compare the 5 serious games side-by-side to choose the perfect match for your curriculum, age group, or training workshop.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-brand-navy font-mono text-[11px] font-bold uppercase tracking-wider text-brand-navy">
                  <th className="py-4 px-4">Game</th>
                  <th className="py-4 px-4">Core Theme</th>
                  <th className="py-4 px-4">Difficulty</th>
                  <th className="py-4 px-4">Age</th>
                  <th className="py-4 px-4">Players</th>
                  <th className="py-4 px-4">Duration</th>
                  <th className="py-4 px-4 text-right">Inquire</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 font-medium text-sm text-brand-navy">
                {GAMES.map((game) => (
                  <tr key={game.id} className="hover:bg-brand-offwhite transition-colors">
                    <td className="py-5 px-4 font-display font-bold text-base text-brand-navy whitespace-nowrap">
                      <Link href={`/games/${game.id}`} className="hover:text-brand-orange transition-colors">
                        <span className="text-brand-orange font-mono text-xs mr-2">{game.displayNumber}</span>
                        {game.name}
                      </Link>
                    </td>
                    <td className="py-5 px-4 text-xs text-brand-gray max-w-[280px]">
                      {game.theme}
                    </td>
                    <td className="py-5 px-4 whitespace-nowrap">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-sm bg-gray-100 text-brand-navy">
                        {game.difficulty}
                      </span>
                    </td>
                    <td className="py-5 px-4 font-mono font-bold text-sm whitespace-nowrap">
                      {game.age}
                    </td>
                    <td className="py-5 px-4 font-mono text-xs whitespace-nowrap">
                      (min) {game.players.min} & (max) {game.players.max}
                    </td>
                    <td className="py-5 px-4 font-mono text-xs whitespace-nowrap text-brand-orange font-bold">
                      {game.duration.label}
                    </td>
                    <td className="py-5 px-4 text-right whitespace-nowrap">
                      <Link
                        href={`/games/${game.id}`}
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-brand-orange hover:text-brand-navy transition-colors"
                      >
                        VIEW PAGE <ArrowRight className="w-3.5 h-3.5" />
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
        <div className="bg-brand-navy text-white rounded-sm p-8 md:p-14 lg:p-16 border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              FACILITATED ENGAGEMENTS & CUSTOM DEPLOYMENTS
            </span>
            <h3 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-tight mb-4">
              BRING BHARAT PLAY GAMES TO YOUR CAMPUS OR ORG.
            </h3>
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium">
              We provide certified simulation game masters, physical board game kits, participant reflection workbooks, and custom scenario adaptations for university departments, corporations, and civil society forums.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
            <a
              href="https://wa.me/916381531026?text=Hi%20Bharat%20Play%2C%20I%20would%20like%20to%20discuss%20hosting%20serious%20game%20sessions%20for%20our%20institution."
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
