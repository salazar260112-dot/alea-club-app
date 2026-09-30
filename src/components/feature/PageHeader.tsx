import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backTo?: string;
  right?: ReactNode;
}

export default function PageHeader({ title, subtitle, backTo, right }: PageHeaderProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (backTo) {
      navigate(backTo);
    } else {
      navigate(-1);
    }
  };

  return (
    <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-background-200 bg-background-50/95 px-5 py-3.5 backdrop-blur">
      {backTo || backTo === "" ? (
        <button
          type="button"
          onClick={handleBack}
          aria-label="Volver"
          className="flex h-9 w-9 flex-none cursor-pointer items-center justify-center rounded-full bg-background-100 text-foreground-950 transition-colors hover:bg-background-200"
        >
          <i className="ri-arrow-left-line text-lg leading-none" />
        </button>
      ) : null}
      <div className="min-w-0 flex-1">
        <h1 className="truncate font-heading text-base font-bold text-foreground-950">{title}</h1>
        {subtitle ? (
          <p className="truncate text-xs text-foreground-600">{subtitle}</p>
        ) : null}
      </div>
      {right}
    </header>
  );
}