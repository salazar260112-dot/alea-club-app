import { Link } from "react-router-dom";

export default function BenefitsQuickAccess() {
  return (
    <Link
      to="/beneficios"
      className="group relative block overflow-hidden rounded-3xl border border-accent-200/70 p-4 shadow-soft transition-shadow duration-200 hover:shadow-card"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-100/85 via-background-50/70 to-secondary-100/80 backdrop-blur-md" />
      <div className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-accent-300/40 blur-2xl" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-background-50/60 to-transparent" />

      <div className="relative flex items-center gap-3.5">
        <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-background-50/80 bg-background-50/60 text-accent-700 backdrop-blur">
          <i className="ri-gift-2-line text-2xl leading-none" />
        </span>
        <h3 className="min-w-0 flex-1 font-heading text-base font-extrabold leading-snug text-foreground-950">
          Mis beneficios
        </h3>
        <i className="ri-arrow-right-s-line flex-none text-xl leading-none text-accent-700 transition-transform group-hover:translate-x-0.5" />
      </div>

      <span className="relative mt-3.5 flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 font-label text-xs font-semibold text-background-50 transition-colors group-hover:bg-primary-600">
        <i className="ri-arrow-right-circle-line text-base leading-none" />
        Ver beneficios
      </span>
    </Link>
  );
}