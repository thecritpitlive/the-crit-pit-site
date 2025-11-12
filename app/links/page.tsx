import { siteConfig } from "@/site.config";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Links / Shop",
  description: "Hop to our marketplaces and socials",
};

export default function LinksPage() {
  const entries = Object.entries(siteConfig.socials);
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold mb-4">Links & Marketplaces</h1>
      <p className="text-ink-300 mb-6">Purchases happen off-site. We point you to the chaos.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {entries.map(([k, url]) => (
          <Card key={k} className="flex items-center justify-between">
            <div className="capitalize font-medium">{k}</div>
            <Link href={url} className="text-ember-400 hover:underline">Open</Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
