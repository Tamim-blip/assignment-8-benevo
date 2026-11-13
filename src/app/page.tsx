import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import RecentUpcomingEvents from "@/components/home/recent-upcomming-events";
import { EventGallery } from "@/components/home/gallery";
import { Newsletter } from "@/components/home/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <RecentUpcomingEvents></RecentUpcomingEvents>
      <EventGallery />
      <Newsletter />
    </>
  );
}
