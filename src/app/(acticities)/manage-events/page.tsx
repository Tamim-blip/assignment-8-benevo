import { SectionHeading } from "@/components/common/section-heading";
import { ManageEventCard } from "@/components/events/manage-event-card";
import type { ECType } from "@/components/types/eventsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function ManageEventsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const email = session?.user?.email;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/manage-events/${email}`,
  );
  const data: ECType[] = await res.json().catch(() => []);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        align="left"
        eyebrow="Your events"
        title="Manage Events"
        description="Events you created, all in one place."
      />

      {data.length === 0 ? (
        <p className="mt-12 text-center text-base text-muted-foreground">
          You haven&apos;t created any events yet.
        </p>
      ) : (
        <div className="mt-10 flex flex-col gap-4">
          {data.map((event) => (
            <ManageEventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </section>
  );
}
