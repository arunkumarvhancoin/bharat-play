/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  MapPin, 
  Compass, 
  Quote, 
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-offwhite text-brand-navy pt-32 selection:bg-brand-orange selection:text-white">
      
      {/* 01. HERO — WHO IS BHARAT PLAY? */}
      <section className="px-4 md:px-6 pt-12 md:pt-20 mb-32">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-20">
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-xs md:text-sm font-bold tracking-widest text-brand-orange uppercase mb-6 flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-brand-orange" />
                ABOUT BHARAT PLAY INNOVATIONS
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
                className="font-display text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.88] text-balance mb-8"
              >
                WE PLAY TO <br className="hidden md:block"/>
                <span className="text-brand-orange">UNDERSTAND</span> <br/>
                THE WORLD.
              </motion.h1>

              {/* Public Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex flex-wrap items-center gap-3 bg-brand-navy text-white px-5 py-3 rounded-sm font-mono text-xs md:text-sm font-bold uppercase tracking-widest mb-8 border border-gray-800"
              >
                <span className="text-brand-green">LIFE IS A GAME. PLAY IT.</span>
                <span className="text-gray-500">·</span>
                <span className="text-brand-orange">PLANET IS OUR HOME. SAVE IT.</span>
              </motion.div>
            </div>
            
            <div className="lg:col-span-4 flex flex-col justify-end lg:pt-28">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-brand-navy"
              >
                Bharat Play Innovations is a creative, multidisciplinary innovation studio headquartered in Chennai, focused on designing and deploying purposeful play interventions to catalyse systemic change across sectors.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="font-mono text-xs md:text-sm font-bold text-brand-gray uppercase tracking-widest flex flex-col gap-2.5 border-l-2 border-brand-green pl-4"
              >
                <span className="text-brand-navy">HEADQUARTERS: CHENNAI, INDIA</span>
                <span>FOUNDED: 2026 (EXPANDED FROM KUDOS 2023)</span>
                <span>PRACTICE: PURPOSEFUL PLAY & SYSTEMS INTERVENTIONS</span>
              </motion.div>
            </div>
          </div>

          
          {/* Hero Banner Visual — using about1.jpeg */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full aspect-video md:aspect-[21/9] bg-brand-navy relative overflow-hidden rounded-sm shadow-xl"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: "url('/about1.webp')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block mb-1">
                  FIELD EXPERIENCES · PURPOSEFUL PLAY
                </span>
                <p className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight">
                  From classroom simulations to live city gaming
                </p>
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-white/80">
                BHARAT PLAY INNOVATIONS
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02. FROM KUDOS → BHARAT PLAY (AUTHENTIC EVOLUTION) */}
      <section className="px-4 md:px-6 py-32 bg-white border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-brand-orange block mb-3">
                THE GENESIS & JOURNEY
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-brand-navy leading-[0.95] mb-6">
                FROM KUDOS <br/>
                <span className="text-brand-green">TO BHARAT PLAY</span>
              </h2>
              <p className="text-brand-gray text-base md:text-lg font-medium leading-relaxed mb-8">
                Bharat Play didn&apos;t appear overnight. It is the natural evolution of three years of rigorous academic research, participatory urban design, and classroom testing that began at FLAME University in Pune.
              </p>
              <div className="p-6 bg-brand-offwhite border border-gray-200 rounded-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gray block mb-2">
                  THE TRANSITION PRINCIPLE
                </span>
                <p className="font-mono text-sm text-brand-navy font-semibold leading-relaxed">
                  Expanding the 21st-century urban-innovation studio into a broader, nationwide purposeful-play practice.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-8 flex flex-col">
              <div className="border-l-2 border-brand-orange/40 pl-6 md:pl-12 relative flex flex-col gap-16 py-4">
                
                {/* Milestone 1: 2023 KUDOS Begins */}
                <div className="relative group">
                  <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-brand-navy group-hover:border-brand-orange transition-colors z-10" />
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest px-3 py-1 bg-brand-navy text-white rounded">
                      2023 · INCEPTION
                    </span>
                    <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-wider text-brand-orange">
                      FLAME UNIVERSITY, PUNE
                    </span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-brand-navy mb-4">
                    KUDOS BEGINS
                  </h3>
                  <p className="text-base md:text-lg font-medium text-brand-gray leading-relaxed mb-6">
                    KUDOS was established in 2023 as an open-innovation studio associated with FLAME University, Pune. It operated as a 21st-century urban innovation studio focused on future-city transition pathways in the Global South through multidisciplinary participatory design, applied research, and educational services.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    {[
                      "Urban Innovation",
                      "Future Cities",
                      "Systems Thinking",
                      "Participatory Design",
                      "Applied Research",
                      "Experiential Learning"
                    ].map((item, idx) => (
                      <span key={idx} className="font-mono text-xs md:text-sm font-semibold text-brand-navy bg-brand-offwhite px-3.5 py-2 rounded border border-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Milestone 2: Urban Futures & Gamified Tools */}
                <div className="relative group">
                  <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-brand-green group-hover:border-brand-orange transition-colors z-10" />
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest px-3 py-1 bg-brand-green text-white rounded">
                      2024–2025 · DISCOVERY
                    </span>
                    <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-wider text-brand-gray">
                      LABORATORY & FIELD PROTOTYPES
                    </span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-brand-navy mb-4">
                    PURPOSEFUL PLAY AS A SYSTEMIC TOOL
                  </h3>
                  <p className="text-base md:text-lg font-medium text-brand-gray leading-relaxed mb-6">
                    In classrooms and community workshops, something profound became clear: games were not merely pedagogical aids. They were uniquely capable of letting people experience complexity, negotiate trade-offs, and comprehend multi-stakeholder municipal crises without fear of failure.
                  </p>
                  <blockquote className="border-l-4 border-brand-green pl-4 py-2 font-mono text-sm text-brand-navy font-semibold italic bg-brand-offwhite rounded-r">
                    &ldquo;Play is an essential component of lifelong learning — fostering intrinsic motivation, systems literacy, and relevance in an AI-dominant world.&rdquo;
                  </blockquote>
                </div>

                {/* Milestone 3: 2026 Bharat Play Innovations */}
                <div className="relative group">
                  <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-6 h-6 rounded-full bg-brand-orange border-4 border-white shadow-md z-10" />
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest px-3 py-1 bg-brand-orange text-white rounded">
                      2026 · EXPANSION
                    </span>
                    <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-wider text-brand-navy">
                      CHENNAI HEADQUARTERS
                    </span>
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-brand-navy mb-4">
                    BHARAT PLAY INNOVATIONS
                  </h3>
                  <p className="text-base md:text-lg font-medium text-brand-navy leading-relaxed mb-6">
                    Bharat Play expands that philosophy beyond the earlier university studio into a broader, sovereign purposeful-play practice. Headquartered in Chennai, the organisation designs serious games, runs dedicated learning cohorts, operates a physical Experience Center, and builds systemic interventions across India.
                  </p>
                  <div className="p-5 bg-brand-navy text-white rounded-sm font-mono text-sm space-y-2">
                    <div className="text-brand-orange font-bold">2026 PLATFORM SCOPE:</div>
                    <div className="text-gray-300">Serious Games · Experiential Learning · Urban Systems · Public Experience Center · Civic Dialogue</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 03. WHY PLAY? (PLAY IS MORE THAN A GAME) */}
      <section className="px-4 md:px-6 py-36 bg-brand-navy text-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          
          <div className="max-w-4xl mb-24">
            <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-brand-orange block mb-4">
              OUR CORE CONVICTION
            </span>
            <h2 className="font-display text-6xl md:text-8xl lg:text-[110px] font-bold uppercase tracking-tighter leading-[0.88] mb-10">
              PLAY IS MORE <br/> <span className="text-brand-green">THAN A GAME.</span>
            </h2>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-gray-300 mb-12">
              We use play as a way to learn, explore and make sense of complexity. A game creates a space where people can experiment, make decisions, encounter consequences, see different perspectives and discuss possibilities — without having to solve the real world first.
            </p>
            
            <div className="p-8 md:p-12 bg-white/5 border border-white/10 rounded-sm">
              <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-brand-orange block mb-2">
                THE BHARAT PLAY AXIOM
              </span>
              <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
                THE PLAY IS PURPOSEFUL. <br/>
                <span className="text-brand-green">THE PROBLEM IS REAL.</span>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white/5 border border-white/10 rounded-sm">
              <div className="w-10 h-10 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center font-mono font-bold text-sm mb-6">
                01
              </div>
              <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-white mb-3">
                SAFE SPACE FOR DARING CHOICES
              </h4>
              <p className="text-base text-gray-300 leading-relaxed font-medium">
                Real-world municipal, climate, and institutional crises cannot afford trial and error. Games grant citizens and decision-makers license to fail, recalibrate, and discover unseen synergies.
              </p>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-sm">
              <div className="w-10 h-10 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center font-mono font-bold text-sm mb-6">
                02
              </div>
              <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-white mb-3">
                LIVING WITH CONSEQUENCES
              </h4>
              <p className="text-base text-gray-300 leading-relaxed font-medium">
                Traditional lectures tell you what tradeoffs exist; gameplay forces you to live with the budget cuts, citizen protests, or monsoon deluges triggered by your choices.
              </p>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-sm">
              <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center font-mono font-bold text-sm mb-6">
                03
              </div>
              <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-white mb-3">
                STAYING RELEVANT IN AN AI ERA
              </h4>
              <p className="text-base text-gray-300 leading-relaxed font-medium">
                In an era dominated by automated information, human agency, moral negotiation, systemic intuition, and collaborative consensus become the decisive 21st-century skills.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 04. WHAT DOES BHARAT PLAY ACTUALLY WORK ON? (EDITORIAL LIST) */}
      <section className="px-4 md:px-6 py-32 bg-brand-offwhite">
        <div className="max-w-[1400px] mx-auto w-full">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-gray-200">
            <div>
              <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-brand-orange block mb-2">
                PRACTICE & INTERVENTIONS
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-brand-navy">
                WHAT WE WORK ON
              </h2>
            </div>
            <p className="max-w-md text-brand-gray text-base md:text-lg font-medium">
              A tight, multidisciplinary suite of capabilities publicly deployed across universities, civic bodies, and public forums.
            </p>
          </div>

        <div className="border-t border-gray-300 divide-y divide-gray-200">
          {[
            {
              id: "01",
              title: "SERIOUS GAMES",
              desc: "Games designed around real-world problems, learning, and systemic decision-making.",
              tag: "GAMES & DESIGN"
            },
            {
              id: "02",
              title: "EXPERIENTIAL LEARNING",
              desc: "Learning through active participation, live negotiation, and direct doing rather than passive instruction.",
              tag: "PEDAGOGY"
            },
            {
              id: "03",
              title: "URBAN FUTURES",
              desc: "Exploring how cities work, how they evolve, and how citizens participate in shaping them.",
              tag: "CITIES & SYSTEMS"
            },
            {
              id: "04",
              title: "SYSTEMS THINKING",
              desc: "Helping people comprehend relationships, hidden feedback loops, interdependencies, and consequences.",
              tag: "COMPLEXITY"
            },
            {
              id: "05",
              title: "CLIMATE & RESILIENCE",
              desc: "Using playful and experiential approaches to explore environmental crises and disaster preparedness.",
              tag: "ENVIRONMENT"
            },
            {
              id: "06",
              title: "FUTURE SKILLS",
              desc: "Developing human capabilities needed to navigate increasingly complex social and technological landscapes.",
              tag: "CAPACITY"
            },
            {
              id: "07",
              title: "SOCIAL INTERVENTIONS",
              desc: "Deploying purposeful play as a powerful vehicle for public engagement, civic dialogue, and societal participation.",
              tag: "CIVIC AGENCY"
            },
            {
              id: "08",
              title: "RESEARCH & INNOVATION",
              desc: "Experimenting, prototyping, field testing, and developing novel play tools, simulations, and methodologies.",
              tag: "R&D LAB"
            }
          ].map((area) => (
            <div 
              key={area.id}
              className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start md:items-center group hover:bg-white hover:px-6 md:hover:px-8 transition-all duration-300 rounded-sm cursor-default"
            >
              <div className="md:col-span-1 font-mono text-sm md:text-base font-bold text-brand-orange">
                {area.id}
              </div>

              <div className="md:col-span-4 flex flex-col gap-1">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gray group-hover:text-brand-orange transition-colors">
                  {area.tag}
                </span>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-brand-navy group-hover:text-brand-orange group-hover:translate-x-1 transition-all duration-300">
                  {area.title}
                </h3>
              </div>

              <div className="md:col-span-7">
                <p className="text-base md:text-lg text-brand-gray font-medium leading-relaxed">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        </div>
      </section>

      {/* 05. THEIR ACTUAL APPROACH (FROM QUESTION TO PLAY) */}
      <section className="px-4 md:px-6 py-32 bg-white border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto w-full">
          
          <div className="mb-20">
            <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-brand-green block mb-2">
              THE METHODOLOGY
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-brand-navy mb-4">
              FROM QUESTION <span className="text-brand-orange">TO PLAY</span>
            </h2>
            <p className="text-brand-gray text-base md:text-lg max-w-2xl font-medium">
              How we convert thorny socio-technical problems into tangible, playable, and reflective human experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {[
              {
                step: "01",
                name: "UNDERSTAND",
                desc: "Start with the real problem, field context, and the diverse stakeholders involved."
              },
              {
                step: "02",
                name: "FRAME",
                desc: "Identify the critical systemic friction point or challenge worth exploring."
              },
              {
                step: "03",
                name: "DESIGN",
                desc: "Turn the challenge into a balanced, playable simulation with authentic incentives."
              },
              {
                step: "04",
                name: "PLAY",
                desc: "Let people experience the problem directly, make decisions, and discover trade-offs."
              },
              {
                step: "05",
                name: "REFLECT",
                desc: "Structured debrief: discuss what happened, what was learned, and what perspectives changed."
              },
              {
                step: "06",
                name: "ACT",
                desc: "Translate simulation breakthroughs and mutual empathy into actionable real-world outcomes."
              }
            ].map((step, idx) => (
              <div 
                key={step.step}
                className="bg-brand-offwhite border border-gray-200 p-6 rounded-sm flex flex-col justify-between hover:bg-white hover:shadow-md transition-all group"
              >
                <div>
                  <div className="font-mono text-xs md:text-sm font-bold text-brand-orange mb-4 flex items-center justify-between">
                    <span>STEP {step.step}</span>
                    {idx < 5 && <ArrowRight className="w-4 h-4 text-gray-300 hidden lg:block group-hover:text-brand-orange transition-colors" />}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                    {step.name}
                  </h3>
                  <p className="text-sm md:text-base text-brand-gray leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 06. THE EXPERIENCE CENTER (PHYSICAL PRESENCE) */}
      <section className="px-4 md:px-6 py-32 bg-brand-offwhite">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-brand-orange block mb-3">
                PHYSICAL SPACE IN CHENNAI
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-brand-navy leading-[0.95] mb-6">
                THE BHARAT PLAY <br/>
                <span className="text-brand-green">EXPERIENCE CENTER</span>
              </h2>
              <p className="text-brand-gray text-base md:text-lg font-medium leading-relaxed mb-8">
                A dedicated physical space where people come together, play purposefully, and explore complex systemic ideas through shared tabletop experiences.
              </p>
              
              <div className="p-6 bg-brand-offwhite border border-gray-200 rounded-sm mb-8 space-y-4">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                  <div>
                    <span className="font-display text-lg font-bold uppercase tracking-tight text-brand-navy block">
                      Chennai Experience Center
                    </span>
                    <span className="text-sm md:text-base text-brand-gray font-medium">
                      Open to the public all seven days, 10:00 AM – 9:00 PM (by prior appointment).
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3.5 pt-3.5 border-t border-gray-200">
                  <Compass className="w-5 h-5 text-brand-green shrink-0 mt-1" />
                  <div>
                    <span className="font-display text-lg font-bold uppercase tracking-tight text-brand-navy block">
                      Not a Board-Game Café
                    </span>
                    <span className="text-sm md:text-base text-brand-gray font-medium">
                      Specifically designed around purposeful play, facilitated game sessions, and understanding cities as living systems.
                    </span>
                  </div>
                </div>
              </div>

              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-brand-navy text-white px-8 py-5 rounded-sm font-mono text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-brand-orange transition-colors"
              >
                VISIT THE EXPERIENCE CENTER <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-8 bg-brand-navy text-white rounded-sm flex flex-col justify-between min-h-[280px]">
                <div>
                  <span className="font-mono text-xs md:text-sm font-bold text-brand-orange uppercase tracking-widest block mb-4">
                    PILLAR 01
                  </span>
                  <h3 className="font-display text-3xl font-bold uppercase tracking-tight mb-2">
                    PLAY
                  </h3>
                  <p className="text-sm font-mono uppercase text-gray-300 font-semibold">
                    Families · Friends · Colleagues
                  </p>
                </div>
                <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed pt-4 border-t border-white/10">
                  Shared play without screens, bringing people into direct face-to-face tactical collaboration.
                </p>
              </div>

              <div className="p-8 bg-brand-orange text-white rounded-sm flex flex-col justify-between min-h-[280px]">
                <div>
                  <span className="font-mono text-xs md:text-sm font-bold text-white/90 uppercase tracking-widest block mb-4">
                    PILLAR 02
                  </span>
                  <h3 className="font-display text-3xl font-bold uppercase tracking-tight mb-2">
                    EXPLORE
                  </h3>
                  <p className="text-sm font-mono uppercase text-white font-semibold">
                    Games · Systems · Ideas
                  </p>
                </div>
                <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed pt-4 border-t border-white/20">
                  Deconstructing transport networks, municipal budgets, and climate vulnerabilities through gameplay.
                </p>
              </div>

              <div className="p-8 bg-brand-green text-white rounded-sm flex flex-col justify-between min-h-[280px]">
                <div>
                  <span className="font-mono text-xs md:text-sm font-bold text-brand-navy uppercase tracking-widest block mb-4">
                    PILLAR 03
                  </span>
                  <h3 className="font-display text-3xl font-bold uppercase tracking-tight mb-2 text-brand-navy">
                    CONNECT
                  </h3>
                  <p className="text-sm font-mono uppercase text-brand-navy font-semibold">
                    People · Perspectives · Possibilities
                  </p>
                </div>
                <p className="text-sm md:text-base text-brand-navy/90 font-medium leading-relaxed pt-4 border-t border-brand-navy/15">
                  Facilitated debriefs where participants reflect on what their gameplay choices reveal about society.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 08. PEOPLE BEHIND THE PLAY — with founder.png */}
      <section className="px-4 md:px-6 py-32 bg-brand-offwhite">
        <div className="max-w-[1400px] mx-auto w-full">
          
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-brand-orange block mb-2">
              FOUNDING LEADERSHIP
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-brand-navy">
              THE PEOPLE BEHIND THE PLAY
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Dr. Balaji Kalluri Profile with founder.png */}
            <div className="lg:col-span-7 bg-white border border-gray-200 p-8 md:p-12 rounded-sm shadow-sm border-l-4 border-l-brand-orange">
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
                  <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-brand-navy mb-2">
                    DR. BALAJI KALLURI, PhD
                  </h3>
                  <p className="font-mono text-xs md:text-sm font-semibold text-brand-gray uppercase tracking-wider">
                    SYSTEMS ENGINEER · URBAN INNOVATOR · EDUCATOR
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-brand-gray text-base md:text-lg font-medium leading-relaxed">
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
            </div>

            {/* Core Collective & Collaborators Note */}
            <div className="lg:col-span-5 bg-white border border-gray-200 p-8 md:p-12 rounded-sm shadow-sm">
              <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-brand-green block mb-3">
                COLLECTIVE & PARTNERSHIPS
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-brand-navy mb-4">
                AN INTERDISCIPLINARY ECOSYSTEM
              </h3>
              <p className="text-brand-gray text-base md:text-lg font-medium leading-relaxed mb-6">
                Bharat Play collaborates with a curated network of game designers, urbanists, educators, systems engineers, and university faculty across India.
              </p>
              <div className="space-y-3.5 font-mono text-xs md:text-sm text-brand-navy font-semibold pt-4 border-t border-gray-100">
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
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-mono font-bold uppercase tracking-widest text-brand-navy hover:text-brand-orange transition-colors"
                >
                  COLLABORATE WITH US &rarr;
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 09. THE KUDOS ARCHIVE */}
      <section className="px-4 md:px-6 py-32 bg-white border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto w-full">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 pb-6 border-b border-gray-200">
            <div>
              <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-brand-orange block mb-2">
                HERITAGE & PROVENANCE (2023–2025)
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-brand-navy leading-[0.9]">
                BEFORE BHARAT PLAY <br/>
                <span className="text-brand-gray">THE KUDOS ARCHIVE</span>
              </h2>
            </div>
            <p className="text-base md:text-lg font-medium text-brand-gray max-w-md">
              KUDOS was the foundational studio at FLAME University that pioneered creative gamified tools to blur disciplinary boundaries and help reimagine future cities that are sustainable, just, and resilient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "URBAN INNOVATION",
                subtitle: "Future City Transition Pathways",
                desc: "Early research exploring 21st-century transition pathways for fast-growing megacities in the Global South through participatory design.",
                year: "2023"
              },
              {
                title: "DISASTER RESILIENCE",
                subtitle: "Simulation Course Pedagogy",
                desc: "Collaborative university course designing tabletop disaster mitigation and risk reduction game mechanics for environmental studies.",
                year: "2023–24"
              },
              {
                title: "GAMIFIED TOOLS",
                subtitle: "Classroom Prototypes",
                desc: "Prototypes designed to bridge public policy, engineering, and civic education, testing how systems models can be played directly.",
                year: "2024"
              },
              {
                title: "STUDENT COHORTS",
                subtitle: "Applied Field Labs",
                desc: "Undergraduate and postgraduate cohorts building their own game prototypes and testing public responses across campuses.",
                year: "2024–25"
              }
            ].map((archive, idx) => (
              <div 
                key={idx} 
                className="bg-brand-offwhite border border-gray-200 p-7 rounded-sm flex flex-col justify-between hover:bg-white hover:border-brand-navy transition-all group"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-white text-brand-navy border border-gray-200">
                      ARCHIVE
                    </span>
                    <span className="font-mono text-xs md:text-sm font-bold text-brand-orange">{archive.year}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy mb-1 group-hover:text-brand-orange transition-colors">
                    {archive.title}
                  </h3>
                  <div className="font-mono text-xs md:text-sm font-semibold text-brand-green uppercase tracking-wider mb-4">
                    {archive.subtitle}
                  </div>
                  <p className="text-sm md:text-base font-medium text-brand-gray leading-relaxed">
                    {archive.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. WHAT PEOPLE SAY AFTER THEY PLAY (TESTIMONIALS / VOICES) */}
      <section className="px-4 md:px-6 py-32 bg-brand-offwhite">
        <div className="max-w-[1400px] mx-auto w-full">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-gray-200">
            <div>
              <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-brand-orange block mb-2">
                VERIFIED PARTICIPANT VOICES
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-brand-navy">
                WHAT PEOPLE SAY AFTER THEY PLAY
              </h2>
            </div>
            <Link 
              href="/testimonials" 
              className="inline-flex items-center gap-2 text-xs md:text-sm font-mono font-bold uppercase tracking-widest text-brand-navy hover:text-brand-orange transition-colors"
            >
              READ ALL STORIES & TESTIMONIALS &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-sm shadow-sm flex flex-col justify-between border-l-4 border-l-brand-orange">
              <div>
                <Quote className="w-8 h-8 text-brand-orange/40 mb-6" />
                <p className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy leading-snug mb-8">
                  &ldquo;The games from the course deserve to reach the stores.&rdquo;
                </p>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <span className="font-display text-base md:text-lg font-bold uppercase tracking-tight text-brand-navy block">
                  Nikhil Gehlot
                </span>
                <span className="text-sm text-brand-gray font-medium">
                  Founder, Toynik · Industry Partner
                </span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-sm shadow-sm flex flex-col justify-between border-l-4 border-l-brand-green">
              <div>
                <Quote className="w-8 h-8 text-brand-green/40 mb-6" />
                <p className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy leading-snug mb-8">
                  &ldquo;I feel as a university, we should further build upon the course on Disaster resilience in the terms to follow.&rdquo;
                </p>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <span className="font-display text-base md:text-lg font-bold uppercase tracking-tight text-brand-navy block">
                  Abhineety Goel
                </span>
                <span className="text-sm text-brand-gray font-medium">
                  Assistant Professor, Env. Studies · Pedagogy
                </span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-sm shadow-sm flex flex-col justify-between border-l-4 border-l-brand-navy">
              <div>
                <Quote className="w-8 h-8 text-brand-navy/40 mb-6" />
                <p className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy leading-snug mb-8">
                  &ldquo;The courses opened my mind and inspired me to become an effective civil servant, especially working to reduce disaster risks.&rdquo;
                </p>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <span className="font-display text-base md:text-lg font-bold uppercase tracking-tight text-brand-navy block">
                  Course Participant
                </span>
                <span className="text-sm text-brand-gray font-medium">
                  City Runners Launch & Field Session Cohort
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 11. FINAL BELIEF & CALL TO ACTION */}
      <section className="px-4 md:px-6 py-36 bg-brand-navy text-white text-center relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto w-full relative z-10">
          
          <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-brand-green mb-6 block">
            OUR CLOSING PHILOSOPHY
          </span>

          <h2 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tighter text-white leading-[0.88] mb-12 text-balance">
            THE WORLD IS COMPLEX. <br/>
            <span className="text-brand-orange">LET&apos;S PLAY</span> WITH IT.
          </h2>

          <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Complex problems don&apos;t always need more complexity. Sometimes they need a different way of seeing.
          </p>

          <div className="font-mono text-sm md:text-base font-bold text-brand-green uppercase tracking-widest mb-16">
            PLAY DIFFERENTLY. THINK BOLDLY. CREATE THE FUTURE.
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              href="/courses" 
              className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-5 rounded-sm font-mono text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-colors"
            >
              EXPLORE OUR PROGRAMMES <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white px-8 py-5 rounded-sm font-mono text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-colors"
            >
              VISIT EXPERIENCE CENTER <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/testimonials" 
              className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-5 rounded-sm font-mono text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-brand-green hover:text-brand-navy hover:border-brand-green transition-colors"
            >
              WATCH FIELD STORIES <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
