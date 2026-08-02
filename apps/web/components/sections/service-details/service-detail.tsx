import Link from "next/link";
import { Check, ChevronRight, Clock, Stethoscope } from "lucide-react";
import type { Service } from "@/src/data/servicelist";

export default function ServiceDetails({ service }: { service: Service }) {
  return (
    <>
      {/* Breadcrumb + hero */}
      <section className="bg-section-first py-2xl">
        <div className="container">
          <nav
            className="flex items-center gap-1 text-xs text-content-secondary"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="no-underline hover:text-primary">
              Home
            </Link>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <Link href="/services" className="no-underline hover:text-primary">
              Services
            </Link>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span className="text-foreground">{service.name}</span>
          </nav>

          <div className="mt-lg flex flex-col gap-md md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-small font-medium text-primary">
                <Stethoscope className="size-4" aria-hidden="true" />
                Service
              </span>
              <h1 className="mt-3 text-h1 font-semibold text-foreground">
                {service.name}
              </h1>
              <p className="mt-2  text-body text-content-secondary">
                {service.tagline}
              </p>
            </div>

            <Link
              href={`/appointments/book?service=${service.slug}`}
              className="inline-flex w-fit items-center justify-center rounded-md bg-primary px-6 py-3 text-small font-medium text-background no-underline transition-opacity duration-300 hover:opacity-90"
            >
              Book Appointment
            </Link>
          </div>

          <div className="mt-lg inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-small text-foreground shadow-card">
            <Clock className="size-4 text-primary" aria-hidden="true" />
            <span className="font-medium">Availability:</span>
            <span className="text-content-secondary">
              {service.availability}
            </span>
          </div>
        </div>
      </section>

      {/* Overview + features */}
      <section className="bg-background py-3xl">
        <div className="container grid grid-cols-1 gap-2xl lg:grid-cols-2">
          <div>
            <h2 className="text-h3 font-semibold text-foreground">
              About This Service
            </h2>
            <p className="mt-3 text-body text-content-secondary">
              {service.description}
            </p>
          </div>

          <div>
            <h2 className="text-h3 font-semibold text-foreground">
              What&apos;s Included
            </h2>
            <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-small text-foreground"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-section-second py-2xl">
        <div className="container flex flex-col items-center gap-4 text-center">
          <h2 className="text-h3 font-semibold text-foreground">
            Need {service.name.toLowerCase()} today?
          </h2>
          <p className="text-body text-content-secondary">
            Book online or call us directly and our team will take it from
            there.
          </p>
          <Link
            href={`/appointments/book?service=${service.slug}`}
            className="rounded-md bg-primary px-6 py-3 text-small font-semibold text-background no-underline transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-90"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
