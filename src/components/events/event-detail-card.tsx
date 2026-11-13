'use client'
import Image from "next/image";
import {

  CalendarDays,
  CheckCircle2,
  MapPin,
  Users,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import type { EDType } from "@/components/types/eventDetail";
import { useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "../ui/toast";

/** Static details shared by every event until the API provides real data. */
const STATIC_EVENT_DETAILS = {
  volunteers: 10,
  capacity: 150,
  highlights: [
    "Open to everyone — bring a friend along",
    "All materials and guidance provided on site",
    "Refreshments for all volunteers",
    "Certificate of participation",
  ],
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
}

interface EventDetailCardProps {
  event: EDType;
}

/** Event detail view: hero, description, highlights and organizer sidebar. */
export function EventDetailCard({ event }: EventDetailCardProps) {
  const { volunteers, capacity, highlights } = STATIC_EVENT_DETAILS;
  const spotsLeft = Math.max(capacity - volunteers, 0);
  const joinedPercent = Math.round((volunteers / capacity) * 100);
  const formattedDate = formatDate(event.eventDate);


  const { data: session } = useSession()
  const user = session?.user


  const { _id, ...allData } = event

  const joinData = {
    ...allData,
    join_user_name: user?.name,
    join_user_email: user?.email,
    join_user_image: user?.image,
  }

  const HandleEventJoin = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/joined-events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(joinData)
    })

    const data = await res.json()
    if (data.acknowledged) {
      toast.add({
        type: "success",
        title: "Success",
        description: "You have joined an event",
      })
      redirect('/joined-events')
    }else{
      toast.add({
        type: "error",
        title: "Try again",
        description: " Something went wront",
      })

    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-start">
      <article className="min-w-0">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-muted">
          {event.thumbnail ? (
            <Image
              src={event.thumbnail}
              alt={event.title}
              fill
              priority
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-secondary/40 text-secondary-foreground">
              <CalendarDays className="size-12" aria-hidden />
            </div>
          )}

          <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground capitalize backdrop-blur-sm">
            {event.eventType}
          </span>
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          {event.title}
        </h1>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-sm text-muted-foreground">
            <CalendarDays className="size-4 shrink-0 text-accent" aria-hidden />
            {formattedDate}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4 shrink-0 text-accent" aria-hidden />
            {event.location}
          </span>
        </div>

        <p className="mt-6 text-base text-muted-foreground sm:text-lg">
          {event.description}
        </p>

        <div className="mt-8">
          <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            What you&apos;ll be doing
          </h2>
          <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden
                />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </article>

      <aside className="flex flex-col gap-5 rounded-2xl border bg-card p-6 lg:sticky lg:top-24">
        <h2 className="text-lg font-semibold tracking-tight">Organizer</h2>

        <div className="flex items-center gap-3">
          <Avatar className="size-12">
            {event.image ? (
              <AvatarImage src={event.image} alt={event.name} />
            ) : null}
            <AvatarFallback className="bg-primary text-sm text-primary-foreground">
              {initials(event.name)}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="flex items-center gap-1.5 truncate font-semibold">
              {event.name}

            </p>

          </div>
        </div>

        <div className="flex flex-col gap-2.5 rounded-xl bg-muted/50 p-4 text-sm">
          <span className="flex items-center gap-2.5">
            <CalendarDays className="size-4 shrink-0 text-accent" aria-hidden />
            {formattedDate}
          </span>
          <span className="flex items-center gap-2.5">
            <MapPin className="size-4 shrink-0 text-accent" aria-hidden />
            {event.location}
          </span>
        </div>

        <div>
          <div className="flex items-baseline justify-between text-sm">
            <span className="font-semibold text-foreground">
              {volunteers} joined
            </span>
            <span className="text-muted-foreground">{spotsLeft} spots left</span>
          </div>
          <Progress value={joinedPercent} className="mt-2" />
        </div>

        <Button onClick={HandleEventJoin} className="h-10 w-full gap-2 rounded-full text-base">
          <Users className="size-4" aria-hidden />
          Join Event
        </Button>
        <p className="-mt-3 text-center text-xs text-muted-foreground">
          Free to join — no payment required.
        </p>
      </aside>
    </div>
  );
}
