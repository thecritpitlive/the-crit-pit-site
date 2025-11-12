import { Hero } from "@/components/hero";
import Countdown from "@/components/countdown";
import SocialGrid from "@/components/social-grid";
import NewsletterForm from "@/components/newsletter-form";
import Testimonials from "@/components/testimonials";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

export default function HomePage() {
  return (
    <>
      <Hero
        title="The Crit Pit"
        tag="Enter the Pit. Roll the Crit."
      />
      <Countdown />
      <section className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-4 gap-4">
        {[
          { t: "Live dice drops", d: "Fresh sets, metals, misfits." },
          { t: "TCG & accessories", d: "Sleeves, mats, mystery bundles." },
          { t: "Viewer giveaways", d: "You watch. We yeet freebies." },
          { t: "Chaotic good energy", d: "Sarcasm served warm." },
        ].map((f, i) => (
          <Card key={i}>
            <CardTitle>{f.t}</CardTitle>
            <CardDescription className="mt-2">{f.d}</CardDescription>
          </Card>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">Newsletter</h2>
        <p className="text-ink-300 mb-3">Get stream alerts and drop teasers.</p>
        <NewsletterForm />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-3 gap-2">
          <img src="/placeholder-1.jpg" alt="" className="rounded-xl object-cover aspect-[4/3]" />
          <img src="/placeholder-2.jpg" alt="" className="rounded-xl object-cover aspect-[4/3]" />
          <img src="/placeholder-3.jpg" alt="" className="rounded-xl object-cover aspect-[4/3]" />
        </div>
      </section>

      <Testimonials />
      <SocialGrid />
    </>
  );
}
