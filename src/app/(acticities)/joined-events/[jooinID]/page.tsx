import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Share2 } from "lucide-react";
import { EventDetailCard } from "@/components/events/event-detail-card";
import { Button } from "@/components/ui/button";
import type { EDType } from "@/components/types/eventDetail";

export default async function EventDetail({
  params,
}: {
  params: Promise<{ jooinID: string }>;
}) {
  const { jooinID } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events-detail/${jooinID}`,
  );
  if (!res.ok) notFound();
  const data: EDType | null = await res.json().catch(() => null);
  if (!data || Array.isArray(data)) notFound();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <Link
          href="/joined-events"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to joined events
        </Link>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1.5 text-muted-foreground"
        >
          <Share2 className="size-4" aria-hidden />
          Share
        </Button>
      </div>

      <div className="mt-4">
        <EventDetailCard event={data} />
      </div>
    </section>
  );
}
