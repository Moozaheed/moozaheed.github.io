export interface SubNavItem {
  label: string;
  href: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: SubNavItem[];
}

export const navItems: NavItem[] = [
  { label: "Architecture", href: "/projects/" },
  { label: "Research", href: "/research/" },
  { label: "Writing", href: "/blog/" },
  {
    label: "Profile",
    href: "/about/",
    children: [
      {
        label: "About & Principles",
        href: "/about/",
        description: "Background narrative, core tenets, and personal hobbies",
      },
      {
        label: "Work Experience",
        href: "/experience/",
        description: "3+ years engineering leadership & enterprise delivery",
      },
      {
        label: "Technical Skills",
        href: "/skills/",
        description: "Distributed architectures, ML frameworks, and tools",
      },
      {
        label: "Curriculum Vitae",
        href: "/cv/",
        description: "Protected Academic CV & Industry Resume",
      },
    ],
  },
  { label: "Contact", href: "/contact/" },
];

export const allNavLinks = [
  { label: "Architecture", href: "/projects/" },
  { label: "Research", href: "/research/" },
  { label: "Writing", href: "/blog/" },
  { label: "Experience", href: "/experience/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];
