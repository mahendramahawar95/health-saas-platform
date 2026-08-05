"use client";

import { SETTINGS_TABS, type SettingsTabKey } from "./settings-tabs";

type Props = {
  active: SettingsTabKey;
  onChange: (key: SettingsTabKey) => void;
};

export default function SettingsNav({ active, onChange }: Props) {
  return (
    <nav className="flex shrink-0 flex-col gap-1 rounded-card border border-border bg-surface p-2 shadow-card-soft lg:w-56">
      {SETTINGS_TABS.map((tab) => {
        const Icon = tab.icon;
        const isActive = active === tab.key;
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onChange(tab.key)}
            className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-start text-sm font-medium transition-colors duration-150 ${
              isActive
                ? "bg-primary text-white"
                : "text-foreground hover:bg-secondary"
            }`}
          >
            <Icon size={17} className="shrink-0" />
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}
