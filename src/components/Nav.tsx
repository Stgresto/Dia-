"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "AI Coach", href: "#coach" },
    { label: "Community", href: "#community" },
    { label: "Shop", href: "#shop" },
    { label: "Education", href: "#education" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-sm border-b border-sand"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0.5 shrink-0">
          <span
            className={`font-display text-xl font-normal italic transition-colors duration-300 ${
              scrolled ? "text-forest" : "text-white"
            }`}
          >
            Dia
          </span>
          <span
            className={`font-body text-xl font-semibold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-brand-text" : "text-white"
            }`}
          >
            Style
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-xs font-body font-medium tracking-widest uppercase transition-colors duration-200 ${
                scrolled
                  ? "text-brand-text/60 hover:text-forest"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#pricing"
            className="bg-forest text-white text-xs font-medium tracking-widest uppercase px-6 py-3 rounded-full hover:bg-forest-light transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden flex flex-col gap-1.5 p-2 transition-colors ${
            scrolled ? "text-brand-text" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-ivory border-t border-sand px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium tracking-widest uppercase text-brand-text/70 hover:text-forest transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-forest text-white text-sm font-medium tracking-widest uppercase px-6 py-3 rounded-full text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
