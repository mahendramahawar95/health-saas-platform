import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  CalendarCheck,
  Stethoscope,
  Users,
  CalendarDays,
  Star,
  CreditCard,
  BarChart3,
  Settings,
} from "lucide-react";

export type NavSubItem = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  children?: NavSubItem[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  {
    label: "Appointments",
    href: "/appointments",
    icon: CalendarCheck,
    children: [
      { label: "All", href: "/appointments" },
      { label: "Upcoming", href: "/appointments/upcoming" },
      { label: "Completed", href: "/appointments/completed" },
      { label: "Cancelled", href: "/appointments/cancelled" },
    ],
  },
  { label: "Doctors", href: "/doctors", icon: Stethoscope },
  { label: "Patients", href: "/patients", icon: Users },
  { label: "Calendar", href: "/calendar", icon: CalendarDays },
  { label: "Reviews", href: "/reviews", icon: Star },
  { label: "Payments", href: "/payments", icon: CreditCard },
  { label: "Reports", href: "/reports", icon: BarChart3 },
  { label: "Settings", href: "/settings", icon: Settings },
];
