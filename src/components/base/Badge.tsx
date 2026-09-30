import type { ReactNode } from "react";

type BadgeTone = "accent" | "secondary" | "neutral" | "dark";

const TONES: Record<BadgeTone, string> = {
  accent: "bg-accent-100 text-accent-900 border border-accent-200",
  secondary: "bg-secondary-50 text-secondary-800 border border-secondary-200",
  neutral: "bg-background-100 text-foreground-700 border border-background-200",
  dark: "bg-primary-500 text-background-50 border border-primary-500",
};

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  icon?: string;
  className?: string;
}

export default function Badge({ children, tone = "neutral", icon, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-label text-[11px] font-semibold leading-none whitespace-nowrap ${TONES[tone]} ${className}`}
    >
      {icon ? <i className={`${icon} text-xs leading-none`} /> : null}
      {children}
    </span>
  );
}