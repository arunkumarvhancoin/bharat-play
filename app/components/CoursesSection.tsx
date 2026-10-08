"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const COURSES = [
  {
    id: "systems-thinking",
    title: "SYSTEMS THINKING 101",
    desc: "Learn to map complex urban ecosystems and understand non-linear dynamics.",
    color: "text-brand-green",
    border: "border-brand-green"
  },
  {
    id: "game-design",
    title: "SERIOUS GAME DESIGN",
    desc: "Master the mechanics of designing board games for public policy and civic engagement.",
    color: "text-brand-orange",
    border: "border-brand-orange"
  },
  {
    id: "future-cities",
    title: "FUTURE CITIES",
    desc: "Explore speculative design and foresight methodologies for urban planning.",
    color: "text-brand-navy",
    border: "border-brand-navy"
  }
];

export default function CoursesSection() {
  return (
    <section className="py-32 px-4 md:px-6 bg-white border-b border-gray-200" id="courses">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-mono text-sm tracking-widest text-brand-gray uppercase mb-4">
              LEARNING ACADEMY
            </h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-brand-navy uppercase leading-[0.9]"
            >
              LEARN TO <span className="text-brand-orange">PLAY.</span>
            </motion.h3>
          </div>
          <Link href="/courses" className="inline-flex items-center gap-3 text-brand-navy font-bold text-xs uppercase tracking-widest hover:text-brand-orange transition-colors group">
            VIEW ALL COURSES
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col border border-gray-200 p-8 hover:shadow-xl transition-shadow bg-brand-offwhite rounded-sm group"
            >
              <div className={`w-12 h-1 mb-8 ${course.border} border-t-4`} />
              <h4 className={`font-display text-3xl font-bold uppercase tracking-tighter mb-4 ${course.color}`}>
                {course.title}
              </h4>
              <p className="text-brand-gray text-lg font-medium mb-12 flex-1">
                {course.desc}
              </p>
              <Link href={`/courses`} className="inline-flex items-center gap-3 text-brand-navy font-bold text-xs uppercase tracking-widest hover:text-brand-orange transition-colors">
                EXPLORE COURSE
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
