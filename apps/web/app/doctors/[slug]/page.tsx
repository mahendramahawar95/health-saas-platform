import { notFound } from "next/navigation";
// import { DoctorDetailPage } from "@repo/ui";
import { getDoctorBySlug } from "@/src/data/doctors-data";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  // return <DoctorDetailPage doctor={doctor} />;
  return "hii";

}
