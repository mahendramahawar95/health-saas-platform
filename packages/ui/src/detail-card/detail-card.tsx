import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "../lib/cn";

interface DetailCardProps {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
}

export function DetailCard({
  title,
  icon: Icon,
  children,
  className,
}: DetailCardProps) {
  return (
    <section
      className={cn(
        "rounded-lg border border-border bg-surface p-lg shadow-card",
        className,
      )}
    >
      <div className="mb-md flex items-center gap-xs">
        {Icon && <Icon className="size-icon text-primary" aria-hidden="true" />}
        <h3 className="text-h5 font-semibold text-foreground">{title}</h3>
      </div>
      <div className="text-body text-content-secondary">{children}</div>
    </section>
  );
}
