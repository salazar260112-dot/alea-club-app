import { useMemo } from "react";
import { getAgendaDays } from "@/mocks/disponibilidad";

interface StepSelectDayProps {
  selected: string;
  onSelect: (label: string) => void;
}

export default function StepSelectDay({ selected, onSelect }: StepSelectDayProps) {
  const days = useMemo(() => getAgendaDays(7), []);

  return (
    <div className="px-5 pt-5">
      <h2 className="font-heading text-lg font-extrabold tracking-tight text-foreground-950">
        ¿Qué día te queda mejor?
      </h2>
      <p className="mt-1 text-xs text-foreground-500">Elige un día preferido para tu cita.</p>

      <div className="mt-4 grid grid-cols-4 gap-2.5 pb-4">
        {days.map((day) => {
          const active = selected === day.key;
          return (
            <button
              key={day.key}
              type="button"
              onClick={() => onSelect(day.key)}
              className={`flex cursor-pointer flex-col items-center rounded-lg border py-3 transition-colors ${
                active
                  ? "border-primary-400 bg-primary-50"
                  : "border-background-200 bg-background-50 hover:border-background-300"
              }`}
            >
              <span
                className={`font-heading text-[10px] font-semibold uppercase tracking-wide ${
                  active ? "text-primary-800" : "text-foreground-400"
                }`}
              >
                {day.label}
              </span>
              <span className="mt-0.5 font-heading text-lg font-extrabold text-foreground-950">
                {day.dayNumber}
              </span>
              <span className="text-[10px] uppercase text-foreground-400">{day.month}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
