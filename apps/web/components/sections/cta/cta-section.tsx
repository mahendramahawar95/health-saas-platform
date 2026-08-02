import Link from "next/link";
import { Phone } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-secondary min-h-screen py-2xl">
      <div className="container relative z-10 flex flex-col items-center gap-md text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-background/15 px-4 py-1.5 text-small font-medium text-background">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-background animate-pulse-dot" />
          </span>
          Emergency line open 24×7
        </span>

        <h2 className="text-h2 font-semibold text-background">
          Need Immediate Care?
        </h2>

        <p className="text-body text-background/80">
          Our emergency team and specialists are on standby. Don&apos;t wait for
          a slot — reach out now.
        </p>

        <div className="mt-sm flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/appointments/book"
            className="rounded-md bg-background px-6 py-3 text-small font-semibold text-primary no-underline transition-transform duration-300 hover:scale-105"
          >
            Book Appointment Today
          </Link>

          <a
            href="tel:+911234567890"
            className="inline-flex items-center gap-2 text-small font-medium text-background no-underline underline-offset-4 hover:underline"
          >
            <Phone className="size-4" aria-hidden="true" />
            Or call +91 12345 67890
          </a>
        </div>
      </div>

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full opacity-40"
        viewBox="0 0 800 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          pathLength={300}
          d="M0 40 H250 L270 10 L290 55 L310 25 L330 40 H800"
          fill="none"
          stroke="var(--color-background)"
          strokeWidth="2"
          className="animate-ekg"
        />
      </svg>
    </section>
  );
}
