export interface ContactCategory {
  id: string;
  label: string;
}

export const contactCategories: ContactCategory[] = [
  { id: "fulltime-relocation", label: "Full-Time Role / Relocation" },
  { id: "backend", label: "Backend Architecture" },
  { id: "ai", label: "AI Systems & Research" },
  { id: "collaboration", label: "Technical Collaboration" },
];

// LinkedIn/GitHub URLs are intentionally left blank — add the real profile
// URLs here. The Contact section only renders a link when one is present.
export const contactLinks = {
  email: "gmmozahed@gmail.com",
  linkedin: "https://www.linkedin.com/in/moozaheed/",
  github: "https://github.com/Moozaheed",
};
