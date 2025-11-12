export const siteConfig = {
  name: "The Crit Pit",
  domain: "thecritpit.com",
  tagline: "Enter the Pit. Roll the Crit.",
  timezone: "America/Chicago",
  socials: {
    whatnot: "https://www.whatnot.com/s/Iv6eeXyj",
    twitter: "https://x.com/thecritpitlive?s=21",
    tiktok: "https://www.tiktok.com/@thecritpitlive?_r=1&_t=ZT-91LOWG8Vm7J",
  },
  contactEmail: "thecritpitlive@gmail.com",
  newsletter: { provider: "buttondown", url: "https://buttondown.email/thecritpit" }
} as const;

export type SiteConfig = typeof siteConfig;
