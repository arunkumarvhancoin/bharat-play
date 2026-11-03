/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Phone,
  Clock,
  ExternalLink,
  Navigation,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

interface VenueInfo {
  id: string;
  region: string;
  tabTitle: string;
  badge: string;
  badgeColor: string;
  title: string;
  area: string;
  timing: string;
  schedule: string;
  description: string;
  coordinates: string;
  mapQuery: string;
  googleMapsUrl: string;
}

const CHENNAI_VENUES: VenueInfo[] = [
  {
    id: "north",
    region: "NORTH CHENNAI",
    tabTitle: "Kolathur (Main Hub)",
    badge: "FLAGSHIP LAB",
    badgeColor: "bg-[#C2410C] text-white",
    title: "Bharat Play Innovation cum Experience Center",
    area: "Kolathur & MKB Nagar, Chennai",
    timing: "2:30 PM – 5:30 PM",
    schedule: "Every Sunday Session",
    description: "Our dedicated physical tabletop lab and prototyping studio where we design games, playtest simulations, and host regular public sessions.",
    coordinates: "13.1245° N, 80.2185° E",
    mapQuery: "Kolathur, Chennai, Tamil Nadu",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kolathur+Chennai+Tamil+Nadu",
  },
  {
    id: "south",
    region: "SOUTH CHENNAI",
    tabTitle: "Besant Nagar / Adyar",
    badge: "WEEKLY HOST HUB",
    badgeColor: "bg-[#15803D] text-white",
    title: "Quest & Falling Apple",
    area: "Besant Nagar, Adyar & Chrompet, Chennai",
    timing: "2:30 PM – 5:30 PM",
    schedule: "Every Sunday Session",
    description: "Coastal community play hubs hosted with The Learning Community at Quest (near 4th Seaward Rd, Valmiki Nagar) and Falling Apple (Adyar).",
    coordinates: "13.0001° N, 80.2667° E",
    mapQuery: "Besant Nagar, Chennai, Tamil Nadu",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Besant+Nagar+Chennai+Tamil+Nadu",
  },
  {
    id: "central",
    region: "CENTRAL CHENNAI",
    tabTitle: "Anna Nagar",
    badge: "COMMUNITY HUB",
    badgeColor: "bg-[#0C2444] text-white",
    title: "Anna Nagar & Nerkundram Play Circle",
    area: "Anna Nagar & Nerkundram, Chennai",
    timing: "2:30 PM – 5:30 PM",
    schedule: "Every Sunday Session",
    description: "Centrally connected urban play sessions for college cohorts, young professionals, urban planners, and civic problem-solvers.",
    coordinates: "13.0850° N, 80.2101° E",
    mapQuery: "Anna Nagar, Chennai, Tamil Nadu",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Anna+Nagar+Chennai+Tamil+Nadu",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [selectedVenueIndex, setSelectedVenueIndex] = useState(0);
  const activeVenue = CHENNAI_VENUES[selectedVenueIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const parts = [
      "👋 *New Inquiry via Bharat Play Website*",
      "",
      fullName ? `*Name:* ${fullName}` : null,
      formData.email ? `*Email:* ${formData.email}` : null,
      formData.subject ? `*Subject:* ${formData.subject}` : null,
      "",
      "*Message:*",
      formData.message || "Hi Bharat Play team, I would like to get in touch regarding purposeful play.",
    ].filter((item): item is string => item !== null);

    const messageText = parts.join("\n");
    const whatsappUrl = `https://wa.me/918237132553?text=${encodeURIComponent(messageText)}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleReserveVenue = (venue: VenueInfo) => {
    const text = `Hi Bharat Play team, I would like to reserve a seat for the upcoming Sunday session at ${venue.title} (${venue.area}).`;
    const url = `https://wa.me/918237132553?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-brand-navy pt-32 pb-40 selection:bg-brand-orange selection:text-white">
      
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-6">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-20 md:mb-24 pt-12 md:pt-16">
          <div className="lg:col-span-8">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-xs md:text-sm font-bold tracking-widest text-brand-gray uppercase mb-6"
            >
              CONTACT BHARAT PLAY INNOVATIONS
            </motion.h4>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter text-brand-navy leading-[0.85]"
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
              className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed max-w-sm text-brand-gray"
            >
              Whether you want to collaborate, visit our Experience Center, or simply explore the power of purposeful play.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-6 bg-white p-7 sm:p-10 md:p-12 border-3 border-[#0C2444] rounded-[28px]"
            style={{ boxShadow: "10px 10px 0px #0C2444" }}
          >
            <div className="mb-8 pb-5 border-b border-amber-100">
              <span className="font-mono text-xs font-bold tracking-widest text-brand-orange uppercase block mb-1">
                ONLINE INQUIRIES
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-brand-navy">
                SEND A MESSAGE
              </h2>
            </div>
            
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="font-mono text-xs font-bold tracking-widest text-brand-gray uppercase">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    value={formData.firstName ?? ""}
                    onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                    className="border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-brand-orange transition-colors text-base md:text-lg" 
                    placeholder="John" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="font-mono text-xs font-bold tracking-widest text-brand-gray uppercase">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    value={formData.lastName ?? ""}
                    onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                    className="border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-brand-orange transition-colors text-base md:text-lg" 
                    placeholder="Doe" 
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-xs font-bold tracking-widest text-brand-gray uppercase">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email ?? ""}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-brand-orange transition-colors text-base md:text-lg" 
                  placeholder="john@example.com" 
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-mono text-xs font-bold tracking-widest text-brand-gray uppercase">Subject / Purpose</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject ?? ""}
                  onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                  className="border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-brand-orange transition-colors text-base md:text-lg" 
                  placeholder="Experience Center visit / University workshop / Collaboration" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-xs font-bold tracking-widest text-brand-gray uppercase">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message ?? ""}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  className="border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-brand-orange transition-colors text-base md:text-lg resize-none" 
                  placeholder="Tell us about your team, cohort, or playtest reservation..."
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-4 px-8 font-mono text-xs font-bold uppercase tracking-widest rounded-full transition-all flex items-center justify-center gap-3 group w-full sm:w-auto shadow-md shadow-emerald-600/20 hover:scale-[1.02] cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-200 group-hover:text-white transition-colors" />
                  SEND MESSAGE (WHATSAPP)
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="font-mono text-xs text-brand-gray font-semibold">
                  Direct dispatch to +91 82371 32553
                </span>
              </div>
            </form>
          </motion.div>

          {/* Right Column: Contact Details & Elegant Interactive Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            {/* Direct Contact Block */}
            <div 
              className="bg-brand-navy text-white p-7 sm:p-9 rounded-[28px] border-3 border-[#C2410C] relative overflow-hidden group"
              style={{ boxShadow: "10px 10px 0px #C2410C" }}
            >
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-brand-green/10 rounded-full blur-3xl group-hover:bg-brand-orange/20 transition-colors duration-700 pointer-events-none" />
              
              <div className="flex items-center justify-between mb-6 relative z-10">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange">
                  DIRECT CHANNELS
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 font-mono text-[11px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  RESPONSIVE IN 24H
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-brand-green">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">EMAIL</div>
                    <a href="mailto:hello@bharatplay.org" className="text-base font-semibold hover:text-brand-orange transition-colors">
                      hello@bharatplay.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">PHONE &amp; WHATSAPP</div>
                    <a 
                      href="https://wa.me/918237132553" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-base font-semibold hover:text-brand-orange transition-colors"
                    >
                      +91 82371 32553
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================== */}
            {/* ELEGANT ARCHITECTURAL VENUE & MAP CONTAINER                */}
            {/* ========================================================== */}
            <div 
              className="bg-white border-3 border-[#0C2444] rounded-[28px] overflow-hidden transition-all duration-300"
              style={{ boxShadow: "10px 10px 0px #0C2444" }}
            >
              {/* Card Header */}
              <div className="p-6 sm:p-7 pb-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-brand-orange" />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0C2444]">
                      EXPERIENCE HUBS &amp; LABS
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-black uppercase tracking-tight text-brand-navy">
                    CHENNAI VENUES &amp; MAP
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                    3 ACTIVE HUBS
                  </span>
                </div>
              </div>

              {/* Venue Selector Tabs */}
              <div className="px-6 sm:px-7 pt-4 pb-2 bg-slate-50/70 border-b border-slate-200/60">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {CHENNAI_VENUES.map((venue, idx) => {
                    const isSelected = selectedVenueIndex === idx;
                    return (
                      <button
                        key={venue.id}
                        type="button"
                        onClick={() => setSelectedVenueIndex(idx)}
                        className={`px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#0C2444] text-white shadow-sm"
                            : "bg-white text-slate-600 hover:text-brand-navy border border-slate-200/80 hover:bg-slate-100"
                        }`}
                      >
                        {venue.tabTitle}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Map Preview Frame */}
              <div className="relative w-full aspect-[16/9] bg-slate-100 border-b border-slate-200 overflow-hidden group">
                <iframe
                  key={activeVenue.id}
                  title={activeVenue.title}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(activeVenue.mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full border-0 grayscale-[25%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Coordinate Overlay Banner */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm font-mono text-[11px] font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{activeVenue.coordinates}</span>
                  </div>

                  <a
                    href={activeVenue.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto px-3 py-1.5 rounded-full bg-[#0C2444] hover:bg-brand-orange text-white text-[11px] font-mono font-bold uppercase tracking-wider transition-colors shadow-sm inline-flex items-center gap-1.5"
                  >
                    <span>OPEN MAP</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Active Venue Details */}
              <div className="p-6 sm:p-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeVenue.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className={`px-3 py-1 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider ${activeVenue.badgeColor}`}>
                        {activeVenue.badge}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {activeVenue.region}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display text-xl sm:text-2xl font-bold uppercase text-brand-navy leading-tight mb-1">
                        {activeVenue.title}
                      </h4>
                      <p className="font-mono text-xs text-brand-gray font-medium flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        <span>{activeVenue.area}</span>
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                      {activeVenue.description}
                    </p>

                    {/* Schedule Pill Strip */}
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-semibold text-slate-700">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-emerald-600" />
                        <span>{activeVenue.timing} ({activeVenue.schedule})</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <a
                        href={activeVenue.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all"
                      >
                        <Navigation className="w-3.5 h-3.5 text-brand-navy" />
                        <span>GET DIRECTIONS</span>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </a>

                      <button
                        type="button"
                        onClick={() => handleReserveVenue(activeVenue)}
                        className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xs cursor-pointer"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                        <span>RSVP SUNDAY SEAT</span>
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-between pt-1 px-1">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gray">
                SOCIAL COLLECTIVE
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/918237132553"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-amber-200/70 flex items-center justify-center text-brand-navy hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all shadow-xs"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>

                <a
                  href="https://www.instagram.com/bharat_play?utm_source=qr&stkn=MWRqaW9oZXZiMzhxNw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-amber-200/70 flex items-center justify-center text-brand-navy hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all shadow-xs"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>

                <a
                  href="https://in.linkedin.com/company/bharat-play"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-amber-200/70 flex items-center justify-center text-brand-navy hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-xs"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href="https://www.youtube.com/playlist?list=PLNriavw_JQZo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-amber-200/70 flex items-center justify-center text-brand-navy hover:text-white hover:bg-red-600 hover:border-red-600 transition-all shadow-xs"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </main>
  );
}
