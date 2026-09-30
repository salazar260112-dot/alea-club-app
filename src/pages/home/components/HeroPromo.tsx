import { Link } from "react-router-dom";

export default function HeroPromo() {
  return (
    <section className="px-5">
      <div className="relative overflow-hidden rounded-3xl bg-primary-900">
        <img
          src="https://readdy.ai/api/search-image?query=Bright%20modern%20aesthetic%20clinic%20skincare%20scene%20with%20clean%20white%20surfaces%2C%20soft%20beige%20folded%20towels%2C%20minimal%20glass%20serum%20bottles%2C%20warm%20natural%20diffused%20light%2C%20premium%20clinical%20beauty%20photography%2C%20airy%20calm%20composition%20high%20detail&width=1200&height=800&seq=alea-hero-ritual&orientation=landscape"
          alt="Cabina de tratamiento facial clínico de ALÉA Aesthetic House"
          title="Ritual Glow — ALÉA Aesthetic House"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/90 via-foreground-950/55 to-foreground-950/20" />
        <div className="relative flex min-h-[340px] w-full flex-col justify-end p-5">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-500 px-3 py-1 font-label text-[11px] font-bold text-primary-950">
            <i className="ri-fire-line text-sm leading-none" />
            Promo del mes
          </span>
          <h2 className="mt-3 font-heading text-2xl font-extrabold leading-tight text-background-50">
            Ritual Glow de Temporada
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-background-200">
            Limpieza profunda + hidratación + terapia LED por{" "}
            <span className="font-label font-bold text-background-50">$1,290</span>
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <Link
              to="/agenda"
              className="inline-flex h-12 flex-1 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-accent-500 font-label text-sm font-bold text-primary-950 transition-colors hover:bg-accent-400"
            >
              <i className="ri-calendar-check-line text-lg leading-none" />
              Agenda ahora
            </Link>
            <Link
              to="/productos"
              className="inline-flex h-12 flex-1 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-background-50/95 font-label text-sm font-bold text-foreground-950 transition-colors hover:bg-background-50"
            >
              <i className="ri-shopping-bag-3-line text-lg leading-none" />
              Comprar productos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}