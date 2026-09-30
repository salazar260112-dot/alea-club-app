import { useAvailability } from "@/hooks/useAvailability";

interface TimeSlotPickerProps {
  dateKey: string;
  selected: string | null;
  onSelect: (slot: string) => void;
}

export default function TimeSlotPicker({ dateKey, selected, onSelect }: TimeSlotPickerProps) {
  const { slots, isFull } = useAvailability(dateKey);

  if (isFull) {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-accent-200 bg-accent-50 p-4 animate-fade-up">
        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-accent-100 text-accent-700">
          <i className="ri-calendar-close-line text-lg leading-none" />
        </span>
        <div>
          <p className="font-heading text-sm font-bold text-foreground-950">
            No hay horarios disponibles este día
          </p>
          <p className="mt-1 text-xs leading-relaxed text-foreground-600">
            Puedes elegir el siguiente día disponible en la parte superior.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2.5">
      {slots.map(({ slot, available }) => {
        const isActive = selected === slot;
        return (
          <button
            key={slot}
            type="button"
            disabled={!available}
            onClick={() => onSelect(slot)}
            className={`flex flex-col items-center justify-center gap-0.5 rounded-xl border px-1 py-3 font-label text-[11px] font-semibold transition-all duration-200 ${
              available
                ? isActive
                  ? "cursor-pointer border-primary-500 bg-primary-500 text-background-50"
                  : "cursor-pointer border-background-300 bg-background-50 text-foreground-950 hover:border-accent-400 hover:bg-accent-50"
                : "cursor-not-allowed border-background-200 bg-background-100 text-foreground-400 line-through"
            }`}
          >
            <i
              className={`text-base leading-none ${
                available ? (isActive ? "ri-checkbox-circle-fill" : "ri-time-line") : "ri-lock-2-line"
              }`}
            />
            {slot.split(" - ")[0]}
          </button>
        );
      })}
    </div>
  );
}