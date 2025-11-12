"use client";

import Link from "next/link";
import type { Route } from "next";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";
import { NAV } from "@/config/nav";

export function Header() {
  return (
    <header className="w-full border-b border-ink-600 bg-ink-900/50 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((i) =>
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
        <div className="md:hidden">
          {/* Mobile nav or menu button could go here later */}
        </div>
      </div>
    </header>
  );
}
