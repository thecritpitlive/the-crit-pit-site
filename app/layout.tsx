import "./globals.css";
import { ReactNode } from "react";
import SkipToContent from "@/components/skip-to-content";
import AnnouncementBar from "@/components/announcement-bar";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://thecritpit.com"),
  title: "The Crit Pit",
  description: "Tabletop chaos. Minimum effort.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        {process.env.PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          ></script>
        )}
        {process.env.NEXT_PUBLIC_GA_ID && !process.env.PLAUSIBLE_DOMAIN && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          ></script>
        )}
        {process.env.NEXT_PUBLIC_GA_ID && !process.env.PLAUSIBLE_DOMAIN && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `,
            }}
          />
        )}
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Outfit:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SkipToContent />
        <AnnouncementBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
