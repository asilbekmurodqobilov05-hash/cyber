import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getGalleryItems } from "@/lib/data/gallery-repository";

export const metadata: Metadata = {
  title: "Gallery | Oxford International School Alumni",
  description: "Explore curated photography from Oxford International School alumni events, mentorship, and celebrations.",
};

export default async function GalleryPage() {
  const items = await getGalleryItems();

  return (
    <section className="py-16 md:py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments that capture connection, celebration, and legacy"
          description="A responsive masonry-inspired gallery with optimized images and a lightbox experience for school memories and alumni events."
        />
        <GalleryGrid items={items} />
      </Container>
    </section>
  );
}
