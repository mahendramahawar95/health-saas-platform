export type Doctor = {
  name: string;
  specialty: string;
};

export type Department = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stats: { label: string; value: string }[];
  services: string[];
  doctors: Doctor[];
};

export const departments: Department[] = [
  {
    slug: "cardiology",
    name: "Cardiology",
    tagline: "Heart care from screening to surgery",
    description:
      "Our cardiology team diagnoses and treats conditions across the full range of heart health, from routine ECGs and stress tests to complex interventional and post-surgical care.",
    stats: [
      { label: "Specialists", value: "8" },
      { label: "Years combined experience", value: "60+" },
      { label: "Procedures / year", value: "1,200+" },
    ],
    services: [
      "ECG & echocardiography",
      "Angiography & angioplasty",
      "Cardiac rehabilitation",
      "Pacemaker implantation",
    ],
    doctors: [
      { name: "Dr. Anika Sharma", specialty: "Interventional Cardiologist" },
      { name: "Dr. Vikram Rao", specialty: "Cardiac Surgeon" },
    ],
  },
  {
    slug: "neurology",
    name: "Neurology",
    tagline: "Care for the brain, spine, and nervous system",
    description:
      "We evaluate and manage neurological conditions including stroke, epilepsy, migraine, and movement disorders, backed by on-site imaging and a dedicated stroke unit.",
    stats: [
      { label: "Specialists", value: "6" },
      { label: "Years combined experience", value: "45+" },
      { label: "Patients / year", value: "3,000+" },
    ],
    services: [
      "EEG & EMG testing",
      "Stroke care unit",
      "Epilepsy management",
      "Movement disorder clinic",
    ],
    doctors: [
      { name: "Dr. Rohan Mehta", specialty: "Neurologist" },
      { name: "Dr. Kavita Iyer", specialty: "Neuro-physician" },
    ],
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
    tagline: "Bone, joint, and sports injury care",
    description:
      "From fractures to joint replacement, our orthopedic team combines surgical expertise with physiotherapy support to get you moving again.",
    stats: [
      { label: "Specialists", value: "7" },
      { label: "Years combined experience", value: "55+" },
      { label: "Surgeries / year", value: "900+" },
    ],
    services: [
      "Joint replacement surgery",
      "Sports injury treatment",
      "Fracture & trauma care",
      "Spine care",
    ],
    doctors: [
      { name: "Dr. Sameer Kulkarni", specialty: "Orthopedic Surgeon" },
      { name: "Dr. Neha Kapoor", specialty: "Sports Medicine Specialist" },
    ],
  },
  {
    slug: "pediatrics",
    name: "Pediatrics",
    tagline: "Comprehensive care for infants to teens",
    description:
      "A child-friendly environment for routine checkups, vaccinations, and treatment of childhood illnesses, staffed by pediatricians experienced across every age group.",
    stats: [
      { label: "Specialists", value: "5" },
      { label: "Years combined experience", value: "40+" },
      { label: "Children treated / year", value: "5,000+" },
    ],
    services: [
      "Well-child checkups",
      "Vaccination programs",
      "Neonatal care",
      "Growth & nutrition counseling",
    ],
    doctors: [
      { name: "Dr. Priya Nair", specialty: "Pediatrician" },
      { name: "Dr. Arjun Verma", specialty: "Neonatologist" },
    ],
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    tagline: "Skin, hair, and nail care",
    description:
      "Medical and cosmetic dermatology for acne, eczema, hair loss, and skin conditions, with in-house minor procedures and laser treatment.",
    stats: [
      { label: "Specialists", value: "4" },
      { label: "Years combined experience", value: "30+" },
      { label: "Patients / year", value: "2,500+" },
    ],
    services: [
      "Acne & eczema treatment",
      "Hair loss consultation",
      "Laser & cosmetic procedures",
      "Skin biopsy & diagnosis",
    ],
    doctors: [{ name: "Dr. Meera Joshi", specialty: "Dermatologist" }],
  },
  {
    slug: "ent",
    name: "ENT",
    tagline: "Ear, nose, and throat care",
    description:
      "Diagnosis and treatment for hearing, sinus, and throat conditions, from routine checkups to surgical care.",
    stats: [
      { label: "Specialists", value: "3" },
      { label: "Years combined experience", value: "25+" },
      { label: "Patients / year", value: "1,800+" },
    ],
    services: [
      "Hearing tests & aids",
      "Sinus & allergy treatment",
      "Tonsillectomy",
      "Voice & throat disorders",
    ],
    doctors: [{ name: "Dr. Karan Malhotra", specialty: "ENT Surgeon" }],
  },
  {
    slug: "oncology",
    name: "Oncology",
    tagline: "Cancer screening, treatment, and support",
    description:
      "A multidisciplinary team providing early screening, chemotherapy, and coordinated care throughout cancer treatment and recovery.",
    stats: [
      { label: "Specialists", value: "5" },
      { label: "Years combined experience", value: "50+" },
      { label: "Patients supported / year", value: "800+" },
    ],
    services: [
      "Cancer screening",
      "Chemotherapy",
      "Radiation therapy coordination",
      "Survivorship support",
    ],
    doctors: [
      { name: "Dr. Sanjay Gupta", specialty: "Oncologist" },
      { name: "Dr. Ritu Bansal", specialty: "Hemato-Oncologist" },
    ],
  },
  {
    slug: "gastroenterology",
    name: "Gastroenterology",
    tagline: "Digestive system diagnosis and treatment",
    description:
      "Endoscopy, liver care, and treatment for digestive disorders, from acid reflux to inflammatory bowel disease.",
    stats: [
      { label: "Specialists", value: "4" },
      { label: "Years combined experience", value: "35+" },
      { label: "Procedures / year", value: "1,000+" },
    ],
    services: [
      "Endoscopy & colonoscopy",
      "Liver disease management",
      "IBD & IBS treatment",
      "Nutritional counseling",
    ],
    doctors: [{ name: "Dr. Aditya Bhatt", specialty: "Gastroenterologist" }],
  },
  {
    slug: "dentistry",
    name: "Dentistry",
    tagline: "General and cosmetic dental care",
    description:
      "Routine cleanings, restorative work, and cosmetic dentistry in a single dedicated dental wing.",
    stats: [
      { label: "Specialists", value: "3" },
      { label: "Years combined experience", value: "28+" },
      { label: "Patients / year", value: "3,200+" },
    ],
    services: [
      "Cleaning & checkups",
      "Root canal treatment",
      "Braces & aligners",
      "Cosmetic dentistry",
    ],
    doctors: [{ name: "Dr. Ishaan Chawla", specialty: "Dental Surgeon" }],
  },
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    tagline: "Rehabilitation and mobility recovery",
    description:
      "Personalized rehab programs for post-surgical recovery, sports injuries, and chronic pain management.",
    stats: [
      { label: "Specialists", value: "4" },
      { label: "Years combined experience", value: "32+" },
      { label: "Sessions / year", value: "6,000+" },
    ],
    services: [
      "Post-surgical rehab",
      "Sports injury recovery",
      "Chronic pain management",
      "Mobility & balance training",
    ],
    doctors: [{ name: "Dr. Tanvi Desai", specialty: "Physiotherapist" }],
  },
];

export function getDepartmentBySlug(slug: string) {
  return departments.find((department) => department.slug === slug);
}
