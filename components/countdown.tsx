"use client";
import { useEffect, useState } from "react";
import { getAllStreams } from "@/lib/streams";
import { nextUpcomingEvent, formatDateInTZ } from "@/lib/utils";

function diffParts(target: Date) {
  const total = Math.max(0, target.getTime() - Date.now());
  const d = Math.floor(total / (1000*60*60*24));
  const h = Math.floor((total % (1000*60*60*24))/(1000*60*60));
  const m = Math.floor((total % (1000*60*60))/(1000*60));
  const s = Math.floor((total % (1000*60))/1000);
  return { d,h,m,s,total };
}

export default function Countdown() {
  const upcoming = nextUpcomingEvent(getAllStreams());
  const [nowState, setNowState] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNowState(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!upcoming) return null;
  const { d,h,m,s,total } = diffParts(upcoming.startDate);
  const status = total <= 0 ? "Live Soon/Live Now" : "Next Stream";
  return (
    <div className="mx-auto max-w-6xl px-4 py-4 text-center">
      <div className="inline-flex items-center gap-3 rounded-2xl border border-ink-800 bg-ink-900/50 px-4 py-3">
        <span className="text-ink-300">{status}:</span>
        <span className="font-mono">{d}d {h}h {m}m {s}s</span>
        <span className="text-ink-400">({formatDateInTZ(upcoming.startDate)})</span>
      </div>
    </div>
  );
}
