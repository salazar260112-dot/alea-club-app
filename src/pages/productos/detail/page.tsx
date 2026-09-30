import { Link, useParams } from "react-router-dom";
import PageHeader from "@/components/feature/PageHeader";
import Badge from "@/components/base/Badge";
import { products } from "@/mocks/products";
import { formatPrice } from "@/utils/format";
import { whatsappLink } from "@/config/site";
import { useClient } from "@/hooks/useClient";

export default function ProductDetail() {
  const { id } = useParams();
  const { client } = useClient();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div>
        <PageHeader title="Producto" backTo="/productos" />
        <div className="flex flex-col items-center gap-3 px-5 py-16 text-center">
          <i className="ri-shopping-bag-3-line text-3xl text-foreground-400" />
          <p className="font-heading text-base font-bold text-foreground-950">
            No encontramos este producto
          </p>
          <Link
            to="/productos"
            className="cursor-pointer font-label text-sm font-semibold text-accent-700"
          >
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  const buyMessage = `Hola ALÉA, quiero comprar ${product.name} (${formatPrice(
    product.price,
  )}). Mi nombre es ${client?.name ?? ""}.`;
  const adviseMessage = `Hola ALÉA, necesito asesoría sobre ${product.name}.`;

  return (
    <div className="animate-fade-in">
      <PageHeader title="Detalle del producto" backTo="/productos" />

      <div className="relative h-64 w-full overflow-hidden bg-background-100">
        <img
          src={product.image}
          alt={`${product.name} — ${product.category} ALÉA Skin`}
          title={`${product.name} ALÉA Skin`}
          className="h-full w-full object-cover object-top"
        />
        <span className="absolute left-5 top-5">
          <Badge tone="accent">{product.category}</Badge>
        </span>
      </div>

      <div className="flex flex-col gap-4 px-5 py-5">
        <div>
          <h1 className="font-heading text-xl font-extrabold leading-tight text-foreground-950">
            {product.name}
          </h1>
          <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700">
            <i className="ri-sparkling-2-line text-base leading-none" />
            {product.benefit}
          </p>
        </div>

        <span className="font-heading text-2xl font-extrabold text-foreground-950">
          {formatPrice(product.price)}
        </span>

        <div className="rounded-2xl bg-background-100/80 p-4">
          <h2 className="font-heading text-sm font-bold text-foreground-950">Descripción</h2>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground-600">
            {product.description}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: "ri-leaf-line", label: "Clínico" },
            { icon: "ri-shield-check-line", label: "Testeado" },
            { icon: "ri-truck-line", label: "Envío local" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-1 rounded-2xl border border-background-200 bg-background-50 py-3"
            >
              <i className={`${item.icon} text-lg leading-none text-secondary-600`} />
              <span className="font-label text-[10px] font-semibold text-foreground-600">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-1 flex flex-col gap-3">
          <a
            href={whatsappLink(buyMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 font-label text-sm font-semibold text-background-50 transition-colors hover:bg-primary-600"
          >
            <i className="ri-whatsapp-line text-lg leading-none" />
            Comprar por WhatsApp
          </a>
          <a
            href={whatsappLink(adviseMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-background-300 bg-background-50 font-label text-sm font-semibold text-foreground-950 transition-colors hover:border-accent-400"
          >
            <i className="ri-chat-3-line text-lg leading-none" />
            Pedir asesoría
          </a>
        </div>
      </div>
    </div>
  );
}