import { useState } from "react";
import PromoCard from "@/components/feature/cards/PromoCard";
import PromoDetailModal from "@/components/feature/PromoDetailModal";
import { promotions } from "@/mocks/promotions";
import type { Promotion } from "@/types/content";

export default function Promociones() {
  const [activePromo, setActivePromo] = useState<Promotion | null>(null);

  return (
    <div className="animate-fade-in">
      <header className="px-5 pb-4 pt-6">
        <p className="font-label text-[10px] font-bold uppercase tracking-[0.28em] text-accent-700">
          ALÉA Club
        </p>
        <h1 className="mt-1 font-heading text-xl font-extrabold text-foreground-950">
          Promociones
        </h1>
        <p className="mt-0.5 text-xs leading-relaxed text-foreground-600">
          Beneficios exclusivos vigentes para clientas del club. Solicita la tuya y confirmamos por
          WhatsApp.
        </p>
      </header>

      <div className="flex flex-col gap-4 px-5">
        {promotions.map((promo) => (
          <PromoCard key={promo.id} promo={promo} onRequest={setActivePromo} />
        ))}
      </div>

      <p className="px-5 pb-4 pt-5 text-center text-[11px] leading-relaxed text-foreground-500">
        Las promociones son válidas durante su vigencia y sujetas a disponibilidad de agenda.
      </p>

      <PromoDetailModal promo={activePromo} onClose={() => setActivePromo(null)} />
    </div>
  );
}