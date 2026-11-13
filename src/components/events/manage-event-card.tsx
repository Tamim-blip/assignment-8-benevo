import Image from "next/image";
import { CalendarDays, Eye, MapPin, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ECType } from "@/components/types/eventsCard";
import Link from "next/link";

interface ManageEventCardProps {
  event: ECType;
}

export function ManageEventCard({ event }: ManageEventCardProps) {
  const eventDate = new Date(event.eventDate);
  const formattedDate = Number.isNaN(eventDate.getTime())
    ? event.eventDate
    : eventDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

  return (
    <article className="group flex gap-4 rounded-2xl border bg-card p-3 transition-shadow hover:shadow-lg hover:shadow-foreground/5 sm:gap-5 sm:p-4">
      <div className="relative size-24 shrink-0 overflow-hidden rounded-xl bg-muted sm:size-36">
        {event.thumbnail ? (
          <Image
            src={event.thumbnail}
            alt={event.title}
            fill
            sizes="144px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-secondary/40 text-secondary-foreground">
            <CalendarDays className="size-8" aria-hidden />
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground capitalize">
            {event.eventType}
          </span>
          <h3 className="truncate text-base font-semibold tracking-tight sm:text-lg">
            {event.title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="size-4 shrink-0 text-accent" aria-hidden />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="size-4 shrink-0 text-accent" aria-hidden />
            {event.location}
          </span>
        </div>

        <p className="line-clamp-2 hidden text-sm text-muted-foreground sm:block">
          {event.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
         <Link href={`/events/${event._id}`}>
          <Button
            variant="outline"
            className="h-9 rounded-full gap-1.5 px-4"
          >
            <Eye className="size-4" aria-hidden />
            View
          </Button>
         </Link>
          <Button
            variant="outline"
            className="h-9 rounded-full gap-1.5 px-4"
          >
            <Pencil className="size-4" aria-hidden />
            Edit
          </Button>
          <Button
            variant="destructive"
            className="h-9 rounded-full gap-1.5 px-4"
            aria-label={`Delete ${event.title}`}
          >
            <Trash2 className="size-4" aria-hidden />
            Delete
          </Button>
        </div>
      </div>
    </article>
  );
}
