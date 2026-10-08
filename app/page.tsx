import FeaturedEventHero from "./components/FeaturedEventHero";
import UpcomingEvents from "./components/UpcomingEvents";
import ImpactNumbers from "./components/ImpactNumbers";
import TrustedBy from "./components/TrustedBy";
import Voices from "./components/Voices";
import WorkInTheWorld from "./components/WorkInTheWorld";
import Stories from "./components/Stories";
import AboutKudos from "./components/AboutKudos";
import FinalCTA from "./components/FinalCTA";
import WhatWePlayWith from "./components/WhatWePlayWith";
import CoursesSection from "./components/CoursesSection";

export default function Home() {
  return (
    <>
      {/* 01 — EVENTS */}
      <FeaturedEventHero />
      <UpcomingEvents />
      
      {/* 03 — ONE VIEW */}
      <AboutKudos />

      {/* 04 — WHAT WE PLAY WITH */}
      <WhatWePlayWith />

      {/* 04.1 - SEE IT IN ACTION (Stories) */}
      <Stories />
      
      {/* 04.2 — SOCIAL IMPACT */}
      <ImpactNumbers />
      
      {/* 04.5 — COURSES */}
      <CoursesSection />
      
      {/* 05 — FEATURED WORK */}
      <WorkInTheWorld />
      
      {/* 07 — TRUSTED BY / COLLABORATORS */}
      <TrustedBy />
      
      {/* 08 — VOICES / TESTIMONIALS */}
      <Voices />
      
      {/* 13 — FINAL CTA */}
      <FinalCTA />
    </>
  );
}
