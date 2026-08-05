export type DoctorStatus = "Active" | "On Leave" | "Inactive";

export const DOCTOR_STATUS_CLASSES: Record<DoctorStatus, string> = {
  Active: "bg-success text-white",
  "On Leave": "bg-warning text-foreground",
  Inactive: "border border-border bg-secondary text-muted",
};
