"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Input, Button, Section } from "@repo/ui";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    // TODO: wire this up to your real password-reset endpoint.
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setSent(true);
  }

  return (
    <Section className="flex min-h-[80vh] items-center justify-center bg-section-first py-3xl">
      <div className="container">
        <div className="w-full max-w-4xl m-auto  rounded-lg border border-border bg-card p-xl shadow-card">
          <div className="text-center">
            <h1 className="text-h3 font-semibold text-foreground">
              Forgot Password?
            </h1>
            <p className="mt-2 text-small text-content-secondary">
              Enter the email on your account and we&apos;ll send you a link to
              reset it.
            </p>
          </div>

          {sent ? (
            <div className="mt-lg rounded-md border border-border bg-secondary px-4 py-3 text-center text-small text-foreground">
              If an account exists for{" "}
              <span className="font-medium">{email}</span>, a reset link is on
              its way.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-lg flex flex-col gap-4">
              <Input
                label="Email"
                type="email"
                leftIcon={<Mail size={16} />}
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <Button
                type="submit"
                variant={"primary"}
                className="text-white"
                isLoading={isSubmitting}
                loadingText="Sending..."
              >
                Send Reset Link
              </Button>
            </form>
          )}

          <p className="mt-lg text-center text-small text-content-secondary">
            Remembered your password?{" "}
            <Link
              href="/login"
              className="font-medium text-primary no-underline hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </Section>
  );
}
