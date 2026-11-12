import Link from "next/link";
import { Sprout } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#DCE8DC] bg-[#FFFFFF] text-[#292D29]">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Left: logo + app name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <Sprout className="size-7 text-[#292D29]" aria-hidden />
          <span className="text-lg font-bold text-[#173F35] tracking-tight sm:text-xl">
            Benevo
          </span>
        </Link>

        {/* Middle: primary route */}
        <nav aria-label="Main">
          <Link
            href="/events"
            className="text-xs font-semibold uppercase text-[#292D29] tracking-widest transition-colors hover:text-[#75A77A] sm:text-sm"
          >
            Upcoming Events
          </Link>
        </nav>

        {/* Right: theme toggle + login */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <Link
            href="/login"
            aria-label="Log in"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-9 rounded-full bg-[#254F36] px-4 text-primary-foreground hover:bg-[#193F2D] sm:h-10 sm:px-5",
            )}
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
