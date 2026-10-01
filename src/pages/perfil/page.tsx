import { useState } from "react";
import { Link } from "react-router-dom";
import EditProfileModal from "@/pages/perfil/components/EditProfileModal";
import Badge from "@/components/base/Badge";
import Button from "@/components/base/Button";
import { useClient } from "@/hooks/useClient";
import { longDateLabel } from "@/utils/date";
import { formatDateTime } from "@/utils/format";
import { siteConfig, whatsappLink } from "@/config/site";
import type { ClientInfo } from "@/context/client-types";

export default function Perfil() {
  const { client, appointments, promoRequests, updateClient, cancelAppointment, logout } =
    useClient();
  const [editing, setEditing] = useState(false);

  const initial = (client?.name ?? "A").charAt(0).toUpperCase();

  const handleSave = (info: ClientInfo) => {
    updateClient(info);
  };

  return (
    <div className="animate-fade-in">
      <header className="px-5 pb-4 pt-6">
        <p className="font-label text-[10px] font-bold uppercase tracking-[0.28em] text-accent-700">
          Mi cuenta
        </p>
        <h1 className="mt-1 font-heading text-xl font-extrabold text-foreground-950">Perfil</h1>
      </header>

      <section className="px-5">
        <div className="overflow-hidden rounded-3xl bg-primary-500 p-5">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-accent-500 font-heading text-xl font-extrabold text-primary-950">
              {initial}
            </span>
            <div className="min-w-0">
              <p className="font-heading text-lg font-extrabold leading-tight text-background-50">
                {client?.name ?? "Clienta ALÉA"}
              </p>
              <p className="mt-0.5 inline-flex items-center gap-1 font-label text-[11px] font-semibold uppercase tracking-wider text-accent-300">
                <i className="ri-vip-crown-line text-sm leading-none" />
                Miembro ALÉA Club
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2.5 border-t border-primary-400/40 pt-4">
            <div className="flex items-center gap-2.5 text-sm text-background-200">
              <i className="ri-phone-line text-base leading-none text-accent-300" />
              {client?.phone ?? "—"}
            </div>
            <div className="flex items-center gap-2.5 text-sm text-background-200">
              <i className="ri-mail-line text-base leading-none text-accent-300" />
              {client?.email ?? "—"}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setEditing(true)}
            className="mt-5 inline-flex h-10 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-background-50 px-5 font-label text-sm font-semibold text-foreground-950 transition-colors hover:bg-background-100"
          >
            <i className="ri-edit-line text-base leading-none" />
            Editar datos
          </button>
        </div>
      </section>

      <section className="mt-5 px-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-background-200 bg-background-50 p-4 text-center shadow-soft">
            <p className="font-heading text-2xl font-extrabold text-foreground-950">
              {appointments.length}
            </p>
            <p className="mt-0.5 font-label text-[11px] font-semibold text-foreground-600">
              Citas solicitadas
            </p>
          </div>
          <div className="rounded-2xl border border-background-200 bg-background-50 p-4 text-center shadow-soft">
            <p className="font-heading text-2xl font-extrabold text-foreground-950">
              {promoRequests.length}
            </p>
            <p className="mt-0.5 font-label text-[11px] font-semibold text-foreground-600">
              Promos solicitadas
            </p>
          </div>
        </div>
      </section>

      <section className="mt-5 px-5">
        <Link
          to="/beneficios"
          className="group relative flex items-center gap-3.5 overflow-hidden rounded-3xl border border-accent-200/70 p-4 shadow-soft transition-shadow hover:shadow-card"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-100/85 via-background-50/70 to-secondary-100/80 backdrop-blur-md" />
          <div className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-accent-300/40 blur-2xl" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-background-50/60 to-transparent" />
          <span className="relative flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-background-50/80 bg-background-50/60 text-accent-700 backdrop-blur">
            <i className="ri-gift-2-line text-xl leading-none" />
          </span>
          <div className="relative min-w-0 flex-1">
            <h2 className="font-heading text-sm font-bold text-foreground-950">
              Mis beneficios
            </h2>
          </div>
          <i className="relative ri-arrow-right-s-line text-xl leading-none text-accent-700 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </section>

      <section className="mt-6 px-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="font-heading text-base font-bold text-foreground-950">Mis citas</h2>
          <Link
            to="/agenda"
            className="cursor-pointer whitespace-nowrap font-label text-xs font-semibold text-accent-700"
          >
            Agendar nueva
          </Link>
        </div>

        {appointments.length ? (
          <ul className="flex flex-col gap-3">
            {appointments.map((appointment) => (
              <li
                key={appointment.id}
                className="rounded-2xl border border-background-200 bg-background-50 p-4 shadow-soft"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-heading text-sm font-bold leading-snug text-foreground-950">
                      {appointment.serviceName}
                    </h3>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-foreground-600">
                      <i className="ri-calendar-event-line text-sm leading-none" />
                      {longDateLabel(appointment.date)}
                    </p>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-foreground-600">
                      <i className="ri-time-line text-sm leading-none" />
                      {appointment.slot} h
                    </p>
                  </div>
                  <Badge tone="accent">Solicitada</Badge>
                </div>
                <div className="mt-3 flex items-center justify-between gap-3 border-t border-background-200 pt-3">
                  <span className="font-label text-[10px] text-foreground-500">
                    Solicitada el {formatDateTime(appointment.createdAt)}
                  </span>
                  <button
                    type="button"
                    onClick={() => cancelAppointment(appointment.id)}
                    className="cursor-pointer whitespace-nowrap font-label text-[11px] font-semibold text-secondary-700 transition-colors hover:text-secondary-900"
                  >
                    Cancelar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-background-200 bg-background-100/70 px-5 py-8 text-center">
            <i className="ri-calendar-line text-3xl text-foreground-400" />
            <p className="font-heading text-sm font-bold text-foreground-950">
              Aún no tienes citas
            </p>
            <p className="text-xs text-foreground-600">
              Agenda tu primer tratamiento y aparecerá aquí.
            </p>
          </div>
        )}
      </section>

      <section className="mt-6 px-5">
        <h2 className="mb-3 font-heading text-base font-bold text-foreground-950">
          Promociones solicitadas
        </h2>
        {promoRequests.length ? (
          <ul className="flex flex-col gap-3">
            {promoRequests.map((request) => (
              <li
                key={request.id}
                className="flex items-center gap-3 rounded-2xl border border-background-200 bg-background-50 p-4 shadow-soft"
              >
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent-100 text-accent-700">
                  <i className="ri-price-tag-3-line text-lg leading-none" />
                </span>
                <div className="min-w-0">
                  <h3 className="truncate font-heading text-sm font-bold text-foreground-950">
                    {request.promoName}
                  </h3>
                  <p className="text-[11px] text-foreground-500">
                    Solicitada el {formatDateTime(request.createdAt)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-background-200 bg-background-100/70 px-5 py-8 text-center">
            <i className="ri-price-tag-3-line text-3xl text-foreground-400" />
            <p className="font-heading text-sm font-bold text-foreground-950">
              Sin promociones solicitadas
            </p>
            <Link
              to="/promociones"
              className="cursor-pointer font-label text-xs font-semibold text-accent-700"
            >
              Ver promociones vigentes
            </Link>
          </div>
        )}
      </section>

      <section className="mt-6 px-5">
        <div className="rounded-2xl border border-background-200 bg-background-50 p-4">
          <h2 className="font-heading text-sm font-bold text-foreground-950">ALÉA Aesthetic House</h2>
          <p className="mt-1.5 text-xs leading-relaxed text-foreground-600">
            {siteConfig.address}
          </p>
          <p className="mt-1 text-xs text-foreground-600">{siteConfig.hoursLabel}</p>
          <a
            href={whatsappLink("Hola ALÉA, necesito información")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex h-10 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-background-300 bg-background-50 px-5 font-label text-sm font-semibold text-foreground-950 transition-colors hover:border-accent-400"
          >
            <i className="ri-whatsapp-line text-base leading-none" />
            {siteConfig.whatsappDisplay}
          </a>
        </div>
      </section>

      <section className="mt-5 px-5">
        <Button
          variant="ghost"
          size="md"
          fullWidth
          icon="ri-logout-box-r-line"
          onClick={logout}
          className="text-foreground-600"
        >
          Cerrar sesión
        </Button>
      </section>

      <EditProfileModal
        open={editing}
        client={client}
        onClose={() => setEditing(false)}
        onSave={handleSave}
      />
    </div>
  );
}

