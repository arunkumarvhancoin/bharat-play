"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Trophy,
  MapPin,
  Calendar,
  ArrowRight,
  X,
  School,
  Building2,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "bp_dismiss_chennai2050_modal";

export default function Chennai2050PopupModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if dismissed in this browser session
    try {
      const dismissed = sessionStorage.getItem(STORAGE_KEY);
      if (dismissed === "true") return;
    } catch {}

    // Show after a gentle 1.2s delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {}
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-lg bg-white rounded-[26px] border-3 border-[#0C2444] shadow-2xl overflow-hidden text-slate-900"
            style={{ boxShadow: "8px 8px 0px #C2410C" }}
          >
            {/* Top Bar with Badge & Close */}
            <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-[11px] font-mono font-black uppercase tracking-wider">
                  CHENNAI INTER-SCHOOL CHAMPIONSHIP
                </span>
              </div>

              <button
                type="button"
                onClick={handleDismiss}
                className="w-7 h-7 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Close Announcement"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-7">
              {/* Event Title */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 font-mono text-[10px] font-bold uppercase">
                    1-Day Applied Game Challenge
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    ·
                  </span>
                  <span className="text-xs font-bold text-emerald-700">
                    Free Entry
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-tight">
                  INNOVATION CHALLENGE:{" "}
                  <span className="text-[#C2410C]">CHENNAI@2050</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  School children (aged 10+) from across Chennai unite in squads
                  to solve Chennai&apos;s urban, energy, and flood future
                  competing across <strong>3 Applied Games</strong> at Victoria
                  Hall, Central.
                </p>
              </div>

              {/* 3 Games Visual Lineup */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 mb-5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  THE 3 APPLIED TOURNAMENT GAMES:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-center">
                    <Building2 className="w-4 h-4 text-[#C2410C] mx-auto mb-1" />
                    <span className="text-[11px] font-bold text-slate-900 block leading-tight truncate">
                      City Runners
                    </span>
                    <span className="text-[9.5px] text-slate-500 block">
                      Governance
                    </span>
                  </div>

                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-center">
                    <Zap className="w-4 h-4 text-[#0C2444] mx-auto mb-1" />
                    <span className="text-[11px] font-bold text-slate-900 block leading-tight truncate">
                      Energetic
                    </span>
                    <span className="text-[9.5px] text-slate-500 block">
                      Decarbonize
                    </span>
                  </div>

                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-center">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 mx-auto mb-1" />
                    <span className="text-[11px] font-bold text-slate-900 block leading-tight truncate">
                      MoD
                    </span>
                    <span className="text-[9.5px] text-slate-500 block">
                      Disasters
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Quick Facts Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs">
                <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-[#C2410C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">
                      26 Jan 2026
                    </span>
                    <span className="text-[10.5px] text-slate-600 block">
                      Republic Day (Alt: Tamil NY)
                    </span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#0C2444] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">
                      Victoria Hall
                    </span>
                    <span className="text-[10.5px] text-slate-600 block">
                      Central (Park Town)
                    </span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-start gap-2">
                  <Trophy className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">
                      ₹30,000 Cash Pool
                    </span>
                    <span className="text-[10.5px] text-slate-600 block">
                      15K / 10K / 5K Trophies
                    </span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-orange-50/70 border border-orange-200/80 flex items-start gap-2">
                  <School className="w-4 h-4 text-[#C2410C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">
                      1 or 2 Teams
                    </span>
                    <span className="text-[10.5px] text-slate-600 block">
                      4–6 Students per Team
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2.5">
                <Link
                  href="/events/chennai-2050-innovation-challenge"
                  onClick={handleDismiss}
                  className="w-full py-3 px-5 rounded-xl bg-[#C2410C] hover:bg-[#9A3412] text-white font-black text-xs sm:text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>VIEW DETAILS &amp; REGISTER SCHOOL TEAM</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center justify-between text-xs pt-1 px-1">
                  <Link
                    href="/events/chennai-2050-innovation-challenge#sponsorship"
                    onClick={handleDismiss}
                    className="text-[#0C2444] hover:underline font-bold"
                  >
                    Commercial Sponsors &amp; Deck ↗
                  </Link>

                  <button
                    type="button"
                    onClick={handleDismiss}
                    className="text-slate-400 hover:text-slate-600 text-[11px] font-medium cursor-pointer"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
