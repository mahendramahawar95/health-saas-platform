import Link from "next/link";
import { HeartPulse } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-lg font-bold no-underline transition-colors duration-300 text-primary"
    >
      <HeartPulse className="size-10 text-primary" /> MediCare
    </Link>
  );
}
