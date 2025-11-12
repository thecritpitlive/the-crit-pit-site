// components/hero.tsx
"use client";

import Link from "next/link";
import type { Route } from "next";
import { Button } from "@/components/ui/button";
import { nextUpcomingEvent } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type HeroProps = {
  title: string;
  tag: string;
};

export default function Hero({ title, tag }: HeroProps) {
  const upcoming = nextUpcomingEvent();
  const watchHref = upcoming?.url ?? siteConfig.socials.whatnot;
  const isInternal = typeof watchHref === "string" && watchHref.startsWith("/");

  return (
    <section className="flex flex-col items-center text-center py-16">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white">{title}</h1>
      <p className="mt-4 text-xl text-ink-300">{tag}</p>

      <div className="mt-8 flex items-center justify-center gap-4">
        {isInternal ? (
          <Link href={watchHref as Route}>
            <Button size="lg">Watch the next stream</Button>
          </Link>
        ) : (
          <a href={watchHref} target="_blank" rel="noopener noreferrer">
            <Button size="lg">Watch the next stream</Button>
          </a>
        )}

        <Link href={"/links" as Route}>
          <Button variant="outline" size="lg">Follow everywhere</Button>
        </Link>
      </div>
    </section>
  );
}
