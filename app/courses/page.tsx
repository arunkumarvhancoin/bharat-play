/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Play,
  X,
  MessageCircle,
} from "lucide-react";

interface StudentProject {
  id: string;
  youtubeId: string;
  youtubeUrl: string;
  title: string;
  studentDesigners: string;
  institution: string;
  topic: string;
  category: string;
  format: string;
  description: string;
  thumbnail: string;
  badgeColor: string;
}

const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: "wayanad-landslide-monopoly",
    youtubeId: "ZHTU8zSmOS0",
    youtubeUrl: "https://youtu.be/ZHTU8zSmOS0",
    title: "Wayanad Landslide Monopoly",
    studentDesigners: "Riddhi, Siyonee & Samaira",
    institution: "FLAME University, Pune",
    topic: "Landslides & Policy",
    category: "DISASTER MITIGATION",
    format: "Tabletop Boardgame",
    description:
      "A strategic tabletop boardgame designed for policymakers, municipal authorities, and district administrators to simulate land-use zoning, slope destabilization triggers, and emergency coordination in mountainous terrain.",
    thumbnail: "https://i.ytimg.com/vi/ZHTU8zSmOS0/hqdefault.jpg",
    badgeColor: "bg-[#15803D] text-white",
  },
  {
    id: "the-valley-project",
    youtubeId: "Sx6S6GclXSw",
    youtubeUrl: "https://youtu.be/Sx6S6GclXSw",
    title: "The Valley Project",
    studentDesigners: "Veera, Bhavya, Deshna",
    institution: "FLAME University, Pune",
    topic: "Valley Ecology",
    category: "ENVIRONMENTAL LEADERSHIP",
    format: "Tabletop Boardgame",
    description:
      "An interactive educational boardgame targeting educators and higher education institutions (HEIs). Players manage ecological watersheds, deforestation tipping points, and community disaster preparedness.",
    thumbnail: "https://i.ytimg.com/vi/Sx6S6GclXSw/hqdefault.jpg",
    badgeColor: "bg-[#0C2444] text-white",
  },
  {
    id: "slidewise",
    youtubeId: "47g-ZMYZR9E",
    youtubeUrl: "https://youtu.be/47g-ZMYZR9E",
    title: "Slidewise",
    studentDesigners: "Mahi Agarwal, Indira Shinde, & Tvisha Sharma",
    institution: "FLAME University, Pune",
    topic: "Slope Stability",
    category: "HAZARD SIMULATION",
    format: "Tabletop Boardgame",
    description:
      "An educational simulation boardgame for schools and colleges demonstrating slope dynamics, unseasonal cloudbursts, and rapid community evacuation protocols during catastrophic landslides.",
    thumbnail: "https://i.ytimg.com/vi/47g-ZMYZR9E/hqdefault.jpg",
    badgeColor: "bg-[#C2410C] text-white",
  },
  {
    id: "flooded-futures",
    youtubeId: "KSGUtA8a9Fk",
    youtubeUrl: "https://youtu.be/KSGUtA8a9Fk",
    title: "Flooded Futures",
    studentDesigners: "Samika, Akrati, and Khushi",
    institution: "High School Cohort, Pune",
    topic: "Urban Flooding",
    category: "CIVIC SIMULATION",
    format: "Role-Play Simulation",
    description:
      "A tactile physical simulation role-play boardgame targeted at Grade 10 students across Pune district schools, educating and inspiring youth to participate in urban flood mitigation and stormwater management.",
    thumbnail: "https://i.ytimg.com/vi/KSGUtA8a9Fk/hqdefault.jpg",
    badgeColor: "bg-[#0C2444] text-white",
  },
  {
    id: "pune-above-water",
    youtubeId: "vwWBp6E-PCo",
    youtubeUrl: "https://youtu.be/vwWBp6E-PCo",
    title: "Pune Above Water",
    studentDesigners: "Harshita, Ramaa, and Shravani",
    institution: "High School Cohort, Pune",
    topic: "Civic Hydrology",
    category: "DIGITAL SIMULATION",
    format: "Digital Computer Game",
    description:
      "An immersive digital educational computer game targeted at Grade 10 students across Pune district. Players interactively manage stormwater runoffs, riverbed encroachments, and municipal flood defense trade-offs.",
    thumbnail: "https://i.ytimg.com/vi/vwWBp6E-PCo/hqdefault.jpg",
    badgeColor: "bg-[#15803D] text-white",
  },
  {
    id: "code-red",
    youtubeId: "o0Q74sPWIc4",
    youtubeUrl: "https://youtu.be/o0Q74sPWIc4",
    title: "Code Red",
    studentDesigners: "Amairah Jain, Naina Puri, and Pravir Singh",
    institution: "High School Cohort, Pune",
    topic: "Crisis Response",
    category: "CRISIS COORDINATION",
    format: "Tabletop Boardgame",
    description:
      "A tabletop physical crisis simulation boardgame designed for Grade 9 students in Pune district. Equips youth with critical decision-making, triage protocols, and multi-team collaboration during civic emergencies.",
    thumbnail: "https://i.ytimg.com/vi/o0Q74sPWIc4/hqdefault.jpg",
    badgeColor: "bg-[#C2410C] text-white",
  },
];

const COURSES_DATA = [
  {
    id: "environmental-leadership",
    title: "Environmental Leadership",
    summary:
      "An interdisciplinary course empowering future leaders to navigate ecological dilemmas, resource metabolism, and green transition trade-offs through research-backed tabletop simulations.",
  },
  {
    id: "disaster-preparedness",
    title: "Disaster Preparedness & Risk Management",
    summary:
      "Move beyond dry disaster textbooks. Learners simulate real-world crisis conditions — coordinating flood defenses, earthquake evacuations, and emergency resource allocation under fog-of-war conditions.",
  },
  {
    id: "internet-of-things",
    title: "Internet-of-Things (IoT)",
    summary:
      "A hands-on systems course deconstructing the connected world. Students explore edge intelligence, networked telemetry protocols, and critical infrastructure cybersecurity using gamified sandboxes.",
  },
  {
    id: "urban-futures",
    title: "Urban Futures",
    summary:
      "Explore the operational and spatial realities of 21st-century cities. Using City Runners and Prospera, students step into the shoes of commissioners, town planners, and citizen collectives.",
  },
];

const INSTITUTIONAL_BENCHMARKS = [
  {
    name: "FLAME University",
    type: "Liberal Education & Systems Studios",
    detail: "Accredited environmental & public policy courses deploying Bharat Play serious game pedagogy.",
  },
  {
    name: "IITs (IIT Madras, IIT Kharagpur)",
    type: "Engineering & Change Management",
    detail: "Simulations for municipal administrators at IITM and stakeholder workshops at IITKGP.",
  },
  {
    name: "ETH Zurich & DTU Denmark",
    type: "Systems Safety & RiskLab",
    detail: "Benchmarked against European experimental safety engineering and cyber-physical risk models.",
  },
  {
    name: "NUS (National University of Singapore)",
    type: "Urban Systems & Public Leadership",
    detail: "Curricular paradigms drawn from Asia's leading public systems research institute.",
  },
  {
    name: "IIHS Bengaluru",
    type: "Urban Settlements & Governance",
    detail: "Graduate-level urban governance trade-off simulations and participatory workshops.",
  },
];

export default function CoursesPage() {
  const [selectedMedia, setSelectedMedia] = useState<StudentProject | null>(null);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-slate-800 pt-28 pb-28 selection:bg-orange-500 selection:text-white">
      {/* Decorative Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-orange-100/50 via-amber-50/30 to-transparent rounded-full blur-3xl opacity-80" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ============================================================== */}
        {/* TOP BREADCRUMB & BACK BUTTON                                   */}
        {/* ============================================================== */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-amber-200/60 font-mono text-xs uppercase tracking-wider text-slate-500 mb-8">
          <div className="flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              HOME
            </Link>
            <span className="text-amber-300">/</span>
            <Link href="/programs" className="hover:text-orange-600 transition-colors">
              PROGRAMS
            </Link>
            <span className="text-amber-300">/</span>
            <span className="text-orange-600 font-bold">COURSES ACADEMY</span>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-amber-200/80 text-xs font-bold transition-all shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO HOME</span>
          </Link>
        </div>

        {/* ============================================================== */}
        {/* HERO: PLAY-BASED INTERDISCIPLINARY COURSES                     */}
        {/* ============================================================== */}
        <section className="mb-12 sm:mb-16 pb-8 sm:pb-10 border-b border-gray-200">
          <div className="flex flex-wrap items-center gap-2 mb-3.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C2410C] text-white text-xs font-bold tracking-wide">
              <GraduationCap className="w-3.5 h-3.5 text-white" />
              <span>BHARAT PLAY LEARNING ACADEMY</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#15803D] text-white text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>Undergraduate &amp; Graduate Cohorts</span>
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-brand-navy leading-[1.05] mb-4">
            PLAY-BASED <span className="text-brand-orange">INTERDISCIPLINARY</span> COURSES.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-3xl mb-6">
            We offer unique, simulation-driven academic courses for undergraduate and graduate students across <strong>Policy, Humanities &amp; Social Sciences, Engineering &amp; Technology, Business &amp; Entrepreneurship, Art, Architecture, and Design</strong>.
          </p>

          {/* 5 Disciplines Badges Strip */}
          <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px] font-bold uppercase">
            <span className="px-3 py-1 rounded-full bg-white text-slate-800 border border-slate-200/80 shadow-2xs">
              🏛️ Public Policy
            </span>
            <span className="px-3 py-1 rounded-full bg-white text-slate-800 border border-slate-200/80 shadow-2xs">
              📚 Humanities &amp; Social Sciences
            </span>
            <span className="px-3 py-1 rounded-full bg-white text-slate-800 border border-slate-200/80 shadow-2xs">
              ⚙️ Engineering &amp; Tech
            </span>
            <span className="px-3 py-1 rounded-full bg-white text-slate-800 border border-slate-200/80 shadow-2xs">
              💼 Business &amp; Enterprise
            </span>
            <span className="px-3 py-1 rounded-full bg-white text-slate-800 border border-slate-200/80 shadow-2xs">
              📐 Art, Architecture &amp; Design
            </span>
          </div>
        </section>

        {/* ============================================================== */}
        {/* THE 4 CORE COURSES OFFERED                                      */}
        {/* ============================================================== */}
        <section className="mb-16">
          <div className="max-w-2xl mb-8">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#C2410C] text-white font-mono text-xs font-bold uppercase tracking-wider mb-2">
              ACADEMIC OFFERINGS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-brand-navy leading-none mb-2">
              OUR FOUR CORE COURSE VERTICALS
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Every course integrates tactile tabletop models, participatory simulations, and structured systems debriefs.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {COURSES_DATA.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-slate-200/90 border-l-[6px] border-l-[#C2410C] rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                  <div className="flex-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight leading-snug mb-2">
                      {course.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-3xl">
                      {course.summary}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <a
                      href={`https://wa.me/917397468732?text=${encodeURIComponent(
                        `Hi Bharat Play! I would like to inquire about the course '${course.title}'.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#C2410C] hover:bg-[#a3360a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs text-center"
                    >
                      <span>Inquire Course</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* FACULTY & MASTER INSTRUCTOR CREDIBILITY                        */}
        {/* ============================================================== */}
        <section
          className="bg-white rounded-[26px] border-2 border-[#0C2444] p-6 sm:p-10 mb-16 relative overflow-hidden"
          style={{ boxShadow: "10px 10px 0px #0C2444" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Master Instructor Spotlight */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#0C2444] text-white font-mono text-xs font-bold uppercase tracking-wider mb-3">
                  PEDAGOGICAL LEADERSHIP
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-brand-navy mb-2">
                  TAUGHT BY MASTER INSTRUCTOR
                </h3>
                <h4 className="font-display text-xl font-bold uppercase text-brand-orange mb-1">
                  Dr. Balaji Kalluri, PhD
                </h4>
                <p className="font-mono text-xs text-slate-500 uppercase font-semibold mb-4">
                  Systems Architect · Urban Innovator · Top-100 Design Educator (IISc CPDM)
                </p>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium mb-4">
                  All courses are anchored by Dr. Balaji Kalluri, former faculty at FLAME University and alumnus of National University of Singapore and DTU Denmark. His research in serious games is recognized globally by Games for Change (USA), UNESCO MGIEP, and the Urban Studies Foundation (UK).
                </p>
              </div>

              {/* Verified Stat Box */}
              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 text-xs text-[#0C2444] space-y-1.5">
                <span className="font-bold block uppercase tracking-wider font-mono text-[11px]">
                  🎓 Master Instructor Credibility:
                </span>
                <p className="text-slate-600 leading-snug">
                  Over the past years, students and learners under Dr. Kalluri&apos;s guidance have successfully designed and rapid-prototyped several gamified simulation tools across complex socio-technical frontiers.
                </p>
              </div>
            </div>

            {/* Right: Guest Instructors & Institutional Network */}
            <div className="lg:col-span-7 bg-[#FAF8F5] border-2 border-[#12352B]/40 rounded-2xl p-6 sm:p-7">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-800 block mb-2">
                GLOBAL GUEST INSTRUCTOR NETWORK
              </span>
              <h4 className="font-display text-xl font-bold uppercase text-brand-navy mb-3">
                Interdisciplinary Faculty &amp; Industry Practitioners
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Courses are accompanied by distinguished guest instructors, practitioners, and researchers from leading domestic and global institutions:
              </p>

              {/* Guest Institutions Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                {[
                  "IIT Madras (IITM)",
                  "IIT Kanpur (IITK)",
                  "IIT Kharagpur (IITKGP)",
                  "NUS Singapore",
                  "DTU Denmark",
                  "Iowa State University",
                  "FLAME University",
                  "CEPT University",
                  "IISc Bangalore",
                ].map((inst, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-white border border-slate-200 text-center font-mono text-[11px] font-bold text-slate-800 shadow-2xs"
                  >
                    {inst}
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 leading-snug flex items-center gap-2.5">
                <span className="text-lg">🤝</span>
                <span>
                  <strong>Co-facilitated with Public Sector &amp; Industry:</strong> Alongside academic scholars, sessions host public administrators from municipal bodies and industry practitioners from energy, smart infrastructure, and civic technology.
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* STUDENT RAPID-PROTOTYPED SIMULATIONS SHOWCASE                  */}
        {/* ============================================================== */}
        <section className="mb-16">
          <div className="max-w-3xl mb-8">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#15803D] text-white font-mono text-xs font-bold uppercase tracking-wider mb-2">
              LEARNER SHOWCASE &amp; RAPID PROTOTYPING
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-brand-navy leading-none mb-2">
              STUDENT-DESIGNED GAMIFIED SIMULATIONS
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Rather than writing passive term papers, learners across our course cohorts translate complex systemic phenomena into playable, balanced tabletop simulation tools.
            </p>
          </div>

          {/* 6 Student Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STUDENT_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="bg-white border-2 border-slate-200 hover:border-[#C2410C] rounded-[22px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xs group cursor-pointer"
                onClick={() => setSelectedMedia(proj)}
              >
                <div>
                  {/* Project Video Thumbnail with Play Overlay */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 border-b border-slate-100">
                    <img
                      src={proj.thumbnail}
                      alt={proj.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />

                    {/* Centered Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 flex items-center justify-center transition-colors">
                      <div className="w-12 h-12 rounded-full bg-[#C2410C] group-hover:scale-110 text-white flex items-center justify-center shadow-lg transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-white" />
                      </div>
                    </div>
                  </div>

                  {/* Body: Just the Name */}
                  <div className="p-5">
                    <h4 className="font-display text-base sm:text-lg font-bold uppercase text-brand-navy group-hover:text-[#C2410C] transition-colors leading-snug">
                      {proj.title}
                    </h4>

                    <p className="text-xs text-slate-500 font-medium mt-1">
                      By {proj.studentDesigners}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2" onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    onClick={() => setSelectedMedia(proj)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0C2444] hover:bg-[#13335c] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-2xs"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>Watch Video</span>
                  </button>

                  <a
                    href={proj.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold font-mono text-[#C2410C] hover:underline inline-flex items-center gap-1"
                  >
                    <span>YOUTUBE</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* INSTITUTIONAL BENCHMARKING (RELATED COURSES WORLDWIDE)          */}
        {/* ============================================================== */}
        <section
          className="bg-white rounded-[26px] border-2 border-[#12352B] p-6 sm:p-9 mb-16 relative overflow-hidden"
          style={{ boxShadow: "8px 8px 0px #12352B" }}
        >
          <div className="max-w-2xl mb-6">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-800 block mb-1.5">
              GLOBAL BENCHMARKING &amp; PEDAGOGY
            </span>
            <h3 className="font-display text-2xl font-bold uppercase text-brand-navy">
              HOW OUR COURSES CONNECT TO LEADING INSTITUTIONS
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Our curriculum and tabletop sandboxes are benchmarked against experiential systems design courses offered across premier international universities:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INSTITUTIONAL_BENCHMARKS.map((bench, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#FAFDF9] border border-emerald-200/80 flex flex-col justify-between"
              >
                <div>
                  <span className="font-display text-sm font-bold text-brand-navy block uppercase mb-0.5">
                    {bench.name}
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase text-emerald-800 block mb-2">
                    {bench.type}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {bench.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* FINAL CALL TO ACTION: BRING A COURSE TO YOUR CAMPUS             */}
        {/* ============================================================== */}
        <section className="text-center bg-[#0C2444] text-white rounded-[26px] p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-300 block mb-2">
              ACADEMIC PARTNERSHIPS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
              BRING A PLAY-BASED COURSE TO YOUR UNIVERSITY
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-8 font-normal">
              Interested in offering Environmental Leadership, Disaster Preparedness, Internet-of-Things, or Urban Futures as a credit course, elective, or intensive semester studio at your college or institution?
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/917397468732?text=${encodeURIComponent(
                  "Hi Dr. Balaji Kalluri and Bharat Play! We are interested in introducing play-based interdisciplinary courses at our college/university."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#15803D] hover:bg-[#166534] text-white font-bold text-xs uppercase tracking-wider shadow-xs transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>ENQUIRE NOW</span>
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>REQUEST COMPLETE SYLLABUS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* ============================================================== */}
      {/* STUDENT PROJECT MEDIA PREVIEW MODAL                             */}
      {/* ============================================================== */}
      {selectedMedia && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm" data-lenis-prevent>
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl border-2 border-[#0C2444] overflow-hidden shadow-2xl"
            style={{ boxShadow: "12px 12px 0px #0C2444" }}
          >
            {/* YouTube Embed Player */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedMedia.youtubeId}?autoplay=1&rel=0`}
                title={selectedMedia.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                type="button"
                onClick={() => setSelectedMedia(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg z-10"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-7">
              <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-brand-navy mb-1 leading-snug">
                {selectedMedia.title}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold mb-5">
                <GraduationCap className="w-4 h-4 text-[#0C2444] shrink-0" />
                <span>By {selectedMedia.studentDesigners}</span>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={selectedMedia.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#C2410C] hover:bg-[#a3360a] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open on YouTube</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedMedia(null)}
                  className="px-4 py-2 rounded-xl border-2 border-slate-200 hover:bg-slate-50 text-slate-700 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  Close Player
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
