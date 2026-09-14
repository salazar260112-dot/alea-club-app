import type { CitaSolicitud, PromoSolicitud } from "@/types";

interface RequestsListProps {
  citas: CitaSolicitud[];
  promos: PromoSolicitud[];
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("es-MX", { day: "numeric", month: "long" });
  } catch {
    return "";
  }
}

export default function RequestsList({ citas, promos }: RequestsListProps) {
  return (
    <section className="px-5">
      <h2 className="mb-3 font-heading text-sm font-bold tracking-tight text-foreground-950">
        Mis solicitudes
      </h2>

      <div className="flex flex-col gap-3">
        <div className="rounded-lg border border-background-200 bg-background-50 p-4">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-foreground-700">
              <i className="ri-calendar-check-line text-primary-600" />
              Citas solicitadas
            </span>
            <span className="rounded-full bg-background-100 px-2.5 py-0.5 text-[10px] font-semibold text-foreground-500">
              {citas.length}
            </span>
          </div>
          {citas.length === 0 ? (
            <p className="text-xs leading-relaxed text-foreground-400">
              Aún no tienes citas solicitadas. Agenda desde la pestaña Agendar.
            </p>
          ) : (
            <div className="flex flex-col gap-2">
              {citas.map((cita) => (
                <div key={cita.id} className="rounded-md bg-background-100 p-3">
                  <p className="font-heading text-xs font-bold text-foreground-950">{cita.servicio}</p>
                  <p className="mt-0.5 text-[11px] text-foreground-500">
                    {cita.dia} · {cita.horario} · Solicitada el {formatDate(cita.createdAt)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-lg border border-background-200 bg-background-50 p-4">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-foreground-700">
              <i className="ri-price-tag-3-line text-primary-600" />
              Promociones solicitadas
            </span>
            <span className="rounded-full bg-background-100 px-2.5 py-0.5 text-[10px] font-semibold text-foreground-500">
              {promos.length}
            </span>
          </div>
          {promos.length === 0 ? (
            <p className="text-xs leading-relaxed text-foreground-400">
              Aún no has solicitado promociones. Descúbrelas en la pestaña Promos.
            </p>
          ) : (
            <div className="flex flex-col gap-2">
              {promos.map((promo) => (
                <div key={promo.id} className="rounded-md bg-background-100 p-3">
                  <p className="font-heading text-xs font-bold text-foreground-950">{promo.promo}</p>
                  <p className="mt-0.5 text-[11px] text-foreground-500">
                    Solicitada el {formatDate(promo.createdAt)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}