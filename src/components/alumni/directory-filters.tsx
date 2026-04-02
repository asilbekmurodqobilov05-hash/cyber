import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  defaultQuery?: string;
  defaultYear?: string;
  defaultProfession?: string;
  years: number[];
  professions: string[];
};

export function DirectoryFilters({ defaultQuery, defaultYear, defaultProfession, years, professions }: Props) {
  return (
    <form className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/6 p-5 md:grid-cols-[1.3fr_0.7fr_0.7fr_auto] md:items-end">
      <label className="space-y-2 text-sm text-slate-300">
        Search alumni
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#091427] px-4 py-3">
          <Search className="size-4 text-accent" aria-hidden="true" />
          <input
            name="query"
            defaultValue={defaultQuery}
            placeholder="Search by name or profession"
            className="w-full border-0 bg-transparent text-white outline-none placeholder:text-slate-500"
          />
        </div>
      </label>

      <label className="space-y-2 text-sm text-slate-300">
        Graduation year
        <select
          name="year"
          defaultValue={defaultYear ?? ""}
          className="w-full rounded-2xl border border-white/10 bg-[#091427] px-4 py-3 text-white outline-none"
        >
          <option value="">All years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>

      <label className="space-y-2 text-sm text-slate-300">
        Profession
        <select
          name="profession"
          defaultValue={defaultProfession ?? ""}
          className="w-full rounded-2xl border border-white/10 bg-[#091427] px-4 py-3 text-white outline-none"
        >
          <option value="">All professions</option>
          {professions.map((profession) => (
            <option key={profession} value={profession}>
              {profession}
            </option>
          ))}
        </select>
      </label>

      <div className="flex gap-3">
        <Button type="submit" className="w-full md:w-auto">
          Apply filters
        </Button>
        <Button href="/alumni" type="button" variant="ghost" className="w-full md:w-auto">
          Reset
        </Button>
      </div>
    </form>
  );
}
