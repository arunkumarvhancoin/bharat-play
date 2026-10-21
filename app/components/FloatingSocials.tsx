"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.884 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const SOCIAL_ITEMS = [
  {
    name: "YouTube",
    label: "Watch on YouTube",
    href: "https://www.youtube.com/playlist?list=PLNriavw_JQZo",
    icon: YouTubeIcon,
    bgClass: "bg-[#FF0000] text-white hover:bg-[#d90000] hover:shadow-[0_4px_16px_rgba(255,0,0,0.45)]",
    sizeClass: "w-10 h-10 sm:w-11 sm:h-11",
    iconSizeClass: "w-5 h-5",
  },
  {
    name: "Instagram",
    label: "Follow on Instagram",
    href: "https://www.instagram.com/bharat_play?utm_source=qr&stkn=MWRqaW9oZXZiMzhxNw%3D%3D",
    icon: InstagramIcon,
    bgClass: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-95 hover:shadow-[0_4px_16px_rgba(220,39,67,0.45)]",
    sizeClass: "w-10 h-10 sm:w-11 sm:h-11",
    iconSizeClass: "w-5 h-5",
  },
  {
    name: "LinkedIn",
    label: "Connect on LinkedIn",
    href: "https://in.linkedin.com/company/bharat-play",
    icon: LinkedInIcon,
    bgClass: "bg-[#0A66C2] text-white hover:bg-[#084e96] hover:shadow-[0_4px_16px_rgba(10,102,194,0.45)]",
    sizeClass: "w-10 h-10 sm:w-11 sm:h-11",
    iconSizeClass: "w-5 h-5",
  },
  {
    name: "WhatsApp",
    label: "Chat on WhatsApp",
    href: "https://wa.me/916381531026?text=Hi%20Bharat%20Play%2C%20I%20would%20like%20to%20connect.",
    icon: WhatsAppIcon,
    bgClass: "bg-[#25D366] text-white hover:bg-[#20ba59] hover:shadow-[0_6px_22px_rgba(37,211,102,0.55)]",
    sizeClass: "w-12 h-12 sm:w-14 sm:h-14",
    iconSizeClass: "w-6 h-6 sm:w-7 sm:h-7",
    isPrimary: true,
  },
];

export default function FloatingSocials() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  return (
    <div 
      className="fixed bottom-5 right-4 sm:bottom-8 sm:right-8 z-40 flex flex-col items-end gap-2 sm:gap-3 pointer-events-none"
      role="complementary"
      aria-label="Floating social and contact links"
    >
      <div className="flex flex-col items-center gap-2 sm:gap-3 pointer-events-auto">
        {/* Secondary Socials (YouTube, Instagram, LinkedIn) */}
        {SOCIAL_ITEMS.filter((i) => !i.isPrimary).map((item) => {
          const Icon = item.icon;
          const isHovered = hoveredItem === item.name;

          return (
            <div 
              key={item.name} 
              className={`relative items-center ${mobileExpanded ? "flex" : "hidden sm:flex"}`}
            >
              {/* Tooltip on desktop */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, x: 8, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 6, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="hidden sm:flex absolute right-full mr-3 items-center pointer-events-none z-50 whitespace-nowrap"
                  >
                    <div className="bg-brand-navy text-white text-xs font-mono font-bold tracking-wider uppercase px-3 py-1.5 rounded shadow-xl flex items-center gap-1.5">
                      <span>{item.label}</span>
                    </div>
                    {/* Tooltip Arrow */}
                    <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-brand-navy" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Button */}
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                title={item.label}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-md ${item.sizeClass} ${item.bgClass}`}
              >
                <Icon className={item.iconSizeClass} />
              </a>
            </div>
          );
        })}

        {/* Mobile Expand / Collapse Toggle Pill (Mobile only) */}
        <button
          type="button"
          onClick={() => setMobileExpanded(!mobileExpanded)}
          aria-label={mobileExpanded ? "Collapse socials" : "Show more socials"}
          className="sm:hidden w-8 h-8 rounded-full bg-white text-brand-navy border border-gray-200 shadow-md flex items-center justify-center font-mono text-[10px] font-bold tracking-widest active:scale-95 transition-transform"
        >
          {mobileExpanded ? "✕" : "•••"}
        </button>

        {/* Primary Action (WhatsApp) - Always Visible */}
        {(() => {
          const wa = SOCIAL_ITEMS.find((i) => i.isPrimary)!;
          const Icon = wa.icon;
          const isHovered = hoveredItem === wa.name;

          return (
            <div key={wa.name} className="relative flex items-center">
              {/* Tooltip on desktop */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, x: 8, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 6, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="hidden sm:flex absolute right-full mr-3 items-center pointer-events-none z-50 whitespace-nowrap"
                  >
                    <div className="bg-brand-navy text-white text-xs font-mono font-bold tracking-wider uppercase px-3 py-1.5 rounded shadow-xl flex items-center gap-1.5">
                      <span>{wa.label}</span>
                    </div>
                    <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-brand-navy" />
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href={wa.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={wa.label}
                title={wa.label}
                onMouseEnter={() => setHoveredItem(wa.name)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-xl ${wa.sizeClass} ${wa.bgClass}`}
              >
                <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
                <Icon className={wa.iconSizeClass} />
              </a>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
