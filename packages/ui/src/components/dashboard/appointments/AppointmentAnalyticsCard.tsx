/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useDirection } from "../../../hooks/useDirection";

type RangeKey = "week" | "month";

const DATA: Record<RangeKey, { label: string; appointments: number }[]> = {
  week: [
    { label: "Mon", appointments: 18 },
    { label: "Tue", appointments: 24 },
    { label: "Wed", appointments: 21 },
    { label: "Thu", appointments: 29 },
    { label: "Fri", appointments: 26 },
    { label: "Sat", appointments: 14 },
    { label: "Sun", appointments: 9 },
  ],
  month: [
    { label: "W1", appointments: 96 },
    { label: "W2", appointments: 112 },
    { label: "W3", appointments: 104 },
    { label: "W4", appointments: 128 },
  ],
};

const RANGES: { key: RangeKey; label: string }[] = [
  { key: "week", label: "This Week" },
  { key: "month", label: "This Month" },
];

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md border border-border bg-surface px-3 py-2 shadow-card-soft">
      <div className="text-xs text-muted">{label}</div>
      <div className="text-sm font-semibold text-foreground">
        {payload[0].value} appointments
      </div>
    </div>
  );
}

export default function AppointmentAnalyticsCard() {
  const [range, setRange] = useState<RangeKey>("week");
  const dir = useDirection();
  const data = DATA[range];

  return (
    <div className="animate-fade-up rounded-card border border-border bg-surface p-5 shadow-card-soft">
      <div className="mb-1 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold">Appointment Analytics</h2>
          <p className="text-xs text-muted">Volume trend over time</p>
        </div>

        <div className="flex items-center gap-1 rounded-button border border-border bg-secondary p-1">
          {RANGES.map((r) => (
            <button
              key={r.key}
              onClick={() => setRange(r.key)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-150 ${
                range === r.key
                  ? "bg-primary text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-muted">
        <span className="h-2 w-2 rounded-full bg-primary" />
        Appointments
      </div>

      {/* key={dir} forces a clean remount when direction flips, since
          recharts caches layout internally and won't always re-measure
          the reversed axis on its own. */}
      <div className="mt-2 h-[240px] w-full" dir={dir}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            key={dir}
            data={data}
            margin={{ top: 10, right: 12, left: 12, bottom: 0 }}
          >
            <CartesianGrid stroke="var(--color-border)" vertical={false} />
            <XAxis
              dataKey="label"
              reversed={dir === "rtl"}
              orientation="bottom"
              tick={{ fill: "var(--color-muted)", fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: "var(--color-border)" }}
            />
            <YAxis
              orientation={dir === "rtl" ? "right" : "left"}
              tick={{ fill: "var(--color-muted)", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              width={32}
            />
            <Tooltip
              content={<ChartTooltip />}
              cursor={{ stroke: "var(--color-border)" }}
            />
            <Line
              type="monotone"
              dataKey="appointments"
              stroke="var(--color-primary)"
              strokeWidth={2.5}
              dot={{ r: 3, fill: "var(--color-primary)", strokeWidth: 0 }}
              activeDot={{ r: 5 }}
              isAnimationActive
              animationDuration={700}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
