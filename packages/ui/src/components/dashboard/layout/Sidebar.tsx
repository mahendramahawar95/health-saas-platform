"use client";

import { X, Activity } from "lucide-react";
import NavItem from "./NavItem";
import { NAV_ITEMS } from "../layout/nav-items";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: Props) {
  return (
    <>
      {/* Mobile scrim */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-30 bg-overlay lg:hidden"
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 start-0 z-40 flex w-[248px] shrink-0 flex-col bg-primary transition-transform duration-300 ease-out
          lg:static lg:translate-x-0!
          ${open ? "translate-x-0" : "-translate-x-full rtl:translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent">
              <Activity size={18} className="text-primary" />
            </div>
            <span className="text-lg font-bold text-white">Vitalis</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden"
            aria-label="Close menu"
          >
            <X size={20} className="text-white" />
          </button>
        </div>

        <nav className="mt-2 flex flex-1 flex-col gap-1 px-3">
          {NAV_ITEMS.map((item, i) => (
            <NavItem
              key={item.href}
              item={item}
              index={i}
              onNavigate={onClose}
            />
          ))}
        </nav>

        <div className="px-4 pb-6 pt-4">
          <div className="flex items-center gap-3 rounded-card bg-white/10 p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-primary">
              DR
            </div>
            <div className="text-xs">
              <div className="font-semibold text-white">Dr. Ray Simmons</div>
              <div className="text-white/60">Chief Administrator</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
