import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "../lib/cn";

interface SidebarCardProps {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
}

export function SidebarCard({
  title,
  icon: Icon,
  children,
  className,
}: SidebarCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-md shadow-sm",
        className,
      )}
    >
      <div className="mb-sm flex items-center gap-xs">
        {Icon && <Icon className="size-icon text-primary" aria-hidden="true" />}
        <h4 className="text-small font-semibold uppercase tracking-wide text-content-secondary">
          {title}
        </h4>
      </div>
      {children}
    </div>
  );
}
