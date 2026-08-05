import type { PatientStatus } from "../types/patient";

const STATUS_MAP: Record<PatientStatus, { label: string; classes: string }> = {
  active: { label: "Active", classes: "bg-success/10 text-success" },
  critical: { label: "Critical", classes: "bg-danger/10 text-danger" },
  inactive: { label: "Inactive", classes: "bg-secondary text-muted" },
};

export function PatientStatusBadge({ status }: { status: PatientStatus }) {
  const { label, classes } = STATUS_MAP[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${classes}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}

const APPOINTMENT_STATUS_MAP: Record<string, string> = {
  upcoming: "bg-primary/10 text-primary",
  completed: "bg-success/10 text-success",
  cancelled: "bg-danger/10 text-danger",
};

export function StatusPill({ status }: { status: string }) {
  const classes = APPOINTMENT_STATUS_MAP[status] ?? "bg-secondary text-muted";

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium capitalize ${classes}`}
    >
      {status}
    </span>
  );
}
