import { openWhatsApp, citaMessage } from "@/lib/whatsapp";
import type { ClientSession } from "@/types";

interface StepConfirmProps {
  client: ClientSession;
  servicio: string;
  dia: string;
  horario: string;
  confirmed: boolean;
  onConfirm: () => void;
}

export default function StepConfirm({
  client,
  servicio,
  dia,
  horario,
  confirmed,
  onConfirm,
}: StepConfirmProps) {
  const rows = [
    { icon: "ri-sparkling-line", label: "Servicio o promo", value: servicio },
    { icon: "ri-calendar-line", label: "Día preferido", value: dia },
    { icon: "ri-time-line", label: "Horario preferido", value: horario },
  ];

  if (confirmed) {
    return (
      <div className="px-5 pt-6">
        <div className="flex flex-col items-center text-center animate-fade-up">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-700">
            <i className="ri-check-line text-3xl" />
          </span>
          <h2 className="mt-4 font-heading text-xl font-extrabold tracking-tight text-foreground-950">
            Solicitud enviada
          </h2>
          <p className="mt-2 max-w-[280px] text-sm leading-relaxed text-foreground-500">
            Tu solicitud fue enviada. ALÉA confirmará tu cita por WhatsApp.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-background-200 bg-background-50 p-5">
          {rows.map((row) => (
            <div key={row.label} className="flex items-center justify-between py-2">
              <span className="inline-flex items-center gap-2 text-xs text-foreground-500">
                <i className={`${row.icon} text-foreground-400`} />
                {row.label}
              </span>
              <span className="font-heading text-xs font-bold text-foreground-950">{row.value}</span>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => openWhatsApp(citaMessage(client, servicio))}
          className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-foreground-950 px-6 py-3.5 font-heading text-sm font-bold tracking-wide text-background-50 transition-colors hover:bg-foreground-800"
        >
          <i className="ri-whatsapp-line text-lg" />
          Confirmar por WhatsApp
        </button>
      </div>
    );
  }

  return (
    <div className="px-5 pt-5">
      <h2 className="font-heading text-lg font-extrabold tracking-tight text-foreground-950">
        Revisa y confirma
      </h2>
      <p className="mt-1 text-xs text-foreground-500">
        Verifica los detalles de tu solicitud antes de enviarla.
      </p>

      <div className="mt-4 rounded-xl border border-background-200 bg-background-50 p-5">
        {rows.map((row, index) => (
          <div
            key={row.label}
            className={`flex items-center justify-between py-2.5 ${
              index !== rows.length - 1 ? "border-b border-background-200" : ""
            }`}
          >
            <span className="inline-flex items-center gap-2 text-xs text-foreground-500">
              <i className={`${row.icon} text-foreground-400`} />
              {row.label}
            </span>
            <span className="text-right font-heading text-xs font-bold text-foreground-950">
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-start gap-2.5 rounded-lg bg-background-100 p-4">
        <i className="ri-information-line mt-0.5 text-foreground-400" />
        <p className="text-[11px] leading-relaxed text-foreground-500">
          Enviaremos tu solicitud a ALÉA. La cita queda como solicitud y se confirma por WhatsApp.
        </p>
      </div>

      <button
        type="button"
        onClick={onConfirm}
        className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-6 py-3.5 font-heading text-sm font-bold tracking-wide text-foreground-950 transition-colors hover:bg-primary-400"
      >
        <i className="ri-send-plane-fill text-lg" />
        Confirmar solicitud
      </button>
    </div>
  );
}