export const metadata = {
  title: "Press Kit",
  description: "Logo, colors, boilerplate",
};

export default function PressPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10 prose prose-invert">
      <h1>Press Kit</h1>
      <p>Download assets and boilerplate. Be kind to the brand gremlins.</p>
      <h2>Logo & Wordmark</h2>
      <p><a href="/logo.svg" download>Download SVG</a></p>
      <h2>Colors</h2>
      <ul>
        <li>Ink: #1f2025 – #121317</li>
        <li>Parchment: #f9f4ea</li>
        <li>Ember: #f86600</li>
        <li>Acid: #4fd000</li>
      </ul>
      <h2>Boilerplate</h2>
      <p><strong>The Crit Pit</strong> is a TTRPG & TCG live-stream brand where community, chaos, and deals collide. Enter the Pit. Roll the Crit.</p>
      <h2>Contact</h2>
      <p>Email: <a href="mailto:hello@thecritpit.com">hello@thecritpit.com</a></p>
    </section>
  );
}
