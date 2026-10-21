import { Suspense } from "react";
import { notFound } from "next/navigation";
import { GAMES, getGameById, getAllGameSlugs } from "../../data/games";
import GameExperienceClient from "./GameExperienceClient";

export function generateStaticParams() {
  return getAllGameSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = getGameById(slug);
  if (!game) {
    return {
      title: "Game Not Found | Bharat Play",
    };
  }
  return {
    title: `${game.name} — ${game.subtitle} | Bharat Play`,
    description: `${game.name}: ${game.tagline} Theme: ${game.theme}. ${game.academicOrigin}`,
  };
}

async function GameDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = getGameById(slug);

  if (!game) {
    notFound();
  }

  const otherGames = GAMES.filter((g) => g.id !== game.id);

  return <GameExperienceClient game={game} otherGames={otherGames} />;
}

export default function GameDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-offwhite pt-32" />}>
      <GameDetails params={params} />
    </Suspense>
  );
}
