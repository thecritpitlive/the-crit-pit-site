// components/social-grid.tsx
import Link from "next/link";
import type { Route } from "next";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export default function SocialGrid() {
  // Expecting siteConfig.socials to be a record of label -> url (string)
  const entries = Object.entries(siteConfig.socials ?? {});

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold mb-4">Find us online</h2>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {entries.map(([k, url]) => {
          const href =
            typeof url === "string" && url.startsWith("/")
              ? (url as Route) // internal route
              : { pathname: String(url) }; // external absolute URL

          return (
            <Card key={k} className="p-4">
              <div className="flex items-center justify-between">
                <div className="font-medium capitalize">{k}</div>
                <Link className="text-ember-400 hover:underline" href={href}>
                  Open
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
