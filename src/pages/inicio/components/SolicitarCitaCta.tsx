import { Link } from "react-router-dom";

export default function SolicitarCitaCta() {
  return (
    <Link
      to="/agendar"
      className="flex w-full items-center justify-between gap-3 rounded-xl bg-foreground-950 px-5 py-4 transition-transform duration-200 active:scale-[0.99]"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-500 text-foreground-950">
          <i className="ri-calendar-check-line text-xl" />
        </span>
        <div>
          <p className="font-heading text-sm font-bold text-background-50">Solicitar cita</p>
          <p className="text-[11px] text-background-300">Elige servicio, día y horario</p>
        </div>
      </div>
      <i className="ri-arrow-right-line text-xl text-primary-400" />
    </Link>
  );
}