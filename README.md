# The Crit Pit — Launch Site

A production-ready Next.js 14 (App Router) site for **The Crit Pit** — a funny, sarcastic, TTRPG-focused brand and upcoming Whatnot store.

## Tech Stack

- Next.js 14 + TypeScript (App Router)
- Tailwind CSS
- shadcn-like local UI (Button, Card, Input, Textarea)
- Icons: lucide-react
- Content: local JSON/MDX in `/content`
- SEO: `next-seo`, OG image generator (`/og`)
- Analytics: Plausible or Google Analytics (env-driven)
- Accessibility: WCAG AA patterns, keyboard nav, focus rings, skip link
- Performance: designed for Lighthouse ≥ 95
- Deployment: Vercel-ready

## Getting Started

```bash
pnpm install   # or npm install
pnpm dev       # or npm run dev
```

Create `.env.local` from `.env.example` and fill values.

## Content Editing

- **Streams**: edit `content/streams.json`. Example:
  ```json
  [
    {
      "id": "critmas-launch",
      "title": "Soft Launch: Dice & TCG Chaos",
      "platform": "whatnot",
      "start": "2025-12-12T20:00:00-06:00",
      "end": "2025-12-12T22:00:00-06:00",
      "url": "https://www.whatnot.com/user/thecritpit",
      "whatnot_embed_url": "https://whatnot.com/embed/thecritpit",
      "status": "upcoming"
    }
  ]
  ```
- **Announcement banner**: `content/announcement.json`
- **Testimonials**: `content/testimonials.json`
- **Legal pages**: `app/privacy/page.mdx`, `app/terms/page.mdx`

## Pages

- `/` Home: hero with rotating taglines, countdown, feature tiles, newsletter, gallery, testimonials, social grid
- `/streams`: schedule list + embed (if provided), filters (Upcoming/Past), Google Calendar link & ICS download
- `/about`: brand story, FAQ, team blurb
- `/links`: marketplaces & socials
- `/press`: logo (SVG), colors, boilerplate, contact
- `/contact`: Formspree-backed form
- `/privacy`, `/terms`: MDX templates

## Config

Edit `site.config.ts`:

```ts
export const siteConfig = {
  name: "The Crit Pit",
  domain: "thecritpit.com",
  tagline: "Enter the Pit. Roll the Crit.",
  timezone: "America/Chicago",
  socials: { /* ... */ },
  contactEmail: "hello@thecritpit.com",
  newsletter: { provider: "buttondown", url: "https://buttondown.email/thecritpit" }
}
```

## ICS & Calendar

Each event gets:
- **Google Calendar** link (client-side URL)
- **ICS**: `/api/ics?eventId=ID`

## SEO & OG Images

- Global SEO config: `next-seo.config.ts`
- OG image per page via `/og?title=Title`
- `app/robots.ts` and `app/sitemap.ts` are generated based on `NEXT_PUBLIC_SITE_URL`

## Analytics

- **Plausible**: set `PLAUSIBLE_DOMAIN`
- **Google Analytics**: set `NEXT_PUBLIC_GA_ID` (only used if Plausible is not set)

## Testing & Quality

- Vitest: `pnpm test`
- ESLint + `eslint-plugin-jsx-a11y`
- Prettier

## Accessibility Notes

- Skip-to-content link
- Focus-visible rings
- Semantic HTML
- Keyboard-friendly nav

## Deployment (Vercel)

1. Push to GitHub
2. Import to Vercel
3. Set env vars (see `.env.example`)
4. Deploy

## Swap Local Content to Notion (Future)

- Replace `lib/streams.ts` JSON import with Notion API fetch
- Keep the events schema the same to minimize component changes

## Post-Launch Checklist

- [ ] DNS pointed to Vercel (A/AAAA or CNAME)
- [ ] `.env` set (`NEXT_PUBLIC_SITE_URL`, `PLAUSIBLE_DOMAIN` or `NEXT_PUBLIC_GA_ID`, `FORMSPREE_ENDPOINT`)
- [ ] Verify sitemap at `/sitemap.xml` and submit to Google Search Console
- [ ] Validate robots at `/robots.txt`
- [ ] Test OG/Twitter cards (use card validators)
- [ ] Check Lighthouse (mobile/desktop) ≥ 95
- [ ] Verify contact form submission
- [ ] Verify newsletter signup flow
- [ ] Add real images to `/public`
- [ ] Replace placeholder copy & testimonials
- [ ] Add 404/500 pages if desired
- [ ] Add additional shadcn/ui components if needed
- [ ] Double-check timezones on streams

## License

MIT. Replace with your preference.
