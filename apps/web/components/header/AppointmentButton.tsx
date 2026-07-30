import Link from "next/link";
import { Button } from "@repo/ui";

export default function AppointmentButton() {
  return (
    <Button variant={"primary"} className="text-background">
      <Link href="/appointment">Book Appointment</Link>
    </Button>
  );
}
