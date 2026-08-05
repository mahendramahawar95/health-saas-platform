import type { DoctorStatus } from "../types/doctor";

const STATUS_MAP: Record<DoctorStatus, { label: string; classes: string }> = {
  active: {
    label: "Active",
    classes: "bg-success/10 text-success",
  },
  "on-leave": {
    label: "On Leave",
    classes: "bg-warning/15 text-warning",
  },
  inactive: {
    label: "Inactive",
    classes: "bg-danger/10 text-danger",
  },
};

export function DoctorStatusBadge({ status }: { status: DoctorStatus }) {
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
