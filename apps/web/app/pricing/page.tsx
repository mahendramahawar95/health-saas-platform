import Link from "next/link";
import { Check } from "lucide-react";

type Package = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  featured?: boolean;
};

const packages: Package[] = [
  {
    name: "Basic Checkup",
    price: "₹999",
    cadence: "/ visit",
    description: "A quick baseline screening for general wellness.",
    features: [
      "Blood pressure & sugar test",
      "Complete blood count (CBC)",
      "BMI & vitals assessment",
      "General physician consult",
    ],
  },
  {
    name: "Executive",
    price: "₹2,499",
    cadence: "/ visit",
    description: "A thorough checkup for working professionals.",
    features: [
      "Everything in Basic Checkup",
      "ECG & chest X-ray",
      "Lipid profile & liver function test",
      "Specialist consultation",
      "Detailed health report",
    ],
    featured: true,
  },
  {
    name: "Family",
    price: "₹4,999",
    cadence: "/ 4 members",
    description: "Shared screening plan for up to four family members.",
    features: [
      "Covers up to 4 members",
      "Full body checkup per member",
      "Pediatric & vaccination review",
      "Dedicated family health coordinator",
    ],
  },
  {
    name: "Senior Citizen",
    price: "₹1,799",
    cadence: "/ visit",
    description: "Screening tailored to age-related health risks.",
    features: [
      "Bone density & vision screening",
      "Cardiac risk assessment",
      "Diabetes & thyroid panel",
      "Home sample collection",
    ],
  },
];

export default function Page() {
  return (
    <section className="bg-section-first py-3xl">
      <div className="container">
        <div className="mx-auto text-center">
          <span className="text-small font-semibold uppercase tracking-wide text-primary">
            Pricing
          </span>
          <h2 className="mt-2 text-h2 font-semibold text-foreground">
            Healthcare Packages
          </h2>
          <p className="mt-3 text-body text-content-secondary">
            Straightforward pricing for checkups that fit your stage of life.
          </p>
        </div>

        <div className="mt-xl grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-lg border p-lg shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                pkg.featured
                  ? "border-primary bg-card lg:-translate-y-2"
                  : "border-border bg-card"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-xs font-medium text-background">
                  Most Popular
                </span>
              )}

              <h3 className="text-h5 font-semibold text-foreground">
                {pkg.name}
              </h3>
              <p className="mt-1 text-small text-content-secondary">
                {pkg.description}
              </p>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-h3 font-semibold text-foreground">
                  {pkg.price}
                </span>
                <span className="text-small text-content-secondary">
                  {pkg.cadence}
                </span>
              </div>

              <ul className="mt-lg flex flex-1 flex-col gap-2.5">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-small text-foreground"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/appointments/book"
                className={`mt-lg inline-flex items-center justify-center rounded-md px-5 py-2.5 text-small font-medium no-underline transition-colors duration-300 ${
                  pkg.featured
                    ? "bg-primary text-background hover:opacity-90"
                    : "border border-primary text-primary hover:bg-primary hover:text-background"
                }`}
              >
                Book Package
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
