import Link from "next/link";
import {
  Ambulance,
  ArrowRight,
  FlaskConical,
  Home,
  Scan,
  Scissors,
  Siren,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/src/data/servicelist";

const icons: Record<string, LucideIcon> = {
  diagnostics: Scan,
  laboratory: FlaskConical,
  emergency: Siren,
  surgery: Scissors,
  ambulance: Ambulance,
  "home-care": Home,
};

export default function ServicesList() {
  return (
    <section className="bg-background py-3xl">
      <div className="container">
        <div className="mx-auto text-center">
          <span className="text-small font-semibold uppercase tracking-wide text-primary">
            Services
          </span>
          <h1 className="mt-2 text-h2 font-semibold text-foreground">
            What We Offer
          </h1>
          <p className="mt-3 text-body text-content-secondary">
            From same-day diagnostics to care at home, here&apos;s everything we
            provide under one roof.
          </p>
        </div>

        <div className="mt-xl grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.slug] ?? Scan;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-lg border border-border bg-card p-lg no-underline shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex size-icon items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </div>

                <h2 className="mt-4 text-h5 font-semibold text-foreground">
                  {service.name}
                </h2>
                <p className="mt-1 text-small text-content-secondary">
                  {service.tagline}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-small font-medium text-primary">
                  Learn more
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
