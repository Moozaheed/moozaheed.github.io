"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { projects } from "@/data/projects";

const CATEGORIES = [
  "All",
  "AI Systems",
  "Distributed Systems",
  "ERP & Commerce",
  "EdTech & Security",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "AI Systems") return project.category.includes("AI");
    if (activeCategory === "Distributed Systems") return project.category.includes("Distributed");
    if (activeCategory === "ERP & Commerce") return project.category.includes("Commerce") || project.category.includes("ERP") || project.category.includes("Platform");
    if (activeCategory === "EdTech & Security") return project.category.includes("EdTech") || project.category.includes("Security") || project.category.includes("Access");
    return true;
  });

  return (
    <div>
      <PageHeader
        category="SYSTEMS & ARCHITECTURE"
        title="Backend Systems & Architectural Blueprints"
        description="Production case studies detailing decoupled event brokers, transactional concurrency control, offline-tolerant synchronization, and AI reasoning pipelines."
      />

      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-neutral-200">
          <div className="flex items-center gap-1.5 mr-2 text-xs text-neutral-600">
            <Filter className="h-3.5 w-3.5" />
            <span>Filter:</span>
          </div>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-sm px-3.5 py-1.5 text-xs uppercase tracking-wider transition-colors ${
                activeCategory === cat
                  ? "bg-black text-white font-semibold"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-xs text-neutral-600">
            Showing {filteredProjects.length} of {projects.length}
          </span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between border border-neutral-200 bg-white p-7 rounded-sm transition-all hover:border-black hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-sm font-bold text-black">
                    {project.number}
                  </span>
                  <span className="rounded-sm bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-700 font-medium">
                    {project.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-black tracking-tight hover:underline">
                  <Link href={`/projects/${project.slug}/`}>
                    {project.name}
                  </Link>
                </h2>

                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="rounded-sm border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-xs text-neutral-700"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-600">
                  Role: {project.deepDive?.role || "Lead Architect"}
                </span>
                <Link
                  href={`/projects/${project.slug}/`}
                  className="inline-flex items-center gap-1.5 rounded-sm bg-black px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-85"
                >
                  Deep Dive
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
