import { CalendarCheck, Users, TrendingUp, Clock } from "lucide-react";
import {
  StatCard,
  AppointmentRow,
  VitalsCard,
  AppointmentAnalyticsCard,
  RevenueChartCard,
  CalendarWidget,
  RecentActivity,
  type AppointmentStatus,
} from "@repo/ui";

const STATS = [
  {
    icon: CalendarCheck,
    label: "Today's Appointments",
    value: "24",
    delta: "+12%",
  },
  { icon: Users, label: "Total Patients", value: "1,284", delta: "+4.3%" },
  { icon: TrendingUp, label: "Revenue (MTD)", value: "$48.2k", delta: "+8.1%" },
  { icon: Clock, label: "Avg. Wait Time", value: "9 min", delta: "-2 min" },
];

const APPOINTMENTS: {
  name: string;
  reason: string;
  time: string;
  doctor: string;
  status: AppointmentStatus;
}[] = [
  {
    name: "Ava Whitman",
    reason: "Cardiology follow-up",
    time: "9:00 AM",
    doctor: "Dr. Reyes",
    status: "Confirmed",
  },
  {
    name: "Marcus Lee",
    reason: "General checkup",
    time: "9:45 AM",
    doctor: "Dr. Okafor",
    status: "Confirmed",
  },
  {
    name: "Priya Nair",
    reason: "Dermatology consult",
    time: "10:15 AM",
    doctor: "Dr. Chen",
    status: "Waiting",
  },
  {
    name: "Tom Alvarez",
    reason: "Physiotherapy",
    time: "11:00 AM",
    doctor: "Dr. Reyes",
    status: "Confirmed",
  },
  {
    name: "Grace Kim",
    reason: "Pediatric visit",
    time: "11:30 AM",
    doctor: "Dr. Okafor",
    status: "Cancelled",
  },
];

const DOCTORS = [
  { name: "Dr. Elena Reyes", initials: "ER", load: 82 },
  { name: "Dr. Daniel Okafor", initials: "DO", load: 64 },
  { name: "Dr. Mei Chen", initials: "MC", load: 45 },
];

export default function DashboardPage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <StatCard key={s.label} {...s} index={i} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AppointmentAnalyticsCard />
        <RevenueChartCard />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-card border border-border bg-surface p-5 shadow-card-soft lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-bold">Today&apos;s Appointments</h2>
            <button className="text-sm font-semibold text-primary">
              View all
            </button>
          </div>
          <div className="flex flex-col">
            {APPOINTMENTS.map((a, i) => (
              <AppointmentRow
                key={a.name}
                {...a}
                index={i}
                isLast={i === APPOINTMENTS.length - 1}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <VitalsCard doctors={DOCTORS} />
          <CalendarWidget />
        </div>
      </div>

      <RecentActivity />
    </>
  );
}
