import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@/data/projects";
import ProjectDeepDive from "@/components/project-detail/ProjectDeepDive";

export function generateStaticParams() {
  return projects.filter((p) => p.hasDeepDive).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return { title: project ? `${project.name} — G. M. Mozahad` : "Project — G. M. Mozahad" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.hasDeepDive || !project.deepDive) {
    notFound();
  }

  return <ProjectDeepDive project={project} />;
}
