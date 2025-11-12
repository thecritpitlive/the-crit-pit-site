import { formatInTimeZone } from "date-fns-tz";
import { siteConfig } from "@/site.config";

/**
 * Event-like type used throughout The Crit Pit site.
 */
export type EventLike = {
  id: string;
  title: string;
  platform: string;
  start: string;
  end: string;
  url: string;
  whatnot_embed_url?: string;
  status?: "upcoming" | "live" | "past";
  startDate: Date;
  endDate: Date;
};

const TZ = siteConfig.timezone || "America/Chicago";

/**
 * Format a Date in a specific timezone.
 */
export function formatDateInTZ(
  date: Date,
  pattern: string,
  tz: string = TZ
): string {
  return formatInTimeZone(date, tz, pattern);
}

/**
 * Parse /content/streams.json -> typed EventLike array.
 */
export function parseEvents(raw: any[]): EventLike[] {
  return (raw || []).map((e: any) => {
    const startDate = new Date(e.start);
    const endDate = new Date(e.end);
    return {
      ...e,
      startDate,
      endDate,
    } as EventLike;
  });
}

/**
 * Find the next upcoming (or live) event.
 */
export function nextUpcomingEvent(events: EventLike[]): EventLike | null {
  const now = Date.now();
  const upcoming = events.filter((e) => e.endDate.getTime() >= now);
  if (upcoming.length === 0) return null;
  upcoming.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
  return upcoming[0] || null;
}

/**
 * Predicate helpers for filtering events.
 */
export function isUpcoming(e: EventLike): boolean {
  const now = Date.now();
  return e.endDate.getTime() >= now;
}

export function isPast(e: EventLike): boolean {
  const now = Date.now();
  return e.endDate.getTime() < now;
}

/**
 * Generate a Google Calendar link for an event.
 */
export function googleCalendarLink(e: EventLike) {
  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: e.title,
    dates: `${fmt(e.startDate)}/${fmt(e.endDate)}`,
    location: e.url,
    details: `Stream on ${e.platform} — ${e.url}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Tailwind-friendly className combiner.
 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
