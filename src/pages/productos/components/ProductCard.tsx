import type { Producto } from "@/types";

interface ProductCardProps {
  producto: Producto;
  onOpen: (producto: Producto) => void;
}

export default function ProductCard({ producto, onOpen }: ProductCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(producto)}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-lg border border-background-200 bg-background-50 text-left transition-colors hover:border-primary-300"
    >
      <div className="h-36 w-full overflow-hidden bg-background-100">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-3.5">
        <span className="font-heading text-[9px] font-semibold uppercase tracking-wider text-foreground-400">
          {producto.categoria}
        </span>
        <h3 className="mt-1 font-heading text-sm font-bold leading-snug text-foreground-950">
          {producto.nombre}
        </h3>
        <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-foreground-500">
          {producto.beneficio}
        </p>
        <span className="mt-2.5 font-heading text-base font-extrabold text-primary-700">
          {producto.precio}
        </span>
      </div>
    </button>
  );
}