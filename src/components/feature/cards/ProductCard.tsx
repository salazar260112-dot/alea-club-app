import { Link } from "react-router-dom";
import { buttonClass } from "@/components/base/Button";
import Badge from "@/components/base/Badge";
import { formatPrice } from "@/utils/format";
import type { Product } from "@/types/content";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = "" }: ProductCardProps) {
  const to = `/productos/${product.id}`;

  return (
    <div
      data-product-shop
      className={`flex flex-col overflow-hidden rounded-2xl border border-background-200/80 bg-background-50 shadow-soft transition-all duration-200 hover:shadow-card ${className}`}
    >
      <Link to={to} className="block cursor-pointer">
        <div className="relative h-40 w-full overflow-hidden bg-background-100 sm:h-44">
          <img
            src={product.image}
            alt={`${product.name} — ${product.category} ALÉA Skin`}
            title={`${product.name} ALÉA Skin`}
            className="h-full w-full object-cover object-top"
          />
          <span className="absolute left-3 top-3">
            <Badge tone="accent">{product.category}</Badge>
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link to={to} className="cursor-pointer">
          <h3 className="font-heading text-sm font-bold leading-snug text-foreground-950 line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs leading-relaxed text-foreground-600 line-clamp-2">
          {product.benefit}
        </p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <span className="font-heading text-base font-extrabold text-foreground-950">
            {formatPrice(product.price)}
          </span>
          <Link to={to} className={buttonClass("primary", "sm")}>
            Comprar
          </Link>
        </div>
      </div>
    </div>
  );
}