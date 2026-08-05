"use client";

import { Eye, Pencil, XCircle } from "lucide-react";
import type { AppointmentStatus } from "./AppointmentRow";

export type AppointmentTableRow = {
  id: string;
  patient: string;
  doctor: string;
  time: string;
  status: AppointmentStatus;
};

type Props = {
  data: AppointmentTableRow[];
  onView?: (row: AppointmentTableRow) => void;
  onReschedule?: (row: AppointmentTableRow) => void;
  onCancel?: (row: AppointmentTableRow) => void;
};

const STATUS_CLASSES: Record<AppointmentStatus, string> = {
  Confirmed: "bg-success text-white",
  Waiting: "bg-warning text-foreground",
  Completed: "border border-border bg-secondary text-muted",
  Cancelled: "bg-danger text-white",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function AppointmentsTable({
  data,
  onView,
  onReschedule,
  onCancel,
}: Props) {
  return (
    <div className="animate-fade-up overflow-hidden rounded-card border border-border bg-surface shadow-card-soft">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/60">
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
                Patient
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
                Doctor
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
                Time
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
                Status
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={row.id}
                style={{ "--stagger-index": i } as React.CSSProperties}
                className="stagger-item border-b border-border transition-colors last:border-0 hover:bg-secondary"
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-card-bg text-xs font-semibold">
                      {initials(row.patient)}
                    </div>
                    <span className="font-medium">{row.patient}</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-muted">{row.doctor}</td>
                <td className="px-5 py-3 text-muted">{row.time}</td>
                <td className="px-5 py-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_CLASSES[row.status]}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      title="View"
                      onClick={() => onView?.(row)}
                      className="hover-lift flex h-8 w-8 items-center justify-center rounded-md text-muted hover:bg-secondary hover:text-primary"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      type="button"
                      title="Reschedule"
                      onClick={() => onReschedule?.(row)}
                      className="hover-lift flex h-8 w-8 items-center justify-center rounded-md text-muted hover:bg-secondary hover:text-primary"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      type="button"
                      title="Cancel"
                      onClick={() => onCancel?.(row)}
                      className="hover-lift flex h-8 w-8 items-center justify-center rounded-md text-muted hover:bg-secondary hover:text-danger"
                    >
                      <XCircle size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {data.length === 0 && (
        <div className="px-5 py-10 text-center text-sm text-muted">
          No appointments to show.
        </div>
      )}
    </div>
  );
}
