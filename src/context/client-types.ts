import { createContext } from "react";

export interface ClientInfo {
  name: string;
  phone: string;
  email: string;
}

export interface Appointment {
  id: string;
  serviceId: string;
  serviceName: string;
  date: string;
  slot: string;
  createdAt: string;
  status: "solicitada";
}

export interface PromoRequest {
  id: string;
  promoId: string;
  promoName: string;
  createdAt: string;
}

export interface ClientContextValue {
  client: ClientInfo | null;
  appointments: Appointment[];
  promoRequests: PromoRequest[];
  isRegistered: boolean;
  register: (info: ClientInfo) => void;
  updateClient: (info: ClientInfo) => void;
  addAppointment: (data: { serviceId: string; serviceName: string; date: string; slot: string }) => void;
  addPromoRequest: (data: { promoId: string; promoName: string }) => void;
  cancelAppointment: (id: string) => void;
  logout: () => void;
}

export const ClientContext = createContext<ClientContextValue | null>(null);