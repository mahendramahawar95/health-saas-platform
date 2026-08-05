"use client";

/**
 * NOTE: import paths/prop names for Button and Input below (variant, size, etc.)
 * are assumed to match your @repo/ui package's conventions. Adjust the import
 * paths and prop names to whatever your actual components export if they differ.
 */
import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@repo/ui";
import { Input } from "@repo/ui";
import type { Patient, PatientStatus } from "../types/patient";
import { PatientStatusBadge } from "./PatientStatusBadge";

const STATUS_FILTERS: { label: string; value: PatientStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Critical", value: "critical" },
  { label: "Inactive", value: "inactive" },
];

export function PatientsTable({
  patients,
  onEdit,
}: {
  patients: Patient[];
  onEdit: (patient: Patient) => void;
}) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<PatientStatus | "all">("all");

  const filtered = useMemo(() => {
    return patients.filter((patient) => {
      const matchesStatus = status === "all" || patient.status === status;
      const matchesQuery =
        query.trim().length === 0 ||
        [patient.name, patient.email, patient.phone]
          .join(" ")
          .toLowerCase()
          .includes(query.trim().toLowerCase());

      return matchesStatus && matchesQuery;
    });
  }, [patients, query, status]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 rounded-card border border-border bg-surface p-4 shadow-card-soft sm:flex-row sm:items-center sm:justify-between">
        <Input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by name, email, or phone"
          className="w-full "
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
            No patients match your search
          </p>
          <p className="text-small text-muted">
            Try a different name, email, phone, or status filter.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-card border border-border bg-surface shadow-card-soft">
          <table className="w-full min-w-[720px] border-collapse text-small">
            <thead>
              <tr className="border-b border-border bg-secondary/40 text-left text-xs uppercase tracking-wide text-muted">
                <th className="px-5 py-3 font-medium">Patient</th>
                <th className="px-5 py-3 font-medium">Age / Gender</th>
                <th className="px-5 py-3 font-medium">Blood Group</th>
                <th className="px-5 py-3 font-medium">Contact</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Registered</th>
                <th className="px-5 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((patient) => (
                <tr
                  key={patient.id}
                  className="border-b border-border last:border-b-0 hover:bg-secondary/30"
                >
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-background">
                        {patient.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </div>
                      <span className="font-medium text-foreground">
                        {patient.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-muted">
                    {patient.age} · {patient.gender}
                  </td>
                  <td className="px-5 py-3 text-muted">{patient.bloodGroup}</td>
                  <td className="px-5 py-3 text-muted">
                    <div className="flex flex-col">
                      <span>{patient.phone}</span>
                      <span className="text-xs">{patient.email}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <PatientStatusBadge status={patient.status} />
                  </td>
                  <td className="px-5 py-3 text-muted">
                    {new Date(patient.registeredOn).toLocaleDateString(
                      "en-IN",
                      { day: "numeric", month: "short", year: "numeric" },
                    )}
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/patients/${patient.slug}`}>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </Link>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => onEdit(patient)}
                      >
                        Edit
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
