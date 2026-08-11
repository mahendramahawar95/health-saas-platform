import { notFound } from "next/navigation";
import { getDoctorByIdOrSlug } from "@repo/ui";
import { DoctorDetailsView } from "@repo/ui";

export default async function DoctorDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const patient = getDoctorByIdOrSlug(id);

  if (!patient) {
    notFound();
  }

  return <DoctorDetailsView initialDoctor={patient} />;
}
