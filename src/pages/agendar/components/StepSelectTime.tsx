import { HORARIOS } from "@/lib/config";

interface StepSelectTimeProps {
  selected: string;
  onSelect: (horario: string) => void;
}

export default function StepSelectTime({ selected, onSelect }: StepSelectTimeProps) {
  return (
    <div className="px-5 pt-5">
      <h2 className="font-heading text-lg font-extrabold tracking-tight text-foreground-950">
        ¿A qué hora prefieres?
      </h2>
      <p className="mt-1 text-xs text-foreground-500">
        Estos son horarios de referencia. ALÉA confirmará la disponibilidad.
      </p>

      <div className="mt-4 grid grid-cols-2 gap-2.5 pb-4">
        {HORARIOS.map((horario) => {
          const active = selected === horario;
          return (
            <button
              key={horario}
              type="button"
              onClick={() => onSelect(horario)}
              className={`flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3.5 transition-colors ${
                active
                  ? "border-primary-400 bg-primary-50"
                  : "border-background-200 bg-background-50 hover:border-background-300"
              }`}
            >
              <span className="font-heading text-sm font-bold text-foreground-950">{horario}</span>
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