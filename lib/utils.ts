// lib/utils.ts

// --- tiny className helper (shadcn-style expects `cn`) ---
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

// --- Stream event type used across components/libs ---
export type StreamEvent = {
  title: string;
  platform: string;      // e.g., "Whatnot", "Twitch", etc.
  url: string;           // absolute or internal URL
  startDate: string | Date;
  endDate?: string | Date;
  timezone?: string;     // IANA TZ like "America/Chicago"
  whatnot_embed_url?: string; // <-- optional embed URL
};

// --- Simple helpers used by Events page ---
export function isUpcoming(date: Date): boolean {
  return new Date(date).getTime() > Date.now();
}

export function isPast(date: Date): boolean {
  return new Date(date).getTime() < Date.now();
}

// --- Date formatting in a specific timezone ---
export function formatDateInTZ(
  date: Date,
  pattern = "EEE, MMM d h:mma",
  timeZone = "America/Chicago"
) {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: pattern.includes("EEE") ? "short" : undefined,
    month: pattern.includes("MMM") ? "short" : undefined,
    day: pattern.includes("d") ? "2-digit" : undefined,
    hour: pattern.match(/h{1,2}/) ? "numeric" : undefined,
    minute: pattern.includes("mm") ? "2-digit" : undefined,
    hour12: true,
  });

  const parts = fmt.formatToParts(date).reduce<Record<string, string>>((acc, p) => {
    if (p.type !== "literal") acc[p.type] = p.value;
    return acc;
  }, {});

  const ampm = new Intl.DateTimeFormat("en-US", { timeZone, hour: "numeric", hour12: true })
    .formatToParts(date)
    .find(p => p.type === "dayPeriod")?.value?.toUpperCase() ?? "";

  const day = parts.day ? String(parseInt(parts.day, 10)) : "";

  return pattern
    .replace("EEE", parts.weekday ?? "")
    .replace("MMM", parts.month ?? "")
    .replace("d", day)
    .replace("hh", parts.hour?.padStart(2, "0") ?? "")
    .replace("h", parts.hour ?? "")
    .replace("mm", parts.minute ?? "")
    .replace("a", ampm);
}

// --- Normalize raw JSON events into typed, Date-backed objects ---
export function parseEvents(
  input: StreamEvent[]
): (StreamEvent & { startDate: Date; endDate?: Date })[] {
  return input
    .map((e) => {
      const start = new Date(e.startDate);
      const end = e.endDate ? new Date(e.endDate) : new Date(start.getTime() + 2 * 60 * 60 * 1000);
      return { ...e, startDate: start, endDate: end };
    })
    .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
}

// --- Find the next upcoming event after "now" ---
export function nextUpcomingEvent(
  events: (StreamEvent & { startDate: Date; endDate?: Date })[],
  now: Date = new Date()
) {
  return events.find((e) => e.startDate.getTime() >= now.getTime());
}

// --- Build a Google Calendar “Add event” link ---
export function googleCalendarLink(
  e: StreamEvent & { startDate: Date; endDate?: Date }
) {
  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: e.title,
    dates: `${fmt(e.startDate)}/${fmt(
      e.endDate ?? new Date(e.startDate.getTime() + 60 * 60 * 1000)
    )}`,
    details: `${e.platform} — ${e.url}`,
    location: e.platform,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
