import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Server,
  Camera,
  Utensils,
  Compass,
  Sprout,
  PenTool,
  Clock,
} from "lucide-react";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { achievements } from "@/data/achievements";
import { publications } from "@/data/publications";
import { blogPosts } from "@/data/blogs";
import { hobbies } from "@/data/hobbies";

const HOBBY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  photography: Camera,
  culinary: Utensils,
  travel: Compass,
  gardening: Sprout,
};

export default function Home() {
  const featuredArchitectures = projects.slice(0, 3);
  const featuredEssays = blogPosts.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section: Editorial & Minimalist */}
      <section className="border-b border-neutral-200 bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Left Column: Core Positioning */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-sm border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-800 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-black" />
                Backend Systems & Applied ML Researcher
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-black leading-snug">
                Backend Systems & Applied ML Research
              </h1>

              <p className="mt-4 text-sm sm:text-base text-neutral-600 max-w-lg leading-relaxed">
                I build high-scale, resilient backend systems and conduct research in decentralized machine learning and AI safety.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/projects/"
                  className="inline-flex items-center gap-2 rounded-sm bg-black px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-85"
                >
                  Explore Systems (7)
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/research/"
                  className="inline-flex items-center gap-2 rounded-sm border border-neutral-300 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black transition-colors hover:bg-neutral-50"
                >
                  Research Papers (2)
                </Link>
                <Link
                  href="/blog/"
                  className="inline-flex items-center gap-2 rounded-sm border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-800 transition-colors hover:bg-neutral-100"
                >
                  <PenTool className="h-3.5 w-3.5 text-neutral-600" />
                  Writing (4)
                </Link>
              </div>
            </div>

            {/* Right Column: User Picture Frame */}
            <div className="lg:col-span-5">
              <div className="relative border border-neutral-200 bg-white p-2 rounded-sm shadow-xs">
                <div className="relative aspect-[1536/1496] w-full overflow-hidden rounded-xs bg-neutral-100">
                  <Image
                    src="/images/mozahad.jpg"
                    alt="G. M. Mozahad"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-2.5 px-1 flex items-center justify-between text-xs text-neutral-600">
                  <span className="font-semibold text-black">G. M. Mozahad</span>
                  <span>Software Engineer & Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Metrics: Systems Scale & Academic Rigor */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="border-l-2 border-black pl-4">
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black">
                99.98%
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-neutral-600">
                Distributed Queue Uptime
              </div>
            </div>
            {achievements.map((item) => (
              <div key={item.id} className="border-l-2 border-black pl-4">
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black">
                  {item.value}
                  {item.suffix}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-neutral-600">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Two Pillars: Distilled Overview */}
      <section className="border-b border-neutral-200 bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest text-neutral-600 block mb-2">
              Core Disciplines
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
              Two Interconnected Pillars
            </h2>
            <p className="mt-2 text-sm text-neutral-600 max-w-xl">
              Systems architecture provides the bedrock for production reliability, while scholarly research pushes the boundaries of decentralized intelligence and model safety.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pillar 1: Backend Architecture */}
            <div className="border border-neutral-200 bg-white p-7 rounded-sm flex flex-col justify-between hover:border-black transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-black text-white">
                    <Server className="h-5 w-5" />
                  </span>
                  <span className="text-xs uppercase tracking-wider text-neutral-600">
                    Pillar 01 · Systems
                  </span>
                </div>

                <h3 className="text-xl font-bold text-black">
                  Backend & Distributed Architecture
                </h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  Decoupling execution lifecycles from request loops. Engineering asynchronous event brokers,
                  distributed locking protocols, and high-throughput databases capable of absorbing chaotic holiday traffic spikes.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-neutral-600">
                  Asynchronous Ingestion · Distributed Mutexes · Concurrency Control · High-Availability Storage
                </span>
                <Link
                  href="/projects/"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-black uppercase hover:underline"
                >
                  View Systems
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 2: Applied ML Research */}
            <div className="border border-neutral-200 bg-white p-7 rounded-sm flex flex-col justify-between hover:border-black transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-black text-white">
                    <Cpu className="h-5 w-5" />
                  </span>
                  <span className="text-xs uppercase tracking-wider text-neutral-600">
                    Pillar 02 · Research
                  </span>
                </div>

                <h3 className="text-xl font-bold text-black">
                  Applied Machine Learning Research
                </h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  Rigorous empirical research addressing core bottlenecks in modern AI: privacy-preserving decentralized learning across non-IID distributions, and runtime defense architectures for autonomous multi-agent pipelines.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-neutral-600">
                  Federated Continual Learning · Runtime Security Gates · Non-IID Optimization
                </span>
                <Link
                  href="/research/"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-black uppercase hover:underline"
                >
                  View Papers
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Architecture Blueprints (Premier 3) */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-600 block mb-2">
                Architectural Blueprints
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
                Production Backend Architectures
              </h2>
            </div>
            <Link
              href="/projects/"
              className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-black"
            >
              View All {projects.length} System Case Studies
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="space-y-5">
            {featuredArchitectures.map((project) => (
              <article
                key={project.id}
                className="group border border-neutral-200 bg-white p-6 sm:p-7 rounded-sm transition-all hover:border-black"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-black">
                        SYSTEM {project.number}
                      </span>
                      <span className="rounded-sm bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-700 font-medium">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="mt-2 text-xl sm:text-2xl font-bold text-black group-hover:underline">
                      <Link href={`/projects/${project.slug}/`}>
                        {project.name}
                      </Link>
                    </h3>

                    <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
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

                  <div className="flex flex-col justify-between items-start lg:items-end gap-3 shrink-0">
                    <div className="border-l-2 lg:border-l-0 lg:border-r-2 border-black pl-3 lg:pl-0 lg:pr-3 py-0.5">
                      <span className="text-[10px] uppercase text-neutral-600 block">
                        Measurable Impact
                      </span>
                      <span className="text-xs font-bold text-black max-w-[220px] block">
                        {project.deepDive?.result.slice(0, 80)}...
                      </span>
                    </div>

                    <Link
                      href={`/projects/${project.slug}/`}
                      className="inline-flex items-center gap-1.5 rounded-sm border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black transition-colors group-hover:bg-black group-hover:text-white group-hover:border-black"
                    >
                      Deep Dive
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Research Spotlight */}
      <section className="border-b border-neutral-200 bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-600 block mb-2">
                Academic Research
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
                Peer-Reviewed Research Manuscripts
              </h2>
            </div>
            <Link
              href="/research/"
              className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-black"
            >
              Full Abstracts & Citations
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publications.map((paper, index) => (
              <div
                key={paper.id}
                className="border border-neutral-200 bg-white p-6 sm:p-7 rounded-sm transition-all hover:border-black flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100 text-xs">
                    <span className="font-bold text-black">PAPER 0{index + 1}</span>
                    <span className="rounded-sm bg-neutral-100 px-2 py-0.5 text-neutral-700 font-semibold">
                      {paper.venue} · {paper.year}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg sm:text-xl font-bold text-black leading-snug">
                    {paper.title}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-700 leading-relaxed line-clamp-3">
                    {paper.abstract}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs text-neutral-600">
                    Author: {paper.authors.join(", ")}
                  </span>
                  <Link
                    href="/research/"
                    className="text-xs font-semibold text-black hover:underline inline-flex items-center gap-1"
                  >
                    Read Manuscript
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Writing & Essays (NEW Blog Section) */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-600 block mb-2">
                Publications & Essays
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
                Technical Writing & Architecture Notes
              </h2>
            </div>
            <Link
              href="/blog/"
              className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-black"
            >
              Browse All {blogPosts.length} Essays
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredEssays.map((post) => (
              <article
                key={post.slug}
                className="border border-neutral-200 bg-white p-6 rounded-sm flex flex-col justify-between hover:border-black transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-600 mb-3">
                    <span className="rounded-sm bg-neutral-100 px-2 py-0.5 text-neutral-700 font-medium">
                      {post.topic}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-black leading-snug hover:underline">
                    <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                  </h3>

                  <p className="mt-2 text-xs text-neutral-600 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-black uppercase hover:underline"
                  >
                    Read
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Snapshot */}
      <section className="border-b border-neutral-200 bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-600 block mb-2">
                Track Record
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
                Engineering Leadership & Experience
              </h2>
            </div>
            <Link
              href="/experience/"
              className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-black"
            >
              Full Career History
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="border border-neutral-200 bg-white p-6 sm:p-7 rounded-sm hover:border-black transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-black uppercase">
                    {exp.company}
                  </span>
                  <span className="text-xs text-neutral-600">
                    {exp.period}
                  </span>
                </div>

                <h3 className="mt-2 text-xl font-bold text-black">{exp.role}</h3>
                <p className="mt-2.5 text-sm text-neutral-700 leading-relaxed">
                  {exp.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-neutral-100 pt-4">
                  {exp.focus.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-neutral-700 bg-neutral-50 px-2 py-0.5 rounded-sm border border-neutral-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Code: Hobbies Snapshot */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-600 block mb-2">
                Beyond the Terminal
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-black">
                Personal Passions & Creative Pursuits
              </h2>
            </div>
            <Link
              href="/about/#hobbies"
              className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-black"
            >
              Read Full Story
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hobbies.map((hobby) => {
              const Icon = HOBBY_ICONS[hobby.id] || Compass;

              return (
                <div
                  key={hobby.id}
                  className="border border-neutral-200 bg-white p-5 rounded-sm flex flex-col justify-between hover:border-black transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-black text-white">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="rounded-sm bg-neutral-100 px-2 py-0.5 text-[11px] text-neutral-700 font-medium">
                        {hobby.tag}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-black">{hobby.title}</h3>
                    <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed line-clamp-2">
                      {hobby.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-neutral-100">
                    <span className="text-[11px] text-neutral-600">
                      {hobby.aspects[0]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering & Research Collaboration Banner */}
      <section className="bg-black text-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-3 font-semibold">
              Engineering & Research Inquiry · Planning to Relocate Worldwide
            </span>
            <blockquote className="text-2xl sm:text-4xl font-bold tracking-tight leading-tight">
              &ldquo;The best systems are not the loudest. They are resilient. They are understandable. They adapt. They disappear into the experience.&rdquo;
            </blockquote>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/projects/"
                className="inline-flex items-center gap-2 rounded-sm bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wider text-black transition-opacity hover:opacity-90"
              >
                Inspect All System Architectures
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/blog/"
                className="inline-flex items-center gap-2 rounded-sm border border-neutral-700 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:border-white"
              >
                Read Technical Writing
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-sm border border-transparent px-4 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-400 transition-colors hover:text-white"
              >
                Get in Touch Directly
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
