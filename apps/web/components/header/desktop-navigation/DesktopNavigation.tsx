import Link from "next/link";
import styles from "./DesktopNavigation.module.css";
import { navigation } from "../navigation";

export default function DesktopNavigation() {
  return (
    <ul className={styles.navigation}>
      {navigation.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}
