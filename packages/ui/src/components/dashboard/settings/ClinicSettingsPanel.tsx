"use client";

import { useState } from "react";
import { Building2, MapPin, Phone, Globe } from "lucide-react";
import { Input } from "../../../input";
import SettingsSection from "../settings/SettingsSection";

export default function ClinicSettingsPanel() {
  const [name, setName] = useState("Vitalis Health Clinic");
  const [address, setAddress] = useState("204 Riverside Ave, Jaipur, RJ");
  const [phone, setPhone] = useState("+91 141 234 5678");
  const [website, setWebsite] = useState("https://vitalis.health");
  const [opensAt, setOpensAt] = useState("09:00");
  const [closesAt, setClosesAt] = useState("18:00");

  return (
    <SettingsSection
      title="Clinic"
      description="Profile details shown to patients and on invoices."
      footer={
        <button className="rounded-button bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90">
          Save Changes
        </button>
      }
    >
      <Input
        label="Clinic Name"
        leftIcon={<Building2 size={16} />}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Address"
        leftIcon={<MapPin size={16} />}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input
          label="Phone"
          type="tel"
          leftIcon={<Phone size={16} />}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          label="Website"
          leftIcon={<Globe size={16} />}
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium">
          Working Hours
        </label>
        <div className="flex items-center gap-3">
          <input
            type="time"
            value={opensAt}
            onChange={(e) => setOpensAt(e.target.value)}
            className="h-10 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <span className="text-sm text-muted">to</span>
          <input
            type="time"
            value={closesAt}
            onChange={(e) => setClosesAt(e.target.value)}
            className="h-10 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
    </SettingsSection>
  );
}
