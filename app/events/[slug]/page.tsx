import { Suspense } from "react";
import { notFound } from "next/navigation";
import { EVENTS_DATA, getEventById, getAllEventIds } from "../../data/events";
import EventDetailsClient from "./EventDetailsClient";

export function generateStaticParams() {
  return getAllEventIds().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventById(slug);
  if (!event) {
    return {
      title: "Event Not Found | Bharat Play",
    };
  }
  return {
    title: `${event.title} — ${event.formattedDate} | Bharat Play`,
    description: event.description,
  };
}

async function EventDetailsServer({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventById(slug);

  if (!event) {
    notFound();
  }

  const otherEvents = EVENTS_DATA.filter((e) => e.id !== event.id && e.status === "upcoming");

  return <EventDetailsClient event={event} otherEvents={otherEvents} />;
}

export default function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#faf8f5] pt-32" />}>
      <EventDetailsServer params={params} />
    </Suspense>
  );
}

