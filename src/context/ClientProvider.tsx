import { useCallback, useMemo, useState, type ReactNode } from "react";
import {
  ClientContext,
  type Appointment,
  type ClientInfo,
  type PromoRequest,
} from "@/context/client-types";

const CLIENT_KEY = "alea.client";
const APPOINTMENTS_KEY = "alea.appointments";
const PROMOS_KEY = "alea.promos";

function readStorage<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeStorage(key: string, value: unknown): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage not available — keep in-memory only
  }
}

function createId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `id-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}

export function ClientProvider({ children }: { children: ReactNode }) {
  const [client, setClient] = useState<ClientInfo | null>(() =>
    readStorage<ClientInfo | null>(CLIENT_KEY, null),
  );
  const [appointments, setAppointments] = useState<Appointment[]>(() =>
    readStorage<Appointment[]>(APPOINTMENTS_KEY, []),
  );
  const [promoRequests, setPromoRequests] = useState<PromoRequest[]>(() =>
    readStorage<PromoRequest[]>(PROMOS_KEY, []),
  );

  const register = useCallback((info: ClientInfo) => {
    setClient(info);
    writeStorage(CLIENT_KEY, info);
  }, []);

  const updateClient = useCallback((info: ClientInfo) => {
    setClient(info);
    writeStorage(CLIENT_KEY, info);
  }, []);

  const addAppointment = useCallback(
    (data: { serviceId: string; serviceName: string; date: string; slot: string }) => {
      setAppointments((prev) => {
        const next: Appointment[] = [
          ...prev,
          {
            id: createId(),
            serviceId: data.serviceId,
            serviceName: data.serviceName,
            date: data.date,
            slot: data.slot,
            createdAt: new Date().toISOString(),
            status: "solicitada",
          },
        ];
        writeStorage(APPOINTMENTS_KEY, next);
        return next;
      });
    },
    [],
  );

  const addPromoRequest = useCallback((data: { promoId: string; promoName: string }) => {
    setPromoRequests((prev) => {
      const next: PromoRequest[] = [
        ...prev,
        {
          id: createId(),
          promoId: data.promoId,
          promoName: data.promoName,
          createdAt: new Date().toISOString(),
        },
      ];
      writeStorage(PROMOS_KEY, next);
      return next;
    });
  }, []);

  const cancelAppointment = useCallback((id: string) => {
    setAppointments((prev) => {
      const next = prev.filter((item) => item.id !== id);
      writeStorage(APPOINTMENTS_KEY, next);
      return next;
    });
  }, []);

  const logout = useCallback(() => {
    setClient(null);
    setAppointments([]);
    setPromoRequests([]);
    try {
      window.localStorage.removeItem(CLIENT_KEY);
      window.localStorage.removeItem(APPOINTMENTS_KEY);
      window.localStorage.removeItem(PROMOS_KEY);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo(
    () => ({
      client,
      appointments,
      promoRequests,
      isRegistered: Boolean(client),
      register,
      updateClient,
      addAppointment,
      addPromoRequest,
      cancelAppointment,
      logout,
    }),
    [
      client,
      appointments,
      promoRequests,
      register,
      updateClient,
      addAppointment,
      addPromoRequest,
      cancelAppointment,
      logout,
    ],
  );

  return <ClientContext.Provider value={value}>{children}</ClientContext.Provider>;
}