/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { GameItem } from "../../data/games";

interface GameExperienceClientProps {
  game: GameItem;
  otherGames: GameItem[];
}

export default function GameExperienceClient({ game, otherGames }: GameExperienceClientProps) {
  return (
    <article className="min-h-screen bg-brand-offwhite text-brand-navy pt-28 pb-24 selection:bg-brand-orange selection:text-white">
      
      {/* BREADCRUMB */}
      <div className="max-w-[1100px] mx-auto w-full px-4 md:px-6 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-2 sm:gap-4 font-mono text-xs uppercase tracking-widest text-brand-gray pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-brand-orange transition-colors">HOME</Link>
            <span className="text-gray-300">/</span>
            <Link href="/games" className="hover:text-brand-orange transition-colors">GAMES</Link>
            <span className="text-gray-300">/</span>
            <span className="text-brand-orange font-bold">{game.name}</span>
          </div>

          <span className="px-2.5 py-1 rounded-xs bg-brand-navy text-white font-bold">
            GAME #{game.displayNumber}
          </span>
        </div>
      </div>

      {/* HERO: SMALL CONTENT, NORMAL FONT SIZE */}
      <section className="max-w-[1100px] mx-auto w-full px-4 md:px-6 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block">
              {game.subtitle}
            </span>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-brand-navy leading-none">
              {game.name}
            </h1>

            {/* TAGLINE */}
            {game.tagline && (
              <p className="text-lg sm:text-xl text-brand-navy font-bold leading-relaxed">
                {game.tagline}
              </p>
            )}

            {/* THEMES */}
            {game.themes && game.themes.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {game.themes.map((theme, i) => (
                  <span
                    key={i}
                    className="font-mono text-[11px] font-semibold uppercase tracking-wider bg-brand-navy/5 text-brand-navy px-2.5 py-1 rounded-xs border border-gray-200"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            )}

            {/* READABLE SPECS */}
            <div className="flex flex-wrap items-center gap-4 py-3 border-y border-gray-200 text-sm font-mono font-bold text-brand-navy">
              <span>👥 {game.players.label} Players</span>
              <span>·</span>
              <span className="text-brand-orange">⏱️ {game.duration.label}</span>
              <span>·</span>
              <span className="text-brand-green">🎯 Age {game.age}</span>
              <span>·</span>
              <span>⚡ {game.difficulty === "Low to Medium" ? "Low–Medium" : game.difficulty}</span>
              {game.format && (
                <>
                  <span>·</span>
                  <span className="text-brand-gray">🎲 {game.format}</span>
                </>
              )}
            </div>

            {/* ACTIONS */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/918237132553?text=${encodeURIComponent(`Hi Bharat Play, I would like to book a session for ${game.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-navy text-white hover:bg-brand-orange px-6 py-3 rounded-xs font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>BOOK A SESSION</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#what-you-do"
                className="font-mono text-xs font-bold uppercase text-brand-navy hover:text-brand-orange transition-colors"
              >
                DETAILS & LEARNING ↓
              </a>
            </div>
          </div>

          {/* VISUAL */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full bg-brand-navy rounded-xs overflow-hidden border border-gray-200 shadow-md">
              {game.image ? (
                <img 
                  src={game.image} 
                  alt={game.name} 
                  className="w-full h-full object-cover" 
                />
              ) : (
                <div className="w-full h-full p-6 flex flex-col justify-between text-white">
                  <span className="font-mono text-xs text-brand-orange font-bold uppercase">TABLETOP SIMULATION</span>
                  <p className="font-display text-2xl font-bold uppercase">{game.name}</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* MARKET CONTEXT / CHALLENGE CALLOUT IF AVAILABLE */}
      {game.marketContext && (
        <section className="max-w-[1100px] mx-auto w-full px-4 md:px-6 mb-12">
          <div className="bg-amber-50/80 border-l-4 border-brand-orange p-6 sm:p-7 rounded-r-xs shadow-xs">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">
              INDUSTRY CONTEXT & AEC RISK
            </span>
            <p className="text-sm sm:text-base text-brand-navy font-medium leading-relaxed">
              {game.marketContext}
            </p>
          </div>
        </section>
      )}

      {/* FULL AUTHENTIC DESCRIPTION */}
      <section className="max-w-[1100px] mx-auto w-full px-4 md:px-6 mb-12">
        <div className="bg-white border border-gray-200 rounded-sm p-6 sm:p-8 shadow-xs">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-green block mb-2">
            OVERVIEW
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-brand-navy mb-4">
            ABOUT {game.name}
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-brand-navy/90 font-medium leading-relaxed">
            {game.description.split("\n\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU DO & WHAT YOU LEARN: DYNAMIC AUTHENTIC DATA */}
      <section id="what-you-do" className="max-w-[1100px] mx-auto w-full px-4 md:px-6 mb-12 scroll-mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* What You Do / Gameplay Mechanics */}
          <div className="bg-white border border-gray-200 rounded-sm p-6 sm:p-7 shadow-xs">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">
              GAMEPLAY
            </span>
            <h2 className="font-display text-2xl font-bold uppercase text-brand-navy mb-4">
              WHAT YOU DO
            </h2>

            <ul className="space-y-4 text-sm sm:text-base text-brand-navy/85 font-medium">
              {game.mechanics && game.mechanics.length > 0 ? (
                game.mechanics.map((mech, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-brand-navy block uppercase text-xs font-mono tracking-wider">{mech.title}</strong>
                      <span>{mech.description}</span>
                    </div>
                  </li>
                ))
              ) : (
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>{game.shortDescription}</span>
                </li>
              )}
            </ul>
          </div>

          {/* What You Learn / Learning Objectives */}
          <div className="bg-white border border-gray-200 rounded-sm p-6 sm:p-7 shadow-xs">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-green block mb-2">
              LEARNING OBJECTIVES
            </span>
            <h2 className="font-display text-2xl font-bold uppercase text-brand-navy mb-4">
              WHY PLAY & WHAT YOU LEARN
            </h2>

            <ul className="space-y-4 text-sm sm:text-base text-brand-navy/85 font-medium">
              {game.learningObjectives && game.learningObjectives.length > 0 ? (
                game.learningObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))
              ) : game.outcomes && game.outcomes.length > 0 ? (
                game.outcomes.map((out, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-brand-navy block uppercase text-xs font-mono tracking-wider">{out.title}</strong>
                      <span>{out.description}</span>
                    </div>
                  </li>
                ))
              ) : (
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>{game.keyLearning}</span>
                </li>
              )}
            </ul>
          </div>

        </div>
      </section>

      {/* TARGET AUDIENCE & VALIDATION (IF AVAILABLE) */}
      {(game.targetAudience || game.validation) && (
        <section className="max-w-[1100px] mx-auto w-full px-4 md:px-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-sm p-6 sm:p-7 shadow-xs space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block">
              TARGET AUDIENCE & VALIDATION
            </span>

            {game.targetAudience && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 bg-brand-offwhite rounded-xs border border-gray-200">
                  <span className="font-mono text-xs font-bold text-brand-navy uppercase block mb-1">
                    PRIMARY AUDIENCE
                  </span>
                  <p className="text-xs sm:text-sm text-brand-navy/85 font-medium leading-relaxed">
                    {game.targetAudience.primary}
                  </p>
                </div>

                <div className="p-4 bg-brand-offwhite rounded-xs border border-gray-200">
                  <span className="font-mono text-xs font-bold text-brand-navy uppercase block mb-1">
                    SECONDARY AUDIENCE
                  </span>
                  <p className="text-xs sm:text-sm text-brand-navy/85 font-medium leading-relaxed">
                    {game.targetAudience.secondary}
                  </p>
                </div>
              </div>
            )}

            {game.validation && (
              <p className="font-mono text-xs text-brand-gray font-semibold italic pt-2 border-t border-gray-100">
                {game.validation}
              </p>
            )}
          </div>
        </section>
      )}

      {/* SESSION FLOW (SHORT & CLEAN) */}
      <section className="max-w-[1100px] mx-auto w-full px-4 md:px-6 mb-12">
        <div className="bg-brand-navy text-white rounded-sm p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <span className="font-mono text-xs font-bold uppercase text-brand-orange block">FACILITATED WORKSHOP</span>
              <h3 className="font-display text-2xl font-bold uppercase">HOW A SESSION RUNS</h3>
            </div>
            <span className="font-mono text-xs text-white/70">Pan-India On-Site Facilitation</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white/5 rounded-xs border border-white/10">
              <span className="font-mono text-xs text-brand-orange font-bold block">STEP 1 · 15 MIN</span>
              <h4 className="font-display text-lg font-bold uppercase mt-1">ORIENTATION</h4>
              <p className="text-xs sm:text-sm text-white/80 mt-1">Rules walk-through and team role assignments.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xs border border-white/10">
              <span className="font-mono text-xs text-brand-green font-bold block">STEP 2 · 1–2 HRS</span>
              <h4 className="font-display text-lg font-bold uppercase mt-1">ACTIVE GAMEPLAY</h4>
              <p className="text-xs sm:text-sm text-white/80 mt-1">High-stakes simulation turns, crises, and negotiations.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xs border border-white/10">
              <span className="font-mono text-xs text-brand-orange font-bold block">STEP 3 · 45 MIN</span>
              <h4 className="font-display text-lg font-bold uppercase mt-1">GUIDED DEBRIEF</h4>
              <p className="text-xs sm:text-sm text-white/80 mt-1">Connecting game dynamics to real-world policy and work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER GAMES SELECTOR */}
      <section className="max-w-[1100px] mx-auto w-full px-4 md:px-6 pt-12 pb-8 border-t border-gray-200 mt-16">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b border-gray-200">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-orange block mb-1">
              DISCOVER MORE SIMULATIONS
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-brand-navy">
              EXPLORE OTHER GAMES
            </h3>
          </div>
          <Link 
            href="/games" 
            className="font-mono text-xs text-brand-navy hover:text-brand-orange font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors group"
          >
            <span>VIEW ALL 5 GAMES</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {otherGames.map((og) => (
            <Link
              key={og.id}
              href={`/games/${og.id}`}
              className="bg-white border border-gray-200 hover:border-brand-navy p-5 rounded-xs transition-all shadow-xs hover:shadow-md group flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail */}
                {og.image && (
                  <div className="relative aspect-[16/10] w-full bg-brand-navy/5 rounded-xs overflow-hidden mb-3.5 border border-gray-100">
                    <img
                      src={og.image}
                      alt={og.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Number & Difficulty */}
                <div className="flex items-center justify-between text-xs font-mono font-bold mb-1.5">
                  <span className="text-brand-orange">GAME #{og.displayNumber}</span>
                  <span className="px-1.5 py-0.5 rounded-xs bg-gray-100 text-brand-navy text-[10px]">
                    {og.difficulty}
                  </span>
                </div>

                {/* Name */}
                <h4 className="font-display text-lg font-bold uppercase text-brand-navy group-hover:text-brand-orange transition-colors leading-tight">
                  {og.name}
                </h4>

                {/* Short Description */}
                <p className="text-xs text-brand-gray font-medium line-clamp-2 mt-2 leading-relaxed">
                  {og.shortDescription}
                </p>
              </div>

              {/* Specs & Link */}
              <div className="pt-3 mt-4 border-t border-gray-100 flex items-center justify-between font-mono text-[11px] text-brand-navy font-semibold">
                <span className="text-brand-gray">⏱️ {og.approxDuration || "1–2 Hours"}</span>
                <span className="text-brand-orange inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                  <span>VIEW</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </article>
  );
}
