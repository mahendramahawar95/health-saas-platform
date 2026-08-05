type Props = {
  name: string;
  initials: string;
  load: number;
};

export default function DoctorProgress({ name, initials, load }: Props) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
        {initials}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <span className="truncate text-sm font-semibold">{name}</span>
          <span className="text-xs text-muted">{load}%</span>
        </div>
        <div className="progress-track mt-1">
          <div
            className="progress-bar"
            style={{ "--progress": `${load}%` } as React.CSSProperties}
          />
        </div>
      </div>
    </div>
  );
}
