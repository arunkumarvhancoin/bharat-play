/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  ExternalLink,
  ChevronLeft, 
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NewsSlide {
  id: string;
  tag: string;
  statusBadge: string;
  statusColor: string;
  headline: string;
  dates: string;
  venue: string;
  city: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  isExternalLink?: boolean;
  type: "instagram-image" | "collab-logos";
  // For Instagram Image
  imageSrc?: string;
  imageAlt?: string;
  instagramUrl?: string;
  // For Collab Logos
  collabLogoLeft?: { name: string; src: string };
  collabLogoRight?: { name: string; src: string };
}

const NEWS_SLIDES: NewsSlide[] = [
  // 1. Goa Festival of Future Cities at Sunaparanta
  {
    id: "goa-festival-future-cities",
    tag: "GOA SHOWCASE",
    statusBadge: "JUST CONCLUDED",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-300",
    headline: "City Runners Takes The Festival of Future Cities by Storm",
    dates: "30th to 31st October 2026",
    venue: "Sunaparanta Centre for the Arts",
    city: "Panjim, Goa",
    description:
      "Bharat Play's City Runners took visitors and patrons of change by storm at The Festival of Future Cities held in Panjim, Goa, featured specially at the Playable Panjim arcade of games held at Sunaparanta Centre for the Arts between 30th to 31st October 2026.",
    ctaText: "View on Instagram",
    ctaLink: "https://www.instagram.com/p/DfRjWrfkwCv/?img_index=8",
    isExternalLink: true,
    type: "instagram-image",
    imageSrc: "/events_media/goa_emergence_ig_index8.jpg",
    imageAlt: "City Runners at The Festival of Future Cities, Sunaparanta Panjim Goa",
    instagramUrl: "https://www.instagram.com/p/DfRjWrfkwCv/?img_index=8",
  },
  // 2. Games for Change at Alliance Française Bengaluru
  {
    id: "games-for-change-india-2026",
    tag: "OFFICIAL PARTNER",
    statusBadge: "LIVE NOW · 17 & 18 NOV",
    statusColor: "bg-orange-50 text-orange-700 border-orange-300",
    headline: "Official Partner in Games for Change India Festival 2026",
    dates: "17 and 18 November 2026",
    venue: "Alliance Française de Bangalore",
    city: "Bengaluru",
    description:
      "Bharat Play is an official partner in the Games for Change India Festival 2026 taking place in Alliance Française Bengaluru. Come experience our suite of award-winning games on 17 and 18 Nov if you are in Bengaluru.",
    ctaText: "Book Your Seat Now",
    ctaLink: "/events/city-runners-workshop-bangalore",
    type: "collab-logos",
    collabLogoLeft: {
      name: "Alliance Française de Bangalore",
      src: "/partners/alliance-francaise.svg",
    },
    collabLogoRight: {
      name: "Bharat Play",
      src: "/logo.png",
    },
  },
  // 3. TTOX Winter Convention 2026
  {
    id: "ttox-winter-convention-2026",
    tag: "TABLETOP CONVENTION",
    statusBadge: "UPCOMING IN DEC",
    statusColor: "bg-blue-50 text-blue-700 border-blue-300",
    headline: "India's Largest Tabletop Gaming Convention: TTOX 2026",
    dates: "5 & 6 December 2026",
    venue: "Infantry Road",
    city: "Bengaluru City",
    description:
      "Bharat Play is featuring in India's Largest Tabletop Gaming Convention taking place in Bengaluru in Dec. Come join us at TTOX WINTER CONVENTION 2026 during 5 & 6 Dec in Bengaluru City.",
    ctaText: "Book Convention Tickets",
    ctaLink: "/events/ttox-winter-convention-2026",
    type: "collab-logos",
    collabLogoLeft: {
      name: "Bharat Play",
      src: "/logo.png",
    },
    collabLogoRight: {
      name: "TTOX Winter Convention",
      src: "/partners/ttox.png",
    },
  },
];

export default function NewsUpdatesRollingAd() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance to the next news item every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % NEWS_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, activeIdx]);

  const currentSlide = NEWS_SLIDES[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + NEWS_SLIDES.length) % NEWS_SLIDES.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % NEWS_SLIDES.length);
  };

  return (
    <section
      id="news-and-updates"
      aria-label="News and Updates"
      className="bg-[#FBFBFA] text-[#111827] border-y border-gray-200 py-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8">
        
        {/* ============================================================ */}
        {/* HEADER BAR: BADGE, 5-SEC PROGRESS BARS, PREV/NEXT            */}
        {/* ============================================================ */}
        <div className="flex items-center justify-between pb-3 mb-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange text-white font-mono text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              NEWS &amp; UPDATES
            </span>
          </div>

          {/* 5-Second Indicators & Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2" role="tablist">
              {NEWS_SLIDES.map((slide, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setActiveIdx(idx)}
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Jump to announcement ${idx + 1}`}
                    className={`relative h-2 rounded-full transition-all cursor-pointer ${
                      isActive ? "w-10 bg-gray-200 overflow-hidden" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        key={`news-timer-${activeIdx}-${isPaused}`}
                        initial={{ width: "0%" }}
                        animate={{ width: isPaused ? "100%" : "100%" }}
                        transition={{ duration: isPaused ? 0 : 5, ease: "linear" }}
                        className="h-full bg-brand-orange"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Prev / Next buttons */}
            <div className="flex items-center gap-1.5 ml-2">
              <button
                onClick={handlePrev}
                aria-label="Previous announcement"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:text-black hover:border-black transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next announcement"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:text-black hover:border-black transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* ACTIVE NEWS ITEM (NO CARD PADDING, CLEAN NORMAL IMAGES)      */}
        {/* ============================================================ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Big Headline, Description & CTAs (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* Meta pills: Status and Date */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider border ${currentSlide.statusColor}`}>
                    {currentSlide.statusBadge}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-brand-orange" />
                    {currentSlide.dates}
                  </span>
                </div>

                {/* Big Headline */}
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black text-brand-navy tracking-tight leading-[1.1] mb-3">
                  {currentSlide.headline}
                </h3>

                {/* Venue / City */}
                <div className="flex items-center gap-2 font-mono text-sm sm:text-base text-emerald-800 font-semibold mb-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange shrink-0" />
                  <span>{currentSlide.venue}, {currentSlide.city}</span>
                </div>

                {/* Big Readable Narrative */}
                <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed font-sans mb-6">
                  {currentSlide.description}
                </p>

                {/* Big Action CTA Button */}
                <div>
                  {currentSlide.isExternalLink ? (
                    <a
                      href={currentSlide.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 bg-brand-orange hover:bg-orange-600 text-white font-mono text-sm sm:text-base font-bold uppercase tracking-wider px-7 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all group cursor-pointer"
                    >
                      <span>{currentSlide.ctaText}</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ) : (
                    <Link
                      href={currentSlide.ctaLink}
                      className="inline-flex items-center gap-2.5 bg-brand-orange hover:bg-orange-600 text-white font-mono text-sm sm:text-base font-bold uppercase tracking-wider px-7 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all group cursor-pointer"
                    >
                      <span>{currentSlide.ctaText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Right Column: Normal Images without Cards or Padding (5 Cols) */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
                {currentSlide.type === "instagram-image" && currentSlide.imageSrc && (
                  /* Section 1: Normal Instagram Image without card padding or overlay text */
                  <a
                    href={currentSlide.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on Instagram"
                    className="block w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:opacity-95 transition-opacity relative"
                  >
                    <Image
                      src={currentSlide.imageSrc}
                      alt={currentSlide.imageAlt || "City Runners at Emergence Festival"}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover"
                    />
                  </a>
                )}

                {currentSlide.type === "collab-logos" && (
                  /* Section 2 & 3: Normal Logos side-by-side with ✕ without card boxes or padding */
                  <Link
                    href={currentSlide.ctaLink}
                    aria-label={`Go to ${currentSlide.headline} booking page`}
                    className="flex items-center justify-center gap-5 sm:gap-8 w-full max-w-[460px] py-4 cursor-pointer hover:opacity-85 transition-opacity"
                  >
                    {/* Left Logo */}
                    <img
                      src={currentSlide.collabLogoLeft?.src}
                      alt={currentSlide.collabLogoLeft?.name || "Logo"}
                      className="h-20 sm:h-24 md:h-28 w-auto max-w-[180px] object-contain"
                    />

                    {/* Collaboration "✕" */}
                    <span className="font-display text-gray-400 font-black text-2xl sm:text-4xl select-none">
                      ✕
                    </span>

                    {/* Right Logo */}
                    <img
                      src={currentSlide.collabLogoRight?.src}
                      alt={currentSlide.collabLogoRight?.name || "Logo"}
                      className="h-20 sm:h-24 md:h-28 w-auto max-w-[180px] object-contain"
                    />
                  </Link>
                )}
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
