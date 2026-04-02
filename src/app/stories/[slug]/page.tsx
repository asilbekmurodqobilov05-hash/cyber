import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StoryDetail } from "@/components/stories/story-detail";
import { Container } from "@/components/ui/container";
import { getStoryBySlug } from "@/lib/data/stories-repository";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);

  if (!story) {
    return { title: "Story not found" };
  }

  return {
    title: `${story.title} | Oxford International School Alumni`,
    description: story.excerpt,
  };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  return (
    <section className="py-16 md:py-20">
      <Container>
        <StoryDetail story={story} />
      </Container>
    </section>
  );
}
