import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  titleTemplate: "%s | The Crit Pit",
  defaultTitle: "The Crit Pit",
  description: "Tabletop chaos. Minimum effort. Enter the Pit. Roll the Crit.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://thecritpit.com",
    site_name: "The Crit Pit",
    images: [
      { url: (process.env.NEXT_PUBLIC_SITE_URL || '') + "/og?title=The%20Crit%20Pit", width: 1200, height: 630, alt: "The Crit Pit" }
    ]
  },
  twitter: { cardType: "summary_large_image" }
};

export default config;
