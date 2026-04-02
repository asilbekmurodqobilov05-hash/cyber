"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils/cn";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/alumni", label: "Alumni" },
  { href: "/stories", label: "Stories" },
  { href: "/gallery", label: "Gallery" },
  { href: "/join", label: "Join" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[#08162d]/85 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Oxford International School Alumni home">
          <div className="flex size-11 items-center justify-center rounded-2xl border border-accent/35 bg-accent-soft text-sm font-bold text-accent">
            OIS
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Oxford Alumni</p>
            <p className="text-sm text-slate-300">Oxford International School</p>
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex rounded-full border border-white/10 p-3 text-white md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <Menu className="size-5" />
        </button>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {navigation.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition hover:text-white",
                  active ? "bg-white/10 text-white" : "text-slate-300",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/join" variant="secondary">
            Join Network
          </Button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-white/8 bg-[#08162d] md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {navigation.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm transition",
                    active ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
