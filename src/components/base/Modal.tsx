import { useEffect, type ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export default function Modal({ open, onClose, title, children, footer }: ModalProps) {
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 cursor-pointer bg-foreground-950/45 animate-fade-in"
      />
      <div className="relative flex max-h-[88vh] w-full max-w-[480px] flex-col overflow-hidden rounded-t-3xl bg-background-50 animate-slide-up sm:rounded-3xl sm:animate-scale-in">
        <div className="flex items-center justify-between gap-3 border-b border-background-200 px-5 py-4">
          <h3 className="font-heading text-base font-bold text-foreground-950">
            {title ?? ""}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-background-100 text-foreground-700 transition-colors hover:bg-background-200"
          >
            <i className="ri-close-line text-lg leading-none" />
          </button>
        </div>
        <div className="no-scrollbar flex-1 overflow-y-auto">{children}</div>
        {footer ? (
          <div className="border-t border-background-200 bg-background-50 px-5 py-4">{footer}</div>
        ) : null}
      </div>
    </div>
  );
}