'use client';
export default function Error({ error }: { error: Error }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-2">Uh oh — crit fail.</h1>
      <p className="text-ink-300">{error.message}</p>
    </div>
  );
}
