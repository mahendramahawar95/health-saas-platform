"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@repo/ui";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 MG Road, Jaipur, Rajasthan 302001",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 12345 67890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "care@medicare-hospital.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat: 7 AM – 9 PM · Emergency: 24×7",
  },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  department: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  department: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    // TODO: wire this up to your actual contact/email endpoint.
    await new Promise((resolve) => setTimeout(resolve, 800));

    setStatus("sent");
    setForm(initialState);
  }

  return (
    <section className="bg-section-first py-3xl">
      <div className="container">
        <div className="mx-auto text-center">
          <span className="text-small font-semibold uppercase tracking-wide text-primary">
            Contact
          </span>
          <h2 className="mt-2 text-h2 font-semibold text-foreground">
            Get in Touch
          </h2>
          <p className="mt-3 text-body text-content-secondary">
            Questions about a visit, billing, or a department? Send us a message
            or reach out directly.
          </p>
        </div>

        <div className="mt-xl grid grid-cols-1 gap-2xl lg:grid-cols-2">
          {/* Left: info + map */}
          <div>
            <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-lg border border-border bg-card p-lg shadow-card"
                >
                  <div className="flex size-icon items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-small font-medium text-foreground">
                    {label}
                  </div>
                  <div className="mt-1 text-small text-content-secondary">
                    {value}
                  </div>
                </div>
              ))}
            </div>

            {/* Map — replace src with your real Google Maps embed URL */}
            <div className="mt-md overflow-hidden rounded-lg border border-border shadow-card">
              <iframe
                title="Hospital location"
                src="https://www.google.com/maps?q=Jaipur,Rajasthan&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-lg border border-border bg-card p-lg shadow-card"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-small font-medium text-foreground"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-md border border-border bg-surface px-3 py-2.5 text-small text-foreground outline-none transition-colors duration-200 focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-small font-medium text-foreground"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-md border border-border bg-surface px-3 py-2.5 text-small text-foreground outline-none transition-colors duration-200 focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-small font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-md border border-border bg-surface px-3 py-2.5 text-small text-foreground outline-none transition-colors duration-200 focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="department"
                className="text-small font-medium text-foreground"
              >
                Department
              </label>
              <select
                id="department"
                name="department"
                value={form.department}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-md border border-border bg-surface px-3 py-2.5 text-small text-foreground outline-none transition-colors duration-200 focus:border-primary"
              >
                <option value="">General inquiry</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="billing">Billing</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-small font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
                className="mt-1.5 w-full resize-none rounded-md border border-border bg-surface px-3 py-2.5 text-small text-foreground outline-none transition-colors duration-200 focus:border-primary"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={status === "submitting"}
            >
              {status === "submitting"
                ? "Sending..."
                : status === "sent"
                  ? "Message Sent"
                  : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
