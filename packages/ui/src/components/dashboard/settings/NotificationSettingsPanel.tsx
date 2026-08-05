"use client";

import { useState } from "react";
import Switch from "../../switch/Switch";
import SettingsSection from "../settings/SettingsSection";

type NotificationKey =
  | "email"
  | "sms"
  | "newAppointment"
  | "cancellation"
  | "paymentReceived"
  | "weeklySummary";

const ROWS: { key: NotificationKey; label: string; description: string }[] = [
  {
    key: "email",
    label: "Email notifications",
    description: "Receive notifications via email.",
  },
  {
    key: "sms",
    label: "SMS notifications",
    description: "Receive notifications via text message.",
  },
  {
    key: "newAppointment",
    label: "New appointment alerts",
    description: "Notify when a patient books.",
  },
  {
    key: "cancellation",
    label: "Cancellation alerts",
    description: "Notify when an appointment is cancelled.",
  },
  {
    key: "paymentReceived",
    label: "Payment received alerts",
    description: "Notify when a payment comes in.",
  },
  {
    key: "weeklySummary",
    label: "Weekly summary email",
    description: "A digest of the week's activity.",
  },
];

export default function NotificationSettingsPanel() {
  const [values, setValues] = useState<Record<NotificationKey, boolean>>({
    email: true,
    sms: false,
    newAppointment: true,
    cancellation: true,
    paymentReceived: true,
    weeklySummary: false,
  });

  return (
    <SettingsSection
      title="Notifications"
      description="Choose what you want to be notified about, and how."
      footer={
        <button className="rounded-button bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90">
          Save Changes
        </button>
      }
    >
      <div className="flex flex-col divide-y divide-border">
        {ROWS.map((row) => (
          <div key={row.key} className="py-1 first:pt-0 last:pb-0">
            <Switch
              label={row.label}
              description={row.description}
              checked={values[row.key]}
              onChange={(checked) =>
                setValues((prev) => ({ ...prev, [row.key]: checked }))
              }
            />
          </div>
        ))}
      </div>
    </SettingsSection>
  );
}
