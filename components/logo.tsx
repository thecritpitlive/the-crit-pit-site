import Image from "next/image";
import Link from "next/link";

export default function Logo({ size=32 }: { size?: number }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <Image src="/logo.svg" alt="The Crit Pit" width={size} height={size} />
      <span className="font-display tracking-wide text-lg">The Crit Pit</span>
    </Link>
  );
}
