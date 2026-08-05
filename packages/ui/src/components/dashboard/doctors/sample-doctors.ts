import type { DoctorRow } from "./DoctorsTable";

export const SAMPLE_DOCTORS: DoctorRow[] = [
  {
    id: "doc-1",
    name: "Dr. Elena Reyes",
    specialty: "Cardiologist",
    email: "elena.reyes@vitalis.health",
    phone: "+1 (555) 210-4471",
    status: "Active",
    patientsToday: 12,
  },
  {
    id: "doc-2",
    name: "Dr. Daniel Okafor",
    specialty: "General Physician",
    email: "daniel.okafor@vitalis.health",
    phone: "+1 (555) 340-8823",
    status: "Active",
    patientsToday: 9,
  },
  {
    id: "doc-3",
    name: "Dr. Mei Chen",
    specialty: "Dermatologist",
    email: "mei.chen@vitalis.health",
    phone: "+1 (555) 118-7742",
    status: "On Leave",
    patientsToday: 0,
  },
  {
    id: "doc-4",
    name: "Dr. Samuel Osei",
    specialty: "Pediatrician",
    email: "samuel.osei@vitalis.health",
    phone: "+1 (555) 902-3315",
    status: "Active",
    patientsToday: 7,
  },
  {
    id: "doc-5",
    name: "Dr. Laura Bianchi",
    specialty: "Orthopedic Surgeon",
    email: "laura.bianchi@vitalis.health",
    phone: "+1 (555) 466-0091",
    status: "Inactive",
    patientsToday: 0,
  },
];
