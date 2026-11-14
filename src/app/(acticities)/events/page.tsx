import { EventCard } from "@/components/events/event-card";
import { SectionHeading } from "@/components/common/section-heading";
import type { ECType } from "@/components/types/eventsCard";

export default async function EventsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recent-events`);
  const data: ECType[] = await res.json().catch(() => []);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        align="left"
        eyebrow="Volunteer"
        title="Upcoming Events"
        description="Browse social service events happening in your local area."
      />

      {data.length === 0 ? (
        <p className="mt-12 text-center text-base text-muted-foreground">
          No events have been posted yet. Check back soon!
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </section>
  );
}
