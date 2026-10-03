"use client";

import { useState } from "react";
import Image from "next/image";
import type { Photograph } from "@/data/photography";
import Lightbox from "./Lightbox";
import { cn } from "@/lib/utils";

export default function PhotoGrid({ photos }: { photos: Photograph[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => setActiveIndex(i)}
            data-cursor="VIEW"
            className={cn(
              "group relative mb-4 block w-full cursor-pointer overflow-hidden border border-border-muted bg-surface",
              photo.featured && "sm:col-span-2"
            )}
            style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            {(photo.location || photo.date) && (
              <span className="label-mono absolute bottom-3 left-3 text-text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {[photo.location, photo.date].filter(Boolean).join(" · ")}
              </span>
            )}
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox photos={photos} index={activeIndex} onClose={() => setActiveIndex(null)} onNavigate={setActiveIndex} />
      )}
    </>
  );
}
