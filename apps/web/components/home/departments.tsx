import { Section, SectionHeading } from "@repo/ui";
import {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Stethoscope,
  Microscope,
  Sun,
  Ear,
  Smile,
  Eye,
  Droplet,
  HeartHandshake,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

type Department = {
  name: string;
  description: string;
  icon: LucideIcon;
  index: number;
};

const DEPARTMENTS: Department[] = [
  {
    name: "Cardiology",
    description: "Heart care from diagnostics to surgery and rehabilitation.",
    icon: HeartPulse,
    index: 1,
  },
  {
    name: "Neurology",
    description: "Treatment for brain, spine, and nervous system disorders.",
    icon: Brain,
    index: 2,
  },
  {
    name: "Orthopedics",
    description: "Care for bones, joints, and musculoskeletal injuries.",
    icon: Bone,
    index: 3,
  },
  {
    name: "Pediatrics",
    description: "Healthcare for infants, children, and adolescents.",
    icon: Baby,
    index: 4,
  },
  {
    name: "Gynecology",
    description: "Women's health from prenatal to postnatal care.",
    icon: Stethoscope,
    index: 5,
  },
  {
    name: "Oncology",
    description: "Cancer screening, diagnosis, and personalized treatment.",
    icon: Microscope,
    index: 6,
  },
  {
    name: "Dermatology",
    description: "Care for skin, hair, and nail conditions.",
    icon: Sun,
    index: 7,
  },
  {
    name: "ENT",
    description: "Treatment for ear, nose, and throat disorders.",
    icon: Ear,
    index: 8,
  },
  {
    name: "Dentistry",
    description: "Routine checkups to cosmetic dental procedures.",
    icon: Smile,
    index: 9,
  },
  {
    name: "Ophthalmology",
    description: "Eye care including vision correction and surgery.",
    icon: Eye,
    index: 10,
  },
  {
    name: "Urology",
    description: "Diagnosis and treatment of urinary tract conditions.",
    icon: Droplet,
    index: 11,
  },
  {
    name: "Psychiatry",
    description: "Compassionate mental health support and therapy.",
    icon: HeartHandshake,
    index: 12,
  },
];

export default function MedicalDepartments() {
  return (
    <Section id="departments" className="bg-section-third py-3xl">
      <div className="container">
        <SectionHeading
          badgeClass="bg-badge-tag p-2 text-primary font-bold"
          badgeText="Departments"
          heading="Every specialty, under one roof"
          description=" Twelve dedicated departments staffed by verified specialists,
            ready to see you when you need them."
        />

        <div className="grid grid-cols-2 gap-sm sm:grid-cols-3 lg:grid-cols-4">
          {DEPARTMENTS.map(({ name, index, description, icon: Icon }) => (
            <Link
              href={`/departments/${name.toLowerCase()}`}
              key={name}
              className="group flex flex-col gap-sm rounded-lg border border-border bg-card p-md shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <p className="font-bold text-primary text-h4">{index}</p>
                <div className="flex size-icon h-12 w-12 items-center justify-center rounded-full bg-white">
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                </div>
              </div>

              <p className="text-body font-semibold text-foreground">{name}</p>
              <p className="text-small text-content-secondary">{description}</p>

              <span className="mt-auto flex items-center gap-1 pt-xs text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                View doctors
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
