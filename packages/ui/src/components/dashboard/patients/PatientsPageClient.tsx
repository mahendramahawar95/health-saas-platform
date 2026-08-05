"use client";

import { useState } from "react";
import { Button } from "@repo/ui";
import type { Patient, PatientFormValues } from "../types/patient";
import { PatientsTable } from "./PatientsTable";
import { PatientForm } from "./PatientForm";
import { Modal } from "@repo/ui";

type ModalState =
  | { open: false }
  | { open: true; mode: "add" }
  | { open: true; mode: "edit"; patient: Patient };

function makeId() {
  return `pat_${Math.random().toString(36).slice(2, 9)}`;
}

function slugify(name: string) {
  return name.toLowerCase().trim().replace(/\s+/g, "-");
}

export function PatientsPageClient({
  initialPatients,
}: {
  initialPatients: Patient[];
}) {
  const [patients, setPatients] = useState<Patient[]>(initialPatients);
  const [modal, setModal] = useState<ModalState>({ open: false });

  function handleAddSubmit(values: PatientFormValues) {
    const newPatient: Patient = {
      ...values,
      id: makeId(),
      slug: slugify(values.name),
      registeredOn: new Date().toISOString(),
    };
    setPatients((prev) => [newPatient, ...prev]);
    setModal({ open: false });
  }

  function handleEditSubmit(id: string, values: PatientFormValues) {
    setPatients((prev) =>
      prev.map((patient) =>
        patient.id === id ? { ...patient, ...values } : patient,
      ),
    );
    setModal({ open: false });
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-h4 font-bold text-foreground">All Patients</h1>
          <p className="text-small text-muted">
            {patients.length} patients on record
          </p>
        </div>
        <Button
          variant="primary"
          onClick={() => setModal({ open: true, mode: "add" })}
        >
          + Add Patient
        </Button>
      </div>

      <PatientsTable
        patients={patients}
        onEdit={(patient) => setModal({ open: true, mode: "edit", patient })}
      />

      {modal.open && modal.mode === "add" ? (
        <Modal
          open
          onClose={() => setModal({ open: false })}
          title="Add Patient"
          description="Fill in the details below to register a new patient."
          size="lg"
        >
          <PatientForm
            mode="add"
            onSubmit={handleAddSubmit}
            onCancel={() => setModal({ open: false })}
          />
        </Modal>
      ) : null}

      {modal.open && modal.mode === "edit" ? (
        <Modal
          open
          onClose={() => setModal({ open: false })}
          title="Edit Patient"
          description={`Update ${modal.patient.name}'s profile information.`}
          size="lg"
        >
          <PatientForm
            mode="edit"
            initialValues={modal.patient}
            onSubmit={(values) => handleEditSubmit(modal.patient.id, values)}
            onCancel={() => setModal({ open: false })}
          />
        </Modal>
      ) : null}
    </div>
  );
}
