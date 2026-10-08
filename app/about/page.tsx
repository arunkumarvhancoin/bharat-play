"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutPage() {
  const workRef = useRef(null);
  const { scrollYProgress: workScroll } = useScroll({ target: workRef, offset: ["start center", "end center"] });
  const lineWidth = useTransform(workScroll, [0, 1], ["0%", "100%"]);

  return (
    <main className="min-h-screen bg-brand-offwhite text-brand-navy pt-32 selection:bg-brand-orange selection:text-white">
      
      {/* SECTION 01 — ABOUT HERO */}
      <section className="px-4 md:px-6 pt-12 md:pt-24 mb-40">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-24">
            <div className="lg:col-span-8">
              <motion.h4 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-[10px] md:text-xs font-bold tracking-widest text-brand-gray uppercase mb-8 md:mb-16"
              >
                ABOUT BHARAT PLAY
              </motion.h4>
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
                className="font-display text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.85] text-balance"
              >
                WE PLAY TO <br className="hidden md:block"/>
                <span className="text-brand-orange">UNDERSTAND</span> <br/>
                THE WORLD.
              </motion.h1>
            </div>
            
            <div className="lg:col-span-4 flex flex-col justify-end lg:pt-32">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-2xl font-medium leading-tight mb-12 max-w-md"
              >
                Bharat Play is a multidisciplinary innovation studio using purposeful play, experiential learning and systems thinking to explore complex challenges and create meaningful change.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="font-mono text-[10px] font-bold text-brand-gray uppercase tracking-widest flex flex-col gap-2 border-l-2 border-brand-green pl-4"
              >
                <span>CHENNAI / INDIA</span>
                <span>PURPOSEFUL PLAY</span>
                <span>SYSTEMS / PEOPLE / FUTURES</span>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full aspect-video md:aspect-[21/9] bg-gray-200 relative overflow-hidden rounded-sm"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80')" }}></div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 02 — OUR STORY */}
      <section className="px-4 md:px-6 py-32 bg-white border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter text-brand-navy sticky top-32">
                FROM KUDOS <br/>
                <span className="text-brand-gray">TO BHARAT PLAY</span>
              </h2>
            </div>
            
            <div className="md:col-span-8 flex flex-col">
              <div className="border-l border-gray-200 pl-8 md:pl-16 relative py-8">
                
                {/* Node 1 */}
                <div className="relative mb-32 group">
                  <div className="absolute -left-[33px] md:-left-[65px] top-2 w-4 h-4 rounded-full bg-white border-2 border-brand-gray group-hover:border-brand-navy transition-colors z-10" />
                  <h3 className="font-display text-3xl font-bold uppercase tracking-tighter mb-4 text-brand-gray group-hover:text-brand-navy transition-colors">KUDOS</h3>
                  <p className="text-xl font-medium leading-relaxed max-w-lg">
                    [Placeholder for KUDOS origin story. Detail initial focus on urban innovation, research, and experimentation.]
                  </p>
                  <div className="mt-8 aspect-video w-full max-w-md bg-gray-100 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-brand-gray">[HISTORICAL IMAGE PLACEHOLDER]</div>
                  </div>
                </div>

                {/* Node 2 */}
                <div className="relative mb-32 group">
                  <div className="absolute -left-[33px] md:-left-[65px] top-2 w-4 h-4 rounded-full bg-white border-2 border-brand-gray group-hover:border-brand-orange transition-colors z-10" />
                  <h3 className="font-display text-3xl font-bold uppercase tracking-tighter mb-4 text-brand-gray group-hover:text-brand-orange transition-colors">EXPANDING THE PLAYGROUND</h3>
                  <p className="text-xl font-medium leading-relaxed max-w-lg">
                    [Placeholder for expansion era. Detail the shift toward broader learning, cities, climate, systems and social innovation.]
                  </p>
                </div>

                {/* Node 3 */}
                <div className="relative group">
                  <div className="absolute -left-[33px] md:-left-[65px] top-2 w-4 h-4 rounded-full bg-brand-navy z-10 scale-150" />
                  <h3 className="font-display text-5xl font-bold uppercase tracking-tighter mb-4 text-brand-navy">BHARAT PLAY</h3>
                  <p className="text-xl font-medium leading-relaxed max-w-lg text-brand-navy">
                    [Placeholder for current mission. The establishment of Bharat Play as a dedicated experiential design organisation.]
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — OUR PHILOSOPHY */}
      <section className="px-4 md:px-6 py-40 bg-brand-navy text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-32 max-w-4xl"
          >
            <h2 className="font-display text-6xl md:text-8xl lg:text-[140px] font-bold uppercase tracking-tighter leading-[0.85] mb-12">
              PLAY IS MORE <br/> <span className="text-brand-gray/50">THAN A GAME.</span>
            </h2>
            <p className="text-2xl md:text-3xl font-medium leading-tight text-brand-gray max-w-2xl">
              Games, simulations, experiences and participatory environments allow people to explore possibilities, understand systems, experience consequences and imagine alternatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: '01', title: 'PLAY', desc: 'Explore', color: 'hover:bg-brand-orange', line: 'bg-brand-orange' },
              { id: '02', title: 'SYSTEMS', desc: 'Understand', color: 'hover:bg-brand-green', line: 'bg-brand-green' },
              { id: '03', title: 'PEOPLE', desc: 'Participate', color: 'hover:bg-white hover:text-brand-navy', line: 'bg-white' },
              { id: '04', title: 'FUTURES', desc: 'Imagine', color: 'hover:bg-gray-800', line: 'bg-gray-500' },
            ].map((principle, idx) => (
              <motion.div 
                key={principle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`border border-gray-800 p-8 aspect-square flex flex-col justify-between group transition-colors duration-500 ${principle.color}`}
              >
                <div className="font-mono text-xs font-bold text-gray-500 group-hover:text-inherit transition-colors">{principle.id}</div>
                <div>
                  <div className={`w-8 h-1 mb-6 transition-all duration-500 ${principle.line} group-hover:w-full`}></div>
                  <h3 className="font-display text-4xl font-bold uppercase tracking-tighter mb-2">{principle.title}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-inherit transition-colors">{principle.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — WHAT WE BELIEVE */}
      <section className="px-4 md:px-6 py-40 bg-brand-offwhite">
        <div className="max-w-[1400px] mx-auto w-full">
          <h2 className="font-mono text-[10px] md:text-xs font-bold tracking-widest text-brand-gray uppercase mb-24 text-center">
            WHAT WE BELIEVE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-min">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="md:col-span-8 bg-white p-12 md:p-20 flex items-center"
            >
              <h3 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-balance">
                <span className="text-brand-orange">COMPLEX PROBLEMS</span> <br/>
                need new ways of seeing.
              </h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="md:col-span-4 bg-brand-navy text-white p-12 flex flex-col justify-between min-h-[400px]"
            >
              <div className="w-4 h-4 rounded-full bg-brand-green mb-8"></div>
              <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter">
                PEOPLE learn through participation.
              </h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="md:col-span-4 bg-gray-200 p-12 flex items-end min-h-[400px] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-brand-gray opacity-10 group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "16px 16px" }}></div>
              <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter relative z-10 text-brand-navy">
                CITIES are systems, not just places.
              </h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="md:col-span-8 bg-white p-12 md:p-20 flex flex-col justify-center border-l-8 border-brand-green"
            >
              <h3 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-brand-navy mb-4">
                THE FUTURE
              </h3>
              <p className="text-2xl md:text-3xl font-medium text-brand-gray">
                should be explored, not simply predicted.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="md:col-span-12 bg-white border border-gray-200 p-12 md:p-24 text-center mt-12"
            >
              <h3 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter text-brand-navy">
                PLAY <span className="text-brand-orange italic font-serif lowercase tracking-normal">can create</span> SERIOUS CONVERSATIONS.
              </h3>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 05 — AREAS OF PRACTICE */}
      <section className="px-4 md:px-6 py-40 bg-white border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter text-brand-navy sticky top-32">
                WHERE WE <br/> <span className="text-brand-green">PLAY</span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="flex flex-col border-t border-gray-200">
                {[
                  { id: '01', title: 'SERIOUS GAMES', desc: '[Placeholder: Design and facilitation of games that tackle complex issues.]' },
                  { id: '02', title: 'EXPERIENTIAL LEARNING', desc: '[Placeholder: Immersive environments that teach through direct participation.]' },
                  { id: '03', title: 'URBAN FUTURES', desc: '[Placeholder: Exploring the pathways and policies for developing smart, sustainable cities.]' },
                  { id: '04', title: 'SYSTEMS THINKING', desc: '[Placeholder: Mapping and understanding the interconnected nature of our world.]' },
                  { id: '05', title: 'CLIMATE & RESILIENCE', desc: '[Placeholder: Interventions focused on ecological awareness and adaptation.]' },
                  { id: '06', title: 'FUTURE SKILLS', desc: '[Placeholder: Building capacities for a rapidly evolving, AI-driven economy.]' },
                  { id: '07', title: 'SOCIAL INNOVATION', desc: '[Placeholder: Creating novel solutions for civic and community challenges.]' },
                  { id: '08', title: 'R&D / INNOVATION', desc: '[Placeholder: Experimental research bridging policy, design, and science.]' }
                ].map((area) => (
                  <div key={area.id} className="group border-b border-gray-200 py-8 md:py-12 flex flex-col md:flex-row gap-8 md:gap-16 cursor-pointer hover:bg-brand-offwhite transition-colors px-4 -mx-4 md:px-8 md:-mx-8">
                    <div className="font-mono text-xs font-bold text-brand-gray group-hover:text-brand-orange transition-colors">
                      {area.id}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter text-brand-navy mb-4 group-hover:translate-x-2 transition-transform duration-300">
                        {area.title}
                      </h3>
                      <div className="h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mt-6 transition-all duration-500">
                        <p className="text-lg font-medium text-brand-gray max-w-xl border-l-2 border-brand-orange pl-4">
                          {area.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — HOW WE WORK */}
      <section className="px-4 md:px-6 py-40 bg-brand-navy text-white overflow-hidden relative" ref={workRef}>
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          
          <div className="mb-32">
            <h2 className="font-mono text-[10px] md:text-xs font-bold tracking-widest text-brand-gray uppercase mb-6">HOW WE WORK</h2>
            <h3 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter">
              FROM QUESTION <br/> <span className="text-brand-orange">TO PLAY</span>
            </h3>
          </div>

          <div className="relative">
            {/* Background Line */}
            <div className="absolute left-[11px] md:left-[19px] top-0 bottom-0 w-[2px] bg-gray-800"></div>
            {/* Animated Scroll Line */}
            <motion.div 
              className="absolute left-[11px] md:left-[19px] top-0 w-[2px] bg-brand-orange origin-top"
              style={{ height: lineWidth }}
            ></motion.div>

            <div className="flex flex-col gap-16 md:gap-24 relative z-10">
              {[
                { id: '01', title: 'UNDERSTAND', desc: 'Research the context and people involved.' },
                { id: '02', title: 'FRAME', desc: 'Identify systems, challenges and opportunities.' },
                { id: '03', title: 'DESIGN', desc: 'Build the game, experience or intervention.' },
                { id: '04', title: 'PLAY', desc: 'Put people into the experience.' },
                { id: '05', title: 'REFLECT', desc: 'Make sense of what happened.' },
                { id: '06', title: 'ACT', desc: 'Turn insights into meaningful action.' },
              ].map((step, idx) => (
                <div key={step.id} className="flex gap-8 md:gap-16 items-start group">
                  <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-brand-navy border-2 border-brand-orange flex items-center justify-center shrink-0 mt-1 md:mt-2 group-hover:scale-125 transition-transform duration-300">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-brand-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div>
                    <div className="font-mono text-xs font-bold text-brand-gray mb-2">{step.id}</div>
                    <h4 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4 text-white group-hover:text-brand-orange transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-lg md:text-xl font-medium text-gray-400 max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 07 — PEOPLE + ECOSYSTEM */}
      <section className="px-4 md:px-6 py-40 bg-brand-offwhite">
        <div className="max-w-[1400px] mx-auto w-full mb-40">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-brand-navy mb-24 text-center">
            THE PEOPLE <br/> <span className="text-brand-green">BEHIND THE PLAY</span>
          </h2>

          {/* Placeholder Grid for Core Team */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-gray-200 mb-6 overflow-hidden rounded-sm relative">
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                    <span className="font-mono text-xs text-brand-gray uppercase tracking-widest text-center px-4">
                      [PHOTO<br/>PLACEHOLDER]
                    </span>
                  </div>
                </div>
                <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy mb-1">[NAME PLACEHOLDER]</h4>
                <p className="font-mono text-[10px] uppercase tracking-widest text-brand-orange mb-4">[ROLE PLACEHOLDER]</p>
                <p className="text-sm font-medium text-brand-gray leading-relaxed">
                  [Short bio placeholder. Real team data will be inserted here. Focus on expertise and background.]
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — KUDOS ARCHIVE */}
      <section className="px-4 md:px-6 py-40 bg-brand-offwhite">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.9]">
                BEFORE <br/> <span className="text-brand-gray">BHARAT PLAY</span>
              </h2>
            </div>
            <p className="text-lg font-medium text-brand-gray max-w-sm">
              KUDOS was the beginning. Bharat Play is the expanded playground. A small archive of our foundational work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-200 mb-6 overflow-hidden rounded-sm relative">
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="font-mono text-[10px] text-brand-gray uppercase tracking-widest text-center">
                      [ARCHIVE IMAGE]
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy group-hover:text-brand-orange transition-colors">
                    [PROJECT TITLE]
                  </h4>
                  <span className="font-mono text-[10px] uppercase text-brand-gray">[YEAR]</span>
                </div>
                <p className="text-sm font-medium text-brand-gray">
                  [Short description of the foundational project milestone.]
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — FINAL CTA */}
      <section className="px-4 md:px-6 py-40 bg-white border-t border-gray-200 text-center">
        <div className="max-w-[1000px] mx-auto w-full">
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.85] mb-24 text-balance">
            THE WORLD IS COMPLEX. <br/>
            <span className="text-brand-green">LET&apos;S PLAY</span> WITH IT.
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <Link href="/projects" className="inline-flex items-center gap-3 text-brand-navy font-bold text-xs md:text-sm uppercase tracking-widest hover:text-brand-orange transition-colors group">
              EXPLORE OUR WORK
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/events" className="inline-flex items-center gap-3 text-brand-navy font-bold text-xs md:text-sm uppercase tracking-widest hover:text-brand-green transition-colors group">
              SEE UPCOMING EVENTS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="mailto:hello@bharatplay.org" className="inline-flex items-center gap-3 text-brand-navy font-bold text-xs md:text-sm uppercase tracking-widest hover:text-brand-orange transition-colors group">
              WORK WITH US
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
