import type { AlumniProfile } from "@/types";
import { AlumniCard } from "@/components/alumni/alumni-card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedAlumniSection({ items }: { items: AlumniProfile[] }) {
  return (
    <section className="py-14 md:py-20">
      <Container className="space-y-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Featured alumni"
            title="Meet graduates creating impact in every field."
            description="From medicine to diplomacy, our alumni represent the ambition, values, and curiosity fostered at Oxford International School."
          />
          <Button href="/alumni" variant="secondary">
            Browse directory
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((alumni) => (
            <AlumniCard key={alumni.id} alumni={alumni} />
          ))}
        </div>
      </Container>
    </section>
  );
}
