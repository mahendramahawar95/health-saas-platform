"use client";

import { useEffect, useState } from "react";

/**
 * Reads the resolved text direction ("ltr" | "rtl") from the nearest
 * dir attribute (defaults to <html>) and stays in sync if it changes
 * at runtime (e.g. a locale switcher toggling document.dir).
 */
export function useDirection(): "ltr" | "rtl" {
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr");

  useEffect(() => {
    const root = document.documentElement;

    const read = () => setDir(root.dir === "rtl" ? "rtl" : "ltr");
    read();

    const observer = new MutationObserver(read);
    observer.observe(root, { attributes: true, attributeFilter: ["dir"] });

    return () => observer.disconnect();
  }, []);

  return dir;
}
