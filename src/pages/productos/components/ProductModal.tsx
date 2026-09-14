import { useEffect, useState } from "react";
import Modal from "@/components/base/Modal";
import { useClient } from "@/hooks/useClient";
import { openWhatsApp, productoMessage } from "@/lib/whatsapp";
import type { Producto } from "@/types";

interface ProductModalProps {
  producto: Producto | null;
  onClose: () => void;
}

export default function ProductModal({ producto, onClose }: ProductModalProps) {
  const { client } = useClient();
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setSent(false);
  }, [producto?.id]);

  if (!producto) return null;

  const handleBuy = () => {
    if (client) {
      openWhatsApp(productoMessage(client, producto.nombre));
    }
    setSent(true);
  };

  return (
    <Modal open={Boolean(producto)} onClose={onClose} labelledBy="product-modal-title">
      <div className="h-64 w-full overflow-hidden bg-background-100">
        <img src={producto.imagen} alt={producto.nombre} className="h-full w-full object-cover" />
      </div>

      <div className="p-6">
        <span className="inline-flex items-center gap-1 rounded-full bg-secondary-100 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-wider text-secondary-900">
          ALÉA Skin · {producto.categoria}
        </span>

        <h2
          id="product-modal-title"
          className="mt-3 font-heading text-xl font-extrabold tracking-tight text-foreground-950"
        >
          {producto.nombre}
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-foreground-600">{producto.beneficio}</p>

        <div className="mt-4 flex items-center justify-between rounded-lg bg-background-100 px-4 py-3">
          <span className="text-xs text-foreground-500">Precio</span>
          <span className="font-heading text-lg font-extrabold text-primary-700">{producto.precio}</span>
        </div>

        {sent ? (
          <div className="mt-5 flex items-start gap-3 rounded-md border border-primary-200 bg-primary-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-500 text-foreground-950">
              <i className="ri-check-line text-lg" />
            </span>
            <p className="text-xs leading-relaxed text-foreground-700">
              Continúa en WhatsApp para completar tu compra con ALÉA.
            </p>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleBuy}
            className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-foreground-950 px-6 py-3.5 font-heading text-sm font-bold tracking-wide text-background-50 transition-colors hover:bg-foreground-800"
          >
            <i className="ri-whatsapp-line text-lg" />
            Comprar por WhatsApp
          </button>
        )}
      </div>
    </Modal>
  );
}