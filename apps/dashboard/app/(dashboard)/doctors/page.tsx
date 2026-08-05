import { DoctorsPageClient } from "@repo/ui";
import { doctors } from "@repo/ui";

export const metadata = {
  title: "All Doctors",
};

export default function DoctorsPage() {
  return <DoctorsPageClient initialDoctors={doctors} />;
}
