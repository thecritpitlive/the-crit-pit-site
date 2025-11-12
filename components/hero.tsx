// components/hero.tsx
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getAllStreams } from "@/lib/streams";
import { nextUpcomingEvent } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type HeroProps = {
  title: string;
  tag: string;
};

export function Hero({ title, tag }: HeroProps) {
  const upcoming = nextUpcomingEvent(getAllStreams());

  return (
    <section className="text-center py-16">
      <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      <p className="mt-4 text-xl text-ink-300">{tag}</p>

      <div className="mt-8 flex items-center justify-center gap-4">
        <Link href={upcoming?.url || siteConfig.socials.whatnot}>
          <Button size="lg">Watch the next stream</Button>
        </Link>

        <Link href="/links">
          <Button variant="outline" size="lg">
            Follow everywhere
          </Button>
        </Link>
      </div>
    </section>
  );
}
