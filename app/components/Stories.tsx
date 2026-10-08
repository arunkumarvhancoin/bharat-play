"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Stories() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <section ref={containerRef} className="py-32 px-4 md:px-6 bg-brand-navy border-b border-gray-800 relative z-10 -mt-[25vh]" id="stories">
      <div className="max-w-[1400px] mx-auto w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 mb-24 items-end">
          <div className="md:col-span-3">
            <h2 className="font-mono text-sm tracking-widest text-gray-500 uppercase">
              SEE IT IN ACTION
            </h2>
          </div>
          
          <div className="md:col-span-9 flex justify-end">
            <Link href="/projects" className="inline-flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest hover:text-brand-orange transition-colors group">
              WATCH MORE STORIES
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Main featured video */}
          <motion.div 
            initial={{ opacity: 0, clipPath: "inset(20% 20% 20% 20%)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="md:col-span-8 group cursor-pointer"
          >
            <div className="aspect-video bg-gray-900 relative overflow-hidden mb-8 flex items-center justify-center rounded-sm">
              <motion.div 
                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500" 
                style={{ scale: imgScale, backgroundImage: "url('https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2000')" }}
              ></motion.div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-24 h-24 rounded-full bg-brand-orange/90 backdrop-blur flex items-center justify-center z-10 group-hover:bg-brand-orange transition-colors duration-300 shadow-2xl"
                >
                  <Play className="w-10 h-10 text-white ml-2" fill="white" />
                </motion.div>
              </div>
            </div>
            
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <div className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3">URBAN FUTURES · TALK</div>
                <h3 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white group-hover:text-brand-orange transition-colors duration-300">
                  What makes a city livable?
                </h3>
              </motion.div>
            </div>
          </motion.div>

          {/* Secondary videos */}
          <div className="md:col-span-4 flex flex-col gap-12 justify-end">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group cursor-pointer border-t border-gray-800 pt-8"
            >
              <div className="aspect-video bg-gray-900 relative overflow-hidden mb-6 flex items-center justify-center rounded-sm">
                <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-[2000ms] ease-out" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000')" }}></div>
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center z-10 group-hover:bg-brand-orange transition-all duration-300">
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">SERIOUS GAMES</div>
              <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-white group-hover:text-brand-green transition-colors duration-300">
                Designing for climate resilience
              </h4>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="group cursor-pointer border-t border-gray-800 pt-8"
            >
              <div className="aspect-video bg-gray-900 relative overflow-hidden mb-6 flex items-center justify-center rounded-sm">
                <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-[2000ms] ease-out" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1000')" }}></div>
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center z-10 group-hover:bg-brand-green transition-all duration-300">
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">PARTICIPANT STORIES</div>
              <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-white group-hover:text-brand-orange transition-colors duration-300">
                &quot;I finally understood the system.&quot;
              </h4>
            </motion.div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
