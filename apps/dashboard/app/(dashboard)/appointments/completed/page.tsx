import { AppointmentsTable, SAMPLE_APPOINTMENTS } from "@repo/ui";

export default function CompletedAppointmentsPage() {
  const completed = SAMPLE_APPOINTMENTS.filter((a) => a.status === "Completed");

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-bold">Completed Appointments</h1>
        <p className="text-sm text-muted">
          Visits that have already taken place.
        </p>
      </div>
      <AppointmentsTable data={completed} />=
    </div>
  );
}
