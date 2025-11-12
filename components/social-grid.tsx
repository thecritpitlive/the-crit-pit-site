import { siteConfig } from "@/site.config";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const SOCIALS = Object.entries(siteConfig.socials);

export default function SocialGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold mb-4">Follow everywhere</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {SOCIALS.map(([k, url]) => (
          <Card key={k}>
            <div className="flex items-center justify-between">
              <div className="font-medium capitalize">{k}</div>
              <Link className="text-ember-400 hover:underline" href={url as string}>Open</Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
