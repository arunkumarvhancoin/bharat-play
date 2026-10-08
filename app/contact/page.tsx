"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-offwhite text-brand-navy pt-32 pb-40 selection:bg-brand-orange selection:text-white">
      
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-6">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-32 pt-12 md:pt-24">
          <div className="lg:col-span-8">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-[10px] md:text-xs font-bold tracking-widest text-brand-gray uppercase mb-8 md:mb-16"
            >
              CONTACT BHARAT PLAY
            </motion.h4>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
              className="font-display text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.85]"
            >
              LET&apos;S GET IN <br/>
              <span className="text-brand-orange">TOUCH.</span>
            </motion.h1>
          </div>
          
          <div className="lg:col-span-4 pb-4">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl font-medium leading-tight max-w-sm"
            >
              Whether you want to collaborate, visit our Experience Center, or simply explore the power of purposeful play.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-7 bg-white p-8 md:p-12 lg:p-16 border border-gray-200"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-12">
              SEND A MESSAGE
            </h2>
            
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="font-mono text-[10px] font-bold tracking-widest text-brand-gray uppercase">First Name</label>
                  <input type="text" id="firstName" className="border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-brand-orange transition-colors text-lg" placeholder="John" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="font-mono text-[10px] font-bold tracking-widest text-brand-gray uppercase">Last Name</label>
                  <input type="text" id="lastName" className="border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-brand-orange transition-colors text-lg" placeholder="Doe" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-[10px] font-bold tracking-widest text-brand-gray uppercase">Email Address</label>
                <input type="email" id="email" className="border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-brand-orange transition-colors text-lg" placeholder="john@example.com" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-mono text-[10px] font-bold tracking-widest text-brand-gray uppercase">Subject</label>
                <input type="text" id="subject" className="border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-brand-orange transition-colors text-lg" placeholder="How can we help?" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-[10px] font-bold tracking-widest text-brand-gray uppercase">Message</label>
                <textarea id="message" rows={4} className="border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-brand-orange transition-colors text-lg resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="mt-8 bg-brand-navy text-white py-4 px-8 font-mono text-xs font-bold uppercase tracking-widest hover:bg-brand-orange transition-colors flex items-center justify-center gap-3 group w-full md:w-auto self-start">
                SEND MESSAGE
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Right Column: Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-16"
          >
            {/* Contact Info Block */}
            <div className="bg-brand-navy text-white p-8 md:p-12 border-t-4 border-brand-green relative overflow-hidden group">
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-brand-green/10 rounded-full blur-3xl group-hover:bg-brand-orange/20 transition-colors duration-700"></div>
              
              <h3 className="font-display text-2xl font-bold uppercase tracking-tighter mb-8 relative z-10">
                DIRECT CONTACT
              </h3>
              
              <div className="flex flex-col gap-8 relative z-10">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-brand-green mt-1 shrink-0" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-brand-gray mb-1">EMAIL</div>
                    <a href="mailto:hello@bharatplay.org" className="text-lg font-medium hover:text-brand-orange transition-colors">hello@bharatplay.org</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-brand-green mt-1 shrink-0" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-brand-gray mb-1">PHONE</div>
                    <a href="tel:+910000000000" className="text-lg font-medium hover:text-brand-orange transition-colors">+91 000 000 0000</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Block */}
            <div className="bg-gray-200 p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-gray opacity-5 group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "16px 16px" }}></div>
              
              <h3 className="font-display text-2xl font-bold uppercase tracking-tighter text-brand-navy mb-8 relative z-10">
                EXPERIENCE CENTER
              </h3>
              
              <div className="flex items-start gap-4 relative z-10">
                <MapPin className="w-5 h-5 text-brand-orange mt-1 shrink-0" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-brand-gray mb-1">LOCATION</div>
                  <p className="text-lg font-medium text-brand-navy leading-relaxed max-w-[200px]">
                    [Experience Center Address] <br/>
                    Chennai, Tamil Nadu <br/>
                    India
                  </p>
                </div>
              </div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </main>
  );
}
