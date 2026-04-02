import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function AlumniLoading() {
  return (
    <section className="py-16 md:py-20">
      <Container className="space-y-8">
        <Skeleton className="h-24 w-full max-w-3xl" />
        <Skeleton className="h-28 w-full rounded-[1.75rem]" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-[420px] rounded-[1.75rem]" />
          ))}
        </div>
      </Container>
    </section>
  );
}
