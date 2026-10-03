import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, Layers, Database, Shield, Layout, Server, GitBranch } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills — G. M. Mozahad",
  description:
    "Technical stack, programming languages, backend frameworks, and architectural capabilities of G. M. Mozahad.",
};

const SKILL_DETAILS: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; practicalUse: string }
> = {
  ai: {
    icon: Cpu,
    practicalUse:
      "Engineered multi-agent email parsing and context reasoning pipelines at Freemail.ai; designed prompt injection detection middleware and deterministic evaluation suites.",
  },
  backend: {
    icon: Server,
    practicalUse:
      "Built resilient modular APIs with NestJS and Node.js for Alainstar ERP and Brain Station 23 enterprise engagements; engineered REST microservices with transaction boundaries.",
  },
  frontend: {
    icon: Layout,
    practicalUse:
      "Crafted high-performance React and Next.js applications with TypeScript and Tailwind CSS, focusing on semantic HTML, sub-second TTFB, and zero layout shift.",
  },
  databases: {
    icon: Database,
    practicalUse:
      "Designed PostgreSQL relational schemas with strict constraints, indexed high-traffic tables, and utilized Redis for distributed lock synchronization.",
  },
  devops: {
    icon: GitBranch,
    practicalUse:
      "Containerized microservices using Docker; orchestrated automated GitHub Actions CI/CD deployment pipelines to cloud environments and Linux virtual machines.",
  },
  "system-design": {
    icon: Layers,
    practicalUse:
      "Architected message-driven asynchronous queues using RabbitMQ in Tiffin BD, smoothing bursty traffic spikes and safeguarding database health.",
  },
  product: {
    icon: Shield,
    practicalUse:
      "Led technical execution as Founder of Craftsmen IT, translating vague business specifications into concrete architectural milestones and production software.",
  },
};

export default function SkillsPage() {
  return (
    <div>
      <PageHeader
        category="TECHNICAL MATRIX"
        title="Skills & Architectural Stack"
        description="A detailed breakdown of technical competencies, programming tools, and infrastructure environments applied across production systems."
      />

      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const meta = SKILL_DETAILS[category.id] || {
              icon: Layers,
              practicalUse: "Applied across production enterprise software and client solutions.",
            };
            const Icon = meta.icon;

            return (
              <div
                key={category.id}
                className="border border-neutral-200 bg-white p-7 rounded-sm flex flex-col justify-between transition-all hover:border-black"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-black text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-xs uppercase tracking-wider text-neutral-600">
                      {category.id}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-black">{category.label}</h2>

                  <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {meta.practicalUse}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-sm border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs text-neutral-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy on Tooling */}
        <section className="mt-16 border border-neutral-200 bg-neutral-50 p-8 sm:p-10 rounded-sm">
          <span className="text-xs uppercase tracking-widest text-neutral-600 block mb-2">
            Tooling Philosophy
          </span>
          <h3 className="text-2xl font-bold text-black max-w-xl">
            Tools are levers, not religions.
          </h3>
          <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-relaxed max-w-3xl">
            Architecture decisions are driven by constraints, traffic patterns, and team velocity — never by hype.
            A simple SQLite or PostgreSQL database with clear schemas beats a convoluted distributed database every time until scale genuinely demands it.
            When asynchronous decoupled workers are needed, RabbitMQ or Redis queues provide the required isolation without premature complexity.
          </p>
          <div className="mt-6">
            <Link
              href="/projects/"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-black uppercase tracking-wider hover:underline"
            >
              See Tools in Action Across Projects
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
