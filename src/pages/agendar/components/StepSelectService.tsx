import { servicios } from "@/mocks/servicios";
import { promos } from "@/mocks/promos";
import type { Promo } from "@/types";

type Tipo = "servicio" | "promo";

interface StepSelectServiceProps {
  tipo: Tipo;
  onTipo: (tipo: Tipo) => void;
  selected: string;
  onSelect: (name: string) => void;
}

export default function StepSelectService({ tipo, onTipo, selected, onSelect }: StepSelectServiceProps) {
  const promosList = promos as Promo[];

  return (
    <div className="px-5 pt-5">
      <h2 className="font-heading text-lg font-extrabold tracking-tight text-foreground-950">
        ¿Qué te gustaría agendar?
      </h2>
      <p className="mt-1 text-xs text-foreground-500">Elige un servicio o una promoción.</p>

      <div className="mt-4 flex rounded-full bg-background-100 p-1">
        {(["servicio", "promo"] as Tipo[]).map((value) => {
          const active = tipo === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => onTipo(value)}
              className={`flex-1 cursor-pointer rounded-full py-2 font-heading text-xs font-semibold transition-colors ${
                active ? "bg-background-50 text-foreground-950 shadow-none" : "text-foreground-500"
              }`}
            >
              {value === "servicio" ? "Servicios" : "Promociones"}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-col gap-2.5 pb-4">
        {tipo === "servicio"
          ? servicios.map((servicio) => {
              const active = selected === servicio.nombre;
              return (
                <button
                  key={servicio.id}
                  type="button"
                  onClick={() => onSelect(servicio.nombre)}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 text-left transition-colors ${
                    active
                      ? "border-primary-400 bg-primary-50"
                      : "border-background-200 bg-background-50 hover:border-background-300"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${
                      active ? "bg-primary-500 text-foreground-950" : "bg-background-100 text-foreground-700"
                    }`}
                  >
                    <i className={`${servicio.icono} text-lg`} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-heading text-sm font-bold text-foreground-950">
                      {servicio.nombre}
                    </span>
                    <span className="mt-0.5 block text-xs text-foreground-500">
                      {servicio.descripcion}
                    </span>
                  </span>
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                      active ? "border-primary-500 bg-primary-500" : "border-background-300"
                    }`}
                  >
                    {active && <i className="ri-check-line text-[10px] text-foreground-950" />}
                  </span>
                </button>
              );
            })
          : promosList.map((promo) => {
              const active = selected === promo.nombre;
              return (
                <button
                  key={promo.id}
                  type="button"
                  onClick={() => onSelect(promo.nombre)}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 text-left transition-colors ${
                    active
                      ? "border-primary-400 bg-primary-50"
                      : "border-background-200 bg-background-50 hover:border-background-300"
                  }`}
                >
                  <span className="h-12 w-12 shrink-0 overflow-hidden rounded-md">
                    <img src={promo.imagen} alt={promo.nombre} className="h-full w-full object-cover" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-heading text-sm font-bold text-foreground-950">
                      {promo.nombre}
                    </span>
                    <span className="mt-0.5 block text-xs font-semibold text-primary-700">
                      {promo.precio}
                    </span>
                  </span>
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                      active ? "border-primary-500 bg-primary-500" : "border-background-300"
                    }`}
                  >
                    {active && <i className="ri-check-line text-[10px] text-foreground-950" />}
                  </span>
                </button>
              );
            })}
      </div>
    </div>
  );
}