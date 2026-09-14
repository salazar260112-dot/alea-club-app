import { HORARIOS } from "@/lib/config";
import { getAgendaDays, getOccupiedSlots } from "@/mocks/disponibilidad";
import type { ClientSession } from "@/types";

interface StepSelectTimeProps {
  client: ClientSession;
  day: string;
  selected: string;
  onSelect: (horario: string) => void;
}

export default function StepSelectTime({ client, day, selected, onSelect }: StepSelectTimeProps) {
  const selectedDay = getAgendaDays(7).find((item) => item.key === day);
  const occupied = selectedDay ? getOccupiedSlots(selectedDay, client) : [];
  const fullDay = selectedDay && occupied.length >= HORARIOS.length;

  return (
    <div className="px-5 pt-5">
      <h2 className="font-heading text-lg font-extrabold tracking-tight text-foreground-950">
        ¿A qué hora prefieres?
      </h2>
      <p className="mt-1 text-xs text-foreground-500">
        Cada cita dura 1 hora. Los espacios ocupados ya no se pueden seleccionar.
      </p>

      {fullDay && (
        <div className="mt-4 rounded-xl border border-background-200 bg-background-100 p-4">
          <p className="text-sm font-bold text-foreground-950">Este dia esta lleno.</p>
          <p className="mt-1 text-xs leading-relaxed text-foreground-500">
            Regresa al paso anterior y selecciona otro dia disponible para programar tu cita.
          </p>
        </div>
      )}

      <div className="mt-4 grid grid-cols-2 gap-2.5 pb-4">
        {HORARIOS.map((horario) => {
          const active = selected === horario;
          const busy = occupied.includes(horario);
          return (
            <button
              key={horario}
              type="button"
              disabled={busy}
              onClick={() => onSelect(horario)}
              className={`flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3.5 transition-colors ${
                active
                  ? "border-primary-400 bg-primary-50"
                  : busy
                    ? "cursor-not-allowed border-background-200 bg-background-200 text-foreground-400"
                  : "border-background-200 bg-background-50 hover:border-background-300"
              }`}
            >
              <span>
                <span className="block font-heading text-sm font-bold text-foreground-950">{horario}</span>
                <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-wide text-foreground-400">
                  {busy ? "Ocupado" : "Libre"}
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
