import type { Promotion } from "@/types/content";

export const promotions: Promotion[] = [
  {
    id: "primera-visita",
    name: "Primera Visita ALÉA",
    image:
      "https://readdy.ai/api/search-image?query=Elegant%20minimal%20facial%20treatment%20room%20in%20warm%20white%20and%20beige%20tones%20with%20skincare%20products%20and%20folded%20towels%20arranged%20neatly%2C%20soft%20diffused%20natural%20light%2C%20clean%20clinical%20beauty%20photography%2C%20calm%20premium%20spa%20atmosphere&width=800&height=800&seq=alea-promo-visita&orientation=squarish",
    headline: "30% de descuento en tu primera limpieza facial",
    priceLabel: "$455",
    originalPriceLabel: "$650",
    validity: "Cupos limitados · Solo clientas nuevas",
    includes: [
      "Limpieza facial profunda de 60 min",
      "Diagnóstico de piel personalizado",
      "Mini rutina de regalo para llevar",
    ],
    conditions:
      "Válido únicamente para clientas de primera vez. Una promoción por persona. Sujeto a disponibilidad de agenda.",
  },
  {
    id: "ritual-glow",
    name: "Ritual Glow de Temporada",
    image:
      "https://readdy.ai/api/search-image?query=Glowing%20healthy%20skin%20texture%20close%20up%20on%20a%20neutral%20warm%20white%20background%20with%20soft%20light%2C%20minimal%20clinical%20skincare%20photography%2C%20dewy%20hydrated%20skin%2C%20premium%20beauty%20aesthetic%2C%20clean%20composition&width=800&height=800&seq=alea-promo-glow&orientation=squarish",
    headline: "Limpieza + hidratación + terapia de luz LED",
    priceLabel: "$1,290",
    originalPriceLabel: "$1,780",
    validity: "Vigente este mes · Cupos limitados",
    includes: [
      "Limpieza facial profunda",
      "Hidratación con ácido hialurónico",
      "Terapia de luz LED iluminadora",
    ],
    conditions:
      "Cita de 90 minutos. Requiere reserva previa. No acumulable con otras promociones vigentes.",
  },
  {
    id: "pack-hidratacion",
    name: "Pack Hidratación x3",
    image:
      "https://readdy.ai/api/search-image?query=Three%20minimal%20skincare%20serum%20bottles%20in%20frosted%20glass%20with%20gold%20caps%20on%20a%20warm%20white%20surface%2C%20soft%20natural%20lighting%2C%20clean%20clinical%20product%20photography%2C%20elegant%20subtle%20shadows%2C%20premium%20skincare%20aesthetic&width=800&height=800&seq=alea-promo-pack&orientation=squarish",
    headline: "3 sesiones de hidratación profunda",
    priceLabel: "$2,100",
    originalPriceLabel: "$2,550",
    validity: "Vigente todo el mes · Sesiones acumulables",
    includes: [
      "3 sesiones de hidratación facial",
      "Aplicación de vitaminas C y E",
      "Seguimiento personalizado por WhatsApp",
    ],
    conditions:
      "Las sesiones deben usarse en un plazo máximo de 4 meses a partir de la compra. No reembolsable.",
  },
  {
    id: "trae-a-tu-amiga",
    name: "Trae a una Amiga",
    image:
      "https://readdy.ai/api/search-image?query=Two%20elegant%20glasses%20and%20fresh%20white%20towels%20styled%20beside%20skincare%20jars%20on%20a%20warm%20beige%20background%2C%20minimal%20wellness%20spa%20flatlay%2C%20soft%20natural%20light%2C%20clean%20premium%20beauty%20photography&width=800&height=800&seq=alea-promo-amiga&orientation=squarish",
    headline: "2x1 en facial express de 45 minutos",
    priceLabel: "2x1",
    validity: "Todo el mes · Cupos limitados",
    includes: [
      "Dos facials express de 45 min",
      "Máscara hidratante incluida",
      "Diagnóstico de piel para ambas",
    ],
    conditions:
      "Aplica solo agendando en pareja el mismo día y horario. Una promoción por persona al mes.",
  },
  {
    id: "mes-de-skincare",
    name: "Mes de Skincare",
    image:
      "https://readdy.ai/api/search-image?query=Flat%20lay%20of%20a%20minimal%20clinical%20skincare%20set%20with%20white%20and%20gold%20packaging%20on%20a%20warm%20off%20white%20background%2C%20soft%20diffused%20daylight%2C%20clean%20premium%20product%20photography%2C%20elegant%20airy%20composition&width=800&height=800&seq=alea-promo-skincare&orientation=squarish",
    headline: "20% de descuento en toda la línea ALÉA Skin",
    priceLabel: "20% OFF",
    validity: "Vigente este mes · Sin mínimo de compra",
    includes: [
      "20% en todos los productos ALÉA Skin",
      "Asesoría de rutina sin costo",
      "Envío gratis dentro de la ciudad",
    ],
    conditions:
      "Descuento aplicable solo en compras dentro del mes vigente. No acumulable con otras promociones.",
  },
];