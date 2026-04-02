import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProfileDetail } from "@/components/alumni/profile-detail";
import { Container } from "@/components/ui/container";
import { getAlumniBySlug } from "@/lib/data/alumni-repository";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const profile = await getAlumniBySlug(slug);

  if (!profile) {
    return { title: "Alumni profile not found" };
  }

  return {
    title: `${profile.name} | Oxford International School Alumni`,
    description: profile.bio,
  };
}

export default async function AlumniProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const profile = await getAlumniBySlug(slug);

  if (!profile) {
    notFound();
  }

  return (
    <section className="py-16 md:py-20">
      <Container>
        <ProfileDetail profile={profile} />
      </Container>
    </section>
  );
}
