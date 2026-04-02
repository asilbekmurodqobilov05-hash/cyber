import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-14 pt-16 md:pb-24 md:pt-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(11,29,58,0.92),rgba(11,29,58,0.65)),url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center px-6 py-16 shadow-[0_40px_120px_rgba(0,0,0,0.35)] sm:px-10 md:px-14 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.25),transparent_32%)]" aria-hidden="true" />
          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-3xl space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-slate-200 backdrop-blur">
                <Users className="size-4 text-accent" aria-hidden="true" />
                A global community of graduates and mentors
              </div>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                  Oxford International School Alumni
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                  Connecting graduates and celebrating achievement through stories, mentorship, and a beautifully curated alumni network.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href="/alumni">
                  Explore Alumni
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Button>
                <Button href="/join" variant="secondary">
                  Join Network
                </Button>
              </div>
            </div>

            <div className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/8 p-6 backdrop-blur">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-accent">Impact snapshot</p>
                <p className="mt-4 text-3xl font-semibold text-white">Alumni thriving across 25+ countries</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#0a1730] p-5">
                  <p className="text-sm text-slate-400">Mentorship matches</p>
                  <p className="mt-3 text-3xl font-semibold text-white">310+</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-[#0a1730] p-5">
                  <p className="text-sm text-slate-400">Community events</p>
                  <p className="mt-3 text-3xl font-semibold text-white">48</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
