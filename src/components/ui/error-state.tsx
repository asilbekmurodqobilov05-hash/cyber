import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ErrorState({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 rounded-[2rem] border border-amber-500/30 bg-amber-500/10 px-6 text-center">
      <AlertTriangle className="size-10 text-amber-300" aria-hidden="true" />
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="max-w-xl text-sm leading-6 text-slate-200">{description}</p>
      </div>
      <Button href="/" variant="secondary">
        Return home
      </Button>
    </div>
  );
}
