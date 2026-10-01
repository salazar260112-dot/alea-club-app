import { Link, useParams } from "react-router-dom";
import PageHeader from "@/components/feature/PageHeader";
import Badge from "@/components/base/Badge";
import { services } from "@/mocks/services";
import { formatPrice } from "@/utils/format";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((item) => item.id === id);

  if (!service) {
    return (
      <div>
        <PageHeader title="Servicio" backTo="/agenda" />
        <div className="flex flex-col items-center gap-3 px-5 py-16 text-center">
          <i className="ri-sparkling-2-line text-3xl text-foreground-400" />
          <p className="font-heading text-base font-bold text-foreground-950">
            No encontramos este servicio
          </p>
          <Link
            to="/agenda"
            className="cursor-pointer font-label text-sm font-semibold text-accent-700"
          >
            Ver la agenda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <PageHeader title="Detalle del servicio" backTo="/agenda" />

      <div className="relative h-64 w-full overflow-hidden bg-background-100">
        <img
          src={service.image}
          alt={`${service.name} — tratamiento facial en ALÉA Aesthetic House`}
          title={`${service.name} ALÉA Aesthetic House`}
          className="h-full w-full object-cover object-top"
        />
        <span className="absolute left-5 top-5">
          <Badge tone="secondary">{service.category}</Badge>
        </span>
      </div>

      <div className="flex flex-col gap-4 px-5 py-5">
        <h1 className="font-heading text-xl font-extrabold leading-tight text-foreground-950">
          {service.name}
        </h1>

        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-background-100 px-3 py-1.5 font-label text-sm font-bold text-foreground-950">
            {service.priceFrom ? "Desde " : ""}
            {formatPrice(service.price)}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-background-100 px-3 py-1.5 font-label text-xs font-semibold text-foreground-600">
            <i className="ri-time-line text-base leading-none" />
            {service.duration}
          </span>
        </div>

        <div className="rounded-2xl bg-background-100/80 p-4">
          <h2 className="font-heading text-sm font-bold text-foreground-950">Descripción</h2>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground-600">
            {service.description}
          </p>
        </div>

        <div>
          <h2 className="font-heading text-sm font-bold text-foreground-950">Beneficios</h2>
          <ul className="mt-2.5 flex flex-col gap-2.5">
            {service.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2.5 rounded-xl border border-background-200 bg-background-50 p-3 text-sm text-foreground-700"
              >
                <i className="ri-checkbox-circle-line mt-0.5 text-base leading-none text-accent-600" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-1 flex flex-col gap-3">
          <Link
            to={`/agenda?servicio=${service.id}`}
            className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 font-label text-sm font-semibold text-background-50 transition-colors hover:bg-primary-600"
          >
            <i className="ri-calendar-check-line text-lg leading-none" />
            Solicitar cita
          </Link>
          <Link
            to="/agenda"
            className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-background-300 bg-background-50 font-label text-sm font-semibold text-foreground-950 transition-colors hover:border-accent-400"
          >
            Ver todos los horarios
          </Link>
        </div>
      </div>
    </div>
  );
}