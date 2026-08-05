"use client";

import { useState } from "react";
import Link from "next/link";
import type {
  Appointment,
  MedicalRecord,
  Patient,
  PatientFormValues,
} from "../types/patient";
import { PatientOverview } from "./PatientOverview";
import { PatientForm } from "./PatientForm";
import { MedicalHistoryTab } from "./MedicalHistoryTab";
import { AppointmentsTab } from "../appointments/AppointmentsTab";
import { Modal } from "@repo/ui";

type Tab = "overview" | "history" | "appointments";

const TABS: { id: Tab; label: string }[] = [
  { id: "overview", label: "Patient Details" },
  { id: "history", label: "Medical History" },
  { id: "appointments", label: "Appointments" },
];

export function PatientDetailsView({
  initialPatient,
  initialRecords,
  initialAppointments,
}: {
  initialPatient: Patient;
  initialRecords: MedicalRecord[];
  initialAppointments: Appointment[];
}) {
  const [patient, setPatient] = useState<Patient>(initialPatient);
  const [tab, setTab] = useState<Tab>("overview");
  const [editing, setEditing] = useState(false);

  function handleEditSubmit(values: PatientFormValues) {
    setPatient((prev) => ({ ...prev, ...values }));
    setEditing(false);
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <Link
        href="/patients"
        className="w-fit text-small font-medium text-muted hover:text-foreground"
      >
        ← Back to All Patients
      </Link>

      <div className="flex flex-wrap gap-2 border-b border-border">
        {TABS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTab(item.id)}
            className={`-mb-px border-b-2 px-1 pb-3 text-small font-medium transition-colors ${
              tab === item.id
                ? "border-primary text-foreground"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {tab === "overview" ? (
        <PatientOverview patient={patient} onEdit={() => setEditing(true)} />
      ) : null}

      {tab === "history" ? (
        <MedicalHistoryTab initialRecords={initialRecords} />
      ) : null}

      {tab === "appointments" ? (
        <AppointmentsTab initialAppointments={initialAppointments} />
      ) : null}

      {editing ? (
        <Modal
          open
          onClose={() => setEditing(false)}
          title="Edit Patient"
          description={`Update ${patient.name}'s profile information.`}
          size="lg"
        >
          <PatientForm
            mode="edit"
            initialValues={patient}
            onSubmit={handleEditSubmit}
            onCancel={() => setEditing(false)}
          />
        </Modal>
      ) : null}
    </div>
  );
}
