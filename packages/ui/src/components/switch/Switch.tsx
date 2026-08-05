"use client";

import { useDirection } from "../../hooks/useDirection";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
};

// Computed in JS rather than with `translate-x-5 rtl:-translate-x-5` —
// those two utilities are both unscoped by any media query, so under
// dir="rtl" they have equal specificity and compete on whatever order
// Tailwind happens to emit them in, the same class of bug that hit the
// sidebar's mobile drawer transform. A single JS-computed transform has
// no competing rule to lose to.
export default function Switch({
  checked,
  onChange,
  label,
  description,
  disabled,
}: Props) {
  const dir = useDirection();
  const travel = 16; // px
  const offset = checked ? (dir === "rtl" ? -travel : travel) : 0;

  const track = (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${
        checked ? "bg-primary" : "bg-border"
      }`}
    >
      <span
        className="absolute start-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200"
        style={{ transform: `translateX(${offset}px)` }}
      />
    </button>
  );

  if (!label) return track;

  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 py-1">
      <span>
        <span className="block text-sm font-medium text-foreground">
          {label}
        </span>
        {description && (
          <span className="block text-xs text-muted">{description}</span>
        )}
      </span>
      {track}
    </label>
  );
}
