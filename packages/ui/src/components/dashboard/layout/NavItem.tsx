"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import type { NavItem as NavItemType } from "./nav-items";

type Props = {
  item: NavItemType;
  index: number;
  onNavigate?: () => void;
};

export default function NavItem({ item, index, onNavigate }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.toString();
  const currentUrl = query ? `${pathname}?${query}` : pathname;

  const isActive =
    pathname === item.href || pathname?.startsWith(`${item.href}/`);
  const hasChildren = !!item.children?.length;

  // Start expanded if the current route is inside this item's section.
  const [open, setOpen] = useState(isActive);

  const Icon = item.icon;

  const rowClassName = `stagger-item group relative flex w-full items-center gap-3 rounded-md py-2.5 ps-4 pe-3 text-sm font-medium transition-[background-color,padding-inline-start] duration-200
    ${isActive ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10 hover:ps-5"}
  `;

  return (
    <div
      className="accordion-item"
      data-open={hasChildren ? open : undefined}
      style={{ "--stagger-index": index } as React.CSSProperties}
    >
      {hasChildren ? (
        // Parent with sub-items: whole row is a toggle button, no navigation.
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={rowClassName}
        >
          {isActive && (
            <span className="absolute inset-y-2 start-0 w-[3px] rounded-full bg-accent" />
          )}
          <Icon size={18} className="shrink-0" />
          <span className="flex-1 truncate text-left">{item.label}</span>
          <ChevronDown
            size={15}
            className={`shrink-0 text-white/60 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      ) : (
        // Leaf item: normal navigating link.
        <Link href={item.href} onClick={onNavigate} className={rowClassName}>
          {isActive && (
            <span className="absolute inset-y-2 start-0 w-[3px] rounded-full bg-accent" />
          )}
          <Icon size={18} className="shrink-0" />
          <span className="truncate">{item.label}</span>
        </Link>
      )}

      {hasChildren && (
        <div className="accordion-content">
          <div>
            <div className="flex flex-col gap-0.5 ps-[42px] pe-3 pb-1 pt-1">
              {item.children!.map((sub) => {
                const isSubActive = currentUrl === sub.href;
                return (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={onNavigate}
                    className={`rounded-md py-1.5 ps-3 text-sm transition-colors duration-150
                      ${isSubActive ? "bg-white/15 text-white" : "text-white/60 hover:bg-white/10 hover:text-white"}
                    `}
                  >
                    {sub.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
