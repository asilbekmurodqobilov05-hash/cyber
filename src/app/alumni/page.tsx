import type { Metadata } from "next";
import { AlumniCard } from "@/components/alumni/alumni-card";
import { DirectoryFilters } from "@/components/alumni/directory-filters";
import { DirectoryPagination } from "@/components/alumni/pagination";
import { Container } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDirectory, getDirectoryMeta } from "@/lib/data/alumni-repository";

export const metadata: Metadata = {
  title: "Alumni Directory | Oxford International School Alumni",
  description: "Search and discover Oxford International School graduates by year and profession.",
};

export default async function AlumniPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const filters = {
    query: typeof params.query === "string" ? params.query : undefined,
    year: typeof params.year === "string" ? params.year : undefined,
    profession: typeof params.profession === "string" ? params.profession : undefined,
    page: typeof params.page === "string" ? params.page : undefined,
  };

  const [{ items, page, totalPages }, meta] = await Promise.all([getDirectory(filters), getDirectoryMeta()]);

  return (
    <section className="py-16 md:py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Directory"
          title="Discover the Oxford International School alumni network"
          description="Filter by graduation year, profession, or keyword to explore a responsive alumni directory with polished interactions and profile pages."
        />
        <DirectoryFilters
          defaultQuery={filters.query}
          defaultYear={filters.year}
          defaultProfession={filters.profession}
          years={meta.years}
          professions={meta.professions}
        />

        {items.length ? (
          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {items.map((alumni) => (
                <AlumniCard key={alumni.id} alumni={alumni} />
              ))}
            </div>
            <DirectoryPagination page={page} totalPages={totalPages} searchParams={params} />
          </div>
        ) : (
          <EmptyState
            title="No alumni found"
            description="Try adjusting your search or filters to explore more graduates in the Oxford International School community."
          />
        )}
      </Container>
    </section>
  );
}
