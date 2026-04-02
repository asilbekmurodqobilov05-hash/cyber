import { alumniProfiles } from "@/lib/data/mock-data";
import { hasSupabaseEnv } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { AlumniProfile, DirectoryFilters, PaginatedResult } from "@/types";

const PAGE_SIZE = 6;

function applyFilters(items: AlumniProfile[], filters: DirectoryFilters) {
  return items.filter((profile) => {
    const matchesQuery = filters.query
      ? `${profile.name} ${profile.profession}`.toLowerCase().includes(filters.query.toLowerCase())
      : true;
    const matchesYear = filters.year ? String(profile.graduationYear) === filters.year : true;
    const matchesProfession = filters.profession
      ? profile.profession.toLowerCase() === filters.profession.toLowerCase()
      : true;

    return matchesQuery && matchesYear && matchesProfession;
  });
}

export async function getFeaturedAlumni() {
  const items = await getAllAlumni();
  return items.filter((item) => item.featured).slice(0, 3);
}

export async function getAllAlumni() {
  if (!hasSupabaseEnv()) {
    return alumniProfiles;
  }

  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("alumni_profiles")
      .select(`
        user_id,
        year,
        profession,
        bio,
        image_url,
        location,
        achievements,
        socials,
        users (name)
      `)
      .order("year", { ascending: false });

    if (error || !data) {
      return alumniProfiles;
    }

    return data.map((entry) => ({
      id: entry.user_id,
      slug: String(entry.user_id),
      name: entry.users?.[0]?.name ?? "Oxford Alumni",
      graduationYear: entry.year,
      profession: entry.profession,
      bio: entry.bio ?? "",
      imageUrl: entry.image_url ?? alumniProfiles[0].imageUrl,
      location: entry.location ?? "Oxford Global Network",
      achievements: entry.achievements ?? [],
      socials: Array.isArray(entry.socials) ? entry.socials : [],
    })) satisfies AlumniProfile[];
  } catch {
    return alumniProfiles;
  }
}

export async function getDirectory(filters: DirectoryFilters): Promise<PaginatedResult<AlumniProfile>> {
  const items = applyFilters(await getAllAlumni(), filters);
  const page = Number(filters.page ?? "1");
  const start = (page - 1) * PAGE_SIZE;
  const paginated = items.slice(start, start + PAGE_SIZE);

  return {
    items: paginated,
    total: items.length,
    page,
    pageSize: PAGE_SIZE,
    totalPages: Math.max(1, Math.ceil(items.length / PAGE_SIZE)),
  };
}

export async function getAlumniBySlug(slug: string) {
  const items = await getAllAlumni();
  return items.find((item) => item.slug === slug) ?? null;
}

export async function getDirectoryMeta() {
  const items = await getAllAlumni();

  return {
    years: [...new Set(items.map((item) => item.graduationYear))].sort((a, b) => b - a),
    professions: [...new Set(items.map((item) => item.profession))].sort(),
  };
}
