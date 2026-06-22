"use client";

import Link from "next/link";
import { useState } from "react";

import styles from "./MobileMenu.module.css";
import { navigation } from "../navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={styles.trigger}
        onClick={() => setOpen(true)}
        aria-label="Open Menu"
      >
        ☰
      </button>

      {open && (
        <>
          <div className={styles.overlay} onClick={() => setOpen(false)} />

          <aside className={styles.drawer}>
            <div className={styles.header}>
              <h3>Menu</h3>

              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <ul className={styles.navigation}>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>

            <Link href="/appointment" className={styles.cta}>
              Book Appointment
            </Link>
          </aside>
        </>
      )}
    </>
  );
}
