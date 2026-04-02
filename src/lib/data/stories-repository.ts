import { stories } from "@/lib/data/mock-data";
import { hasSupabaseEnv } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Story } from "@/types";

export async function getStories() {
  if (!hasSupabaseEnv()) {
    return stories;
  }

  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("stories")
      .select("id, slug, title, excerpt, content, image_url, created_at")
      .order("created_at", { ascending: false });

    if (error || !data) {
      return stories;
    }

    return data.map((story) => ({
      id: story.id,
      slug: story.slug,
      title: story.title,
      excerpt: story.excerpt,
      content: story.content.split("

").filter(Boolean),
      imageUrl: story.image_url ?? stories[0].imageUrl,
      author: "Oxford Editorial",
      authorRole: "School Newsroom",
      createdAt: story.created_at,
      readTime: "4 min read",
    })) satisfies Story[];
  } catch {
    return stories;
  }
}

export async function getFeaturedStories() {
  const items = await getStories();
  return items.filter((story) => story.featured).slice(0, 2);
}

export async function getStoryBySlug(slug: string) {
  const items = await getStories();
  return items.find((story) => story.slug === slug) ?? null;
}
