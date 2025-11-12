"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/site.config";
import { getAllStreams } from "@/lib/streams";
import { nextUpcomingEvent } from "@/lib/utils";
import Link from "next/link";

const TAGLINES = [
  "Enter the Pit. Roll the Crit.",
  "Where bad rolls go to die.",
  "Math rocks for emotionally unstable adults.",
  "Critical hits, questionable life choices.",
  "Tabletop chaos. Minimum effort.",
];

export default function Hero() {
  const [tag, setTag] = useState(TAGLINES[0]);
  useEffect(() => {
    const id = setInterval(() => {
      setTag(t => TAGLINES[(TAGLINES.indexOf(t)+1) % TAGLINES.length]);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const upcoming = nextUpcomingEvent(getAllStreams());

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 text-center">
      <h1 className="font-display text-5xl md:text-7xl tracking-tight">The Crit Pit</h1>
      <p className="mt-4 text-xl text-ink-300">{tag}</p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <Button asChild size="lg"><Link href={upcoming?.url || siteConfig.socials.whatnot}>Watch the next stream</Link></Button>
        <Button asChild variant="outline" size="lg"><Link href="/links">Follow everywhere</Link></Button>
      </div>
    </section>
  );
}
