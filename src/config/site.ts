export const siteConfig = {
  brand: "ALÉA Club",
  house: "ALÉA Aesthetic House",
  whatsappNumber: "5215555555555",
  whatsappDisplay: "+52 55 5555 5555",
  email: "hola@aleaclub.com",
  address: "Av. Paseo de la Reforma 1234, Ciudad de México",
  hoursLabel: "Lun a Sáb · 10:00 a 19:00",
  instagram: "@alea.aesthetic",
  currencySymbol: "$",
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}