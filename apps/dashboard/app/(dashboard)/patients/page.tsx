import { patients } from "@repo/ui";
import { PatientsPageClient } from "@repo/ui";

export const metadata = {
  title: "All Patients",
};

export default function PatientsPage() {
  return <PatientsPageClient initialPatients={patients} />;
}
