"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import {
  AppointmentsTable,
  AppointmentModal,
  SAMPLE_APPOINTMENTS,
  type AppointmentTableRow,
  type AppointmentFormValues,
} from "@repo/ui";

type StatusFilter = "all" | "upcoming" | "completed" | "cancelled";

const TABS: { key: StatusFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "upcoming", label: "Upcoming" },
  { key: "completed", label: "Completed" },
  { key: "cancelled", label: "Cancelled" },
];

function filterByStatus(rows: AppointmentTableRow[], status: StatusFilter) {
  switch (status) {
    case "upcoming":
      return rows.filter(
        (r) => r.status === "Confirmed" || r.status === "Waiting",
      );
    case "completed":
      return rows.filter((r) => r.status === "Completed");
    case "cancelled":
      return rows.filter((r) => r.status === "Cancelled");
    default:
      return rows;
  }
}

function AppointmentsPageContent() {
  const router = useRouter();

  const [filterKey, setFIlterKey] = useState<StatusFilter>("all");
  const [rows, setRows] = useState<AppointmentTableRow[]>(SAMPLE_APPOINTMENTS);
  const [modalMode, setModalMode] = useState<"create" | "edit" | null>(null);
  const [editingRow, setEditingRow] = useState<
    AppointmentTableRow | undefined
  >();

  const visibleRows = filterByStatus(rows, filterKey);

  // Deep link from the appointment detail page's "Edit" button:
  // /appointments?edit=<id> opens the edit modal for that row on load.

  function goToTab(key: StatusFilter) {
    setFIlterKey(key);
  }

  function openCreateModal() {
    setEditingRow(undefined);
    setModalMode("create");
  }

  function openEditModal(row: AppointmentTableRow) {
    setEditingRow(row);
    setModalMode("edit");
  }

  function closeModal() {
    setModalMode(null);
    setEditingRow(undefined);
  }

  function handleSubmit(values: AppointmentFormValues) {
    if (modalMode === "edit" && editingRow) {
      setRows((prev) =>
        prev.map((r) => (r.id === editingRow.id ? { ...r, ...values } : r)),
      );
    } else {
      const newRow: AppointmentTableRow = {
        id: `apt-${Date.now()}`,
        ...values,
      };
      setRows((prev) => [newRow, ...prev]);
    }
    closeModal();
  }

  function handleCancel(row: AppointmentTableRow) {
    setRows((prev) =>
      prev.map((r) => (r.id === row.id ? { ...r, status: "Cancelled" } : r)),
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold">Appointments</h1>
          <p className="text-sm text-muted">
            All appointment activity in one place.
          </p>
        </div>
        <button
          type="button"
          onClick={openCreateModal}
          className="flex items-center gap-2 rounded-button bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
        >
          <Plus size={16} />
          Create Appointment
        </button>
      </div>

      <div className="flex items-center gap-1 rounded-button border border-border bg-secondary p-1 w-fit">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => goToTab(tab.key)}
            className={`rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors duration-150 ${
              filterKey === tab.key
                ? "bg-primary text-white"
                : "text-muted hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AppointmentsTable
        data={visibleRows}
        onView={(row) => router.push(`/appointments/${row.id}`)}
        onReschedule={openEditModal}
        onCancel={handleCancel}
      />

      <AppointmentModal
        open={modalMode !== null}
        mode={modalMode ?? "create"}
        initialValues={editingRow}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default function AppointmentsPage() {
  return <AppointmentsPageContent />;
}
