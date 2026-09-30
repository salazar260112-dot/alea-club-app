import { Link } from "react-router-dom";
import { longDateLabel } from "@/utils/date";
import { whatsappLink } from "@/config/site";

interface BookingSuccessProps {
  serviceName: string;
  dateKey: string;
  slot: string;
  clientName: string;
  onReset: () => void;
}

export default function BookingSuccess({
  serviceName,
  dateKey,
  slot,
  clientName,
  onReset,
}: BookingSuccessProps) {
  const message = `Hola ALÉA, soy ${clientName}. Solicité una cita para "${serviceName}" el ${longDateLabel(
    dateKey,
  )} en el horario ${slot} h.`;

  return (
    <div className="animate-fade-up px-5 py-10">
      <div className="flex flex-col items-center text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-100 text-accent-700">
          <i className="ri-checkbox-circle-fill text-3xl leading-none" />
        </span>
        <h2 className="mt-4 font-heading text-xl font-extrabold text-foreground-950">
          Tu solicitud fue recibida
        </h2>
        <p className="mt-2 max-w-[300px] text-sm leading-relaxed text-foreground-600">
          ALÉA confirmará tu cita por WhatsApp. Te contactaremos al número registrado para
          validar el horario.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-background-200 bg-background-50 p-4">
        <div className="flex items-center justify-between gap-4">
          <span className="font-label text-xs font-semibold text-foreground-600">Servicio</span>
          <span className="text-sm font-semibold text-foreground-950">{serviceName}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="font-label text-xs font-semibold text-foreground-600">Día</span>
          <span className="text-sm font-semibold text-foreground-950">{longDateLabel(dateKey)}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="font-label text-xs font-semibold text-foreground-600">Horario</span>
          <span className="text-sm font-semibold text-foreground-950">{slot} h</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 font-label text-sm font-semibold text-background-50 transition-colors hover:bg-primary-600"
        >
          <i className="ri-whatsapp-line text-lg leading-none" />
          Confirmar por WhatsApp
        </a>
        <Link
          to="/perfil"
          className="inline-flex h-11 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-background-300 bg-background-50 font-label text-sm font-semibold text-foreground-950 transition-colors hover:border-accent-400"
        >
          Ver mis citas
        </Link>
        <button
          type="button"
          onClick={onReset}
          className="h-10 w-full cursor-pointer whitespace-nowrap rounded-full font-label text-xs font-semibold text-foreground-600 transition-colors hover:text-foreground-950"
        >
          Agendar otra cita
        </button>
      </div>
    </div>
  );
}