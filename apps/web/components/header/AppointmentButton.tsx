import Link from "next/link";
import { Button } from "@repo/ui";

export default function AppointmentButton() {
  return (
    <Button className="hidden xl:flex">
      <Link href="/appointment">Book Appointment</Link>
    </Button>
  );
}
