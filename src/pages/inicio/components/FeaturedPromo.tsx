import type { Promo } from "@/types";

interface FeaturedPromoProps {
  promo: Promo;
  onOpen: (promo: Promo) => void;
}

export default function FeaturedPromo({ promo, onOpen }: FeaturedPromoProps) {
  return (
    <section>
      <div className="mb-3 flex items-end justify-between">
        <h2 className="font-heading text-sm font-bold tracking-tight text-foreground-950">
          Promoción del día
        </h2>
        <span className="text-[10px] uppercase tracking-wider text-foreground-400">Destacada</span>
      </div>

      <div className="overflow-hidden rounded-xl border border-background-200 bg-background-50">
        <div className="relative h-44 w-full overflow-hidden">
          <img src={promo.imagen} alt={promo.nombre} className="h-full w-full object-cover" />
          <span className="absolute left-3 top-3 rounded-full bg-foreground-950/90 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-wider text-background-50">
            Promo del día
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-heading text-base font-extrabold tracking-tight text-foreground-950">
            {promo.nombre}
          </h3>
          <p className="mt-1 inline-flex items-center gap-1 text-xs text-foreground-500">
            <i className="ri-calendar-line" />
            {promo.vigencia}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="font-heading text-xl font-extrabold text-primary-700">{promo.precio}</span>
            <button
              type="button"
              onClick={() => onOpen(promo)}
              className="flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-md bg-background-200 px-4 py-2.5 font-heading text-xs font-bold text-foreground-950 transition-colors hover:bg-background-300"
            >
              Ver promoción
              <i className="ri-arrow-right-line" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}