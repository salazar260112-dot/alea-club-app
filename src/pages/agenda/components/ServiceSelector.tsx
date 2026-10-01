import { formatPrice } from "@/utils/format";
import type { Service } from "@/types/content";

interface ServiceSelectorProps {
  services: Service[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function ServiceSelector({ services, selectedId, onSelect }: ServiceSelectorProps) {
  return (
    <div className="no-scrollbar -mx-5 flex gap-2.5 overflow-x-auto px-5 pb-1">
      {services.map((service) => {
        const isActive = service.id === selectedId;
        return (
          <button
            key={service.id}
            type="button"
            onClick={() => onSelect(service.id)}
            className={`flex w-[186px] flex-none flex-col gap-1 rounded-2xl border p-3 text-left transition-all duration-200 ${
              isActive
                ? "cursor-pointer border-primary-500 bg-primary-500 text-background-50"
                : "cursor-pointer border-background-200 bg-background-50 hover:border-accent-300"
            }`}
          >
            <span
              className={`font-heading text-[13px] font-bold leading-snug ${
                isActive ? "text-background-50" : "text-foreground-950"
              }`}
            >
              {service.name}
            </span>
            <span
              className={`font-label text-[11px] font-semibold ${
                isActive ? "text-background-200" : "text-accent-700"
              }`}
            >
              {service.priceFrom ? "Desde " : ""}
              {formatPrice(service.price)} · {service.duration}
            </span>
          </button>
        );
      })}
    </div>
  );
}