import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import type { AlumniProfile } from "@/types";

export function AlumniCard({ alumni }: { alumni: AlumniProfile }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/6 transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
      <div className="relative aspect-[4/4.2] overflow-hidden">
        <Image
          src={alumni.imageUrl}
          alt={alumni.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07152d] via-[#07152d]/30 to-transparent" />
      </div>
      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">{alumni.profession}</p>
          <h3 className="text-2xl font-semibold text-white">{alumni.name}</h3>
          <p className="text-sm leading-6 text-slate-300">{alumni.bio}</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5">
            <CalendarDays className="size-4 text-accent" />
            Class of {alumni.graduationYear}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5">
            <MapPin className="size-4 text-accent" />
            {alumni.location}
          </span>
        </div>
        <Link href={`/alumni/${alumni.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-accent">
          View profile
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
