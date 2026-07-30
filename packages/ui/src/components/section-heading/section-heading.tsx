import { Badge } from "../badge/badge";
import { cn } from "../../lib/cn";
import { HTMLAttributes, ReactNode } from "react";

export interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  badgeText: string;
  badgeClass?: string;
  heading: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({
  badgeText,
  badgeClass,
  heading,
  description,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-xs mb-10",
        align === "center" && "items-center text-center",
        className,
      )}
      {...props}
    >
      <Badge className={badgeClass}>{badgeText}</Badge>

      <h2 className="text-h2 font-bold tracking-tight text-primary uppercase">
        {heading}
      </h2>

      {description && (
        <p className="max-w-[60ch] text-body text-content-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
