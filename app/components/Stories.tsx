/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Play, ExternalLink, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoData {
  id: string;
  url: string;
  embedUrl: string;
  number?: string;
  shortLabel: string;
  tag: string;
  title: string;
  subtitle: string;
  speaker: string;
  duration: string;
  thumbnail: string;
  tapeRotation?: string;
}

// 4 unique videos from the official playlist PLNriavw_JQZo
const PLAYLIST_VIDEOS: VideoData[] = [
  {
    id: "0q0VSoT0MvQ",
    url: "https://www.youtube.com/watch?v=0q0VSoT0MvQ&list=PLNriavw_JQZo",
    embedUrl: "https://www.youtube-nocookie.com/embed/0q0VSoT0MvQ?autoplay=1",
    number: "01",
    shortLabel: "City Runners Launch",
    tag: "KEYNOTE & LAUNCH",
    title: "City Runners Game Launch | 15 Aug 2026",
    subtitle: "Deconstructing urban livability, participatory governance, and the systemic challenges of fast-growing Indian megacities.",
    speaker: "Dr. Balaji Kalluri, PhD",
    duration: "18 MIN",
    thumbnail: "https://i.ytimg.com/vi/0q0VSoT0MvQ/hqdefault.jpg",
    tapeRotation: "-rotate-2"
  },
  {
    id: "YO9Wl1bjPEY",
    url: "https://www.youtube.com/watch?v=YO9Wl1bjPEY&list=PLNriavw_JQZo",
    embedUrl: "https://www.youtube-nocookie.com/embed/YO9Wl1bjPEY?autoplay=1",
    number: "02",
    shortLabel: "City Governance",
    tag: "GAME HIGHLIGHT",
    title: "CITY RUNNERS : An award-winning city governance game for every Indian",
    subtitle: "Understanding City Runners: mechanics, rules, and how players deliberate municipal trade-offs in live facilitated sessions.",
    speaker: "Bharat Play Facilitators",
    duration: "12 MIN",
    thumbnail: "https://i.ytimg.com/vi/YO9Wl1bjPEY/hqdefault.jpg",
    tapeRotation: "rotate-2"
  },
  {
    id: "OkdQ4S3Jg-U",
    url: "https://www.youtube.com/watch?v=OkdQ4S3Jg-U&list=PLNriavw_JQZo",
    embedUrl: "https://www.youtube-nocookie.com/embed/OkdQ4S3Jg-U?autoplay=1",
    number: "03",
    shortLabel: "Video Guide",
    tag: "RULES & MECHANICS",
    title: "Video Guide: How to Play City Runners game?",
    subtitle: "A comprehensive video guide walking players and educators through core phases, resource cards, and city budget negotiation.",
    speaker: "Dr. Balaji Kalluri, PhD",
    duration: "14 MIN",
    thumbnail: "https://i.ytimg.com/vi/OkdQ4S3Jg-U/hqdefault.jpg",
    tapeRotation: "-rotate-3"
  },
  {
    id: "GtSTKMymvYc",
    url: "https://www.youtube.com/watch?v=GtSTKMymvYc&list=PLNriavw_JQZo",
    embedUrl: "https://www.youtube-nocookie.com/embed/GtSTKMymvYc?autoplay=1",
    number: "04",
    shortLabel: "Child Ambassador",
    tag: "AMBASSADOR SPOTLIGHT",
    title: "The Play2ProgressIndia 🇮🇳 Child Ambassador",
    subtitle: "Young minds championing screen-free learning, purposeful play, and civic awareness in neighborhood societies.",
    speaker: "Bharat Play Youth Initiative",
    duration: "SPOTLIGHT",
    thumbnail: "https://i.ytimg.com/vi/GtSTKMymvYc/hqdefault.jpg",
    tapeRotation: "rotate-1"
  }
];

// Authentic workshop and session capture videos
const WORKSHOP_CAPTURES: VideoData[] = [
  {
    id: "qxcTD7rLqw8",
    url: "https://youtu.be/qxcTD7rLqw8",
    embedUrl: "https://www.youtube-nocookie.com/embed/qxcTD7rLqw8?autoplay=1",
    shortLabel: "Quantum Threat Defender",
    tag: "STRATEGY GAME",
    title: '"Quantum Threat Defender" a tabletop educational strategy game',
    subtitle: "Hands-on play session showcasing post-quantum cryptography defense, threat mitigation, and cyber resilience.",
    speaker: "Dr. Balaji Kalluri",
    duration: "PLAY DEMO",
    thumbnail: "https://i.ytimg.com/vi/qxcTD7rLqw8/hqdefault.jpg",
    tapeRotation: "-rotate-2"
  },
  {
    id: "UtKJ_iTbZl0",
    url: "https://youtu.be/UtKJ_iTbZl0",
    embedUrl: "https://www.youtube-nocookie.com/embed/UtKJ_iTbZl0?autoplay=1",
    shortLabel: "Where To Park?",
    tag: "CIVIC TECH TOY",
    title: 'Where To Park? an electronic civic tech toy :-)',
    subtitle: "Interactive electronic tabletop toy modeling urban parking dynamics, transit bottlenecks, and spatial mobility.",
    speaker: "Hardware Prototype",
    duration: "HARDWARE TOY",
    thumbnail: "https://i.ytimg.com/vi/UtKJ_iTbZl0/hqdefault.jpg",
    tapeRotation: "rotate-3"
  },
  {
    id: "NQkusxelw4Q",
    url: "https://youtu.be/NQkusxelw4Q",
    embedUrl: "https://www.youtube-nocookie.com/embed/NQkusxelw4Q?autoplay=1",
    shortLabel: "Cyber Peace Warriors",
    tag: "ONLINE SIMULATION",
    title: "'Cyber Peace Warriors' online game",
    subtitle: "Digital and tabletop game experience educating students and youth on digital ethics, misinformation, and cybersecurity peace.",
    speaker: "Digital Simulation",
    duration: "ONLINE GAME",
    thumbnail: "https://i.ytimg.com/vi/NQkusxelw4Q/hqdefault.jpg",
    tapeRotation: "-rotate-1"
  }
];

export default function Stories() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const [activeModalVideo, setActiveModalVideo] = useState<VideoData | null>(null);

  const currentTalk = PLAYLIST_VIDEOS[selectedIdx] || PLAYLIST_VIDEOS[0];

  const handleSelectTalk = (idx: number) => {
    setSelectedIdx(idx);
    setIsPlayingInline(false);
  };

  return (
    <section className="py-14 sm:py-20 md:py-32 bg-[#f8f6f0] border-b border-gray-200 text-brand-navy" id="stories">
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-6">

        {/* Section Header: Editorial Swiss Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-12 border-b border-gray-200 gap-6">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> SEE IT IN ACTION · DISCOURSE & FIELD FOOTAGE
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-brand-navy leading-none">
              URBAN FUTURES · <span className="text-brand-green">TALK.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-brand-gray font-medium max-w-sm">
            Curated discourse, live simulation playtests, and intergenerational dialogues by Bharat Play.
          </p>
        </div>

        {/* Top Pills Bar: Playlist Videos */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {PLAYLIST_VIDEOS.map((talk, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={talk.id}
                type="button"
                onClick={() => handleSelectTalk(idx)}
                className={`shrink-0 font-mono text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xs border transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? "bg-brand-navy text-white border-brand-navy shadow-xs"
                    : "bg-white text-brand-navy/70 border-gray-200 hover:border-gray-400 hover:text-brand-navy"
                }`}
              >
                <span className={isSelected ? "text-brand-orange" : "text-gray-400"}>
                  {talk.number}
                </span>
                <span>{talk.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Centerpiece: Studio Screening Desk (Main Screen on Left + Tape Stack on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-20">
          
          {/* Main Screening Monitor (Left, 7 cols) */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col">
            <div className="relative">
              {/* Translucent washi tape at top */}
              <div className={`absolute -top-3.5 left-12 w-28 h-7 bg-amber-100/85 border border-amber-300/40 shadow-xs z-20 backdrop-blur-xs ${currentTalk.tapeRotation || "-rotate-1"}`} />

              {/* Framed Screen Container */}
              <div className="p-3 sm:p-5 bg-white border border-gray-200 rounded-xs shadow-2xl">
                <div className="relative aspect-video w-full overflow-hidden bg-black rounded-xs">
                  {isPlayingInline ? (
                    <iframe
                      src={currentTalk.embedUrl}
                      title={currentTalk.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <div 
                      className="relative w-full h-full cursor-pointer group"
                      onClick={() => setIsPlayingInline(true)}
                    >
                      <img
                        src={currentTalk.thumbnail}
                        alt={currentTalk.title}
                        className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-95 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                      {/* Large Center Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-brand-navy transition-all duration-300">
                          <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-current" />
                        </div>
                      </div>

                      {/* Badges on video */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider bg-brand-navy text-white px-3 py-1 rounded-xs">
                          {currentTalk.tag}
                        </span>
                        <span className="font-mono text-xs font-bold uppercase tracking-wider bg-black/60 text-white px-3 py-1 rounded-xs backdrop-blur-xs">
                          {currentTalk.duration}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="font-mono text-xs font-bold text-brand-orange uppercase block mb-1">
                          EPISODE #{currentTalk.number} · {currentTalk.speaker}
                        </span>
                        <h3 className="font-display text-lg sm:text-2xl font-bold uppercase tracking-tight leading-tight line-clamp-1">
                          {currentTalk.title}
                        </h3>
                      </div>
                    </div>
                  )}
                </div>

                {/* Metadata & Actions Underneath Screen */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                  <div className="max-w-xl">
                    <span className="font-bold text-brand-navy text-base uppercase block mb-1">
                      {currentTalk.title}
                    </span>
                    <span className="text-brand-gray text-xs sm:text-sm font-medium leading-relaxed block">
                      {currentTalk.subtitle}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={currentTalk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-brand-orange hover:text-brand-navy transition-colors"
                    >
                      <span>WATCH ON YOUTUBE</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Film Selection Stack (Right, 5 cols - larger thumbnails & text) */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2.5 border-b border-gray-200">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-gray">
                PLAYLIST EPISODES ({PLAYLIST_VIDEOS.length} VIDEOS)
              </span>
              <span className="font-mono text-xs text-brand-orange font-bold">
                0{selectedIdx + 1} OF 0{PLAYLIST_VIDEOS.length}
              </span>
            </div>

            <div className="flex flex-col gap-3 max-h-[660px] overflow-y-auto pr-1 scrollbar-thin">
              {PLAYLIST_VIDEOS.map((talk, idx) => {
                const isSelected = selectedIdx === idx;
                return (
                  <div
                    key={talk.id}
                    onClick={() => handleSelectTalk(idx)}
                    className={`p-3 sm:p-3.5 rounded-xs border transition-all duration-200 cursor-pointer relative group flex gap-3.5 sm:gap-4 items-center ${
                      isSelected
                        ? "bg-white border-brand-navy shadow-md ring-2 ring-brand-navy/15 translate-x-1"
                        : "bg-white/70 hover:bg-white border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {/* Thumbnail Preview (Bigger!) */}
                    <div className="relative aspect-video w-32 sm:w-36 md:w-40 shrink-0 overflow-hidden rounded-xs bg-black">
                      <img
                        src={talk.thumbnail}
                        alt={talk.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                          isSelected ? "bg-brand-orange" : "bg-black/60 group-hover:bg-brand-orange"
                        } transition-colors`}>
                          <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                        </div>
                      </div>
                    </div>

                    {/* Content (Bigger & Clearer) */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-mono text-[10px] font-bold text-brand-orange">
                          #{talk.number}
                        </span>
                        <span className="text-gray-300">·</span>
                        <span className="font-mono text-[10px] text-brand-gray font-semibold truncate">
                          {talk.duration}
                        </span>
                      </div>
                      <h4 className="font-display text-sm sm:text-base font-bold uppercase tracking-tight text-brand-navy truncate group-hover:text-brand-orange transition-colors">
                        {talk.title}
                      </h4>
                      <p className="text-xs text-brand-gray truncate font-medium mt-0.5">
                        {talk.speaker}
                      </p>
                    </div>

                    {/* Active Indicator Chevron */}
                    {isSelected && (
                      <div className="w-1.5 h-7 bg-brand-orange rounded-full shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Section: AUTHENTIC WORKSHOP & SESSION CAPTURES (Using the 5 user-provided videos!) */}
        <div className="pt-12 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-1">
                FIELD DEMOS & SERIOUS SIMULATIONS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-brand-navy">
                AUTHENTIC WORKSHOP & SESSION CAPTURES
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-brand-gray font-medium max-w-md">
              Live captures of tabletop cyber defense games, electronic civic tech prototypes, and online youth peace simulations.
            </p>
          </div>

          {/* 3 Video Cards Grid (Spacious 3-Column Responsive Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {WORKSHOP_CAPTURES.map((video) => (
              <article
                key={video.id}
                className={`bg-white border border-gray-200 hover:border-brand-navy rounded-xs p-5 sm:p-6 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group ${video.tapeRotation || ""}`}
              >
                <div>
                  {/* Washi Tape Strip on Top */}
                  <div className="relative pt-2 mb-4">
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-amber-100/90 border border-amber-300/40 shadow-xs z-20 backdrop-blur-xs rotate-[-1deg]" />

                    {/* Video Thumbnail Frame (Much Bigger) */}
                    <div 
                      className="relative aspect-video w-full overflow-hidden bg-black rounded-xs cursor-pointer shadow-md"
                      onClick={() => setActiveModalVideo(video)}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-brand-navy transition-all duration-300">
                          <Play className="w-6 h-6 ml-0.5 fill-current" />
                        </div>
                      </div>

                      <div className="absolute top-2.5 left-2.5">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-brand-navy/90 text-white px-2.5 py-1 rounded-xs">
                          {video.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-brand-navy group-hover:text-brand-orange transition-colors leading-snug mb-2 line-clamp-2">
                    {video.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-brand-navy/80 font-medium leading-relaxed mb-5 line-clamp-3">
                    {video.subtitle}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setActiveModalVideo(video)}
                    className="font-bold text-sm text-brand-orange hover:text-brand-navy transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>PLAY VIDEO</span>
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </button>

                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-brand-gray hover:text-brand-navy transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>YOUTUBE</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Clean Bottom Note */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-brand-gray font-medium">
            <span>ALL VIDEOS HOSTED ON YOUTUBE (BHARAT PLAY & PLAY2PROGRESS)</span>
            <span>SIMULATIONS · PROTOTYPES · CITIZEN LABS</span>
          </div>
        </div>

      </div>

      {/* Interactive Video Modal for Workshop Captures */}
      <AnimatePresence>
        {activeModalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-8"
            onClick={() => setActiveModalVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-brand-navy border border-white/20 rounded-sm w-full max-w-4xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Bar */}
              <div className="flex items-center justify-between p-3 sm:p-4 bg-black/60 border-b border-white/10 text-white">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-brand-orange px-1.5 sm:px-2 py-0.5 rounded bg-white/10 shrink-0">
                    {activeModalVideo.tag}
                  </span>
                  <span className="font-display text-xs sm:text-base font-bold uppercase tracking-tight truncate max-w-[130px] xs:max-w-[200px] sm:max-w-md">
                    {activeModalVideo.title}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={activeModalVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-bold text-white/70 hover:text-white flex items-center gap-1 uppercase tracking-widest"
                  >
                    YOUTUBE <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setActiveModalVideo(null)}
                    className="p-1 hover:bg-white/10 rounded transition-colors text-white cursor-pointer"
                    aria-label="Close video player"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Iframe player */}
              <div className="aspect-video w-full bg-black">
                <iframe
                  src={activeModalVideo.embedUrl}
                  title={activeModalVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-black/40 text-xs text-white/70 font-medium">
                {activeModalVideo.subtitle}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
