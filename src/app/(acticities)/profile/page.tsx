
import { headers } from "next/headers";
import { BadgeCheck } from "lucide-react";

import { SectionHeading } from "@/components/common/section-heading";
import { UpdateProfileDialog } from "@/components/profile/update-profile-dialog";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { auth } from "@/lib/auth";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;


  const initials = (user?.name ?? "U")
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        align="left"
        eyebrow="Your account"
        title="Profile"
        description="Your Benevo account information."
      />

      <div className="mt-10 flex flex-col items-start gap-6 rounded-2xl border bg-card p-6 sm:flex-row sm:items-center sm:p-8">
        <Avatar className="size-20 sm:size-24">
          <AvatarImage
            src={user?.image ?? undefined}
            alt={user?.name ?? "Profile"}
          />
          <AvatarFallback className="bg-primary text-xl text-primary-foreground sm:text-2xl">
            {initials}
          </AvatarFallback>
        </Avatar>

        <div className="flex min-w-0 flex-col gap-1.5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="truncate text-xl font-semibold tracking-tight sm:text-2xl">
              {user?.name}
            </h3>
            {user?.emailVerified ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                <BadgeCheck className="size-3.5" aria-hidden />
                Verified
              </span>
            ) : null}
          </div>
          <p className="truncate text-sm text-muted-foreground sm:text-base">
            {user?.email}
          </p>
        </div>

        <UpdateProfileDialog name={user?.name ?? ""} image={user?.image} />
      </div>
    </section>
  );
}
