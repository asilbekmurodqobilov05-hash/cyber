import type { Story } from "@/types";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StoryCard } from "@/components/stories/story-card";

export function LatestStoriesSection({ items }: { items: Story[] }) {
  return (
    <section className="py-14 md:py-20">
      <Container className="space-y-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Latest stories"
            title="Stories of leadership, service, and possibility."
            description="Thoughtful editorial features, community reflections, and alumni milestones designed for fast reading and strong search visibility."
          />
          <Button href="/stories" variant="secondary">
            View all stories
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {items.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </Container>
    </section>
  );
}
