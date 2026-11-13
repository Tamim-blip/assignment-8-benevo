import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import RecentUpcomingEvents from "@/components/home/recent-upcomming-events";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <RecentUpcomingEvents></RecentUpcomingEvents>
    </>
  );
}
