import { SectionHeading } from "@/components/common/section-heading";
import { JoinedEventCard } from "@/components/events/join-event-card";
import type { ECType } from "@/components/types/eventsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function JoinedEventsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const email = session?.user?.email;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/joined-events/${email}`,
  );
  const data: ECType[] = await res.json().catch(() => []);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        align="left"
        eyebrow="Your events"
        title="Joined Events"
        description="Events you signed up to volunteer at."
      />

      {data.length === 0 ? (
        <p className="mt-12 text-center text-base text-muted-foreground">
          You haven&apos;t joined any events yet.
        </p>
      ) : (
        <div className="mt-10 flex flex-col gap-4">
          {data.map((event) => (
            <JoinedEventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </section>
  );
}
