"use client";
import { getAllStreams } from "@/lib/streams";
import { useMemo, useState } from "react";
import { isUpcoming, isPast, formatDateInTZ, googleCalendarLink } from "@/lib/utils";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const filters = ["Upcoming", "Past"] as const;

export default function Events() {
  const all = getAllStreams();
  const [filter, setFilter] = useState<(typeof filters)[number]>("Upcoming");

  const list = useMemo(() => {
    if (filter === "Upcoming") return all.filter(isUpcoming);
    return all.filter(isPast).reverse();
  }, [all, filter]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Streams</h2>
        <div className="flex gap-2">
          {filters.map(f => (
            <Button key={f} variant={f===filter ? "default":"outline"} onClick={()=>setFilter(f)}>{f}</Button>
          ))}
        </div>
      </div>
      <div className="grid gap-4">
        {list.map(e => (
          <Card key={e.id} className="grid md:grid-cols-[1fr_auto] gap-4">
            <div>
              <div className="font-semibold">{e.title}</div>
              <div className="text-ink-400 text-sm">{formatDateInTZ(e.startDate, "EEE, MMM d • h:mm a zzz")} &mdash; {formatDateInTZ(e.endDate, "EEE, MMM d • h:mm a zzz")}
</div>
              <div className="mt-2 text-sm">
                <a
  className="text-ember-400 hover:underline"
  href={e.url}
  target="_blank"
  rel="noopener noreferrer"
>
  View on {e.platform}
</a>

              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link className="text-ink-200 underline" href={googleCalendarLink(e)}>Add to Google</Link>
              <a
  className="text-ember-400 hover:underline"
  href={e.url}
  target="_blank"
  rel="noopener noreferrer"
>
  View on {e.platform}
</a>

            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
