import { SectionHeading } from "@/components/common/section-heading";

export default function JoinedEventsPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        align="left"
        eyebrow="Your events"
        title="Joined Events"
        description="Events you signed up to volunteer at."
      />
    </section>
  );
}
