
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Heart } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const stats = [
  { value: "280K+", label: "Volunteers" },
  { value: "6K+", label: "Organizations" },
  { value: "12K+", label: "Activities" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-[#F5F7F0] px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">

      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-20 -top-28 size-72 rounded-full bg-[#DDEBD9]/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 size-72 rounded-full bg-[#E3EEDC]/70 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* Badge */}
        <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-[#DCE6D8] bg-white/80 px-4 py-2">
          <Heart className="size-3.5 fill-[#75A77A] text-[#75A77A]" />
          <span className="text-xs font-semibold text-[#315D3C]">
            Small actions. Big impact.
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#193F2D] sm:text-4xl lg:text-5xl">
          Make the world a
          <span className="text-[#75A77A]"> better place,</span>
          <br className="hidden sm:block" /> one act at a time.
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#647568] sm:text-base">
          Connect with people who care. Discover meaningful community
          events, volunteer your time, and turn small acts of kindness
          into lasting change.
        </p>

        {/* Actions */}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/events"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-11 rounded-full bg-[#254F36] px-6 text-sm font-semibold text-white shadow-sm hover:bg-[#193F2D]"
            )}
          >
            Explore Events
            <ArrowRight className="ml-2 size-4" />
          </Link>

          <Link
            href="/create-events"
            className="flex h-11 items-center gap-2 rounded-full border border-[#C8D8C7] bg-white px-6 text-sm font-semibold text-[#315D3C] transition-colors hover:bg-[#EAF2E7]"
          >
            Start an Event
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Statistics */}
        <div className="mx-auto mt-10 grid max-w-xl grid-cols-3 border-t border-[#D8E2D5] pt-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col gap-1",
                index !== 0 && "border-l border-[#D8E2D5]"
              )}
            >
              <span className="text-xl font-bold text-[#254F36] sm:text-2xl">
                {stat.value}
              </span>
              <span className="text-[10px] font-medium text-[#7B897B] sm:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
