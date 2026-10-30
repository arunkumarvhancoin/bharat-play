"use client";

import { useState } from "react";
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Phone 
} from "lucide-react";
import { motion } from "framer-motion";

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

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
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-brand-navy pt-32 pb-40 selection:bg-brand-orange selection:text-white">
      
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-6">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-28 pt-12 md:pt-20">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-7 bg-white p-7 sm:p-10 md:p-12 border-2 border-[#0C2444] rounded-[26px]"
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

          {/* Right Column: Contact Details & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Direct Contact Block (Saffron / Orange Outline & Shadow) */}
            <div 
              className="bg-brand-navy text-white p-8 md:p-9 rounded-[26px] border-2 border-[#C2410C] relative overflow-hidden group"
              style={{ boxShadow: "10px 10px 0px #C2410C" }}
            >
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-brand-green/10 rounded-full blur-3xl group-hover:bg-brand-orange/20 transition-colors duration-700"></div>
              
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-6 relative z-10">
                DIRECT REACH
              </h3>
              
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-brand-green mt-1 shrink-0" />
                  <div>
                    <div className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gray mb-1">EMAIL</div>
                    <a href="mailto:hello@bharatplay.org" className="text-lg font-medium hover:text-brand-orange transition-colors">hello@bharatplay.org</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-brand-green mt-1 shrink-0" />
                  <div>
                    <div className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gray mb-1">PHONE & WHATSAPP</div>
                    <a 
                      href="https://wa.me/918237132553" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-lg font-medium hover:text-brand-orange transition-colors"
                    >
                      +91 82371 32553
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Block */}
            <div 
              className="bg-white border-2 border-[#12352B] p-8 md:p-9 rounded-[26px] relative overflow-hidden group"
              style={{ boxShadow: "10px 10px 0px #12352B" }}
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-amber-100">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-green block mb-1">
                    PHYSICAL VENUES
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy">
                    WEEKLY HOST VENUES & HUBS
                  </h3>
                </div>
                <span className="font-mono text-xs uppercase font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/70">
                  CHENNAI
                </span>
              </div>
              
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3.5 border-b border-amber-100/70 pb-4">
                  <MapPin className="w-4 h-4 text-brand-orange mt-1 shrink-0" />
                  <div>
                    <span className="font-mono text-xs uppercase font-bold tracking-widest text-brand-gray block">1. NORTH CHENNAI</span>
                    <span className="font-display text-base font-bold uppercase text-brand-navy">Kolathur & MKB Nagar</span>
                    <span className="font-mono text-xs text-brand-gray block mt-0.5 font-medium">Bharat Play Experience Center · Every Sunday · 2:30 PM to 5:30 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-b border-amber-100/70 pb-4">
                  <MapPin className="w-4 h-4 text-brand-green mt-1 shrink-0" />
                  <div>
                    <span className="font-mono text-xs uppercase font-bold tracking-widest text-brand-gray block">2. SOUTH CHENNAI (WEEKLY HOST VENUES)</span>
                    <span className="font-display text-base font-bold uppercase text-brand-navy">Quest @ Besant Nagar & Falling Apple, Adyar</span>
                    <span className="font-mono text-xs text-brand-gray block mt-0.5 font-medium">Weekly Community Play Hubs · Every Sunday · 2:30 PM to 5:30 PM (also Chrompet)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-brand-navy mt-1 shrink-0" />
                  <div>
                    <span className="font-mono text-xs uppercase font-bold tracking-widest text-brand-gray block">3. CENTRAL CHENNAI</span>
                    <span className="font-display text-base font-bold uppercase text-brand-navy">Anna Nagar & Nerkundram</span>
                    <span className="font-mono text-xs text-brand-gray block mt-0.5 font-medium">Every Sunday · 2:30 PM to 5:30 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links — Simple icons normally at the end */}
            <div className="flex items-center justify-between pt-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gray">
                FOLLOW US
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
