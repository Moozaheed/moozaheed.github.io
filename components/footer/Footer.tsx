import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { allNavLinks } from "@/data/nav";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        {/* Top Callout: Hire Me & Opportunities */}
        <div className="grid grid-cols-1 gap-8 pb-12 lg:grid-cols-12 lg:gap-12 border-b border-neutral-200">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest text-neutral-600 block mb-3 font-semibold">
              Open to Opportunities · Planning to Relocate
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
              Engineering reliable software systems, from architecture to delivery.
            </h2>
            <p className="mt-3 text-sm text-neutral-600 max-w-xl leading-relaxed">
              Available for full-time engineering roles, AI systems architecture, and technical consulting. Actively planning international relocation for on-site, hybrid, or graduate research opportunities worldwide.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end lg:items-end gap-3">
            <a
              href="mailto:gmmozahed@gmail.com"
              className="inline-flex items-center gap-2 rounded-sm bg-black px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90 w-fit"
            >
              Get in Touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <span className="text-xs text-neutral-600">
              Response within 24 hours · Planning to Relocate (UTC+6)
            </span>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4 border-b border-neutral-200">
          <div>
            <h3 className="text-xs uppercase tracking-wider text-black font-semibold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {allNavLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-neutral-600 transition-colors hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider text-black font-semibold mb-4">
              Featured Work
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/projects/bloomex/"
                  className="text-xs text-neutral-600 transition-colors hover:text-black"
                >
                  Bloomex (Canada & Australia)
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/alainstar/"
                  className="text-xs text-neutral-600 transition-colors hover:text-black"
                >
                  Alainstar (ERP & Commerce)
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/tiffin-bd/"
                  className="text-xs text-neutral-600 transition-colors hover:text-black"
                >
                  Tiffin BD (Distributed)
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/freemail-ai/"
                  className="text-xs text-neutral-600 transition-colors hover:text-black"
                >
                  Freemail.ai (Multi-Agent)
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/moodle-proctoring-pro/"
                  className="text-xs text-neutral-600 transition-colors hover:text-black"
                >
                  Moodle Proctoring Pro
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider text-black font-semibold mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:gmmozahed@gmail.com"
                  className="inline-flex items-center gap-1 text-xs text-neutral-600 transition-colors hover:text-black"
                >
                  gmmozahed@gmail.com
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-neutral-600 transition-colors hover:text-black"
                >
                  GitHub
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-neutral-600 transition-colors hover:text-black"
                >
                  LinkedIn
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider text-black font-semibold mb-4">
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Distributed Architecture",
                "High-Throughput Backends",
                "Event-Driven Ingestion",
                "Transactional Concurrency",
                "Context Engineering",
                "Multi-Agent Security",
                "Federated Continual Learning",
                "Zero-Downtime Deployments",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-neutral-200 bg-white px-2 py-0.5 text-xs text-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-start justify-between gap-4 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-neutral-600">
            © 2026 G. M. Mozahad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
