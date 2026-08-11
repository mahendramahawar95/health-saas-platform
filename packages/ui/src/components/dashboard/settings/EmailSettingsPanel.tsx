"use client";

import { useState } from "react";
import { User, Mail } from "lucide-react";
import SettingsSection from "./SettingsSection";
import { Input } from "../../../input";
import Switch from "../../switch/Switch";

export default function EmailSettingsPanel() {
  const [sender, setSender] = useState({
    name: "Vitalis Clinic",
    email: "no-reply@vitalis.health",
    replyTo: "support@vitalis.health",
  });

  const [toggles, setToggles] = useState({
    bookingConfirmations: true,
    reminders: true,
    cancellations: true,
    marketing: false,
  });

  function updateToggle(key: keyof typeof toggles) {
    return (checked: boolean) =>
      setToggles((prev) => ({ ...prev, [key]: checked }));
  }

  return (
    <SettingsSection
      title="Email"
      description="Configure the identity emails are sent from and which automated emails go out."
      footer={
        <button
          type="button"
          className="rounded-button bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
        >
          Save Changes
        </button>
      }
    >
      <Input
        label="Sender Name"
        leftIcon={<User size={16} />}
        value={sender.name}
        onChange={(e) => setSender((p) => ({ ...p, name: e.target.value }))}
      />
      <Input
        label="Sender Email"
        type="email"
        leftIcon={<Mail size={16} />}
        value={sender.email}
        onChange={(e) => setSender((p) => ({ ...p, email: e.target.value }))}
      />
      <Input
        label="Reply-To Email"
        type="email"
        leftIcon={<Mail size={16} />}
        value={sender.replyTo}
        onChange={(e) => setSender((p) => ({ ...p, replyTo: e.target.value }))}
      />

      <div className="mt-2 divide-y divide-border border-t border-border pt-1">
        <Switch
          label="Booking confirmations"
          description="Send an email when an appointment is booked."
          checked={toggles.bookingConfirmations}
          onChange={updateToggle("bookingConfirmations")}
        />
        <Switch
          label="Appointment reminders"
          description="Send a reminder email ahead of scheduled visits."
          checked={toggles.reminders}
          onChange={updateToggle("reminders")}
        />
        <Switch
          label="Cancellations"
          description="Notify patients by email when a visit is cancelled."
          checked={toggles.cancellations}
          onChange={updateToggle("cancellations")}
        />
        <Switch
          label="Marketing emails"
          description="Occasional clinic updates and promotions."
          checked={toggles.marketing}
          onChange={updateToggle("marketing")}
        />
      </div>
    </SettingsSection>
  );
}
