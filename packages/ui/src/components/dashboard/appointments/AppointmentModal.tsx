"use client";

import { Modal } from "@repo/ui";
import AppointmentForm, { type AppointmentFormValues } from "./AppointmentForm";
import type { AppointmentTableRow } from "./AppointmentsTable";

type Props = {
  open: boolean;
  mode: "create" | "edit";
  initialValues?: AppointmentTableRow;
  onClose: () => void;
  onSubmit: (values: AppointmentFormValues) => void;
};

export default function AppointmentModal({
  open,
  mode,
  initialValues,
  onClose,
  onSubmit,
}: Props) {
  const isEdit = mode === "edit";

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={isEdit ? "Edit Appointment" : "Create Appointment"}
      description={
        isEdit
          ? "Update the details for this appointment."
          : "Schedule a new appointment for a patient."
      }
    >
      <AppointmentForm
        initialValues={initialValues}
        submitLabel={isEdit ? "Save Changes" : "Create Appointment"}
        onSubmit={onSubmit}
        onCancel={onClose}
      />
    </Modal>
  );
}
