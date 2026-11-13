import Link from "next/link";
import { Sprout } from "lucide-react";

const EVENT_LINKS = [
  { href: "/events", label: "Upcoming Events" },
  { href: "/create-events", label: "Create Event" },
  { href: "/manage-events", label: "Manage Events" },
  { href: "/joined-events", label: "Joined Events" },
];

const CATEGORY_LINKS = [
  "Plantation",
  "Blood Donation",
  "Cleaning",
  "Education",
  "Winter Clothes",
];

const SOCIAL_LINKS = ["Facebook", "Instagram", "X", "YouTube"];

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Sprout className="size-7" aria-hidden />
              <span className="text-lg font-bold tracking-tight sm:text-xl">
                Benevo
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
              Create, join, and track social service events in your local area —
              from plantations to blood drives, all across Bangladesh.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((social) => (
                <span
                  key={social}
                  className="rounded-full bg-primary-foreground/10 px-3 py-1.5 text-xs font-medium"
                >
                  {social}
                </span>
              ))}
            </div>
          </div>

          <nav aria-label="Footer events">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent">
              Events
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-primary-foreground/70">
              {EVENT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer categories">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent">
              Categories
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-primary-foreground/70">
              {CATEGORY_LINKS.map((category) => (
                <li key={category}>
                  <Link
                    href="/events"
                    className="transition-colors hover:text-primary-foreground"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-primary-foreground/70">
              <li>hello@benevo.org</li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Benevo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
