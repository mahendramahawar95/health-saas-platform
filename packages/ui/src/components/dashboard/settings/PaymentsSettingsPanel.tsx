"use client";

import { useState } from "react";
import { Hash } from "lucide-react";
import SettingsSection from "./SettingsSection";
import Switch from "../../switch/Switch";
import { Input } from "../../../input";

const CURRENCIES = ["USD ($)", "EUR (€)", "GBP (£)", "INR (₹)"];
const GATEWAYS = ["Stripe", "PayPal", "Razorpay", "Manual / Offline"];

export default function PaymentsSettingsPanel() {
  const [values, setValues] = useState({
    currency: CURRENCIES[0],
    gateway: GATEWAYS[0],
    taxRate: "8",
    invoicePrefix: "VIT-",
  });

  const [toggles, setToggles] = useState({
    onlinePayments: true,
    requireAtBooking: false,
  });

  function updateToggle(key: keyof typeof toggles) {
    return (checked: boolean) =>
      setToggles((prev) => ({ ...prev, [key]: checked }));
  }

  return (
    <SettingsSection
      title="Payments"
      description="Set how the clinic accepts and invoices payments."
      footer={
        <button
          type="button"
          className="rounded-button bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
        >
          Save Changes
        </button>
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Currency
          </label>
          <select
            value={values.currency}
            onChange={(e) =>
              setValues((p) => ({ ...p, currency: e.target.value }))
            }
            className="h-10 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            {CURRENCIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Payment Gateway
          </label>
          <select
            value={values.gateway}
            onChange={(e) =>
              setValues((p) => ({ ...p, gateway: e.target.value }))
            }
            className="h-10 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            {GATEWAYS.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label="Tax Rate (%)"
          type="number"
          leftIcon={<Hash size={16} />}
          value={values.taxRate}
          onChange={(e) =>
            setValues((p) => ({ ...p, taxRate: e.target.value }))
          }
        />
        <Input
          label="Invoice Prefix"
          value={values.invoicePrefix}
          onChange={(e) =>
            setValues((p) => ({ ...p, invoicePrefix: e.target.value }))
          }
        />
      </div>

      <div className="mt-2 divide-y divide-border border-t border-border pt-1">
        <Switch
          label="Enable online payments"
          description="Allow patients to pay for appointments online."
          checked={toggles.onlinePayments}
          onChange={updateToggle("onlinePayments")}
        />
        <Switch
          label="Require payment at booking"
          description="Patients must pay before an appointment is confirmed."
          checked={toggles.requireAtBooking}
          onChange={updateToggle("requireAtBooking")}
        />
      </div>
    </SettingsSection>
  );
}
