"use client";

import { Eye, Pencil, UserMinus, Mail, Phone } from "lucide-react";
import { DOCTOR_STATUS_CLASSES, type DoctorStatus } from "./DoctorStatus";

export type DoctorRow = {
  id: string;
  name: string;
  specialty: string;
  email: string;
  phone: string;
  status: DoctorStatus;
  patientsToday: number;
};

type Props = {
  data: DoctorRow[];
  onView?: (row: DoctorRow) => void;
  onEdit?: (row: DoctorRow) => void;
  onRemove?: (row: DoctorRow) => void;
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function DoctorsTable({
  data,
  onView,
  onEdit,
  onRemove,
}: Props) {
  return (
    <div className="animate-fade-up overflow-hidden rounded-card border border-border bg-surface shadow-card-soft">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/60">
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
                Doctor
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
                Contact
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
                Status
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
                Patients Today
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
                      {initials(row.name)}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate font-medium">{row.name}</div>
                      <div className="truncate text-xs text-muted">
                        {row.specialty}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <div className="flex flex-col gap-0.5 text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <Mail size={12} /> {row.email}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Phone size={12} /> {row.phone}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${DOCTOR_STATUS_CLASSES[row.status]}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-muted">{row.patientsToday}</td>
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
                      title="Edit"
                      onClick={() => onEdit?.(row)}
                      className="hover-lift flex h-8 w-8 items-center justify-center rounded-md text-muted hover:bg-secondary hover:text-primary"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      type="button"
                      title="Remove"
                      onClick={() => onRemove?.(row)}
                      className="hover-lift flex h-8 w-8 items-center justify-center rounded-md text-muted hover:bg-secondary hover:text-danger"
                    >
                      <UserMinus size={16} />
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
          No doctors to show.
        </div>
      )}
    </div>
  );
}
