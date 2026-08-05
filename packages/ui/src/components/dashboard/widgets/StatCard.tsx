import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label: string;
  value: string;
  delta: string;
  index?: number;
};

export default function StatCard({
  icon: Icon,
  label,
  value,
  delta,
  index = 0,
}: Props) {
  const positive = !delta.startsWith("-");

  return (
    <div
      style={{ "--stagger-index": index } as React.CSSProperties}
      className="stagger-item hover-lift rounded-card border border-border bg-surface p-5 shadow-card-soft"
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex h-[38px] w-[38px] items-center justify-center rounded-md bg-secondary">
          <Icon size={18} className="text-primary" />
        </div>
        <span
          className={`text-xs font-semibold ${positive ? "text-success" : "text-danger"}`}
        >
          {delta}
        </span>
      </div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-muted">{label}</div>
    </div>
  );
}
