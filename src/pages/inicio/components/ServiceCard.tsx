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
      className="group overflow-hidden rounded-[1.6rem] border border-background-200 bg-background-50 text-left shadow-[0_18px_45px_rgba(16,16,16,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-[0_24px_60px_rgba(16,16,16,0.12)]"
    >
      <div className="relative h-56 overflow-hidden bg-foreground-950">
        <img
          src={servicio.imagen}
          alt={servicio.nombre}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/55 via-transparent to-transparent" />
      </div>

      <div className="p-4.5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-heading text-base font-extrabold leading-tight tracking-tight text-foreground-950">
              {servicio.nombre}
            </h3>
            <p className="mt-2 font-heading text-lg font-extrabold text-primary-700">{servicio.precio}</p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground-950 text-background-50 transition group-hover:bg-primary-500 group-hover:text-foreground-950">
            <i className="ri-arrow-right-up-line text-lg" />
          </span>
        </div>
      </div>
    </button>
  );
}
