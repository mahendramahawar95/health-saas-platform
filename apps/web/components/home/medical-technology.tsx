import { Section } from "@repo/ui";
import {
  Ambulance,
  Bot,
  BedDouble,
  FlaskConical,
  Scan,
  ScanLine,
  Scissors,
  Siren,
} from "lucide-react";

const technologies = [
  { icon: Scan, label: "MRI" },
  { icon: ScanLine, label: "CT Scan" },
  { icon: FlaskConical, label: "Laboratory" },
  { icon: Scissors, label: "Operation Theater" },
  { icon: BedDouble, label: "ICU" },
  { icon: Siren, label: "Emergency" },
  { icon: Bot, label: "Robotics" },
  { icon: Ambulance, label: "Ambulance" },
];

export default function MedicalTechnologySection() {
  return (
    <Section className="bg-background py-3xl">
      <div className="container">
        <div className="mx-auto text-center">
          <span className="text-small font-semibold uppercase tracking-wide text-primary">
            Our Technology
          </span>
          <h2 className="mt-2 text-h2 font-semibold text-foreground">
            Medical Technology
          </h2>
          <p className="mt-3 text-body text-content-secondary">
            Diagnosis and treatment backed by equipment that keeps pace with
            modern medicine.
          </p>
        </div>

        <div className="mt-xl grid grid-cols-2 gap-md sm:grid-cols-4">
          {technologies.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card px-md py-lg text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex size-icon items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-6" aria-hidden="true" />
              </div>
              <span className="text-small font-medium text-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
