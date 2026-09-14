import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ClientSession, CitaSolicitud, PromoSolicitud } from "@/types";
import { clearClient, readClient, writeClient } from "@/lib/storage";

interface RegisterInput {
  nombre: string;
  telefono: string;
  correo: string;
}

interface ClientContextValue {
  client: ClientSession | null;
  isReady: boolean;
  register: (data: RegisterInput) => void;
  update: (data: RegisterInput) => void;
  addCita: (cita: { servicio: string; dia: string; horario: string }) => void;
  addPromoSolicitud: (promo: string) => void;
  logout: () => void;
}

const ClientContext = createContext<ClientContextValue | null>(null);

export function ClientProvider({ children }: { children: ReactNode }) {
  const [client, setClient] = useState<ClientSession | null>(() => readClient());

  const persist = useCallback((next: ClientSession) => {
    writeClient(next);
    setClient(next);
  }, []);

  const register = useCallback(
    (data: RegisterInput) => {
      persist({
        ...data,
        createdAt: new Date().toISOString(),
        citas: [],
        promos: [],
      });
    },
    [persist],
  );

  const update = useCallback(
    (data: RegisterInput) => {
      setClient((prev) => {
        if (!prev) return prev;
        const next = { ...prev, ...data };
        writeClient(next);
        return next;
      });
    },
    [],
  );

  const addCita = useCallback(
    ({ servicio, dia, horario }: { servicio: string; dia: string; horario: string }) => {
      setClient((prev) => {
        if (!prev) return prev;
        const cita: CitaSolicitud = {
          id: `cita-${Date.now()}`,
          servicio,
          dia,
          horario,
          createdAt: new Date().toISOString(),
        };
        const next = { ...prev, citas: [cita, ...prev.citas] };
        writeClient(next);
        return next;
      });
    },
    [],
  );

  const addPromoSolicitud = useCallback((promo: string) => {
    setClient((prev) => {
      if (!prev) return prev;
      const solicitud: PromoSolicitud = {
        id: `promo-${Date.now()}`,
        promo,
        createdAt: new Date().toISOString(),
      };
      const next = { ...prev, promos: [solicitud, ...prev.promos] };
      writeClient(next);
      return next;
    });
  }, []);

  const logout = useCallback(() => {
    clearClient();
    setClient(null);
  }, []);

  const value = useMemo<ClientContextValue>(
    () => ({
      client,
      isReady: true,
      register,
      update,
      addCita,
      addPromoSolicitud,
      logout,
    }),
    [client, register, update, addCita, addPromoSolicitud, logout],
  );

  return <ClientContext.Provider value={value}>{children}</ClientContext.Provider>;
}

export function useClient(): ClientContextValue {
  const ctx = useContext(ClientContext);
  if (!ctx) {
    throw new Error("useClient debe usarse dentro de ClientProvider");
  }
  return ctx;
}