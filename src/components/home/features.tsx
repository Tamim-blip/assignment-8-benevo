import { CalendarPlus, HandHeart, MapPin, TrendingUp } from "lucide-react";
import { FeatureCard } from "@/components/common/feature-card";
import { SectionHeading } from "@/components/common/section-heading";


const features = [
  {
    icon: CalendarPlus,
    title: "Create Events",
    description:
      "Organizers can list plantation drives, clean-ups, and donation camps in minutes.",
    chipClassName: "bg-primary/10 text-primary",
  },
  {
    icon: HandHeart,
    title: "Join as a Volunteer",
    description:
      "Find causes you care about and sign up with a single tap — no paperwork.",
    chipClassName: "bg-accent/15 text-accent",
  },
  {
    icon: MapPin,
    title: "Discover Nearby",
    description:
      "See what's happening in your local area, from winter clothing drives to tutoring.",
    chipClassName: "bg-secondary/60 text-secondary-foreground",
  },
  {
    icon: TrendingUp,
    title: "Track Your Impact",
    description:
      "Watch hours served and lives touched grow with every event you join.",
    chipClassName: "bg-foreground/10 text-foreground",
  },
];


export function Features() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Why Benevo"
        title="Everything you need to give back"
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            chipClassName={feature.chipClassName}
          />
        ))}
      </div>
    </section>
  );
}
