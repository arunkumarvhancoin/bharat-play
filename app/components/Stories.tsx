"use client";

import Link from "next/link";
import { ArrowRight, Play, X, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const VIDEOS = [
  {
    id: "0q0VSoT0MvQ",
    url: "https://www.youtube.com/watch?v=0q0VSoT0MvQ&list=PLNriavw_JQZo&index=6",
    embedUrl: "https://www.youtube-nocookie.com/embed/0q0VSoT0MvQ?autoplay=1",
    tag: "URBAN FUTURES · TALK",
    title: "WHAT MAKES A CITY LIVABLE?",
    subtitle: "Deconstructing urban livability, participatory governance, and the systemic challenges of fast-growing Indian megacities.",
    thumbnail: "https://img.youtube.com/vi/0q0VSoT0MvQ/maxresdefault.jpg"
  },
  {
    id: "OkdQ4S3Jg-U",
    url: "https://www.youtube.com/watch?v=OkdQ4S3Jg-U&list=PLNriavw_JQZo&index=3",
    embedUrl: "https://www.youtube-nocookie.com/embed/OkdQ4S3Jg-U?autoplay=1",
    tag: "SERIOUS GAMES & DEMOCRACY",
    title: "HOW SERIOUS GAMES SHAPE PUBLIC ACTION",
    subtitle: "Exploring tabletop mechanics as active pedagogical tools for civil servants, students, and citizens.",
    thumbnail: "https://img.youtube.com/vi/OkdQ4S3Jg-U/maxresdefault.jpg"
  },
  {
    id: "YO9Wl1bjPEY",
    url: "https://www.youtube.com/watch?v=YO9Wl1bjPEY&list=PLNriavw_JQZo&index=4",
    embedUrl: "https://www.youtube-nocookie.com/embed/YO9Wl1bjPEY?autoplay=1",
    tag: "CIVIC LEARNING IN ACTION",
    title: "COOPERATIVE GOVERNANCE IN PRACTICE",
    subtitle: "Inside a live gameplay session: negotiations, municipal budgeting trade-offs, and ward crises resolution.",
    thumbnail: "https://img.youtube.com/vi/YO9Wl1bjPEY/maxresdefault.jpg"
  }
];

export default function Stories() {
  const containerRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState<typeof VIDEOS[0] | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section ref={containerRef} className="py-32 px-4 md:px-6 bg-brand-navy border-b border-gray-800 relative z-10 -mt-[25vh]" id="stories">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 mb-20 items-end">
          <div className="md:col-span-8">
            <h2 className="font-mono text-xs font-bold tracking-widest text-brand-orange uppercase mb-3">
              SEE IT IN ACTION · TALKS & DISCUSSIONS
            </h2>
            <h3 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white">
              URBAN FUTURES · <span className="text-brand-green">TALK.</span>
            </h3>
          </div>
          
          <div className="md:col-span-4 flex md:justify-end">
            <Link href="/testimonials" className="inline-flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest hover:text-brand-orange transition-colors group">
              VIEW ALL DISCUSSIONS & REVIEWS
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Video Layout: 1 Main Featured Video + 2 Side Videos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main 1st Video */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="lg:col-span-8 group cursor-pointer"
            onClick={() => setActiveVideo(VIDEOS[0])}
          >
            <div className="aspect-video bg-black relative overflow-hidden mb-8 flex items-center justify-center rounded-sm border border-white/10 shadow-2xl">
              <motion.div 
                className="absolute inset-0 bg-cover bg-center opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out" 
                style={{ scale: imgScale, backgroundImage: `url('${VIDEOS[0].thumbnail}')` }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-orange flex items-center justify-center z-10 group-hover:bg-white group-hover:text-brand-navy transition-all duration-300 shadow-2xl text-white"
                >
                  <Play className="w-8 h-8 md:w-10 md:h-10 ml-1 fill-current" />
                </motion.div>
              </div>

              <div className="absolute top-4 left-4">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-brand-orange text-white rounded">
                  {VIDEOS[0].tag}
                </span>
              </div>
            </div>
            
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-brand-green mb-2">
                FEATURED DISCOURSE · VIDEO 01
              </div>
              <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white group-hover:text-brand-orange transition-colors duration-300 mb-3">
                {VIDEOS[0].title}
              </h3>
              <p className="text-white/70 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
                {VIDEOS[0].subtitle}
              </p>
            </div>
          </motion.div>

          {/* Secondary 2nd and 3rd Videos */}
          <div className="lg:col-span-4 flex flex-col gap-8 justify-start">
            
            {/* Video 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group cursor-pointer border-t border-gray-800 pt-6"
              onClick={() => setActiveVideo(VIDEOS[1])}
            >
              <div className="aspect-video bg-black relative overflow-hidden mb-5 flex items-center justify-center rounded-sm border border-white/10 shadow-lg">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-75 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700 ease-out" 
                  style={{ backgroundImage: `url('${VIDEOS[1].thumbnail}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />
                
                <div className="w-14 h-14 rounded-full bg-brand-navy/80 border border-white/20 backdrop-blur flex items-center justify-center z-10 group-hover:bg-brand-orange group-hover:border-transparent transition-all duration-300 text-white shadow-xl">
                  <Play className="w-5 h-5 ml-0.5 fill-current" />
                </div>

                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 bg-brand-green text-white rounded">
                    VIDEO 02
                  </span>
                </div>
              </div>

              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-orange mb-1">
                {VIDEOS[1].tag}
              </div>
              <h4 className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-brand-orange transition-colors duration-300 mb-2">
                {VIDEOS[1].title}
              </h4>
              <p className="text-white/60 text-xs leading-relaxed font-medium">
                {VIDEOS[1].subtitle}
              </p>
            </motion.div>
            
            {/* Video 3 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
              className="group cursor-pointer border-t border-gray-800 pt-6"
              onClick={() => setActiveVideo(VIDEOS[2])}
            >
              <div className="aspect-video bg-black relative overflow-hidden mb-5 flex items-center justify-center rounded-sm border border-white/10 shadow-lg">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-75 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700 ease-out" 
                  style={{ backgroundImage: `url('${VIDEOS[2].thumbnail}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />

                <div className="w-14 h-14 rounded-full bg-brand-navy/80 border border-white/20 backdrop-blur flex items-center justify-center z-10 group-hover:bg-brand-orange group-hover:border-transparent transition-all duration-300 text-white shadow-xl">
                  <Play className="w-5 h-5 ml-0.5 fill-current" />
                </div>

                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 bg-brand-navy text-white border border-white/20 rounded">
                    VIDEO 03
                  </span>
                </div>
              </div>

              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-green mb-1">
                {VIDEOS[2].tag}
              </div>
              <h4 className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-brand-orange transition-colors duration-300 mb-2">
                {VIDEOS[2].title}
              </h4>
              <p className="text-white/60 text-xs leading-relaxed font-medium">
                {VIDEOS[2].subtitle}
              </p>
            </motion.div>

          </div>
          
        </div>

      </div>

      {/* Interactive YouTube Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-brand-navy border border-white/20 rounded-sm w-full max-w-4xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Bar */}
              <div className="flex items-center justify-between p-4 bg-black/60 border-b border-white/10 text-white">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-orange px-2 py-0.5 rounded bg-white/10">
                    {activeVideo.tag}
                  </span>
                  <span className="font-display text-base font-bold uppercase tracking-tight truncate max-w-md">
                    {activeVideo.title}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <a 
                    href={activeVideo.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-bold text-white/70 hover:text-white flex items-center gap-1 uppercase tracking-widest"
                  >
                    YOUTUBE <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button 
                    onClick={() => setActiveVideo(null)} 
                    className="p-1 hover:bg-white/10 rounded transition-colors text-white"
                    aria-label="Close video player"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Iframe player */}
              <div className="aspect-video w-full bg-black">
                <iframe 
                  src={activeVideo.embedUrl} 
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-black/40 text-xs text-white/70 font-medium">
                {activeVideo.subtitle}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
