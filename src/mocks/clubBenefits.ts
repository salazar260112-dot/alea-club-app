import type { ClubBenefit } from "@/types/content";

export const clubBenefits: ClubBenefit[] = [
  {
    id: "cupon-bienvenida",
    icon: "ri-gift-2-line",
    title: "Cupón de bienvenida",
    statusLabel: "Disponible",
    status: "available",
    tone: "accent",
    description: "Obtén un beneficio especial en tu primera visita registrada.",
    detail:
      "Presenta este cupón en tu primera cita registrada y recibe un beneficio exclusivo de bienvenida. Válido para clientas nuevas del club y aplicable a cualquier tratamiento del catálogo.",
    ctaLabel: "Usar cupón",
    ctaEnabled: true,
    whatsappMessage:
      "Hola, quiero usar mi cupón de bienvenida en mi primera visita registrada.",
  },
  {
    id: "segunda-visita",
    icon: "ri-medal-2-line",
    title: "Segunda visita",
    statusLabel: "Próximo beneficio",
    status: "next",
    tone: "background",
    description: "Agenda tu segunda cita y desbloquea una recompensa especial.",
    detail:
      "Tu recompensa de segunda visita se activa automáticamente cuando registras tu segunda cita completada. Al desbloquearse verás aquí tu beneficio y podrás solicitarlo por WhatsApp.",
    ctaLabel: "Pendiente",
    ctaEnabled: false,
    whatsappMessage:
      "Hola, quiero información sobre la recompensa de segunda visita del club.",
  },
  {
    id: "dinamica-activa",
    icon: "ri-flashlight-line",
    title: "Dinámica activa",
    statusLabel: "Participando",
    status: "active",
    tone: "secondary",
    description: "Participa en dinámicas exclusivas para clientas registradas.",
    detail:
      "Estás participando en una dinámica activa del club. Comparte tu resultado en cabina, sube tu reseña o agenda en fechas seleccionadas para acumular puntos extra y desbloquear premios.",
    ctaLabel: "Ver dinámica",
    ctaEnabled: true,
    whatsappMessage:
      "Hola, quiero participar en la dinámica activa del club y conocer las bases.",
  },
  {
    id: "cashback-skincare",
    icon: "ri-wallet-3-line",
    title: "Cashback skincare",
    statusLabel: "Próximamente",
    status: "soon",
    tone: "background",
    description: "Acumula saldo para canjear en productos de skincare.",
    detail:
      "Muy pronto podrás acumular saldo con cada compra y canjearlo en la línea de productos de skincare. El cashback se activará desde el panel de administración.",
    ctaLabel: "Muy pronto",
    ctaEnabled: false,
    whatsappMessage: "Hola, quiero saber más sobre el cashback de skincare.",
  },
];