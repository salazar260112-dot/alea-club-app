import { useMemo, useState } from "react";
import ProductCard from "@/components/feature/cards/ProductCard";
import { products } from "@/mocks/products";

const ALL = "Todos";

export default function Productos() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>(ALL);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((item) => item.category)));
    return [ALL, ...unique];
  }, []);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = category === ALL || product.category === category;
      const matchesQuery =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="animate-fade-in">
      <header className="px-5 pb-4 pt-6">
        <p className="font-label text-[10px] font-bold uppercase tracking-[0.28em] text-accent-700">
          ALÉA Skin
        </p>
        <h1 className="mt-1 font-heading text-xl font-extrabold text-foreground-950">
          Productos
        </h1>
        <p className="mt-0.5 text-xs leading-relaxed text-foreground-600">
          Skincare clínico formulado en cabina. Compra directa por WhatsApp.
        </p>
      </header>

      <div className="px-5">
        <div className="relative">
          <i className="ri-search-line pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-foreground-400" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar producto"
            className="h-12 w-full rounded-xl border border-background-300 bg-background-50 pl-11 pr-4 text-sm text-foreground-950 outline-none transition-colors placeholder:text-foreground-400 focus:border-accent-400"
          />
        </div>

        <div className="no-scrollbar -mx-5 mt-3 flex gap-2 overflow-x-auto px-5 pb-1">
          {categories.map((item) => {
            const isActive = item === category;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`flex-none cursor-pointer whitespace-nowrap rounded-full border px-4 py-2 font-label text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "border-primary-500 bg-primary-500 text-background-50"
                    : "border-background-300 bg-background-50 text-foreground-700 hover:border-accent-300"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-4 px-5">
        {filtered.length ? (
          <div className="grid grid-cols-2 gap-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-background-200 bg-background-100/70 px-5 py-10 text-center">
            <i className="ri-search-eye-line text-3xl text-foreground-400" />
            <p className="font-heading text-sm font-bold text-foreground-950">
              No encontramos productos
            </p>
            <p className="text-xs text-foreground-600">
              Prueba con otra palabra o cambia de categoría.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}