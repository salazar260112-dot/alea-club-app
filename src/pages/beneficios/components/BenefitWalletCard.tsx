import Badge from "@/components/base/Badge";
import type { ClubBenefit, ClubBenefitStatus, ClubBenefitTone } from "@/types/content";

const TONE_BUBBLE: Record<ClubBenefitTone, string> = {
  accent: "bg-accent-100 text-accent-700",
  secondary: "bg-secondary-100 text-secondary-800",
  background: "bg-background-200 text-foreground-700",
};

const STATUS_BADGE: Record<
  ClubBenefitStatus,
  { tone: "accent" | "secondary" | "neutral" | "dark"; icon: string }
> = {
  available: { tone: "accent", icon: "ri-checkbox-circle-line" },
  next: { tone: "neutral", icon: "ri-lock-2-line" },
  active: { tone: "accent", icon: "ri-flashlight-line" },
  soon: { tone: "neutral", icon: "ri-time-line" },
};

interface BenefitWalletCardProps {
  benefit: ClubBenefit;
  onOpen: (benefit: ClubBenefit) => void;
}

export default function BenefitWalletCard({ benefit, onOpen }: BenefitWalletCardProps) {
  const badge = STATUS_BADGE[benefit.status];

  return (
    <article className="rounded-3xl border border-background-200 bg-background-50 p-4 shadow-soft transition-shadow duration-200 hover:shadow-card">
      <div className="flex items-start gap-3.5">
        <span
          className={`flex h-12 w-12 flex-none items-center justify-center rounded-2xl ${TONE_BUBBLE[benefit.tone]}`}
        >
          <i className={`${benefit.icon} text-xl leading-none`} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading text-sm font-bold leading-snug text-foreground-950">
              {benefit.title}
            </h3>
            <Badge tone={badge.tone} icon={badge.icon}>
              {benefit.statusLabel}
            </Badge>
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-foreground-600">
            {benefit.description}
          </p>
        </div>
      </div>

      <button
        type="button"
        disabled={!benefit.ctaEnabled}
        onClick={() => onOpen(benefit)}
        className={`mt-3.5 inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full font-label text-xs font-semibold transition-all duration-200 ${
          benefit.ctaEnabled
            ? "cursor-pointer bg-primary-500 text-background-50 hover:bg-primary-600 active:scale-[.97]"
            : "cursor-not-allowed border border-background-200 bg-background-100 text-foreground-400"
        }`}
      >
        <i
          className={`text-base leading-none ${
            benefit.ctaEnabled ? "ri-arrow-right-circle-line" : "ri-time-line"
          }`}
        />
        {benefit.ctaLabel}
      </button>
    </article>
  );
}