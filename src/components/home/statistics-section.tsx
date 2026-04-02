import type { Statistic } from "@/types";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function StatisticsSection({ items }: { items: Statistic[] }) {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow="Statistics"
            title="A network defined by excellence, service, and ambition."
            description="Our graduates continue to shape communities, industries, and institutions while staying connected to the school that launched their journey."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {items.map((item) => (
              <div key={item.label} className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 backdrop-blur">
                <p className="text-4xl font-semibold text-white">{item.value}</p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{item.label}</p>
                <p className="mt-4 text-sm leading-6 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
