"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Photograph } from "@/data/photography";

export default function Lightbox({
  photos,
  index,
  onClose,
  onNavigate,
}: {
  photos: Photograph[];
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const photo = photos[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % photos.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + photos.length) % photos.length);
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [index, photos.length, onClose, onNavigate]);

  if (!photo) return null;

  const metadata = [
    { label: "Location", value: photo.location },
    { label: "Date", value: photo.date },
    { label: "Camera", value: photo.camera },
    { label: "Lens", value: photo.lens },
  ].filter((m) => m.value);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[90] flex flex-col bg-background/97 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between px-6 py-5 md:px-10">
        <span className="label-mono text-text-secondary">
          {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
        </span>
        <button onClick={onClose} data-cursor="CLOSE" aria-label="Close viewer" className="cursor-pointer text-text-secondary hover:text-text-primary">
          <X size={20} strokeWidth={1.5} />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-6 md:px-16">
        <button
          onClick={() => onNavigate((index - 1 + photos.length) % photos.length)}
          aria-label="Previous photo"
          data-cursor="PREV"
          className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer p-2 text-text-secondary hover:text-text-primary md:left-6"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>

        <div className="relative h-full max-h-[70vh] w-full max-w-4xl">
          <Image src={photo.src} alt={photo.alt} fill className="object-contain" sizes="90vw" />
        </div>

        <button
          onClick={() => onNavigate((index + 1) % photos.length)}
          aria-label="Next photo"
          data-cursor="NEXT"
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer p-2 text-text-secondary hover:text-text-primary md:right-6"
        >
          <ChevronRight size={24} strokeWidth={1.5} />
        </button>
      </div>

      {metadata.length > 0 && (
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 border-t border-border-muted px-6 py-5 md:px-10">
          {metadata.map((m) => (
            <div key={m.label} className="text-center">
              <p className="label-mono text-text-secondary">{m.label}</p>
              <p className="text-sm text-text-primary">{m.value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
