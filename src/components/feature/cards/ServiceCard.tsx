import { Link } from "react-router-dom";
import { buttonClass } from "@/components/base/Button";
import Badge from "@/components/base/Badge";
import { formatPrice } from "@/utils/format";
import type { Service } from "@/types/content";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export default function ServiceCard({ service, className = "" }: ServiceCardProps) {
  const detailPath = `/servicios/${service.id}`;
  const agendaPath = `/agenda?servicio=${service.id}`;

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-2xl border border-background-200/80 bg-background-50 shadow-soft transition-all duration-200 hover:shadow-card ${className}`}
    >
      <Link to={detailPath} className="block cursor-pointer">
        <div className="relative h-40 w-full overflow-hidden bg-background-100 sm:h-44">
          <img
            src={service.image}
            alt={`${service.name} — tratamiento facial ALÉA`}
            title={`${service.name} ALÉA Aesthetic House`}
            className="h-full w-full object-cover object-top"
          />
          <span className="absolute left-3 top-3">
            <Badge tone="secondary">{service.category}</Badge>
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link to={detailPath} className="cursor-pointer">
          <h3 className="font-heading text-sm font-bold leading-snug text-foreground-950 line-clamp-2">
            {service.name}
          </h3>
        </Link>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-foreground-600">
          <span className="inline-flex items-center gap-1">
            <i className="ri-time-line text-sm leading-none" />
            {service.duration}
          </span>
          <span className="inline-flex items-center gap-1 font-label font-semibold text-foreground-950">
            {service.priceFrom ? "Desde " : ""}
            {formatPrice(service.price)}
          </span>
        </div>
        <div className="mt-auto pt-2">
          <Link to={agendaPath} className={buttonClass("primary", "sm", "w-full")}>
            <i className="ri-calendar-check-line text-base leading-none" />
            Agendar
          </Link>
        </div>
      </div>
    </div>
  );
}