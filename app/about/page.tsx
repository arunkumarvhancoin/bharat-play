/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  Target,
  Compass,
  Users,
  Globe2,
  Brain,
  HeartHandshake,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import KudosToBharatPlayJourney from "../components/KudosToBharatPlayJourney";

const CORE_VALUES = [
  {
    number: "01",
    title: "Learn by Doing, Not Lecturing",
    tag: "PURPOSEFUL PLAY",
    borderColor: "#C2410C",
    bgTint: "bg-[#FFF8F3]",
    badgeBg: "bg-[#C2410C] text-white",
    icon: Sparkles,
    highlight: "Play is humanity's most powerful simulator.",
    description: "When you play, ideas stop being abstract theories. You make real decisions, feel the pressure of constraints, and see the immediate consequences of your choices.",
    bullets: [
      "Immediate experiential feedback",
      "Safe space to fail, adapt, and retry",
    ],
  },
  {
    number: "02",
    title: "See the Entire System",
    tag: "SYSTEMS THINKING",
    borderColor: "#0C2444",
    bgTint: "bg-[#F5F8FC]",
    badgeBg: "bg-[#0C2444] text-white",
    icon: Brain,
    highlight: "No real-world problem exists in isolation.",
    description: "Urban floods, power grids, housing, transit, and city budgets are all interconnected. We train minds to look past quick band-aids and solve the whole system.",
    bullets: [
      "Understand domino effects & feedback loops",
      "Tackle root causes instead of surface symptoms",
    ],
  },
  {
    number: "03",
    title: "Step into Someone Else's Shoes",
    tag: "RADICAL EMPATHY",
    borderColor: "#15803D",
    bgTint: "bg-[#F3FAF5]",
    badgeBg: "bg-[#15803D] text-white",
    icon: HeartHandshake,
    highlight: "Real solutions start when you understand the other side.",
    description: "In our games, citizens play municipal commissioners, planners play residents, and engineers play community organizers. Swapping constraints replaces conflict with collaboration.",
    bullets: [
      "First-person perspective shifts",
      "Consensus built through shared understanding",
    ],
  },
  {
    number: "04",
    title: "Everyone Shapes the Future",
    tag: "ACTIVE CITIZENSHIP",
    borderColor: "#C2410C",
    bgTint: "bg-[#FFF9F5]",
    badgeBg: "bg-[#C2410C] text-white",
    icon: Users,
    highlight: "Shaping our cities is not just for distant experts.",
    description: "We demystify how public budgets and civic policies work, giving students, youth, and citizens the confidence and practical tools to participate actively in civic life.",
    bullets: [
      "Practical civic and policy literacy",
      "Empowering youth to lead local change",
    ],
  },
  {
    number: "05",
    title: "Planet is Our Home. Save It.",
    tag: "PLANETARY CARE",
    borderColor: "#15803D",
    bgTint: "bg-[#F3FAF5]",
    badgeBg: "bg-[#15803D] text-white",
    icon: Globe2,
    highlight: "Every choice must respect ecological limits.",
    description: "Prosperity cannot come at the expense of our living planet. Every game embeds carbon limits, water conservation, and long-term care for future generations.",
    bullets: [
      "Planetary boundaries embedded in gameplay",
      "Long-term stewardship over quick extraction",
    ],
  },
];

const COMPARISONS = [
  {
    title: "How People Learn",
    traditional: "Sitting through slide presentations and memorizing text.",
    bharatPlay: "Hands-on gameplay, physical tokens, real-time choices.",
  },
  {
    title: "How Problems Are Viewed",
    traditional: "Isolated in academic silos (economy vs. environment).",
    bharatPlay: "Interconnected systems where every choice triggers ripples.",
  },
  {
    title: "How People Interact",
    traditional: "Debating abstract theories from fixed personal viewpoints.",
    bharatPlay: "Stepping directly into the opponent's shoes to find solutions.",
  },
  {
    title: "What Lasts Afterwards",
    traditional: "Taking an exam and forgetting the material weeks later.",
    bharatPlay: "Memories, systems intuition, and confidence that stay for life.",
  },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-brand-navy pt-28 md:pt-36 pb-32 selection:bg-brand-orange selection:text-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* ============================================================== */}
        {/* TOP BAR & BREADCRUMB                                           */}
        {/* ============================================================== */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-amber-200/60 font-mono text-sm uppercase tracking-wider text-slate-500 mb-12">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-brand-orange transition-colors font-medium">
              HOME
            </Link>
            <span className="text-amber-300 font-bold">/</span>
            <span className="text-brand-orange font-bold">ABOUT US</span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-amber-200/80 text-xs sm:text-sm font-bold transition-all shadow-xs group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>BACK TO HOME</span>
            </Link>
          </div>
        </div>

        {/* ============================================================== */}
        {/* HERO SECTION — BOLD 2-COLUMN EDITORIAL LAYOUT                   */}
        {/* ============================================================== */}
        <section className="mb-20 md:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Intro */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C2410C] text-white font-mono text-xs font-bold uppercase tracking-wider mb-5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ABOUT BHARAT PLAY</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-brand-navy leading-[0.98] mb-6">
                WHO WE ARE &amp; <br />
                WHAT WE <span className="text-brand-orange">BELIEVE.</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-medium leading-relaxed mb-6 max-w-2xl">
                We believe that complex problems shouldn&apos;t be intimidating. We use serious tabletop games to make learning intuitive, collaborative, and fun.
              </p>

              {/* Quick Jump Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <a
                  href="#mission-vision"
                  className="px-4 py-2 rounded-full bg-white hover:bg-amber-50 text-brand-navy border border-amber-200 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                >
                  &darr; MISSION &amp; VISION
                </a>
                <a
                  href="#core-values"
                  className="px-4 py-2 rounded-full bg-white hover:bg-amber-50 text-brand-navy border border-amber-200 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                >
                  &darr; 5 CORE VALUES
                </a>
                <a
                  href="#how-it-works"
                  className="px-4 py-2 rounded-full bg-white hover:bg-amber-50 text-brand-navy border border-amber-200 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                >
                  &darr; WHY PLAY WORKS
                </a>
              </div>
            </div>

            {/* Right Column: High-Impact Credo Card */}
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white border-3 border-[#C2410C] rounded-3xl p-7 sm:p-9 relative overflow-hidden"
                style={{ boxShadow: "10px 10px 0px #C2410C" }}
              >
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-orange-100 text-[#C2410C]">
                    THE BHARAT PLAY CREDO
                  </span>
                  <div className="w-3 h-3 rounded-full bg-[#C2410C] animate-ping" />
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="font-mono text-xs text-slate-400 font-bold uppercase block">RULE 01</span>
                    <p className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight leading-tight">
                      Life is a Game. <br />
                      <span className="text-brand-orange underline decoration-wavy decoration-brand-orange/40">Play it !</span>
                    </p>
                  </div>

                  <div className="h-px bg-slate-200 w-full" />

                  <div>
                    <span className="font-mono text-xs text-slate-400 font-bold uppercase block">RULE 02</span>
                    <p className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight leading-tight">
                      Planet is our Home. <br />
                      <span className="text-emerald-700 underline decoration-wavy decoration-emerald-700/40">Save it !</span>
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold uppercase text-slate-500">
                  <span>FOUNDED IN PURPOSE</span>
                  <span className="text-[#C2410C]">&bull; PLAY &amp; IMPACT</span>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* MISSION & VISION: HIGH IMPACT SIDE-BY-SIDE                     */}
        {/* ============================================================== */}
        <section id="mission-vision" className="mb-20 md:mb-28 scroll-mt-28">
          <div className="text-center max-w-xl mx-auto mb-10 md:mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">
              OUR COMPASS &amp; DESTINATION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-brand-navy">
              MISSION &amp; VISION.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* VISION CARD */}
            <div 
              className="bg-white border-3 border-[#0C2444] rounded-3xl p-7 sm:p-10 flex flex-col justify-between transition-transform hover:-translate-y-1"
              style={{ boxShadow: "8px 8px 0px #0C2444" }}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0C2444]">
                    <Target className="w-6 h-6 text-[#0C2444]" />
                  </div>
                  <span className="px-3 py-1 rounded-full font-mono text-xs font-bold uppercase bg-slate-100 text-slate-800 border border-slate-200">
                    WHERE WE ARE HEADED
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase text-brand-navy mb-4">
                  OUR VISION
                </h3>

                <p className="text-xl font-bold text-brand-navy leading-snug mb-4">
                  A world where people solve complex challenges together through shared play.
                </p>

                <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-6">
                  We imagine a future where communities, students, and civic leaders test their ideas, understand trade-offs, and master solutions on a game table before making irreversible choices in reality.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t-2 border-slate-100 font-semibold text-base text-slate-800">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Play as the ultimate sandbox for learning</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Citizens who practice foresight together</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Healthy, resilient cities and ecosystems</span>
                </div>
              </div>
            </div>

            {/* MISSION CARD */}
            <div 
              className="bg-white border-3 border-[#C2410C] rounded-3xl p-7 sm:p-10 flex flex-col justify-between transition-transform hover:-translate-y-1"
              style={{ boxShadow: "8px 8px 0px #C2410C" }}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#C2410C]">
                    <Compass className="w-6 h-6 text-[#C2410C]" />
                  </div>
                  <span className="px-3 py-1 rounded-full font-mono text-xs font-bold uppercase bg-orange-100 text-[#C2410C] border border-orange-200">
                    WHAT WE DO DAILY
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase text-brand-navy mb-4">
                  OUR MISSION
                </h3>

                <p className="text-xl font-bold text-brand-navy leading-snug mb-4">
                  Turn intimidating real-world problems into hands-on games that anyone can play.
                </p>

                <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-6">
                  We translate complicated topics like urban planning, climate action, and public budgets into physical tabletop games that bring people together to learn by doing.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t-2 border-slate-100 font-semibold text-base text-slate-800">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C2410C] shrink-0" />
                  <span>Make complex systems simple and engaging</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C2410C] shrink-0" />
                  <span>Bring people with opposing views to one table</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C2410C] shrink-0" />
                  <span>Transform classroom theory into practical action</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* 5 CORE VALUES — HORIZONTAL CARDS                               */}
        {/* ============================================================== */}
        <section id="core-values" className="mb-20 md:mb-28 scroll-mt-28">
          <div className="max-w-2xl mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#15803D] text-white font-mono text-xs font-bold uppercase tracking-wider mb-3">
              THE 5 PILLARS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-brand-navy">
              THE VALUES WE LIVE BY.
            </h2>
            <p className="text-lg text-slate-600 font-medium mt-3">
              Clear principles that guide every game we design and every session we host.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {CORE_VALUES.map((val) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={val.number}
                  className={`border-3 rounded-3xl p-6 sm:p-8 transition-all duration-200 hover:-translate-y-1 bg-white ${val.bgTint}`}
                  style={{
                    borderColor: val.borderColor,
                    boxShadow: `7px 7px 0px ${val.borderColor}`,
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    
                    {/* Left Section: Tag, Number, Title & Icon */}
                    <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-5 lg:pb-0 lg:pr-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider ${val.badgeBg}`}>
                            {val.tag}
                          </span>
                          <span className="font-mono text-base font-bold text-slate-400">
                            {val.number}
                          </span>
                        </div>

                        <div className="flex items-start gap-3">
                          <div
                            className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 mt-0.5"
                            style={{ backgroundColor: `${val.borderColor}15`, color: val.borderColor }}
                          >
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-brand-navy leading-tight">
                            {val.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Middle Section: Highlight & Description */}
                    <div className="lg:col-span-5 flex flex-col justify-center lg:px-4">
                      <p className="text-lg sm:text-xl font-bold text-slate-800 leading-snug mb-2">
                        &ldquo;{val.highlight}&rdquo;
                      </p>
                      <p className="text-base text-slate-600 font-medium leading-relaxed">
                        {val.description}
                      </p>
                    </div>

                    {/* Right Section: What This Looks Like (Takeaway Panel) */}
                    <div className="lg:col-span-3 bg-white/90 rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-2.5">
                        WHAT THIS LOOKS LIKE
                      </span>
                      <div className="space-y-2.5">
                        {val.bullets.map((b, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================== */}
        {/* WHY PLAY WORKS: COMPARISON SECTION                              */}
        {/* ============================================================== */}
        <section id="how-it-works" className="mb-20 md:mb-28 scroll-mt-28">
          <div className="bg-white border-3 border-[#0C2444] rounded-3xl p-6 sm:p-10 md:p-12 shadow-[8px_8px_0px_#0C2444]">
            <div className="max-w-2xl mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">
                AT A GLANCE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-brand-navy">
                THE OLD WAY VS. THE BHARAT PLAY WAY
              </h2>
            </div>

            <div className="divide-y-2 divide-slate-100">
              {COMPARISONS.map((item, idx) => (
                <div key={idx} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-3 font-display font-bold uppercase text-base sm:text-lg text-brand-navy">
                    {item.title}
                  </div>
                  
                  <div className="md:col-span-4 flex items-start gap-3 bg-red-50/50 p-3.5 rounded-2xl border border-red-100 text-slate-600 font-medium text-sm sm:text-base">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>{item.traditional}</span>
                  </div>

                  <div className="md:col-span-5 flex items-start gap-3 bg-emerald-50/50 p-3.5 rounded-2xl border border-emerald-200 text-brand-navy font-semibold text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item.bharatPlay}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* THE JOURNEY: FROM KUDOS TO BHARAT PLAY (CANVA DECK SLIDES)     */}
        {/* ============================================================== */}
        <KudosToBharatPlayJourney />

        {/* ============================================================== */}
        {/* CALL TO ACTION — POLISHED & CLEAR                              */}
        {/* ============================================================== */}
        <section className="text-center bg-white border-3 border-[#C2410C] rounded-3xl p-8 sm:p-12 md:p-14 shadow-[8px_8px_0px_#C2410C] max-w-3xl mx-auto">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-3">
            GET INVOLVED
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-brand-navy mb-4">
            EXPERIENCE PURPOSEFUL PLAY.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed mb-8 max-w-xl mx-auto">
            Bring a tabletop simulation workshop to your campus, join a public game session, or partner with us to solve complex challenges.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/games"
              className="px-6 py-3.5 rounded-full bg-brand-orange hover:bg-orange-600 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-xs"
            >
              EXPLORE OUR GAMES &rarr;
            </Link>
            <Link
              href="/programs"
              className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-brand-navy border-2 border-brand-navy font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
            >
              VIEW PROGRAMS
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
            >
              CONTACT US
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}

