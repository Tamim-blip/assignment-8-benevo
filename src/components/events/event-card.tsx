import Image from "next/image";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ECType } from "@/components/types/eventsCard";
import Link from "next/link";

interface EventCardProps {
  event: ECType;
}

export function EventCard({ event }: EventCardProps) {
  const eventDate = new Date(event.eventDate);
  const formattedDate = Number.isNaN(eventDate.getTime())
    ? event.eventDate
    : eventDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-none transition-shadow hover:shadow-lg hover:shadow-foreground/5">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {event.thumbnail ? (
          <Image
            src={event.thumbnail}
            alt={event.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-secondary/40 text-secondary-foreground">
            <CalendarDays className="size-10" aria-hidden />
          </div>
        )}

        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground capitalize backdrop-blur-sm">
          {event.eventType}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold tracking-tight">{event.title}</h3>

        <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <CalendarDays className="size-4 shrink-0 text-accent" aria-hidden />
            {formattedDate}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="size-4 shrink-0 text-accent" aria-hidden />
            {event.location}
          </span>
        </div>

        {/* <p className="line-clamp-2 text-sm text-muted-foreground">
          {event.description}
        </p> */}
          <Link href={`/events/${event._id}`}>
        <Button
          variant="secondary"
          className="mt-auto bg-[#254F36] w-full  text-white shadow-sm gap-1.5 rounded-full hover:bg-[#193F2D]"
        >
          View
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </Button>
        </Link>
      </div>
    </article>
  );
}
