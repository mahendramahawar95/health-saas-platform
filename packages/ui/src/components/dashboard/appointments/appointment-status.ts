export type AppointmentStatus =
  | "Confirmed"
  | "Waiting"
  | "Completed"
  | "Cancelled";

export const APPOINTMENT_STATUS_CLASSES: Record<AppointmentStatus, string> = {
  Confirmed: "bg-success text-white",
  Waiting: "bg-warning text-foreground",
  Completed: "border border-border bg-secondary text-muted",
  Cancelled: "bg-danger text-white",
};
