import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Vitalis",
};

export default function RootLayout({
  children,
  dir = "ltr",
}: {
  children: React.ReactNode;
  dir?: "ltr" | "rtl";
}) {
  return (
    <html lang={dir === "rtl" ? "ar" : "en"} dir={dir}>
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
