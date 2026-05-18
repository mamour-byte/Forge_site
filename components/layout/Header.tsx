"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/services/digitalisation", label: "Digitalisation" },
  { href: "/services/marketing", label: "Marketing" },
  { href: "/services/infrastructure", label: "Infrastructure" },
  { href: "/realisation", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to adjust header style dynamically
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 mx-auto w-full transition-all duration-500 ease-out",
        scrolled ? "pt-4 px-4 sm:px-6 lg:px-8 max-w-6xl" : "pt-0 px-0 max-w-full"
      )}
    >
      <div
        className={cn(
          "relative flex items-center justify-between transition-all duration-500 ease-out",
          scrolled
            ? "h-16 rounded-full border border-white/40 bg-white/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] px-4 sm:px-6"
            : "h-24 bg-transparent px-6 sm:px-10 border-b border-transparent"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="group relative z-20 flex items-center gap-3 outline-none"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)] to-[color-mix(in_srgb,var(--primary)_75%,var(--foreground))] text-white shadow-lg shadow-[var(--primary)]/30 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[var(--primary)]/40">
            <span className="font-bold text-lg">F</span>
          </div>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-[var(--foreground)]">Forge</span>
            <span className={cn(
              "text-[10px] font-bold uppercase tracking-widest text-[var(--primary)] transition-all duration-300 origin-left",
              scrolled ? "opacity-0 scale-x-0 h-0 overflow-hidden" : "opacity-100 scale-x-100 mt-1.5"
            )}>
              Solutions Digitales
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex lg:items-center lg:gap-1 z-10">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-5 py-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--primary)] group"
            >
              {item.label}
              <span className="absolute inset-x-5 -bottom-0 h-[2px] scale-x-0 rounded-full bg-[var(--primary)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 origin-left" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center z-20">
          <Link
            href="/contact"
            className="group flex h-11 items-center gap-2 rounded-full bg-[var(--primary)] px-6 text-sm font-semibold text-white shadow-md shadow-[var(--primary)]/20 transition-all duration-300 hover:bg-[var(--primary)]/90 hover:shadow-lg hover:shadow-[var(--primary)]/30"
          >
            Audit gratuit
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="relative z-20 flex size-11 items-center justify-center rounded-full bg-white/50 border border-white/60 text-[var(--primary)] shadow-sm backdrop-blur-md transition-all hover:bg-white/80 active:scale-95 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        {/* Mobile Dropdown Glass Menu */}
        <div
          className={cn(
            "absolute left-0 top-[calc(100%+0.75rem)] w-full overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--background)]/98 backdrop-blur-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden z-10",
            isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-8 invisible pointer-events-none"
          )}
        >
          <nav className="flex flex-col p-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between rounded-2xl px-5 py-4 text-base font-semibold text-[var(--foreground)] transition-colors hover:bg-white/60"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <ArrowRight className="size-4 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[var(--primary)]" />
              </Link>
            ))}
            <div className="mt-3 px-2 pb-2">
              <Link
                href="/contact"
                className="flex w-full h-12 items-center justify-center gap-2 rounded-xl bg-[var(--primary)] text-sm font-semibold text-white shadow-md transition-all hover:bg-[var(--primary)]/90 active:scale-[0.98]"
                onClick={() => setIsOpen(false)}
              >
                Demander un audit
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
