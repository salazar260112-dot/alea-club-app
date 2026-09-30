import { siteConfig } from "@/config/site";

export function formatPrice(value: number): string {
  const formatted = new Intl.NumberFormat("es-MX").format(value);
  return `${siteConfig.currencySymbol}${formatted}`;
}

export function formatDateTime(iso: string): string {
  const date = new Date(iso);
  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}