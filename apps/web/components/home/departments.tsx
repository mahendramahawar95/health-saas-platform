"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Baby,
  Bone,
  Brain,
  Check,
  Dumbbell,
  Ear,
  HeartPulse,
  Microscope,
  Pill,
  Smile,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { departments, type Department } from "../../src/data/departments";

const icons: Record<string, LucideIcon> = {
  cardiology: HeartPulse,
  neurology: Brain,
  orthopedics: Bone,
  pediatrics: Baby,
  dermatology: Sparkles,
  ent: Ear,
  oncology: Microscope,
  gastroenterology: Pill,
  dentistry: Smile,
  physiotherapy: Dumbbell,
};

export default function DepartmentsTabs() {
  const [activeSlug, setActiveSlug] = useState(departments[0]!.slug);
  const active = departments.find((d) => d.slug === activeSlug) as Department;

  return (
    <section className="bg-background py-3xl">
      <div className="container">
        <div className="mx-auto text-center">
          <span className="text-small font-semibold uppercase tracking-wide text-primary">
            Departments
          </span>
          <h1 className="mt-2 text-h2 font-semibold text-foreground">
            Explore Our Departments
          </h1>
          <p className="mt-3 text-body text-content-secondary">
            Select a department to see the team, services, and specialties
            behind it.
          </p>
        </div>

        <div className="mt-xl grid grid-cols-1 gap-lg lg:grid-cols-[370px_1fr]">
          {/* Left: tab list */}
          <div className="grid grid-cols-2 gap-2.5">
            {departments.map((department) => {
              const Icon = icons[department.slug] ?? HeartPulse;
              const isActive = department.slug === activeSlug;

              return (
                <button
                  key={department.slug}
                  type="button"
                  onClick={() => setActiveSlug(department.slug)}
                  aria-current={isActive}
                  className={` rounded-lg px-4 py-3.5 text-center transition-all duration-300 ${
                    isActive ? "shadow-lg" : "border-border bg-white "
                  }`}
                >
                  <span
                    className={`flex  shrink-0 items-center justify-center rounded-md transition-colors duration-300`}
                  >
                    <Icon
                      className={`size-12 mb-2 aria-hidden="true" ${
                        isActive ? "text-primary" : "text-foreground"
                      }`}
                    />
                  </span>
                  <h6
                    className={`flex-1 break-all text-h6 font-bold uppercase  ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {department.name}
                  </h6>
                </button>
              );
            })}
          </div>

          {/* Right: active department detail */}
          <div
            key={active.slug}
            className=" overflow-hidden bg-white rounded-lg border border-border shadow-card"
          >
            <div className="grid p-xl grid-cols-1 gap-lg lg:grid-cols-[3fr_2fr] items-center ">
              <div className="">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div>
                      <h2 className="text-h3 mb-3 font-semibold text-foreground">
                        {active.name}
                      </h2>
                      <p className="text-small text-content-secondary">
                        {active.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-body text-content-secondary">
                  {active.description}
                </p>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {active.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-md border border-border bg-surface px-4 py-3 text-center"
                    >
                      <div className="text-h5 font-semibold text-primary">
                        {stat.value}
                      </div>
                      <div className="mt-0.5 text-xs text-content-secondary">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Services */}
                <div className="mt-6">
                  <h3 className="text-small font-semibold text-foreground">
                    Services Offered
                  </h3>
                  <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {active.services.map((service) => (
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
                  <Link
                    href={`/appointments/book?department=${active.slug}`}
                    className="inline-flex mt-4 w-fit items-center justify-center rounded-md bg-primary px-5 py-2.5 text-small font-medium text-background no-underline transition-opacity duration-300 hover:opacity-90"
                  >
                    Book Appointment
                  </Link>
                </div>

                {/* Doctors */}
                {/* <div className="mt-6">
                <h3 className="text-small font-semibold text-foreground">Specialists</h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  {active.doctors.map((doctor) => (
                    <div
                      key={doctor.name}
                      className="flex items-center gap-2.5 rounded-md border border-border bg-surface px-3 py-2"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        {doctor.name
                          .replace("Dr. ", "")
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </span>
                      <div className="text-xs">
                        <div className="font-medium text-foreground">{doctor.name}</div>
                        <div className="text-content-secondary">{doctor.specialty}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/departments/${active.slug}`}
                className="mt-6 inline-flex items-center gap-1 text-small font-medium text-primary no-underline hover:underline"
              >
                View full department page
                <ChevronRight className="size-4" aria-hidden="true" />
              </Link> */}
              </div>
              <div className="">
                <Image
                  src={active.image}
                  alt={active.name}
                  className="object-contain aspect-square"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
