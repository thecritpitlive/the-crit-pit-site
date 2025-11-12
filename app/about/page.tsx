export const metadata = {
  title: "About / FAQ",
  description: "What is The Crit Pit?",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10 prose prose-invert">
      <h1>What is The Crit Pit?</h1>
      <p><strong>The Crit Pit</strong> is where dice goblins, TCG gremlins, and chaotic adventurers gather for live drops, questionable decisions, and statistically improbable crits.</p>
      <h2>FAQ</h2>
      <details open><summary>Do you sell on this site?</summary><p>Nope. We route to platforms like Whatnot, Etsy, and eBay. Purchases happen off-site.</p></details>
      <details><summary>When are streams?</summary><p>Check the <a href="/streams">Streams</a> page for a schedule in Central Time.</p></details>
      <details><summary>Shipping & returns?</summary><p>Handled by each platform. See their policies for details.</p></details>
      <h2>Team</h2>
      <p>Just some friendly chaos goblins. Insert your glorious mugshots later.</p>
    </section>
  );
}
