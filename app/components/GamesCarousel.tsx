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
      className="py-16 sm:py-24 md:py-28 bg-[#081B14] text-white border-b border-emerald-950/80 relative overflow-hidden"
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
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-10 border-b border-emerald-900/60 gap-6">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 font-mono text-xs font-bold uppercase tracking-wider mb-3">
              TABLETOP SIMULATIONS
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[0.9]">
              OUR <span className="text-brand-orange">GAMES.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-3 max-w-md">
            <p className="font-mono text-xs sm:text-sm text-emerald-100/70 uppercase tracking-wider text-left sm:text-right">
              Playable models of complex systems: cities, buildings, cyber resilience, and critical infrastructure.
            </p>
            
            <Link
              href="/games"
              className="group inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-white hover:text-brand-orange bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-2.5 rounded-full transition-all"
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
            const borderColors = [
              { border: "border-[#C2410C]", shadow: "#C2410C" }, // Saffron
              { border: "border-[#0C2444]", shadow: "#0C2444" }, // Navy Blue
              { border: "border-[#12352B]", shadow: "#12352B" }, // Forest Green
            ];
            const currentStyle = borderColors[index % borderColors.length];

            return (
              <div
                key={`${game.id}-${index}`}
                className="w-[82vw] sm:w-[340px] md:w-[360px] lg:w-[380px] shrink-0"
              >
                <Link
                  href={`/games/${game.id}`}
                  className={`group flex flex-col justify-between h-full min-h-[500px] sm:min-h-[520px] bg-white border-2 ${currentStyle.border} rounded-[24px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5`}
                  style={{ boxShadow: `8px 8px 0px ${currentStyle.shadow}` }}
                >
                  {/* Top: Game Photography Banner */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 border-b border-amber-100">
                    <img
                      src={game.image}
                      alt={game.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
                    
                    {/* Clean Format Pill */}
                    <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-xs px-3 py-1 rounded-full shadow-xs">
                      {game.format.split("/")[0].trim()}
                    </span>
                  </div>

                  {/* Middle: Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Theme / Category Tag - Solid Matte Saffron */}
                      <span className="inline-block px-3 py-0.5 rounded-full bg-[#C2410C] text-white text-xs font-bold tracking-wide mb-2.5 truncate max-w-full">
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
                  <div className="px-6 sm:px-7 py-4 bg-gradient-to-r from-orange-50/80 to-amber-50/80 group-hover:from-orange-500 group-hover:to-amber-500 border-t border-amber-100 flex items-center justify-between transition-all duration-300">
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-slate-800 group-hover:text-white transition-colors">
                      EXPLORE SIMULATION
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white group-hover:bg-white/20 border border-amber-200/60 group-hover:border-white/40 flex items-center justify-center text-orange-600 group-hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Institutional Trust Strip */}
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8 mt-10 sm:mt-12 pt-8 border-t border-emerald-900/60">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-emerald-300 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold uppercase tracking-wider">PROVEN INSTITUTIONAL PEDIGREE:</span>
          </div>
          <p className="text-emerald-100/80 leading-relaxed max-w-3xl">
            Simulations employed at <strong className="text-white">Cambridge University (UK)</strong>, <strong className="text-white">Indian Army Officers Training</strong>, <strong className="text-white">Greater Chennai Corporation at IIT Madras</strong>, <strong className="text-white">IIT Kharagpur</strong>, <strong className="text-white">Janaagraha</strong>, and <strong className="text-white">IIHS Bengaluru</strong>. Protected under statutory Copyright RoCs.
          </p>
          <Link
            href="/games"
            className="text-brand-orange hover:text-white font-bold uppercase tracking-wider shrink-0 underline"
          >
            Read Pedigree &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
