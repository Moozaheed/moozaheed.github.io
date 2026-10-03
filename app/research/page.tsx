import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { publications, researchInterests } from "@/data/publications";

export const metadata: Metadata = {
  title: "Research & Publications — G. M. Mozahad",
  description:
    "Scholarly research interests, publications, and preprints across Federated Continual Learning, Trustworthy AI, Multi-Agent Systems, Biomedical AI, and Large-Scale Software Engineering by G. M. Mozahad.",
};

export default function ResearchPage() {
  return (
    <div>
      <PageHeader
        category="SCHOLARSHIP & PAPERS"
        title="Research & Publications"
        description="Scholarly inquiries in privacy-preserving federated learning, trustworthy AI, multi-agent LLM middleware, biomedical diagnostics, and resilient distributed architectures."
      />

      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        {/* Research Interests from Academic CV */}
        <section className="pb-16 border-b border-neutral-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-600 block mb-2">
                Scholarly Domains
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-black">
                Primary Research Interests
              </h2>
            </div>
            <span className="text-xs text-neutral-600">
              5 Core Research Programs
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {researchInterests.map((interest, i) => (
              <div
                key={interest.id}
                className={`border border-neutral-200 bg-white p-6 sm:p-7 rounded-sm hover:border-black transition-colors flex flex-col justify-between ${
                  i === researchInterests.length - 1 ? "lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100 text-xs">
                    <span className="font-bold text-black">
                      DOMAIN 0{i + 1}
                    </span>
                    <span className="rounded-sm border border-neutral-200 bg-white px-2 py-0.5 text-neutral-600">
                      Academic Focus
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-black leading-snug">
                    {interest.category}
                  </h3>

                  <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                    {interest.focus}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold block mb-2">
                    Key Inquiries & Sub-disciplines
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {interest.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-sm border border-neutral-200 bg-white px-2 py-0.5 text-xs text-neutral-800"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Papers List */}
        <section className="py-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-600 block mb-2">
                Manuscripts & Preprints
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-black">
                Peer-Reviewed & Working Papers
              </h2>
            </div>
            <span className="text-xs text-neutral-600">
              {publications.length} Active Manuscripts
            </span>
          </div>

          <div className="space-y-8">
            {publications.map((paper, index) => (
              <article
                key={paper.id}
                className="border border-neutral-200 bg-white p-7 sm:p-9 rounded-sm transition-all hover:border-black"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-black">
                      PAPER 0{index + 1}
                    </span>
                    <span className="rounded-sm border border-neutral-200 bg-white px-2.5 py-0.5 text-xs text-neutral-800 font-medium">
                      {paper.venue}
                    </span>
                  </div>
                  <span className="text-xs text-neutral-600">
                    {paper.year}
                  </span>
                </div>

                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-black leading-snug">
                  {paper.title}
                </h3>

                <p className="mt-2 text-xs text-neutral-600">
                  <strong className="text-neutral-800">Authors:</strong> {paper.authors.join(", ")}
                </p>

                <div className="mt-5">
                  <span className="text-xs uppercase tracking-wider text-black font-semibold block mb-1">
                    Abstract
                  </span>
                  <p className="text-sm text-neutral-700 leading-relaxed max-w-3xl">
                    {paper.abstract}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-neutral-200 bg-white px-2 py-0.5 text-xs text-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs text-neutral-600">
                    Full preprint available upon request
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Academic Collaboration Callout */}
        <section className="border-t border-neutral-200 pt-16">
          <div className="border border-neutral-200 bg-white p-8 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-4 w-4 text-black" />
                <span className="text-xs uppercase tracking-widest text-neutral-600">
                  Research Dialogue
                </span>
              </div>
              <h3 className="text-xl font-bold text-black">Interested in Research Collaboration?</h3>
              <p className="mt-1 text-sm text-neutral-600 max-w-xl">
                Open to co-authoring papers, peer review, and academic research initiatives in federated learning, explainable AI, and multi-agent safety.
              </p>
            </div>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-sm bg-black px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90 whitespace-nowrap"
            >
              Contact for Research
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
