/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useDirection } from "../../../hooks/useDirection";

type RangeKey = "week" | "month";

const DATA: Record<RangeKey, { label: string; revenue: number }[]> = {
  week: [
    { label: "Mon", revenue: 4200 },
    { label: "Tue", revenue: 5100 },
    { label: "Wed", revenue: 4800 },
    { label: "Thu", revenue: 6300 },
    { label: "Fri", revenue: 5800 },
    { label: "Sat", revenue: 3100 },
    { label: "Sun", revenue: 2400 },
  ],
  month: [
    { label: "W1", revenue: 21400 },
    { label: "W2", revenue: 24800 },
    { label: "W3", revenue: 23100 },
    { label: "W4", revenue: 27600 },
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
        ${payload[0].value.toLocaleString()}
      </div>
    </div>
  );
}

export default function RevenueChartCard() {
  const [range, setRange] = useState<RangeKey>("week");
  const dir = useDirection();
  const data = DATA[range];
  const total = data.reduce((sum, d) => sum + d.revenue, 0);

  return (
    <div className="animate-fade-up rounded-card border border-border bg-surface p-5 shadow-card-soft">
      <div className="mb-1 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold">Revenue</h2>
          <p className="text-xs text-muted">
            ${total.toLocaleString()} total this {range}
          </p>
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
        <span className="h-2 w-2 rounded-full bg-accent" />
        Revenue
      </div>

      {/* key={dir} forces a remount when direction flips — recharts caches
          layout internally and won't always re-measure the reversed axis
          from a prop change alone. */}
      <div className="mt-2 h-[240px] w-full" dir={dir}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            key={dir}
            data={data}
            margin={{ top: 10, right: 12, left: 12, bottom: 0 }}
            barCategoryGap="28%"
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
              width={44}
              tickFormatter={(v) => `$${v >= 1000 ? `${v / 1000}k` : v}`}
            />
            <Tooltip
              content={<ChartTooltip />}
              cursor={{ fill: "var(--color-secondary)" }}
            />
            <Bar
              dataKey="revenue"
              fill="var(--color-accent)"
              radius={[6, 6, 0, 0]}
              isAnimationActive
              animationDuration={700}
              maxBarSize={36}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
