export interface Doctor {
  id: string;
  name: string;
  designation: string;
  image: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  about: string;
  experience: string;
  education: string[];
  certifications: string[];
  expertise: string[];
  services: string[];
  phone: string;
  email: string;
  workingHours: { day: string; hours: string }[];
  emergencyContact: string;
  quickFacts: { label: string; value: string }[];
}

export const DOCTORS: Doctor[] = [
  {
    id: "dr-jane-smith",
    name: "Dr. Jane Smith",
    designation: "Cardiologist",
    image: "/doctors/jane-smith.jpg",
    rating: 4.8,
    reviewCount: 132,
    tags: ["Cardiology", "Heart Surgery"],
    about:
      "Dr. Jane Smith is a board-certified cardiologist with over 12 years of experience treating complex cardiovascular conditions.",
    experience:
      "12+ years in interventional cardiology across leading hospitals.",
    education: [
      "MD, Harvard Medical School",
      "Residency, Johns Hopkins Hospital",
      "Fellowship in Cardiology, Mayo Clinic",
    ],
    certifications: [
      "Board Certified in Cardiovascular Disease",
      "Advanced Cardiac Life Support (ACLS)",
    ],
    expertise: ["Heart Failure", "Arrhythmia", "Preventive Cardiology"],
    services: [
      "ECG & Stress Testing",
      "Echocardiography",
      "Cardiac Catheterization",
      "Consultation",
    ],
    phone: "+1 (555) 123-4567",
    email: "jane.smith@clinic.com",
    workingHours: [
      { day: "Mon - Fri", hours: "9:00 AM - 5:00 PM" },
      { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
    emergencyContact: "+1 (555) 999-0000",
    quickFacts: [
      { label: "Experience", value: "12 Years" },
      { label: "Patients Treated", value: "5,000+" },
      { label: "Languages", value: "English, Spanish" },
    ],
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return DOCTORS.find((doctor) => doctor.id === slug);
}
