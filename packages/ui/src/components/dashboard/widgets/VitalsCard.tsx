import DoctorProgress from "./DoctorProgress";

type Doctor = { name: string; initials: string; load: number };

type Props = {
  doctors: Doctor[];
  bpm?: number;
  ward?: string;
};

export default function VitalsCard({
  doctors,
  bpm = 78,
  ward = "ICU · Bed 4",
}: Props) {
  return (
    <div className="animate-fade-up flex flex-col rounded-card border border-border bg-surface p-5 shadow-card-soft">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-base font-bold">Live Ward Vitals</h2>
        <span className="animate-pulse-dot h-2 w-2 rounded-full bg-success" />
      </div>
      <p className="mb-3 text-xs text-muted">Average heart rate, {ward}</p>

      <svg viewBox="0 0 300 90" className="h-[90px] w-full">
        <polyline
          className="animate-ekg"
          points="0,45 40,45 55,15 70,75 85,45 130,45 145,25 160,65 175,45 300,45"
          fill="none"
          stroke="var(--color-success)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="mb-4 mt-2 flex items-center justify-between">
        <span className="text-2xl font-bold">
          {bpm} <span className="text-xs font-medium text-muted">bpm</span>
        </span>
        <span className="text-xs font-semibold text-success">Stable</span>
      </div>

      <div className="mt-auto flex flex-col gap-3 border-t border-border pt-4">
        {doctors.map((d) => (
          <DoctorProgress key={d.name} {...d} />
        ))}
      </div>
    </div>
  );
}
