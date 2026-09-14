import { HORARIOS } from "@/lib/config";
import type { ClientSession } from "@/types";

export interface AgendaDay {
  key: string;
  label: string;
  dayNumber: number;
  month: string;
  dayOffset: number;
}

const DIAS = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

const adminConfirmedByOffset: Record<number, string[]> = {
  0: ["10:00 - 11:00", "11:00 - 12:00", "15:00 - 16:00"],
  1: ["12:00 - 13:00", "13:00 - 14:00", "17:00 - 18:00"],
  2: [...HORARIOS],
  3: ["10:00 - 11:00", "18:00 - 19:00"],
};

export function getAgendaDays(total = 7): AgendaDay[] {
  const base = new Date();
  return Array.from({ length: total }, (_, index) => {
    const date = new Date(base);
    date.setDate(base.getDate() + index);
    const dayName = DIAS[date.getDay()];
    const month = MESES[date.getMonth()];
    const key = `${dayName} ${date.getDate()} ${month}`;

    return {
      key,
      label: index === 0 ? "Hoy" : index === 1 ? "Manana" : dayName,
      dayNumber: date.getDate(),
      month,
      dayOffset: index,
    };
  });
}

export function getOccupiedSlots(day: AgendaDay, client?: ClientSession | null): string[] {
  const adminConfirmed = adminConfirmedByOffset[day.dayOffset] ?? [];
  const clientRequested = client?.citas
    .filter((cita) => cita.dia === day.key)
    .map((cita) => cita.horario) ?? [];

  return Array.from(new Set([...adminConfirmed, ...clientRequested]));
}

export function isFullyBooked(day: AgendaDay, client?: ClientSession | null): boolean {
  return getOccupiedSlots(day, client).length >= HORARIOS.length;
}
