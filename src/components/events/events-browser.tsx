"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { EventCard } from "@/components/events/event-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { ECType } from "@/components/types/eventsCard";

/** Pill labels must match the eventType values stored in the DB. */
const EVENT_TYPE_FILTERS = [
  "All",
  "Plantation",
  "Blood Donation",
  "Cleanup",
  "Education",
  "Winter Clothes",
  "Donation"
];

interface EventsBrowserProps {
  events: ECType[];
}

/** Search + event-type pills that filter the already-fetched event list. */
export function EventsBrowser({ events }: EventsBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState("All");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return events.filter((event) => {
      const matchesType =
        activeType === "All" || event.eventType === activeType;
      const matchesQuery =
        !normalizedQuery ||
        event.title.toLowerCase().includes(normalizedQuery) ||
        event.location.toLowerCase().includes(normalizedQuery);
      return matchesType && matchesQuery;
    });
  }, [events, query, activeType]);

  const hasFilters = query.trim() !== "" || activeType !== "All";

  return (
    <>
      {/* Search + event-type navigation */}
      <div className="mt-10 flex flex-col gap-5 border-b pb-6">
        <div className="relative w-full max-w-md">
          <Search
            className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search events by title or location"
            aria-label="Search events"
            className="h-11 rounded-full pl-10"
          />
        </div>

        <nav
          aria-label="Filter by event type"
          className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0"
        >
          {EVENT_TYPE_FILTERS.map((type) => (
            <button
              key={type}
              type="button"
              aria-pressed={activeType === type}
              onClick={() => setActiveType(type)}
              className={cn(
                "h-9 shrink-0 rounded-full px-4 text-sm font-semibold transition-colors",
                activeType === type
                  ? "bg-primary text-primary-foreground"
                  : "border bg-card text-foreground hover:bg-muted",
              )}
            >
              {type}
            </button>
          ))}
        </nav>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-base text-muted-foreground">
          {hasFilters
            ? "No events match your search. Try different keywords or filters."
            : "No events have been posted yet. Check back soon!"}
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </>
  );
}
