import Link from "next/link";
import { Check, ChevronRight, Stethoscope } from "lucide-react";
import type { Department } from "@/src/data/departments";

export default function DepartmentDetails({
  department,
}: {
  department: Department;
}) {
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
            <Link
              href="/departments"
              className="no-underline hover:text-primary"
            >
              Departments
            </Link>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span className="text-foreground">{department.name}</span>
          </nav>

          <div className="mt-lg flex flex-col gap-md md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-small font-medium text-primary">
                <Stethoscope className="size-4" aria-hidden="true" />
                Department
              </span>
              <h1 className="mt-3 text-h1 font-semibold text-foreground">
                {department.name}
              </h1>
              <p className="mt-2 text-body text-content-secondary">
                {department.tagline}
              </p>
            </div>

            <Link
              href={`/appointments/book?department=${department.slug}`}
              className="inline-flex w-fit items-center justify-center rounded-md bg-primary px-6 py-3 text-small font-medium text-background no-underline transition-opacity duration-300 hover:opacity-90"
            >
              Book Appointment
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-xl grid grid-cols-1 gap-md sm:grid-cols-3">
            {department.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-card p-lg text-center shadow-card"
              >
                <div className="text-h3 font-semibold text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-small text-content-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview + services */}
      <section className="bg-background py-3xl">
        <div className="container grid grid-cols-1 gap-2xl lg:grid-cols-2">
          <div>
            <h2 className="text-h3 font-semibold text-foreground">
              About This Department
            </h2>
            <p className="mt-3 text-body text-content-secondary">
              {department.description}
            </p>
          </div>

          <div>
            <h2 className="text-h3 font-semibold text-foreground">
              Services Offered
            </h2>
            <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {department.services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-2 text-small text-foreground"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="bg-section-second py-3xl">
        <div className="container">
          <h2 className="text-h3 font-semibold text-foreground">
            Meet the Specialists
          </h2>

          <div className="mt-lg grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-3">
            {department.doctors.map((doctor) => (
              <div
                key={doctor.name}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-lg shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-h5 font-semibold text-primary">
                  {doctor.name
                    .replace("Dr. ", "")
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {doctor.name}
                  </div>
                  <div className="text-small text-content-secondary">
                    {doctor.specialty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
