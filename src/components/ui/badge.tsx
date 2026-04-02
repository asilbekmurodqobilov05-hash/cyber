import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-accent/25 bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
