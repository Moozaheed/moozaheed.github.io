export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

// No confirmed certification records yet. Add entries here as they are earned —
// the Certifications section is fully wired to render this list.
export const certifications: Certification[] = [];
