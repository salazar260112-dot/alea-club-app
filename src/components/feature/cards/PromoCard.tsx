import { buttonClass } from "@/components/base/Button";
import Badge from "@/components/base/Badge";
import type { Promotion } from "@/types/content";

interface PromoCardProps {
  promo: Promotion;
  onRequest: (promo: Promotion) => void;
  className?: string;
}

export default function PromoCard({ promo, onRequest, className = "" }: PromoCardProps) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-2xl border border-background-200/80 bg-background-50 shadow-soft transition-all duration-200 hover:shadow-card ${className}`}
    >
      <button
        type="button"
        onClick={() => onRequest(promo)}
        className="block w-full cursor-pointer text-left"
      >
        <div className="relative h-44 w-full overflow-hidden bg-background-100">
          <img
            src={promo.image}
            alt={`Promoción ${promo.name} en ALÉA Aesthetic House`}
            title={`${promo.name} — promoción ALÉA Club`}
            className="h-full w-full object-cover object-top"
          />
          <span className="absolute left-3 top-3">
            <Badge tone="dark" icon="ri-fire-line">
              Promo club
            </Badge>
          </span>
        </div>
      </button>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <button
          type="button"
          onClick={() => onRequest(promo)}
          className="cursor-pointer text-left"
        >
          <h3 className="font-heading text-base font-bold leading-snug text-foreground-950">
            {promo.name}
          </h3>
        </button>
        <p className="text-xs leading-relaxed text-foreground-600">{promo.headline}</p>
        <div className="flex items-end gap-2 pt-1">
          <span className="font-heading text-xl font-extrabold leading-none text-accent-700">
            {promo.priceLabel}
          </span>
          {promo.originalPriceLabel ? (
            <span className="font-label text-xs text-foreground-400 line-through">
              {promo.originalPriceLabel}
            </span>
          ) : null}
        </div>
        <p className="inline-flex items-center gap-1 text-[11px] font-medium text-foreground-600">
          <i className="ri-timer-line text-sm leading-none" />
          {promo.validity}
        </p>
        <div className="mt-auto pt-2">
          <button
            type="button"
            onClick={() => onRequest(promo)}
            className={buttonClass("primary", "sm", "w-full")}
          >
            <i className="ri-hand-heart-line text-base leading-none" />
            Solicitar promoción
          </button>
        </div>
      </div>
    </div>
  );
}