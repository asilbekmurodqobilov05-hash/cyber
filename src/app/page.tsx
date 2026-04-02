import { FeaturedAlumniSection } from "@/components/home/featured-alumni-section";
import { HeroSection } from "@/components/home/hero-section";
import { LatestStoriesSection } from "@/components/home/latest-stories-section";
import { PlatformHighlights } from "@/components/home/platform-highlights";
import { StatisticsSection } from "@/components/home/statistics-section";
import { getFeaturedAlumni } from "@/lib/data/alumni-repository";
import { getSiteStatistics } from "@/lib/data/site-repository";
import { getFeaturedStories } from "@/lib/data/stories-repository";

export default async function HomePage() {
  const [featuredAlumni, featuredStories, statistics] = await Promise.all([
    getFeaturedAlumni(),
    getFeaturedStories(),
    getSiteStatistics(),
  ]);

  return (
    <>
      <HeroSection />
      <StatisticsSection items={statistics} />
      <FeaturedAlumniSection items={featuredAlumni} />
      <LatestStoriesSection items={featuredStories} />
      <PlatformHighlights />
    </>
  );
}
