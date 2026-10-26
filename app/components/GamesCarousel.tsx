"use client";

import Link from "next/link";
import { ArrowRight, Users, Clock } from "lucide-react";
import { GAMES, GameItem } from "../data/games";

// 4 sets of the 5 games to guarantee seamless infinite rotation on all screens up to 4K
const ROTATING_GAMES = [...GAMES, ...GAMES, ...GAMES, ...GAMES];

export default function GamesCarousel() {
  return (
    <section 
      id="games" 
      className="py-16 sm:py-24 md:py-28 bg-[#f5f2eb] text-brand-navy border-b border-gray-200 relative overflow-hidden"
    >
      {/* Inline style to guarantee the animation runs immediately without any CSS cache/bundler issues */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes bpContinuousRotate {
              0% {
                transform: translate3d(0, 0, 0);
              }
              100% {
                transform: translate3d(-50%, 0, 0);
              }
            }

            .bp-rotate-track {
              display: flex !important;
              width: max-content !important;
              animation: bpContinuousRotate 34s linear infinite !important;
              will-change: transform;
            }

            .bp-rotate-track:hover {
              animation-play-state: paused !important;
            }
          `,
        }}
      />

      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8 mb-8 sm:mb-12">
        {/* ============================================================ */}
        {/* SECTION HEADER (CLEAN & NORMAL, NO TECHY INDEXES)            */}
        {/* ============================================================ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-10 border-b-2 border-brand-navy gap-6">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">
              TABLETOP SIMULATIONS
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-brand-navy leading-[0.9]">
              OUR <span className="text-brand-orange">GAMES.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-3 max-w-md">
            <p className="font-mono text-xs sm:text-sm text-brand-gray uppercase tracking-wider text-left sm:text-right">
              Playable models of complex systems: cities, buildings, cyber resilience, and critical infrastructure.
            </p>
            
            <Link
              href="/games"
              className="group inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-brand-navy hover:text-brand-orange transition-colors"
            >
              <span>VIEW ALL GAMES</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* CONTINUOUS ROTATING TRACK (ROTATES AGAIN AND AGAIN)          */}
      {/* ============================================================ */}
      <div className="w-full overflow-hidden py-4 -my-4">
        <div className="bp-rotate-track flex gap-6 px-4 md:px-8">
          {ROTATING_GAMES.map((game: GameItem, index: number) => {
            const cleanGameName = game.name.includes("—") ? game.name.split("—")[0].trim() : game.name;
            const primaryTheme = game.themes?.[0] || game.theme.split("·")[0].trim();

            return (
              <div
                key={`${game.id}-${index}`}
                className="w-[82vw] sm:w-[340px] md:w-[360px] lg:w-[380px] shrink-0"
              >
                <Link
                  href={`/games/${game.id}`}
                  className="group flex flex-col justify-between h-full min-h-[500px] sm:min-h-[520px] bg-white border-2 border-brand-navy/15 hover:border-brand-navy rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
                >
                  {/* Top: Game Photography Banner */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 border-b border-gray-200">
                    <img
                      src={game.image}
                      alt={game.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
                    
                    {/* Clean Format Pill */}
                    <span className="absolute bottom-3 left-3 font-mono text-[10px] font-bold uppercase tracking-wider text-white/95 bg-brand-navy/80 backdrop-blur-xs px-2.5 py-1 rounded-xs">
                      {game.format.split("/")[0].trim()}
                    </span>
                  </div>

                  {/* Middle: Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Theme / Category Tag */}
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-orange block mb-2 truncate">
                        {primaryTheme}
                      </span>

                      {/* Game Title */}
                      <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-brand-navy group-hover:text-brand-orange transition-colors leading-[1.05] mb-3">
                        {cleanGameName}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-brand-navy/75 font-normal leading-relaxed line-clamp-3 mb-4">
                        {game.shortDescription || game.tagline}
                      </p>
                    </div>

                    {/* Specs Tags */}
                    <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3 font-mono text-xs text-brand-gray">
                      <div className="flex items-center gap-1.5 text-brand-navy font-semibold">
                        <Users className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        <span>{game.players.label}</span>
                      </div>
                      <span className="text-gray-300">·</span>
                      <div className="flex items-center gap-1.5 text-brand-navy font-semibold">
                        <Clock className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        <span>{game.approxDuration.split(" ")[0]} hrs</span>
                      </div>
                      <span className="text-gray-300">·</span>
                      <span className="text-brand-navy font-semibold">Age {game.age}</span>
                    </div>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="px-6 sm:px-7 py-3.5 bg-[#faf8f5] group-hover:bg-brand-navy border-t border-brand-navy/15 flex items-center justify-between transition-colors duration-300">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-navy group-hover:text-white transition-colors">
                      EXPLORE SIMULATION
                    </span>
                    <div className="w-7 h-7 rounded-xs border border-brand-navy/20 group-hover:border-white/30 flex items-center justify-center text-brand-navy group-hover:text-white transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
