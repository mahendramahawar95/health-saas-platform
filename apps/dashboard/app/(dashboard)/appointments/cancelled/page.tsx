import { AppointmentsTable, SAMPLE_APPOINTMENTS } from "@repo/ui";

export default async function Page() {
  const cancelled = SAMPLE_APPOINTMENTS.filter((a) => a.status === "Cancelled");

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-bold">Cancelled Appointments</h1>
        <p className="text-sm text-muted">Appointments that were called off.</p>
      </div>
      <AppointmentsTable data={cancelled} />
    </div>
  );
}
