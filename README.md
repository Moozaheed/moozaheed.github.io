# G. M. Mozahad — Engineering Portfolio

A minimalist, high-contrast black-and-white portfolio and technical case study website for **G. M. Mozahad** (Software Engineer & Founder). Built with **Next.js 16 (App Router)** and **Tailwind CSS**, designed for maximum performance, accessibility, and zero-configuration static hosting on **GitHub Pages**.

---

## ✦ Design & Architectural Highlights

- **Pure Monochrome Aesthetic**: Pure white background (`#ffffff`) and deep black typography (`#000000`) adhering to Swiss/editorial minimalist principles with WCAG AAA contrast ratio.
- **Ultra Lightweight & Fast**: Zero heavy WebGL or Canvas bundles; instantaneous page transitions and sub-second static builds.
- **Multi-Page App Router**:
  - [`/`](./app/page.tsx) — Hero, core architectural pillars, highlighted metrics, featured case studies, and career snapshot.
  - [`/about/`](./app/about/page.tsx) — Narrative background, engineering principles, academic credentials, and mentorship roles.
  - [`/projects/`](./app/projects/page.tsx) — Filterable project catalogue (AI Systems, Distributed Systems, ERP & Commerce, EdTech & Security).
  - [`/projects/[slug]/`](./app/projects/[slug]/page.tsx) — In-depth architectural case studies with problem definitions, system flow diagrams, challenges, and measurable results.
  - [`/experience/`](./app/experience/page.tsx) — Chronological career timeline (Craftsmen IT, Brain Station 23, Academic leadership).
  - [`/skills/`](./app/skills/page.tsx) — Practical competencies across AI/Context Engineering, Distributed Backends, Databases, and DevOps.
  - [`/research/`](./app/research/page.tsx) — Scholarly preprints on Federated Continual Learning and Multi-Agent LLM Security Middleware.
  - [`/contact/`](./app/contact/page.tsx) — Direct email copy, availability timezone, and interactive static inquiry composer.
- **GitHub Pages Ready**: Configured with `output: "export"`, `trailingSlash: true`, `unoptimized: true`, and `.nojekyll` support.

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Run the local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) (or the port indicated in your console) in your browser.

---

## 🚀 Building for GitHub Pages

To create a static production build exported to the `./out` directory:

```bash
npm run build
```

This generates standalone HTML, CSS, and JS files in `./out`.

### Automated GitHub Pages Deployment (Recommended)
This repository includes a GitHub Actions workflow at [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).

1. Push this repository to GitHub.
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Every push to `main` or `master` will automatically compile and deploy your static site.

---

## 📋 Linting & Verification

```bash
# Run ESLint checks
npm run lint

# Run production build
npm run build
```
