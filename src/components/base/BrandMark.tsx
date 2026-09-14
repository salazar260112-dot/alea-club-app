interface BrandMarkProps {
  className?: string;
  compact?: boolean;
}

export default function BrandMark({ className = "", compact = false }: BrandMarkProps) {
  return (
    <span className={`inline-flex items-baseline gap-1.5 ${className}`}>
      <span className="font-heading text-base font-extrabold tracking-[0.28em] text-foreground-950">
        ALÉA
      </span>
      {!compact && (
        <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.34em] text-primary-600">
          Club
        </span>
      )}
    </span>
  );
}