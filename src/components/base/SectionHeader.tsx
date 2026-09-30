import { Link } from "react-router-dom";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  actionTo?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  actionLabel,
  actionTo,
}: SectionHeaderProps) {
  return (
    <div className="mb-3 flex items-end justify-between gap-3">
      <div>
        <h2 className="font-heading text-lg font-bold leading-tight text-foreground-950">
          {title}
        </h2>
        {subtitle ? <p className="mt-1 text-xs text-foreground-600">{subtitle}</p> : null}
      </div>
      {actionLabel && actionTo ? (
        <Link
          to={actionTo}
          className="flex cursor-pointer items-center gap-1 whitespace-nowrap font-label text-xs font-semibold text-accent-700 transition-colors hover:text-accent-900"
        >
          {actionLabel}
          <i className="ri-arrow-right-s-line text-base leading-none" />
        </Link>
      ) : null}
    </div>
  );
}