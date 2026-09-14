const ICON_URL =
  "https://readdy.ai/api/search-image?query=Minimal%20luxury%20app%20icon%20with%20a%20gold%20monogram%20letter%20A%20on%20deep%20charcoal%20black%20background%2C%20clinical%20premium%20beauty%20brand%20mark%2C%20centered%20composition%2C%20flat%20elegant%20design%2C%20soft%20gold%20gradient%2C%20no%20text&width=512&height=512&seq=alea-club-icon-01&orientation=squarish";

export function setupPwa(): void {
  try {
    const manifest = {
      name: "ALÉA Club",
      short_name: "ALÉA Club",
      description: "Promociones, beneficios y citas desde tu celular.",
      start_url: ".",
      scope: ".",
      display: "standalone",
      orientation: "portrait",
      background_color: "#101010",
      theme_color: "#101010",
      icons: [
        { src: ICON_URL, sizes: "192x192", type: "image/png", purpose: "any" },
        { src: ICON_URL, sizes: "512x512", type: "image/png", purpose: "any" },
      ],
    };

    const blob = new Blob([JSON.stringify(manifest)], { type: "application/manifest+json" });
    const manifestUrl = URL.createObjectURL(blob);

    const manifestLink = document.createElement("link");
    manifestLink.rel = "manifest";
    manifestLink.href = manifestUrl;
    document.head.appendChild(manifestLink);

    const appleIcon = document.createElement("link");
    appleIcon.rel = "apple-touch-icon";
    appleIcon.href = ICON_URL;
    document.head.appendChild(appleIcon);
  } catch {
    // PWA opcional: si falla, la app sigue funcionando normalmente.
  }
}