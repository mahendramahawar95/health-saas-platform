"use client";

import { useState } from "react";
import SettingsSection from "../settings/SettingsSection";

export default function GeneralSettingsPanel() {
  const [language, setLanguage] = useState("English");
  const [timezone, setTimezone] = useState("(GMT+5:30) Asia/Kolkata");
  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");
  const [timeFormat, setTimeFormat] = useState("12-hour");

  const selectClass =
    "h-10 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <SettingsSection
      title="General"
      description="Language, timezone, and formatting preferences for the whole app."
      footer={
        <button className="rounded-button bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90">
          Save Changes
        </button>
      }
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Language</label>
          <select
            className={selectClass}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Arabic</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">Timezone</label>
          <select
            className={selectClass}
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          >
            <option>(GMT+5:30) Asia/Kolkata</option>
            <option>(GMT+0:00) UTC</option>
            <option>(GMT-5:00) America/New_York</option>
            <option>(GMT+4:00) Asia/Dubai</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Date Format
          </label>
          <select
            className={selectClass}
            value={dateFormat}
            onChange={(e) => setDateFormat(e.target.value)}
          >
            <option>DD/MM/YYYY</option>
            <option>MM/DD/YYYY</option>
            <option>YYYY-MM-DD</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Time Format
          </label>
          <select
            className={selectClass}
            value={timeFormat}
            onChange={(e) => setTimeFormat(e.target.value)}
          >
            <option>12-hour</option>
            <option>24-hour</option>
          </select>
        </div>
      </div>
    </SettingsSection>
  );
}
