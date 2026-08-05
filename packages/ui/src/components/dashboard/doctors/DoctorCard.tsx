import Link from "next/link";
import type { Doctor } from "../types/doctor";
import { DoctorStatusBadge } from "./DoctorStatusBadge";

function getInitials(name: string) {
  return name
    .replace("Dr.", "")
    .trim()
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function DoctorCard({
  doctor,
  onEdit,
}: {
  doctor: Doctor;
  onEdit: (doctor: Doctor) => void;
}) {
  return (
    <div className="hover-lift group flex flex-col gap-4 rounded-card border border-border bg-card p-5 shadow-card-soft">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-background">
            {getInitials(doctor.name)}
          </div>
          <div>
            <h3 className="text-body font-semibold text-foreground">
              {doctor.name}
            </h3>
            <p className="text-small text-muted">{doctor.specialty}</p>
          </div>
        </div>
        <DoctorStatusBadge status={doctor.status} />
      </div>

      <dl className="grid grid-cols-2 gap-3 text-small">
        <div>
          <dt className="text-xs text-muted">Department</dt>
          <dd className="font-medium text-foreground">{doctor.department}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Experience</dt>
          <dd className="font-medium text-foreground">
            {doctor.experienceYears} yrs
          </dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Fee</dt>
          <dd className="font-medium text-foreground">
            ₹{doctor.consultationFee}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Available</dt>
          <dd className="font-medium text-foreground">
            {doctor.availableDays.join(", ") || "—"}
          </dd>
        </div>
      </dl>

      <div className="mt-auto flex items-center gap-2 border-t border-border pt-4">
        <Link
          href={`/doctors/${doctor.slug}`}
          className="flex-1 rounded-button border border-border bg-surface px-3 py-2 text-center text-small font-medium text-foreground transition-colors hover:bg-secondary"
        >
          View
        </Link>
        <button
          type="button"
          onClick={() => onEdit(doctor)}
          className="flex-1 rounded-button bg-primary px-3 py-2 text-center text-small font-medium text-background transition-opacity hover:opacity-90"
        >
          Edit
        </button>
      </div>
    </div>
  );
}
