// config/nav.ts
import type { Route } from "next";

type NavItem = {
  label: string;
  href: Route | string;
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" as Route },
  { label: "Streams", href: "/streams" as Route },
  { label: "Links", href: "/links" as Route },
  // Optional: external links can be added like this:
  // { label: "Whatnot", href: "https://www.whatnot.com/user/thecritpitlive" },
  // { label: "TikTok", href: "https://www.tiktok.com/@thecritpitlive" },
];
