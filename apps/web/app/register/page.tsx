"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, Mail, Phone, User } from "lucide-react";
import { Input, Button, Section } from "@repo/ui";

type FormState = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleChange(field: keyof FormState) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    // TODO: wire this up to your real registration endpoint.
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
  }

  return (
    <Section className="flex min-h-[80vh] items-center justify-center bg-section-first py-3xl">
      <div className="container">
        <div className="w-full max-w-4xl m-auto  rounded-lg border border-border bg-card p-xl shadow-card">
          <div className="text-center">
            <h1 className="text-h3 font-semibold text-foreground">
              Create Your Account
            </h1>
            <p className="mt-2 text-small text-content-secondary">
              Register to book appointments and manage your health records.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-lg flex flex-col gap-4">
            <Input
              label="Full Name"
              leftIcon={<User size={16} />}
              placeholder="Jane Doe"
              value={form.name}
              onChange={handleChange("name")}
              required
            />

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
              label="Phone"
              type="tel"
              leftIcon={<Phone size={16} />}
              placeholder="+91 12345 67890"
              value={form.phone}
              onChange={handleChange("phone")}
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

            <Input
              label="Confirm Password"
              type="password"
              leftIcon={<Lock size={16} />}
              placeholder="••••••••"
              value={form.confirmPassword}
              onChange={handleChange("confirmPassword")}
              required
            />

            {error && (
              <p className="text-xs font-medium text-danger">{error}</p>
            )}

            <Button
              type="submit"
              variant={"primary"}
              className="text-white"
              isLoading={isSubmitting}
              loadingText="Creating account..."
            >
              Create Account
            </Button>
          </form>

          <p className="mt-lg text-center text-small text-content-secondary">
            Already have an account?{" "}
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
