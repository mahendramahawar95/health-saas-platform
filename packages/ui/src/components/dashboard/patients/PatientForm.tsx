"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@repo/ui";
import { Input } from "@repo/ui";
import {
  BLOOD_GROUPS,
  type Patient,
  type PatientFormValues,
} from "../types/patient";

const EMPTY_FORM: PatientFormValues = {
  name: "",
  age: 0,
  gender: "female",
  bloodGroup: BLOOD_GROUPS[0],
  phone: "",
  email: "",
  address: "",
  status: "active",
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

const selectClasses =
  "w-full rounded-input border border-border bg-background px-4 py-2.5 text-small text-foreground outline-none focus:border-primary";

export function PatientForm({
  mode,
  initialValues,
  onSubmit,
  onCancel,
}: {
  mode: "add" | "edit";
  initialValues?: Patient;
  onSubmit: (values: PatientFormValues) => Promise<void> | void;
  onCancel: () => void;
}) {
  const [values, setValues] = useState<PatientFormValues>(
    initialValues ?? EMPTY_FORM,
  );
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof PatientFormValues>(
    key: K,
    value: PatientFormValues[K],
  ) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    // TODO: replace with a real API call, e.g.
    // await fetch(mode === "add" ? "/api/patients" : `/api/patients/${initialValues?.id}`, {
    //   method: mode === "add" ? "POST" : "PATCH",
    //   body: JSON.stringify(values),
    // });
    await onSubmit(values);
    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Full Name">
          <Input
            required
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Doe"
          />
        </Field>

        <Field label="Age">
          <Input
            required
            type="number"
            min={0}
            value={values.age}
            onChange={(e) => update("age", Number(e.target.value))}
          />
        </Field>

        <Field label="Gender">
          <select
            value={values.gender}
            onChange={(e) =>
              update("gender", e.target.value as PatientFormValues["gender"])
            }
            className={selectClasses}
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </Field>

        <Field label="Blood Group">
          <select
            value={values.bloodGroup}
            onChange={(e) => update("bloodGroup", e.target.value)}
            className={selectClasses}
          >
            {BLOOD_GROUPS.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Phone">
          <Input
            required
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+91 98765 43210"
          />
        </Field>

        <Field label="Email">
          <Input
            required
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="jane.doe@example.com"
          />
        </Field>

        <Field label="Status">
          <select
            value={values.status}
            onChange={(e) =>
              update("status", e.target.value as PatientFormValues["status"])
            }
            className={selectClasses}
          >
            <option value="active">Active</option>
            <option value="critical">Critical</option>
            <option value="inactive">Inactive</option>
          </select>
        </Field>

        <Field label="Address">
          <Input
            required
            value={values.address}
            onChange={(e) => update("address", e.target.value)}
            placeholder="Street, city"
          />
        </Field>
      </div>

      <div className="flex items-center justify-end gap-3 border-t border-border pt-5">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary" disabled={submitting}>
          {submitting
            ? "Saving..."
            : mode === "add"
              ? "Add Patient"
              : "Save Changes"}
        </Button>
      </div>
    </form>
  );
}
