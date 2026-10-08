/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

const getFavicon = (domain: string) => `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=128`;

const PARTNERS = [
  { name: "FLAME University", role: "Academic Partner", logo: "https://www.flame.edu.in/images/white-Logo-FLAME.svg" },
  { name: "Toynik", role: "Industry Partner", logo: getFavicon("toynik.com") },
  { name: "National Action Plan", role: "Govt. Initiative", logo: getFavicon("india.gov.in") },
  { name: "Global South Network", role: "Collaborator", logo: getFavicon("globalsouthnetwork.com") }
];

export default function TrustedBy() {
  return (
    <section className="py-32 px-4 md:px-6 bg-brand-navy border-b border-gray-800">
      <div className="max-w-[1400px] mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Title */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h2 className="font-mono text-sm tracking-widest text-brand-green uppercase">
              WORKING WITH & LEARNING FROM
            </h2>
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-white leading-[0.9]">
              An ecosystem of <br className="hidden md:block" /> <span className="text-brand-orange">collaborators</span>
            </h3>
            <p className="text-brand-gray text-lg font-medium mt-4">
              We partner with academic institutions, civic bodies, and industry leaders to shape the future of urban systems.
            </p>
          </div>

          {/* Right Side: Logos */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-12 lg:gap-16">
              {PARTNERS.map((partner, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center group"
                >
                  <div className="h-16 mb-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain"
                    />
                  </div>
                  
                  <h4 className="font-display text-base md:text-lg font-bold uppercase tracking-tight text-white mb-2 leading-tight">
                    {partner.name}
                  </h4>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-brand-green leading-tight">
                    {partner.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
