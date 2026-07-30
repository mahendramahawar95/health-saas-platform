import AppointmentForm from "@/components/appointment-form/appointment";
import { Section } from "@repo/ui";
// import { CalendarCheck, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function AppointmentSection() {
  return (
    <Section id="appointment-form">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* <div className="">
          <div
            className=" rounded-full bg-gradient-primary opacity-40 blur-3xl"
            aria-hidden="true"
          />

          <Card className="relative z-card w-full overflow-hidden shadow-lg">
            <div className="flex items-center justify-between p-md pb-0">
              <span className="inline-flex items-center rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 text-xs font-medium px-2.5 py-1">
                <span
                  className="mr-1 inline-block size-2 rounded-full bg-success animate-pulse-dot"
                  aria-hidden="true"
                />
                Live availability
              </span>
              <ShieldCheck
                className="size-icon text-primary"
                aria-hidden="true"
              />
            </div>

            <div className="flex items-center gap-sm p-md">
              <div
                className="size-14 shrink-0 rounded-full bg-gradient-secondary"
                aria-hidden="true"
              />
              <div>
                <p className="text-body font-semibold text-foreground">
                  Dr. Meera Joshi
                </p>
                <p className="text-small text-content-secondary">
                  General Physician
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-border px-md py-sm text-small">
              <span className="flex items-center gap-1 text-content-secondary">
                <CalendarCheck className="size-4" aria-hidden="true" />
                Next slot
              </span>
              <span className="font-semibold text-foreground">
                Today, 4:30 PM
              </span>
            </div>

            <svg
              viewBox="0 0 300 40"
              className="h-10 w-full px-md pb-md text-primary"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M0 20 H90 L105 4 L120 36 L135 20 H300"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={300}
                className="animate-ekg"
              />
            </svg>
          </Card>
        </div> */}
          <div className="image-appintment">
            <Image
              src="/lungs.png"
              alt="lungs"
              width={450}
              height={450}
              className="m-auto"
            />
          </div>
          <AppointmentForm />
        </div>
      </div>
    </Section>
  );
}
