import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils/format";
import type { Story } from "@/types";

export function StoryDetail({ story }: { story: Story }) {
  return (
    <article className="space-y-10">
      <div className="space-y-5">
        <Badge>Story</Badge>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">{story.title}</h1>
        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
          <span>{story.author}</span>
          <span className="text-slate-500">/</span>
          <span>{story.authorRole}</span>
          <span className="text-slate-500">/</span>
          <span>{formatDate(story.createdAt)}</span>
          <span className="text-slate-500">/</span>
          <span>{story.readTime}</span>
        </div>
      </div>
      <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem] border border-white/10">
        <Image src={story.imageUrl} alt={story.title} fill className="object-cover" sizes="100vw" priority />
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.82fr_0.18fr]">
        <div className="space-y-6 text-lg leading-9 text-slate-200">
          {story.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <aside className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300">
          <p className="font-semibold uppercase tracking-[0.2em] text-accent">SEO ready</p>
          <p className="mt-3">
            Structured metadata, descriptive headings, and image-rich storytelling help this content perform well in search and social previews.
          </p>
        </aside>
      </div>
    </article>
  );
}
