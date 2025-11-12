"use client";
import Link from "next/link";
import Logo from "@/components/logo";
import ThemeToggle from "@/components/theme-toggle";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV = [
  { href: "/streams", label: "Streams" },
  { href: "/links", label: "Links" },
  { href: "/about", label: "About" },
  { href: "/press", label: "Press Kit" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-ink-950/60 border-b border-ink-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map(i => <Link key={i.href} href={i.href} className="text-ink-200 hover:text-white">{i.label}</Link>)}
          <ThemeToggle />
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" aria-label="Open menu" onClick={() => setOpen(o=>!o)}><Menu /></Button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-ink-800 bg-ink-950">
          <nav className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
            {NAV.map(i => <Link key={i.href} href={i.href} className="py-2">{i.label}</Link>)}
          </nav>
        </div>
      )}
    </header>
  );
}
