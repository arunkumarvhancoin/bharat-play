"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Courses", href: "/courses" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
          <Link href="/" className="z-50 relative flex items-center">
            <img src="/logo.png" alt="Bharat Play" className="h-12 md:h-16 w-auto object-contain" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.label} 
                  href={link.href} 
                  className={clsx(
                    "transition-colors",
                    isActive ? "text-brand-orange" : "text-brand-gray hover:text-brand-navy"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          
          <div className="flex items-center gap-4">
            <Link href="#join" className="hidden md:inline-flex items-center justify-center text-brand-navy text-xs font-bold uppercase tracking-widest hover:text-brand-green transition-colors">
              JOIN THE PLAY &rarr;
            </Link>
            <button 
              className="md:hidden p-2 text-brand-navy z-50 relative"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col md:hidden"
          >
            <nav className="flex flex-col gap-8 text-3xl font-display font-bold tracking-tighter uppercase mt-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.label} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      isActive ? "text-brand-orange" : "text-brand-navy"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-auto pb-12">
              <Link href="#join" onClick={() => setIsOpen(false)} className="inline-flex items-center justify-center text-brand-green text-sm font-mono font-bold uppercase tracking-widest w-full border-t border-gray-200 pt-8">
                JOIN THE PLAY &rarr;
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
