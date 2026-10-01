export const siteConfig = {
  brand: "ALÉA Club",
  house: "ALÉA Aesthetic House",
  whatsappUrl: "https://wa.me/message/O5E74LUUWYPYI1",
  whatsappDisplay: "WhatsApp ALÉA",
  email: "hola@aleaclub.com",
  address: "Av. Paseo de la Reforma 1234, Ciudad de México",
  hoursLabel: "Lun a Sáb · 10:00 a 19:00",
  instagram: "@alea.aesthetic",
  currencySymbol: "$",
};

export function whatsappLink(_message?: string): string {
  return siteConfig.whatsappUrl;
}
