"use client";

import { useState } from "react";
import {
  SettingsNav,
  GeneralSettingsPanel,
  ClinicSettingsPanel,
  NotificationSettingsPanel,
  EmailSettingsPanel,
  PaymentsSettingsPanel,
  AppearanceSettingsPanel,
  UsersSettingsPanel,
  RolesSettingsPanel,
  type SettingsTabKey,
} from "@repo/ui";

export default function SettingsPage() {
  const [active, setActive] = useState<SettingsTabKey>("general");

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-bold">Settings</h1>
        <p className="text-sm text-muted">
          Manage your account and clinic preferences.
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row! lg:items-start">
        <SettingsNav active={active} onChange={setActive} />

        <div className="min-w-0 flex-1">
          {active === "general" && <GeneralSettingsPanel />}
          {active === "clinic" && <ClinicSettingsPanel />}
          {active === "notifications" && <NotificationSettingsPanel />}
          {active === "email" && <EmailSettingsPanel />}
          {active === "payments" && <PaymentsSettingsPanel />}
          {active === "appearance" && <AppearanceSettingsPanel />}
          {active === "users" && <UsersSettingsPanel />}
          {active === "roles" && <RolesSettingsPanel />}
        </div>
      </div>
    </div>
  );
}
