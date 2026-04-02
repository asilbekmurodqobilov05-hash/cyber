import Link from "next/link";
import { Button } from "@/components/ui/button";

function buildPageUrl(basePath: string, searchParams: URLSearchParams, page: number) {
  const params = new URLSearchParams(searchParams);
  params.set("page", String(page));
  return `${basePath}?${params.toString()}`;
}

export function DirectoryPagination({
  page,
  totalPages,
  searchParams,
}: {
  page: number;
  totalPages: number;
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const params = new URLSearchParams();
  Object.entries(searchParams).forEach(([key, value]) => {
    if (typeof value === "string" && value) {
      params.set(key, value);
    }
  });

  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-4 md:flex-row">
      <p className="text-sm text-slate-300">
        Page {page} of {totalPages}
      </p>
      <div className="flex gap-3">
        {page > 1 ? (
          <Link href={buildPageUrl("/alumni", params, page - 1)}>
            <Button variant="secondary">Previous</Button>
          </Link>
        ) : null}
        {page < totalPages ? (
          <Link href={buildPageUrl("/alumni", params, page + 1)}>
            <Button>Next page</Button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
