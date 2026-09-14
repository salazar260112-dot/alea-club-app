import { useState } from "react";
import PageHeader from "@/components/feature/PageHeader";
import ProductCard from "@/pages/productos/components/ProductCard";
import ProductModal from "@/pages/productos/components/ProductModal";
import { productos } from "@/mocks/productos";
import type { Producto } from "@/types";

export default function ProductosPage() {
  const [active, setActive] = useState<Producto | null>(null);
  const lista = productos as Producto[];

  return (
    <div className="animate-fade-in">
      <PageHeader title="Productos ALÉA Skin" subtitle="Tu rutina glow, con respaldo clínico" />

      <div className="px-5 pt-4">
        <div className="flex items-start gap-3 rounded-lg bg-background-100 p-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary-500 text-foreground-950">
            <i className="ri-leaf-line text-lg" />
          </span>
          <p className="text-xs leading-relaxed text-foreground-600">
            Productos seleccionados por ALÉA para mantener tus resultados en casa. Compra directo por WhatsApp.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 pb-6">
          {lista.map((producto) => (
            <ProductCard key={producto.id} producto={producto} onOpen={setActive} />
          ))}
        </div>
      </div>

      <ProductModal producto={active} onClose={() => setActive(null)} />
    </div>
  );
}