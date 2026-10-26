import FeaturedEventHero from "./components/FeaturedEventHero";
import Stories from "./components/Stories";
import AboutKudos from "./components/AboutKudos";
import GamesCarousel from "./components/GamesCarousel";
import ProgramsShowcase from "./components/ProgramsShowcase";
import FinalCTA from "./components/FinalCTA";
// import WhatWePlayWith from "./components/WhatWePlayWith";

export default function Home() {
  return (
    <>
      {/* 01 — HERO */}
      <FeaturedEventHero />
      {/* <UpcomingEvents /> */}
      
      {/* 03 — ONE VIEW (ABOUT) */}
      <AboutKudos />

      {/* 03.2 — OUR GAMES (AUTOMATIC ROTATING CAROUSEL) */}
      <GamesCarousel />

      {/* 03.5 — OUR PROGRAMS (COMPACT SHOWCASE) */}
      <ProgramsShowcase />

      {/* 04 — WHAT WE DESIGN FOR */}
      {/* <WhatWePlayWith /> */}

      {/* 04.1 - SEE IT IN ACTION (Stories) */}
      <Stories />
      
      {/* 13 — FINAL CTA */}
      <FinalCTA />
    </>
  );
}
