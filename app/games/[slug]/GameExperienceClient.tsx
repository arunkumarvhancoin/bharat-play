/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  ArrowRight, 
  ChevronDown, 
  Award,
  ExternalLink 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GameItem } from "../../data/games";

interface GameExperienceClientProps {
  game: GameItem;
  otherGames: GameItem[];
}

export default function GameExperienceClient({ game, otherGames }: GameExperienceClientProps) {
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  return (
    <article className="min-h-screen bg-brand-offwhite text-brand-navy pt-24 md:pt-32 pb-32 selection:bg-brand-orange selection:text-white">
      
      {/* ============================================================== */}
      {/* 01. EDITORIAL HERO — MAKE THE GAME THE HERO                   */}
      {/* ============================================================== */}
      <section className="px-4 md:px-8 max-w-[1440px] mx-auto pt-6 pb-16 md:pb-24 border-b border-gray-200">
        
        {/* Breadcrumb & Institutional Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-gray-200/60 font-mono text-xs uppercase tracking-widest text-brand-gray">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-brand-orange transition-colors">HOME</Link>
            <span className="text-gray-300">/</span>
            <Link href="/games" className="hover:text-brand-orange transition-colors">GAMES</Link>
            <span className="text-gray-300">/</span>
            <span className="text-brand-orange font-bold">{game.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-xs bg-brand-navy text-white text-[10px] font-bold">
              GAME {game.displayNumber}
            </span>
            <span className="text-brand-orange text-[10px] font-bold hidden sm:inline flex items-center gap-1">
              <Award className="w-3 h-3" /> {game.institutionalBadge}
            </span>
          </div>
        </div>

        {/* 12-Column Editorial Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Large Typography & Narrative Premise (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-brand-orange block mb-3"
              >
                {game.subtitle}
              </motion.span>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.85] mb-6 text-balance"
              >
                {game.name}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-3xl font-medium text-brand-gray leading-snug max-w-xl mb-8"
              >
                {game.shortDescription}
              </motion.p>
            </div>

            {/* Quick Action Group */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-gray-200"
            >
              <a
                href={`https://wa.me/916381531026?text=${encodeURIComponent(`Hi Bharat Play, I would like to request a session for ${game.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-navy text-white px-7 py-4 rounded-xs font-mono text-xs font-bold uppercase tracking-widest hover:bg-brand-orange transition-colors shadow-sm group"
              >
                REQUEST A {game.name.toUpperCase()} SESSION
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#gameplay"
                className="inline-flex items-center justify-center gap-2 text-brand-navy hover:text-brand-orange font-mono text-xs font-bold uppercase tracking-widest py-3 sm:py-4 transition-colors"
              >
                HOW IT PLAYS ↓
              </a>
            </motion.div>
          </div>

          {/* Right: Immersive Game Visual or Architectural Specification Card (lg:col-span-6) */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/3] w-full bg-brand-navy rounded-xs overflow-hidden border border-gray-300 shadow-xl group flex flex-col justify-between p-6 md:p-8"
            >
              {game.image ? (
                <>
                  <img 
                    src={game.image} 
                    alt={`${game.name} — Real Game Board & Tabletop Components`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                    <div>
                      <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-orange block mb-0.5">
                        AUTHENTIC GAMEPLAY PHOTOGRAPHY
                      </span>
                      <p className="font-display text-sm md:text-base font-bold uppercase tracking-tight">
                        {game.name} Tabletop Board & Simulation Artifacts
                      </p>
                    </div>
                    <span className="font-mono text-[10px] uppercase text-white/70 hidden sm:inline">
                      BHARAT PLAY LAB
                    </span>
                  </div>
                </>
              ) : (
                <div className="h-full flex flex-col justify-between relative z-10 text-white">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase font-bold px-3 py-1 bg-brand-orange text-white rounded-xs tracking-wider">
                      {game.institutionalBadge || "BHARAT PLAY SIMULATION"}
                    </span>
                    <span className="font-mono text-xs text-white/60 uppercase">
                      #{game.displayNumber}
                    </span>
                  </div>
                  <div className="my-auto py-6">
                    <span className="font-mono text-xs uppercase font-bold text-brand-orange tracking-widest block mb-2">
                      SIMULATION ARCHITECTURE
                    </span>
                    <h3 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight text-white mb-3">
                      {game.name}
                    </h3>
                    <p className="font-display text-sm md:text-base text-white/80 leading-relaxed max-w-md">
                      {game.tagline}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/70">
                    <span>{game.players.label} PLAYERS</span>
                    <span>{game.approxDuration}</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

        </div>

      </section>

      {/* ============================================================== */}
      {/* 02. COMPACT SWISS DATA INFORMATION BAR                         */}
      {/* ============================================================== */}
      <section className="px-4 md:px-8 max-w-[1440px] mx-auto border-b border-gray-200 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          
          <div className="py-4 md:py-6 px-4 first:pl-0">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-gray font-bold block mb-1">
              DIFFICULTY
            </span>
            <span className="font-display text-base md:text-lg font-bold text-brand-navy uppercase block">
              {game.difficulty}
            </span>
          </div>

          <div className="py-4 md:py-6 px-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-gray font-bold block mb-1">
              PLAYERS
            </span>
            <span className="font-display text-base md:text-lg font-bold text-brand-navy uppercase block">
              {game.players.min}–{game.players.max}
            </span>
          </div>

          <div className="py-4 md:py-6 px-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-gray font-bold block mb-1">
              DURATION
            </span>
            <span className="font-display text-base md:text-lg font-bold text-brand-navy uppercase block">
              {game.approxDuration}
            </span>
          </div>

          <div className="py-4 md:py-6 px-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-gray font-bold block mb-1">
              FORMAT
            </span>
            <span className="font-display text-base md:text-lg font-bold text-brand-navy uppercase block">
              {game.format.split("/")[0].trim()}
            </span>
          </div>

          <div className="py-4 md:py-6 px-4 last:pr-0 col-span-2 md:col-span-1 border-t md:border-t-0">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-gray font-bold block mb-1">
              AUDIENCE
            </span>
            <span className="font-display text-base md:text-lg font-bold text-brand-navy uppercase block">
              Civic / Institutional / Educational
            </span>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 03. WHY CITY RUNNERS? — THE REAL-WORLD PROBLEM                 */}
      {/* ============================================================== */}
      <section className="px-4 md:px-8 max-w-[1440px] mx-auto py-20 md:py-28 border-b border-gray-200">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          <div className="lg:col-span-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">
              WHY {game.name.toUpperCase()}?
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.9]">
              THE REAL-WORLD PROBLEM.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <p className="text-xl sm:text-2xl text-brand-navy font-medium leading-relaxed max-w-3xl">
              {game.name} immerses players into the high-stakes, interdependent world of Indian municipal governance. Players experience contrasting civic personas, institutional constraints, municipal decision-making and competing priorities.
            </p>

            {/* Tripartite Swiss Structure: The Challenge / Tension / Experience */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-navy block">
                  01 · THE CHALLENGE
                </span>
                <p className="font-display text-xl font-bold text-brand-navy uppercase">
                  {game.premise.challenge}
                </p>
                <p className="text-xs text-brand-gray font-medium leading-relaxed">
                  Every decision touches municipal finances, physical networks, transit corridors, and citizen well-being.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block">
                  02 · THE TENSION
                </span>
                <p className="font-display text-xl font-bold text-brand-navy uppercase">
                  {game.premise.tension}
                </p>
                <p className="text-xs text-brand-gray font-medium leading-relaxed">
                  Ward representatives, municipal engineers, and activist citizens possess conflicting mandates and scarce budgets.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-green block">
                  03 · THE EXPERIENCE
                </span>
                <p className="font-display text-xl font-bold text-brand-navy uppercase">
                  {game.premise.experience}
                </p>
                <p className="text-xs text-brand-gray font-medium leading-relaxed">
                  Real-time negotiation where players must deal with the tangible consequences of their collective choices.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ============================================================== */}
      {/* 04. GAME EXPERIENCE — HOW THE GAME PLAYS                       */}
      {/* ============================================================== */}
      <section id="gameplay" className="px-4 md:px-8 max-w-[1440px] mx-auto py-20 md:py-28 border-b border-gray-200 bg-white">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-gray-200">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">
              GAMEPLAY ARCHITECTURE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.9]">
              HOW THE GAME PLAYS.
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-brand-gray max-w-sm">
            FOUR AUTHENTIC INTERACTION MECHANICS DESIGNED BY DR. BALAJI KALLURI
          </p>
        </div>

        {/* 2x2 Swiss Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {game.mechanics.map((mech) => (
            <div 
              key={mech.number}
              className="p-5 sm:p-8 md:p-10 border border-gray-200 bg-brand-offwhite rounded-xs flex flex-col justify-between min-h-[220px] group hover:border-brand-navy transition-colors relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-brand-orange">
                    {mech.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-xs bg-white border border-gray-200 text-brand-navy">
                    {mech.tag}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                  {mech.title}
                </h3>

                <p className="text-base text-brand-navy/85 font-medium leading-relaxed">
                  {mech.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-200/80 flex items-center justify-between font-mono text-[11px] text-brand-gray">
                <span>SYSTEMIC MECHANIC #{mech.number}</span>
                <span className="text-brand-navy font-bold">TACTICAL TURNS</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ============================================================== */}
      {/* 05. SHOW THE ACTUAL GAME — THE GAME IN ACTION GALLERY          */}
      {/* ============================================================== */}
      {(game.gallery && game.gallery.length > 0) && (
        <section className="px-4 md:px-8 max-w-[1440px] mx-auto py-20 md:py-28 border-b border-gray-200">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-gray-200">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">
                AUTHENTIC TABLETOP ARTIFACTS & WORKSHOPS
              </span>
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.9]">
                THE GAME IN ACTION.
              </h2>
            </div>
            <p className="text-sm md:text-base text-brand-gray font-medium max-w-md">
              {game.id === "city-runners" 
                ? "Documented tabletop playtests, intergenerational community gatherings, and academic labs across India."
                : `Documented field engagements and workshop artifacts for ${game.name}.`}
            </p>
          </div>

          {game.id === "city-runners" ? (
            /* Swiss Asymmetric Editorial Photo Grid for City Runners */
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Main Large Shot: cr.webp (md:col-span-12 lg:col-span-6) */}
              <div className="md:col-span-12 lg:col-span-6 bg-white border border-gray-200 p-2 rounded-xs shadow-sm">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 group">
                  <img 
                    src="/cr.webp" 
                    alt="City Runners Board and Card Deck" 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-3 left-3 bg-brand-navy/90 text-white font-mono text-[10px] uppercase font-bold px-2 py-1">
                    BOARD & LEDGER ARCHITECTURE
                  </span>
                </div>
                <p className="font-mono text-[11px] text-brand-gray pt-2 px-1">
                  Interactive ward boards, budget decks, and public infrastructure tokens.
                </p>
              </div>

              {/* Participant Deliberation Shot: cr1.webp (md:col-span-6 lg:col-span-3) */}
              <div className="md:col-span-6 lg:col-span-3 bg-white border border-gray-200 p-2 rounded-xs shadow-sm flex flex-col justify-between">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 group">
                  <img 
                    src="/cr1.webp" 
                    alt="Tabletop Deliberation Session" 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  />
                  <span className="absolute bottom-3 left-3 bg-brand-navy/90 text-white font-mono text-[10px] uppercase font-bold px-2 py-1">
                    COALITION BARGAINING
                  </span>
                </div>
                <p className="font-mono text-[11px] text-brand-gray pt-2 px-1">
                  Teams negotiating cross-ward funding and municipal policy trade-offs.
                </p>
              </div>

              {/* Close-up Tokens: cr2.webp (md:col-span-6 lg:col-span-3) */}
              <div className="md:col-span-6 lg:col-span-3 bg-white border border-gray-200 p-2 rounded-xs shadow-sm flex flex-col justify-between">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 group">
                  <img 
                    src="/cr2.webp" 
                    alt="Close-up board pieces and tokens" 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  />
                  <span className="absolute bottom-3 left-3 bg-brand-navy/90 text-white font-mono text-[10px] uppercase font-bold px-2 py-1">
                    TACTICAL PIECES & TILES
                  </span>
                </div>
                <p className="font-mono text-[11px] text-brand-gray pt-2 px-1">
                  Physical tokens tracking municipal capex, drains, and civic happiness.
                </p>
              </div>

            </div>
          ) : (
            /* Dedicated Authentic Gallery for Other Games (e.g. BiBo) */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {game.gallery.map((item, gIdx) => (
                <div key={gIdx} className="bg-white border border-gray-200 p-3 rounded-xs shadow-sm">
                  <div className="relative aspect-video overflow-hidden bg-gray-100 group">
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                    />
                  </div>
                  <p className="font-mono text-xs text-brand-gray pt-3 px-1">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          )}

        </section>
      )}

      {/* ============================================================== */}
      {/* 06. SCENARIOS / DILEMMAS — THINGS GET COMPLICATED              */}
      {/* ============================================================== */}
      <section className="px-4 md:px-8 max-w-[1440px] mx-auto py-20 md:py-28 border-b border-gray-200 bg-white">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-gray-200">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">
              CRISIS EVENTS & SIMULATION DILEMMAS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.9]">
              THINGS GET COMPLICATED.
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-brand-gray max-w-sm">
            REAL-WORLD EMERGENCIES DRAWN FROM INDIAN MUNICIPALITIES
          </p>
        </div>

        {/* 3 Editorial Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {game.scenarios.map((scen) => (
            <div 
              key={scen.number}
              className="p-8 border border-gray-200 bg-brand-offwhite rounded-xs flex flex-col justify-between relative group hover:border-brand-orange transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest px-2.5 py-1 bg-brand-navy text-white rounded-xs">
                    SCENARIO {scen.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-brand-orange">
                    {scen.crisisLevel}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy mb-4 leading-snug group-hover:text-brand-orange transition-colors">
                  {scen.title}
                </h3>

                <p className="text-sm text-brand-navy/85 font-medium leading-relaxed">
                  {scen.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-200 font-mono text-[10px] uppercase font-bold text-brand-gray flex items-center justify-between">
                <span>IN-GAME DILEMMA</span>
                <span className="text-brand-orange">TACTICAL CRISIS →</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ============================================================== */}
      {/* 07. WHAT PLAYERS TAKE AWAY                                     */}
      {/* ============================================================== */}
      <section className="px-4 md:px-8 max-w-[1440px] mx-auto py-20 md:py-28 border-b border-gray-200">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-gray-200">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">
              PEDAGOGICAL OUTCOMES
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.9]">
              WHAT PLAYERS TAKE AWAY.
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-brand-gray">
            FOUR CORE CAPACITIES DEVELOPED THROUGH PURPOSEFUL PLAY
          </p>
        </div>

        {/* 4 Swiss Horizontal Treatment with Thin Rules */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {game.outcomes.map((out, idx) => (
            <div key={idx} className="border-t-2 border-brand-navy pt-6 space-y-3">
              <span className="font-mono text-xs font-bold text-brand-orange block">
                0{idx + 1}
              </span>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy">
                {out.title}
              </h3>
              <p className="text-sm text-brand-gray font-medium leading-relaxed">
                {out.description}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* ============================================================== */}
      {/* 08. WHO PLAYS CITY RUNNERS? (WHO IS IT FOR?)                  */}
      {/* ============================================================== */}
      <section className="px-4 md:px-8 max-w-[1440px] mx-auto py-20 md:py-28 border-b border-gray-200 bg-white">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-gray-200">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">
              TARGET AUDIENCES
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.9]">
              WHO PLAYS {game.name.toUpperCase()}?
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-brand-gray">
            CROSS-SECTORAL APPLICATIONS
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {game.audiences.map((aud, idx) => (
            <div key={idx} className="p-6 border border-gray-200 bg-brand-offwhite rounded-xs space-y-3">
              <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-mono text-xs font-bold">
                0{idx + 1}
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-brand-navy leading-tight">
                {aud.title}
              </h3>
              <p className="text-xs md:text-sm text-brand-gray font-medium leading-relaxed">
                {aud.description}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* ============================================================== */}
      {/* 09. FACILITATED EXPERIENCE — MORE THAN A BOARD GAME            */}
      {/* ============================================================== */}
      <section className="px-4 md:px-8 max-w-[1440px] mx-auto py-20 md:py-28 border-b border-gray-200">
        
        <div className="bg-brand-navy text-white p-8 md:p-14 lg:p-16 rounded-xs relative overflow-hidden">
          
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-3">
              ALL-INCLUSIVE LAB INTERVENTION
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
              MORE THAN A BOARD GAME.
            </h2>
            <p className="text-lg md:text-xl text-white/85 font-medium leading-relaxed">
              {game.name} can be delivered as a facilitated learning experience, with gameplay, reflection and debriefing designed around the needs of the participating group.
            </p>
          </div>

          {/* Process Flow: PLAY -> REFLECT -> DISCUSS -> CONNECT */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/15">
            
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-brand-orange block">STAGE 01</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight">PLAY</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Fast-paced tabletop decision-making with authentic institutional constraints.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-brand-green block">STAGE 02</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight">REFLECT</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Individual and team reflection on trade-offs made under crisis conditions.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-brand-orange block">STAGE 03</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight">DISCUSS</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Guided group dialogue connecting gameplay dynamics to real city policy.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-brand-green block">STAGE 04</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight">CONNECT</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Translate systems awareness into concrete civic and institutional action.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ============================================================== */}
      {/* 10. COMPACT EXPANDABLE GAME DOSSIER                            */}
      {/* ============================================================== */}
      <section className="px-4 md:px-8 max-w-[1440px] mx-auto py-12 border-b border-gray-200 bg-white">
        
        <div className="border border-gray-200 rounded-xs overflow-hidden">
          
          <button
            type="button"
            onClick={() => setIsDossierOpen(!isDossierOpen)}
            className="w-full p-6 bg-brand-offwhite flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
          >
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-1">
                TECHNICAL SPECIFICATIONS & ARCHIVES
              </span>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy">
                {game.name.toUpperCase()} DOSSIER
              </h3>
            </div>
            
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-brand-navy">
              <span>{isDossierOpen ? "COLLAPSE SPECIFICATIONS" : "VIEW FULL TECHNICAL SPECIFICATIONS"}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDossierOpen ? "rotate-180" : ""}`} />
            </div>
          </button>

          <AnimatePresence>
            {isDossierOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="p-8 border-t border-gray-200 bg-white space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                  <div>
                    <span className="font-mono text-[10px] uppercase font-bold text-brand-gray block mb-1">LEAD ARCHITECT</span>
                    <a 
                      href="https://www.linkedin.com/in/dr-balaji-kalluri-phd-a95a4931/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-semibold text-brand-navy hover:text-brand-orange transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{game.leadArchitect}</span>
                      <ExternalLink className="w-3 h-3 text-brand-gray group-hover:text-brand-orange transition-colors" />
                    </a>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase font-bold text-brand-gray block mb-1">FORMAT & DEPLOYMENT</span>
                    <span className="font-semibold text-brand-navy">{game.format}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase font-bold text-brand-gray block mb-1">RECOMMENDED AGE</span>
                    <span className="font-semibold text-brand-navy">{game.age}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase font-bold text-brand-gray block mb-1">FACILITATION LAB</span>
                    <span className="font-semibold text-brand-navy">Certified Game Master + Workbook Toolkits</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <span className="font-mono text-[10px] uppercase font-bold text-brand-gray block mb-1.5">RESEARCH ORIGIN & ACADEMIC LINEAGE</span>
                  <p className="text-xs text-brand-navy/85 leading-relaxed font-medium">
                    {game.academicOrigin}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </section>

      {/* ============================================================== */}
      {/* 11. EXPLORE THE BHARAT PLAY GAME LIBRARY                       */}
      {/* ============================================================== */}
      <section className="px-4 md:px-8 max-w-[1440px] mx-auto py-20 md:py-28 border-b border-gray-200">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-gray-200">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">
              CATALOGUE OF PURPOSEFUL PLAY
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.9]">
              EXPLORE THE GAME LIBRARY.
            </h2>
          </div>
          <p className="text-base text-brand-gray font-medium max-w-md">
            {game.name} is one of many purposeful games developed and used by Bharat Play.
          </p>
        </div>

        {/* 4 Cards for Other Games */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherGames.map((og) => (
            <Link
              key={og.id}
              href={`/games/${og.id}`}
              className="group bg-white border border-gray-200 p-6 rounded-xs hover:border-brand-orange transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-brand-orange">
                    #{og.displayNumber}
                  </span>
                  <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-xs bg-gray-100 text-brand-navy">
                    {og.difficulty}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy group-hover:text-brand-orange transition-colors mb-2">
                  {og.name}
                </h3>

                <p className="text-xs text-brand-gray font-medium line-clamp-3 mb-6 leading-relaxed">
                  {og.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between font-mono text-xs">
                <span className="text-gray-500">{og.players.label} PLAYERS</span>
                <span className="text-brand-orange font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  EXPLORE →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </section>

      {/* ============================================================== */}
      {/* 12. CALL TO ACTION — WANT TO PLAY?                             */}
      {/* ============================================================== */}
      <section className="px-4 md:px-8 max-w-[1440px] mx-auto py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          
          <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-brand-orange block">
            EXPERIENTIAL SESSIONS & TABLETOP LABS
          </span>

          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.88]">
            WANT TO PLAY?
          </h2>

          <div className="py-2">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-gray block mb-3">
              BRING {game.name.toUpperCase()} TO YOUR:
            </span>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 font-mono text-sm md:text-base font-bold text-brand-navy">
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-xs">CLASSROOM</span>
              <span className="text-brand-orange">·</span>
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-xs">TEAM</span>
              <span className="text-brand-orange">·</span>
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-xs">INSTITUTION</span>
              <span className="text-brand-orange">·</span>
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-xs">COMMUNITY</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={`https://wa.me/916381531026?text=${encodeURIComponent(`Hi Bharat Play, I would like to request a session for ${game.name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-white hover:bg-[#20ba59] px-8 py-5 rounded-xs font-mono text-xs font-bold uppercase tracking-widest transition-all shadow-md group"
            >
              <span>REQUEST A {game.name.toUpperCase()} SESSION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              href="/games"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white border border-gray-300 text-brand-navy hover:border-brand-navy px-8 py-5 rounded-xs font-mono text-xs font-bold uppercase tracking-widest transition-colors"
            >
              EXPLORE ALL GAMES →
            </Link>
          </div>

        </div>
      </section>

    </article>
  );
}
