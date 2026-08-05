export type DoctorStatus = "active" | "on-leave" | "inactive";
export type DoctorGender = "male" | "female" | "other";
export interface Doctor {
  id: string;
  slug: string;
  name: string;
  specialty: string;
  department: string;
  qualification: string;
  email: string;
  phone: string;
  gender: DoctorGender;
  experienceYears: number;
  consultationFee: number;
  status: DoctorStatus;
  availableDays: string[];
  avatarUrl?: string;
  bio?: string;
  joinedOn: string;
}
export type DoctorFormValues = Omit<Doctor, "id" | "slug" | "joinedOn">;
export declare const WEEKDAYS: readonly [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];
export declare const DEPARTMENTS: readonly [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Dermatology",
  "General Medicine",
  "ENT",
  "Ophthalmology",
];
//# sourceMappingURL=doctor.d.ts.map
