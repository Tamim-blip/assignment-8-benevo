import { EventsBrowser } from "@/components/events/events-browser";
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

      <EventsBrowser events={data} />
    </section>
  );
}
