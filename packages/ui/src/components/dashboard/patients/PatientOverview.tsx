import { Button } from "@repo/ui";
import type { Patient } from "../types/patient";
import { PatientStatusBadge } from "./PatientStatusBadge";

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border py-3 last:border-b-0">
      <span className="text-small text-muted">{label}</span>
      <span className="text-small font-medium text-foreground">{value}</span>
    </div>
  );
}

export function PatientOverview({
  patient,
  onEdit,
}: {
  patient: Patient;
  onEdit: () => void;
}) {
  const initials = patient.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="flex flex-col items-center gap-4 rounded-card border border-border bg-card p-6 text-center shadow-card-soft lg:col-span-1">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-h5 font-semibold text-background">
          {initials}
        </div>
        <div>
          <h2 className="text-h5 font-bold text-foreground">{patient.name}</h2>
          <p className="text-small text-muted">
            {patient.age} yrs · {patient.gender}
          </p>
        </div>
        <PatientStatusBadge status={patient.status} />
        <Button variant="primary" size="sm" onClick={onEdit}>
          Edit Patient
        </Button>
      </div>

      <div className="flex flex-col gap-6 lg:col-span-2">
        <div className="rounded-card border border-border bg-surface p-6 shadow-card-soft">
          <h3 className="mb-2 text-body font-semibold text-foreground">
            Patient Details
          </h3>
          <InfoRow label="Blood Group" value={patient.bloodGroup} />
          <InfoRow label="Phone" value={patient.phone} />
          <InfoRow label="Email" value={patient.email} />
          <InfoRow label="Address" value={patient.address} />
          <InfoRow
            label="Registered On"
            value={new Date(patient.registeredOn).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          />
        </div>
      </div>
    </div>
  );
}
