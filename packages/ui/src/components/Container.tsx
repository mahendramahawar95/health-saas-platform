import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div
      className="
      mx-auto
      max-w-[1440px]
      px-4
      md:px-6
      lg:px-8
    "
    >
      {children}
    </div>
  );
}
