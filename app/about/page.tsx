import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, Users, Camera, Utensils, Compass, Sprout } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { profile } from "@/data/profile";
import { education, academicRoles } from "@/data/education";
import { hobbies } from "@/data/hobbies";

export const metadata: Metadata = {
  title: "About — G. M. Mozahad",
  description:
    "Background, engineering principles, education, and personal passions of G. M. Mozahad.",
};

const HOBBY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  photography: Camera,
  culinary: Utensils,
  travel: Compass,
  gardening: Sprout,
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        category="BACKGROUND & PHILOSOPHY"
        title="Engineering Software Built to Endure"
        description="Software Engineer and Founder building AI systems, distributed backends, and reliable web architectures for production products."
      />

      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        {/* Story Section */}
        <section className="grid grid-cols-1 gap-12 lg:grid-cols-12 pb-16 border-b border-neutral-200">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-widest text-neutral-600 block mb-2">
              Narrative
            </span>
            <h2 className="text-2xl font-bold text-black">The Background</h2>
            <div className="mt-6 border-l-2 border-black pl-4 py-1">
              <span className="font-mono text-xs uppercase text-neutral-600 block">Current Focus</span>
              <p className="mt-1 text-sm font-semibold text-black">
                AI Systems, Context Engineering & High-Throughput Backends
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-base text-neutral-700 leading-relaxed">
            <p>
              I began my engineering journey immersed in competitive programming, solving over{" "}
              <strong className="text-black font-semibold">1,500 algorithmic problems</strong>. That intense
              foundation instilled a permanent obsession with memory layout, computational complexity, and
              the reality that real systems must handle chaotic edge cases cleanly.
            </p>
            <p>
              Over the past several years, I have architected and shipped scalable software across
              enterprise and startup environments. As <strong className="text-black font-semibold">Founder & CEO of Craftsmen IT</strong> and
              as a <strong className="text-black font-semibold">Software Engineer at Brain Station 23</strong>, I have designed
              distributed systems with NestJS and RabbitMQ, engineered offline-tolerant POS retail integrations,
              and developed automated exam integrity extensions for institutional platforms.
            </p>
            <p>
              Today, my focus centers on the intersection of <strong className="text-black font-semibold">modern backend architecture and AI systems</strong>.
              I treat LLMs not as magical black boxes, but as nondeterministic compute nodes that require rigorous
              context engineering, strict schema contracts, deterministic middleware guardrails, and observable pipelines.
            </p>
          </div>
        </section>

        {/* Engineering Principles */}
        <section className="py-16 border-b border-neutral-200">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-neutral-600 block mb-2">
              Core Tenets
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              Engineering Principles
            </h2>
            <p className="mt-2 text-sm text-neutral-600 max-w-xl">
              Principles guiding every architectural decision, line of code, and deployment pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.principles.map((principle, index) => (
              <div
                key={principle.title}
                className="border border-neutral-200 p-6 rounded-sm bg-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-neutral-600">0{index + 1}</span>
                  <CheckCircle2 className="h-4 w-4 text-black" />
                </div>
                <h3 className="text-lg font-bold text-black">{principle.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Academic Leadership */}
        <section className="py-16 border-b border-neutral-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-neutral-600 block mb-2">
                Credentials
              </span>
              <h2 className="text-2xl font-bold text-black">Education & Academia</h2>
              <p className="mt-2 text-sm text-neutral-600">
                Rigorous computer science foundation paired with teaching and mentorship.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-8">
              {/* Primary Degree */}
              <div className="border border-neutral-200 p-6 rounded-sm bg-neutral-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-black" />
                    <span className="font-mono text-xs text-neutral-600 uppercase">Degree</span>
                  </div>
                  <span className="font-mono text-xs text-neutral-600">{education.period}</span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-black">{education.degree}</h3>
                <p className="mt-1 text-sm font-semibold text-neutral-800">{education.institution}</p>
                {education.detail && (
                  <div className="mt-4 inline-flex items-center gap-2 rounded-sm bg-white border border-neutral-200 px-3 py-1 font-mono text-xs font-bold text-black">
                    {education.detail}
                  </div>
                )}
              </div>

              {/* Roles */}
              <div className="space-y-4">
                <h4 className="font-mono text-xs uppercase tracking-wider text-black font-semibold">
                  Academic Leadership Roles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {academicRoles.map((role) => (
                    <div
                      key={role.id}
                      className="border border-neutral-200 p-4 rounded-sm bg-white"
                    >
                      <Users className="h-4 w-4 text-black mb-2" />
                      <h5 className="text-sm font-bold text-black">{role.title}</h5>
                      <p className="mt-1 text-xs text-neutral-600">{role.org}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beyond Code: Hobbies & Passions Section */}
        <section className="py-16 border-b border-neutral-200" id="hobbies">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-neutral-600 block mb-2">
              Beyond the Screen
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              Hobbies & Creative Pursuits
            </h2>
            <p className="mt-2 text-sm text-neutral-600 max-w-xl">
              Life outside software architecture — disciplines that inspire patience, observation, and creative expression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hobbies.map((hobby) => {
              const Icon = HOBBY_ICONS[hobby.id] || Compass;

              return (
                <div
                  key={hobby.id}
                  className="border border-neutral-200 bg-white p-7 rounded-sm flex flex-col justify-between transition-all hover:border-black"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-black text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="rounded-sm bg-neutral-100 px-2.5 py-1 font-mono text-[11px] text-neutral-700">
                        {hobby.tag}
                      </span>
                    </div>

                    <span className="font-mono text-xs text-neutral-600 block mb-1">
                      {hobby.category}
                    </span>
                    <h3 className="text-xl font-bold text-black">{hobby.title}</h3>

                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                      {hobby.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-neutral-100">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-black font-semibold block mb-2">
                      Key Highlights:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {hobby.aspects.map((aspect) => (
                        <li
                          key={aspect}
                          className="flex items-center gap-2 font-mono text-[11px] text-neutral-600"
                        >
                          <span className="h-1 w-1 rounded-full bg-black shrink-0" />
                          <span>{aspect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="pt-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-neutral-200 bg-neutral-50 p-8 rounded-sm">
            <div>
              <h3 className="text-xl font-bold text-black">Explore Detailed Project Case Studies</h3>
              <p className="mt-1 text-sm text-neutral-600">
                See problem breakdowns, architecture flow diagrams, and measurable results.
              </p>
            </div>
            <Link
              href="/projects/"
              className="inline-flex items-center gap-2 rounded-sm bg-black px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90 whitespace-nowrap"
            >
              Browse Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
