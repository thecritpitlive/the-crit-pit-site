"use client";
import { useEffect, useState } from "react";
import { getAllStreams } from "@/lib/streams";
import { nextUpcomingEvent, formatDateInTZ } from "@/lib/utils";

export default function Countdown() {
  const [now, setNow] = useState<Date>(new Date());
  const events = getAllStreams();
  const upcoming = nextUpcomingEvent(events);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!upcoming) return null;

  const ms = Math.max(0, upcoming.startDate.getTime() - now.getTime());
  const d = Math.floor(ms / 86_400_000);
  const h = Math.floor((ms % 86_400_000) / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  const s = Math.floor((ms % 60_000) / 1_000);
  const status = ms === 0 ? "Live Soon" : "Starts in";

  return (
    <div className="rounded-xl border border-ink-700 p-4 bg-ink-900">
      <div className="text-sm text-ink-300">{status}</div>
      <div className="text-2xl font-mono">{d}d {h}h {m}m {s}s</div>
      <div className="text-ink-400">
        ({formatDateInTZ(upcoming.startDate, "EEE, MMM d • h:mm a zzz")})
      </div>
    </div>
  );
}
