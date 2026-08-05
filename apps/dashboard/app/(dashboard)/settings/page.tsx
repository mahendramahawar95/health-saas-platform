"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  SettingsNav,
  GeneralSettingsPanel,
  ClinicSettingsPanel,
  NotificationSettingsPanel,
  type SettingsTabKey,
} from "@repo/ui";

function SettingsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = (searchParams.get("tab") as SettingsTabKey) || "general";

  function goToTab(key: SettingsTabKey) {
    router.push(key === "general" ? "/settings" : `/settings?tab=${key}`);
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-bold">Settings</h1>
        <p className="text-sm text-muted">
          Manage your account and clinic preferences.
        </p>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row lg:items-start">
        <SettingsNav active={active} onChange={goToTab} />

        <div className="min-w-0 flex-1">
          {active === "general" && <GeneralSettingsPanel />}
          {active === "clinic" && <ClinicSettingsPanel />}
          {active === "notifications" && <NotificationSettingsPanel />}
        </div>
      </div>
    </div>
  );
}

export default function SettingsPage() {
  return (
    <Suspense fallback={null}>
      <SettingsPageContent />
    </Suspense>
  );
}
