import { AppointmentsTable, SAMPLE_APPOINTMENTS } from "@repo/ui";

export default function UpcomingAppointmentsPage() {
  const upcoming = (
    Array.isArray(SAMPLE_APPOINTMENTS) ? SAMPLE_APPOINTMENTS : []
  ).filter((a) => a.status === "Confirmed" || a.status === "Waiting");

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-bold">Upcoming Appointments</h1>
        <p className="text-sm text-muted">
          Confirmed and pending appointments.
        </p>
      </div>
      <AppointmentsTable data={upcoming} />
    </div>
  );
}
