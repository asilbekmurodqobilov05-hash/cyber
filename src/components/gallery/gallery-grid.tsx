"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import type { GalleryItem } from "@/types";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeItem = items.find((item) => item.id === activeId) ?? null;

  return (
    <>
      <div className="grid auto-rows-[220px] gap-4 md:grid-cols-3">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={cn(
              "group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 text-left transition duration-300 hover:-translate-y-1 hover:border-accent/30",
              item.heightClass,
            )}
            onClick={() => setActiveId(item.id)}
            aria-label={`Open gallery image: ${item.title}`}
          >
            <Image src={item.imageUrl} alt={item.alt} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07152d] via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{item.category}</p>
              <p className="mt-2 text-xl font-semibold text-white">{item.title}</p>
            </div>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07152d]">
            <button
              type="button"
              className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/40 p-2 text-white"
              onClick={() => setActiveId(null)}
              aria-label="Close lightbox"
            >
              <X className="size-5" />
            </button>
            <div className="relative aspect-[16/10]">
              <Image src={activeItem.imageUrl} alt={activeItem.alt} fill className="object-cover" sizes="100vw" priority />
            </div>
            <div className="space-y-2 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-accent">{activeItem.category}</p>
              <h3 className="text-2xl font-semibold text-white">{activeItem.title}</h3>
              <p className="text-sm leading-6 text-slate-300">{activeItem.alt}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
