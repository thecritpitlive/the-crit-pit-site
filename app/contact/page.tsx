import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact",
  description: "Say hello",
};

export default function ContactPage() {
  const endpoint = process.env.FORMSPREE_ENDPOINT || "#";
  return (
    <section className="mx-auto max-w-xl px-4 py-10">
      <h1 className="text-3xl font-semibold mb-4">Contact</h1>
      <form action={endpoint} method="POST" className="grid gap-3">
        <label className="grid gap-2">
          <span className="text-sm text-ink-300">Name</span>
          <Input name="name" required placeholder="Fizz Buzzington" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-ink-300">Email</span>
          <Input name="email" type="email" required placeholder="you@realm.com" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-ink-300">Message</span>
          <Textarea name="message" required placeholder="Yeet your thoughts here." />
        </label>
        <Button type="submit">Send</Button>
      </form>
      <p className="text-sm text-ink-400 mt-2">We use Formspree for submissions. No spam, no nonsense.</p>
    </section>
  );
}
