import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils/format";
import type { Story } from "@/types";

export function StoryCard({ story }: { story: Story }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/6 transition duration-300 hover:-translate-y-1 hover:border-white/20">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={story.imageUrl}
          alt={story.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="space-y-4 p-5">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
          <span>{formatDate(story.createdAt)}</span>
          <span className="h-1 w-1 rounded-full bg-slate-500" />
          <span>{story.readTime}</span>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-white">{story.title}</h3>
          <p className="text-sm leading-6 text-slate-300">{story.excerpt}</p>
        </div>
        <Link href={`/stories/${story.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:gap-3">
          Read story
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
