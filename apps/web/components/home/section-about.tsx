import { Badge, Section } from "@repo/ui";
import { BadgeCheck, CheckCircle2, ArrowUpRight } from "lucide-react";
import Image from "next/image";

// Adjust Badge prop names below to match your actual @repo/ui API.

const HIGHLIGHTS = [
  "ISO-certified facility, built to international safety standards",
  "In-house pharmacy, diagnostics, and 24/7 pathology lab",
  "Personalized care plans tailored to every patient",
  "Partnered with leading health insurance providers",
];

const STATS = [
  { value: "15+", label: "Years of excellence" },
  { value: "200+", label: "Specialist doctors" },
  { value: "50k+", label: "Patients treated" },
];

export default function SectionAbout() {
  return (
    <Section id="about" className="bg-section-first py-3xl pt-0">
      <div className="container grid grid-cols-1 items-center gap-2xl lg:grid-cols-[0.9fr_1.1fr]">
        {/* Visual panel */}
        <div className="relative">
          <div
            className="aspect-4/5 w-full rounded-xl bg-gradient-secondary shadow-lg"
            aria-hidden="true"
          />

          {/* Facility photo placeholder — swap for a real <img> */}
          <div
            className="absolute inset-3 rounded-lg bg-card"
            aria-hidden="true"
          >
            <Image
              src="/hospital-image.png"
              alt="medicare"
              height={600}
              width={500}
              className=" rounded-lg inset-0 h-full w-full object-cover "
            />
          </div>

          {/* Accreditation stamp — signature element */}
          <div className="absolute -right-4 top-6 flex size-24 rotate-[8deg] flex-col items-center justify-center gap-1 rounded-full border border-border bg-background text-center shadow-card sm:-right-6">
            <BadgeCheck className="size-5 text-primary" aria-hidden="true" />
            <span className="text-[0.6rem] font-semibold uppercase tracking-wide text-foreground">
              ISO 9001
            </span>
            <span className="text-[0.55rem] text-content-secondary">
              Certified
            </span>
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-6 left-6 flex items-center gap-sm rounded-lg border border-border bg-background px-md py-sm shadow-card sm:-bottom-8 sm:left-8">
            <span className="text-h4 font-semibold text-primary">15+</span>
            <span className="max-w-[9ch] text-xs leading-tight text-content-secondary">
              Years caring for our community
            </span>
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col items-start gap-md pt-lg lg:pt-0">
          <Badge className="bg-badge-tag p-2 text-primary font-bold">
            About Us
          </Badge>
          <h2 className="text-h2 font-semibold tracking-tight text-foreground">
            Compassionate care, backed by decades of trust
          </h2>

          <p className="max-w-[60ch] text-body text-content-secondary">
            Medicare has been at the forefront of healthcare innovation for over
            15 years, combining advanced medical technology with genuine,
            patient-first care. Our multidisciplinary team works together to
            deliver accurate diagnoses, personalized treatment plans, and
            continuous support throughout your health journey.
          </p>

          <ul className="mt-xs flex flex-col gap-sm">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-sm">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="text-body text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-sm grid w-full grid-cols-3 gap-sm border-t border-border pt-md">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-h4 font-semibold text-foreground">
                  {stat.value}
                </span>
                <span className="text-xs text-content-secondary">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#about-details"
            className="mt-sm inline-flex items-center gap-xs text-body font-medium text-primary hover:underline"
          >
            Learn More About Us
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </Section>
  );
}
