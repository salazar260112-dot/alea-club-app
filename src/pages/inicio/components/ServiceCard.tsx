import type { Servicio } from "@/types";

interface ServiceCardProps {
  servicio: Servicio;
  onOpen: (servicio: Servicio) => void;
}

export default function ServiceCard({ servicio, onOpen }: ServiceCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(servicio)}
      className="group overflow-hidden rounded-2xl border border-background-200 bg-background-50 text-left shadow-[0_18px_45px_rgba(16,16,16,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-[0_24px_60px_rgba(16,16,16,0.12)]"
    >
      <div className="relative h-44 overflow-hidden bg-foreground-950">
        <img
          src={servicio.imagen}
          alt={servicio.nombre}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/75 via-foreground-950/10 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-background-50/90 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-[0.16em] text-foreground-950">
          {servicio.categoria}
        </span>
        <span className="absolute bottom-3 left-3 rounded-full bg-primary-500 px-3 py-1 font-heading text-xs font-extrabold text-foreground-950">
          {servicio.precio}
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-heading text-base font-extrabold leading-tight tracking-tight text-foreground-950">
              {servicio.nombre}
            </h3>
            <p className="mt-1 text-xs font-medium text-foreground-500">Duracion aprox. {servicio.duracion}</p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground-950 text-background-50 transition group-hover:bg-primary-500 group-hover:text-foreground-950">
            <i className="ri-arrow-right-up-line text-lg" />
          </span>
        </div>
      </div>
    </button>
  );
}
