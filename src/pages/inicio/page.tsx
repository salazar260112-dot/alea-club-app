import { useState } from "react";
import InicioHeader from "@/pages/inicio/components/InicioHeader";
import BenefitsBanner from "@/pages/inicio/components/BenefitsBanner";
import FeaturedPromo from "@/pages/inicio/components/FeaturedPromo";
import SolicitarCitaCta from "@/pages/inicio/components/SolicitarCitaCta";
import QuickAccess from "@/pages/inicio/components/QuickAccess";
import TipsSection from "@/pages/inicio/components/TipsSection";
import PromoModal from "@/pages/promos/components/PromoModal";
import { useClient } from "@/hooks/useClient";
import { promos } from "@/mocks/promos";
import { tips } from "@/mocks/tips";
import type { Promo } from "@/types";

export default function InicioPage() {
  const { client } = useClient();
  const [activePromo, setActivePromo] = useState<Promo | null>(null);

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
        <SolicitarCitaCta />
        <TipsSection tips={tips} featuredId={featuredTip.id} />
        <QuickAccess />
      </div>

      <PromoModal promo={activePromo} onClose={() => setActivePromo(null)} />
    </div>
  );
}