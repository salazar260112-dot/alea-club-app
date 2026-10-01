import Button from "@/components/base/Button";
import { longDateLabel } from "@/utils/date";

interface BookingSummaryProps {
  clientName: string;
  clientPhone: string;
  serviceName: string;
  dateKey: string;
  slot: string;
  onConfirm: () => void;
}

export default function BookingSummary({
  clientName,
  clientPhone,
  serviceName,
  dateKey,
  slot,
  onConfirm,
}: BookingSummaryProps) {
  const rows = [
    { icon: "ri-user-3-line", label: "Cliente", value: clientName },
    { icon: "ri-whatsapp-line", label: "Teléfono", value: clientPhone },
    { icon: "ri-sparkling-2-line", label: "Servicio", value: serviceName },
    { icon: "ri-calendar-event-line", label: "Día", value: longDateLabel(dateKey) },
    { icon: "ri-time-line", label: "Horario", value: `${slot} h` },
  ];

  return (
    <div className="animate-fade-up rounded-3xl border border-accent-200 bg-accent-50/60 p-5">
      <div className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-500 text-primary-950">
          <i className="ri-file-list-3-line text-lg leading-none" />
        </span>
        <h2 className="font-heading text-base font-bold text-foreground-950">
          Resumen de tu solicitud
        </h2>
      </div>

      <dl className="mt-4 flex flex-col gap-3">
        {rows.map((row) => (
          <div key={row.label} className="flex items-start justify-between gap-3">
            <dt className="inline-flex flex-none items-center gap-2 font-label text-xs font-semibold text-foreground-600">
              <i className={`${row.icon} text-base leading-none text-accent-700`} />
              {row.label}
            </dt>
            <dd className="min-w-0 max-w-[58%] break-words text-right text-sm font-semibold text-foreground-950">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-5">
        <Button variant="primary" size="lg" fullWidth icon="ri-check-double-line" onClick={onConfirm}>
          Confirmar solicitud
        </Button>
      </div>
    </div>
  );
}