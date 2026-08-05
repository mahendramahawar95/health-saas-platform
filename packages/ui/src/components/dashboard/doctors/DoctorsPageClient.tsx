"use client";

import { useState } from "react";
import { DoctorsGrid } from "./DoctorsGrid";
import { DoctorForm } from "./DoctorForm";
import { Doctor, DoctorFormValues } from "../types/doctor";
import { Modal } from "@repo/ui";

type ModalState =
  | { open: false }
  | { open: true; mode: "add" }
  | { open: true; mode: "edit"; doctor: Doctor };

function makeId() {
  return `doc_${Math.random().toString(36).slice(2, 9)}`;
}

export function DoctorsPageClient({
  initialDoctors,
}: {
  initialDoctors: Doctor[];
}) {
  const [doctors, setDoctors] = useState<Doctor[]>(initialDoctors);
  const [modal, setModal] = useState<ModalState>({ open: false });

  function handleAddSubmit(values: DoctorFormValues) {
    const newDoctor: Doctor = {
      ...values,
      id: makeId(),
      joinedOn: new Date().toISOString(),
      slug: "",
    };
    setDoctors((prev) => [newDoctor, ...prev]);
    setModal({ open: false });
  }

  function handleEditSubmit(id: string, values: DoctorFormValues) {
    setDoctors((prev) =>
      prev.map((doctor) =>
        doctor.id === id ? { ...doctor, ...values } : doctor,
      ),
    );
    setModal({ open: false });
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-h4 font-bold text-foreground">All Doctors</h1>
          <p className="text-small text-muted">
            {doctors.length} doctors on record
          </p>
        </div>
        <button
          type="button"
          onClick={() => setModal({ open: true, mode: "add" })}
          className="ripple-host inline-flex w-fit items-center gap-2 rounded-button bg-primary px-4 py-2.5 text-small font-semibold text-background transition-opacity hover:opacity-90"
        >
          + Add Doctor
        </button>
      </div>

      <DoctorsGrid
        doctors={doctors}
        onEdit={(doctor) => setModal({ open: true, mode: "edit", doctor })}
      />

      {modal.open && modal.mode === "add" ? (
        <Modal
          open
          title="Add Doctor"
          description="Fill in the details below to add a new doctor to the roster."
          onClose={() => setModal({ open: false })}
        >
          <DoctorForm
            mode="add"
            onSubmit={handleAddSubmit}
            onCancel={() => setModal({ open: false })}
          />
        </Modal>
      ) : null}

      {modal.open && modal.mode === "edit" ? (
        <Modal
          open
          title="Edit Doctor"
          description={`Update ${modal.doctor.name}'s profile information.`}
          onClose={() => setModal({ open: false })}
        >
          <DoctorForm
            mode="edit"
            initialValues={modal.doctor}
            onSubmit={(values) => handleEditSubmit(modal.doctor.id, values)}
            onCancel={() => setModal({ open: false })}
          />
        </Modal>
      ) : null}
    </div>
  );
}
