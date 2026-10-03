import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  category?: string;
  title: string;
  description: string;
  backHref?: string;
  backLabel?: string;
}

export default function PageHeader({
  category,
  title,
  description,
  backHref,
  backLabel = "Back",
}: PageHeaderProps) {
  return (
    <div className="border-b border-neutral-200 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {backHref && (
          <Link
            href={backHref}
            className="group mb-6 inline-flex items-center gap-1.5 font-mono text-xs text-neutral-600 transition-colors hover:text-black"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>{backLabel}</span>
          </Link>
        )}

        {category && (
          <span className="text-xs uppercase tracking-widest text-neutral-600 block mb-3">
            {category}
          </span>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black">
          {title}
        </h1>

        <p className="mt-4 max-w-2xl text-base text-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
