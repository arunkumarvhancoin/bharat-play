"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "01",
    title: "CITY RUNNER",
    context: "Participatory Governance",
    desc: "A serious board game involving roleplays that allows experiencing how multiple actors are involved in managing urban operations in the Pune metropolis.",
    outcome: "Deployed across 15 universities, reaching 5,000+ students. Fostered deep understanding of municipal budgeting constraints.",
    target: "Civic Leaders & Urban Planning Students",
    img: "https://images.unsplash.com/photo-1739368732843-800f36a9b7d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "bg-brand-orange"
  },
  {
    id: "02",
    title: "CASCADE",
    context: "Cyber-physical Threats",
    desc: "A simulation game that uncovers potential cyber-physical hazards in a smart building environment, focusing on HVAC and fire protection systems.",
    outcome: "Used by 3 major infrastructure firms to train their engineering teams on the cascading effects of targeted malware attacks.",
    target: "Cybersecurity & Facility Professionals",
    img: "https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "bg-brand-green"
  },
  {
    id: "03",
    title: "PROSPERA",
    context: "Urban Futures",
    desc: "An urban planner experience exploring the delicate balance between rapid industrialization and environmental degradation in emerging markets.",
    outcome: "Winner of the 'Best Serious Game' at the Global South Innovation Summit. Resulted in 4 active community-led ecological interventions.",
    target: "High School Students & Communities",
    img: "https://images.unsplash.com/photo-1789289779061-2fb536bbe64f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    color: "bg-brand-navy"
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-brand-offwhite pt-32 pb-32">
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-24">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-orange font-mono text-xs uppercase tracking-widest hover:text-brand-navy transition-colors">
          <ArrowLeft className="w-4 h-4" /> BACK TO HOME
        </Link>
      </div>
      
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-6 mb-32">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter text-brand-navy mb-8"
        >
          OUR <span className="text-brand-orange">PROJECTS</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-brand-gray font-medium max-w-3xl"
        >
          Explore our past case studies, urban interventions, and applied research games designed to spark participatory action.
        </motion.p>
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-6">
        <div className="flex flex-col gap-32">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`lg:col-span-7 aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-sm ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}
              >
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[2000ms] will-change-transform" style={{ backgroundImage: `url('${project.img}')` }}></div>
                <div className={`absolute top-0 left-0 p-4 font-mono text-xs font-bold text-white ${project.color}`}>
                  {project.id}
                </div>
              </motion.div>
              
              <div className={`lg:col-span-5 flex flex-col justify-center ${idx % 2 !== 0 ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h4 className="font-mono text-xs font-bold tracking-widest text-brand-gray uppercase mb-4">
                    {project.context}
                  </h4>
                  <h3 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-brand-navy mb-8 leading-[0.9]">
                    {project.title}
                  </h3>
                  <p className="text-xl text-brand-navy font-medium leading-relaxed mb-8">
                    {project.desc}
                  </p>

                  <div className="flex flex-col gap-6 mb-12 border-l border-gray-300 pl-6">
                    <div>
                      <span className="font-mono text-xs font-bold tracking-widest text-brand-gray uppercase block mb-1">TARGET AUDIENCE</span>
                      <span className="text-brand-navy font-semibold">{project.target}</span>
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold tracking-widest text-brand-gray uppercase block mb-1">THE OUTCOME</span>
                      <span className="text-brand-navy font-semibold">{project.outcome}</span>
                    </div>
                  </div>
                  
                  <button className="inline-flex items-center gap-3 text-brand-navy font-bold text-xs uppercase tracking-widest hover:text-brand-orange transition-colors">
                    READ CASE STUDY
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
