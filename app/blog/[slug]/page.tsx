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

function formatInline(text: string) {
  const tokens = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  return tokens.map((token, i) => {
    if (token.startsWith("`") && token.endsWith("`") && token.length > 2) {
      return (
        <code
          key={i}
          className="font-mono text-[0.88em] bg-neutral-100 text-neutral-900 px-1.5 py-0.5 rounded border border-neutral-200"
        >
          {token.slice(1, -1)}
        </code>
      );
    }
    if (token.startsWith("**") && token.endsWith("**") && token.length > 4) {
      return (
        <strong key={i} className="font-semibold text-black">
          {token.slice(2, -2)}
        </strong>
      );
    }
    return token;
  });
}

function ContentBlock({ block, index }: { block: string; index: number }) {
  if (block.startsWith("```") && block.endsWith("```")) {
    const lines = block.split("\n");
    const lang = lines[0].replace("```", "").trim();
    const code = lines.slice(1, -1).join("\n");
    return (
      <div key={index} className="my-6 rounded-sm border border-neutral-800 bg-neutral-950 p-4 font-mono text-xs sm:text-sm text-neutral-100 overflow-x-auto shadow-sm">
        {lang && (
          <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 mb-2 border-b border-neutral-800 pb-1">
            {lang}
          </div>
        )}
        <pre className="font-mono leading-relaxed whitespace-pre">
          <code>{code}</code>
        </pre>
      </div>
    );
  }

  if (block.startsWith("## ")) {
    return (
      <h2 key={index} className="mt-12 mb-4 text-2xl sm:text-3xl font-bold tracking-tight text-black border-b border-neutral-200 pb-2">
        {block.replace(/^##\s+/, "")}
      </h2>
    );
  }

  if (block.startsWith("### ")) {
    return (
      <h3 key={index} className="mt-8 mb-3 text-xl sm:text-2xl font-bold tracking-tight text-black">
        {block.replace(/^###\s+/, "")}
      </h3>
    );
  }

  if (block.startsWith("#### ")) {
    return (
      <h4 key={index} className="mt-6 mb-2 text-sm sm:text-base font-bold font-mono uppercase tracking-wider text-neutral-900">
        {block.replace(/^####\s+/, "")}
      </h4>
    );
  }

  if (block.startsWith("![") && block.includes("](") && block.endsWith(")")) {
    const match = block.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (match) {
      const [, alt, src] = match;
      return (
        <figure key={index} className="my-8">
          <div className="overflow-hidden rounded-sm border border-neutral-200 bg-neutral-50 shadow-xs">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto object-contain max-h-[720px] mx-auto block"
              loading="lazy"
              decoding="async"
            />
          </div>
          {alt && (
            <figcaption className="mt-2.5 text-center font-mono text-xs text-neutral-500">
              {alt}
            </figcaption>
          )}
        </figure>
      );
    }
  }

  if (block.startsWith("> ")) {
    return (
      <blockquote key={index} className="my-6 border-l-2 border-black bg-neutral-50 px-5 py-3.5 text-base sm:text-lg italic text-neutral-800 rounded-r-sm">
        {formatInline(block.replace(/^>\s+/, ""))}
      </blockquote>
    );
  }

  if (block.startsWith("- ") || block.startsWith("* ")) {
    const items = block.split("\n").filter((l) => l.trim().length > 0);
    return (
      <ul key={index} className="my-5 space-y-2 pl-6 list-disc text-base sm:text-lg text-neutral-800">
        {items.map((item, itemIdx) => (
          <li key={itemIdx} className="leading-relaxed">
            {formatInline(item.replace(/^[-*]\s+/, ""))}
          </li>
        ))}
      </ul>
    );
  }

  if (/^\d+\.\s/.test(block)) {
    const items = block.split("\n").filter((l) => l.trim().length > 0);
    return (
      <ol key={index} className="my-5 space-y-2 pl-6 list-decimal text-base sm:text-lg text-neutral-800">
        {items.map((item, itemIdx) => (
          <li key={itemIdx} className="leading-relaxed">
            {formatInline(item.replace(/^\d+\.\s+/, ""))}
          </li>
        ))}
      </ol>
    );
  }

  if (block.includes("|") && block.includes("---")) {
    const rows = block.trim().split("\n").map((r) => r.trim()).filter(Boolean);
    const headerRow = rows[0].split("|").map((c) => c.trim()).filter(Boolean);
    const dataRows = rows.slice(2).map((r) => r.split("|").map((c) => c.trim()).filter(Boolean));
    return (
      <div key={index} className="my-6 overflow-x-auto border border-neutral-200 rounded-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-100 border-b border-neutral-200 font-mono text-xs uppercase tracking-wider text-black">
            <tr>
              {headerRow.map((h, hIdx) => (
                <th key={hIdx} className="p-3 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {dataRows.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-neutral-50/50">
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="p-3 text-neutral-800 leading-normal">
                    {formatInline(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <p key={index} className="leading-relaxed text-neutral-800 text-base sm:text-lg">
      {formatInline(block)}
    </p>
  );
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
          {post.content.map((block, index) => (
            <ContentBlock key={index} block={block} index={index} />
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
