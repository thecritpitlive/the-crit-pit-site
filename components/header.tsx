// components/header.tsx
"use client";

import Link from "next/link";
import type { Route } from "next";

// These two should be default imports:
import ThemeToggle from "@/components/theme-toggle";
import Logo from "@/components/logo";

import { NAV } from "@/config/nav";

type NavItem = {
  label: string;
  href: string; // internal ("/...") or external ("https://...")
};

export function Header() {
  return (
    <header className="w-full border-b border-ink-800 bg-ink-900/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" aria-label="The Crit Pit Home" className="flex items-center gap-2">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((i: NavItem) =>
            i.href.startsWith("/") ? (
              <Link
                key={i.href}
                href={i.href as Route}
                className="text-ink-200 hover:text-white"
              >
                {i.label}
              </Link>
            ) : (
              <a
                key={i.href}
                href={i.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-200 hover:text-white"
              >
                {i.label}
              </a>
            )
          )}
          <ThemeToggle />
        </nav>

        {/* Mobile: keep it simple for now */}
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
