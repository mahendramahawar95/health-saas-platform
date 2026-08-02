import Link from "next/link";
import { Wrench } from "lucide-react";
import { Button } from "@repo/ui";

export default function MaintenancePage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background py-3xl">
      <div className="container flex flex-col items-center gap-md text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Wrench className="size-8" aria-hidden="true" />
        </div>

        <h1 className="text-h1 font-semibold text-foreground">
          We&apos;ll Be Right Back
        </h1>
        <p className=" text-body text-content-secondary">
          We&apos;re performing scheduled maintenance to improve your
          experience. We expect to be back online shortly — thanks for your
          patience.
        </p>

        <div className="mt-sm rounded-md border border-border bg-card px-4 py-2.5 text-small text-content-secondary shadow-card">
          Estimated return:{" "}
          <span className="font-medium text-foreground">
            within a few hours
          </span>
        </div>

        <Link href="/" className="mt-sm">
          <Button variant={"outline"}>Try Again</Button>
        </Link>

        <p className="text-xs text-content-secondary">
          For urgent care, call{" "}
          <a
            href="tel:+911234567890"
            className="font-medium text-primary no-underline hover:underline"
          >
            +91 12345 67890
          </a>
        </p>
      </div>
    </section>
  );
}
