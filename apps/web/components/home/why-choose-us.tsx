import { Section, SectionHeading } from "@repo/ui";
import { Activity, Siren, Stethoscope, Video } from "lucide-react";
import Image from "next/image";

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
    <Section className="glass-panel py-3xl">
      <div className="container">
        <SectionHeading
          badgeClass="bg-badge-tag p-2 text-primary font-bold"
          badgeText="Why Choose Us"
          heading="Care built around trust and speed"
          description="  From routine checkups to emergencies, our team and technology are
            set up to get you the right care without the wait."
        />
        <div className=" grid grid-cols-1 items-center gap-2xl lg:grid-cols-2">
          {/* Right: heading + feature cards */}
          <div>
            <div className=" grid grid-cols-1 gap-4">
              {features.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-gradient-first rounded-lg border-4 border-x-primary border-y-transparent bg-card p-lg shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex gap-4 items-center justify-center">
                    <div className="p-4 rounded-md bg-primary/10 text-primary">
                      <Icon className="size-8" aria-hidden="true" />
                    </div>
                    <div className="w-full">
                      <h3 className=" text-h5 font-semibold text-foreground">
                        {title}
                      </h3>
                      <p className="text-small text-content-secondary">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-xl">
            <div className="relative shadow-[8px_-8px_0px_4px_#7cd7e838] overflow-hidden border-t-10 border-r-10 border-primary/50 rounded-tl-[150px] rounded-tr-[6px] rounded-br-[150px] bg-white ">
              <Image
                src="/choose-us.jpg"
                alt="choose-us"
                className="object-cover h-full w-full"
                width={1000}
                height={1000}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
