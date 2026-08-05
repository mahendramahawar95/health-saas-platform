import { CalendarWidget } from "@repo/ui";

export default function CalendarPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-bold">Calendar</h1>
        <p className="text-sm text-muted">Browse appointments by date.</p>
      </div>
      <div className="">
        <CalendarWidget />
      </div>
    </div>
  );
}
