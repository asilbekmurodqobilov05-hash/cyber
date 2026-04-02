import type { Metadata } from "next";
import { StoryCard } from "@/components/stories/story-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getStories } from "@/lib/data/stories-repository";

export const metadata: Metadata = {
  title: "Stories | Oxford International School Alumni",
  description: "Read alumni features, school milestones, and editorial stories from the Oxford International School network.",
};

export default async function StoriesPage() {
  const stories = await getStories();

  return (
    <section className="py-16 md:py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Stories"
          title="A blog-style hub for alumni journeys and school milestones"
          description="Long-form editorial storytelling with clean typography, image-first cards, and SEO-friendly page structure."
        />
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </Container>
    </section>
  );
}
