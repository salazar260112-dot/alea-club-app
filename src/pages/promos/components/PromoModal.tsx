import { useEffect, useState } from "react";
import Modal from "@/components/base/Modal";
import { useClient } from "@/hooks/useClient";
import { openWhatsApp, promoMessage } from "@/lib/whatsapp";
import type { Promo } from "@/types";

interface PromoModalProps {
  promo: Promo | null;
  onClose: () => void;
}

export default function PromoModal({ promo, onClose }: PromoModalProps) {
  const { client, addPromoSolicitud } = useClient();
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setSent(false);
  }, [promo?.id]);

  if (!promo) return null;

  const handleRequest = () => {
    if (client) {
      addPromoSolicitud(promo.nombre);
      openWhatsApp(promoMessage(client, promo.nombre));
    }
    setSent(true);
  };

  return (
    <Modal open={Boolean(promo)} onClose={onClose} labelledBy="promo-modal-title">
      <div className="h-56 w-full overflow-hidden">
        <img src={promo.imagen} alt={promo.nombre} className="h-full w-full object-cover" />
      </div>

      <div className="p-6">
        <span className="inline-flex items-center gap-1 rounded-full bg-primary-100 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-wider text-primary-800">
          <i className="ri-bookmark-3-line text-xs" />
          {promo.categoria}
        </span>

        <h2
          id="promo-modal-title"
          className="mt-3 font-heading text-xl font-extrabold tracking-tight text-foreground-950"
        >
          {promo.nombre}
        </h2>

        <div className="mt-2 flex items-center gap-3">
          <span className="font-heading text-2xl font-extrabold text-primary-700">{promo.precio}</span>
          <span className="inline-flex items-center gap-1 text-xs text-foreground-500">
            <i className="ri-calendar-line" />
            {promo.vigencia}
          </span>
        </div>

        <div className="mt-5">
          <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-foreground-700">
            Qué incluye
          </h3>
          <ul className="mt-2 flex flex-col gap-1.5">
            {promo.incluye.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground-700">
                <i className="ri-check-line mt-0.5 text-primary-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-foreground-700">
            Condiciones
          </h3>
          <ul className="mt-2 flex flex-col gap-1.5">
            {promo.condiciones.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-foreground-500">
                <i className="ri-information-line mt-0.5 text-foreground-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {sent ? (
          <div className="mt-6 flex items-start gap-3 rounded-md border border-primary-200 bg-primary-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-500 text-foreground-950">
              <i className="ri-check-line text-lg" />
            </span>
            <p className="text-xs leading-relaxed text-foreground-700">
              Tu solicitud fue enviada. Continúa en WhatsApp para confirmar tu promoción con ALÉA.
            </p>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleRequest}
            className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-foreground-950 px-6 py-3.5 font-heading text-sm font-bold tracking-wide text-background-50 transition-colors hover:bg-foreground-800"
          >
            <i className="ri-whatsapp-line text-lg" />
            Solicitar esta promoción
          </button>
        )}
      </div>
    </Modal>
  );
}