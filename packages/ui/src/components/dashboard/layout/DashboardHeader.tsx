"use client";

import { Menu, Search, Bell, Plus } from "lucide-react";

type Props = {
  onMenuClick: () => void;
  greeting?: string;
  name?: string;
};

export default function DashboardHeader({
  onMenuClick,
  greeting = "Good morning,",
  name = "Dr. Ray Simmons",
}: Props) {
  return (
    <header className="animate-fade-up sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-border bg-background px-5 py-4 md:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
        <div>
          <div className="text-xs text-muted">{greeting}</div>
          <div className="text-lg font-bold">{name}</div>
        </div>
      </div>

      <div className="hidden flex-1 items-center gap-2 rounded-button border border-border bg-surface px-4 py-2 md:flex">
        <Search size={16} className="text-muted" />
        <input
          placeholder="Search patients, doctors, records…"
          className="w-full border-none bg-transparent text-sm outline-none placeholder:text-muted"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          className="hover-lift relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface"
          aria-label="Notifications"
        >
          <Bell size={17} />
          <span className="absolute end-2 top-2 h-[7px] w-[7px] rounded-full bg-danger" />
        </button>
        <button className="btn-primary flex items-center gap-2 rounded-button bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90">
          <Plus size={16} />
          <span className="hidden sm:inline">New Appointment</span>
        </button>
      </div>
    </header>
  );
}
