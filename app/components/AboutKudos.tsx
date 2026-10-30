"use client";

import Link from "next/link";
import { ExternalLink, CheckCircle2, Award, Landmark } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AWARDS_DATA = [
  {
    year: "2025",
    location: "UK",
    title: "Distinguished Urban Experimental Researcher",
    organization: "Urban Studies Foundation (UK)",
    color: "#C2410C",
    badgeBg: "bg-[#C2410C] text-white",
  },
  {
    year: "2024",
    location: "India",
    title: "Top-100 Design Educator in India",
    organization: "CPDM · Indian Institute of Science (IISc), Bangalore",
    color: "#0C2444",
    badgeBg: "bg-[#0C2444] text-white",
  },
  {
    year: "2024",
    location: "USA & India",
    title: "Distinguished Educator & Serious Games Researcher",
    organization: "Games for Change (USA) & UNESCO MGIEP",
    color: "#15803D",
    badgeBg: "bg-[#15803D] text-white",
  },
  {
    year: "2024",
    location: "Singapore",
    title: "Distinguished Alumni & Game Changer",
    organization: "National University of Singapore (NUS)",
    color: "#0C2444",
    badgeBg: "bg-[#0C2444] text-white",
  },
  {
    year: "2023",
    location: "Finland",
    title: "Redefining Education through Creativity",
    organization: "Council for Creative Education (CCE) Finland",
    color: "#C2410C",
    badgeBg: "bg-[#C2410C] text-white",
  },
  {
    year: "2019",
    location: "Denmark",
    title: "Post-Doctoral Research Fellowship",
    organization: "Innovation Fund Denmark",
    color: "#15803D",
    badgeBg: "bg-[#15803D] text-white",
  },
];

export default function AboutKudos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-32 px-4 md:px-8 bg-[#EBF7F0] text-brand-navy border-b border-emerald-100">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Top Section: About Bharat Play & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative">
          
          {/* Left Column: Massive Typography (Sticky across the top part scroll) */}
          <div className="lg:col-span-7 relative">
            <div className="sticky top-28 md:top-32 flex flex-col gap-8 lg:gap-12 z-10">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#15803D] text-white font-mono text-xs font-bold uppercase tracking-wider mb-3">
                  ABOUT BHARAT PLAY
                </span>

                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter text-brand-navy uppercase mb-6 sm:mb-8 font-bold pb-4 border-b border-emerald-200/60">
                  ABOUT US.
                </h2>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.95] text-brand-navy max-w-2xl"
                >
                  WE TURN REAL-WORLD PROBLEMS INTO <span className="text-brand-orange">GAMES</span> YOU ACTUALLY WANT TO PLAY.
                </motion.h3>
              </div>
            </div>
          </div>

          {/* Right Column: Image and Context */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-12 pb-8">
            
            {/* Dynamic Parallax Image */}
            <div className="w-full aspect-[3/4] bg-emerald-100 relative overflow-hidden rounded-3xl group shadow-lg border border-emerald-200/60">
              <motion.div 
                className="absolute -top-[15%] -bottom-[15%] left-0 right-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                style={{ y: imgY, backgroundImage: "url('/about.webp')" }}
              />
            </div>

            <div className="flex flex-col gap-8">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-brand-navy">
                We create hands-on games and simulations that make solving big, real-world challenges genuinely fun and engaging.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
                Instead of just talking about the future, we let you play it. By combining game design with urban planning, policy, and engineering, we create hands-on experiences that let citizens, students, and leaders test ideas before they become reality.
              </p>

              <div 
                className="p-7 sm:p-8 bg-gradient-to-br from-[#FFF5EC] to-[#FFEFE6] border-2 border-[#C2410C] rounded-[24px] mt-2 sm:mt-4 transition-transform hover:-translate-y-0.5"
                style={{ boxShadow: "8px 8px 0px #C2410C" }}
              >
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-brand-orange text-white inline-block mb-3 shadow-xs">
                  THE POWER OF PLAY
                </span>
                <p className="italic font-serif text-lg sm:text-xl md:text-2xl mb-3 text-slate-800 font-medium leading-snug">
                  &ldquo;Play is a way of asking better questions, exploring possibilities, and discovering what could be.&rdquo;
                </p>
                <footer className="font-mono text-xs sm:text-sm font-bold tracking-wider uppercase text-brand-orange">
                  — Bharat Play
                </footer>
              </div>
            </div>
            
          </div>
          
        </div>

        {/* FOUNDING LEADERSHIP — THE PEOPLE BEHIND THE PLAY */}
        <div id="founding-leadership" className="mt-20 md:mt-32 pt-16 md:pt-24 border-t border-emerald-200/60">
          <div className="max-w-2xl mb-12 md:mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#C2410C] text-white font-mono text-xs font-bold uppercase tracking-wider mb-2">
              FOUNDING LEADERSHIP
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-brand-navy">
              THE PEOPLE BEHIND THE PLAY
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Dr. Balaji Kalluri Profile (Navy Blue Outline & Shadow) */}
            <div 
              className="lg:col-span-7 bg-white border-2 border-[#0C2444] p-8 md:p-12 rounded-[26px] transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "10px 10px 0px #0C2444" }}
            >
              <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mb-8">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-brand-orange shadow-md shrink-0 bg-brand-navy relative flex items-center justify-center">
                  <img 
                    src="/founder.webp" 
                    alt="Dr. Balaji Kalluri, PhD" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center scale-[1.32] transition-transform duration-300"
                  />
                </div>
                <div>
                  <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-brand-orange block mb-1.5">
                    FOUNDER & SYSTEMS ARCHITECT
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-brand-navy mb-2">
                    DR. BALAJI KALLURI, PhD
                  </h3>
                  <p className="font-mono text-xs md:text-sm font-semibold text-brand-gray uppercase tracking-wider">
                    SYSTEMS ENGINEER · URBAN INNOVATOR · EDUCATOR
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-base md:text-lg font-medium leading-relaxed">
                <p>
                  Dr. Balaji Kalluri is a systems engineer and urban innovator by training, social worker, and educator.
                </p>
                <p>
                  His work focuses on navigating complex socio-technical challenges involving climate change, technological disruption, and rapid urbanisation across the Global South.
                </p>
                <p>
                  Through KUDOS at FLAME University and now Bharat Play Innovations, he has pioneered the use of tabletop simulation and purposeful play as serious pedagogical instruments for public agency and institutional capacity.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-emerald-100 flex flex-wrap items-center justify-between gap-4">
                <a 
                  href="https://www.linkedin.com/in/dr-balaji-kalluri-phd-a95a4931/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white px-6 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm group"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>CONNECT ON LINKEDIN</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <span className="font-mono text-xs text-brand-gray font-semibold">
                  LEAD SYSTEMS ARCHITECT
                </span>
              </div>
            </div>

            {/* Core Collective & Collaborators Note */}
            <div 
              className="lg:col-span-5 bg-white border-2 border-[#12352B] p-8 md:p-12 rounded-[26px] transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "10px 10px 0px #12352B" }}
            >
              <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-brand-green block mb-3">
                COLLECTIVE & PARTNERSHIPS
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-brand-navy mb-4">
                AN INTERDISCIPLINARY ECOSYSTEM
              </h3>
              <p className="text-slate-700 text-base md:text-lg font-medium leading-relaxed mb-6">
                Bharat Play collaborates with a curated network of game designers, urbanists, educators, systems engineers, and university faculty across India.
              </p>
              <div className="space-y-3.5 font-mono text-xs md:text-sm text-brand-navy font-semibold pt-4 border-t border-emerald-100">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Academic Partnerships (FLAME, IIT BHU, GIPE)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Game Design & Industry Collaborators</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Civic & Environmental Organisations</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-emerald-100">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-xs md:text-sm font-mono font-bold uppercase tracking-widest text-white shadow-sm transition-all"
                >
                  COLLABORATE WITH US &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* AWARDS & RECOGNITION — HONORS & GLOBAL MERIT */}
        <div id="awards-recognition" className="mt-20 md:mt-28 pt-16 md:pt-20 border-t border-emerald-200/60">
          <div className="max-w-3xl mb-10 md:mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#C2410C] text-white font-mono text-xs font-bold uppercase tracking-wider mb-2">
              HONORS &amp; GLOBAL MERIT
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-brand-navy leading-none">
              AWARDS &amp; <span className="text-brand-orange">RECOGNITION.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {AWARDS_DATA.map((award, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-[22px] border-2 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  borderColor: award.color,
                  boxShadow: `6px 6px 0px ${award.color}`,
                }}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider ${award.badgeBg}`}>
                      {award.year} · {award.location}
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${award.color}15`, color: award.color }}
                    >
                      <Award className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-brand-navy leading-snug group-hover:text-brand-orange transition-colors mb-3">
                    {award.title}
                  </h3>
                </div>

                <div className="pt-3.5 border-t border-slate-100 flex items-center gap-2">
                  <Landmark className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  <span className="font-mono text-xs font-bold text-slate-700 uppercase tracking-wide truncate">
                    {award.organization}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
