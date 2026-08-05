"use client";

import { useMemo, useState } from "react";
import type { Doctor, DoctorStatus } from "../types/doctor";
import { DoctorCard } from "./DoctorCard";

const STATUS_FILTERS: { label: string; value: DoctorStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "On Leave", value: "on-leave" },
  { label: "Inactive", value: "inactive" },
];

export function DoctorsGrid({
  doctors,
  onEdit,
}: {
  doctors: Doctor[];
  onEdit: (doctor: Doctor) => void;
}) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<DoctorStatus | "all">("all");

  const filtered = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesStatus = status === "all" || doctor.status === status;
      const matchesQuery =
        query.trim().length === 0 ||
        [doctor.name, doctor.specialty, doctor.department]
          .join(" ")
          .toLowerCase()
          .includes(query.trim().toLowerCase());

      return matchesStatus && matchesQuery;
    });
  }, [doctors, query, status]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 rounded-card border border-border bg-surface p-4 shadow-card-soft sm:flex-row sm:items-center sm:justify-between">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by name, specialty, department"
          className="w-full rounded-input border border-border bg-background px-4 py-2.5 text-small text-foreground outline-none placeholder:text-muted focus:border-primary"
        />

        <div className="flex flex-wrap items-center gap-2">
          {STATUS_FILTERS.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setStatus(filter.value)}
              className={`rounded-full px-3.5 py-1.5 text-small font-medium transition-colors ${
                status === filter.value
                  ? "bg-primary text-background"
                  : "bg-secondary text-muted hover:text-foreground"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-2 rounded-card border border-dashed border-border bg-surface py-16 text-center">
          <p className="text-body font-medium text-foreground">
            No doctors match your search
          </p>
          <p className="text-small text-muted">
            Try a different name, specialty, or status filter.
          </p>
        </div>
      ) : (
        <div className="stagger grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} onEdit={onEdit} />
          ))}
        </div>
      )}
    </div>
  );
}
