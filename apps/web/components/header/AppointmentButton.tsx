import Link from "next/link";
import { Button } from "@repo/ui";

export default function AppointmentButton() {
  return (
    <Button
      variant={"primary"}
      size="sm"
      className="text-background rounded-sm"
    >
      <Link href="/appointment">Contact us</Link>
    </Button>
  );
}
