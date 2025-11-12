import Link from "next/link";
import { siteConfig } from "@/site.config";
import type { Route } from "next";


const LINKS = [
  { href: "/about", label: "About" },
  { href: "/streams", label: "Streams" },
  { href: "/press", label: "Press Kit" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-ink-800 bg-ink-950/60">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-display text-2xl">The Crit Pit</div>
          <p className="text-ink-300 mt-2">Live deals • Stream-only bundles • Chaotic good vibes.</p>
        </div>
        <nav className="grid grid-cols-2 gap-2">
  {LINKS.map((l) =>
  l.href.startsWith("/") ? (
    <Link
      key={l.href}
      href={l.href as Route}
      className="text-ink-300 hover:text-white"
    >
      {l.label}
    </Link>
  ) : (
    <a
      key={l.href}
      href={l.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-ink-300 hover:text-white"
    >
      {l.label}
    </a>
  )
)}

</nav>

        <div className="text-sm text-ink-400">
          © {new Date().getFullYear()} {siteConfig.name}. Purchases happen off-site via our marketplaces.
        </div>
      </div>
    </footer>
  );
}
