const BANNER_IMAGE =
  "https://readdy.ai/api/search-image?query=Abstract%20elegant%20gold%20and%20charcoal%20gradient%20texture%20with%20warm%20beige%20silk%20flow%2C%20premium%20beauty%20brand%20banner%2C%20soft%20luxury%20minimal%20artistic%20background%2C%20warm%20tones%2C%20dark%20for%20text%20contrast%2C%20no%20text&width=1000&height=560&seq=alea-banner-benefits-01&orientation=landscape";

export default function BenefitsBanner() {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-xl">
      <img src={BANNER_IMAGE} alt="Beneficios exclusivos ALÉA Club" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground-950/85 via-foreground-950/60 to-foreground-950/30" />
      <div className="absolute inset-0 flex flex-col justify-center px-5">
        <span className="font-heading text-[10px] font-bold uppercase tracking-[0.28em] text-primary-400">
          Beneficios
        </span>
        <h2 className="mt-1.5 max-w-[240px] font-heading text-lg font-extrabold leading-tight text-background-50">
          Beneficios exclusivos ALÉA Club
        </h2>
        <p className="mt-1.5 max-w-[230px] text-xs leading-relaxed text-background-200">
          Promos preferentes, productos y seguimiento en un solo lugar.
        </p>
      </div>
    </div>
  );
}