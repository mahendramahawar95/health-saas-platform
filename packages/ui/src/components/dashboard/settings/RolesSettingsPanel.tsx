"use client";

import { useState } from "react";
import SettingsSection from "./SettingsSection";
import Switch from "../../switch/Switch";

type PermissionKey =
  | "viewPatients"
  | "editAppointments"
  | "managePayments"
  | "manageUsers";

type Role = {
  id: string;
  name: string;
  description: string;
  permissions: Record<PermissionKey, boolean>;
};

const PERMISSION_LABELS: { key: PermissionKey; label: string }[] = [
  { key: "viewPatients", label: "View patient records" },
  { key: "editAppointments", label: "Create & edit appointments" },
  { key: "managePayments", label: "Manage payments & invoices" },
  { key: "manageUsers", label: "Manage staff users" },
];

const INITIAL_ROLES: Role[] = [
  {
    id: "admin",
    name: "Admin",
    description: "Full access to every part of the clinic dashboard.",
    permissions: {
      viewPatients: true,
      editAppointments: true,
      managePayments: true,
      manageUsers: true,
    },
  },
  {
    id: "doctor",
    name: "Doctor",
    description: "Clinical access — patients and their own appointments.",
    permissions: {
      viewPatients: true,
      editAppointments: true,
      managePayments: false,
      manageUsers: false,
    },
  },
  {
    id: "receptionist",
    name: "Receptionist",
    description: "Front-desk access for scheduling and check-ins.",
    permissions: {
      viewPatients: true,
      editAppointments: true,
      managePayments: false,
      manageUsers: false,
    },
  },
  {
    id: "billing",
    name: "Billing",
    description: "Handles invoices and payments only.",
    permissions: {
      viewPatients: false,
      editAppointments: false,
      managePayments: true,
      manageUsers: false,
    },
  },
];

export default function RolesSettingsPanel() {
  const [roles, setRoles] = useState<Role[]>(INITIAL_ROLES);

  function togglePermission(roleId: string, key: PermissionKey) {
    return (checked: boolean) => {
      setRoles((prev) =>
        prev.map((r) =>
          r.id === roleId
            ? { ...r, permissions: { ...r.permissions, [key]: checked } }
            : r,
        ),
      );
    };
  }

  return (
    <div className="flex flex-col gap-4">
      {roles.map((role) => (
        <SettingsSection
          key={role.id}
          title={role.name}
          description={role.description}
        >
          <div className="divide-y divide-border">
            {PERMISSION_LABELS.map(({ key, label }) => (
              <Switch
                key={key}
                label={label}
                checked={role.permissions[key]}
                onChange={togglePermission(role.id, key)}
                disabled={role.id === "admin"}
              />
            ))}
          </div>
        </SettingsSection>
      ))}
    </div>
  );
}
