import type { LucideIcon } from "lucide-react";
import {
  Settings2,
  Building2,
  Bell,
  Mail,
  CreditCard,
  Palette,
  Users,
  ShieldCheck,
} from "lucide-react";

export type SettingsTabKey =
  | "general"
  | "clinic"
  | "notifications"
  | "email"
  | "payments"
  | "appearance"
  | "users"
  | "roles";

export type SettingsTab = {
  key: SettingsTabKey;
  label: string;
  icon: LucideIcon;
};

export const SETTINGS_TABS: SettingsTab[] = [
  { key: "general", label: "General", icon: Settings2 },
  { key: "clinic", label: "Clinic", icon: Building2 },
  { key: "notifications", label: "Notifications", icon: Bell },
  { key: "email", label: "Email", icon: Mail },
  { key: "payments", label: "Payments", icon: CreditCard },
  { key: "appearance", label: "Appearance", icon: Palette },
  { key: "users", label: "Users", icon: Users },
  { key: "roles", label: "Roles", icon: ShieldCheck },
];
