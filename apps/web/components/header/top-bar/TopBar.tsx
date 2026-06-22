import Link from "next/link";
import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className="container mx-auto px-4">
        <div className={styles.flexbetween}>
          <div className={styles.left}>
            <a href="tel:+18001234567">+1 (800) 123 4567</a>

            <a href="mailto:info@medicare.com">info@medicare.com</a>

            <span>Mon - Sat : 8:00 AM - 8:00 PM</span>
          </div>

          <div className={styles.right}>
            <Link href="/">Facebook</Link>
            <Link href="/">Twitter</Link>
            <Link href="/">LinkedIn</Link>
            <Link href="/">Instagram</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
