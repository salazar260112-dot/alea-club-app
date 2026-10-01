import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    id: "limpieza-facial-profunda",
    name: "Limpieza Facial Profunda",
    category: "Facial",
    image:
      "https://readdy.ai/api/search-image?query=Close%20up%20of%20a%20professional%20facial%20cleansing%20treatment%20with%20soft%20white%20towels%20and%20gentle%20foam%20in%20a%20warm%20white%20clinical%20spa%20setting%2C%20soft%20diffused%20natural%20light%2C%20premium%20clinical%20skincare%20photography%2C%20calm%20airy%20composition&width=800&height=800&seq=alea-serv-limpieza&orientation=squarish",
    price: 650,
    priceFrom: true,
    duration: "60 min",
    description:
      "Higiene facial profunda con extracción, exfoliación enzimática y máscara calmante. Deja la piel visiblemente limpia, suave y libre de impurezas.",
    benefits: [
      "Elimina puntos negros y células muertas",
      "Reduce la apariencia de poros dilatados",
      "Piel fresca, suave y luminosa",
    ],
  },
  {
    id: "hidratacion-acido-hialuronico",
    name: "Hidratación con Ácido Hialurónico",
    category: "Facial",
    image:
      "https://readdy.ai/api/search-image?query=Minimal%20dropper%20bottle%20of%20clear%20hyaluronic%20serum%20with%20a%20glossy%20droplet%20on%20a%20warm%20white%20surface%2C%20clean%20clinical%20product%20photography%2C%20soft%20natural%20lighting%2C%20premium%20skincare%20aesthetic%2C%20high%20detail%20calm%20composition&width=800&height=800&seq=alea-serv-hidratacion&orientation=squarish",
    price: 850,
    priceFrom: false,
    duration: "60 min",
    description:
      "Tratamiento de hidratación profunda con ácido hialurónico de bajo y alto peso molecular. Rellena, alisa y devuelve volumen a la piel deshidratada.",
    benefits: [
      "Hidratación profunda y duradera",
      "Efecto lifting inmediato",
      "Reduce líneas de deshidratación",
    ],
  },
  {
    id: "peeling-quimico",
    name: "Peeling Químico",
    category: "Renovación",
    image:
      "https://readdy.ai/api/search-image?query=Clinical%20chemical%20peel%20treatment%20tools%20and%20minimal%20glass%20bottles%20arranged%20on%20a%20warm%20white%20surface%20with%20soft%20beige%20accents%2C%20clean%20aesthetic%20clinic%20photography%2C%20soft%20natural%20light%2C%20premium%20skincare%20mood&width=800&height=800&seq=alea-serv-peeling&orientation=squarish",
    price: 950,
    priceFrom: true,
    duration: "60 min",
    description:
      "Renovación celular controlada con ácidos clínicos para mejorar textura, manchas y luminosidad. Protocolo personalizado según tu tipo de piel.",
    benefits: [
      "Mejora textura y poros",
      "Unifica el tono de la piel",
      "Estimula la renovación celular",
    ],
  },
  {
    id: "microneedling-dermapen",
    name: "Microneedling Dermapen",
    category: "Tecnología",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20professional%20microneedling%20dermapen%20device%20on%20a%20clean%20warm%20white%20clinical%20table%20with%20minimal%20skincare%20items%2C%20soft%20diffused%20light%2C%20premium%20aesthetic%20clinic%20photography%2C%20high%20detail%20calm%20mood&width=800&height=800&seq=alea-serv-dermapen&orientation=squarish",
    price: 1200,
    priceFrom: false,
    duration: "60 min",
    description:
      "Inducción de colágeno con microagujas de precisión. Ideal para cicatrices, poros y firmeza. Estimula la piel desde la dermis.",
    benefits: [
      "Estimula colágeno y elastina",
      "Reduce cicatrices y marcas",
      "Mejora firmeza y textura",
    ],
  },
  {
    id: "radiofrecuencia-facial",
    name: "Radiofrecuencia Facial",
    category: "Tecnología",
    image:
      "https://readdy.ai/api/search-image?query=Sleek%20modern%20radiofrequency%20facial%20device%20resting%20on%20a%20clean%20white%20clinical%20surface%20beside%20a%20folded%20beige%20towel%2C%20soft%20natural%20lighting%2C%20premium%20aesthetic%20technology%20photography%2C%20minimal%20composition&width=800&height=800&seq=alea-serv-radiofrecuencia&orientation=squarish",
    price: 1100,
    priceFrom: false,
    duration: "60 min",
    description:
      "Tensado facial con radiofrecuencia que calienta la dermis de forma controlada para estimular colágeno y reafirmar el óvalo facial.",
    benefits: [
      "Efecto tensor y reafirmante",
      "Estimula producción de colágeno",
      "Reduce flacidez y líneas finas",
    ],
  },
  {
    id: "facial-antimanchas",
    name: "Facial Antimanchas",
    category: "Despigmentación",
    image:
      "https://readdy.ai/api/search-image?query=Bright%20even%20toned%20facial%20skin%20close%20up%20with%20soft%20warm%20lighting%20on%20a%20neutral%20background%2C%20clean%20clinical%20skincare%20photography%2C%20luminous%20healthy%20complexion%2C%20premium%20beauty%20aesthetic%2C%20minimal%20composition&width=800&height=800&seq=alea-serv-antimanchas&orientation=squarish",
    price: 980,
    priceFrom: false,
    duration: "60 min",
    description:
      "Protocolo despigmentante con activos clínicos para atenuar manchas, melasma y marcas de sol. Unifica y aclara el tono de forma progresiva.",
    benefits: [
      "Atenúa manchas y melasma",
      "Unifica el tono de piel",
      "Protege contra nuevas manchas",
    ],
  },
];