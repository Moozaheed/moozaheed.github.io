"use client";

import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/nav";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

const emptySubscribe = () => () => {};

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Handle escape key to close menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (profileDropdownOpen) setProfileDropdownOpen(false);
        if (open) setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, profileDropdownOpen]);

  // Handle click outside dropdown to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, []);

  const isItemActive = (href: string, children?: { href: string }[]) => {
    if (children && children.length > 0) {
      return children.some((child) => pathname.startsWith(child.href));
    }
    if (href === "/") {
      return pathname === "/" || pathname === "";
    }
    return pathname.startsWith(href);
  };

  const profileChildren = navItems.find((item) => item.children)?.children || [];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-xs">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
          {/* Logo / Brand */}
          <Link
            href="/"
            onClick={() => {
              setOpen(false);
              setProfileDropdownOpen(false);
            }}
            className="group flex items-center gap-3 text-sm font-semibold tracking-tight text-black transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-black"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-black text-xs font-mono font-bold text-white transition-transform group-hover:scale-105">
              M
            </span>
            <span className="font-semibold text-black tracking-tight">G. M. Mozahad</span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const active = isItemActive(item.href, item.children);

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    ref={dropdownRef}
                    className="relative group"
                    onMouseEnter={() => setProfileDropdownOpen(true)}
                    onMouseLeave={() => setProfileDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                      aria-expanded={profileDropdownOpen}
                      aria-haspopup="true"
                      className={cn(
                        "inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-black",
                        active
                          ? "font-semibold text-black bg-neutral-100"
                          : "text-neutral-600 hover:text-black hover:bg-neutral-50"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-3 w-3 transition-transform duration-200",
                          profileDropdownOpen ? "rotate-180" : "group-hover:rotate-180"
                        )}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      role="menu"
                      className={cn(
                        "absolute top-full left-0 mt-1 w-72 rounded-sm border border-neutral-200 bg-white p-2 shadow-lg z-50 transition-all duration-150",
                        profileDropdownOpen
                          ? "opacity-100 pointer-events-auto translate-y-0 visible"
                          : "opacity-0 pointer-events-none -translate-y-1 invisible md:group-hover:visible md:group-hover:opacity-100 md:group-hover:pointer-events-auto md:group-hover:translate-y-0"
                      )}
                    >
                      <div className="px-3 py-1.5 border-b border-neutral-100 mb-1">
                        <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block">
                          Profile & Background
                        </span>
                      </div>
                      {item.children?.map((child) => {
                        const childActive = pathname.startsWith(child.href);
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setProfileDropdownOpen(false)}
                            role="menuitem"
                            className={cn(
                              "block rounded-xs px-3 py-2.5 transition-colors group/item",
                              childActive
                                ? "bg-neutral-100"
                                : "hover:bg-neutral-50"
                            )}
                          >
                            <div className="flex items-center justify-between">
                              <span
                                className={cn(
                                  "text-xs font-semibold",
                                  childActive
                                    ? "text-black"
                                    : "text-neutral-800 group-hover/item:text-black"
                                )}
                              >
                                {child.label}
                              </span>
                              {childActive && (
                                <span className="h-1.5 w-1.5 rounded-full bg-black" />
                              )}
                            </div>
                            <p className="mt-0.5 text-[11px] text-neutral-500 leading-snug">
                              {child.description}
                            </p>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-black",
                    active
                      ? "font-semibold text-black bg-neutral-100"
                      : "text-neutral-600 hover:text-black hover:bg-neutral-50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Hire Me CTA */}
            <Link
              href="/contact/"
              className="ml-3 inline-flex items-center gap-1 rounded-sm bg-black px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-white transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-black"
            >
              Hire Me
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </nav>

          {/* Mobile Menu Trigger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/contact/"
              className="rounded-sm bg-black px-2.5 py-1 text-xs font-medium text-white"
            >
              Hire
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-label="Open navigation sidebar"
              className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-neutral-200 text-neutral-800 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-black"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Drawer (Rendered at Body Level to Prevent Clipping) */}
      {mounted && open && createPortal(
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop */}
          <div
            onClick={() => setOpen(false)}
            aria-hidden="true"
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
          />

          {/* Drawer Sidebar */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Sidebar"
            className="fixed inset-y-0 right-0 z-[101] w-full max-w-xs sm:max-w-sm bg-white border-l border-neutral-200 shadow-2xl flex flex-col h-[100dvh] overflow-hidden animate-in slide-in-from-right duration-250 ease-out"
          >
            {/* Sidebar Top Header */}
            <div className="flex h-16 items-center justify-between px-6 border-b border-neutral-200 shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-black text-xs font-mono font-bold text-white">
                  M
                </span>
                <span className="font-semibold text-sm text-black">Navigation</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close navigation sidebar"
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-neutral-200 text-neutral-800 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-black"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {/* Primary Focus */}
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                  Primary Focus
                </span>
                <div className="space-y-1">
                  {navItems
                    .filter((item) => !item.children)
                    .map((item, index) => {
                      const active = pathname.startsWith(item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "flex items-center justify-between rounded-sm px-3 py-2.5 text-sm font-medium transition-colors",
                            active
                              ? "bg-neutral-100 font-bold text-black"
                              : "text-neutral-700 hover:bg-neutral-50 hover:text-black"
                          )}
                        >
                          <span className="flex items-center gap-2.5">
                            <span className="text-xs text-neutral-400 font-mono">0{index + 1}</span>
                            <span>{item.label}</span>
                          </span>
                          {active && <span className="h-1.5 w-1.5 rounded-full bg-black" />}
                        </Link>
                      );
                    })}
                </div>
              </div>

              {/* Profile & Background */}
              <div className="pt-4 border-t border-neutral-100">
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                  Profile & Background
                </span>
                <div className="space-y-1.5">
                  {profileChildren.map((subItem) => {
                    const active = pathname.startsWith(subItem.href);
                    return (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block rounded-sm p-3 transition-colors",
                          active
                            ? "bg-neutral-100 text-black"
                            : "hover:bg-neutral-50 text-neutral-700"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-black">
                            {subItem.label}
                          </span>
                          {active && <span className="h-1.5 w-1.5 rounded-full bg-black" />}
                        </div>
                        <p className="text-[11px] text-neutral-500 mt-0.5 leading-snug">
                          {subItem.description}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Direct Contact & Opportunities */}
              <div className="pt-4 border-t border-neutral-100">
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                  Opportunities & Inquiry
                </span>
                <p className="text-xs text-neutral-600 mb-3.5 leading-relaxed">
                  Available for full-time engineering roles, AI systems architecture, and research. Planning to relocate worldwide.
                </p>
                <div className="space-y-2">
                  <Link
                    href="/contact/"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-black px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
                  >
                    Hire Me / Contact
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <a
                    href="mailto:gmmozahed@gmail.com"
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-sm border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-medium text-neutral-700 hover:text-black hover:bg-neutral-100"
                  >
                    gmmozahed@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar Bottom Footer */}
            <div className="px-6 py-4 border-t border-neutral-200 bg-neutral-50/50 shrink-0">
              <span className="text-[11px] text-neutral-500">
                © 2026 G. M. Mozahad · Dhaka (UTC+6)
              </span>
            </div>
          </aside>
        </div>,
        document.body
      )}
    </>
  );
}
