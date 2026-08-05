"use client";

import { useState } from "react";
import { User, Stethoscope, Clock } from "lucide-react";
import { Input } from "../../../input";
import type { AppointmentTableRow } from "./AppointmentsTable";
import type { AppointmentStatus } from "./appointment-status";

const STATUS_OPTIONS: AppointmentStatus[] = [
  "Confirmed",
  "Waiting",
  "Completed",
  "Cancelled",
];

export type AppointmentFormValues = {
  patient: string;
  doctor: string;
  time: string;
  status: AppointmentStatus;
};

type Props = {
  initialValues?: AppointmentTableRow;
  submitLabel: string;
  onSubmit: (values: AppointmentFormValues) => void;
  onCancel: () => void;
};

const EMPTY_VALUES: AppointmentFormValues = {
  patient: "",
  doctor: "",
  time: "",
  status: "Confirmed",
};

export default function AppointmentForm({
  initialValues,
  submitLabel,
  onSubmit,
  onCancel,
}: Props) {
  const [values, setValues] = useState<AppointmentFormValues>(
    initialValues
      ? {
          patient: initialValues.patient,
          doctor: initialValues.doctor,
          time: initialValues.time,
          status: initialValues.status,
        }
      : EMPTY_VALUES,
  );

  function handleChange(field: keyof AppointmentFormValues) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        label="Patient"
        leftIcon={<User size={16} />}
        placeholder="Patient name"
        value={values.patient}
        onChange={handleChange("patient")}
        required
      />

      <Input
        label="Doctor"
        leftIcon={<Stethoscope size={16} />}
        placeholder="Dr. Reyes"
        value={values.doctor}
        onChange={handleChange("doctor")}
        required
      />

      <Input
        label="Time"
        leftIcon={<Clock size={16} />}
        placeholder="Today · 9:00 AM"
        value={values.time}
        onChange={handleChange("time")}
        required
      />

      <div>
        <label
          htmlFor="appointment-status"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Status
        </label>
        <select
          id="appointment-status"
          value={values.status}
          onChange={handleChange("status")}
          className="h-10 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          {STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-2 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-button border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-button bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
