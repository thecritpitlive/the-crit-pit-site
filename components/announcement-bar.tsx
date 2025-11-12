"use client";

import Link from "next/link";
import type { Route } from "next";
import ann from "@/content/announcement.json";

type Ann = {
  message: string;
  active?: boolean;
  href?: string;
};

const data = ann as Ann;

export default function AnnouncementBar() {
  if (!data?.active || !data?.message) return null;

  const href = data.href?.trim();
  const isExternal = !!href && /^(https?:)?\/\//i.test(href);
  const isInternal = !!href && href.startsWith("/");

  return (
    <div className="w-full bg-ink-800 text-ink-100 text-sm py-2">
      <div className="mx-auto max-w-6xl px-4 text-center">
        {!href && <span>{data.message}</span>}

        {href && isExternal && (
          <a
            href={href}
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.message}
          </a>
        )}

        {href && isInternal && (
          <Link href={href as Route} className="hover:underline">
            {data.message}
          </Link>
        )}
      </div>
    </div>
  );
}
