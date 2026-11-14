import { Sprout } from "lucide-react";

import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <section className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
      {/* Background decorations */}
      <div
        className="pointer-events-none absolute -right-20 -top-28 size-72 rounded-full bg-secondary/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-20 size-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center gap-5">
        <span className="relative flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Sprout
            className="size-7 animate-pulse"
            aria-hidden
          />
        </span>

        <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Spinner className="size-4" />
          Loading…
        </p>
      </div>
    </section>
  );
}
