import Link from "next/link";
import { Button } from "@repo/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-background py-3xl">
      <div className="container flex flex-col items-center gap-md text-center">
        <svg
          viewBox="0 0 400 100"
          className="h-auto w-full"
          role="img"
          aria-label="Heartbeat monitor line going flat"
        >
          <path
            pathLength={300}
            d="M0 50 H120 L138 20 L158 80 L178 40 L196 50 H400"
            fill="none"
            stroke="var(--color-danger)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-ekg"
          />
        </svg>

        <span className="text-display font-semibold text-foreground">404</span>
        <h1 className="text-h3 font-semibold text-foreground">
          Looks like this page flatlined
        </h1>
        <p className=" text-body text-content-secondary">
          The page you&apos;re looking for doesn&apos;t exist, may have moved,
          or the link might be outdated.
        </p>

        <div className="mt-sm flex flex-col items-center gap-3 sm:flex-row">
          <Link href="/">
            <Button variant="primary" size="lg">
              Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
