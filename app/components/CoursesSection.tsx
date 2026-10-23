"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const COURSES = [
  {
    id: "envs102",
    code: "ENVS102",
    date: "25th April, Sat",
    title: "ENVS102 : DISASTERS-NATURAL & MAN-MADE",
    desc: "An intensive play-based studio exploring natural and anthropogenic hazards, emergency budget trade-offs, and disaster preparedness through serious games.",
    color: "text-brand-orange",
    border: "border-brand-orange",
    href: "/programs/courses"
  },
  {
    id: "csit122",
    code: "CSIT122",
    date: "23rd April, Thur",
    title: "CSIT122 : INTRODUCTION TO INTERNET-OF-THINGS",
    desc: "A foundational hands-on course introducing sensor networks, edge intelligence, connected urban infrastructure, and cyber-physical security simulations.",
    color: "text-brand-green",
    border: "border-brand-green",
    href: "/programs/courses"
  }
];

export default function CoursesSection() {
  return (
    <section className="pb-16 pt-8 md:pb-20 md:pt-12 px-4 md:px-6 bg-white border-b border-gray-200 relative z-10 -mt-8" id="courses">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <h2 className="font-mono text-xs sm:text-sm tracking-widest text-brand-gray uppercase mb-3">
              LEARNING ACADEMY
            </h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-brand-navy uppercase leading-[0.9]"
            >
              LEARN TO <span className="text-brand-orange">PLAY.</span>
            </motion.h3>
          </div>
          <Link href="/programs" className="inline-flex items-center gap-3 text-brand-navy font-bold text-xs uppercase tracking-widest hover:text-brand-orange transition-colors group">
            EXPLORE ALL PROGRAMS
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {COURSES.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col border border-gray-200 p-6 sm:p-8 hover:shadow-xl transition-shadow bg-brand-offwhite rounded-sm group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-1 ${course.border} border-t-4`} />
                <span className="font-mono text-xs font-bold text-brand-navy bg-white px-2 py-0.5 rounded-xs border border-gray-200">
                  📅 {course.date}
                </span>
              </div>
              <h4 className={`font-display text-2xl sm:text-3xl font-bold uppercase tracking-tighter mb-3 sm:mb-4 ${course.color}`}>
                {course.title}
              </h4>
              <p className="text-brand-gray text-base sm:text-lg font-medium mb-8 sm:mb-12 flex-1">
                {course.desc}
              </p>
              <Link href={course.href} className="inline-flex items-center gap-3 text-brand-navy font-bold text-xs uppercase tracking-widest hover:text-brand-orange transition-colors">
                COURSE DETAILS & ENROLL
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
