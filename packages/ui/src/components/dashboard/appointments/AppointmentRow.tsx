import { MoreHorizontal } from "lucide-react";

export type AppointmentStatus =
  | "Confirmed"
  | "Waiting"
  | "Cancelled"
  | "Completed";

type Props = {
  name: string;
  reason: string;
  time: string;
  doctor: string;
  status: AppointmentStatus;
  index?: number;
  isLast?: boolean;
};

const STATUS_CLASSES: Record<AppointmentStatus, string> = {
  Confirmed: "bg-success text-white",
  Waiting: "bg-warning text-foreground",
  Cancelled: "bg-danger text-white",
  Completed: "border border-border bg-secondary text-muted",
};

export default function AppointmentRow({
  name,
  reason,
  time,
  doctor,
  status,
  index = 0,
  isLast = false,
}: Props) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      style={{ "--stagger-index": index } as React.CSSProperties}
      className={`stagger-item flex items-center justify-between gap-4 rounded-md px-2 py-3 transition-colors hover:bg-secondary ${
        isLast ? "" : "border-b border-border"
      }`}
    >
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-card-bg text-sm font-semibold">
          {initials}
        </div>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold">{name}</div>
          <div className="truncate text-xs text-muted">
            {reason} · {doctor}
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-4">
        <span className="hidden text-sm text-muted sm:inline">{time}</span>
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_CLASSES[status]}`}
        >
          {status}
        </span>
        <MoreHorizontal size={16} className="hidden text-muted sm:block" />
      </div>
    </div>
  );
}
