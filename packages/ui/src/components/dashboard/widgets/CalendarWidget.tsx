"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CalendarAppointment = {
  day: number;
  patient: string;
  time: string;
};

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

const MONTH_FORMATTER = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
});

function getSampleAppointments(
  referenceDate: Date,
  daysInMonth: number,
): CalendarAppointment[] {
  const today = referenceDate.getDate();
  const clamp = (d: number) => Math.min(Math.max(d, 1), daysInMonth);

  return [
    { day: clamp(today), patient: "Ava Whitman", time: "9:00 AM" },
    { day: clamp(today), patient: "Marcus Lee", time: "9:45 AM" },
    { day: clamp(today + 3), patient: "Priya Nair", time: "10:15 AM" },
    { day: clamp(today + 7), patient: "Tom Alvarez", time: "11:00 AM" },
    { day: clamp(today + 7), patient: "Grace Kim", time: "1:30 PM" },
    { day: clamp(today + 12), patient: "Liam Foster", time: "3:00 PM" },
  ];
}

export default function CalendarWidget() {
  const today = useMemo(() => new Date(), []);
  const [viewDate, setViewDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstWeekday = new Date(year, month, 1).getDay();
  const isCurrentMonth =
    year === today.getFullYear() && month === today.getMonth();

  const appointments = useMemo(
    () => (isCurrentMonth ? getSampleAppointments(today, daysInMonth) : []),
    [isCurrentMonth, today, daysInMonth],
  );

  const appointmentDays = useMemo(
    () => new Set(appointments.map((a) => a.day)),
    [appointments],
  );
  const selectedAppointments = appointments.filter(
    (a) => a.day === selectedDay,
  );

  function goToMonth(offset: number) {
    const next = new Date(year, month + offset, 1);
    setViewDate(next);
    setSelectedDay(1);
  }

  return (
    <div className="animate-fade-up rounded-card border border-border bg-surface p-5 shadow-card-soft">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-bold">
          {MONTH_FORMATTER.format(viewDate)}
        </h2>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => goToMonth(-1)}
            aria-label="Previous month"
            className="hover-lift flex h-8 w-8 items-center justify-center rounded-md text-muted hover:bg-secondary hover:text-primary"
          >
            <ChevronLeft size={16} className="rtl:rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => goToMonth(1)}
            aria-label="Next month"
            className="hover-lift flex h-8 w-8 items-center justify-center rounded-md text-muted hover:bg-secondary hover:text-primary"
          >
            <ChevronRight size={16} className="rtl:rotate-180" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {WEEKDAYS.map((d, i) => (
          <div
            key={i}
            className="py-1 text-center text-xs font-semibold text-muted"
          >
            {d}
          </div>
        ))}

        {Array.from({ length: firstWeekday }).map((_, i) => (
          <div key={`blank-${i}`} />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const isToday = isCurrentMonth && day === today.getDate();
          const isSelected = day === selectedDay;
          const hasAppointment = appointmentDays.has(day);

          return (
            <button
              key={day}
              type="button"
              onClick={() => setSelectedDay(day)}
              className={`flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md text-sm transition-colors duration-150
                ${isSelected ? "bg-primary text-white" : isToday ? "border border-primary text-primary" : "text-foreground hover:bg-secondary"}
              `}
            >
              <span>{day}</span>
              {hasAppointment && (
                <span
                  className={`h-1 w-1 rounded-full ${isSelected ? "bg-white/80" : "bg-accent"}`}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-4 border-t border-border pt-4">
        <h3 className="mb-2 text-sm font-semibold">
          Appointments · {MONTH_FORMATTER.format(viewDate).split(" ")[0]}{" "}
          {selectedDay}
        </h3>

        {selectedAppointments.length > 0 ? (
          <div className="flex flex-col gap-2">
            {selectedAppointments.map((a, i) => (
              <div
                key={i}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="font-medium">{a.patient}</span>
                </div>
                <span className="text-xs text-muted">{a.time}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted">No appointments on this day.</p>
        )}
      </div>
    </div>
  );
}
