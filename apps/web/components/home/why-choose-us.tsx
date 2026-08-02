import { Section } from "@repo/ui";
import { Activity, Siren, Stethoscope, Video } from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Experienced Doctors",
    description:
      "Board-certified specialists across every department, averaging over 15 years in practice.",
  },
  {
    icon: Siren,
    title: "24×7 Emergency",
    description:
      "A dedicated emergency team and ambulance fleet ready to respond around the clock.",
  },
  {
    icon: Activity,
    title: "Modern Equipment",
    description:
      "Diagnostics and treatment powered by the latest imaging and monitoring technology.",
  },
  {
    icon: Video,
    title: "Online Consultation",
    description:
      "Talk to a doctor from home with secure video visits and digital prescriptions.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <Section className="bg-section-second py-3xl">
      <div className="container grid grid-cols-1 items-center gap-2xl lg:grid-cols-2">
        {/* Left: illustration */}
        <div className="relative overflow-hidden rounded-xl bg-section-fourth p-xl">
          <svg
            viewBox="0 0 400 320"
            className="h-auto w-full"
            role="img"
            aria-label="Illustration of a hospital building with a heartbeat monitor line"
          >
            <circle cx="330" cy="60" r="70" fill="var(--color-section-fifth)" />

            {/* building */}
            <rect
              x="70"
              y="120"
              width="180"
              height="160"
              rx="8"
              fill="var(--color-surface)"
              stroke="var(--color-border)"
            />

            {/* window grid */}
            <rect
              x="90"
              y="140"
              width="24"
              height="24"
              rx="3"
              fill="var(--color-secondary)"
            />
            <rect
              x="128"
              y="140"
              width="24"
              height="24"
              rx="3"
              fill="var(--color-secondary)"
            />
            <rect
              x="166"
              y="140"
              width="24"
              height="24"
              rx="3"
              fill="var(--color-secondary)"
            />
            <rect
              x="204"
              y="140"
              width="24"
              height="24"
              rx="3"
              fill="var(--color-secondary)"
            />
            <rect
              x="90"
              y="178"
              width="24"
              height="24"
              rx="3"
              fill="var(--color-secondary)"
            />
            <rect
              x="128"
              y="178"
              width="24"
              height="24"
              rx="3"
              fill="var(--color-secondary)"
            />
            <rect
              x="166"
              y="178"
              width="24"
              height="24"
              rx="3"
              fill="var(--color-secondary)"
            />
            <rect
              x="204"
              y="178"
              width="24"
              height="24"
              rx="3"
              fill="var(--color-secondary)"
            />

            {/* door */}
            <rect
              x="140"
              y="230"
              width="40"
              height="50"
              rx="4"
              fill="var(--color-primary)"
              opacity="0.15"
            />

            {/* cross on roof */}
            <rect
              x="145"
              y="90"
              width="30"
              height="10"
              rx="2"
              fill="var(--color-danger)"
            />
            <rect
              x="155"
              y="80"
              width="10"
              height="30"
              rx="2"
              fill="var(--color-danger)"
            />

            {/* ambulance accent */}
            <g transform="translate(255,258)">
              <rect
                x="0"
                y="0"
                width="60"
                height="28"
                rx="4"
                fill="var(--color-surface)"
                stroke="var(--color-border)"
              />
              <rect
                x="6"
                y="6"
                width="14"
                height="10"
                rx="2"
                fill="var(--color-danger)"
                opacity="0.8"
              />
              <circle
                cx="14"
                cy="30"
                r="6"
                fill="var(--color-foreground)"
                opacity="0.7"
              />
              <circle
                cx="46"
                cy="30"
                r="6"
                fill="var(--color-foreground)"
                opacity="0.7"
              />
            </g>

            {/* EKG line */}
            <path
              pathLength={300}
              d="M20 300 H120 L138 260 L158 320 L178 280 L196 300 H380"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-ekg"
            />
            <circle
              cx="380"
              cy="300"
              r="6"
              fill="var(--color-danger)"
              className="animate-pulse-dot"
            />
          </svg>
        </div>

        {/* Right: heading + feature cards */}
        <div>
          <span className="text-small font-semibold uppercase tracking-wide text-primary">
            Why Choose Us
          </span>
          <h2 className="mt-2 text-h2 font-semibold text-foreground">
            Care built around trust and speed
          </h2>
          <p className="mt-3  text-body text-content-secondary">
            From routine checkups to emergencies, our team and technology are
            set up to get you the right care without the wait.
          </p>

          <div className=" grid grid-cols-1 gap-md sm:grid-cols-2">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-lg border border-border bg-card p-lg shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex size-icon items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-h5 font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-1 text-small text-content-secondary">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
