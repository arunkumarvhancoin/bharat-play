import { Suspense } from "react";
import { notFound } from "next/navigation";
import { PROGRAMS, getProgramById, getAllProgramSlugs } from "../../data/programs";
import ProgramExperienceClient from "./ProgramExperienceClient";

export function generateStaticParams() {
  return getAllProgramSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgramById(slug);
  if (!program) {
    return {
      title: "Program Not Found | Bharat Play",
    };
  }
  return {
    title: `${program.name} — ${program.subtitle} | Bharat Play`,
    description: `${program.name}: ${program.tagline} Format: ${program.format}. ${program.institutionalBacking}`,
  };
}

async function ProgramDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgramById(slug);

  if (!program) {
    notFound();
  }

  const otherPrograms = PROGRAMS.filter((p) => p.id !== program.id);

  return <ProgramExperienceClient program={program} otherPrograms={otherPrograms} />;
}

export default function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-offwhite pt-32" />}>
      <ProgramDetails params={params} />
    </Suspense>
  );
}
