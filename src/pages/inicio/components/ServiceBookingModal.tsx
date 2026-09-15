import { useMemo, useState } from "react";
import Modal from "@/components/base/Modal";
import { HORARIOS } from "@/lib/config";
import { getAgendaDays, getOccupiedSlots, isFullyBooked, type AgendaDay } from "@/mocks/disponibilidad";
import type { ClientSession, Servicio } from "@/types";

interface ServiceBookingModalProps {
  servicio: Servicio | null;
  client: ClientSession;
  onClose: () => void;
  onConfirm: (payload: { servicio: string; dia: string; horario: string }) => void;
}

export default function ServiceBookingModal({
  servicio,
  client,
  onClose,
  onConfirm,
}: ServiceBookingModalProps) {
  const days = useMemo(() => getAgendaDays(7), []);
  const firstAvailableDay = days.find((day) => !isFullyBooked(day, client)) ?? days[0];
  const [view, setView] = useState<"detail" | "schedule" | "success">("detail");
  const [selectedDay, setSelectedDay] = useState<AgendaDay>(firstAvailableDay);
  const [selectedSlot, setSelectedSlot] = useState("");

  if (!servicio) return null;

  const occupied = getOccupiedSlots(selectedDay, client);
  const fullDay = occupied.length >= HORARIOS.length;

  const goToNextAvailableDay = () => {
    const next = days.find((day) => day.dayOffset > selectedDay.dayOffset && !isFullyBooked(day, client));
    if (next) {
      setSelectedDay(next);
      setSelectedSlot("");
    }
  };

  const handleConfirm = () => {
    if (!selectedSlot) return;
    onConfirm({ servicio: servicio.nombre, dia: selectedDay.key, horario: selectedSlot });
    setView("success");
  };

  return (
    <Modal open={Boolean(servicio)} onClose={onClose} labelledBy="service-booking-title">
      <div className="bg-background-50">
        {view === "detail" && (
          <div>
            <div className="relative h-64 overflow-hidden bg-foreground-950">
              <img src={servicio.imagen} alt={servicio.nombre} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground-950 via-foreground-950/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-background-50">
                <p className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-primary-300">
                  {servicio.categoria} · {servicio.duracion}
                </p>
                <h2 id="service-booking-title" className="mt-2 font-heading text-2xl font-extrabold leading-tight">
                  {servicio.nombre}
                </h2>
                <p className="mt-2 font-heading text-xl font-extrabold text-primary-300">{servicio.precio}</p>
              </div>
            </div>

            <div className="p-5">
              <p className="text-sm leading-relaxed text-foreground-600">{servicio.descripcion}</p>

              {servicio.costos && servicio.costos.length > 0 && (
                <div className="mt-5 rounded-2xl border border-primary-200 bg-primary-50/70 p-4">
                  <p className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-primary-700">
                    Costos
                  </p>
                  <div className="mt-3 grid gap-2">
                    {servicio.costos.map((costo) => (
                      <div
                        key={costo}
                        className="flex items-center justify-between gap-3 rounded-xl bg-background-50 px-3 py-2.5 text-xs font-bold text-foreground-800"
                      >
                        <span>{costo}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-5 grid gap-2">
                {servicio.beneficios.map((beneficio) => (
                  <div key={beneficio} className="flex items-center gap-2 rounded-xl bg-background-100 px-3 py-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-foreground-950">
                      <i className="ri-check-line text-sm" />
                    </span>
                    <span className="text-xs font-semibold text-foreground-700">{beneficio}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setView("schedule")}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-foreground-950 px-5 py-4 font-heading text-sm font-extrabold tracking-wide text-background-50 transition hover:bg-foreground-800"
              >
                Solicitar servicio
                <i className="ri-calendar-check-line text-lg" />
              </button>
            </div>
          </div>
        )}

        {view === "schedule" && (
          <div className="p-5 pt-12">
            <button
              type="button"
              onClick={() => setView("detail")}
              className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-background-100 px-3 py-2 text-xs font-bold text-foreground-700"
            >
              <i className="ri-arrow-left-line" />
              Volver al servicio
            </button>

            <p className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-primary-700">
              Agenda {servicio.duracion}
            </p>
            <h2 className="mt-1 font-heading text-xl font-extrabold tracking-tight text-foreground-950">
              Elige dia y horario
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-foreground-500">
              Horario ALÉA: 10:00 a 19:00 h. Los espacios ocupados ya fueron confirmados por administracion.
            </p>

            <div className="mt-5 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              {days.map((day) => {
                const active = selectedDay.key === day.key;
                const disabled = isFullyBooked(day, client);
                return (
                  <button
                    key={day.key}
                    type="button"
                    onClick={() => {
                      setSelectedDay(day);
                      setSelectedSlot("");
                    }}
                    className={`min-w-[72px] rounded-2xl border px-3 py-3 text-center transition ${
                      active
                        ? "border-primary-500 bg-primary-50"
                        : "border-background-200 bg-background-50"
                    } ${disabled ? "opacity-55" : ""}`}
                  >
                    <span className="block font-heading text-[10px] font-bold uppercase tracking-wide text-foreground-400">
                      {day.label}
                    </span>
                    <span className="mt-1 block font-heading text-xl font-extrabold text-foreground-950">
                      {day.dayNumber}
                    </span>
                    <span className="block text-[10px] uppercase text-foreground-400">{day.month}</span>
                  </button>
                );
              })}
            </div>

            {fullDay ? (
              <div className="mt-5 rounded-2xl border border-background-200 bg-background-100 p-5 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-foreground-950 text-background-50">
                  <i className="ri-calendar-close-line text-xl" />
                </span>
                <h3 className="mt-3 font-heading text-base font-extrabold text-foreground-950">
                  Dia lleno
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-foreground-500">
                  No hay horarios disponibles este dia. Puedes programar tu servicio para el siguiente dia con espacios libres.
                </p>
                <button
                  type="button"
                  onClick={goToNextAvailableDay}
                  className="mt-4 rounded-xl bg-primary-500 px-4 py-3 font-heading text-xs font-extrabold text-foreground-950"
                >
                  Ver siguiente dia disponible
                </button>
              </div>
            ) : (
              <div className="mt-5 grid grid-cols-3 gap-2.5">
                {HORARIOS.map((slot) => {
                  const busy = occupied.includes(slot);
                  const active = selectedSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      disabled={busy}
                      onClick={() => setSelectedSlot(slot)}
                      className={`relative min-h-[76px] rounded-2xl border px-2 py-3 text-center transition ${
                        active
                          ? "border-primary-500 bg-primary-500 text-foreground-950 shadow-[0_12px_28px_rgba(200,166,106,0.35)]"
                          : busy
                            ? "cursor-not-allowed border-background-200 bg-background-200 text-foreground-400"
                            : "border-background-200 bg-background-50 text-foreground-950 hover:border-primary-300"
                      }`}
                    >
                      <span className="block font-heading text-[11px] font-extrabold leading-tight">{slot}</span>
                      <span className="mt-1 block text-[9px] font-bold uppercase tracking-wide">
                        {busy ? "Ocupado" : active ? "Elegido" : "Libre"}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            <button
              type="button"
              disabled={!selectedSlot}
              onClick={handleConfirm}
              className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 font-heading text-sm font-extrabold tracking-wide transition ${
                selectedSlot
                  ? "bg-foreground-950 text-background-50 hover:bg-foreground-800"
                  : "cursor-not-allowed bg-background-200 text-foreground-400"
              }`}
            >
              Solicitar {selectedSlot || "horario"}
              <i className="ri-arrow-right-line text-lg" />
            </button>
          </div>
        )}

        {view === "success" && (
          <div className="px-5 pb-6 pt-14 text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-foreground-950">
              <i className="ri-check-line text-3xl" />
            </span>
            <h2 className="mt-4 font-heading text-xl font-extrabold text-foreground-950">Solicitud recibida</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground-500">
              Guardamos tu solicitud para {servicio.nombre}. ALÉA confirmara tu cita por WhatsApp.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full rounded-xl bg-foreground-950 px-5 py-4 font-heading text-sm font-extrabold text-background-50"
            >
              Listo
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
}
