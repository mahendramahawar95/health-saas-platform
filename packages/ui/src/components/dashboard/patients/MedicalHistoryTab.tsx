"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@repo/ui";
import { Input } from "@repo/ui";
import { Modal } from "@repo/ui";
import type {
  MedicalRecord,
  MedicalRecordFormValues,
  RecordStatus,
} from "../types/patient";

const STATUS_CLASSES: Record<RecordStatus, string> = {
  ongoing: "bg-warning/15 text-warning",
  resolved: "bg-success/10 text-success",
};

function makeId() {
  return `rec_${Math.random().toString(36).slice(2, 9)}`;
}

const EMPTY_FORM: MedicalRecordFormValues = {
  condition: "",
  diagnosedOn: new Date().toISOString().slice(0, 10),
  doctor: "",
  notes: "",
  status: "ongoing",
};

export function MedicalHistoryTab({
  initialRecords,
}: {
  initialRecords: MedicalRecord[];
}) {
  const [records, setRecords] = useState<MedicalRecord[]>(initialRecords);
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<MedicalRecordFormValues>(EMPTY_FORM);

  function update<K extends keyof MedicalRecordFormValues>(
    key: K,
    value: MedicalRecordFormValues[K],
  ) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setRecords((prev) => [{ ...values, id: makeId() }, ...prev]);
    setValues(EMPTY_FORM);
    setOpen(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-body font-semibold text-foreground">
          Medical History
        </h3>
        <Button variant="primary" size="sm" onClick={() => setOpen(true)}>
          + Add Record
        </Button>
      </div>

      {records.length === 0 ? (
        <div className="rounded-card border border-dashed border-border bg-surface py-12 text-center">
          <p className="text-small text-muted">
            No medical records on file yet.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {records.map((record) => (
            <div
              key={record.id}
              className="rounded-card border border-border bg-surface p-5 shadow-card-soft"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-foreground">
                    {record.condition}
                  </p>
                  <p className="text-xs text-muted">
                    Diagnosed{" "}
                    {new Date(record.diagnosedOn).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    · {record.doctor}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium capitalize ${STATUS_CLASSES[record.status]}`}
                >
                  {record.status}
                </span>
              </div>
              <p className="mt-3 text-small text-muted">{record.notes}</p>
            </div>
          ))}
        </div>
      )}

      {open ? (
        <Modal
          open
          onClose={() => setOpen(false)}
          title="Add Medical Record"
          size="md"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-small font-medium text-foreground">
                Condition
              </span>
              <Input
                required
                value={values.condition}
                onChange={(e) => update("condition", e.target.value)}
                placeholder="e.g. Hypertension"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-small font-medium text-foreground">
                Diagnosed On
              </span>
              <Input
                required
                type="date"
                value={values.diagnosedOn}
                onChange={(e) => update("diagnosedOn", e.target.value)}
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-small font-medium text-foreground">
                Doctor
              </span>
              <Input
                required
                value={values.doctor}
                onChange={(e) => update("doctor", e.target.value)}
                placeholder="Dr. Jane Doe"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-small font-medium text-foreground">
                Status
              </span>
              <select
                value={values.status}
                onChange={(e) =>
                  update("status", e.target.value as RecordStatus)
                }
                className="w-full rounded-input border border-border bg-background px-4 py-2.5 text-small text-foreground outline-none focus:border-primary"
              >
                <option value="ongoing">Ongoing</option>
                <option value="resolved">Resolved</option>
              </select>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-small font-medium text-foreground">
                Notes
              </span>
              <textarea
                rows={3}
                value={values.notes}
                onChange={(e) => update("notes", e.target.value)}
                placeholder="Treatment notes, prescriptions, follow-up plan"
                className="w-full resize-none rounded-input border border-border bg-background px-4 py-2.5 text-small text-foreground outline-none focus:border-primary"
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
                Add Record
              </Button>
            </div>
          </form>
        </Modal>
      ) : null}
    </div>
  );
}
