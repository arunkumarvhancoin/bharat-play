"use client";

import { motion } from "framer-motion";
/* eslint-disable @next/next/no-img-element */

const IMPACT_STORIES = [
  {
    id: "01",
    title: "CITY RUNNER",
    image: "https://images.unsplash.com/photo-1739368732843-800f36a9b7d0?q=80&w=1170&auto=format&fit=crop",
    experience: "A participatory board game exploring cities as interconnected systems and how multiple actors manage urban operations.",
    outcome: "Participants experienced urban challenges from multiple perspectives, creating a deeper understanding of participatory governance and how citizens can actively shape their cities.",
    stats: [
      { label: "PARTICIPANTS", value: "1200+" },
      { label: "EVENTS HOSTED", value: "50+" },
    ]
  },
  {
    id: "02",
    title: "CASCADE",
    image: "https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=1170&auto=format&fit=crop",
    experience: "An immersive simulation game that uncovers potential cyber-physical hazards in a smart building environment.",
    outcome: "Players collaboratively responded to attack scenarios, discovering firsthand how malicious cyber attacks can cascade into physical systems like HVAC and fire protection.",
    stats: [
      { label: "WORKSHOPS", value: "30+" }
    ]
  },
  {
    id: "03",
    title: "PROSPERA",
    image: "https://images.unsplash.com/photo-1789289779061-2fb536bbe64f?w=600&auto=format&fit=crop",
    experience: "A facilitated experiential boardgame taking players through the complex, multi-layered life of an urban planner.",
    outcome: "Players honed strategic foresight, practically navigating the real-world trade-offs of urbanization, agglomeration, and long-term decision-making.",
    stats: [
      { label: "COLLABORATORS", value: "15+" }
    ]
  }
];

export default function SocialImpact() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 bg-white border-b border-gray-200" id="impact">
      <div className="max-w-[1400px] mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left: Section Header */}
          <div className="lg:col-span-3">
            <div className="sticky top-32 flex flex-col gap-6">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold uppercase text-brand-navy leading-[0.85] mb-6">
                  FROM PLAY<br/>TO CHANGE
                </h2>
                <p className="text-xl md:text-2xl font-medium text-brand-gray leading-tight mb-8">
                  Real experiences. Real people. Real outcomes.
                </p>
                <p className="text-lg md:text-xl font-medium text-gray-500 leading-relaxed pr-4">
                  Bharat Play uses purposeful play to help people experience complex challenges, see different perspectives, build capabilities and start conversations that continue beyond the experience.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right: Impact Stories */}
          <div className="lg:col-span-9 lg:pl-16">
            
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-px w-full bg-brand-navy origin-left mb-12"
            />

            <div className="flex flex-col gap-24">
              {IMPACT_STORIES.map((story) => (
                <div key={story.id} className="flex flex-col md:flex-row gap-8 md:gap-12 group">
                  
                  {/* Number & Image */}
                  <div className="w-full md:w-5/12 flex flex-col gap-6">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="font-mono text-xs font-bold tracking-widest text-brand-gray"
                    >
                      {story.id}
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                      whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                      className="aspect-[4/3] relative overflow-hidden bg-gray-100"
                    >
                      <img 
                        src={story.image} 
                        alt={story.title}
                        className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-7/12 flex flex-col pt-8 md:pt-12">
                    <motion.h3 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter text-brand-navy mb-6 group-hover:pl-2 transition-all duration-300"
                    >
                      {story.title}
                    </motion.h3>
                    
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="text-lg font-medium text-gray-500 mb-12"
                    >
                      {story.experience}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="relative pl-6 border-l-[3px] border-transparent group-hover:border-brand-green transition-colors duration-500"
                    >
                      <h4 className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-navy mb-3 group-hover:text-brand-green transition-colors duration-300">
                        WHAT CHANGED
                      </h4>
                      <p className="text-xl md:text-2xl font-medium text-brand-navy leading-snug">
                        {story.outcome}
                      </p>
                    </motion.div>

                    {/* Evidence Stats */}
                    {story.stats && story.stats.length > 0 && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="mt-12 flex flex-wrap gap-8"
                      >
                        {story.stats.map(stat => (
                          <div key={stat.label} className="flex items-center gap-2">
                            <span className="font-mono text-brand-orange font-bold text-sm">+</span>
                            <span className="font-mono text-xs font-bold tracking-widest text-brand-gray uppercase">{stat.value} {stat.label}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
