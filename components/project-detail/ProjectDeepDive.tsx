import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";
import ArchitectureDiagram from "./ArchitectureDiagram";

function SectionBlock({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 border-t border-neutral-200 py-12 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-4">
        <span className="text-xs font-semibold text-neutral-600 block mb-1">
          {index} ·
        </span>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black">
          {title}
        </h3>
      </div>
      <div className="md:col-span-8">{children}</div>
    </div>
  );
}

export default function ProjectDeepDive({ project }: { project: Project }) {
  const d = project.deepDive;
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <article className="w-full bg-white pb-24">
      {/* Header Bar */}
      <div className="border-b border-neutral-200 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Link
            href="/projects/"
            className="group mb-8 inline-flex items-center gap-2 font-mono text-xs text-neutral-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to all projects</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold text-black">
              PROJECT {project.number}
            </span>
            <span className="rounded-sm bg-neutral-100 px-2 py-0.5 font-mono text-[11px] text-neutral-700">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black max-w-4xl leading-tight">
            {project.name}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technology.map((tech) => (
              <span
                key={tech}
                className="rounded-sm border border-neutral-200 bg-neutral-50 px-2.5 py-1 font-mono text-xs text-neutral-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Details */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Role & Summary Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-10 border-b border-neutral-200">
          <div>
            <span className="font-mono text-xs text-neutral-600 uppercase block mb-1">
              Role
            </span>
            <span className="text-sm font-bold text-black">{d.role}</span>
          </div>
          <div>
            <span className="font-mono text-xs text-neutral-600 uppercase block mb-1">
              Domain
            </span>
            <span className="text-sm font-bold text-black">{project.category}</span>
          </div>
          <div>
            <span className="font-mono text-xs text-neutral-600 uppercase block mb-1">
              Core Stack
            </span>
            <span className="text-sm font-bold text-black">
              {project.technology.slice(0, 3).join(", ")}
            </span>
          </div>
        </div>

        {/* The Problem */}
        <SectionBlock index="01" title="The Problem">
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl">
            {d.problem}
          </p>
        </SectionBlock>

        {/* The Approach */}
        <SectionBlock index="02" title="Architectural Approach">
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl">
            {d.approach}
          </p>
        </SectionBlock>

        {/* System Architecture Flow */}
        {d.architecture && (
          <SectionBlock index="03" title="System Flow & Nodes">
            <ArchitectureDiagram flow={d.architecture} />
          </SectionBlock>
        )}

        {/* Engineering Challenges */}
        <SectionBlock index="04" title="Key Challenges & Mitigations">
          <div className="space-y-4 max-w-2xl">
            {d.challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-sm border border-neutral-200 p-4 bg-white"
              >
                <CheckCircle2 className="h-5 w-5 text-black shrink-0 mt-0.5" />
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* Measurable Results */}
        <SectionBlock index="05" title="Results & Impact">
          <div className="rounded-sm border-l-2 border-black bg-neutral-50 p-6 max-w-2xl">
            <p className="text-base sm:text-lg font-medium text-black leading-relaxed">
              {d.result}
            </p>
          </div>
        </SectionBlock>

        {/* Retrospective / Lessons Learned */}
        <SectionBlock index="06" title="Retrospective & Lessons">
          <p className="text-base text-neutral-700 leading-relaxed max-w-2xl italic">
            &ldquo;{d.lessons}&rdquo;
          </p>
        </SectionBlock>

        {/* Bottom Pagination & Navigation */}
        <div className="mt-16 pt-10 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}/`}
              className="group inline-flex items-center gap-2 text-xs font-mono text-neutral-600 hover:text-black"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              <span>
                Previous: <strong className="text-black">{prevProject.name}</strong>
              </span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/projects/"
            className="rounded-sm border border-neutral-300 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black hover:bg-neutral-50"
          >
            All Projects
          </Link>

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}/`}
              className="group inline-flex items-center gap-2 text-xs font-mono text-neutral-600 hover:text-black"
            >
              <span>
                Next: <strong className="text-black">{nextProject.name}</strong>
              </span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </article>
  );
}
