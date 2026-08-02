import { Eye, Target } from "lucide-react";

const team = [
  { name: "Dr. Vikram Rao", role: "Chief Executive Officer" },
  { name: "Dr. Anika Sharma", role: "Medical Director" },
  { name: "Neha Kapoor", role: "Chief Nursing Officer" },
  { name: "Arjun Verma", role: "Head of Operations" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-section-first py-2xl">
        <div className="container text-center">
          <span className="text-small font-semibold uppercase tracking-wide text-primary">
            About Us
          </span>
          <h1 className="mt-2 text-h1 font-semibold text-foreground">
            Care Built on Trust
          </h1>
          <p className="mx-auto mt-3 text-body text-content-secondary">
            For over two decades, we&apos;ve grown from a single clinic into a
            full-service hospital, without losing sight of what got us here —
            putting patients first.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-background py-3xl">
        <div className="container grid grid-cols-1 items-center gap-2xl lg:grid-cols-2">
          <div>
            <span className="text-small font-semibold uppercase tracking-wide text-primary">
              Our Story
            </span>
            <h2 className="mt-2 text-h3 font-semibold text-foreground">
              From a Single Clinic to a Full-Service Hospital
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-body text-content-secondary">
              <p>
                We opened our doors in 2003 as a small general clinic with three
                doctors and a simple goal: give this community healthcare it
                could rely on. Word travelled faster than we expected.
              </p>
              <p>
                Over the next two decades we added departments one at a time —
                always in response to what patients actually needed, from a
                dedicated maternity ward to a full cardiology unit — rather than
                growing for its own sake.
              </p>
              <p>
                Today we&apos;re a multi-specialty hospital with over 40
                specialists, but the thing that hasn&apos;t changed is the
                reason we started: care that treats you like a person, not a
                chart number.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-section-fourth p-xl">
            <svg
              viewBox="0 0 300 240"
              className="h-auto w-full"
              role="img"
              aria-label="Illustration of a hospital building"
            >
              <rect
                x="60"
                y="90"
                width="180"
                height="130"
                rx="8"
                fill="var(--color-surface)"
                stroke="var(--color-border)"
              />
              <rect
                x="80"
                y="110"
                width="24"
                height="24"
                rx="3"
                fill="var(--color-secondary)"
              />
              <rect
                x="118"
                y="110"
                width="24"
                height="24"
                rx="3"
                fill="var(--color-secondary)"
              />
              <rect
                x="156"
                y="110"
                width="24"
                height="24"
                rx="3"
                fill="var(--color-secondary)"
              />
              <rect
                x="194"
                y="110"
                width="24"
                height="24"
                rx="3"
                fill="var(--color-secondary)"
              />
              <rect
                x="80"
                y="148"
                width="24"
                height="24"
                rx="3"
                fill="var(--color-secondary)"
              />
              <rect
                x="118"
                y="148"
                width="24"
                height="24"
                rx="3"
                fill="var(--color-secondary)"
              />
              <rect
                x="156"
                y="148"
                width="24"
                height="24"
                rx="3"
                fill="var(--color-secondary)"
              />
              <rect
                x="194"
                y="148"
                width="24"
                height="24"
                rx="3"
                fill="var(--color-secondary)"
              />
              <rect
                x="130"
                y="190"
                width="40"
                height="30"
                rx="4"
                fill="var(--color-primary)"
                opacity="0.15"
              />
              <rect
                x="135"
                y="65"
                width="30"
                height="10"
                rx="2"
                fill="var(--color-danger)"
              />
              <rect
                x="145"
                y="55"
                width="10"
                height="30"
                rx="2"
                fill="var(--color-danger)"
              />
              <path
                pathLength={200}
                d="M0 220 H90 L104 195 L120 235 L134 210 H300"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-ekg"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-section-second py-3xl">
        <div className="container grid grid-cols-1 gap-lg md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-xl shadow-card">
            <div className="flex size-icon items-center justify-center rounded-md bg-primary/10 text-primary">
              <Target className="size-6" aria-hidden="true" />
            </div>
            <h2 className="mt-4 text-h4 font-semibold text-foreground">
              Our Mission
            </h2>
            <p className="mt-2 text-body text-content-secondary">
              To provide accessible, compassionate, and high-quality healthcare
              to every patient who walks through our doors — regardless of their
              background or ability to pay.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-xl shadow-card">
            <div className="flex size-icon items-center justify-center rounded-md bg-primary/10 text-primary">
              <Eye className="size-6" aria-hidden="true" />
            </div>
            <h2 className="mt-4 text-h4 font-semibold text-foreground">
              Our Vision
            </h2>
            <p className="mt-2 text-body text-content-secondary">
              To be the most trusted healthcare provider in the region,
              recognized for clinical excellence, modern technology, and care
              that puts patients first.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-background py-3xl">
        <div className="container">
          <div className="mx-auto text-center">
            <span className="text-small font-semibold uppercase tracking-wide text-primary">
              Leadership
            </span>
            <h2 className="mt-2 text-h3 font-semibold text-foreground">
              Meet the Team
            </h2>
            <p className="mt-3 text-body text-content-secondary">
              The people steering the hospital&apos;s day-to-day care and
              long-term direction.
            </p>
          </div>

          <div className="mt-xl grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-lg border border-border bg-card p-lg text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-h5 font-semibold text-primary">
                  {member.name
                    .replace("Dr. ", "")
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div className="mt-3 font-semibold text-foreground">
                  {member.name}
                </div>
                <div className="mt-1 text-small text-content-secondary">
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
