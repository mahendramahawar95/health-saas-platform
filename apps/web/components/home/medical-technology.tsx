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
import Image from "next/image";

const technologies = [
  {
    icon: Scan,
    label: "MRI",
    desc: "Lorem ipsum dolor sit amet, consectet commodi sit veniam adipisicing.",
  },
  {
    icon: ScanLine,
    label: "CT Scan",
    desc: "Lorem ipsum dolor sit amet, consectet commodi sit veniam adipisicing.",
  },
  {
    icon: FlaskConical,
    label: "Laboratory",
    desc: "Lorem ipsum dolor sit amet, consectet commodi sit veniam adipisicing.",
  },
  {
    icon: Scissors,
    label: "Operation Theater",
    desc: "Lorem ipsum dolor sit amet, consectet commodi sit veniam adipisicing.",
  },
  {
    icon: BedDouble,
    label: "ICU",
    desc: "Lorem ipsum dolor sit amet, consectet commodi sit veniam adipisicing.",
  },
  {
    icon: Siren,
    label: "Emergency",
    desc: "Lorem ipsum dolor sit amet, consectet commodi sit veniam adipisicing.",
  },
  {
    icon: Bot,
    label: "Robotics",
    desc: "Lorem ipsum dolor sit amet, consectet commodi sit veniam adipisicing.",
  },
  {
    icon: Ambulance,
    label: "Ambulance",
    desc: "Lorem ipsum dolor sit amet, consectet commodi sit veniam adipisicing.",
  },
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

        <div className="mt-xl items-center grid grid-cols-2 gap-md sm:grid-cols-3">
          <div className="left-box">
            {technologies.slice(0, 3).map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex group items-center gap-3 rounded-lg border-transparent hover:border-border hover:bg-card px-md py-lg text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="desc-box text-right">
                  <h5 className="text-h5 font-medium text-foreground">
                    {label}
                  </h5>
                  <p className="mt-3 text-small text-content-secondary">
                    {desc}
                  </p>
                </div>
                <div className="flex  items-center justify-center rounded-full bg-white group-hover:bg-primary/10 transition-all duration-300 group-hover:shadow-none shadow-md text-primary p-4">
                  <Icon className="size-10" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
          <div className="image-box">
            <Image
              src="/departgif-2.png"
              alt="technology"
              width={800}
              height={800}
              className="w-full animate-palpitation h-full object-fit right "
            />
          </div>
          <div className="right-box">
            {technologies.slice(3, 6).map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex group items-center gap-3 rounded-lg border-transparent hover:border-border hover:bg-card px-md py-lg text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex  items-center justify-center rounded-full bg-white group-hover:bg-primary/10 transition-all duration-300 group-hover:shadow-none shadow-md text-primary p-4">
                  <Icon className="size-10" aria-hidden="true" />
                </div>
                <div className="desc-box text-left">
                  <h5 className="text-h5 font-medium text-foreground">
                    {label}
                  </h5>
                  <p className="mt-3 text-small text-content-secondary">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
