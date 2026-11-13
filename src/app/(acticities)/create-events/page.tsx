import { Suspense } from "react";
import { AuthBrandPanel } from "@/components/auth/brand-panel";

import { CreateEventsForm } from "./create-events-form";

function CreateEventsFallback() {
  return (
    <section className="grid w-full flex-1 lg:grid-cols-2">
      <AuthBrandPanel />
      <div
        aria-hidden
        className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="flex w-full max-w-md animate-pulse flex-col gap-5">
          <div className="h-9 w-2/3 rounded-lg bg-muted" />
          <div className="h-5 w-1/2 rounded bg-muted" />
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-14 w-full rounded-lg bg-muted" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CreateEventsPage() {
  return (
    <Suspense fallback={<CreateEventsFallback />}>
      <CreateEventsForm />
    </Suspense>
  );
}
