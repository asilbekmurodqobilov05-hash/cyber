import { ShieldCheck, Sparkles, TabletSmartphone } from "lucide-react";
import { Container } from "@/components/ui/container";

const items = [
  {
    title: "Premium interface",
    description: "Elegant spacing, refined typography, and subtle motion bring the platform to life across every screen size.",
    icon: Sparkles,
  },
  {
    title: "Secure by default",
    description: "Zod validation, input sanitization, rate limiting, and documented Supabase RLS policies protect core workflows.",
    icon: ShieldCheck,
  },
  {
    title: "Responsive architecture",
    description: "Server-first routes, lazy-loaded UI where appropriate, and reusable components keep performance high and maintenance low.",
    icon: TabletSmartphone,
  },
];

export function PlatformHighlights() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="grid gap-4 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-accent/25 bg-accent-soft text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
