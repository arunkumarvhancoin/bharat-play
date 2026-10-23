/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GAMES } from "../data/games";

interface DropdownItem {
  name: string;
  href: string;
}

interface NavLinkConfig {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownKey?: "games" | "programs";
  dropdownItems?: DropdownItem[];
}

const NAV_LINKS: NavLinkConfig[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { 
    label: "Games", 
    href: "/games", 
    hasDropdown: true,
    dropdownKey: "games",
    dropdownItems: GAMES.map((g) => ({ name: g.id === "bibo" ? "BiBo" : g.name, href: `/games/${g.id}` }))
  },
  { 
    label: "Programs", 
    href: "/programs", 
    hasDropdown: true,
    dropdownKey: "programs",
    dropdownItems: [
      { name: "Game Session", href: "/programs/game-sessions" },
      { name: "Play Workshops", href: "/programs/play-workshops" },
      { name: "Play Exhibition", href: "/programs/play-exhibition" },
      { name: "Courses", href: "/programs/courses" },
    ]
  },
  { label: "Events", href: "/events" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<{ [key: string]: boolean }>({
    games: false,
    programs: false
  });
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleMouseEnter = (key: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredDropdown(key);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (key: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
          <Link href="/" className="z-50 relative flex items-center">
            <img src="/logo.png" alt="Bharat Play" className="h-12 md:h-16 w-auto object-contain" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-xs font-semibold tracking-widest uppercase">
            {NAV_LINKS.map((link) => {
              const isSectionActive = link.hasDropdown
                ? pathname.startsWith(link.href) || (link.dropdownKey === "programs" && pathname.startsWith("/courses"))
                : pathname === link.href;

              const isThisHovered = hoveredDropdown === link.dropdownKey;

              // RENDER DROPDOWN ITEM (GAMES OR PROGRAMS)
              if (link.hasDropdown && link.dropdownKey && link.dropdownItems) {
                return (
                  <div
                    key={link.label}
                    className="relative group py-2"
                    onMouseEnter={() => handleMouseEnter(link.dropdownKey!)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={link.href}
                      className={clsx(
                        "inline-flex items-center gap-1 transition-colors py-1",
                        isSectionActive || isThisHovered ? "text-brand-orange" : "text-brand-gray hover:text-brand-navy"
                      )}
                    >
                      <span>{link.label}</span>
                      <ChevronDown 
                        className={clsx(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          isThisHovered && "rotate-180 text-brand-orange"
                        )} 
                      />
                    </Link>

                    {/* HOVER DROPDOWN MENU */}
                    <AnimatePresence>
                      {isThisHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.98 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute top-full left-0 pt-2 z-50 min-w-[210px]"
                        >
                          <div className="bg-white rounded-sm shadow-xl border border-gray-100 py-1.5 overflow-hidden">
                            {link.dropdownItems.map((item) => {
                              const isItemActive = pathname === item.href;
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setHoveredDropdown(null)}
                                  className={clsx(
                                    "block px-4 py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors",
                                    isItemActive
                                      ? "text-brand-orange bg-orange-50/60 font-bold"
                                      : "text-brand-navy hover:text-brand-orange hover:bg-orange-50/40"
                                  )}
                                >
                                  {item.name}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // REGULAR NAV LINKS
              return (
                <Link 
                  key={link.label} 
                  href={link.href} 
                  className={clsx(
                    "transition-colors",
                    isSectionActive ? "text-brand-orange" : "text-brand-gray hover:text-brand-navy"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          
          <button 
            className="md:hidden p-2 text-brand-navy z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-4 text-xl font-display font-bold tracking-tight uppercase mt-4">
              {NAV_LINKS.map((link) => {
                const isSectionActive = link.hasDropdown 
                  ? pathname.startsWith(link.href) || (link.dropdownKey === "programs" && pathname.startsWith("/courses"))
                  : pathname === link.href;

                if (link.hasDropdown && link.dropdownKey && link.dropdownItems) {
                  const isExpanded = !!mobileExpanded[link.dropdownKey];
                  return (
                    <div key={link.label} className="flex flex-col border-b border-gray-100 pb-3">
                      <div className="flex items-center justify-between">
                        <Link 
                          href={link.href} 
                          onClick={() => setIsOpen(false)}
                          className={clsx(
                            isSectionActive ? "text-brand-orange" : "text-brand-navy"
                          )}
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggleMobileDropdown(link.dropdownKey!)}
                          className="p-2 text-brand-gray hover:text-brand-navy"
                          aria-label={`Toggle ${link.label} submenu`}
                        >
                          <ChevronDown className={clsx("w-5 h-5 transition-transform", isExpanded && "rotate-180")} />
                        </button>
                      </div>

                      {/* Mobile submenu items */}
                      {isExpanded && (
                        <div className="mt-2 pl-3 flex flex-col gap-2 border-l-2 border-brand-orange/40">
                          {link.dropdownItems.map((item) => {
                            const isItemActive = pathname === item.href;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={clsx(
                                  "text-base font-display font-bold uppercase tracking-tight py-0.5 transition-colors",
                                  isItemActive ? "text-brand-orange" : "text-brand-navy hover:text-brand-orange"
                                )}
                              >
                                {item.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link 
                    key={link.label} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      "border-b border-gray-100 pb-3",
                      isSectionActive ? "text-brand-orange" : "text-brand-navy"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-auto py-8 flex justify-center">
              <a 
                href="https://wa.me/916381531026?text=Hi%20Bharat%20Play%2C%20I%20would%20like%20to%20connect%20regarding%20City%20Runners." 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)} 
                aria-label="Chat on WhatsApp"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white text-sm font-mono font-bold uppercase tracking-widest w-full py-4 rounded-sm shadow-md"
              >
                <svg 
                  className="w-5 h-5 fill-current" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.884 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z"/>
                </svg>
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
