import type { Metadata } from "next";
import { JoinForm } from "@/components/forms/join-form";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Join the Network | Oxford International School Alumni",
  description: "Reconnect with Oxford International School through the alumni network contact and join form.",
};

export default function JoinPage() {
  return (
    <section className="py-16 md:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Join / Contact"
            title="Reconnect with the Oxford International School community"
            description="Share your details, ask a question, or express interest in joining the network. Messages are validated, sanitized, and protected against abuse."
          />
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-sm leading-7 text-slate-300">
            <p className="font-semibold uppercase tracking-[0.2em] text-accent">What happens next</p>
            <ul className="mt-4 space-y-3">
              <li>Our alumni office reviews every message.</li>
              <li>Profiles can later be connected to Supabase authentication and self-service updates.</li>
              <li>The included schema file documents the recommended RLS setup for secure ownership-based editing.</li>
            </ul>
          </div>
        </div>
        <JoinForm />
      </Container>
    </section>
  );
}
