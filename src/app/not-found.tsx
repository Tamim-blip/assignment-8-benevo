import Link from "next/link";
import { ArrowLeft, Compass, Sprout } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
      {/* Background decorations */}
      <div
        className="pointer-events-none absolute -right-20 -top-28 size-72 rounded-full bg-secondary/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-20 size-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Sprout className="size-7" aria-hidden />
        </span>

        <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-accent">
          Error 404
        </p>

        <h1 className="mt-3 max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          This page didn&apos;t grow the way we planned
        </h1>

        <p className="mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back to something that does.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-10 rounded-full px-5 text-sm font-semibold shadow-sm",
            )}
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to home
          </Link>
          <Link
            href="/events"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-10 rounded-full px-5 text-sm font-semibold",
            )}
          >
            <Compass className="size-4" aria-hidden />
            Browse events
          </Link>
        </div>
      </div>
    </section>
  );
}
