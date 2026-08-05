import Link from "next/link";
import type { Doctor } from "../types/doctor";
import { DoctorStatusBadge } from "./DoctorStatusBadge";

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border py-3 last:border-b-0">
      <span className="text-small text-muted">{label}</span>
      <span className="text-small font-medium text-foreground">{value}</span>
    </div>
  );
}

export function DoctorDetails({
  doctor,
  onEdit,
}: {
  doctor: Doctor;
  onEdit: () => void;
}) {
  const initials = doctor.name
    .replace("Dr.", "")
    .trim()
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <Link
          href="/doctors"
          className="text-small font-medium text-muted hover:text-foreground"
        >
          ← Back to All Doctors
        </Link>
        <button
          type="button"
          onClick={onEdit}
          className="rounded-button bg-primary px-4 py-2 text-small font-semibold text-background hover:opacity-90"
        >
          Edit Doctor
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex flex-col items-center gap-4 rounded-card border border-border bg-card p-6 text-center shadow-card-soft lg:col-span-1">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-h5 font-semibold text-background">
            {initials}
          </div>
          <div>
            <h2 className="text-h5 font-bold text-foreground">{doctor.name}</h2>
            <p className="text-small text-muted">{doctor.specialty}</p>
          </div>
          <DoctorStatusBadge status={doctor.status} />
          <p className="text-small text-muted">{doctor.bio}</p>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-2">
          <div className="rounded-card border border-border bg-surface p-6 shadow-card-soft">
            <h3 className="mb-2 text-body font-semibold text-foreground">
              Professional Details
            </h3>
            <InfoRow label="Department" value={doctor.department} />
            <InfoRow label="Qualification" value={doctor.qualification} />
            <InfoRow
              label="Experience"
              value={`${doctor.experienceYears} years`}
            />
            <InfoRow
              label="Consultation Fee"
              value={`₹${doctor.consultationFee}`}
            />
            <InfoRow
              label="Available Days"
              value={doctor.availableDays.join(", ") || "—"}
            />
          </div>

          <div className="rounded-card border border-border bg-surface p-6 shadow-card-soft">
            <h3 className="mb-2 text-body font-semibold text-foreground">
              Contact Information
            </h3>
            <InfoRow label="Email" value={doctor.email} />
            <InfoRow label="Phone" value={doctor.phone} />
            <InfoRow
              label="Joined On"
              value={new Date(doctor.joinedOn).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
