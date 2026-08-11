export { default as DashboardShell } from "./layout/DashboardShell";
export { default as Sidebar } from "./layout/Sidebar";
export { default as NavItem } from "./layout/NavItem";
export { default as DashboardHeader } from "./layout/DashboardHeader";
export { NAV_ITEMS } from "./layout/nav-items";
export type { NavItem as NavItemType, NavSubItem } from "./layout/nav-items";

// ── Appointments ────────────────────────────────────────
export { default as AppointmentsTable } from "./appointments/AppointmentsTable";
export type { AppointmentTableRow } from "./appointments/AppointmentsTable";
export { default as AppointmentRow } from "./appointments/AppointmentRow";
export { default as AppointmentForm } from "./appointments/AppointmentForm";
export type { AppointmentFormValues } from "./appointments/AppointmentForm";
export { default as AppointmentModal } from "./appointments/AppointmentModal";
export { default as AppointmentAnalyticsCard } from "./appointments/AppointmentAnalyticsCard";
export { PatientDetailsView } from "./patients/PatientDetailsView";
export {
  patients,
  appointmentsByPatient,
  getPatientByIdOrSlug,
  medicalHistoryByPatient,
} from "./patients/patients";
export { PatientsPageClient } from "./patients/PatientsPageClient";
export {
  APPOINTMENT_STATUS_CLASSES,
  type AppointmentStatus,
} from "./appointments/appointment-status";
export { SAMPLE_APPOINTMENTS } from "./appointments/sample-appointments";

// ── Doctors ─────────────────────────────────────────────
export { default as DoctorsTable } from "./doctors/DoctorsTable";
export type { DoctorRow } from "./doctors/DoctorsTable";
export { DoctorForm } from "./doctors/DoctorForm";
// export type { DoctorFormValues } from "./doctors/DoctorForm";
export { DoctorsPageClient } from "./doctors/DoctorsPageClient";
export { doctors } from "./doctors/doctors";
export { DoctorModal } from "./doctors/DoctorModal";
export {
  DOCTOR_STATUS_CLASSES,
  type DoctorStatus,
} from "./doctors/DoctorStatus";
export { SAMPLE_DOCTORS } from "./doctors/sample-doctors";

// ── Settings ────────────────────────────────────────────
export { default as SettingsNav } from "./settings/SettingsNav";
export { default as SettingsSection } from "./settings/SettingsSection";
export {
  SETTINGS_TABS,
  type SettingsTab,
  type SettingsTabKey,
} from "./settings/settings-tabs";
export { default as GeneralSettingsPanel } from "./settings/ClinicSettingsPanel";
export { default as ClinicSettingsPanel } from "./settings/ClinicSettingsPanel";
export { default as NotificationSettingsPanel } from "./settings/NotificationSettingsPanel";
export { default as AppearanceSettingsPanel } from "./settings/AppearanceSettingsPanel";
export { default as EmailSettingsPanel } from "./settings/EmailSettingsPanel";
export { default as PaymentsSettingsPanel } from "./settings/PaymentsSettingsPanel";
export { default as RolesSettingsPanel } from "./settings/RolesSettingsPanel";
export { default as UsersSettingsPanel } from "./settings/UsersSettingsPanel";

// ── Dashboard widgets (presentational cards) ───────────
export { default as StatCard } from "./widgets/StatCard";
export { default as VitalsCard } from "./widgets/VitalsCard";
export { default as DoctorProgress } from "./widgets/DoctorProgress";
export { default as CalendarWidget } from "./widgets/CalendarWidget";
export { default as RecentActivity } from "./widgets/RecentActivity";
export type { ActivityItem } from "./widgets/RecentActivity";
export { default as RevenueChartCard } from "./widgets/RevenueChartCard";

// ── Shared primitives (re-exported for convenience) ────
