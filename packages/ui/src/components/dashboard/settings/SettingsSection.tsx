type Props = {
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export default function SettingsSection({
  title,
  description,
  children,
  footer,
}: Props) {
  return (
    <div className="animate-fade-up rounded-card border border-border bg-surface shadow-card-soft">
      <div className="border-b border-border px-6 py-5">
        <h2 className="text-base font-bold">{title}</h2>
        {description && (
          <p className="mt-1 text-sm text-muted">{description}</p>
        )}
      </div>
      <div className="flex flex-col gap-5 px-6 py-6">{children}</div>
      {footer && (
        <div className="flex justify-end gap-2 border-t border-border px-6 py-4">
          {footer}
        </div>
      )}
    </div>
  );
}
