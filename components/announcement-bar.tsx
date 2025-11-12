import ann from "@/content/announcement.json";
import Link from "next/link";

export default function AnnouncementBar() {
  if (!ann.enabled) return null;
  return (
    <div className="w-full bg-ink-800 text-ink-100 text-sm py-2">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <Link href={ann.href} className="hover:underline">
          {ann.message}
        </Link>
      </div>
    </div>
  );
}
