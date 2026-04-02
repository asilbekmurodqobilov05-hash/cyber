import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { AlumniProfile } from "@/types";

export function ProfileDetail({ profile }: { profile: AlumniProfile }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-start">
      <div className="space-y-6">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/6">
          <Image src={profile.imageUrl} alt={profile.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
        </div>
        <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-accent">Connect</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {profile.socials.length ? (
              profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-accent/40 hover:text-white"
                >
                  {social.label}
                </a>
              ))
            ) : (
              <p className="text-sm text-slate-300">No public links available.</p>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <Badge>Class of {profile.graduationYear}</Badge>
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">{profile.name}</h1>
            <p className="mt-3 text-xl text-accent">{profile.profession}</p>
            <p className="mt-3 text-base text-slate-300">{profile.location}</p>
          </div>
        </div>

        <section className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">Biography</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">{profile.bio}</p>
        </section>

        <section className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">Achievements</h2>
          <ul className="mt-5 space-y-4">
            {profile.achievements.map((achievement) => (
              <li key={achievement} className="rounded-2xl border border-white/8 bg-[#091427] px-4 py-4 text-sm leading-7 text-slate-300">
                {achievement}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
