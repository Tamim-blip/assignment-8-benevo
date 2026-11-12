import { CalendarPlus, HandHeart, MapPin, TrendingUp } from "lucide-react";
import { FeatureCard } from "@/components/common/feature-card";
import { SectionHeading } from "@/components/common/section-heading";


const features = [
  {
    icon: CalendarPlus,
    title: "Create Events",
    description:
      "Organizers can list plantation drives, clean-ups, and donation camps in minutes.",
    chipClassName: "bg-[#E4F0E5] text-[#28613B]",
  },
  {
    icon: HandHeart,
    title: "Join as a Volunteer",
    description:
      "Find causes you care about and sign up with a single tap — no paperwork.",
    chipClassName: "bg-[#F8E9DD] text-[#A65F36]",
  },
  {
    icon: MapPin,
    title: "Discover Nearby",
    description:
      "See what's happening in your local area, from winter clothing drives to tutoring.",
    chipClassName: "bg-[#E8EEE3] text-[#526C4D]",
  },
  {
    icon: TrendingUp,
    title: "Track Your Impact",
    description:
      "Watch hours served and lives touched grow with every event you join.",
    chipClassName: "bg-[#F1EBDD] text-[#806A42]",
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
