import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blogs";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  return {
    title: post ? `${post.title} — G. M. Mozahad` : "Blog — G. M. Mozahad",
    description: post ? post.summary : "Technical writing by G. M. Mozahad",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-neutral-200 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/blog/"
            className="group mb-8 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-600 transition-colors hover:text-black"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>All Essays</span>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="rounded-sm bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-700 font-medium">
              {post.topic}
            </span>
            <span className="text-xs text-neutral-600">·</span>
            <span className="inline-flex items-center gap-1 text-xs text-neutral-600">
              <Calendar className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span className="text-xs text-neutral-600">·</span>
            <span className="inline-flex items-center gap-1 text-xs text-neutral-600">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.12]">
            {post.title}
          </h1>

          <div className="mt-6 border-l-2 border-black pl-4 py-1 text-base text-neutral-700 italic">
            {post.summary}
          </div>
        </div>
      </header>

      {/* Body Content */}
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="space-y-6 text-lg text-neutral-800 leading-relaxed">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Author Note */}
        <div className="mt-16 border-t border-neutral-200 pt-10">
          <div className="border border-neutral-200 bg-neutral-50 p-6 rounded-sm">
            <h3 className="text-base font-bold text-black">About the Author</h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              G. M. Mozahad is a Software Engineer, Founder of Craftsmen IT, and forward-deployed backend architect at Brain Station 23 PLC. He conducts research in federated continual learning and runtime security middleware for autonomous LLM agents.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <Link
                href="/contact/"
                className="text-xs font-semibold uppercase tracking-wider text-black hover:underline"
              >
                Reach Out Directly →
              </Link>
              <Link
                href="/cv/"
                className="text-xs font-semibold uppercase tracking-wider text-neutral-600 hover:text-black"
              >
                View CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
