"use client";

import { useState } from "react";
import { Copy, Check, ArrowUpRight, Send, MapPin, Clock, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { contactCategories } from "@/data/contact";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("AI Systems");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("gmmozahed@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`[Inquiry] ${category} - ${name}`);
    const body = encodeURIComponent(
      `Hello Mozahad,\n\nName: ${name}\nEmail: ${email}\nTopic: ${category}\n\nMessage:\n${message}\n`
    );

    // Trigger mailto link for direct static delivery
    window.location.href = `mailto:gmmozahed@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div>
      <PageHeader
        category="GET IN TOUCH"
        title="Let's Build Something Dependable"
        description="Available for full-time engineering roles, AI systems architecture, technical advisory, and research collaboration. Actively planning international relocation."
      />

      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-600 block mb-2">
                Direct Email
              </span>
              <div className="border border-neutral-200 bg-white p-5 rounded-sm">
                <span className="text-xs text-neutral-600 block mb-1">
                  Primary Inbox
                </span>
                <div className="flex items-center justify-between gap-3 mt-2">
                  <a
                    href="mailto:gmmozahed@gmail.com"
                    className="font-mono text-sm sm:text-base font-bold text-black hover:underline"
                  >
                    gmmozahed@gmail.com
                  </a>
                  <button
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="inline-flex items-center gap-1 rounded-sm border border-neutral-300 px-2.5 py-1 text-xs font-mono font-medium text-neutral-800 transition-colors hover:bg-neutral-100"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-black" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-neutral-600" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Availability & Location */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-neutral-600 block">
                Availability & Mobility
              </span>

              <div className="border border-neutral-200 p-5 rounded-sm bg-white space-y-3.5">
                <div className="flex items-start gap-3 text-sm text-neutral-800">
                  <MapPin className="h-4 w-4 text-black shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-black block">Dhaka, Bangladesh · Planning to Relocate</span>
                    <span className="text-xs text-neutral-600 block mt-0.5 leading-relaxed">
                      Actively planning international relocation for on-site, hybrid, or graduate research opportunities worldwide (US, Canada, EU, UK, APAC). Also available for remote roles.
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-800 pt-2 border-t border-neutral-100">
                  <Clock className="h-4 w-4 text-black shrink-0" />
                  <span>
                    UTC+6 (Dhaka) · Active across US, EU & APAC working overlaps
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-800 pt-2 border-t border-neutral-100">
                  <ShieldCheck className="h-4 w-4 text-black shrink-0" />
                  <span>Guaranteed response within 24 business hours</span>
                </div>
              </div>
            </div>

            {/* Social & Professional Links */}
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-600 block mb-3">
                Professional Profiles
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/Moozaheed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border border-neutral-200 p-3.5 rounded-sm bg-white text-sm font-medium text-black hover:border-black transition-colors"
                >
                  <span className="text-xs">GitHub (Moozaheed)</span>
                  <ArrowUpRight className="h-4 w-4 text-neutral-600" />
                </a>
                <a
                  href="https://www.linkedin.com/in/moozaheed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border border-neutral-200 p-3.5 rounded-sm bg-white text-sm font-medium text-black hover:border-black transition-colors"
                >
                  <span className="text-xs">LinkedIn (moozaheed)</span>
                  <ArrowUpRight className="h-4 w-4 text-neutral-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Message Composer */}
          <div className="lg:col-span-7">
            <div className="border border-neutral-200 bg-white p-7 sm:p-9 rounded-sm">
              <span className="text-xs uppercase tracking-widest text-neutral-600 block mb-2">
                Direct Dispatch
              </span>
              <h2 className="text-2xl font-bold text-black mb-6">
                Send a Project Inquiry
              </h2>

              {submitted ? (
                <div className="rounded-sm border border-neutral-200 bg-neutral-50 p-6 text-center space-y-3">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                    <Check className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-black">Email Client Prepared</h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto">
                    Your email client should have opened with your inquiry pre-filled. If it did not open automatically, you can send an email directly to{" "}
                    <strong className="text-black">gmmozahed@gmail.com</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-mono underline uppercase tracking-wider text-black"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-mono text-xs uppercase tracking-wider text-neutral-700 mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Smith"
                        className="w-full rounded-sm border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-black placeholder:text-neutral-400 focus:border-black focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-mono text-xs uppercase tracking-wider text-neutral-700 mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full rounded-sm border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-black placeholder:text-neutral-400 focus:border-black focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-neutral-700 mb-1.5">
                      Subject / Topic
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {contactCategories.map((cat) => (
                        <button
                          type="button"
                          key={cat.id}
                          onClick={() => setCategory(cat.label)}
                          className={`rounded-sm border px-3 py-2 text-left font-mono text-xs transition-colors ${
                            category === cat.label
                              ? "border-black bg-black text-white font-semibold"
                              : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100"
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs uppercase tracking-wider text-neutral-700 mb-1.5"
                    >
                      Project Details / Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe what you are building, team size, technical requirements, or timeline..."
                      className="w-full rounded-sm border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-black placeholder:text-neutral-400 focus:border-black focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-black px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-black"
                  >
                    <span>Launch Inquiry in Email</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
