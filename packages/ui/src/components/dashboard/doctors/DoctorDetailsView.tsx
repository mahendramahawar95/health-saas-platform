"use client";

import { useState } from "react";
import type { Doctor, DoctorFormValues } from "../types/doctor";
import { DoctorDetails } from "./DoctorDetails";
import { DoctorForm } from "./DoctorForm";
import { Modal } from "@repo/ui";

export function DoctorDetailsView({
  initialDoctor,
}: {
  initialDoctor: Doctor;
}) {
  const [doctor, setDoctor] = useState<Doctor>(initialDoctor);
  const [editing, setEditing] = useState(false);

  function handleEditSubmit(values: DoctorFormValues) {
    setDoctor((prev) => ({ ...prev, ...values }));
    setEditing(false);
  }

  return (
    <div className="p-6">
      <DoctorDetails doctor={doctor} onEdit={() => setEditing(true)} />

      {editing ? (
        <Modal
          open
          size="lg"
          title="Edit Doctor"
          description={`Update ${doctor.name}'s profile information.`}
          onClose={() => setEditing(false)}
        >
          <DoctorForm
            mode="edit"
            initialValues={doctor}
            onSubmit={handleEditSubmit}
            onCancel={() => setEditing(false)}
          />
        </Modal>
      ) : null}
    </div>
  );
}
