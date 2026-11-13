import { SectionHeading } from "@/components/common/section-heading";
import { EventCard } from "@/components/events/event-card";
import type { ECType } from "@/components/types/eventsCard";

const RecentUpcomingEvents = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/recent-upcoming-events`,
  );
  const data: ECType[] = await res.json().catch(() => []);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Volunteer"
        title="Recent & Upcoming Events"
        description="Join social service events happening near you — from plantations to blood drives."
      />

      {data.length === 0 ? (
        <p className="mt-12 text-center text-base text-[#718071]">
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
};

export default RecentUpcomingEvents;
