export interface Promo {
  id: string;
  nombre: string;
  precio: string;
  vigencia: string;
  imagen: string;
  incluye: string[];
  condiciones: string[];
  categoria: string;
  destacada?: boolean;
}

export interface Producto {
  id: string;
  nombre: string;
  beneficio: string;
  precio: string;
  imagen: string;
  categoria: string;
}

export interface Tip {
  id: string;
  titulo: string;
  resumen: string;
  contenido: string;
  icono: string;
}

export interface Servicio {
  id: string;
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
  categoria: string;
  duracion: string;
  beneficios: string[];
  icono: string;
}

export interface CitaSolicitud {
  id: string;
  servicio: string;
  dia: string;
  horario: string;
  createdAt: string;
}

export interface PromoSolicitud {
  id: string;
  promo: string;
  createdAt: string;
}

export interface ClientSession {
  nombre: string;
  telefono: string;
  correo: string;
  createdAt: string;
  citas: CitaSolicitud[];
  promos: PromoSolicitud[];
}
