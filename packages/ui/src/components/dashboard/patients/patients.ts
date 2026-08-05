import type { Appointment, MedicalRecord, Patient } from "../types/patient";

export const patients: Patient[] = [
  {
    id: "pat_001",
    slug: "ananya-sharma",
    name: "Ananya Sharma",
    age: 34,
    gender: "female",
    bloodGroup: "O+",
    phone: "+91 98100 22334",
    email: "ananya.sharma@example.com",
    address: "C-12, Malviya Nagar, Jaipur",
    status: "active",
    registeredOn: "2023-02-11",
  },
  {
    id: "pat_002",
    slug: "vikram-singh",
    name: "Vikram Singh",
    age: 58,
    gender: "male",
    bloodGroup: "B+",
    phone: "+91 97200 11229",
    email: "vikram.singh@example.com",
    address: "45, Civil Lines, Jaipur",
    status: "critical",
    registeredOn: "2021-09-05",
  },
  {
    id: "pat_003",
    slug: "fatima-khan",
    name: "Fatima Khan",
    age: 27,
    gender: "female",
    bloodGroup: "AB-",
    phone: "+91 90585 66710",
    email: "fatima.khan@example.com",
    address: "18, Vaishali Nagar, Jaipur",
    status: "active",
    registeredOn: "2024-06-19",
  },
  {
    id: "pat_004",
    slug: "arjun-mehta",
    name: "Arjun Mehta",
    age: 41,
    gender: "male",
    bloodGroup: "A+",
    phone: "+91 99991 44556",
    email: "arjun.mehta@example.com",
    address: "7, Mansarovar, Jaipur",
    status: "inactive",
    registeredOn: "2020-12-02",
  },
];

export const medicalHistoryByPatient: Record<string, MedicalRecord[]> = {
  pat_001: [
    {
      id: "rec_001",
      condition: "Seasonal Allergy",
      diagnosedOn: "2024-03-02",
      doctor: "Dr. Sameer Iyer",
      notes:
        "Prescribed antihistamines, advised follow-up if symptoms persist beyond two weeks.",
      status: "resolved",
    },
  ],
  pat_002: [
    {
      id: "rec_002",
      condition: "Type 2 Diabetes",
      diagnosedOn: "2019-05-14",
      doctor: "Dr. Aisha Verma",
      notes: "On regular medication, HbA1c monitored quarterly.",
      status: "ongoing",
    },
    {
      id: "rec_003",
      condition: "Hypertension",
      diagnosedOn: "2021-01-20",
      doctor: "Dr. Aisha Verma",
      notes: "Blood pressure managed with daily medication.",
      status: "ongoing",
    },
  ],
  pat_003: [],
  pat_004: [
    {
      id: "rec_004",
      condition: "Fractured Wrist",
      diagnosedOn: "2020-12-04",
      doctor: "Dr. Meera Nair",
      notes: "Cast removed after 6 weeks, full mobility recovered.",
      status: "resolved",
    },
  ],
};

export const appointmentsByPatient: Record<string, Appointment[]> = {
  pat_001: [
    {
      id: "apt_001",
      doctorName: "Dr. Sameer Iyer",
      department: "General Medicine",
      date: "2026-08-12",
      time: "10:30 AM",
      reason: "Routine checkup",
      status: "upcoming",
    },
  ],
  pat_002: [
    {
      id: "apt_002",
      doctorName: "Dr. Aisha Verma",
      department: "Cardiology",
      date: "2026-08-06",
      time: "9:00 AM",
      reason: "Blood pressure review",
      status: "upcoming",
    },
    {
      id: "apt_003",
      doctorName: "Dr. Aisha Verma",
      department: "Cardiology",
      date: "2026-05-02",
      time: "11:00 AM",
      reason: "Quarterly diabetes review",
      status: "completed",
    },
  ],
  pat_003: [],
  pat_004: [
    {
      id: "apt_004",
      doctorName: "Dr. Meera Nair",
      department: "Orthopedics",
      date: "2026-07-01",
      time: "3:00 PM",
      reason: "Follow-up consultation",
      status: "cancelled",
    },
  ],
};

export function getPatientByIdOrSlug(idOrSlug: string): Patient | undefined {
  return patients.find(
    (patient) => patient.id === idOrSlug || patient.slug === idOrSlug,
  );
}
