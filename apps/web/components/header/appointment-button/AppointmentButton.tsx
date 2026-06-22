import Link from "next/link";
import styles from "./AppointmentButton.module.css";

export default function AppointmentButton() {
  return (
    <Link href="/appointment" className={styles.ctaButton}>
      Book Appointment
    </Link>
  );
}
