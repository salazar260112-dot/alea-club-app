import type { Servicio } from "@/types";

export const servicios: Servicio[] = [
  {
    id: "srv-botox",
    nombre: "Botox / Baby Botox",
    descripcion:
      "Tratamiento estetico para suavizar lineas de expresion, conservar movimiento natural y dar una apariencia fresca sin cambiar tu esencia.",
    precio: "Desde $2,900",
    duracion: "60 min",
    categoria: "Facial",
    icono: "ri-drop-line",
    imagen:
      "https://readdy.ai/api/search-image?query=Luxury%20aesthetic%20clinic%20botox%20consultation%2C%20elegant%20woman%20skin%20closeup%2C%20deep%20charcoal%20background%20with%20warm%20gold%20light%2C%20premium%20clinical%20spa%20photography%2C%20modern%20medspa%20atmosphere&width=900&height=1100&seq=alea-service-botox-app-01&orientation=portrait",
    beneficios: ["Resultados naturales", "Valoracion previa", "Seguimiento sugerido"],
  },
  {
    id: "srv-labios",
    nombre: "Relleno y diseño de labios",
    descripcion:
      "Diseno personalizado con acido hialuronico para hidratar, perfilar o aportar volumen manteniendo armonia facial.",
    precio: "Desde $1,800",
    duracion: "60 min",
    categoria: "Facial",
    icono: "ri-heart-3-line",
    imagen:
      "https://readdy.ai/api/search-image?query=Elegant%20lip%20filler%20beauty%20closeup%2C%20natural%20glossy%20lips%2C%20deep%20espresso%20background%20with%20soft%20gold%20rim%20light%2C%20premium%20aesthetic%20clinic%20editorial%20photography&width=900&height=1100&seq=alea-service-labios-app-01&orientation=portrait",
    beneficios: ["Perfilado natural", "Hidratacion visible", "Armonizacion facial"],
  },
  {
    id: "srv-faciales",
    nombre: "Faciales profesionales",
    descripcion:
      "Protocolos de limpieza, exfoliacion e hidratacion profunda para mejorar textura, luminosidad y frescura de la piel.",
    precio: "Desde $1,200",
    duracion: "60 min",
    categoria: "Skin care",
    icono: "ri-sparkling-line",
    imagen:
      "https://readdy.ai/api/search-image?query=Professional%20facial%20treatment%20in%20luxury%20aesthetic%20spa%2C%20dark%20olive%20charcoal%20background%2C%20warm%20gold%20clinical%20light%2C%20clean%20premium%20skincare%20photography&width=900&height=1100&seq=alea-service-facial-app-01&orientation=portrait",
    beneficios: ["Limpieza profunda", "Glow inmediato", "Rutina recomendada"],
  },
  {
    id: "srv-aparato",
    nombre: "Aparatologia facial",
    descripcion:
      "Sesiones con tecnologia facial para apoyar firmeza, textura y apariencia tonificada segun necesidad de la piel.",
    precio: "Desde $1,500",
    duracion: "60 min",
    categoria: "Tecnologia",
    icono: "ri-flashlight-line",
    imagen:
      "https://readdy.ai/api/search-image?query=Advanced%20facial%20aesthetic%20device%20treatment%2C%20modern%20clinical%20spa%2C%20black%20and%20bronze%20lighting%2C%20premium%20high%20tech%20beauty%20photography&width=900&height=1100&seq=alea-service-aparato-app-01&orientation=portrait",
    beneficios: ["Tecnologia facial", "Efecto reafirmante", "Plan por zonas"],
  },
  {
    id: "srv-corporal",
    nombre: "Corporales reductivos",
    descripcion:
      "Tratamientos corporales para moldear, drenar y mejorar la textura de la piel con protocolos personalizados.",
    precio: "Desde $1,800",
    duracion: "60 min",
    categoria: "Corporal",
    icono: "ri-body-scan-line",
    imagen:
      "https://readdy.ai/api/search-image?query=Luxury%20body%20contouring%20aesthetic%20clinic%20scene%2C%20deep%20brown%20black%20background%2C%20warm%20gold%20light%2C%20premium%20medspa%20body%20treatment%20photography&width=900&height=1100&seq=alea-service-corporal-app-01&orientation=portrait",
    beneficios: ["Moldeo corporal", "Drenaje", "Plan por sesiones"],
  },
  {
    id: "srv-postop",
    nombre: "Post-operatorio / drenaje",
    descripcion:
      "Acompanamiento con drenaje linfatico para apoyar recuperacion, inflamacion y sensacion de ligereza posterior a procedimiento.",
    precio: "Desde $1,200",
    duracion: "60 min",
    categoria: "Recuperacion",
    icono: "ri-first-aid-kit-line",
    imagen:
      "https://readdy.ai/api/search-image?query=Luxury%20lymphatic%20drainage%20treatment%20room%2C%20calm%20clinical%20spa%2C%20dark%20warm%20neutral%20background%2C%20gold%20soft%20light%2C%20premium%20wellness%20photography&width=900&height=1100&seq=alea-service-postop-app-01&orientation=portrait",
    beneficios: ["Drenaje linfatico", "Acompanamiento", "Cuidado post sesion"],
  },
  {
    id: "srv-gluteos",
    nombre: "Levantamiento de gluteos",
    descripcion:
      "Protocolo corporal reafirmante y modelador enfocado en mejorar apariencia, tono y proyeccion visual.",
    precio: "Desde $3,200",
    duracion: "60 min",
    categoria: "Corporal",
    icono: "ri-fire-line",
    imagen:
      "https://readdy.ai/api/search-image?query=Premium%20body%20aesthetic%20spa%20detail%2C%20glute%20lifting%20treatment%20concept%20without%20nudity%2C%20black%20bronze%20luxury%20lighting%2C%20modern%20clinical%20wellness%20photography&width=900&height=1100&seq=alea-service-gluteos-app-01&orientation=portrait",
    beneficios: ["Reafirmante", "Modelador", "Recomendado en paquete"],
  },
  {
    id: "srv-bienestar",
    nombre: "Bienestar / masaje",
    descripcion:
      "Sesiones de relajacion y bienestar para liberar tension, mejorar descanso y complementar tus tratamientos esteticos.",
    precio: "Desde $900",
    duracion: "60 min",
    categoria: "Bienestar",
    icono: "ri-leaf-line",
    imagen:
      "https://readdy.ai/api/search-image?query=Luxury%20wellness%20massage%20spa%20room%2C%20dark%20taupe%20background%2C%20warm%20golden%20light%2C%20premium%20calm%20aesthetic%20clinic%20photography%2C%20elegant%20minimal%20composition&width=900&height=1100&seq=alea-service-bienestar-app-01&orientation=portrait",
    beneficios: ["Relajacion", "Bienestar corporal", "Complemento estetico"],
  },
];
