/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-brand-navy pt-12 sm:pt-20 md:pt-40 pb-10 sm:pb-12 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-12 sm:mb-20 md:mb-40">
          
          {/* Brand */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="block mb-6 sm:mb-8">
                <img src="/logo.png" alt="Bharat Play" className="h-16 sm:h-24 md:h-32 w-auto object-contain" />
              </Link>
              <p className="text-gray-500 font-medium max-w-sm text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 ml-0 sm:ml-4">
                Life is a Game. Play it !<br/>
                Planet is our Home. Save it !
              </p>
            </div>
            
            <a href="mailto:hello@bharatplay.org" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold text-brand-navy hover:text-brand-orange transition-colors w-fit group">
              HELLO@BHARATPLAY.ORG
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
          
          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-3">SITEMAP</h3>
              <Link href="/games" className="text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm">Games</Link>
              <Link href="/programs" className="text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm">Programs</Link>
              <Link href="/events" className="text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm">Events</Link>
              <Link href="/testimonials" className="text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm">Testimonials</Link>
              <Link href="/about" className="text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm">About Us</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-3">PROGRAMS</h3>
              <Link href="/programs/game-sessions" className="text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm">Game Sessions</Link>
              <Link href="/programs/play-workshops" className="text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm">Play Workshops</Link>
              <Link href="/programs/play-exhibition" className="text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm">Play Exhibition</Link>
              <Link href="/programs/courses" className="text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm">Courses</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-3">SIMULATIONS</h3>
              <Link href="/games/city-runners" className="text-brand-navy font-semibold hover:text-brand-green transition-colors text-sm">City Runners</Link>
              <Link href="/games/prospera" className="text-brand-navy font-semibold hover:text-brand-green transition-colors text-sm">Prospera</Link>
              <Link href="/games/bibo" className="text-brand-navy font-semibold hover:text-brand-green transition-colors text-sm">BiBo</Link>
              <Link href="/games/cascade" className="text-brand-navy font-semibold hover:text-brand-green transition-colors text-sm">CASCADE</Link>
              <Link href="/games/riskscape" className="text-brand-navy font-semibold hover:text-brand-green transition-colors text-sm">RiskScape</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-3">CONNECT</h3>
              <a 
                href="https://wa.me/916381531026" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm group"
              >
                WhatsApp
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://in.linkedin.com/company/bharat-play" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm group"
              >
                Bharat Play
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://www.linkedin.com/in/dr-balaji-kalluri-phd-a95a4931/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm group"
              >
                Dr. Balaji Kalluri
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://www.instagram.com/bharat_play?utm_source=qr&stkn=MWRqaW9oZXZiMzhxNw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm group"
              >
                Instagram
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://www.youtube.com/playlist?list=PLNriavw_JQZo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-brand-navy font-semibold hover:text-brand-orange transition-colors text-sm group"
              >
                YouTube
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase pt-8 border-t border-gray-100">
          <span>&copy; 2026 BHARAT PLAY INNOVATIONS. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-navy transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-brand-navy transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
