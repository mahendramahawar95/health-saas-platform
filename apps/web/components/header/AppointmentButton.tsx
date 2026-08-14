import Link from "next/link";
import { Button } from "@repo/ui";

export default function AppointmentButton() {
  return (
    <Button
      variant={"primary"}
      size="md"
      className="text-background rounded-sm"
    >
      <Link href="/login">Login</Link>
    </Button>
  );
}
