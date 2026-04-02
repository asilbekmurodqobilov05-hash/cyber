import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#071326]">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Oxford International School</p>
          <p className="max-w-md text-sm leading-7 text-slate-300">
            A premium digital home for alumni stories, community milestones, and lasting professional connections.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li><Link href="/alumni">Directory</Link></li>
            <li><Link href="/stories">Stories</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Connect</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li><Link href="/join">Join the network</Link></li>
            <li><a href="mailto:alumni@oxfordinternational.edu">alumni@oxfordinternational.edu</a></li>
            <li>Oxford International School Alumni Office</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
