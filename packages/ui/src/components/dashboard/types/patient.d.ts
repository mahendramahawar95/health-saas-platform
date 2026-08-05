export type PatientStatus = "active" | "inactive" | "critical";
export type PatientGender = "male" | "female" | "other";
export interface Patient {
  id: string;
  slug: string;
  name: string;
  age: number;
  gender: PatientGender;
  bloodGroup: string;
  phone: string;
  email: string;
  address: string;
  status: PatientStatus;
  registeredOn: string;
}
export type PatientFormValues = Omit<Patient, "id" | "slug" | "registeredOn">;
export type RecordStatus = "ongoing" | "resolved";
export interface MedicalRecord {
  id: string;
  condition: string;
  diagnosedOn: string;
  doctor: string;
  notes: string;
  status: RecordStatus;
}
export type MedicalRecordFormValues = Omit<MedicalRecord, "id">;
export type AppointmentStatus = "upcoming" | "completed" | "cancelled";
export interface Appointment {
  id: string;
  doctorName: string;
  department: string;
  date: string;
  time: string;
  reason: string;
  status: AppointmentStatus;
}
export type AppointmentFormValues = Omit<Appointment, "id">;
export declare const BLOOD_GROUPS: readonly [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
];
//# sourceMappingURL=patient.d.ts.map
