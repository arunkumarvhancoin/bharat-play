/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Topic {
  id: string;
  number: string;
  title: string;
  desc: string;
  image: string;
  frameType: "photo-corners" | "torn-page" | "polaroid-tape" | "blueprint-clip" | "notebook-paperclip" | "archival-mount";
  rotation: string;
}

const TOPICS: Topic[] = [
  {
    id: "cities",
    number: "01",
    title: "CITIES",
    desc: "We design games that help citizens and planners figure out how to make their cities better—focusing on traffic, housing, and everyday livability.",
    image: "/domains/cities.jpg",
    frameType: "photo-corners",
    rotation: "-rotate-1 sm:-rotate-2"
  },
  {
    id: "climate",
    number: "02",
    title: "CLIMATE",
    desc: "Climate change is complicated. Our simulations let you see the long-term effects of environmental choices before you make them in the real world.",
    image: "/domains/climate.jpg",
    frameType: "torn-page",
    rotation: "rotate-1 sm:rotate-2"
  },
  {
    id: "people",
    number: "03",
    title: "PEOPLE",
    desc: "We build interactive experiences that bring communities together. By playing together, different groups can find common ground and solve shared problems.",
    image: "/domains/people.jpg",
    frameType: "polaroid-tape",
    rotation: "-rotate-2 sm:-rotate-3"
  },
  {
    id: "systems",
    number: "04",
    title: "SYSTEMS",
    desc: "Government policies and massive systems are usually hard to understand. We turn them into engaging, playable scenarios so anyone can grasp how they work.",
    image: "/domains/systems.jpg",
    frameType: "blueprint-clip",
    rotation: "rotate-1"
  },
  {
    id: "learning",
    number: "05",
    title: "LEARNING",
    desc: "Instead of sitting in a classroom listening to a lecture, we believe in learning by doing. We create hands-on educational games for the next generation.",
    image: "/domains/learning.jpg",
    frameType: "notebook-paperclip",
    rotation: "-rotate-1 sm:-rotate-2"
  },
  {
    id: "future",
    number: "06",
    title: "FUTURE",
    desc: "Nobody can predict the future, but you can playtest it. We help organizations imagine and prepare for tomorrow's challenges by simulating them today.",
    image: "/domains/future.jpg",
    frameType: "archival-mount",
    rotation: "rotate-2"
  },
];

export default function WhatWePlayWith() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Smooth scroll tracking across the entire container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Track active slide index based on progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(TOPICS.length - 1, Math.max(0, Math.round(latest * (TOPICS.length - 1))));
    setActiveSlide(idx);
  });

  // 6 full-viewport slides (track width = 600vw).
  // Slide 6 (FUTURE) reaches full view by 0.85, and remains fully on the viewport until 1.0
  const x = useTransform(scrollYProgress, [0, 0.88, 1], ["0%", "-83.3333%", "-83.3333%"]);

  const scrollToSlide = (index: number) => {
    if (!targetRef.current) return;
    const rect = targetRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const totalScrollDistance = targetRef.current.offsetHeight - window.innerHeight;
    const targetScroll = scrollTop + (index / (TOPICS.length - 1)) * totalScrollDistance;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <section 
      ref={targetRef} 
      className="relative h-[380vh] bg-brand-offwhite border-b border-gray-200" 
      id="topics"
    >
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Section Header overlay (positioned cleanly below fixed navbar) */}
        <div className="absolute top-22 sm:top-24 md:top-28 left-4 sm:left-6 md:left-14 lg:left-20 right-4 sm:right-6 md:right-14 lg:right-20 flex items-center justify-between z-20 pointer-events-none">
          <div>
            <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-brand-orange block mb-0.5 sm:mb-1">
              CORE DOMAINS
            </span>
            <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-brand-navy">
              WHAT WE <span className="text-brand-orange">DESIGN FOR.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              type="button"
              onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
              disabled={activeSlide === 0}
              aria-label="Previous slide"
              className="w-8 h-8 rounded-full border border-gray-200 bg-white shadow-2xs flex items-center justify-center text-brand-navy hover:text-brand-orange hover:border-brand-navy disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSlide(Math.min(TOPICS.length - 1, activeSlide + 1))}
              disabled={activeSlide === TOPICS.length - 1}
              aria-label="Next slide"
              className="w-8 h-8 rounded-full border border-gray-200 bg-white shadow-2xs flex items-center justify-center text-brand-navy hover:text-brand-orange hover:border-brand-navy disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="hidden sm:flex items-center gap-1.5 font-mono text-xs font-bold tracking-widest text-brand-gray bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-xs border border-gray-200 shadow-2xs ml-1">
              <span>SCROLL TO EXPLORE</span>
              <span className="text-brand-orange font-bold">→</span>
            </div>
          </div>
        </div>

        {/* Horizontal moving track with hardware acceleration */}
        <motion.div 
          style={{ x, willChange: "transform" }} 
          className="flex w-[600vw] h-full"
        >
          {TOPICS.map((topic) => (
            <div
              key={topic.id}
              className="w-screen h-screen shrink-0 flex items-center justify-center px-4 sm:px-8 md:px-14 lg:px-20 pt-28 sm:pt-32 md:pt-28 pb-16 sm:pb-20 select-none"
            >
              <div className="max-w-[1300px] w-full grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 lg:gap-16 items-center">

                {/* Text on the Left */}
                <div className="md:col-span-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-brand-orange mb-1.5 sm:mb-3">
                    <span>{topic.number}</span>
                    <span className="text-gray-300">/</span>
                    <span className="text-brand-gray">06</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase text-brand-navy mb-2 sm:mb-6 leading-none">
                    {topic.title}
                  </h3>

                  <p className="text-sm sm:text-lg md:text-2xl font-medium text-brand-navy/85 leading-snug sm:leading-relaxed max-w-xl">
                    {topic.desc}
                  </p>
                </div>

                {/* Image on the Right with Picture Book / Scrapbook Frame */}
                <div className="md:col-span-6 flex justify-center md:justify-end">
                  <PictureBookFrame topic={topic} />
                </div>

              </div>
            </div>
          ))}
        </motion.div>

        {/* Interactive Bottom Slide Selector Pills + Progress Line */}
        <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 md:left-14 lg:left-20 right-4 sm:right-6 md:right-14 lg:right-20 z-20 flex flex-col gap-3">
          {/* Slide Indicator Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none justify-start sm:justify-center">
            {TOPICS.map((topic, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => scrollToSlide(idx)}
                  className={`font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xs border transition-all cursor-pointer shrink-0 ${
                    isActive
                      ? "bg-brand-navy text-white border-brand-navy shadow-xs"
                      : "bg-white/90 text-brand-navy/70 border-gray-200 hover:border-gray-400 hover:text-brand-navy"
                  }`}
                >
                  <span className={isActive ? "text-brand-orange mr-1.5" : "text-gray-400 mr-1.5"}>
                    {topic.number}
                  </span>
                  <span>{topic.title}</span>
                </button>
              );
            })}
          </div>

          {/* Minimalist Progress Line */}
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-brand-orange origin-left"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

/**
 * Picture Book / Scrapbook Framed Image Component (Pure visual framing with NO text)
 */
function PictureBookFrame({ topic }: { topic: Topic }) {
  const { frameType, rotation, image, title } = topic;

  // 1. Photo Corners Mount (Slide 01: Cities)
  if (frameType === "photo-corners") {
    return (
      <div className={`relative transition-transform duration-500 ease-out ${rotation}`}>
        <div className="p-2.5 sm:p-4 bg-[#fbf9f4] border border-[#e6e2d8] rounded-xs shadow-2xl w-full max-w-[270px] xs:max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-xl relative">
          {/* Top-Left Corner Mount */}
          <div className="absolute -top-1 -left-1 w-5 h-5 border-t-4 border-l-4 border-brand-navy z-10" />
          {/* Top-Right Corner Mount */}
          <div className="absolute -top-1 -right-1 w-5 h-5 border-t-4 border-r-4 border-brand-navy z-10" />
          {/* Bottom-Left Corner Mount */}
          <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-4 border-l-4 border-brand-navy z-10" />
          {/* Bottom-Right Corner Mount */}
          <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-4 border-r-4 border-brand-navy z-10" />

          <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 shadow-inner">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  // 2. Torn / Ripped Page Frame with Washi Tape (Slide 02: Climate)
  if (frameType === "torn-page") {
    return (
      <div className={`relative transition-transform duration-500 ease-out ${rotation}`}>
        {/* Translucent Washi Tape Strip at top */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-7 bg-amber-100/80 border border-amber-300/40 shadow-xs rotate-[-1deg] z-20 backdrop-blur-xs" />

        {/* Torn Paper Outer Container with organic jagged ripped edge */}
        <div 
          className="p-2.5 sm:p-4 bg-white shadow-2xl w-full max-w-[270px] xs:max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-xl relative"
          style={{
            clipPath: "polygon(0% 1.5%, 3% 0%, 7% 1.8%, 12% 0.2%, 18% 1.4%, 25% 0%, 32% 1.6%, 40% 0.4%, 48% 1.5%, 55% 0%, 63% 1.4%, 72% 0.2%, 80% 1.8%, 88% 0%, 94% 1.5%, 100% 0.5%, 98.8% 98.5%, 92% 100%, 85% 98.2%, 77% 99.8%, 70% 98.5%, 62% 100%, 54% 98.4%, 46% 99.7%, 38% 98.2%, 30% 100%, 22% 98.5%, 15% 99.8%, 8% 98.2%, 0% 100%)"
          }}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  // 3. Instant Polaroid / Field Print Frame (Slide 03: People)
  if (frameType === "polaroid-tape") {
    return (
      <div className={`relative transition-transform duration-500 ease-out ${rotation}`}>
        {/* Washi tape on top-right */}
        <div className="absolute -top-3 -right-2 w-24 h-6 bg-stone-200/85 border border-stone-300/60 shadow-xs rotate-12 z-20 backdrop-blur-xs" />

        {/* Polaroid frame (clean, no text) */}
        <div className="p-3 sm:p-4 pb-6 sm:pb-8 bg-white border border-gray-200/90 rounded-xs shadow-2xl w-full max-w-[270px] xs:max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-xl">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 shadow-inner border border-gray-100">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  // 4. Blueprint / Technical Drafting with Metal Clip (Slide 04: Systems)
  if (frameType === "blueprint-clip") {
    return (
      <div className={`relative transition-transform duration-500 ease-out ${rotation}`}>
        {/* Metal Bulldog Clip Graphic at top center */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <div className="w-10 h-3 bg-gradient-to-b from-gray-300 to-gray-500 rounded-t-xs border border-gray-600 shadow-sm" />
          <div className="w-14 h-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 rounded-xs border border-gray-900 shadow-md" />
        </div>

        {/* Technical Frame with Corner Crosshairs (clean, no text) */}
        <div className="p-2.5 sm:p-4 bg-[#f8f9fa] border-2 border-brand-navy/20 rounded-xs shadow-2xl w-full max-w-[270px] xs:max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-xl relative">
          <span className="absolute top-1 left-1.5 font-mono text-[10px] text-brand-navy/40">+</span>
          <span className="absolute top-1 right-1.5 font-mono text-[10px] text-brand-navy/40">+</span>
          <span className="absolute bottom-1 left-1.5 font-mono text-[10px] text-brand-navy/40">+</span>
          <span className="absolute bottom-1 right-1.5 font-mono text-[10px] text-brand-navy/40">+</span>

          <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 border border-brand-navy/15">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  // 5. Perforated Spiral Notebook / Ripped Edge with Paperclip (Slide 05: Learning)
  if (frameType === "notebook-paperclip") {
    return (
      <div className={`relative transition-transform duration-500 ease-out ${rotation}`}>
        {/* Brass Paperclip clipping top right */}
        <div className="absolute -top-3.5 right-6 w-4 h-10 z-20 pointer-events-none">
          <svg viewBox="0 0 24 56" fill="none" className="w-full h-full drop-shadow-md">
            <path 
              d="M8 8 C8 4 16 4 16 8 L16 44 C16 50 4 50 4 44 L4 16 C4 12 12 12 12 16 L12 40" 
              stroke="#d97706" 
              strokeWidth="3.2" 
              strokeLinecap="round" 
            />
          </svg>
        </div>

        {/* Notebook sheet with left tear holes (clean, no text) */}
        <div className="pl-5 pr-3 py-3 sm:pl-7 sm:pr-4 sm:py-4 bg-[#fefcf8] border border-[#e5dfd3] rounded-xs shadow-2xl w-full max-w-[270px] xs:max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-xl relative">
          <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-around py-3">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-brand-offwhite border border-gray-300" />
            ))}
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 border border-gray-200">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  // 6. Archival Folder Mount with Metallic Tabs (Slide 06: Future)
  return (
    <div className={`relative transition-transform duration-500 ease-out ${rotation}`}>
      {/* Matte black archival mount (clean, no text) */}
      <div className="p-3 sm:p-4 bg-[#1e232d] border border-gray-700 rounded-xs shadow-2xl w-full max-w-[270px] xs:max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-xl relative">
        <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-amber-400/80" />
        <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-amber-400/80" />
        <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-amber-400/80" />
        <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-amber-400/80" />

        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-900 border border-gray-700">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
