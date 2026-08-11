"use client";

import { useState } from "react";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import Switch from "../../switch/Switch";
import SettingsSection from "./SettingsSection";

type Theme = "light" | "dark" | "system";

const THEMES: { key: Theme; label: string; icon: typeof Sun }[] = [
  { key: "light", label: "Light", icon: Sun },
  { key: "dark", label: "Dark", icon: Moon },
  { key: "system", label: "System", icon: Monitor },
];

const ACCENTS = [
  { name: "Amber", value: "oklch(76.9% 0.188 70.08)" },
  { name: "Blue", value: "oklch(0.55 0.15 255)" },
  { name: "Green", value: "oklch(72.3% 0.219 149.579)" },
  { name: "Rose", value: "oklch(0.64 0.2 15)" },
  { name: "Violet", value: "oklch(0.55 0.2 300)" },
];

export default function AppearanceSettingsPanel() {
  const [theme, setTheme] = useState<Theme>("light");
  const initialAccent = ACCENTS[0]?.value ?? "";
  const [accent, setAccent] = useState(initialAccent);
  const [toggles, setToggles] = useState({
    compactMode: false,
    sidebarAlwaysExpanded: true,
  });

  function updateToggle(key: keyof typeof toggles) {
    return (checked: boolean) =>
      setToggles((prev) => ({ ...prev, [key]: checked }));
  }

  return (
    <SettingsSection
      title="Appearance"
      description="Customize how the dashboard looks for your account."
      footer={
        <button
          type="button"
          className="rounded-button bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
        >
          Save Changes
        </button>
      }
    >
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          Theme
        </label>
        <div className="flex w-fit items-center gap-1 rounded-button border border-border bg-secondary p-1">
          {THEMES.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setTheme(t.key)}
                className={`flex items-center gap-2 rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors duration-150 ${
                  theme === t.key
                    ? "bg-primary text-white"
                    : "text-muted hover:text-foreground"
                }`}
              >
                <Icon size={15} />
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          Accent Color
        </label>
        <div className="flex items-center gap-2">
          {ACCENTS.map((a) => (
            <button
              key={a.name}
              type="button"
              title={a.name}
              onClick={() => setAccent(a.value)}
              className="flex h-8 w-8 items-center justify-center rounded-full transition-shadow"
              style={{
                backgroundColor: a.value,
                boxShadow:
                  accent === a.value
                    ? "0 0 0 2px var(--color-surface), 0 0 0 4px var(--color-foreground)"
                    : "none",
              }}
            >
              {accent === a.value && <Check size={14} className="text-white" />}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-2 divide-y divide-border border-t border-border pt-1">
        <Switch
          label="Compact mode"
          description="Reduce padding and row heights across tables and lists."
          checked={toggles.compactMode}
          onChange={updateToggle("compactMode")}
        />
        <Switch
          label="Keep sidebar expanded"
          description="Always show nav labels instead of collapsing to icons only."
          checked={toggles.sidebarAlwaysExpanded}
          onChange={updateToggle("sidebarAlwaysExpanded")}
        />
      </div>
    </SettingsSection>
  );
}
