import data from "@/content/testimonials.json";
import { Card } from "@/components/ui/card";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Community chatter</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {data.map((t, i) => (
          <Card key={i}>
            <blockquote className="text-ink-100">“{t.quote}”</blockquote>
            <div className="mt-3 text-sm text-ink-400">— {t.author}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
