"use client";

import { useState, type FormEvent } from "react";
import {
  DEPARTMENTS,
  WEEKDAYS,
  type Doctor,
  type DoctorFormValues,
} from "../types/doctor";

const EMPTY_FORM: DoctorFormValues = {
  name: "",
  specialty: "",
  department: DEPARTMENTS[0],
  qualification: "",
  email: "",
  phone: "",
  gender: "female",
  experienceYears: 0,
  consultationFee: 0,
  status: "active",
  availableDays: [],
  avatarUrl: "",
  bio: "",
};

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-small font-medium text-foreground">{label}</span>
      {children}
    </label>
  );
}

const inputClasses =
  "w-full rounded-input border border-border bg-background px-4 py-2.5 text-small text-foreground outline-none placeholder:text-muted focus:border-primary";

export function DoctorForm({
  mode,
  initialValues,
  onSubmit,
  onCancel,
}: {
  mode: "add" | "edit";
  initialValues?: Doctor;
  onSubmit: (values: DoctorFormValues) => Promise<void> | void;
  onCancel: () => void;
}) {
  const [values, setValues] = useState<DoctorFormValues>(
    initialValues ?? EMPTY_FORM,
  );
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof DoctorFormValues>(
    key: K,
    value: DoctorFormValues[K],
  ) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function toggleDay(day: string) {
    setValues((prev) => ({
      ...prev,
      availableDays: prev.availableDays.includes(day)
        ? prev.availableDays.filter((d) => d !== day)
        : [...prev.availableDays, day],
    }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    // TODO: replace with a real API call, e.g.
    // await fetch(mode === "add" ? "/api/doctors" : `/api/doctors/${initialValues?.id}`, {
    //   method: mode === "add" ? "POST" : "PATCH",
    //   body: JSON.stringify(values),
    // });
    await onSubmit(values);
    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <h3 className="mb-4 text-body font-semibold text-foreground">
          Basic Information
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Full Name">
            <input
              required
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Dr. Jane Doe"
              className={inputClasses}
            />
          </Field>

          <Field label="Specialty">
            <input
              required
              value={values.specialty}
              onChange={(e) => update("specialty", e.target.value)}
              placeholder="Cardiologist"
              className={inputClasses}
            />
          </Field>

          <Field label="Department">
            <select
              value={values.department}
              onChange={(e) => update("department", e.target.value)}
              className={inputClasses}
            >
              {DEPARTMENTS.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Qualification">
            <input
              required
              value={values.qualification}
              onChange={(e) => update("qualification", e.target.value)}
              placeholder="MBBS, MD"
              className={inputClasses}
            />
          </Field>

          <Field label="Gender">
            <select
              value={values.gender}
              onChange={(e) =>
                update("gender", e.target.value as DoctorFormValues["gender"])
              }
              className={inputClasses}
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </Field>

          <Field label="Status">
            <select
              value={values.status}
              onChange={(e) =>
                update("status", e.target.value as DoctorFormValues["status"])
              }
              className={inputClasses}
            >
              <option value="active">Active</option>
              <option value="on-leave">On Leave</option>
              <option value="inactive">Inactive</option>
            </select>
          </Field>
        </div>
      </div>

      <div className="border-t border-border pt-5">
        <h3 className="mb-4 text-body font-semibold text-foreground">
          Contact & Practice
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Email">
            <input
              required
              type="email"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="jane.doe@clinic.com"
              className={inputClasses}
            />
          </Field>

          <Field label="Phone">
            <input
              required
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+91 98765 43210"
              className={inputClasses}
            />
          </Field>

          <Field label="Experience (years)">
            <input
              required
              type="number"
              min={0}
              value={values.experienceYears}
              onChange={(e) =>
                update("experienceYears", Number(e.target.value))
              }
              className={inputClasses}
            />
          </Field>

          <Field label="Consultation Fee (₹)">
            <input
              required
              type="number"
              min={0}
              value={values.consultationFee}
              onChange={(e) =>
                update("consultationFee", Number(e.target.value))
              }
              className={inputClasses}
            />
          </Field>
        </div>

        <div className="mt-4">
          <span className="text-small font-medium text-foreground">
            Available Days
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            {WEEKDAYS.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => toggleDay(day)}
                className={`rounded-full px-3.5 py-1.5 text-small font-medium transition-colors ${
                  values.availableDays.includes(day)
                    ? "bg-primary text-background"
                    : "bg-secondary text-muted hover:text-foreground"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-5">
        <Field label="Short bio">
          <textarea
            rows={3}
            value={values.bio}
            onChange={(e) => update("bio", e.target.value)}
            placeholder="A short summary of the doctor's focus areas and experience"
            className={`${inputClasses} resize-none`}
          />
        </Field>
      </div>

      <div className="flex items-center justify-end gap-3 border-t border-border pt-5">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-button border border-border bg-surface px-4 py-2.5 text-small font-medium text-foreground hover:bg-secondary"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={submitting}
          className="rounded-button bg-primary px-5 py-2.5 text-small font-semibold text-background transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {submitting
            ? "Saving..."
            : mode === "add"
              ? "Add Doctor"
              : "Save Changes"}
        </button>
      </div>
    </form>
  );
}
