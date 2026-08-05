import { notFound } from "next/navigation";
import {
  appointmentsByPatient,
  getPatientByIdOrSlug,
  medicalHistoryByPatient,
} from "@repo/ui";
import { PatientDetailsView } from "@repo/ui";

export default async function PatientDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const patient = getPatientByIdOrSlug(id);

  if (!patient) {
    notFound();
  }

  return (
    <PatientDetailsView
      initialPatient={patient}
      initialRecords={medicalHistoryByPatient[patient.id] ?? []}
      initialAppointments={appointmentsByPatient[patient.id] ?? []}
    />
  );
}
