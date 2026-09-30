import { dayNumber, dayShort, monthShort } from "@/utils/date";

interface DateStripProps {
  days: Date[];
  selectedKey: string;
  onSelect: (date: Date) => void;
}

export default function DateStrip({ days, selectedKey, onSelect }: DateStripProps) {
  return (
    <div className="no-scrollbar -mx-5 flex gap-2.5 overflow-x-auto px-5 pb-1">
      {days.map((day) => {
        const key = `${day.getFullYear()}-${`${day.getMonth() + 1}`.padStart(2, "0")}-${`${day.getDate()}`.padStart(2, "0")}`;
        const isActive = key === selectedKey;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onSelect(day)}
            className={`flex w-16 flex-none cursor-pointer flex-col items-center gap-1 rounded-2xl border py-3 transition-all duration-200 ${
              isActive
                ? "border-primary-500 bg-primary-500 text-background-50"
                : "border-background-200 bg-background-50 text-foreground-700 hover:border-accent-300"
            }`}
          >
            <span className="font-label text-[10px] font-semibold uppercase tracking-wide">
              {dayShort(day)}
            </span>
            <span className="font-heading text-lg font-extrabold leading-none">
              {dayNumber(day)}
            </span>
            <span className="font-label text-[10px] font-medium uppercase">
              {monthShort(day)}
            </span>
          </button>
        );
      })}
    </div>
  );
}