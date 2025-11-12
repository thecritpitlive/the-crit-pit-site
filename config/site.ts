// config/site.ts
export const siteConfig = {
  name: "The Crit Pit",
  tagline: "Enter the Pit. Roll the Crit.",
  url: "https://thecritpit.com",

  // Used by Hero, Footer, etc.
  socials: {
    whatnot: "https://www.whatnot.com/s/Iv6eeXyj",
    tiktok: "https://www.tiktok.com/@thecritpitlive?_r=1&_t=ZT-91LOWG8Vm7J",
    x: "https://x.com/thecritpitlive?s=21",
  },

  contactEmail: "thecritpitlive@gmail.com",
} as const;

export type SiteConfig = typeof siteConfig;
