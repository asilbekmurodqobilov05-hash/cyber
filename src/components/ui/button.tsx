import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const styles = {
  primary:
    "bg-accent text-surface shadow-[0_20px_60px_rgba(212,175,55,0.28)] hover:-translate-y-0.5 hover:bg-[#e4c35d]",
  secondary:
    "border border-white/20 bg-white/5 text-white hover:-translate-y-0.5 hover:bg-white/10",
  ghost: "text-white/80 hover:bg-white/8 hover:text-white",
};

export function Button({ children, className, href, variant = "primary", ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface",
    styles[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
