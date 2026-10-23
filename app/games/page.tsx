/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Layers, ExternalLink } from "lucide-react";
import { GAMES } from "../data/games";

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-brand-offwhite pt-28 pb-24 selection:bg-brand-orange selection:text-white">
      
      {/* BREADCRUMB */}
      <div className="max-w-[1200px] mx-auto w-full px-4 md:px-6 mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-brand-orange font-mono text-xs uppercase tracking-widest hover:text-brand-navy transition-colors font-bold"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO HOME
        </Link>
      </div>

      {/* HEADER: SHORT & CLEAR */}
      <section className="max-w-[1200px] mx-auto w-full px-4 md:px-6 mb-12">
        <div className="pb-6 border-b border-gray-200">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gray mb-2 flex items-center gap-2">
            <Layers className="w-4 h-4 text-brand-orange" /> BHARAT PLAY SIMULATIONS
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-brand-navy leading-none mb-3">
            OUR <span className="text-brand-orange">GAMES.</span>
          </h1>
          <p className="text-base sm:text-lg text-brand-gray font-medium max-w-2xl">
            Original tabletop simulations for complex systems, urban governance, cyber resilience, and leadership decision-making.
          </p>
        </div>
      </section>

      {/* GAMES LIST: SMALL CONTENT, READABLE FONT */}
      <section className="max-w-[1200px] mx-auto w-full px-4 md:px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GAMES.map((game) => (
            <article 
              key={game.id} 
              className="bg-white border border-gray-200 hover:border-brand-navy rounded-sm p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Game Thumbnail Image */}
                {game.image && (
                  <div className="relative aspect-[16/10] w-full bg-brand-navy/5 rounded-xs overflow-hidden mb-4 border border-gray-100">
                    <img 
                      src={game.image} 
                      alt={game.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Number & Difficulty */}
                <div className="flex items-center justify-between text-xs font-mono font-bold mb-3">
                  <span className="text-brand-orange">GAME #{game.displayNumber}</span>
                  <span className="px-2 py-0.5 rounded-xs bg-gray-100 text-brand-navy">
                    {game.difficulty}
                  </span>
                </div>

                {/* Name & Subtitle */}
                <h2 className="font-display text-2xl font-bold uppercase text-brand-navy group-hover:text-brand-orange transition-colors">
                  <Link href={`/games/${game.id}`}>
                    {game.name}
                  </Link>
                </h2>
                <p className="font-mono text-xs uppercase font-bold text-brand-green mt-1">
                  {game.subtitle}
                </p>

                {/* AUTHENTIC TAGLINE / SUMMARY */}
                <p className="text-sm sm:text-base text-brand-navy/85 font-medium leading-relaxed mt-3">
                  {game.tagline}
                </p>

                {/* SPECS IN NORMAL, READABLE TEXT */}
                <div className="pt-4 mt-4 border-t border-gray-100 flex flex-wrap items-center gap-3 text-xs font-mono text-brand-gray font-semibold">
                  <span>👥 {game.players.label} players</span>
                  <span>·</span>
                  <span>⏱️ {game.duration.label}</span>
                  <span>·</span>
                  <span>🎯 Age {game.age}</span>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href={`/games/${game.id}`}
                  className="font-mono text-xs font-bold uppercase text-brand-navy hover:text-brand-orange transition-colors inline-flex items-center gap-1.5"
                >
                  <span>VIEW DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={`https://wa.me/916381531026?text=${encodeURIComponent(`Hi Bharat Play, I would like to book a session of ${game.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-bold uppercase text-brand-orange hover:text-brand-navy transition-colors inline-flex items-center gap-1"
                >
                  <span>BOOK SESSION</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* QUICK COMPARISON: SHORT & SIMPLE */}
      <section className="max-w-[1200px] mx-auto w-full px-4 md:px-6 mb-16">
        <div className="bg-white border border-gray-200 rounded-sm p-6 sm:p-8 shadow-xs">
          <h2 className="font-display text-xl font-bold uppercase text-brand-navy mb-4">
            AT A GLANCE
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 font-mono text-xs uppercase font-bold text-gray-500">
                  <th className="py-2.5 px-3">Game</th>
                  <th className="py-2.5 px-3">What You Do</th>
                  <th className="py-2.5 px-3">Players</th>
                  <th className="py-2.5 px-3">Time</th>
                  <th className="py-2.5 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-brand-navy font-medium">
                {GAMES.map((game) => (
                  <tr key={game.id} className="hover:bg-brand-offwhite/80">
                    <td className="py-3 px-3 font-display font-bold whitespace-nowrap">
                      <Link href={`/games/${game.id}`} className="hover:text-brand-orange">
                        <span className="text-brand-orange font-mono text-xs mr-2">{game.displayNumber}</span>
                        {game.name}
                      </Link>
                    </td>
                    <td className="py-3 px-3 text-brand-gray text-xs sm:text-sm">
                      {game.id === "city-runners" && "City governance & budget trade-offs"}
                      {game.id === "prospera" && "Imagine a city & shape its future"}
                      {game.id === "bibo" && "Built environment lifecycle & net-zero buildings"}
                      {game.id === "cascade" && "Turn-based attacks & defences on smart buildings"}
                      {game.id === "riskscape" && "Organizational risk & digital crisis"}
                    </td>
                    <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">
                      {game.players.label}
                    </td>
                    <td className="py-3 px-3 font-mono text-xs text-brand-orange font-bold whitespace-nowrap">
                      {game.duration.label}
                    </td>
                    <td className="py-3 px-3 text-right whitespace-nowrap font-mono text-xs font-bold uppercase">
                      <Link href={`/games/${game.id}`} className="text-brand-navy hover:text-brand-orange">
                        VIEW →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* QUICK BANNER */}
      <section className="max-w-[1200px] mx-auto w-full px-4 md:px-6">
        <div className="bg-brand-navy text-white rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase">
              HOST A GAME SESSION FOR YOUR TEAM
            </h3>
            <p className="text-sm text-white/80 mt-1">
              We bring game components and certified facilitators directly to your campus or office.
            </p>
          </div>
          
          <a
            href="https://wa.me/916381531026?text=Hi%20Bharat%20Play,%20we%20want%20to%20host%20a%20game%20session%20for%20our%20team."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white hover:bg-white hover:text-brand-navy px-5 py-3 rounded-xs font-mono text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
          >
            <span>MESSAGE US ON WHATSAPP</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

    </main>
  );
}
