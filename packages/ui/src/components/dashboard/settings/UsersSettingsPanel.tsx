"use client";

import { useState } from "react";
import { Mail, UserPlus, X } from "lucide-react";
import SettingsSection from "./SettingsSection";
import { Input } from "../../../input";

type StaffUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Invited";
};

const ROLE_OPTIONS = ["Admin", "Doctor", "Receptionist", "Billing"];

const INITIAL_USERS: StaffUser[] = [
  {
    id: "u1",
    name: "Dr. Ray Simmons",
    email: "ray.simmons@vitalis.health",
    role: "Admin",
    status: "Active",
  },
  {
    id: "u2",
    name: "Elena Reyes",
    email: "elena.reyes@vitalis.health",
    role: "Doctor",
    status: "Active",
  },
  {
    id: "u3",
    name: "Priya Shah",
    email: "priya.shah@vitalis.health",
    role: "Receptionist",
    status: "Active",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function UsersSettingsPanel() {
  const [users, setUsers] = useState<StaffUser[]>(INITIAL_USERS);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState<string>(
    ROLE_OPTIONS[2] ?? "Receptionist",
  );

  function handleInvite(e: React.FormEvent) {
    e.preventDefault();
    const normalizedEmail = inviteEmail.trim();
    if (!normalizedEmail) return;

    const inviteName = normalizedEmail.split("@")[0] ?? normalizedEmail;

    setUsers((prev) => [
      ...prev,
      {
        id: `u-${Date.now()}`,
        name: inviteName,
        email: normalizedEmail,
        role: inviteRole,
        status: "Invited",
      },
    ]);
    setInviteEmail("");
  }

  function removeUser(id: string) {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  }

  return (
    <SettingsSection
      title="Users"
      description="Manage staff accounts that can sign in to this dashboard."
    >
      <form
        onSubmit={handleInvite}
        className="flex flex-col gap-3 sm:flex-row sm:items-end"
      >
        <div className="flex-1">
          <Input
            label="Invite by email"
            type="email"
            leftIcon={<Mail size={16} />}
            placeholder="name@clinic.com"
            value={inviteEmail}
            onChange={(e) => setInviteEmail(e.target.value)}
          />
        </div>
        <div className="sm:w-40">
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Role
          </label>
          <select
            value={inviteRole}
            onChange={(e) => setInviteRole(e.target.value)}
            className="h-10 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            {ROLE_OPTIONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="flex h-10 items-center justify-center gap-2 rounded-button bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-primary/90"
        >
          <UserPlus size={16} />
          Invite
        </button>
      </form>

      <div className="divide-y divide-border border-t border-border pt-1">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between gap-3 py-3"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-card-bg text-xs font-semibold">
                {initials(user.name)}
              </div>
              <div className="min-w-0">
                <div className="truncate text-sm font-medium">{user.name}</div>
                <div className="truncate text-xs text-muted">{user.email}</div>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-muted">
                {user.role}
              </span>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  user.status === "Active"
                    ? "bg-success text-white"
                    : "border border-border bg-secondary text-muted"
                }`}
              >
                {user.status}
              </span>
              <button
                type="button"
                title="Remove"
                onClick={() => removeUser(user.id)}
                className="flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-secondary hover:text-danger"
              >
                <X size={15} />
              </button>
            </div>
          </div>
        ))}

        {users.length === 0 && (
          <p className="py-6 text-center text-sm text-muted">
            No staff members yet.
          </p>
        )}
      </div>
    </SettingsSection>
  );
}
