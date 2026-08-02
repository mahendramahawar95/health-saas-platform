"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Input, Button } from "@repo/ui";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    // TODO: wire this up to your real newsletter/notify endpoint.
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setSubscribed(true);
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-background py-3xl">
      <div className="container flex flex-col items-center gap-md text-center">
        <svg
          viewBox="0 0 300 60"
          className="h-auto w-64"
          role="img"
          aria-label="Heartbeat monitor line"
        >
          <path
            pathLength={300}
            d="M0 30 H90 L106 8 L124 52 L142 20 L158 30 H300"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-ekg"
          />
        </svg>

        <span className="text-small font-semibold uppercase tracking-wide text-primary">
          Coming Soon
        </span>
        <h1 className="text-h1 font-semibold text-foreground">
          We&apos;re Building Something New
        </h1>
        <p className=" text-body text-content-secondary">
          This page is on its way. Leave your email and we&apos;ll let you know
          the moment it&apos;s live.
        </p>

        {subscribed ? (
          <div className="mt-sm rounded-md border border-border bg-secondary px-4 py-3 text-small text-foreground">
            You&apos;re on the list — we&apos;ll email{" "}
            <span className="font-medium">{email}</span> when we launch.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-sm flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-end"
          >
            <div className="flex-1">
              <Input
                label="Email"
                type="email"
                leftIcon={<Mail size={16} />}
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              variant={"primary"}
              className="text-white"
              isLoading={isSubmitting}
              loadingText="Saving..."
            >
              Notify Me
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
