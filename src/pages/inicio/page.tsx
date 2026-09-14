import { useState } from "react";
import InicioHeader from "@/pages/inicio/components/InicioHeader";
import BenefitsBanner from "@/pages/inicio/components/BenefitsBanner";
import FeaturedPromo from "@/pages/inicio/components/FeaturedPromo";
import QuickAccess from "@/pages/inicio/components/QuickAccess";
import TipsSection from "@/pages/inicio/components/TipsSection";
import ServiceCard from "@/pages/inicio/components/ServiceCard";
import ServiceBookingModal from "@/pages/inicio/components/ServiceBookingModal";
import PromoModal from "@/pages/promos/components/PromoModal";
import { useClient } from "@/hooks/useClient";
import { promos } from "@/mocks/promos";
import { tips } from "@/mocks/tips";
import { servicios } from "@/mocks/servicios";
import type { Promo, Servicio } from "@/types";

export default function InicioPage() {
  const { client, addCita } = useClient();
  const [activePromo, setActivePromo] = useState<Promo | null>(null);
  const [activeService, setActiveService] = useState<Servicio | null>(null);

  if (!client) return null;

  const dayIndex = new Date().getDate();
  const featuredPromo = promos[dayIndex % promos.length] as Promo;
  const featuredTip = tips[dayIndex % tips.length];

  return (
    <div className="animate-fade-in">
      <InicioHeader nombre={client.nombre} />

      <div className="flex flex-col gap-6 px-5 pb-6 pt-5">
        <BenefitsBanner />
        <FeaturedPromo promo={featuredPromo} onOpen={setActivePromo} />

        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-primary-700">
                Servicios ALÉA
              </p>
              <h2 className="mt-1 font-heading text-xl font-extrabold tracking-tight text-foreground-950">
                Agenda desde la app
              </h2>
            </div>
            <span className="rounded-full bg-background-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-foreground-500">
              60 min
            </span>
          </div>

          <div className="grid gap-4">
            {servicios.map((servicio) => (
              <ServiceCard key={servicio.id} servicio={servicio} onOpen={setActiveService} />
            ))}
          </div>
        </section>

        <TipsSection tips={tips} featuredId={featuredTip.id} />
        <QuickAccess />
      </div>

      <PromoModal promo={activePromo} onClose={() => setActivePromo(null)} />
      <ServiceBookingModal
        servicio={activeService}
        client={client}
        onClose={() => setActiveService(null)}
        onConfirm={addCita}
      />
    </div>
  );
}
