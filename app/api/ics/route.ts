import { NextRequest } from "next/server";
import streams from "@/content/streams.json";

export const dynamic = "force-static";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("eventId");
  const ev = (streams as any[]).find(e => e.id === id);
  if (!ev) return new Response("Not found", { status: 404 });

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//The Crit Pit//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${ev.id}@thecritpit.com`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g,'').split('.')[0]}Z`,
    `DTSTART:${new Date(ev.start).toISOString().replace(/[-:]/g,'').split('.')[0]}Z`,
    `DTEND:${new Date(ev.end).toISOString().replace(/[-:]/g,'').split('.')[0]}Z`,
    `SUMMARY:${ev.title}`,
    `DESCRIPTION:Stream on ${ev.platform} — ${ev.url}`,
    `URL:${ev.url}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  return new Response(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${ev.id}.ics"`,
    }
  });
}
