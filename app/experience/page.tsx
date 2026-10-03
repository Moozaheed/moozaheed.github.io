import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Experience — G. M. Mozahad",
  description:
    "Career trajectory, engineering leadership, and backend architecture experience of G. M. Mozahad.",
};

const DETAILED_EXPERIENCE = [
  {
    id: "craftsmen-it",
    company: "Craftsmen IT",
    role: "Founder & CEO",
    period: "2026 — Present",
    current: true,
    location: "Dhaka, Bangladesh · Remote Worldwide",
    summary:
      "Founded and lead an engineering consultancy and product lab specializing in AI systems, high-concurrency backend architecture, and mission-critical software delivery for global clients.",
    achievements: [
      "Architected distributed, asynchronous message-driven backends handling high-throughput order pipelines with 99.98% uptime.",
      "Engineered autonomous multi-agent context pipelines with deterministic verification guardrails, achieving 94% human acceptance on automated tasks.",
      "Directed end-to-end client engagements from initial technical requirements and system blueprints through production CI/CD deployments.",
    ],
    technologies: ["AI Systems", "Multi-Agent Workflows", "NestJS", "Next.js", "RabbitMQ", "PostgreSQL", "Docker", "AWS"],
  },
  {
    id: "brain-station-23",
    company: "Brain Station 23 PLC",
    role: "Software Engineer I",
    period: "2024 — Present",
    current: true,
    location: "Dhaka, Bangladesh",
    summary:
      "Forward-deployed engineer for Bloomex (Canada & Australia), architecting high-throughput GPMS, OMS, and ARCA APIs in Laravel Lumen while building scalable microservices and Docker CI/CD pipelines.",
    achievements: [
      "Engineered high-throughput OMS, GPMS, and ARCA APIs across Canadian and Australian operations; optimized microservices to eliminate order data loss and reduce warehouse processing latency.",
      "Automated containerized Docker CI/CD pipelines with SonarQube quality gates on AWS infrastructure, ensuring strict code hygiene and zero-downtime releases.",
      "Developed and maintained scalable SaaS applications using Node.js, PHP (Moodle), Electron.js, and Socket.io; applied modern AI-DLC workflows to accelerate testing and deployment cycles.",
    ],
    technologies: ["Microservice", "AIDLC", "Team Collaboration", "CI/CD", "Laravel Lumen", "Docker", "AWS"],
  },
  {
    id: "academic-cp",
    company: "International Islamic University Chittagong",
    role: "Teaching Assistant & Competitive Programming Trainer",
    period: "2022 — 2024",
    current: false,
    location: "Chittagong, Bangladesh",
    summary:
      "Mentored hundreds of undergraduate engineers in algorithm design, asymptotic analysis, and data structures. Organized campus programming contests and trained competitive programming teams.",
    achievements: [
      "Solved 1,500+ problems across Codeforces, LeetCode, and competitive programming judges.",
      "Conducted weekly training workshops covering dynamic programming, graph theory, and number theory.",
      "Served as Organizing Secretary for university-wide competitive programming events.",
    ],
    technologies: ["C++", "Algorithms", "Data Structures", "Graph Theory", "Dynamic Programming", "Mentorship"],
  },
];

export default function ExperiencePage() {
  return (
    <div>
      <PageHeader
        category="TRACK RECORD"
        title="Engineering Experience"
        description="A history of building scalable backends, leading technical initiatives, and shipping dependable software."
      />

      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="relative border-l-2 border-neutral-200 pl-6 sm:pl-10 space-y-16">
          {DETAILED_EXPERIENCE.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-black">
                {exp.current && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                )}
              </div>

              <div className="border border-neutral-200 bg-white p-6 sm:p-8 rounded-sm transition-all hover:border-black">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-neutral-100">
                  <div>
                    <span className="font-mono text-xs font-semibold text-black uppercase">
                      {exp.company}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-black mt-1">
                      {exp.role}
                    </h2>
                  </div>

                  <div className="flex flex-col sm:items-end">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-black">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </span>
                    <span className="font-mono text-[11px] text-neutral-600 mt-0.5">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                  {exp.summary}
                </p>

                <div className="mt-6 space-y-2.5">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-black font-semibold">
                    Key Deliverables & Responsibilities:
                  </h3>
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <CheckCircle2 className="h-4 w-4 text-black shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-neutral-100 flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-neutral-200 bg-neutral-50 px-2 py-0.5 font-mono text-[11px] text-neutral-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Callout */}
        <div className="mt-16 border border-neutral-200 bg-neutral-50 p-8 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-black">Looking for an experienced engineer or architect?</h3>
            <p className="mt-1 text-sm text-neutral-600">
              Open to high-impact software engineering roles, founding engineer positions, and technical advisory.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/cv/"
              className="inline-flex items-center gap-2 rounded-sm border border-neutral-300 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wider text-black transition-colors hover:bg-neutral-100 whitespace-nowrap"
            >
              View CV (Protected)
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-sm bg-black px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90 whitespace-nowrap"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
