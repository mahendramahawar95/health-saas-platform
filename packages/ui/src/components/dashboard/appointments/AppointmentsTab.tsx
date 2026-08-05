"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@repo/ui";
import { Input } from "@repo/ui";
import type { Appointment, AppointmentFormValues } from "../types/patient";
import { StatusPill } from "../patients/PatientStatusBadge";
import { Modal } from "@repo/ui";

function makeId() {
  return `apt_${Math.random().toString(36).slice(2, 9)}`;
}

const EMPTY_FORM: AppointmentFormValues = {
  doctorName: "",
  department: "",
  date: new Date().toISOString().slice(0, 10),
  time: "",
  reason: "",
  status: "upcoming",
};

export function AppointmentsTab({
  initialAppointments,
}: {
  initialAppointments: Appointment[];
}) {
  const [appointments, setAppointments] =
    useState<Appointment[]>(initialAppointments);
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<AppointmentFormValues>(EMPTY_FORM);

  function update<K extends keyof AppointmentFormValues>(
    key: K,
    value: AppointmentFormValues[K],
  ) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setAppointments((prev) => [{ ...values, id: makeId() }, ...prev]);
    setValues(EMPTY_FORM);
    setOpen(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-body font-semibold text-foreground">
          Appointments
        </h3>
        <Button variant="primary" size="sm" onClick={() => setOpen(true)}>
          + Schedule Appointment
        </Button>
      </div>

      {appointments.length === 0 ? (
        <div className="rounded-card border border-dashed border-border bg-surface py-12 text-center">
          <p className="text-small text-muted">No appointments scheduled.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-card border border-border bg-surface shadow-card-soft">
          <table className="w-full min-w-[640px] border-collapse text-small">
            <thead>
              <tr className="border-b border-border bg-secondary/40 text-left text-xs uppercase tracking-wide text-muted">
                <th className="px-5 py-3 font-medium">Doctor</th>
                <th className="px-5 py-3 font-medium">Department</th>
                <th className="px-5 py-3 font-medium">Date & Time</th>
                <th className="px-5 py-3 font-medium">Reason</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr
                  key={appt.id}
                  className="border-b border-border last:border-b-0 hover:bg-secondary/30"
                >
                  <td className="px-5 py-3 font-medium text-foreground">
                    {appt.doctorName}
                  </td>
                  <td className="px-5 py-3 text-muted">{appt.department}</td>
                  <td className="px-5 py-3 text-muted">
                    {new Date(appt.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    · {appt.time}
                  </td>
                  <td className="px-5 py-3 text-muted">{appt.reason}</td>
                  <td className="px-5 py-3">
                    <StatusPill status={appt.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {open ? (
        <Modal
          open
          onClose={() => setOpen(false)}
          title="Schedule Appointment"
          size="md"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-small font-medium text-foreground">
                Doctor
              </span>
              <Input
                required
                value={values.doctorName}
                onChange={(e) => update("doctorName", e.target.value)}
                placeholder="Dr. Jane Doe"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-small font-medium text-foreground">
                Department
              </span>
              <Input
                required
                value={values.department}
                onChange={(e) => update("department", e.target.value)}
                placeholder="Cardiology"
              />
            </label>

            <div className="grid grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-small font-medium text-foreground">
                  Date
                </span>
                <Input
                  required
                  type="date"
                  value={values.date}
                  onChange={(e) => update("date", e.target.value)}
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-small font-medium text-foreground">
                  Time
                </span>
                <Input
                  required
                  type="time"
                  value={values.time}
                  onChange={(e) => update("time", e.target.value)}
                />
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-small font-medium text-foreground">
                Reason
              </span>
              <Input
                required
                value={values.reason}
                onChange={(e) => update("reason", e.target.value)}
                placeholder="Routine checkup"
              />
            </label>

            <div className="flex items-center justify-end gap-3 border-t border-border pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Schedule
              </Button>
            </div>
          </form>
        </Modal>
      ) : null}
    </div>
  );
}
