"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Trophy } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AWARDS_DATA = [
  {
    year: "2025",
    location: "UK",
    title: "Distinguished Urban Experimental Researcher",
    organization: "Urban Studies Foundation (UK)",
    logo: "/awards/urban-studies-foundation.png",
    color: "#C2410C",
    badgeBg: "bg-[#C2410C] text-white",
  },
  {
    year: "2024",
    location: "India",
    title: "Top-100 Design Educator in India",
    organization: "CPDM · Indian Institute of Science (IISc), Bangalore",
    logo: "/partners/iisc-bengaluru.png",
    color: "#0C2444",
    badgeBg: "bg-[#0C2444] text-white",
  },
  {
    year: "2024",
    location: "USA & India",
    title: "Distinguished Educator & Serious Games Researcher",
    organization: "Games for Change (USA) & UNESCO MGIEP",
    logo: "/partners/games-for-change.png",
    color: "#15803D",
    badgeBg: "bg-[#15803D] text-white",
  },
  {
    year: "2024",
    location: "Singapore",
    title: "Distinguished Alumni & Game Changer",
    organization: "National University of Singapore (NUS)",
    logo: "/awards/nus.png",
    color: "#0C2444",
    badgeBg: "bg-[#0C2444] text-white",
  },
  {
    year: "2023",
    location: "Finland",
    title: "Redefining Education through Creativity",
    organization: "Council for Creative Education (CCE) Finland",
    logo: "/partners/cce_finland.png",
    color: "#C2410C",
    badgeBg: "bg-[#C2410C] text-white",
  },
  {
    year: "2019",
    location: "Denmark",
    title: "Post-Doctoral Research Fellowship",
    organization: "Innovation Fund Denmark",
    logo: "/awards/innovation-fund-denmark.png",
    color: "#15803D",
    badgeBg: "bg-[#15803D] text-white",
  },
];

const PARTNER_INSTITUTIONS = [
  // Row 1 from the poster
  {
    name: "Games for Change",
    fullName: "Games for Change — Global Movement & Non-Profit for Social Impact Games (USA)",
    logo: "/partners/games-for-change.png",
    website: "https://www.gamesforchange.org/",
    category: "Global Alliance",
  },
  {
    name: "Univ. of Cambridge",
    fullName: "University of Cambridge — Global Research & Higher Education (UK)",
    logo: "/partners/university-of-cambridge.png",
    website: "https://www.cam.ac.uk/",
    category: "Academic Institution",
  },
  {
    name: "Newcastle University",
    fullName: "Newcastle University — Global Research & Higher Education (UK)",
    logo: "/partners/newcastle-university.png",
    website: "https://www.ncl.ac.uk/",
    category: "Academic Institution",
  },
  {
    name: "Indian Army",
    fullName: "Indian Army — Corps of Electronics and Mechanical Engineers (EME)",
    logo: "/partners/indian-army.png",
    website: "https://indianarmy.nic.in/",
    category: "Defence Establishment",
  },
  {
    name: "FLAME University",
    fullName: "FLAME University, Pune — Centre for Liberal Education & Systems Studies",
    logo: "/partners/flame.svg",
    website: "https://www.flame.edu.in/",
    category: "Academic Institution",
  },
  {
    name: "CCE Finland",
    fullName: "Council for Creative Education (CCE) Finland — Global Educational Research",
    logo: "/partners/cce_finland.png",
    website: "https://www.ccefinland.org/",
    category: "Global Alliance",
  },
  {
    name: "Smart Building",
    fullName: "Smart Building Collective — Cyber-Physical Spaces & Resilience",
    logo: "/partners/smart-building-collective.png",
    website: "https://smartbuildingcollective.com/",
    category: "Research Collective",
  },
  // Row 2 from the poster
  {
    name: "Janaagraha",
    fullName: "Janaagraha Centre for Citizenship and Democracy, Bengaluru",
    logo: "/partners/janaagraha-official.png",
    website: "https://www.janaagraha.org/",
    category: "Civic & Governance",
  },
  {
    name: "IIHS Bengaluru",
    fullName: "Indian Institute for Human Settlements (IIHS), Bengaluru",
    logo: "/partners/iihs.png",
    website: "https://iihs.co.in/",
    category: "Urban Research Institute",
  },
  {
    name: "Anna University",
    fullName: "Anna University, Chennai — Premier Technical & Engineering University",
    logo: "/partners/anna-university.png",
    website: "https://www.annauniv.edu/",
    category: "Premier University",
  },
  {
    name: "IIT Delhi",
    fullName: "Indian Institute of Technology Delhi",
    logo: "/partners/iit-delhi.png",
    website: "https://home.iitd.ac.in/",
    category: "Premier IIT",
  },
  {
    name: "IIT Madras",
    fullName: "Indian Institute of Technology Madras — School of Sustainability & ICSR",
    logo: "/partners/iit-madras.png",
    website: "https://www.iitm.ac.in/",
    category: "Premier IIT",
  },
  {
    name: "DIAT Pune",
    fullName: "Defence Institute of Advanced Technology (DIAT), Pune (DRDO / MoD)",
    logo: "/partners/diat-pune.png",
    website: "https://diat.ac.in/",
    category: "Defence & Tech",
  },
  {
    name: "IISc Bengaluru",
    fullName: "Indian Institute of Science (IISc), Bangalore — CPDM",
    logo: "/partners/iisc-bengaluru.png",
    website: "https://iisc.ac.in/",
    category: "Premier Research",
  },
  {
    name: "City Atlas",
    fullName: "City Atlas — Global Urban & Climate Systems Initiative (USA)",
    logo: "/partners/city-atlas.png",
    website: "https://thecityatlas.org/",
    category: "Urban & Climate Alliance",
  },
  {
    name: "ASSIST",
    fullName: "Asia Society for Social Improvement and Sustainable Transformation (ASSIST)",
    logo: "/partners/assist.png",
    website: "https://assistasia.org/",
    category: "Social Innovation & DRR",
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

        {/* FOUNDING LEADERSHIP — MEET THE MIND BEHIND BHARAT PLAY */}
        <div id="founding-leadership" className="mt-20 md:mt-32 pt-16 md:pt-24 border-t border-emerald-200/60">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#C2410C] text-white font-mono text-xs font-bold uppercase tracking-wider mb-2">
              FOUNDING LEADERSHIP
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-brand-navy">
              MEET THE MIND BEHIND BHARAT PLAY
            </h2>
          </div>

          {/* Dr. Balaji Kalluri Profile (Full-Width Navy Blue Outline & Shadow) */}
          <div 
            className="w-full bg-white border-2 border-[#0C2444] p-8 md:p-12 lg:p-14 rounded-[28px] transition-all duration-300 hover:-translate-y-0.5"
            style={{ boxShadow: "10px 10px 0px #0C2444" }}
          >
            {/* Header: Photo, Title, and LinkedIn */}
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center justify-between pb-8 border-b border-slate-100">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
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
                    FOUNDER &amp; MANAGING DIRECTOR
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-brand-navy mb-2">
                    DR. BALAJI KALLURI, PhD
                  </h3>
                  <p className="font-mono text-xs md:text-sm font-semibold text-brand-gray uppercase tracking-wider">
                    ENGINEER-TURNED-URBAN FUTURIST · EDUCATOR · SOCIAL INNOVATOR
                  </p>
                </div>
              </div>

              <a 
                href="https://www.linkedin.com/in/dr-balaji-kalluri-phd-a95a4931/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white px-6 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm group shrink-0"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>CONNECT ON LINKEDIN</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Opening Philosophical Question */}
            <div 
              className="p-6 md:p-8 bg-gradient-to-br from-[#FFF5EC] to-[#FFEFE6] border-2 border-[#C2410C] rounded-2xl my-8"
              style={{ boxShadow: "4px 4px 0px #C2410C" }}
            >
              <p className="italic font-serif text-lg sm:text-xl md:text-2xl text-slate-800 font-medium leading-snug">
                &ldquo;What if we could teach leadership, empathy, systems thinking and problem-solving—not just by lecturing about them, but by letting people experience them?&rdquo;
              </p>
              <p className="text-xs sm:text-sm font-mono font-bold text-brand-orange uppercase tracking-wider mt-3">
                That question lies at the heart of what Bharat Play Innovations does.
              </p>
            </div>

            {/* Biographical Narrative in 2 Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-slate-700 text-base md:text-lg font-medium leading-relaxed">
              <div className="space-y-4">
                <p>
                  Meet <strong className="text-brand-navy font-semibold">Dr. Balaji Kalluri</strong>, an engineer-turned-urban futurist, educator and social innovator who works at the intersection of climate, technology, society and urban futures.
                </p>
                <p>
                  Over the past 15 years, across India, Singapore, Denmark and Switzerland, he has worked in diverse fields spanning engineering, building science, climate and risk management, urban innovation and education.
                </p>
                <p>
                  But what makes this educator-turned-entrepreneur&apos;s journey particularly interesting is his belief that thoughtfully designed games can be powerful creative tools for advancing learning and shifting mindsets, and that experiential play can be a transformative pathway to developing future-ready skills, nurturing leadership and catalysing social change.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  He has mentored hundreds of young people and helped create innovative serious games and playful learning experiences that enable learners to move beyond knowing—to thinking, collaborating, empathising, making decisions and inspiring action.
                </p>
                <p>
                  Through his pioneering games and focused workshops he has engaged diverse audiences, ranging from children to public administrators and business leaders from organizations of national and global eminence — IIT Madras, IIT Kharagpur, IIT Kanpur, IIHS Bengaluru, the Indian Army, the University of Cambridge (UK), Newcastle University, CCE Finland, ASSIST Asia, Janaagraha and many others.
                </p>
                <p>
                  Today, Balaji is the Founder and Managing Director of Bharat Play Innovations and leads <span className="text-brand-navy font-semibold">Mission: Play2ProgressIndia</span>, an independent, non-partisan nationwide transformation movement that employs serious games as playful social interventions to develop the next generation of leaders who will guide the transition towards inclusive, sustainable, resilient and livable cities.
                </p>
              </div>
            </div>

            {/* Credentials Pills */}
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                <span className="font-mono text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                  ACADEMIC ALMA MATER
                </span>
                <p className="text-xs sm:text-sm text-slate-700 font-medium">
                  PhD, National University of Singapore · M.E., BITS Pilani · B.E., Anna University
                </p>
              </div>
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200">
                <span className="font-mono text-xs font-bold text-blue-800 uppercase tracking-wider block mb-1">
                  GLOBAL FELLOWSHIPS
                </span>
                <p className="text-xs sm:text-sm text-slate-700 font-medium">
                  ETH Zurich Alumnus · DTU Denmark Fellow · Urban Studies Foundation UK Grantee
                </p>
              </div>
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                <span className="font-mono text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">
                  EDUCATION HONORS
                </span>
                <p className="text-xs sm:text-sm text-slate-700 font-medium">
                  Top-100 Design Educator (IISc CPDM) · CCE Finland Teaching Excellence Award
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GLOBAL & NATIONAL ALLIANCES — INSTITUTIONAL PARTNERS */}
        <div id="institutional-partners" className="mt-20 md:mt-32 pt-16 md:pt-24 border-t border-emerald-200/60">
          <div className="max-w-4xl mb-10 md:mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#15803D] text-white font-mono text-xs font-bold uppercase tracking-wider mb-2">
              GLOBAL &amp; NATIONAL ALLIANCES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-brand-navy">
              INSTITUTIONAL PARTNERS
            </h2>
            <p className="font-mono text-xs md:text-sm font-semibold text-brand-gray uppercase tracking-wider mt-2 mb-4">
              TRUSTED PARTNER INSTITUTIONS WORLDWIDE
            </p>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
              Collaborating with premier universities, global professional bodies, defence establishments, and civic research institutions worldwide to advance serious games, strategic simulations, and systems thinking.
            </p>
          </div>

          {/* Institutional Showcase Container */}
          <div 
            className="bg-white border-2 border-[#12352B] p-6 sm:p-8 md:p-12 rounded-[28px] transition-all duration-300 hover:-translate-y-0.5"
            style={{ boxShadow: "10px 10px 0px #12352B" }}
          >
            {/* Banner Header matching the poster aesthetic */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-emerald-100">
              <div className="inline-flex items-center gap-2.5 bg-[#12352B] text-white px-4 py-2 rounded-full shadow-xs w-fit">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest">
                  TRUSTED BY GLOBAL &amp; NATIONAL INSTITUTIONS
                </span>
              </div>

              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                16 FEATURED INSTITUTIONAL PARTNERS &amp; DEPLOYMENT NETWORKS
              </span>
            </div>

            {/* Logos Grid: 2 cols on mobile, 4 on tablet, 8 on desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 md:gap-4.5">
              {PARTNER_INSTITUTIONS.map((partner) => (
                <a 
                  key={partner.name}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={partner.fullName}
                  className="group/partner bg-white hover:bg-[#F8FCF9] border border-emerald-200/80 hover:border-emerald-600 rounded-2xl p-3.5 sm:p-4 flex flex-col items-center justify-between text-center transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md min-h-[148px] sm:min-h-[164px]"
                >
                  <div className="h-14 sm:h-16 w-full flex items-center justify-center p-1">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={160}
                      height={70}
                      className="max-h-12 sm:max-h-14 w-auto max-w-full object-contain transition-transform duration-300 group-hover/partner:scale-110"
                    />
                  </div>
                  <div className="w-full mt-2 pt-2 border-t border-emerald-100/70">
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-slate-800 group-hover/partner:text-emerald-700 leading-tight block line-clamp-2">
                      {partner.name}
                    </span>
                    <span className="text-[9px] font-mono font-medium text-slate-500 uppercase tracking-tight block mt-0.5 truncate">
                      {partner.category}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Bottom Call to Action */}
            <div className="mt-10 pt-8 border-t border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-display text-lg sm:text-xl font-bold uppercase text-brand-navy">
                  BRING BHARAT PLAY SIMULATIONS TO YOUR INSTITUTION
                </h4>
                <p className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">
                  Customized faculty development, student immersion labs, and executive serious gameplay.
                </p>
              </div>

              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-white shadow-md hover:shadow-lg transition-all shrink-0 hover:translate-x-0.5"
              >
                <span>COLLABORATE WITH US</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* AWARDS & RECOGNITION — HONORS & GLOBAL MERIT */}
        <div id="awards-recognition" className="mt-20 md:mt-28 pt-16 md:pt-20 border-t border-emerald-200/60">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-10 md:mb-12">
            {/* Award Asset Illustration */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 relative group">
              <Image
                src="/awards/award-trophy.svg"
                alt="Awards and Recognition Trophy Asset"
                width={80}
                height={80}
                className="w-full h-full object-contain drop-shadow-[4px_4px_0px_#0C2444] transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C2410C] text-white font-mono text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
                <Trophy className="w-3.5 h-3.5 text-amber-200" />
                <span>HONORS &amp; GLOBAL MERIT</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-brand-navy leading-none">
                AWARDS &amp; <span className="text-brand-orange">RECOGNITION.</span>
              </h2>
            </div>
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
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border"
                      style={{ 
                        backgroundColor: `${award.color}15`, 
                        borderColor: `${award.color}35`,
                        color: award.color 
                      }}
                      title="Honor & Award"
                    >
                      <Trophy className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-brand-navy leading-snug group-hover:text-brand-orange transition-colors mb-3">
                    {award.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="h-12 w-24 sm:w-28 px-2.5 py-1 bg-slate-50/90 border border-slate-200/80 rounded-xl flex items-center justify-center shrink-0 group-hover:border-slate-300 transition-colors">
                    <Image
                      src={award.logo}
                      alt={award.organization}
                      width={100}
                      height={40}
                      className="max-h-8 w-auto max-w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-[11px] sm:text-xs font-bold text-slate-800 uppercase tracking-wide leading-snug line-clamp-2">
                      {award.organization}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
