/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Compass, ExternalLink } from "lucide-react";
import { PROGRAMS } from "../data/programs";

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const conductedHighlights = [
    {
      title: "Green Skills for Vocational Trainers (BiBo)",
      date: "April 2026",
      venue: "Quest Alliance, Chennai",
      summary: "BiBo serious game capacity development for vocational trainers in green skills and planetary boundaries.",
      image: "/games/bibo.webp",
      linkedinUrl: "https://lnkd.in/p/gd2GD9Gx"
    },
    {
      title: "Play Games to Learn, Skill & Change",
      date: "April 2026",
      venue: "Housing Society, Pune",
      summary: "Curated public game exhibition on good play, purposeful play, and 21st-century civic skills.",
      image: "/cr1.webp",
      linkedinUrl: "https://lnkd.in/p/gNqGd_F6"
    },
    {
      title: "Shiv Nadar University (SNU Chennai)",
      date: "August 2026",
      venue: "Chennai, Tamil Nadu",
      summary: "Undergraduate systems engineering and urban governance tabletop showcase.",
      image: "/cr1.webp"
    },
    {
      title: "BITSAA Gandhi Jayanti Assembly",
      date: "October 2026",
      venue: "Chennai",
      summary: "Intergenerational community lab deliberating civic infrastructure and public funds.",
      image: "/cr.webp"
    },
    {
      title: "FLAME University Leadership Lab",
      date: "July 2026",
      venue: "Pune, Maharashtra",
      summary: "Experiential public policy and environmental leadership simulation.",
      image: "/cr2.webp"
    }
  ];

  const displayedPrograms = activeTab === "all" 
    ? PROGRAMS 
    : PROGRAMS.filter((p) => p.id === activeTab);

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
      <section className="max-w-[1200px] mx-auto w-full px-4 md:px-6 mb-8">
        <div className="pb-6 border-b border-gray-200">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 flex items-center gap-2">
            <Compass className="w-4 h-4 text-emerald-600" /> BHARAT PLAY ENGAGEMENTS
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-brand-navy leading-none mb-3">
            OUR <span className="text-emerald-600">PROGRAMS.</span>
          </h1>
          <p className="text-base sm:text-lg text-brand-gray font-medium max-w-2xl">
            4 structured experiential learning pathways for universities, colleges, institutions, and leadership teams.
          </p>
        </div>
      </section>

      {/* 4 INTERACTIVE FILTER TABS */}
      <section className="max-w-[1200px] mx-auto w-full px-4 md:px-6 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-colors shrink-0 ${
              activeTab === "all"
                ? "bg-brand-navy text-white shadow-xs"
                : "bg-white text-brand-navy border border-emerald-200 hover:border-brand-navy"
            }`}
          >
            ALL FORMATS (4)
          </button>
          {PROGRAMS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-colors shrink-0 ${
                activeTab === p.id
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-white text-brand-navy border border-emerald-200 hover:border-emerald-500"
              }`}
            >
              {p.displayNumber} · {p.name}
            </button>
          ))}
        </div>
      </section>

      {/* 4 CORE PROGRAM CARDS: IMAGE-LED, MINIMAL & READABLE */}
      <section className="max-w-[1200px] mx-auto w-full px-4 md:px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedPrograms.map((program, pIdx) => {
            const programThemes = [
              { border: "border-[#C2410C]", shadow: "#C2410C", tagBg: "bg-[#C2410C] text-white", numColor: "text-[#C2410C]" }, // Game Sessions: Saffron
              { border: "border-[#12352B]", shadow: "#12352B", tagBg: "bg-[#12352B] text-emerald-100", numColor: "text-[#12352B]" }, // Play Workshops: Green
              { border: "border-[#0C2444]", shadow: "#0C2444", tagBg: "bg-[#0C2444] text-blue-100", numColor: "text-[#0C2444]" }, // Play Exhibition: Blue
              { border: "border-[#C2410C]", shadow: "#C2410C", tagBg: "bg-[#C2410C] text-white", numColor: "text-[#C2410C]" }, // Courses: Saffron
            ];
            const currentTheme = programThemes[pIdx % programThemes.length];

            return (
              <article
                key={program.id}
                className={`bg-white border-2 ${currentTheme.border} rounded-[26px] p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group`}
                style={{ boxShadow: `10px 10px 0px ${currentTheme.shadow}` }}
              >
                <div>
                  {/* Top Bar: Numeral & Category Tag */}
                  <div className={`flex items-center justify-between pb-5 border-b ${currentTheme.border}/15`}>
                    <span className={`font-mono text-3xl sm:text-4xl font-black ${currentTheme.numColor}`}>
                      {program.displayNumber}
                    </span>
                    <span className={`font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 ${currentTheme.tagBg} rounded-full`}>
                      {program.tag}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="pt-6">
                    <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#12352B] group-hover:text-brand-orange transition-colors leading-tight mb-2">
                      <Link href={`/programs/${program.slug}`}>
                        {program.name}
                      </Link>
                    </h2>
                    <p className="font-mono text-xs font-bold uppercase text-brand-orange mb-3">
                      {program.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed mb-4">
                      {program.shortDescription}
                    </p>

                    {/* Specs */}
                    <div className="pt-4 border-t border-[#12352B]/15 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600 font-semibold">
                      <span>⏱️ {program.duration.label}</span>
                      <span>·</span>
                      <span>👥 {program.cohortSize.label}</span>
                      <span>·</span>
                      <span>📍 {program.format.split("/")[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6 sm:p-7 pt-0 border-t border-[#12352B]/15 mt-2 flex items-center justify-between">
                  <Link
                    href={`/programs/${program.slug}`}
                    className="font-mono text-xs font-bold uppercase text-[#12352B] hover:text-brand-orange transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>OPEN PROGRAMME</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/918237132553?text=${encodeURIComponent(`Hi Bharat Play, I would like to inquire about hosting ${program.name} for our organization.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-bold uppercase text-brand-orange hover:text-[#12352B] transition-colors inline-flex items-center gap-1"
                  >
                    <span>INQUIRE ON WHATSAPP</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* RECENT WORKSHOPS (COMPACT FIELD SPOTLIGHT) */}
      <section className="max-w-[1200px] mx-auto w-full px-4 md:px-6 mb-16">
        <div className="bg-white border border-amber-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="mb-6 pb-4 border-b border-amber-200/60">
            <span className="font-mono text-xs font-bold uppercase text-brand-orange block mb-1">
              FIELD PROVENANCE
            </span>
            <h2 className="font-display text-2xl font-bold uppercase text-brand-navy">
              RECENT SESSIONS CONDUCTED
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {conductedHighlights.map((session, idx) => (
              <div 
                key={idx} 
                className="border-2 border-[#12352B] rounded-[22px] bg-white p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "6px 6px 0px #12352B" }}
              >
                <div>
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-3 bg-brand-navy border border-[#12352B]/10">
                    <img src={session.image} alt={session.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-brand-gray mb-1">
                    <span className="text-brand-orange font-bold">{session.date}</span>
                    <span>{session.venue}</span>
                  </div>
                  <h3 className="font-display text-base font-bold uppercase text-brand-navy">
                    {session.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1 leading-snug">
                    {session.summary}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#12352B]/10 flex flex-col gap-2">
                  {"linkedinUrl" in session && session.linkedinUrl && (
                    <a
                      href={session.linkedinUrl as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] font-bold uppercase text-brand-navy hover:text-brand-orange inline-flex items-center gap-1"
                    >
                      <span>VIEW LINKEDIN POST</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <a
                    href={`https://wa.me/918237132553?text=${encodeURIComponent(`Hi Bharat Play, I would like to inquire about hosting a session similar to ${session.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-bold uppercase text-brand-orange hover:text-brand-navy inline-flex items-center gap-1"
                  >
                    <span>INQUIRE THIS FORMAT</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK BANNER: PHYSICAL OFFSET (NAVY BLUE OUTLINE) */}
      <section className="max-w-[1200px] mx-auto w-full px-4 md:px-6">
        <div 
          className="bg-brand-navy text-white rounded-[26px] border-2 border-[#0C2444] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ boxShadow: "10px 10px 0px #0C2444" }}
        >
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase">
              DESIGN A CUSTOM WORKSHOP FOR YOUR CAMPUS
            </h3>
            <p className="text-sm text-white/80 mt-1">
              We tailor simulations, formats, and debriefs to your specific curriculum or training objectives.
            </p>
          </div>
          
          <a
            href="https://wa.me/918237132553?text=Hi%20Bharat%20Play,%20we%20want%20to%20design%20a%20custom%20purposeful%20play%20program%20for%20our%20institution."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-orange-500/20 hover:scale-[1.02] shrink-0"
          >
            <span>MESSAGE US ON WHATSAPP</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

    </main>
  );
}
