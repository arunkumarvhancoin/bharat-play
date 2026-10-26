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
          className="inline-flex items-center gap-2 text-brand-orange font-mono text-xs uppercase tracking-widest hover:text-brand-navy transition-colors font-bold"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO HOME
        </Link>
      </div>

      {/* HEADER: SHORT & CLEAR */}
      <section className="max-w-[1200px] mx-auto w-full px-4 md:px-6 mb-8">
        <div className="pb-6 border-b border-gray-200">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gray mb-2 flex items-center gap-2">
            <Compass className="w-4 h-4 text-brand-orange" /> BHARAT PLAY ENGAGEMENTS
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-brand-navy leading-none mb-3">
            OUR <span className="text-brand-orange">PROGRAMS.</span>
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
            className={`px-4 py-2 rounded-xs font-mono text-xs font-bold uppercase tracking-wider transition-colors shrink-0 ${
              activeTab === "all"
                ? "bg-brand-navy text-white shadow-xs"
                : "bg-white text-brand-navy border border-gray-200 hover:border-brand-navy"
            }`}
          >
            ALL FORMATS (4)
          </button>
          {PROGRAMS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className={`px-4 py-2 rounded-xs font-mono text-xs font-bold uppercase tracking-wider transition-colors shrink-0 ${
                activeTab === p.id
                  ? "bg-brand-orange text-white shadow-xs"
                  : "bg-white text-brand-navy border border-gray-200 hover:border-brand-orange"
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
          {displayedPrograms.map((program) => {
            return (
              <article
                key={program.id}
                className="bg-white border-2 border-gray-200 hover:border-brand-navy rounded-xs p-7 sm:p-8 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Numeral & Category Tag */}
                  <div className="flex items-center justify-between pb-5 border-b border-gray-100">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-brand-orange">
                      {program.displayNumber}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-gray px-2.5 py-1 bg-brand-offwhite border border-gray-200 rounded-xs">
                      {program.tag}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="pt-6">
                    <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-brand-navy group-hover:text-brand-orange transition-colors leading-tight mb-2">
                      <Link href={`/programs/${program.slug}`}>
                        {program.name}
                      </Link>
                    </h2>
                    <p className="font-mono text-xs font-bold uppercase text-brand-green mb-3">
                      {program.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-brand-navy/80 font-normal leading-relaxed mb-4">
                      {program.shortDescription}
                    </p>

                    {/* Specs */}
                    <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3 text-xs font-mono text-brand-gray font-semibold">
                      <span>⏱️ {program.duration.label}</span>
                      <span>·</span>
                      <span>👥 {program.cohortSize.label}</span>
                      <span>·</span>
                      <span>📍 {program.format.split("/")[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6 sm:p-7 pt-0 border-t border-gray-100 mt-2 flex items-center justify-between">
                  <Link
                    href={`/programs/${program.slug}`}
                    className="font-mono text-xs font-bold uppercase text-brand-navy hover:text-brand-orange transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>OPEN PROGRAMME</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/918237132553?text=${encodeURIComponent(`Hi Bharat Play, I would like to inquire about hosting ${program.name} for our organization.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-bold uppercase text-brand-orange hover:text-brand-navy transition-colors inline-flex items-center gap-1"
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
        <div className="bg-white border border-gray-200 rounded-sm p-6 sm:p-8 shadow-xs">
          <div className="mb-6 pb-4 border-b border-gray-200">
            <span className="font-mono text-xs font-bold uppercase text-brand-orange block mb-1">
              FIELD PROVENANCE
            </span>
            <h2 className="font-display text-2xl font-bold uppercase text-brand-navy">
              RECENT SESSIONS CONDUCTED
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {conductedHighlights.map((session, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xs bg-brand-offwhite p-4 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-video w-full rounded-xs overflow-hidden mb-3 bg-brand-navy">
                    <img src={session.image} alt={session.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-brand-gray mb-1">
                    <span className="text-brand-orange font-bold">{session.date}</span>
                    <span>{session.venue}</span>
                  </div>
                  <h3 className="font-display text-base font-bold uppercase text-brand-navy">
                    {session.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-navy/80 font-medium mt-1 leading-snug">
                    {session.summary}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-gray-200 flex flex-col gap-2">
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

      {/* QUICK BANNER */}
      <section className="max-w-[1200px] mx-auto w-full px-4 md:px-6">
        <div className="bg-brand-navy text-white rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
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
