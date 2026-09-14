import { useMemo, useState } from "react";
import PageHeader from "@/components/feature/PageHeader";
import PromoCard from "@/pages/promos/components/PromoCard";
import PromoModal from "@/pages/promos/components/PromoModal";
import { promos } from "@/mocks/promos";
import type { Promo } from "@/types";

const categorias = ["Todas", "Facial", "Corporal"];

export default function PromosPage() {
  const [activePromo, setActivePromo] = useState<Promo | null>(null);
  const [filtro, setFiltro] = useState("Todas");

  const lista = useMemo(() => {
    const all = promos as Promo[];
    if (filtro === "Todas") return all;
    return all.filter((promo) => promo.categoria === filtro);
  }, [filtro]);

  return (
    <div className="animate-fade-in">
      <PageHeader title="Promociones" subtitle="Beneficios exclusivos ALÉA Club" />

      <div className="px-5 pt-4">
        <div className="flex flex-wrap gap-2">
          {categorias.map((categoria) => {
            const active = filtro === categoria;
            return (
              <button
                key={categoria}
                type="button"
                onClick={() => setFiltro(categoria)}
                className={`cursor-pointer whitespace-nowrap rounded-full px-4 py-1.5 font-heading text-xs font-semibold transition-colors ${
                  active
                    ? "bg-foreground-950 text-background-50"
                    : "bg-background-100 text-foreground-600 hover:bg-background-200"
                }`}
              >
                {categoria}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex flex-col gap-3 pb-6">
          {lista.map((promo) => (
            <PromoCard key={promo.id} promo={promo} onOpen={setActivePromo} />
          ))}
          {lista.length === 0 && (
            <p className="py-10 text-center text-sm text-foreground-400">
              No hay promociones en esta categoría.
            </p>
          )}
        </div>
      </div>

      <PromoModal promo={activePromo} onClose={() => setActivePromo(null)} />
    </div>
  );
}