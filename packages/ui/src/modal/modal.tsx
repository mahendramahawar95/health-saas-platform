"use client";
import { createPortal } from "react-dom";
import { useEffect } from "react";

type ModalSize = "sm" | "md" | "lg" | "xl";

const SIZE_CLASSES: Record<ModalSize, string> = {
  sm: "max-w-md",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
};

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  size?: ModalSize;
  /** Hide the header entirely (title/description/close button) for custom content. */
  hideHeader?: boolean;
  /** Disable closing on backdrop click / Escape — use for destructive flows that need explicit action. */
  disableDismiss?: boolean;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Modal({
  open,
  onClose,
  title,
  description,
  size = "md",
  hideHeader = false,
  disableDismiss = false,
  children,
  footer,
}: ModalProps) {
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && !disableDismiss) onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, disableDismiss, onClose]);

  if (!open) return null;

  const modal = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 py-10 sm:items-center"
    >
      <button
        type="button"
        aria-label="Close"
        tabIndex={disableDismiss ? -1 : 0}
        onClick={disableDismiss ? undefined : onClose}
        className="fixed inset-0 bg-overlay"
      />

      <div
        className={`relative flex w-full ${SIZE_CLASSES[size]} flex-col rounded-card border border-border bg-surface shadow-card-soft`}
      >
        {!hideHeader ? (
          <div className="flex items-start justify-between gap-4 border-b border-border p-5">
            <div>
              {title ? (
                <h2
                  id="modal-title"
                  className="text-h5 font-bold text-foreground"
                >
                  {title}
                </h2>
              ) : null}
              {description ? (
                <p className="mt-1 text-small text-muted">{description}</p>
              ) : null}
            </div>
            {!disableDismiss ? (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="rounded-full p-1.5 text-muted transition-colors hover:bg-secondary hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            ) : null}
          </div>
        ) : null}

        <div className="max-h-[75vh] overflow-y-auto p-5">{children}</div>

        {footer ? (
          <div className="flex items-center justify-end gap-3 border-t border-border p-5">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );

  // Portal to <body> so the modal escapes any parent's overflow/transform/z-index.
  if (typeof document === "undefined") return null;
  return createPortal(modal, document.body);
}
