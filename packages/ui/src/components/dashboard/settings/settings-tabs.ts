import type { LucideIcon } from "lucide-react";
import { Settings2, Building2, Bell } from "lucide-react";

export type SettingsTabKey = "general" | "clinic" | "notifications";

export type SettingsTab = {
  key: SettingsTabKey;
  label: string;
  icon: LucideIcon;
};

export const SETTINGS_TABS: SettingsTab[] = [
  { key: "general", label: "General", icon: Settings2 },
  { key: "clinic", label: "Clinic", icon: Building2 },
  { key: "notifications", label: "Notifications", icon: Bell },
];
