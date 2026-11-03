"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Activity,
  Mail,
  Lock,
  Stethoscope,
  CalendarCheck,
  Users,
} from "lucide-react";
import { Input } from "@repo/ui";

export default function LoginPage() {
  const router = useRouter();
  const [values, setValues] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleChange(field: "email" | "password") {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!values.email || !values.password) {
      setError("Enter your email and password to continue.");
      return;
    }

    setSubmitting(true);
    // Wire this up to real auth — this just simulates a request.
    setTimeout(() => {
      setSubmitting(false);
      router.push("/dashboard");
    }, 600);
  }

  return (
    <div className="flex min-h-screen">
      {/* Branding panel — desktop only */}
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-primary p-12 lg:flex">
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            backgroundImage: "var(--background-image-gradient-secondary)",
          }}
        />

        <div className="relative flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent">
            <Activity size={18} className="text-primary" />
          </div>
          <span className="text-lg font-bold text-white">Vitalis</span>
        </div>

        <div className="relative">
          <h1 className="max-w-4xl text-3xl font-bold text-white">
            Run your clinic from one clear dashboard.
          </h1>
          <p className="mt-3 max-w-4xl text-sm text-white/70">
            Appointments, doctors, patients, and payments — all in one place,
            built for how clinics actually work.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <div className="flex items-center gap-2 text-white/80">
              <CalendarCheck size={16} />
              <span className="text-sm">Scheduling</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Stethoscope size={16} />
              <span className="text-sm">Doctors</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Users size={16} />
              <span className="text-sm">Patients</span>
            </div>
          </div>
        </div>

        <p className="relative text-xs text-white/50">
          © {new Date().getFullYear()} Vitalis Health
        </p>
      </div>

      {/* Form panel */}
      <div className="flex w-full items-center justify-center p-6 sm:p-12 lg:w-1/2">
        <div className="w-full max-w-4xl stagger-item hover-lift rounded-card border border-border bg-surface p-5 shadow-card-soft">
          <div className="mb-8 flex items-center gap-2 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent">
              <Activity size={18} className="text-primary" />
            </div>
            <span className="text-lg font-bold">Vitalis</span>
          </div>

          <h2 className="text-2xl font-bold">Welcome back</h2>
          <p className="mt-1 text-sm text-muted">
            Sign in to your clinic dashboard.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <Input
              label="Email"
              type="email"
              leftIcon={<Mail size={16} />}
              placeholder="you@clinic.com"
              value={values.email}
              onChange={handleChange("email")}
              required
            />

            <Input
              label="Password"
              type="password"
              leftIcon={<Lock size={16} />}
              placeholder="••••••••"
              value={values.password}
              onChange={handleChange("password")}
              required
            />

            {error && <p className="text-sm text-destructive">{error}</p>}

            <div className="flex items-center justify-between text-sm">
              <label className="flex cursor-pointer items-center gap-2 text-foreground">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary/20"
                />
                Remember me
              </label>
              <Link
                href="/forgot-password"
                className="font-medium text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 flex h-11 items-center justify-center rounded-button bg-primary text-sm font-semibold text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Signing in…" : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-primary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
