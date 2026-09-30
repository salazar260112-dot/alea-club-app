export const siteConfig = {
  brand: "ALÉA Club",
  house: "ALÉA Aesthetic House",
  whatsappNumber: "5215500000000",
  whatsappDisplay: "WhatsApp ALÉA",
  email: "contacto@aleaaesthetic.com.mx",
  address: "Culiacán, Sinaloa",
  hoursLabel: "Lun a Sáb · 10:00 a 19:00",
  instagram: "@alea.aesthetic",
  currencySymbol: "$",
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
