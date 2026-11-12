import Link from "next/link";
import { Sprout } from "lucide-react";

/** Forest brand panel shown beside auth forms on desktop. */
export function AuthBrandPanel() {
  return (
    <div className="hidden flex-col justify-between gap-10 bg-primary px-10 py-12 text-primary-foreground lg:flex">
      <Link href="/" className="flex items-center gap-2.5">
        <Sprout className="size-7 text-accent" aria-hidden />
        <span className="text-xl font-bold tracking-tight">Benevo</span>
      </Link>
      <div className="flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
          Volunteer, together
        </p>
        <h2 className="max-w-md text-4xl font-medium tracking-tight text-balance">
          Make a difference, one act of kindness at a time
        </h2>
        <p className="max-w-sm text-primary-foreground/70">
          Join 154K people creating and joining social service events in their
          local area.
        </p>
      </div>
      <p className="text-sm text-primary-foreground/70">
        Plantation · Blood Donation · Cleaning · Education · Winter Clothes
      </p>
    </div>
  );
}

/** "or continue with" divider used between auth form and social buttons. */
export function AuthDivider() {
  return (
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      <span className="h-px flex-1 bg-border" />
      or continue with
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
