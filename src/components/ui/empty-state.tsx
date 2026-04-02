import { SearchX } from "lucide-react";

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex min-h-[260px] flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 px-6 text-center">
      <div className="mb-4 rounded-full border border-white/10 bg-white/5 p-4 text-accent">
        <SearchX className="size-6" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">{description}</p>
    </div>
  );
}
