"use client";

import { useState, useEffect, useCallback } from "react";
import {
  ShieldAlert,
  Lock,
  Eye,
  Briefcase,
  GraduationCap,
  AlertTriangle,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Check,
} from "lucide-react";
import { engineeringCV, academicCV, CVData } from "@/data/cv";

export default function ProtectedCVViewer() {
  const [activeTab, setActiveTab] = useState<"engineering" | "academic">("engineering");
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isFocused, setIsFocused] = useState<boolean>(true);
  const [securityNotice, setSecurityNotice] = useState<string | null>(null);

  const cv: CVData = activeTab === "engineering" ? engineeringCV : academicCV;

  const triggerSecurityNotice = useCallback((message: string) => {
    setSecurityNotice(message);
    setTimeout(() => {
      setSecurityNotice(null);
    }, 3500);
  }, []);

  // Monitor window focus to prevent screen capture tools when window loses focus
  useEffect(() => {
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const handleVisibilityChange = () => {
      setIsFocused(document.visibilityState === "visible");
    };

    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Intercept keyboard shortcuts (Ctrl+P, Ctrl+S, Ctrl+U, PrintScreen)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Print interception (Ctrl+P / Cmd+P)
      if ((e.ctrlKey || e.metaKey) && (e.key === "p" || e.key === "P")) {
        e.preventDefault();
        e.stopPropagation();
        triggerSecurityNotice("Printing is restricted for this document.");
        return;
      }

      // Save page interception (Ctrl+S / Cmd+S)
      if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
        e.stopPropagation();
        triggerSecurityNotice("Saving/exporting this document is disabled.");
        return;
      }

      // View source interception (Ctrl+U / Cmd+U)
      if ((e.ctrlKey || e.metaKey) && (e.key === "u" || e.key === "U")) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      // PrintScreen key mitigation
      if (e.key === "PrintScreen") {
        e.preventDefault();
        try {
          navigator.clipboard.writeText("");
        } catch {
          // ignore
        }
        setIsFocused(false);
        setTimeout(() => setIsFocused(true), 1500);
        triggerSecurityNotice("Screen capture detected. Clipboard cleared.");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [triggerSecurityNotice]);

  return (
    <div
      className="w-full select-none"
      onContextMenu={(e) => {
        e.preventDefault();
        triggerSecurityNotice("Right-click is disabled to protect document integrity.");
      }}
      onCopy={(e) => {
        e.preventDefault();
        triggerSecurityNotice("Text copying is restricted.");
      }}
    >
      {/* Security Toast Notification */}
      {securityNotice && (
        <div
          role="alert"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-sm border-2 border-black bg-white px-5 py-3 shadow-lg transition-all animate-bounce"
        >
          <AlertTriangle className="h-5 w-5 text-black shrink-0" />
          <span className="font-mono text-xs font-bold text-black uppercase">
            {securityNotice}
          </span>
        </div>
      )}

      {/* Control Bar: Tabs & View Settings */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border border-neutral-200 bg-white p-3 rounded-sm">
          {/* Tab Selector */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab("engineering")}
              className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs uppercase tracking-wider transition-colors rounded-sm ${
                activeTab === "engineering"
                  ? "bg-black text-white font-bold"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              <Briefcase className="h-3.5 w-3.5" />
              <span>01 · Backend & Forward-Deployed</span>
            </button>
            <button
              onClick={() => setActiveTab("academic")}
              className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs uppercase tracking-wider transition-colors rounded-sm ${
                activeTab === "academic"
                  ? "bg-black text-white font-bold"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              <GraduationCap className="h-3.5 w-3.5" />
              <span>02 · Academic & Research</span>
            </button>
          </div>

          {/* Controls: View-Only Badge & Zoom Tools */}
          <div className="flex flex-wrap items-center gap-3 justify-between lg:justify-end">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-neutral-100 border border-neutral-200 text-neutral-700 font-mono text-[11px] uppercase tracking-wider">
              <Lock className="h-3 w-3 text-neutral-800" />
              <span>Protected View-Only</span>
            </div>

            <div className="flex items-center gap-1 border border-neutral-200 bg-neutral-50 px-2 py-1 rounded-sm">
              <button
                onClick={() => setZoomLevel((z) => Math.max(z - 10, 80))}
                aria-label="Zoom out"
                title="Zoom out"
                className="p-1 text-neutral-700 hover:text-black"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <span className="font-mono text-xs text-neutral-600 px-1 w-10 text-center">
                {zoomLevel}%
              </span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(z + 10, 130))}
                aria-label="Zoom in"
                title="Zoom in"
                className="p-1 text-neutral-700 hover:text-black"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
              <button
                onClick={() => setZoomLevel(100)}
                aria-label="Reset zoom"
                title="Reset zoom"
                className="p-1 text-neutral-700 hover:text-black ml-0.5"
              >
                <Maximize2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Document Viewer Container */}
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        {/* Anti-Screen Capture Blur Mask (When window is out of focus) */}
        {!isFocused && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md rounded-sm border-2 border-black p-8 text-center">
            <ShieldAlert className="h-12 w-12 text-black mb-4" />
            <h4 className="text-xl font-bold uppercase tracking-wider text-black">
              Protected Document Shielded
            </h4>
            <p className="mt-2 max-w-md font-mono text-xs text-neutral-600">
              Content is temporarily veiled while the application window is out of focus to safeguard proprietary curriculum details.
            </p>
            <p className="mt-4 font-mono text-xs font-bold text-black border border-neutral-300 px-3 py-1.5 rounded-sm bg-neutral-50">
              Click anywhere on this window to resume viewing
            </p>
          </div>
        )}

        {/* Document Sheet */}
        <div
          style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: "top center" }}
          className={`protected-cv-document relative overflow-hidden rounded-sm border border-neutral-300 bg-white p-8 sm:p-14 shadow-md transition-all ${
            !isFocused ? "blur-md" : ""
          }`}
        >
          {/* Subtle Security Diagonal Watermark Pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between overflow-hidden opacity-[0.035] select-none"
          >
            {Array.from({ length: 14 }).map((_, i) => (
              <div
                key={i}
                className="whitespace-nowrap font-mono text-xs font-extrabold uppercase tracking-[0.3em] text-black -rotate-12 translate-y-4"
              >
                CONFIDENTIAL · G. M. MOZAHAD · VIEW-ONLY RESTRICTED ACCESS · NO REDISTRIBUTION · NOT FOR OFFLINE EXPORT ·
              </div>
            ))}
          </div>

          {/* Document Content */}
          <div className="relative z-20 space-y-8 font-sans text-neutral-900">
            {/* CV Header */}
            <div className="border-b-2 border-black pb-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
                    {cv.contact.name}
                  </h1>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-neutral-600">
                    {cv.subtitle}
                  </p>
                </div>
                <div className="rounded-sm bg-black px-3 py-1 text-right self-start">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                    {cv.badge}
                  </span>
                </div>
              </div>

              {/* Meta Strip */}
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-neutral-600">
                <span>{cv.contact.location}</span>
                <span>•</span>
                <span>{cv.contact.email}</span>
                <span>•</span>
                <span>{cv.contact.phone}</span>
                <span>•</span>
                <span>{cv.contact.website}</span>
                <span>•</span>
                <span>{cv.contact.github}</span>
                <span>•</span>
                <span>{cv.contact.linkedin}</span>
              </div>
            </div>

            {/* Summary */}
            <section>
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-black border-b border-neutral-200 pb-1 mb-3">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {cv.summary}
              </p>
            </section>

            {/* Research Interests (If Academic CV) */}
            {cv.researchInterests && (
              <section>
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-black border-b border-neutral-200 pb-1 mb-3">
                  Research Interests & Scientific Directions
                </h2>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                  {cv.researchInterests.map((interest, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                      <span>{interest}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Education (For Academic tab, shown earlier in CV flow) */}
            {activeTab === "academic" && (
              <section>
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-black border-b border-neutral-200 pb-1 mb-3">
                  Education
                </h2>
                <div className="space-y-4">
                  {cv.education.map((edu, i) => (
                    <div key={i}>
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <h3 className="text-sm font-bold text-black">{edu.institution}</h3>
                        <span className="font-mono text-xs text-neutral-600">{edu.period}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs text-neutral-700 mt-0.5">
                        <p className="font-medium text-black">{edu.degree}</p>
                        <span className="font-mono text-[11px] text-neutral-600">{edu.location}</span>
                      </div>

                      {edu.thesis && (
                        <p className="mt-1.5 text-xs text-neutral-600 font-mono">
                          <strong className="text-black">Thesis:</strong> {edu.thesis}
                        </p>
                      )}

                      {edu.coursework && (
                        <div className="mt-2">
                          <span className="font-mono text-[11px] text-neutral-600 block mb-1">
                            Relevant Coursework:
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {edu.coursework.map((c) => (
                              <span
                                key={c}
                                className="rounded-xs border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 font-mono text-[10px] text-neutral-700"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Standardized Tests & Languages (For Academic tab) */}
            {activeTab === "academic" && cv.languages && !Array.isArray(cv.languages) && (
              <section>
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-black border-b border-neutral-200 pb-1 mb-3">
                  Standardized Tests & Languages
                </h2>
                <div className="space-y-1.5 text-xs text-neutral-700">
                  {cv.languages.test && (
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <span className="font-mono text-xs font-bold text-black sm:w-44 shrink-0">
                        {cv.languages.test}:
                      </span>
                      <span className="text-neutral-800">{cv.languages.testScore}</span>
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                    <span className="font-mono text-xs font-bold text-black sm:w-44 shrink-0">
                      Languages:
                    </span>
                    <span className="text-neutral-800">{cv.languages.languages}</span>
                  </div>
                </div>
              </section>
            )}

            {/* Publications (For Academic tab) */}
            {activeTab === "academic" && cv.publications && (
              <section>
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-black border-b border-neutral-200 pb-1 mb-3">
                  Publications & Manuscripts Under Review
                </h2>
                <div className="space-y-4">
                  {cv.publications.map((pub, i) => (
                    <div key={i} className="border-l-2 border-black pl-3 py-0.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-xs sm:text-sm font-bold text-black">
                          {pub.title}
                        </h3>
                        <span className="font-mono text-[11px] font-semibold text-neutral-600">
                          {pub.year} · {pub.status}
                        </span>
                      </div>
                      {pub.bullets && pub.bullets.length > 0 && (
                        <ul className="mt-2 space-y-1 text-xs text-neutral-700">
                          {pub.bullets.map((b, bi) => (
                            <li key={bi} className="flex items-start gap-2">
                              <span className="text-neutral-400">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Professional Experience */}
            <section>
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-black border-b border-neutral-200 pb-1 mb-3">
                Experience
              </h2>
              <div className="space-y-5">
                {cv.experience.map((exp, i) => (
                  <div key={i}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="text-sm font-bold text-black">
                        {exp.role} — <span className="font-semibold">{exp.company}</span>
                      </h3>
                      <span className="font-mono text-xs text-neutral-600">{exp.period}</span>
                    </div>
                    {exp.tagline && (
                      <p className="font-mono text-[11px] text-neutral-600 mb-1">{exp.tagline}</p>
                    )}
                    <ul className="mt-2 space-y-1.5 text-xs text-neutral-700">
                      {exp.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-neutral-400 shrink-0">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills (For Engineering tab, positioned right after Experience) */}
            {activeTab === "engineering" && (
              <section>
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-black border-b border-neutral-200 pb-1 mb-3">
                  Technical Skills
                </h2>
                <div className="space-y-2 text-xs text-neutral-700">
                  {cv.skills.map((skillGroup, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <span className="font-mono text-xs font-bold text-black sm:w-56 shrink-0">
                        {skillGroup.category}:
                      </span>
                      <span className="text-neutral-700">{skillGroup.items.join(", ")}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Projects */}
            <section>
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-black border-b border-neutral-200 pb-1 mb-3">
                {activeTab === "engineering" ? "Projects" : "Selected Production Projects & Systems"}
              </h2>
              <div className="space-y-4">
                {cv.projects.map((proj, i) => (
                  <div key={i}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="text-xs sm:text-sm font-bold text-black">
                        {proj.name}
                      </h3>
                      {proj.period && (
                        <span className="font-mono text-[11px] text-neutral-600">{proj.period}</span>
                      )}
                    </div>
                    <p className="font-mono text-[11px] text-neutral-600 mb-1.5">{proj.stack}</p>
                    <ul className="space-y-1 text-xs text-neutral-700">
                      {proj.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-neutral-400 shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications (For Engineering tab) */}
            {activeTab === "engineering" && cv.certifications && (
              <section>
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-black border-b border-neutral-200 pb-1 mb-3">
                  Certifications
                </h2>
                <ul className="space-y-1.5 text-xs text-neutral-700">
                  {cv.certifications.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 text-black shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Publications & Manuscripts (For Engineering tab) */}
            {activeTab === "engineering" && cv.publications && (
              <section>
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-black border-b border-neutral-200 pb-1 mb-3">
                  Publications & Manuscripts Under Review
                </h2>
                <ul className="space-y-2 text-xs text-neutral-700">
                  {cv.publications.map((pub, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-neutral-400 shrink-0">•</span>
                      <span>
                        <strong className="text-black">{pub.title}</strong> — {pub.status}, {pub.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Languages (For Engineering tab) */}
            {activeTab === "engineering" && cv.languages && (
              <section>
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-black border-b border-neutral-200 pb-1 mb-3">
                  Languages
                </h2>
                <ul className="space-y-1 text-xs text-neutral-700">
                  {Array.isArray(cv.languages) ? (
                    cv.languages.map((lang, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-neutral-400 shrink-0">•</span>
                        <span>{lang}</span>
                      </li>
                    ))
                  ) : (
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-400 shrink-0">•</span>
                      <span>{cv.languages.languages}</span>
                    </li>
                  )}
                </ul>
              </section>
            )}

            {/* Education (For Engineering tab) */}
            {activeTab === "engineering" && (
              <section>
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-black border-b border-neutral-200 pb-1 mb-3">
                  Education
                </h2>
                <div className="space-y-4">
                  {cv.education.map((edu, i) => (
                    <div key={i}>
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <h3 className="text-sm font-bold text-black">{edu.institution}</h3>
                        <span className="font-mono text-xs text-neutral-600">{edu.period}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs text-neutral-700 mt-0.5">
                        <p className="font-medium text-black">{edu.degree}</p>
                        <span className="font-mono text-[11px] text-neutral-600">{edu.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Technical Skills (For Academic tab) */}
            {activeTab === "academic" && (
              <section>
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-black border-b border-neutral-200 pb-1 mb-3">
                  Technical Stack & Competencies
                </h2>
                <div className="space-y-2 text-xs text-neutral-700">
                  {cv.skills.map((skillGroup, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <span className="font-mono text-xs font-bold text-black sm:w-44 shrink-0">
                        {skillGroup.category}:
                      </span>
                      <span className="text-neutral-700">{skillGroup.items.join(", ")}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Honors & Certifications (For Academic tab) */}
            {activeTab === "academic" && cv.honorsCertifications && (
              <section>
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-black border-b border-neutral-200 pb-1 mb-3">
                  Honors, Certifications & Achievements
                </h2>
                <ul className="space-y-1.5 text-xs text-neutral-700">
                  {cv.honorsCertifications.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 text-black shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Extracurricular Activities */}
            {cv.extracurricular && (
              <section>
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-black border-b border-neutral-200 pb-1 mb-3">
                  {activeTab === "engineering" ? "Extracurricular Activities" : "Extracurricular Leadership & Mentorship"}
                </h2>
                <div className="space-y-3">
                  {cv.extracurricular.map((item, i) => (
                    <div key={i}>
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                        <span className="font-bold text-black">
                          {item.role} {item.org ? `| ${item.org}` : ""}
                        </span>
                        <span className="font-mono text-[11px] text-neutral-600">{item.period}</span>
                      </div>
                      <ul className="mt-1 space-y-1 text-xs text-neutral-700">
                        {item.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2">
                            <span className="text-neutral-400">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Hobbies & Interests (If present) */}
            {cv.hobbies && cv.hobbies.length > 0 && (
              <section>
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-black border-b border-neutral-200 pb-1 mb-3">
                  Hobbies & Interests
                </h2>
                <div className="space-y-1.5 text-xs text-neutral-700">
                  {cv.hobbies.map((h, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <span className="font-mono text-xs font-bold text-black sm:w-44 shrink-0">
                        {h.category}:
                      </span>
                      <span className="text-neutral-700">{h.description}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Security Notice Footer Note */}
        <div className="mt-8 border border-neutral-200 bg-neutral-50 p-4 rounded-sm flex items-center justify-between gap-4 text-xs font-mono text-neutral-600">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-black shrink-0" />
            <span>
              Document Integrity Protocol Active · Right-click, saving, printing & offline redistribution restricted.
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1 font-bold text-black">
            <Eye className="h-3.5 w-3.5" />
            <span>Verified Author Copy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
