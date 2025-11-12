import Events from "@/components/events";
import { getAllStreams } from "@/lib/streams";

export const metadata = {
  title: "Streams",
  description: "Upcoming and past streams",
};

export default function StreamsPage() {
  const events = getAllStreams();
  const first = events[0];
  return (
    <div>
      {first?.whatnot_embed_url && (
        <section className="mx-auto max-w-6xl px-4 py-6">
          <iframe src={first.whatnot_embed_url} className="w-full h-[400px] rounded-2xl border border-ink-800" />
        </section>
      )}
      <Events />
    </div>
  );
}
