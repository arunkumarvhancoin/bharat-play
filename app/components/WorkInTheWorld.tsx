"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function WorkInTheWorld() {
  const containerRef = useRef(null);
  
  // Create a slight parallax effect for the images
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={containerRef} className="py-40 px-4 md:px-6 bg-brand-offwhite border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto w-full">
        
        <div className="flex flex-col gap-8 mb-40">
          <h2 className="font-mono text-sm tracking-widest text-brand-gray uppercase border-b border-gray-200 pb-2">
            WORK IN THE WORLD
          </h2>
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.9]"
            >
              BLURRING BOUNDARIES. <br/> SHAPING FUTURES.
            </motion.h2>
          </div>
        </div>

        {/* Project 01 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-56 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-8 aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-sm group"
          >
            <motion.div 
              className="absolute -top-[15%] -bottom-[15%] left-0 right-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[3000ms] ease-out will-change-transform" 
              style={{ y: y1, backgroundImage: "url('https://images.unsplash.com/photo-1739368732843-800f36a9b7d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
            />
          </motion.div>

          <div className="md:col-span-4 flex flex-col justify-start">
            <motion.h3 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-brand-navy mb-12 leading-[0.85]"
            >
              CITY <br/> RUNNER
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-8 mb-12"
            >
              <div>
                <h4 className="font-mono text-xs font-bold tracking-widest uppercase text-brand-gray mb-2">THE CONCEPT</h4>
                <p className="text-xl md:text-2xl font-medium text-brand-navy leading-relaxed">A serious board game involving roleplays that allows experiencing how multiple actors are involved in managing urban operations.</p>
              </div>
              <div>
                <h4 className="font-mono text-xs font-bold tracking-widest uppercase text-brand-gray mb-2">THE CONTEXT</h4>
                <p className="text-xl md:text-2xl font-medium text-brand-navy leading-relaxed">Using Pune metropolis as an example to inspire participatory governance actions required to transform the quality of urban living.</p>
              </div>
            </motion.div>

            <Link href="/projects" className="inline-flex items-center gap-3 text-brand-navy font-bold text-xs uppercase tracking-widest hover:text-brand-orange transition-colors group">
              VIEW CASE STUDY
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring" }}>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Project 02 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-56 items-start">
          
          <div className="md:col-span-4 flex flex-col justify-start order-2 md:order-1 md:pr-12">
            <motion.h3 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-brand-navy mb-12 leading-[0.85]"
            >
              CASCADE
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-8 mb-12"
            >
              <div>
                <h4 className="font-mono text-xs font-bold tracking-widest uppercase text-brand-gray mb-2">THE CONCEPT</h4>
                <p className="text-xl md:text-2xl font-medium text-brand-navy leading-relaxed">A simulation game that uncovers potential cyber-physical hazards in a smart building environment.</p>
              </div>
              <div>
                <h4 className="font-mono text-xs font-bold tracking-widest uppercase text-brand-gray mb-2">THE CONTEXT</h4>
                <p className="text-xl md:text-2xl font-medium text-brand-navy leading-relaxed">Players collaboratively respond to attack scenarios, discovering how malicious cyber attacks compromise physical systems like HVAC and fire protection.</p>
              </div>
            </motion.div>

            <Link href="/projects" className="inline-flex items-center gap-3 text-brand-navy font-bold text-xs uppercase tracking-widest hover:text-brand-orange transition-colors group">
              VIEW CASE STUDY
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring" }}>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-8 aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-sm order-1 md:order-2 group"
          >
            <motion.div 
              className="absolute -top-[15%] -bottom-[15%] left-0 right-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[3000ms] ease-out will-change-transform" 
              style={{ y: y2, backgroundImage: "url('https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
            />
          </motion.div>
        </div>

        {/* Project 03 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-6 aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-sm group"
          >
            <motion.div 
              className="absolute -top-[15%] -bottom-[15%] left-0 right-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[3000ms] ease-out will-change-transform" 
              style={{ y: y3, backgroundImage: "url('https://images.unsplash.com/photo-1789289779061-2fb536bbe64f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D')" }}
            />
          </motion.div>

          <div className="md:col-span-6 md:pl-16 flex flex-col justify-start">
            <motion.h3 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-brand-navy mb-12 leading-[0.85]"
            >
              PROSPERA
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-8 mb-12"
            >
              <div>
                <h4 className="font-mono text-xs font-bold tracking-widest uppercase text-brand-gray mb-2">THE CONCEPT</h4>
                <p className="text-xl md:text-2xl font-medium text-brand-navy leading-relaxed">A facilitated boardgame taking players experientially through the life of an urban planner.</p>
              </div>
              <div>
                <h4 className="font-mono text-xs font-bold tracking-widest uppercase text-brand-gray mb-2">THE CONTEXT</h4>
                <p className="text-xl md:text-2xl font-medium text-brand-navy leading-relaxed">Honing strategic farsights and educating players about urbanization, urban agglomeration, and decision-making that shapes future cities.</p>
              </div>
            </motion.div>

            <Link href="/projects" className="inline-flex items-center gap-3 text-brand-navy font-bold text-xs uppercase tracking-widest hover:text-brand-orange transition-colors group">
              VIEW CASE STUDY
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring" }}>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
