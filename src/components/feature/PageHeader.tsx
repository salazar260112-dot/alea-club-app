import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  right?: ReactNode;
}

export default function PageHeader({ title, subtitle, right }: PageHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-background-200 bg-background-50/90 px-5 pb-3 pt-5 backdrop-blur-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h1 className="font-heading text-xl font-extrabold tracking-tight text-foreground-950">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-0.5 text-xs text-foreground-500">{subtitle}</p>
          )}
        </div>
        {right}
      </div>
    </header>
  );
}