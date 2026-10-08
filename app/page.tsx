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
      
      {/* 05 — FEATURED WORK */}
      <WorkInTheWorld />
      
      {/* 06 — IMPACT / NUMBERS */}
      <ImpactNumbers />
      
      {/* 07 — TRUSTED BY / COLLABORATORS */}
      <TrustedBy />
      
      {/* 08 — VOICES / TESTIMONIALS */}
      <Voices />
      
      {/* 10 — STORIES / VIDEO */}
      <Stories />
      
      {/* 13 — FINAL CTA */}
      <FinalCTA />
    </>
  );
}
