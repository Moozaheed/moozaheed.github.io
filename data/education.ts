export interface EducationEntry {
  institution: string;
  degree: string;
  detail?: string;
  period: string;
}

export const education: EducationEntry = {
  institution: "International Islamic University Chittagong",
  degree: "BSc in Computer Science and Engineering",
  period: "2020 — 2025",
};

export interface AcademicRole {
  id: string;
  title: string;
  org: string;
}

export const academicRoles: AcademicRole[] = [
  { id: "ta", title: "Undergraduate Teaching Assistant", org: "International Islamic University Chittagong" },
  {
    id: "cps",
    title: "Trainer & Organizing Secretary",
    org: "Competitive Programming Society",
  },
];
