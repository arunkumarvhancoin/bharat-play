import FeaturedEventHero from "./components/FeaturedEventHero";
import TrustedBy from "./components/TrustedBy";
import Stories from "./components/Stories";
import AboutKudos from "./components/AboutKudos";
import ProgramsShowcase from "./components/ProgramsShowcase";
import FinalCTA from "./components/FinalCTA";
import WhatWePlayWith from "./components/WhatWePlayWith";
import CoursesSection from "./components/CoursesSection";

export default function Home() {
  return (
    <>
      {/* 01 — HERO */}
      <FeaturedEventHero />
      {/* <UpcomingEvents /> */}
      
      {/* 03 — ONE VIEW (ABOUT) */}
      <AboutKudos />

      {/* 03.5 — OUR PROGRAMS (COMPACT SHOWCASE) */}
      <ProgramsShowcase />

      {/* 04 — WHAT WE PLAY WITH */}
      <WhatWePlayWith />

      {/* 04.1 - SEE IT IN ACTION (Stories) */}
      <Stories />
      
      {/* 04.5 — COURSES */}
      <CoursesSection />
      
      {/* 07 — TRUSTED BY / COLLABORATORS */}
      <TrustedBy />
      
      {/* 13 — FINAL CTA */}
      <FinalCTA />
    </>
  );
}
