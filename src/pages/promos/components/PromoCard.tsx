import type { Promo } from "@/types";

interface PromoCardProps {
  promo: Promo;
  onOpen: (promo: Promo) => void;
}

export default function PromoCard({ promo, onOpen }: PromoCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(promo)}
      className="group flex w-full cursor-pointer overflow-hidden rounded-lg border border-background-200 bg-background-50 text-left transition-colors hover:border-primary-300"
    >
      <div className="relative h-28 w-28 shrink-0 overflow-hidden">
        <img
          src={promo.imagen}
          alt={promo.nombre}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {promo.destacada && (
          <span className="absolute left-2 top-2 rounded-full bg-primary-500 px-2 py-0.5 font-heading text-[9px] font-bold uppercase tracking-wide text-foreground-950">
            Top
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-center gap-1 p-4">
        <span className="font-heading text-[10px] font-semibold uppercase tracking-wider text-foreground-400">
          {promo.categoria}
        </span>
        <h3 className="font-heading text-sm font-bold leading-snug text-foreground-950">
          {promo.nombre}
        </h3>
        <span className="font-heading text-base font-extrabold text-primary-700">{promo.precio}</span>
      </div>

      <span className="flex w-10 items-center justify-center text-foreground-300 transition-colors group-hover:text-primary-600">
        <i className="ri-arrow-right-s-line text-xl" />
      </span>
    </button>
  );
}