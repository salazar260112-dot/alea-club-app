import { useMemo } from "react";

interface StepSelectDayProps {
  selected: string;
  onSelect: (label: string) => void;
}

const DIAS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const MESES = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
];

export default function StepSelectDay({ selected, onSelect }: StepSelectDayProps) {
  const days = useMemo(() => {
    const base = new Date();
    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date(base);
      date.setDate(base.getDate() + index);
      const label = `${DIAS[date.getDay()]} ${date.getDate()} ${MESES[date.getMonth()]}`;
      return {
        key: label,
        label: index === 0 ? "Hoy" : index === 1 ? "Mañana" : DIAS[date.getDay()],
        dayNumber: date.getDate(),
        mes: MESES[date.getMonth()],
      };
    });
  }, []);

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
              <span className="text-[10px] uppercase text-foreground-400">{day.mes}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}