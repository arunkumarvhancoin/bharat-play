"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-brand-navy pt-40 pb-12 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-40">
          
          {/* Brand */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="block mb-8">
                <img src="/logo.png" alt="Bharat Play" className="h-24 md:h-32 w-auto object-contain" />
              </Link>
              <p className="text-gray-500 font-medium max-w-sm text-lg leading-relaxed mb-12">
                A 21st century urban innovation studio shaping the transition pathways of future cities in the global-south.
              </p>
            </div>
            
            <a href="mailto:hello@bharatplay.org" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold text-brand-navy hover:text-brand-orange transition-colors w-fit group">
              HELLO@BHARATPLAY.ORG
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
          
          {/* Links Grid */}
          <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-8">
            
            <div className="flex flex-col gap-5">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4">SITEMAP</h3>
              <Link href="/events" className="text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm">Events</Link>
              <Link href="/courses" className="text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm">Courses</Link>
              <Link href="/projects" className="text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm">Projects</Link>
              <Link href="/about" className="text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm">About Us</Link>
            </div>
            
            <div className="flex flex-col gap-5">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4">EXPERIENCE</h3>
              <Link href="/projects" className="text-brand-navy font-semibold hover:text-brand-green transition-colors text-sm">City Runner</Link>
              <Link href="/projects" className="text-brand-navy font-semibold hover:text-brand-green transition-colors text-sm">Cascade</Link>
              <Link href="/projects" className="text-brand-navy font-semibold hover:text-brand-green transition-colors text-sm">Prospera</Link>
            </div>
            
            <div className="flex flex-col gap-5">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4">SOCIAL</h3>
              <a href="#" className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm group">
                Instagram
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm group">
                LinkedIn
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm group">
                YouTube
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase pt-8 border-t border-gray-100">
          <span>&copy; 2026 BHARAT PLAY. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-navy transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-brand-navy transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
