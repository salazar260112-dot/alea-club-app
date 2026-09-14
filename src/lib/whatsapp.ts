import { ALEA_CLUB } from "./config";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${ALEA_CLUB.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  const url = buildWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}

interface ClientContact {
  nombre: string;
  telefono: string;
  correo: string;
}

export function citaMessage(client: ClientContact, servicio: string): string {
  return `Hola, soy ${client.nombre}. Quiero solicitar cita para ${servicio}. Mi teléfono es ${client.telefono} y mi correo es ${client.correo}.`;
}

export function promoMessage(client: ClientContact, promo: string): string {
  return `Hola, soy ${client.nombre}. Quiero información de la promoción "${promo}". Mi teléfono es ${client.telefono} y mi correo es ${client.correo}.`;
}

export function productoMessage(client: ClientContact, producto: string): string {
  return `Hola, soy ${client.nombre}. Quiero comprar ${producto}. Mi teléfono es ${client.telefono} y mi correo es ${client.correo}.`;
}