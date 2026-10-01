import { useState } from "react";
import HomeHeader from "@/pages/home/components/HomeHeader";
import HeroPromo from "@/pages/home/components/HeroPromo";
import BenefitsQuickAccess from "@/pages/home/components/BenefitsQuickAccess";
import TipsList from "@/pages/home/components/TipsList";
import SectionHeader from "@/components/base/SectionHeader";
import PromoCard from "@/components/feature/cards/PromoCard";
import ServiceCard from "@/components/feature/cards/ServiceCard";
import ProductCard from "@/components/feature/cards/ProductCard";
import PromoDetailModal from "@/components/feature/PromoDetailModal";
import { promotions } from "@/mocks/promotions";
import { services } from "@/mocks/services";
import { products } from "@/mocks/products";
import type { Promotion } from "@/types/content";

export default function Home() {
  const [activePromo, setActivePromo] = useState<Promotion | null>(null);

  return (
    <div className="animate-fade-in">
      <HomeHeader />
      <HeroPromo />

      <section className="mt-6 px-5">
        <BenefitsQuickAccess />
      </section>

      <section className="mt-7 px-5">
        <SectionHeader
          title="Promociones destacadas"
          actionLabel="Ver todas"
          actionTo="/promociones"
        />
      </section>
      <div className="no-scrollbar flex gap-3 overflow-x-auto px-5 pb-1">
        {promotions.slice(0, 3).map((promo) => (
          <PromoCard
            key={promo.id}
            promo={promo}
            onRequest={setActivePromo}
            className="w-[262px] flex-none"
          />
        ))}
      </div>

      <section className="mt-7 px-5">
        <SectionHeader
          title="Servicios populares"
          subtitle="Tratamientos favoritos de nuestras clientas"
          actionLabel="Ver agenda"
          actionTo="/agenda"
        />
      </section>
      <div className="no-scrollbar flex gap-3 overflow-x-auto px-5 pb-1">
        {services.slice(0, 4).map((service) => (
          <ServiceCard key={service.id} service={service} className="w-[228px] flex-none" />
        ))}
      </div>

      <section className="mt-7 px-5">
        <SectionHeader
          title="Productos destacados"
          subtitle="Línea clínica ALÉA Skin"
          actionLabel="Ver catálogo"
          actionTo="/productos"
        />
        <div className="grid grid-cols-2 gap-3">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mt-7 px-5">
        <SectionHeader title="Consejos rápidos" subtitle="Cuidado de piel en 30 segundos" />
        <TipsList />
      </section>

      <section className="mt-8 px-5">
        <div className="flex flex-col items-center gap-2 rounded-3xl bg-background-100/80 px-5 py-6 text-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-500 text-background-50">
            <i className="ri-whatsapp-line text-xl leading-none" />
          </span>
          <h3 className="font-heading text-base font-bold text-foreground-950">
            ¿Dudas antes de agendar?
          </h3>
          <p className="max-w-[280px] text-xs leading-relaxed text-foreground-600">
            Escríbenos por WhatsApp y te ayudamos a elegir el tratamiento ideal para tu piel.
          </p>
          <a
            href="https://wa.me/5215555555555?text=Hola%20AL%C3%89A%2C%20quiero%20asesor%C3%ADa%20para%20elegir%20un%20tratamiento"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-background-300 bg-background-50 px-5 font-label text-sm font-semibold text-foreground-950 transition-colors hover:border-accent-400"
          >
            <i className="ri-chat-3-line text-base leading-none" />
            Pedir asesoría
          </a>
        </div>
      </section>

      <PromoDetailModal promo={activePromo} onClose={() => setActivePromo(null)} />
    </div>
  );
}