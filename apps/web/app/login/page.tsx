"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, Mail } from "lucide-react";
import { Input, Button, Section } from "@repo/ui";

type FormState = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [form, setForm] = useState<FormState>({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(field: keyof FormState) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    // TODO: wire this up to your real auth endpoint.
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
  }

  return (
    <Section className="flex min-h-[80vh] items-center justify-center bg-section-first py-3xl">
      <div className="container">
        <div className="w-full max-w-4xl m-auto  rounded-lg border border-border bg-card p-xl shadow-card">
          <div className="text-center">
            <h1 className="text-h3 font-semibold text-foreground">
              Welcome Back
            </h1>
            <p className="mt-2 text-small text-content-secondary">
              Log in to manage your appointments and records.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-lg flex flex-col gap-4">
            <Input
              label="Email"
              type="email"
              leftIcon={<Mail size={16} />}
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange("email")}
              required
            />

            <Input
              label="Password"
              type="password"
              leftIcon={<Lock size={16} />}
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange("password")}
              required
            />

            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-xs font-medium text-primary no-underline hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              variant={"primary"}
              className="text-white"
              isLoading={isSubmitting}
              loadingText="Logging in..."
            >
              Log In
            </Button>
          </form>

          <p className="mt-lg text-center text-small text-content-secondary">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-primary no-underline hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </Section>
  );
}
