export * from "./components/button/Button";
export * from "./card";
export * from "./gradient";
export * from "./lib/cn";
export * from "./turborepo-logo";
export * from "./components/Slider";
export * from "./components/hero/Hero";
export * from "./carousel/index";
export * from "./input/index";
export * from "./components/badge/badge";
export * from "./components/section/section";
export * from "./components/section-heading/section-heading";
// packages/ui/src/index.ts
export * from "./breadcrumb/breadcrumb";
export * from "./doctor-header/doctor-header";
export * from "./detail-card/detail-card";
export * from "./sidebar-card/sidebar-card";
export * from "./doctor-detail-page/doctor-detail-page";

export { default as DashboardShell } from "./components/dashboard/layout/DashboardShell";
export { default as Sidebar } from "./components/dashboard/layout/Sidebar";
export { default as NavItem } from "./components/dashboard/layout/NavItem";
export { default as DashboardHeader } from "./components/dashboard/layout/DashboardHeader";
export { NAV_ITEMS } from "./components/dashboard/layout/nav-items";
export type {
  NavItem as NavItemType,
  NavSubItem,
} from "./components/dashboard/layout/nav-items";

// ── Appointments ────────────────────────────────────────
export { default as AppointmentsTable } from "./components/dashboard/appointments/AppointmentsTable";
export type { AppointmentTableRow } from "./components/dashboard/appointments/AppointmentsTable";
export { default as AppointmentRow } from "./components/dashboard/appointments/AppointmentRow";
export { default as AppointmentForm } from "./components/dashboard/appointments/AppointmentForm";
export type { AppointmentFormValues } from "./components/dashboard/appointments/AppointmentForm";
export { default as AppointmentModal } from "./components/dashboard/appointments/AppointmentModal";
export { default as AppointmentAnalyticsCard } from "./components/dashboard/appointments/AppointmentAnalyticsCard";
export { PatientDetailsView } from "./components/dashboard/patients/PatientDetailsView";
export {
  patients,
  appointmentsByPatient,
  getPatientByIdOrSlug,
  medicalHistoryByPatient,
} from "./components/dashboard/patients/patients";
export { PatientsPageClient } from "./components/dashboard/patients/PatientsPageClient";
export {
  APPOINTMENT_STATUS_CLASSES,
  type AppointmentStatus,
} from "./components/dashboard/appointments/appointment-status";
export { SAMPLE_APPOINTMENTS } from "./components/dashboard/appointments/sample-appointments";

// ── Doctors ─────────────────────────────────────────────
export { default as DoctorsTable } from "./components/dashboard/doctors/DoctorsTable";
export type { DoctorRow } from "./components/dashboard/doctors/DoctorsTable";
export { DoctorForm } from "./components/dashboard/doctors/DoctorForm";
// export type { DoctorFormValues } from "./components/dashboard/doctors/DoctorForm";
export { DoctorsPageClient } from "./components/dashboard/doctors/DoctorsPageClient";
export { doctors } from "./components/dashboard/doctors/doctors";
export { DoctorModal } from "./components/dashboard/doctors/DoctorModal";
export {
  DOCTOR_STATUS_CLASSES,
  type DoctorStatus,
} from "./components/dashboard/doctors/DoctorStatus";
export { SAMPLE_DOCTORS } from "./components/dashboard/doctors/sample-doctors";

// ── Settings ────────────────────────────────────────────
export { default as SettingsNav } from "./components/dashboard/settings/SettingsNav";
export { default as SettingsSection } from "./components/dashboard/settings/SettingsSection";
export {
  SETTINGS_TABS,
  type SettingsTab,
  type SettingsTabKey,
} from "./components/dashboard/settings/settings-tabs";
export { default as GeneralSettingsPanel } from "./components/dashboard/settings/ClinicSettingsPanel";
export { default as ClinicSettingsPanel } from "./components/dashboard/settings/ClinicSettingsPanel";
export { default as NotificationSettingsPanel } from "./components/dashboard/settings/NotificationSettingsPanel";

// ── Dashboard widgets (presentational cards) ───────────
export { default as StatCard } from "./components/dashboard/widgets/StatCard";
export { default as VitalsCard } from "./components/dashboard/widgets/VitalsCard";
export { default as DoctorProgress } from "./components/dashboard/widgets/DoctorProgress";
export { default as CalendarWidget } from "./components/dashboard/widgets/CalendarWidget";
export { default as RecentActivity } from "./components/dashboard/widgets/RecentActivity";
export type { ActivityItem } from "./components/dashboard/widgets/RecentActivity";
export { default as RevenueChartCard } from "./components/dashboard/widgets/RevenueChartCard";
export { Modal } from "./modal";

// ── Shared primitives (re-exported for convenience) ────
