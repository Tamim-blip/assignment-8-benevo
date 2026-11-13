import { EventCard } from "@/components/events/event-card";
import type { ECType } from "@/components/types/eventsCard";

export default async function EventsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recent-events`);
  const data: ECType[] = await res.json().catch(() => []);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Upcoming Events
      </h1>
      <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
        Browse social service events happening in your local area.
      </p>

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
