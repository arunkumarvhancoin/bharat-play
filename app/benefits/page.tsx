"use client";

import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, CheckCircle2, Brain, 
  Compass, Scale, Plus, Minus, Target, GraduationCap, Briefcase
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const GAME_SPECS = [
  { label: "PLAYERS", value: "6 Players", detail: "Cooperative Tabletop Roleplay" },
  { label: "PLAY DURATION", value: "90–100 Mins", detail: "Fast-Paced Strategy Rounds" },
  { label: "CORE CHALLENGE", value: "Urban Livability", detail: "Solving Fast-Growing Indian Megacities" },
  { label: "GAME TYPE", value: "Strategy-Based", detail: "Democratizes Public Administration" },
];

const BOX_CONTENTS = [
  {
    id: "01",
    name: "Central Playing Board",
    count: "1 Board",
    tag: "BOARD & SPATIAL MAP",
    desc: "A spatial city map representing interconnected wards, infrastructure nodes, and neighborhood zones of a fast-growing megacity."
  },
  {
    id: "02",
    name: "Crisis Marker",
    count: "1 Marker",
    tag: "TRACKING",
    desc: "Tracks the city's macro vulnerability threshold and escalating urban distress levels across rounds."
  },
  {
    id: "03",
    name: "Livability Marker",
    count: "1 Marker",
    tag: "TRACKING",
    desc: "Monitors the city's overall livability index, public trust, and progress toward global benchmarks."
  },
  {
    id: "04",
    name: "Crisis Cards",
    count: "96 Cards",
    tag: "CARDS DECK",
    desc: "Covering hyper-localized urban challenges across 4 key sectors: Health, Water, Transport, and Housing."
  },
  {
    id: "05",
    name: "Emergency Cards",
    count: "6 Cards",
    tag: "CARDS DECK",
    desc: "Introduces high-stakes unexpected events, rapid natural deluges, and emergency systemic shocks."
  },
  {
    id: "06",
    name: "Action Cards",
    count: "Action Deck",
    tag: "CARDS DECK",
    desc: "Tactical policy interventions, resource allocations, and coalition tools for planning and implementing solutions."
  },
  {
    id: "07",
    name: "Role-Play Cards",
    count: "6 Roles",
    tag: "CARDS DECK",
    desc: "6 asymmetric roles: Mayor, MLA, Citizen/NGO, Commissioner, Contractor, and Disaster Management."
  },
  {
    id: "08",
    name: "Role Pawns",
    count: "6 Unique Pawns",
    tag: "PAWNS & TOKENS",
    desc: "Distinct tactile player pawns corresponding to each of the 6 civic roles navigating the city wards."
  },
  {
    id: "09",
    name: "Infrastructure Pawns",
    count: "4 Pawns",
    tag: "PAWNS & TOKENS",
    desc: "Core city infrastructure systems built to unlock long-term urban stability and global livability."
  },
  {
    id: "10",
    name: "Crisis Coins",
    count: "100 Coins",
    tag: "PAWNS & TOKENS",
    desc: "Divided into 4 critical urban categories: Health, Water, Transport, and Population."
  },
  {
    id: "11",
    name: "Data Center Coin",
    count: "1 Special Coin",
    tag: "SPECIAL TOKEN",
    desc: "Special token unlocking advanced digital governance, analytics, and intelligent city monitoring."
  },
  {
    id: "12",
    name: "Spin Wheel",
    count: "1 Wheel",
    tag: "GAMEPLAY AID",
    desc: "Dynamic fortune wheel introducing unpredictable budget fluctuations, economic shifts, and policy windfalls."
  },
  {
    id: "13",
    name: "Playbook",
    count: "1 Playbook",
    tag: "RULEBOOK & GUIDE",
    desc: "Comprehensive manual explaining rules, objectives, facilitation prompts, and structured civic debriefs."
  }
];

const CORE_BENEFITS = [
  {
    num: "01",
    title: "EMPATHY & SYSTEMS THINKING",
    tagline: "Better cities are created by millions of coordinated actions, not one leader alone",
    icon: Brain,
    color: "text-brand-orange",
    borderColor: "border-brand-orange",
    bgAccent: "bg-brand-orange/5",
    desc: "City Runners deconstructs the myth of the 'lone savior'. By placing 6 players in interdependent roles, it helps participants viscerally understand how micro-choices ripple across wards. Players discover that an Indian megacity's global standing is the emergent result of millions of coordinated daily civic actions.",
    elements: "6 Roleplay Cards · Interconnected Ward Board",
    outcomes: [
      "Dissolves political polarization by exposing shared structural bottlenecks",
      "Connects everyday citizen behavior directly to city-wide livability indices",
      "Develops deep empathy for the conflicting pressures faced by different social strata"
    ]
  },
  {
    num: "02",
    title: "CONSENSUS MANAGEMENT & NEGOTIATION",
    tagline: "Practice cooperative decision-making under high-friction constraints",
    icon: Scale,
    color: "text-brand-green",
    borderColor: "border-brand-green",
    bgAccent: "bg-brand-green/5",
    desc: "In City Runners, no single player possesses the unilateral budget, cards, or votes to pass resolutions alone. Players must practice consensus management, negotiate trade-offs, and form cross-ward coalitions to balance short-term citizen demands against long-term capital investments.",
    elements: "Player Cards (96) · Emergency Cards (6)",
    outcomes: [
      "Hones negotiation and consensus-building without toxic zero-sum stalemates",
      "Trains multi-actor alignment across public, private, and civic domains",
      "Demonstrates why collective bargaining and public hearings are vital for durable policy"
    ]
  },
  {
    num: "03",
    title: "STRATEGIC FORESIGHTS FOR LIVABILITY",
    tagline: "Anticipate challenges and balance urgent crises against long-term vision",
    icon: Target,
    color: "text-brand-navy",
    borderColor: "border-brand-navy",
    bgAccent: "bg-brand-navy/5",
    desc: "The gameplay loop forces players to navigate a classic municipal dilemma: firefighting 96 Ward-level Crises to meet immediate citizen expectations versus investing in 4 major Urban Infrastructures required to secure the city's sustainable future and global standing.",
    elements: "4 Urban Infrastructures · 96 Ward Crises Deck",
    outcomes: [
      "Builds foresight capacity to anticipate downstream urban bottlenecks before they emerge",
      "Prevents deferred maintenance traps where cosmetic fixes cause catastrophic infrastructure failure",
      "Aligns immediate local actions with long-term Sustainable Development Goals (SDGs)"
    ]
  }
];



const FAQS = [
  {
    q: "What is the core objective of City Runners?",
    a: "City Runners is centered around solving one of the most complex global challenges: 'Urban Livability'. In a 90–100 minute cooperative strategy game, 6 players step into the challenges of a fast-growing Indian megacity—balancing sustainable development, economic stability, and citizen expectations against a tight city budget."
  },
  {
    q: "Why does the game say 'Better cities are shaped by a million coordinated actions'?",
    a: "Indian cities consistently rank low in global livability not due to a lack of vision or master plans, but because of rapid urbanization, lack of inclusive planning tools, poor participatory governance, and social polarization. City Runners demonstrates that improving our cities is not the government's responsibility alone—it requires informed, cooperative action from every citizen."
  },
  {
    q: "How many players can participate, and how long does it take?",
    a: "Each game set accommodates exactly 6 players and runs for 90 to 100 minutes. In university classrooms, workshops, and civic hackathons, multiple game boards are deployed simultaneously, allowing cohorts of 18, 36, or 60+ participants to play across parallel city boards."
  },
  {
    q: "What physical components come inside the CityRunner game box?",
    a: "The box includes: (1) Board & Tracking: A central playing board representing the city, a crisis marker, and a livability marker to monitor urban health; (2) Cards: 96 Crisis cards covering urban issues across Health, Water, Transport, and Housing; 6 Emergency cards for unexpected events; Action cards for planning and solutions; 6 Role-play cards (Mayor, MLA, Citizen/NGO, Commissioner, Contractor, and Disaster Management); (3) Pawns & Tokens: 6 unique role pawns, 4 infrastructure pawns for core city systems, 100 crisis coins across 4 categories (Health, Water, Transport, Population), and a special Data Center coin; (4) Gameplay Aids: A dynamic Spin Wheel for budget fluctuations and an official Playbook explaining rules and objectives."
  },
  {
    q: "How does the gameplay loop progress?",
    a: "The game progresses through a repetitive cooperative loop: players experience urban challenges across different wards, make cooperative decisions, resolve short-term crises with Crises Coins, and allocate the city budget to build 4 long-term Urban Infrastructures that elevate the city's global livability standing."
  },
  {
    q: "Where are City Runners playtests currently being held?",
    a: "City Runners playtest sessions are held every Sunday from 2:30 PM to 5:30 PM across 3 active hubs in Chennai: 1. North Chennai (Kolathur & MKB Nagar), 2. South Chennai (Besant Nagar & Chrompet), and 3. Central Chennai (Anna Nagar & Nerkundram). You can register to join any of the weekly cohorts on our Events page."
  }
];

export default function BenefitsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-brand-offwhite text-brand-navy pt-32 pb-32 selection:bg-brand-orange selection:text-white">
      
      {/* HEADER BREADCRUMB */}
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-16">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-orange font-mono text-xs uppercase tracking-widest hover:text-brand-navy transition-colors">
          <ArrowLeft className="w-4 h-4" /> BACK TO HOME
        </Link>
      </div>

      {/* SECTION 01 — HERO */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-8">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-xs font-bold tracking-widest text-brand-orange uppercase mb-6 flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-brand-orange" /> BHARAT PLAY / STRATEGY BOARD GAME
            </motion.h4>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
              className="font-display text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.85] mb-8"
            >
              CITY RUNNERS: <br/> 
              <span className="text-brand-orange">&lsquo;MILLION COORDINATED ACTIONS.&rsquo;</span>
            </motion.h1>
          </div>
          
          <div className="lg:col-span-4 flex flex-col justify-end lg:pt-28">
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl font-medium leading-relaxed text-brand-gray"
            >
              A 6-player strategy-based cooperative board game that democratizes urban governance and public administration to all citizens intuitively through fun and engaging gameplay.
            </motion.p>
          </div>
        </div>

        {/* METRICS ROW */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 mt-16 border-t border-gray-200"
        >
          {GAME_SPECS.map((spec, sIdx) => (
            <div key={sIdx} className="flex flex-col">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-gray mb-1">{spec.label}</span>
              <span className="font-display text-4xl md:text-5xl font-bold text-brand-navy tracking-tighter mb-1">{spec.value}</span>
              <span className="text-xs text-brand-gray font-medium">{spec.detail}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 02 — THE CORE PHILOSOPHY / WHY PLAY CITY RUNNERS */}
      <section className="bg-brand-navy text-white py-28 px-4 md:px-6 mb-32 rounded-sm mx-4 md:mx-6">
        <div className="max-w-[1300px] mx-auto w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-4 block">
                THE URBAN LIVABILITY CHALLENGE
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[0.95] mb-8">
                WHY DO INDIAN CITIES RANK LOW IN LIVABILITY?
              </h2>
              <p className="text-xl md:text-2xl text-white/85 font-medium leading-relaxed mb-8">
                Not due to a lack of vision or sustainable developmental plans, but rather due to rapid urbanization, lack of inclusive planning tools, poor participatory governance frameworks, and polarization in society.
              </p>
              
              <div className="border-l-4 border-brand-orange pl-6 py-2 mb-8 bg-white/5 rounded-r">
                <p className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-2">
                  &ldquo;IMPROVING URBAN LIVABILITY IS NOT THE GOVERNMENT&rsquo;S RESPONSIBILITY ALONE.&rdquo;
                </p>
                <p className="text-sm font-mono uppercase tracking-widest text-white/70">
                  It requires informed, cooperative action from every citizen.
                </p>
              </div>

              <p className="text-base md:text-lg text-white/70 leading-relaxed font-medium">
                Play City Runners to understand the complexity, empathize with the challenges in governing Indian megacities, educate responsible actions, and inspire active citizenship to steer the global positioning of our Indian cities in the years to come.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-square w-full max-w-[440px] rounded-sm overflow-hidden border border-white/20 shadow-2xl group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/cr.png" 
                  alt="City Runners Board Game Box & Artifact" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-orange block mb-1">
                    OFFICIAL BOARD GAME SPECIFICATION
                  </span>
                  <p className="text-xs text-white/90 font-medium">
                    6 Players · 90-100 Minutes · Cooperative Roleplay for Urban Livability
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 03 — THE 3 CORE BENEFITS OF CITY RUNNERS */}
      <section className="bg-white py-36 px-4 md:px-6 border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto w-full">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 pb-12 border-b border-gray-200">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-brand-orange mb-4 block">
                LEARNING OBJECTIVES & VALUE PROPOSITION
              </span>
              <h3 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-brand-navy uppercase leading-[0.85]">
                CORE SYSTEMIC <span className="text-brand-orange">BENEFITS.</span>
              </h3>
            </div>
            <p className="max-w-lg text-brand-gray text-lg md:text-xl font-medium leading-relaxed">
              Designed to build empathy, systems thinking, and strategic foresights—helping players understand how everyday choices shape a city&apos;s global standing.
            </p>
          </div>

          {/* Large Editorial Benefits Stack */}
          <div className="flex flex-col gap-12">
            {CORE_BENEFITS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="border border-gray-200 p-8 md:p-14 lg:p-16 bg-brand-offwhite rounded-sm hover:shadow-2xl hover:border-brand-navy/30 transition-all group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    
                    {/* Left Column: Number, Title & Main Narrative */}
                    <div className="lg:col-span-7 flex flex-col justify-start">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="font-mono text-base md:text-lg font-bold tracking-widest text-brand-orange px-3 py-1 bg-brand-orange/10 rounded">
                          {item.num}
                        </span>
                        <div className={`w-12 h-12 rounded-full ${item.bgAccent} flex items-center justify-center ${item.color}`}>
                          <IconComp className="w-6 h-6" />
                        </div>
                      </div>

                      <h4 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-brand-navy mb-4 leading-[0.95] group-hover:text-brand-orange transition-colors">
                        {item.title}
                      </h4>

                      <p className={`font-mono text-sm md:text-base font-bold uppercase tracking-wider mb-6 ${item.color}`}>
                        &ldquo;{item.tagline}&rdquo;
                      </p>
                      
                      <p className="text-brand-navy/85 text-lg md:text-xl leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>

                    {/* Right Column: Driven by Elements & Observed Outcomes */}
                    <div className="lg:col-span-5 flex flex-col gap-6 bg-white p-8 md:p-10 rounded-sm border border-gray-200/90 shadow-sm">
                      
                      <div>
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gray block mb-2">
                          DRIVEN BY GAME ELEMENTS:
                        </span>
                        <span className="font-mono text-sm md:text-base font-bold text-brand-navy bg-brand-offwhite px-4 py-2.5 rounded-sm inline-block border border-gray-200">
                          {item.elements}
                        </span>
                      </div>

                      <div className="pt-6 border-t border-gray-200">
                        <span className="font-mono text-xs uppercase font-bold tracking-widest text-brand-navy block mb-4">
                          OBSERVED LEARNING OUTCOMES:
                        </span>
                        <div className="flex flex-col gap-3.5">
                          {item.outcomes.map((outcome, oIdx) => (
                            <div key={oIdx} className="flex items-start gap-3">
                              <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${item.color}`} />
                              <span className="text-sm md:text-base text-brand-navy font-semibold leading-relaxed">
                                {outcome}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 04 — GAME ELEMENTS (BOX ARCHITECTURE) */}
      <section className="py-36 px-4 md:px-6 bg-brand-navy text-white relative">
        <div className="max-w-[1400px] mx-auto w-full">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 pb-12 border-b border-white/15">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-brand-orange mb-4 block">
                PHYSICAL HARDWARE & TABLETOP ARTIFACTS
              </span>
              <h3 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white uppercase leading-[0.85]">
                INSIDE THE <span className="text-brand-green">GAME BOX.</span>
              </h3>
            </div>
            <p className="max-w-lg text-white/75 text-lg md:text-xl font-medium leading-relaxed text-justify">
              Every copy of City Runners comes engineered with high-craft tactile physical components designed for immersive tabletop roleplay and complex public administration simulation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BOX_CONTENTS.map((el, idx) => {
              const isThirteenth = idx === 12; // 13th item (Playbook)
              return (
                <div 
                  key={el.id}
                  className={`bg-white/5 border border-white/15 hover:border-brand-orange/70 hover:bg-white/[0.08] p-8 md:p-10 rounded-sm flex flex-col justify-between transition-all duration-300 group shadow-lg ${
                    isThirteenth ? "lg:col-start-2 sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                      <span className="font-mono text-sm font-bold text-white/50">{el.id}</span>
                      <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded bg-brand-orange text-white shadow-sm">
                        {el.count}
                      </span>
                    </div>

                    <span className="font-mono text-xs uppercase font-bold tracking-wider text-brand-green block mb-2">
                      {el.tag}
                    </span>

                    <h4 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-4 group-hover:text-brand-orange transition-colors">
                      {el.name}
                    </h4>

                    <p className="text-base text-white/80 font-medium leading-relaxed">
                      {el.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 05 — THE GAMEPLAY LOOP */}
      <section className="bg-white py-32 px-4 md:px-6 border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto w-full">
          
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-brand-orange mb-3 block">
              TABLETOP MECHANICS
            </span>
            <h3 className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-brand-navy uppercase leading-[0.9] mb-6">
              THE COOPERATIVE GAMEPLAY LOOP.
            </h3>
            <p className="text-brand-gray text-base md:text-lg font-medium">
              The gameplay progresses through a repetitive loop wherein 6 players experience urban challenges across wards, balance municipal coffers, and build long-term civic infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            <div className="border border-gray-200 bg-brand-offwhite p-8 rounded-sm flex flex-col">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">STEP 01</span>
              <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy mb-4">EXPERIENCE WARD CRISES</h4>
              <p className="text-sm text-brand-gray font-medium leading-relaxed">
                Players confront localized distress from the 96 Ward-level Crises deck, placing Crises Coins across neglected neighborhoods on the board.
              </p>
            </div>

            <div className="border border-gray-200 bg-brand-offwhite p-8 rounded-sm flex flex-col">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-green mb-3">STEP 02</span>
              <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy mb-4">COOPERATIVE DECISIONS</h4>
              <p className="text-sm text-brand-gray font-medium leading-relaxed">
                Players consult the City Budget Ledger Book, negotiate roleplay priorities, and debate tactical choices using their Player action cards.
              </p>
            </div>

            <div className="border border-gray-200 bg-brand-offwhite p-8 rounded-sm flex flex-col">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-navy mb-3">STEP 03</span>
              <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy mb-4">RESOLVE SHORT-TERM NEEDS</h4>
              <p className="text-sm text-brand-gray font-medium leading-relaxed">
                Clear Crises Coins, stabilize ward livability, respond to sudden Emergency cards, and spin the Fortune Wheel for unpredictable macro events.
              </p>
            </div>

            <div className="border border-gray-200 bg-brand-offwhite p-8 rounded-sm flex flex-col">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">STEP 04</span>
              <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy mb-4">BUILD 4 INFRASTRUCTURES</h4>
              <p className="text-sm text-brand-gray font-medium leading-relaxed">
                Pool capital to construct the 4 Urban Infrastructures—cementing the megacity&apos;s global standing, resilience, and long-term livability.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 06 — TARGET AUDIENCE */}
      <section className="py-36 px-4 md:px-6 bg-brand-offwhite border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto w-full">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 pb-12 border-b border-gray-200">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-brand-orange mb-4 block">
                AUDIENCE PROFILES & INSTITUTIONAL ADOPTION
              </span>
              <h3 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-brand-navy uppercase leading-[0.85]">
                WHO IS CITY RUNNERS <span className="text-brand-orange">FOR?</span>
              </h3>
            </div>
            <p className="max-w-lg text-brand-gray text-lg md:text-xl font-medium leading-relaxed">
              Bridging classroom pedagogy, public administrative training, and grassroots civic action through purpose-built simulation mechanics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Primary Audience Card */}
            <div className="bg-white border-2 border-brand-orange/30 p-10 md:p-14 rounded-sm flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-brand-orange transition-all duration-300 relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-full pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded bg-brand-orange text-white shadow-sm">
                    PRIMARY AUDIENCE
                  </span>
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                </div>

                <h4 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                  EDUCATORS & LEARNERS
                </h4>

                <div className="font-mono text-sm md:text-base font-bold text-brand-orange mb-6 flex items-center gap-2">
                  <span>Schools, Colleges, Universities, & Aspiring Civil Servants</span>
                </div>

                <p className="text-brand-navy/80 text-lg md:text-xl font-medium leading-relaxed mb-10">
                  Replaces lecture slides with cooperative tabletop roleplay. Students in public policy, urban planning, civil engineering, architecture, and political science understand municipal trade-offs in 90 minutes with extraordinary conceptual retention.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200 mt-auto bg-brand-offwhite p-6 rounded-sm border border-gray-200/80">
                <span className="font-mono text-xs uppercase font-bold tracking-widest text-brand-gray block mb-1.5">
                  CORE APPLICATION:
                </span>
                <span className="font-display text-xl md:text-2xl font-bold uppercase text-brand-navy">
                  Higher Education & UPSC Aspirants
                </span>
              </div>
            </div>

            {/* Secondary Audience Card */}
            <div className="bg-white border-2 border-brand-green/30 p-10 md:p-14 rounded-sm flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-brand-green transition-all duration-300 relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-bl-full pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded bg-brand-green text-white shadow-sm">
                    SECONDARY AUDIENCE
                  </span>
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                    <Briefcase className="w-6 h-6" />
                  </div>
                </div>

                <h4 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-brand-navy mb-3 group-hover:text-brand-green transition-colors">
                  MULTIDISCIPLINARY PROFESSIONALS & CITIZENS
                </h4>

                <div className="font-mono text-sm md:text-base font-bold text-brand-green mb-6 flex items-center gap-2">
                  <span>Urban Planners, Civic Tech, Think Tanks, NGOs, & Everyday Citizens</span>
                </div>

                <p className="text-brand-navy/80 text-lg md:text-xl font-medium leading-relaxed mb-10">
                  Helps cross-functional teams break through professional silos. Planners, social workers, developers, and resident associations discover a shared vocabulary and collaborative frameworks to tackle city-level livability challenges.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200 mt-auto bg-brand-offwhite p-6 rounded-sm border border-gray-200/80">
                <span className="font-mono text-xs uppercase font-bold tracking-widest text-brand-gray block mb-1.5">
                  CORE APPLICATION:
                </span>
                <span className="font-display text-xl md:text-2xl font-bold uppercase text-brand-navy">
                  Civic Leaders & Practitioners
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 07 — FAQS */}
      <section className="bg-white py-32 px-4 md:px-6 border-y border-gray-200">
        <div className="max-w-[1000px] mx-auto w-full">
          
          <div className="text-center mb-20">
            <h2 className="font-mono text-xs font-bold tracking-widest uppercase text-brand-gray mb-4">
              GAME SPECIFICATIONS & SESSIONS
            </h2>
            <h3 className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-brand-navy uppercase leading-[0.9]">
              FREQUENTLY ASKED.
            </h3>
          </div>

          <div className="flex flex-col border-t border-gray-200">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border-b border-gray-200">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-8 text-left flex items-center justify-between gap-6 hover:text-brand-orange transition-colors"
                  >
                    <span className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight text-brand-navy">
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
                      {isOpen ? <Minus className="w-4 h-4 text-brand-orange" /> : <Plus className="w-4 h-4 text-brand-navy" />}
                    </div>
                  </button>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pb-8 text-brand-gray text-base md:text-lg font-medium leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 08 — FINAL CTA */}
      <section className="pt-32 px-4 md:px-6">
        <div className="max-w-[1000px] mx-auto w-full text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-4 block">
            DEMOCRATIZING URBAN GOVERNANCE
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.9] mb-8">
            MAKE INDIAN CITIES <br/> <span className="text-brand-green">LIVABLE.</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium text-brand-gray max-w-2xl mx-auto mb-12">
            Better cities are shaped by a &lsquo;Million Coordinated Actions&rsquo;. Play City Runners with your university, cohort, or civic group.
          </p>

          <div className="flex justify-center items-center">
            <a 
              href="https://wa.me/916381531026?text=Hi%20Bharat%20Play%2C%20I%20would%20like%20to%20register%20for%20a%20City%20Runners%20session." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-orange text-white px-10 py-5 rounded-sm font-mono text-xs font-bold uppercase tracking-widest hover:bg-brand-navy transition-colors shadow-lg group"
            >
              REGISTER NOW 
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
