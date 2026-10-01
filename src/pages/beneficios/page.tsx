import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/feature/PageHeader";
import SectionHeader from "@/components/base/SectionHeader";
import BenefitWalletCard from "@/pages/beneficios/components/BenefitWalletCard";
import BenefitDetailModal from "@/pages/beneficios/components/BenefitDetailModal";
import AdvantagesStrip from "@/pages/beneficios/components/AdvantagesStrip";
import { clubBenefits } from "@/mocks/clubBenefits";
import { useClient } from "@/hooks/useClient";
import type { ClubBenefit } from "@/types/content";

export default function Beneficios() {
  const { client } = useClient();
  const [activeBenefit, setActiveBenefit] = useState<ClubBenefit | null>(null);

  const availableCount = clubBenefits.filter(
    (benefit) => benefit.status === "available" || benefit.status === "active",
  ).length;

  return (
    <div className="animate-fade-in">
      <PageHeader title="Mis beneficios" subtitle="Cupones y recompensas" backTo="/" />

      <section className="px-5 pt-5">
        <div className="relative overflow-hidden rounded-3xl border border-accent-200/70 p-5 shadow-soft">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-100/85 via-background-50/70 to-secondary-100/80 backdrop-blur-md" />
          <div className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-accent-300/40 blur-2xl" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-background-50/60 to-transparent" />

          <div className="relative flex items-center gap-3.5">
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-accent-500 text-primary-950">
              <i className="ri-vip-diamond-line text-2xl leading-none" />
            </span>
            <div className="min-w-0">
              <h2 className="font-heading text-base font-extrabold leading-tight text-foreground-950">
                {client?.name ? `Wallet de ${client.name}` : "Tu wallet de recompensas"}
              </h2>
              <p className="mt-0.5 text-xs leading-relaxed text-foreground-600">
                Cupones, dinámicas y cashback en un solo lugar.
              </p>
            </div>
          </div>

          <div className="relative mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-background-200 bg-background-50/80 px-4 py-3">
              <p className="font-heading text-xl font-extrabold text-foreground-950">
                {availableCount}
              </p>
              <p className="mt-0.5 font-label text-[11px] font-semibold text-foreground-600">
                Activos ahora
              </p>
            </div>
            <div className="rounded-2xl border border-background-200 bg-background-50/80 px-4 py-3">
              <p className="font-heading text-xl font-extrabold text-foreground-950">
                {clubBenefits.length}
              </p>
              <p className="mt-0.5 font-label text-[11px] font-semibold text-foreground-600">
                Beneficios del club
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 px-5">
        <SectionHeader title="Mis recompensas" subtitle="Estado de cada beneficio" />
        <div className="flex flex-col gap-3">
          {clubBenefits.map((benefit) => (
            <BenefitWalletCard key={benefit.id} benefit={benefit} onOpen={setActiveBenefit} />
          ))}
        </div>
      </section>

      <section className="mt-7 px-5">
        <SectionHeader title="Ventajas de tu club" subtitle="Solo por ser parte del club" />
        <AdvantagesStrip />
      </section>

      <p className="px-5 pb-2 pt-5 text-center text-[11px] leading-relaxed text-foreground-500">
        Los beneficios se activan y se actualizan desde el panel de administración según tu
        historial como clienta.
      </p>

      <section className="px-5 pb-4 pt-3">
        <Link
          to="/"
          className="inline-flex h-11 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-background-300 bg-background-50 font-label text-sm font-semibold text-foreground-950 transition-colors hover:border-accent-400"
        >
          <i className="ri-arrow-left-line text-base leading-none" />
          Volver al inicio
        </Link>
      </section>

      <BenefitDetailModal benefit={activeBenefit} onClose={() => setActiveBenefit(null)} />
    </div>
  );
}