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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-amber-200/60 shadow-xs text-brand-orange hover:text-brand-navy font-mono text-xs uppercase tracking-wider transition-colors font-bold"
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
          {GAMES.map((game, idx) => {
            const cardThemes = [
              { border: "border-[#C2410C]", shadow: "#C2410C" }, // Saffron
              { border: "border-[#0C2444]", shadow: "#0C2444" }, // Navy Blue
              { border: "border-[#12352B]", shadow: "#12352B" }, // Forest Green
            ];
            const currentTheme = cardThemes[idx % cardThemes.length];

            return (
              <article 
                key={game.id} 
                className={`bg-white border-2 ${currentTheme.border} rounded-[24px] p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden`}
                style={{ boxShadow: `8px 8px 0px ${currentTheme.shadow}` }}
              >
              <div>
                {/* Game Thumbnail Image */}
                {game.image && (
                  <div className="relative aspect-[16/10] w-full bg-brand-navy/5 rounded-2xl overflow-hidden mb-4 border border-gray-100">
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
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/50">
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
                  href={`https://wa.me/918237132553?text=${encodeURIComponent(`Hi Bharat Play, I would like to book a session of ${game.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-bold uppercase text-brand-orange hover:text-brand-navy transition-colors inline-flex items-center gap-1"
                >
                  <span>BOOK SESSION</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
            );
          })}
        </div>
      </section>

      {/* PEDIGREE OF OUR GAMES & INSTITUTIONAL DEPLOYMENTS */}
      <section className="max-w-[1200px] mx-auto w-full px-4 md:px-6 mb-16">
        <div 
          className="bg-white border-2 border-[#C2410C] rounded-[26px] p-6 sm:p-10 relative overflow-hidden"
          style={{ boxShadow: "10px 10px 0px #C2410C" }}
        >
          {/* Header */}
          <div className="max-w-3xl mb-8">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#C2410C] text-white font-mono text-xs font-bold uppercase tracking-wider mb-2.5">
              PROVEN PEDIGREE &amp; INSTITUTIONAL TRUST
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-brand-navy leading-none mb-3">
              PEDIGREE OF OUR <span className="text-brand-orange">GAMES.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Our serious tabletop simulations are not just casual board games — they are rigorous, research-backed pedagogical instruments deployed across defense academies, municipal corporations, premier engineering institutes, and global universities.
            </p>
          </div>

          {/* 4 Pedigree Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {/* 1. BiBo Simulation */}
            <div 
              className="p-6 rounded-2xl bg-[#FFFDF9] border-2 border-[#0C2444] flex flex-col justify-between"
              style={{ boxShadow: "4px 4px 0px #0C2444" }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-display text-lg font-bold uppercase text-brand-navy">
                    BiBo Simulation
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0C2444] border border-blue-200 font-mono text-[10px] font-bold uppercase">
                    Defense &amp; Systems
                  </span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-bold">✓</span>
                    <span>Employed in <strong>Training Indian Army Officers</strong> for complex systems and operational planning.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-bold">✓</span>
                    <span>Employed in <strong>Stakeholder Workshop at IIT Kharagpur</strong> for infrastructure and built-environment decision-making.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 mt-3 border-t border-amber-200/60 flex items-center justify-between text-xs font-mono font-bold text-slate-500">
                <span>SIMULATION #03</span>
                <Link href="/games/bibo" className="text-brand-orange hover:underline">
                  VIEW BIBO &rarr;
                </Link>
              </div>
            </div>

            {/* 2. City Runners Simulation */}
            <div 
              className="p-6 rounded-2xl bg-[#FFFDF9] border-2 border-[#12352B] flex flex-col justify-between"
              style={{ boxShadow: "4px 4px 0px #12352B" }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-display text-lg font-bold uppercase text-brand-navy">
                    City Runners Simulation
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono text-[10px] font-bold uppercase">
                    Public Governance
                  </span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span>Employed in change management workshop organized for <strong>Public Administrators of Greater Chennai Corporation at IIT Madras</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span>Employed for the <strong>Civic Participation team in Janaagraha</strong> Centre for Citizenship and Democracy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span>Employed for graduate students at <strong>IIHS (Indian Institute for Human Settlements) Bengaluru</strong>.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 mt-3 border-t border-amber-200/60 flex items-center justify-between text-xs font-mono font-bold text-slate-500">
                <span>SIMULATION #01</span>
                <Link href="/games/city-runners" className="text-emerald-800 hover:underline">
                  VIEW CITY RUNNERS &rarr;
                </Link>
              </div>
            </div>

            {/* 3. Prospera & BiBo Simulations */}
            <div 
              className="p-6 rounded-2xl bg-[#FFFDF9] border-2 border-[#C2410C] flex flex-col justify-between"
              style={{ boxShadow: "4px 4px 0px #C2410C" }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-display text-lg font-bold uppercase text-brand-navy">
                    Prospera &amp; BiBo Simulations
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-800 border border-orange-200 font-mono text-[10px] font-bold uppercase">
                    Cambridge University UK
                  </span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-bold">✓</span>
                    <span>Employed with a program aimed at fostering <strong>environmental thought leadership at Cambridge University in UK</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange font-bold">✓</span>
                    <span>Used to model planetary boundaries, urban resource metabolism, and cross-sectoral climate action.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 mt-3 border-t border-amber-200/60 flex items-center justify-between text-xs font-mono font-bold text-slate-500">
                <span>SIMULATION #02 &amp; #03</span>
                <Link href="/games/prospera" className="text-brand-orange hover:underline">
                  VIEW PROSPERA &rarr;
                </Link>
              </div>
            </div>

            {/* 4. Cascade Simulation */}
            <div 
              className="p-6 rounded-2xl bg-[#FFFDF9] border-2 border-[#0C2444] flex flex-col justify-between"
              style={{ boxShadow: "4px 4px 0px #0C2444" }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-display text-lg font-bold uppercase text-brand-navy">
                    Cascade Simulation
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0C2444] border border-blue-200 font-mono text-[10px] font-bold uppercase">
                    Global Peer Review
                  </span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0C2444] font-bold">✓</span>
                    <span>Play tested involving <strong>global experts and professionals from Japan, Denmark, US, Netherlands, Philippines, and India</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0C2444] font-bold">✓</span>
                    <span>Pioneering turn-based strategy for critical infrastructure protection, cyber-physical risks, and smart building resilience.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 mt-3 border-t border-amber-200/60 flex items-center justify-between text-xs font-mono font-bold text-slate-500">
                <span>SIMULATION #04</span>
                <Link href="/games/cascade" className="text-[#0C2444] hover:underline">
                  VIEW CASCADE &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* INTELLECTUAL PROPERTY & COPYRIGHT NOTICE */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="text-xl">🛡️</span>
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-800 block">
                  INTELLECTUAL PROPERTY &amp; COPYRIGHT OWNERSHIP (RoCs)
                </span>
                <p className="text-slate-600 mt-0.5">
                  Bharat Play Innovations Pvt. Ltd. holds exclusive intellectual property rights, system dynamics models, rulebooks, and simulation mechanics for all games in our portfolio, protected under statutory <strong>Copyright Registrations (RoCs — Register of Copyrights, Government of India)</strong>.
                </p>
              </div>
            </div>
            <span className="shrink-0 px-3 py-1 rounded-full bg-slate-200 text-slate-800 font-mono text-[10px] font-bold uppercase">
              REGISTERED IP
            </span>
          </div>

        </div>
      </section>

      {/* QUICK COMPARISON: PHYSICAL OFFSET CARD */}
      <section className="max-w-[1200px] mx-auto w-full px-4 md:px-6 mb-16">
        <div 
          className="bg-white border-2 border-[#0C2444] rounded-[24px] p-6 sm:p-8"
          style={{ boxShadow: "10px 10px 0px #0C2444" }}
        >
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
            href="https://wa.me/918237132553?text=Hi%20Bharat%20Play,%20we%20want%20to%20host%20a%20game%20session%20for%20our%20team."
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
