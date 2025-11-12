import { clsx } from "clsx";
import { formatInTimeZone } from "date-fns-tz";
import { isAfter, isBefore, compareAsc } from "date-fns";

export function cn(...inputs: any[]) {
  return clsx(inputs);
}

export type EventLike = {
  startDate: Date;
  endDate: Date;
  id: string;
  title: string;
  platform: string;
  start: string;
  end: string;
  url: string;
  whatnot_embed_url?: string;
  status?: "upcoming" | "live" | "past";
};

export function isUpcoming(e: EventLike): boolean {
  const now = Date.now();
  return e.endDate.getTime() >= now;
}

export function isPast(e: EventLike): boolean {
  const now = Date.now();
  return e.endDate.getTime() < now;
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
