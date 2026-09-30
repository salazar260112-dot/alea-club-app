import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "accent" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-label font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer active:scale-[.97] disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-primary-500 text-background-50 hover:bg-primary-600",
  secondary:
    "bg-background-50 text-foreground-950 border border-background-300 hover:border-accent-400 hover:bg-accent-50",
  accent: "bg-accent-500 text-primary-950 hover:bg-accent-400",
  ghost: "bg-transparent text-foreground-700 hover:bg-background-200/70",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm",
};

export function buttonClass(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  extra = "",
): string {
  return `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${extra}`.trim();
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: string;
  children?: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className={buttonClass(variant, size, `${fullWidth ? "w-full" : ""} ${className}`)}
      {...rest}
    >
      {icon ? <i className={`${icon} text-base leading-none`} /> : null}
      {children}
    </button>
  );
}