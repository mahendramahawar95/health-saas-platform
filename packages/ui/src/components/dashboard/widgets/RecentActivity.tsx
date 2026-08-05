import type { LucideIcon } from "lucide-react";
import { CalendarPlus, RefreshCw, CreditCard, XCircle } from "lucide-react";

type ActivityType = "booked" | "updated" | "payment" | "cancelled";

export type ActivityItem = {
  id: string;
  type: ActivityType;
  message: string;
  time: string;
};

const ACTIVITY_META: Record<
  ActivityType,
  { icon: LucideIcon; className: string }
> = {
  booked: { icon: CalendarPlus, className: "bg-success/15 text-success" },
  updated: { icon: RefreshCw, className: "bg-primary/10 text-primary" },
  payment: { icon: CreditCard, className: "bg-accent/15 text-accent" },
  cancelled: { icon: XCircle, className: "bg-danger/10 text-danger" },
};

const SAMPLE_ACTIVITY: ActivityItem[] = [
  {
    id: "act-1",
    type: "booked",
    message: "Ava Whitman booked an appointment with Dr. Reyes",
    time: "2 min ago",
  },
  {
    id: "act-2",
    type: "updated",
    message: "Dr. Okafor updated their schedule for Friday",
    time: "38 min ago",
  },
  {
    id: "act-3",
    type: "payment",
    message: "Payment completed for invoice #4821",
    time: "1 hour ago",
  },
  {
    id: "act-4",
    type: "cancelled",
    message: "Grace Kim's appointment was cancelled",
    time: "3 hours ago",
  },
  {
    id: "act-5",
    type: "booked",
    message: "Marcus Lee booked a general checkup",
    time: "Yesterday",
  },
];

type Props = {
  items?: ActivityItem[];
};

export default function RecentActivity({ items = SAMPLE_ACTIVITY }: Props) {
  return (
    <div className="animate-fade-up rounded-card border border-border bg-surface p-5 shadow-card-soft">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-bold">Recent Activity</h2>
        <button className="text-sm font-semibold text-primary">View all</button>
      </div>

      <div className="flex flex-col">
        {items.map((item, i) => {
          const { icon: Icon, className } = ACTIVITY_META[item.type];
          const isLast = i === items.length - 1;

          return (
            <div
              key={item.id}
              style={{ "--stagger-index": i } as React.CSSProperties}
              className="stagger-item relative flex gap-3 pb-5 last:pb-0"
            >
              {!isLast && (
                <span className="absolute start-4 top-9 bottom-0 w-px bg-border" />
              )}

              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${className}`}
              >
                <Icon size={15} />
              </div>

              <div className="min-w-0 flex-1 pt-1">
                <p className="text-sm text-foreground">{item.message}</p>
                <span className="text-xs text-muted">{item.time}</span>
              </div>
            </div>
          );
        })}
      </div>

      {items.length === 0 && (
        <p className="py-6 text-center text-sm text-muted">
          No recent activity.
        </p>
      )}
    </div>
  );
}
