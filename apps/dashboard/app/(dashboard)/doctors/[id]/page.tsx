import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeft,
  Mail,
  Phone,
  Stethoscope,
  Pencil,
  Users,
} from "lucide-react";
import { SAMPLE_DOCTORS, DOCTOR_STATUS_CLASSES } from "@repo/ui";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function DoctorDetailsPage({ params }: Props) {
  const { id } = await params;
  const doctor = SAMPLE_DOCTORS.find((d) => d.id === id);

  if (!doctor) {
    notFound();
  }

  const initials = doctor.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="flex flex-col gap-4">
      <Link
        href="/doctors"
        className="flex w-fit items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
      >
        <ChevronLeft size={16} className="rtl:rotate-180" />
        Back to Doctors
      </Link>

      <div className="animate-fade-up rounded-card border border-border bg-surface p-6 shadow-card-soft">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-5">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-card-bg text-lg font-semibold">
              {initials}
            </div>
            <div>
              <h1 className="text-xl font-bold">{doctor.name}</h1>
              <p className="text-sm text-muted">{doctor.specialty}</p>
              <span
                className={`mt-1 inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${DOCTOR_STATUS_CLASSES[doctor.status]}`}
              >
                {doctor.status}
              </span>
            </div>
          </div>

          <Link
            href={`/doctors?edit=${doctor.id}`}
            className="flex items-center gap-2 rounded-button border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <Pencil size={15} />
            Edit Doctor
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 pt-5 sm:grid-cols-2">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-secondary">
              <Stethoscope size={16} className="text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted">Specialty</div>
              <div className="text-sm font-semibold">{doctor.specialty}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-secondary">
              <Mail size={16} className="text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted">Email</div>
              <div className="text-sm font-semibold">{doctor.email}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-secondary">
              <Phone size={16} className="text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted">Phone</div>
              <div className="text-sm font-semibold">{doctor.phone}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-secondary">
              <Users size={16} className="text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted">Patients Today</div>
              <div className="text-sm font-semibold">
                {doctor.patientsToday}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
