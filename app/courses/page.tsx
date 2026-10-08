"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Plus, Minus } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import clsx from "clsx";

export default function CoursesPage() {
  const journeyRef = useRef(null);
  const { scrollYProgress: journeyScroll } = useScroll({ target: journeyRef, offset: ["start center", "end center"] });
  const journeyWidth = useTransform(journeyScroll, [0, 1], ["0%", "100%"]);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const FAQS = [
    { question: "Who are these programs for?", answer: "[Placeholder: Explain that programs are designed for students, educators, designers, professionals, and organizations looking to understand complex systems.]" },
    { question: "Are the programs online or offline?", answer: "[Placeholder: Programs are offered in multiple formats including entirely offline experiential sessions, hybrid models, and online engagements.]" },
    { question: "Do I need prior experience?", answer: "[Placeholder: No prior experience with serious games or systems thinking is required unless explicitly stated in the program details.]" },
    { question: "How do I register?", answer: "[Placeholder: Explain the registration or application process, including any cohort-based intake models.]" }
  ];

  return (
    <main className="min-h-screen bg-brand-offwhite text-brand-navy pt-32 selection:bg-brand-orange selection:text-white">
      
      {/* SECTION 01 — HERO */}
      <section className="px-4 md:px-6 pt-12 md:pt-24 mb-40">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
            <div className="lg:col-span-8">
              <motion.h4 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="font-mono text-[10px] md:text-xs font-bold tracking-widest text-brand-gray uppercase mb-8 md:mb-16"
              >
                BHARAT PLAY / LEARNING
              </motion.h4>
              <motion.h1 
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
                className="font-display text-7xl md:text-8xl lg:text-[180px] font-bold uppercase tracking-tighter text-brand-navy leading-[0.85] mb-8"
              >
                LEARN <br/> <span className="text-brand-orange">BY PLAYING.</span>
              </motion.h1>
            </div>
            
            <div className="lg:col-span-4 flex flex-col justify-end lg:pt-32">
              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl md:text-3xl font-medium leading-tight mb-12 text-brand-gray"
              >
                Experiences, workshops and learning programs designed to make complex ideas tangible.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}
                className="font-mono text-[10px] font-bold text-brand-gray uppercase tracking-widest flex flex-col gap-2 border-l-2 border-brand-green pl-4 mb-12"
              >
                <span>WORKSHOPS</span>
                <span>BOOTCAMPS</span>
                <span>COURSES</span>
                <span>PROGRAMS</span>
              </motion.div>

              <div className="flex flex-col gap-4">
                <Link href="#explore" className="inline-flex items-center gap-3 text-brand-navy font-bold text-xs uppercase tracking-widest hover:text-brand-orange transition-colors group">
                  EXPLORE PROGRAMS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#philosophy" className="inline-flex items-center gap-3 text-brand-gray font-bold text-xs uppercase tracking-widest hover:text-brand-green transition-colors group">
                  HOW WE LEARN <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          

        </div>
      </section>



      {/* SECTION 03 — FEATURED PROGRAM */}
      <section className="px-4 md:px-6 py-40 bg-brand-navy text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full relative">
          <div className="font-mono text-[10px] font-bold tracking-widest text-brand-orange uppercase mb-8">
            FEATURED PROGRAM
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="font-display text-6xl md:text-8xl lg:text-[120px] font-bold uppercase tracking-tighter leading-[0.85] mb-12">
                SERIOUS <br/> <span className="text-brand-gray">GAME DESIGN</span>
              </h2>
              <p className="text-2xl md:text-3xl font-medium text-gray-400 max-w-xl mb-16 leading-tight">
                Learn how to design games and experiences that help people explore complex systems and ideas.
              </p>
              
              <div className="flex flex-col md:flex-row gap-8 mb-16 border-t border-gray-800 pt-8">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-brand-gray mb-1">DURATION</div>
                  <div className="font-bold text-lg">6 WEEKS</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-brand-gray mb-1">MODE</div>
                  <div className="font-bold text-lg">ONLINE / OFFLINE</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-brand-gray mb-1">NEXT COHORT</div>
                  <div className="font-bold text-lg text-brand-orange">[DATE]</div>
                </div>
              </div>

              <Link href="#" className="inline-flex items-center gap-3 bg-white text-brand-navy px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-colors group">
                EXPLORE PROGRAM
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <div className="aspect-[3/4] bg-gray-800 relative overflow-hidden group">
                <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')" }}></div>
                <div className="absolute inset-0 border-8 border-brand-navy"></div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* SECTION 05 — PROGRAMS / COURSES (EXPLORE THE PLAYGROUND) */}
      <section id="explore" className="px-4 md:px-6 py-40 bg-white">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.85]">
              EXPLORE THE <br/> <span className="text-brand-orange">PLAYGROUND</span>
            </h2>
            
            {/* Minimal Placeholder Filter UI */}
            <div className="flex flex-wrap gap-4 font-mono text-[10px] font-bold tracking-widest uppercase">
              <button className="px-4 py-2 bg-brand-navy text-white rounded-full">ALL</button>
              <button className="px-4 py-2 border border-gray-200 text-brand-gray hover:border-brand-navy transition-colors rounded-full">WORKSHOPS</button>
              <button className="px-4 py-2 border border-gray-200 text-brand-gray hover:border-brand-navy transition-colors rounded-full">COURSES</button>
              <button className="px-4 py-2 border border-gray-200 text-brand-gray hover:border-brand-navy transition-colors rounded-full">PROGRAMS</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((course) => (
              <div key={course} className="group border border-gray-200 bg-brand-offwhite flex flex-col hover:border-brand-navy transition-colors">
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-300 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center font-mono text-[10px] text-brand-gray">
                    [COURSE IMAGE]
                  </div>
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 font-mono text-[10px] font-bold tracking-widest uppercase text-brand-navy">
                    [CATEGORY]
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-brand-navy mb-4 group-hover:text-brand-orange transition-colors">
                    [COURSE / PROGRAM NAME]
                  </h3>
                  <p className="text-sm font-medium text-brand-gray mb-8 flex-1">
                    [Short description of the course. Designed to be a placeholder for dynamic CMS content.]
                  </p>
                  <div className="flex flex-col gap-2 mb-8 border-t border-gray-200 pt-4">
                    <div className="flex justify-between font-mono text-[10px] uppercase text-brand-navy">
                      <span className="text-brand-gray">DURATION</span> <span>[DURATION]</span>
                    </div>
                    <div className="flex justify-between font-mono text-[10px] uppercase text-brand-navy">
                      <span className="text-brand-gray">MODE</span> <span>[MODE]</span>
                    </div>
                    <div className="flex justify-between font-mono text-[10px] uppercase text-brand-navy">
                      <span className="text-brand-gray">NEXT</span> <span>[DATE]</span>
                    </div>
                  </div>
                  <Link href={`/courses/placeholder-${course}`} className="inline-flex items-center gap-3 text-brand-navy font-bold text-xs uppercase tracking-widest group/link">
                    EXPLORE <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform text-brand-orange" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06 — LEARNING JOURNEY */}
      <section className="px-4 md:px-6 py-40 bg-brand-navy text-white overflow-hidden relative" ref={journeyRef}>
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="mb-32">
            <h2 className="font-mono text-[10px] md:text-xs font-bold tracking-widest text-brand-green uppercase mb-6">LEARNING JOURNEY</h2>
            <h3 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter">
              FROM CURIOSITY <br/> <span className="text-brand-orange">TO CAPABILITY.</span>
            </h3>
          </div>

          {/* Horizontal Journey for Desktop */}
          <div className="hidden lg:block relative pt-12 pb-24">
            <div className="absolute top-[68px] left-0 right-0 h-[2px] bg-gray-800"></div>
            <motion.div className="absolute top-[68px] left-0 h-[2px] bg-brand-orange origin-left" style={{ width: journeyWidth }}></motion.div>
            
            <div className="grid grid-cols-6 gap-8 relative z-10">
              {[
                { id: '01', title: 'DISCOVER' },
                { id: '02', title: 'QUESTION' },
                { id: '03', title: 'PLAY' },
                { id: '04', title: 'EXPERIMENT' },
                { id: '05', title: 'REFLECT' },
                { id: '06', title: 'APPLY' },
              ].map((step, idx) => (
                <div key={step.id} className="flex flex-col items-center text-center group">
                  <div className="font-mono text-xs font-bold text-brand-gray mb-6">{step.id}</div>
                  <div className="w-8 h-8 rounded-full bg-brand-navy border-2 border-brand-orange flex items-center justify-center mb-8 group-hover:scale-125 transition-transform duration-300">
                    <div className="w-2 h-2 bg-brand-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h4 className="font-display text-2xl font-bold uppercase tracking-tighter text-white group-hover:text-brand-orange transition-colors">
                    {step.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Journey for Mobile/Tablet */}
          <div className="lg:hidden relative ml-4">
            <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-gray-800"></div>
            <div className="flex flex-col gap-16 relative z-10">
               {[
                { id: '01', title: 'DISCOVER' },
                { id: '02', title: 'QUESTION' },
                { id: '03', title: 'PLAY' },
                { id: '04', title: 'EXPERIMENT' },
                { id: '05', title: 'REFLECT' },
                { id: '06', title: 'APPLY' },
              ].map((step) => (
                <div key={step.id} className="flex items-center gap-8 group">
                  <div className="w-8 h-8 rounded-full bg-brand-navy border-2 border-brand-orange flex items-center justify-center shrink-0">
                     <div className="w-2 h-2 bg-brand-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-brand-gray mb-1">{step.id}</div>
                    <h4 className="font-display text-3xl font-bold uppercase tracking-tighter text-white">{step.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — WHAT YOU ACTUALLY DO */}
      <section className="px-4 md:px-6 py-40 bg-brand-offwhite">
        <div className="max-w-[1400px] mx-auto w-full">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-brand-navy mb-24 text-center">
            LEARNING BY <span className="text-brand-green">DOING</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
            {[
              { title: "BUILD", desc: "Create something.", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80" },
              { title: "PLAY", desc: "Test ideas through experience.", img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80" },
              { title: "COLLABORATE", desc: "Work with others.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" },
              { title: "DECIDE", desc: "Make choices.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" },
              { title: "REFLECT", desc: "Understand consequences.", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" },
              { title: "APPLY", desc: "Take the learning beyond the experience.", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" },
            ].map((action, idx) => (
              <div key={idx} className="flex flex-col group">
                <div className="aspect-video bg-gray-200 mb-8 overflow-hidden rounded-sm relative">
                   <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" style={{ backgroundImage: `url('${action.img}')` }}></div>
                </div>
                <h3 className="font-display text-4xl font-bold uppercase tracking-tighter text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                  {action.title}
                </h3>
                <p className="text-xl font-medium text-brand-gray">
                  {action.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 08 — WHO IS IT FOR? */}
      <section className="px-4 md:px-6 py-40 bg-white border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter text-brand-navy sticky top-32">
                WHO <br/> <span className="text-brand-gray">PLAYS?</span>
              </h2>
            </div>
            
            <div className="lg:col-span-8 flex flex-col pt-8">
              {[
                { aud: 'STUDENTS', outcome: 'Explore new ways of learning.' },
                { aud: 'EDUCATORS', outcome: 'Make learning participatory.' },
                { aud: 'DESIGNERS', outcome: 'Build better experiences.' },
                { aud: 'ORGANISATIONS', outcome: 'Build capabilities through experience.' },
              ].map((item, idx) => (
                <div key={idx} className="group border-b border-gray-200 py-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 cursor-default">
                  <h3 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-brand-navy group-hover:text-brand-orange transition-colors md:w-1/2">
                    {item.aud}
                  </h3>
                  <div className="hidden md:block text-brand-green font-display text-4xl group-hover:translate-x-4 transition-transform">→</div>
                  <p className="text-xl md:text-2xl font-medium text-brand-gray md:w-1/2">
                    {item.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09 — FACILITATORS */}
      <section className="px-4 md:px-6 py-40 bg-brand-navy text-white">
        <div className="max-w-[1400px] mx-auto w-full">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-24 max-w-2xl leading-[0.9]">
            WHO WILL YOU <br/> <span className="text-brand-green">LEARN WITH?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            {/* Featured Profile */}
            <div className="md:col-span-7 bg-brand-offwhite text-brand-navy p-8 md:p-12 relative overflow-hidden group">
              <div className="aspect-square bg-gray-300 w-full mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 flex items-center justify-center font-mono text-xs uppercase text-brand-gray">
                [PHOTO PLACEHOLDER]
              </div>
              <h3 className="font-display text-5xl font-bold uppercase tracking-tighter mb-2">[NAME]</h3>
              <p className="font-mono text-xs font-bold tracking-widest text-brand-orange mb-6">[ROLE]</p>
              <p className="text-lg font-medium text-brand-gray max-w-md">
                [Short bio placeholder. Emphasize expertise in systems thinking, game design, or experiential learning.]
              </p>
            </div>
            
            {/* Secondary Profiles */}
            <div className="md:col-span-5 flex flex-col gap-8">
              {[1, 2].map((prof) => (
                <div key={prof} className="border border-gray-800 p-8 flex flex-col group hover:bg-white hover:text-brand-navy transition-colors duration-500">
                  <div className="w-24 h-24 bg-gray-800 rounded-full mb-8 flex items-center justify-center font-mono text-[8px] text-gray-500 group-hover:bg-gray-200 uppercase">
                    [PHOTO]
                  </div>
                  <h3 className="font-display text-3xl font-bold uppercase tracking-tighter mb-1">[NAME]</h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-brand-green group-hover:text-brand-orange mb-4">[EXPERTISE]</p>
                  <p className="text-sm font-medium text-gray-400 group-hover:text-brand-gray">
                    [Short description of facilitator background.]
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — OUTCOMES */}
      <section className="px-4 md:px-6 py-40 bg-white">
        <div className="max-w-[1400px] mx-auto w-full text-center">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-brand-navy mb-24">
            WHAT YOU TAKE <br/> <span className="text-brand-orange">WITH YOU.</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-12">
            {["KNOWLEDGE", "PRACTICE", "PROTOTYPES", "NEW PERSPECTIVES", "COLLABORATION", "TOOLS", "CONFIDENCE"].map((outcome, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-brand-gray hover:text-brand-navy transition-colors cursor-default"
              >
                {outcome}
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* SECTION 12 — UPCOMING */}
      <section className="px-4 md:px-6 py-40 bg-white">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter text-brand-navy">
              WHAT&apos;S <span className="text-brand-green">NEXT?</span>
            </h2>
            <Link href="/events" className="inline-flex items-center gap-3 text-brand-navy font-bold text-xs uppercase tracking-widest hover:text-brand-orange transition-colors group mb-4">
              VIEW ALL EVENTS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-col border-t border-gray-200">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group border-b border-gray-200 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:bg-brand-offwhite transition-colors px-4 -mx-4 md:px-8 md:-mx-8 cursor-pointer">
                <div className="font-mono text-sm font-bold text-brand-gray md:w-48 shrink-0">
                  [DATE]
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter text-brand-navy group-hover:text-brand-orange transition-colors">
                    [UPCOMING PROGRAM TITLE]
                  </h3>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-brand-gray md:w-48 text-left md:text-right">
                  [LOCATION / MODE]
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13 — FAQ */}
      <section className="px-4 md:px-6 py-40 bg-brand-navy text-white">
        <div className="max-w-[1000px] mx-auto w-full">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-24 text-center">
            FREQUENTLY <br/> <span className="text-brand-orange">ASKED QUESTIONS</span>
          </h2>
          
          <div className="flex flex-col border-t border-gray-800">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-800 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-8 flex items-center justify-between text-left group"
                >
                  <span className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tighter group-hover:text-brand-orange transition-colors">
                    {faq.question}
                  </span>
                  {openFaq === idx ? <Minus className="text-brand-orange shrink-0" /> : <Plus className="text-brand-gray group-hover:text-brand-orange transition-colors shrink-0" />}
                </button>
                <div 
                  className={clsx(
                    "transition-all duration-300 ease-in-out overflow-hidden",
                    openFaq === idx ? "max-h-[500px] opacity-100 pb-8" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-lg text-gray-400 max-w-3xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14 — FINAL CTA */}
      <section className="px-4 md:px-6 py-40 bg-brand-orange text-white text-center">
        <div className="max-w-[1000px] mx-auto w-full">
          <h2 className="font-display text-8xl md:text-9xl lg:text-[180px] font-bold uppercase tracking-tighter leading-[0.8] mb-12 text-balance">
            READY <br/> TO PLAY?
          </h2>
          <p className="text-2xl font-medium mb-16 text-white/90">
            Find your next learning experience.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <Link href="#explore" className="inline-flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest hover:text-brand-navy transition-colors group">
              EXPLORE PROGRAMS <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link href="/events" className="inline-flex items-center gap-3 text-brand-navy font-bold text-sm uppercase tracking-widest hover:text-white transition-colors group">
              VIEW EVENTS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
