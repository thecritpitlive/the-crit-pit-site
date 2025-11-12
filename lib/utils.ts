import { clsx } from "clsx";
import { formatInTimeZone } from "date-fns-tz";
import { isAfter, isBefore, compareAsc } from "date-fns";

export function cn(...inputs: any[]) {
  return clsx(inputs);
}

export type StreamEvent = {
  id: string;
  title: string;
  platform: string;
  start: string; // ISO with timezone
  end: string;   // ISO with timezone
  url: string;
  whatnot_embed_url?: string;
  status?: "upcoming" | "live" | "past";
};

export function parseEvents(raw: StreamEvent[]) {
  return raw.map(e => ({
    ...e,
    startDate: new Date(e.start),
    endDate: new Date(e.end),
  }));
}

export function isUpcoming(e: any, now = new Date()) {
  return isAfter(e.startDate, now);
}

export function isPast(e: any, now = new Date()) {
  return isBefore(e.endDate, now);
}

export function sortByStart(a: any, b: any) {
  return compareAsc(a.startDate, b.startDate);
}

export function nextUpcomingEvent(events: any[], now = new Date()) {
  return events.filter(e => isUpcoming(e, now)).sort(sortByStart)[0] ?? null;
}

export function formatDateInTZ(date: Date, tz = "America/Chicago", fmt = "EEE, MMM d • h:mm a zzz") {
  return formatInTimeZone(date, tz, fmt);
}

export function googleCalendarLink(e: any) {
  // Google Calendar wants UTC timestamps like 20251212T020000Z
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: e.title,
    dates: `${fmt(e.startDate)}/${fmt(e.endDate)}`,
    location: e.url,
    details: `Stream on ${e.platform} — ${e.url}`
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
