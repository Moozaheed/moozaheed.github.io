"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, Filter } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { blogPosts } from "@/data/blogs";

const TOPICS = [
  "All",
  "AI Safety & Systems",
  "AI Engineering & Delivery",
  "Backend Architecture",
  "Federated ML Research",
  "Database Internals",
];

export default function BlogPage() {
  const [selectedTopic, setSelectedTopic] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    if (selectedTopic === "All") return true;
    return post.topic === selectedTopic;
  });

  return (
    <div>
      <PageHeader
        category="PUBLICATIONS & ESSAYS"
        title="Technical Writing & Research Notes"
        description="Reflections on high-throughput backend design, context engineering in multi-agent LLM systems, federated optimization, and distributed concurrency."
      />

      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        {/* Topic Filters */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-neutral-200">
          <div className="flex items-center gap-1.5 mr-2 text-xs text-neutral-600">
            <Filter className="h-3.5 w-3.5" />
            <span>Topic:</span>
          </div>
          {TOPICS.map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`rounded-sm px-3.5 py-1.5 text-xs uppercase tracking-wider transition-colors ${
                selectedTopic === topic
                  ? "bg-black text-white font-semibold"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {topic}
            </button>
          ))}
          <span className="ml-auto text-xs text-neutral-600">
            {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
          </span>
        </div>

        {/* Blog Post List */}
        <div className="divide-y divide-neutral-200 pt-6">
          {filteredPosts.map((post, i) => (
            <article
              key={post.slug}
              className="py-10 first:pt-4 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-neutral-600">
                    ESSAY 0{i + 1}
                  </span>
                  <span className="rounded-sm bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-700 font-medium">
                    {post.topic}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-neutral-600">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black group-hover:underline">
                <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
              </h2>

              <p className="mt-3 text-base text-neutral-700 leading-relaxed max-w-4xl">
                {post.summary}
              </p>

              <div className="mt-6">
                <Link
                  href={`/blog/${post.slug}/`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-black hover:underline"
                >
                  Read Essay
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
