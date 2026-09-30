import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ServiceSelector from "@/pages/agenda/components/ServiceSelector";
import BookingSummary from "@/pages/agenda/components/BookingSummary";
import BookingSuccess from "@/pages/agenda/components/BookingSuccess";
import DateStrip from "@/components/feature/DateStrip";
import TimeSlotPicker from "@/components/feature/TimeSlotPicker";
import { services } from "@/mocks/services";
import { useClient } from "@/hooks/useClient";
import { getUpcomingDays, toDateKey } from "@/utils/date";

export default function Agenda() {
  const { client, addAppointment } = useClient();
  const [searchParams] = useSearchParams();

  const days = useMemo(() => getUpcomingDays(14), []);
  const initialService = searchParams.get("servicio");

  const [serviceId, setServiceId] = useState(
    initialService && services.some((item) => item.id === initialService)
      ? initialService
      : services[0].id,
  );
  const [selectedDate, setSelectedDate] = useState<Date>(days[0]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const dateKey = toDateKey(selectedDate);
  const service = services.find((item) => item.id === serviceId) ?? services[0];

  const handleSelectDate = (day: Date) => {
    setSelectedDate(day);
    setSelectedSlot(null);
  };

  const handleConfirm = () => {
    if (!selectedSlot) return;
    addAppointment({
      serviceId: service.id,
      serviceName: service.name,
      date: dateKey,
      slot: selectedSlot,
    });
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    setSelectedSlot(null);
  };

  if (confirmed && selectedSlot) {
    return (
      <BookingSuccess
        serviceName={service.name}
        dateKey={dateKey}
        slot={selectedSlot}
        clientName={client?.name ?? ""}
        onReset={handleReset}
      />
    );
  }

  return (
    <div className="animate-fade-in">
      <header className="px-5 pb-4 pt-6">
        <p className="font-label text-[10px] font-bold uppercase tracking-[0.28em] text-accent-700">
          ALÉA Club
        </p>
        <h1 className="mt-1 font-heading text-xl font-extrabold text-foreground-950">
          Agenda tu cita
        </h1>
        <p className="mt-0.5 text-xs leading-relaxed text-foreground-600">
          Elige servicio, día y horario. Atención de 10:00 a 19:00 con citas de 1 hora.
        </p>
      </header>

      <section className="px-5">
        <h2 className="mb-3 font-heading text-sm font-bold text-foreground-950">
          1. Elige tu servicio
        </h2>
        <ServiceSelector services={services} selectedId={serviceId} onSelect={setServiceId} />
      </section>

      <section className="mt-6 px-5">
        <h2 className="mb-3 font-heading text-sm font-bold text-foreground-950">2. Elige el día</h2>
        <DateStrip days={days} selectedKey={dateKey} onSelect={handleSelectDate} />
      </section>

      <section className="mt-6 px-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="font-heading text-sm font-bold text-foreground-950">
            3. Elige el horario
          </h2>
          <span className="inline-flex items-center gap-1 font-label text-[11px] font-medium text-foreground-600">
            <span className="h-2 w-2 rounded-full bg-accent-500" />
            Disponible
          </span>
        </div>
        <TimeSlotPicker dateKey={dateKey} selected={selectedSlot} onSelect={setSelectedSlot} />
      </section>

      {selectedSlot ? (
        <section className="mt-6 px-5">
          <BookingSummary
            clientName={client?.name ?? ""}
            clientPhone={client?.phone ?? ""}
            serviceName={service.name}
            dateKey={dateKey}
            slot={selectedSlot}
            onConfirm={handleConfirm}
          />
        </section>
      ) : null}

      <p className="px-5 pb-4 pt-6 text-center text-[11px] leading-relaxed text-foreground-500">
        Las citas se confirman por WhatsApp según disponibilidad de la cabina.
      </p>
    </div>
  );
}