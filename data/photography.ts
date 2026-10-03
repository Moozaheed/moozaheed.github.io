export interface Photograph {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  location?: string;
  date?: string;
  camera?: string;
  lens?: string;
  featured?: boolean;
}

// No photographs loaded yet. Drop image files into /public/photography
// and add matching entries here — the gallery, masonry grid, and
// fullscreen viewer are fully wired to this data.
export const photographs: Photograph[] = [];
