import { useMemo } from "react";
import { useClient } from "@/hooks/useClient";

export const TIME_SLOTS = [
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
  "17:00 - 18:00",
  "18:00 - 19:00",
] as const;

export interface SlotInfo {
  slot: string;
  available: boolean;
}

function hashString(value: string): number {
  let h = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function isClosedDay(dateKey: string): boolean {
  return new Date(`${dateKey}T00:00:00`).getDay() === 0;
}

export function useAvailability(dateKey: string) {
  const { appointments } = useClient();

  return useMemo(() => {
    const booked = appointments
      .filter((item) => item.date === dateKey)
      .map((item) => item.slot);
    const closed = isClosedDay(dateKey);

    const slots: SlotInfo[] = TIME_SLOTS.map((slot) => {
      const taken = hashString(`${dateKey}#${slot}`) % 100 < 36;
      const available = !closed && !taken && !booked.includes(slot);
      return { slot, available };
    });

    return {
      slots,
      isFull: slots.every((item) => !item.available),
    };
  }, [dateKey, appointments]);
}