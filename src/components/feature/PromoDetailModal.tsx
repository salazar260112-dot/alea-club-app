import Modal from "@/components/base/Modal";
import Badge from "@/components/base/Badge";
import { whatsappLink } from "@/config/site";
import { useClient } from "@/hooks/useClient";
import type { Promotion } from "@/types/content";

interface PromoDetailModalProps {
  promo: Promotion | null;
  onClose: () => void;
}

export default function PromoDetailModal({ promo, onClose }: PromoDetailModalProps) {
  const { client, addPromoRequest } = useClient();

  if (!promo) return null;

  const message = `Hola ALÉA, quiero solicitar la promoción "${promo.name}" (${promo.priceLabel}). Mi nombre es ${
    client?.name ?? ""
  }.`;

  return (
    <Modal
      open={Boolean(promo)}
      onClose={onClose}
      title="Detalle de la promoción"
      footer={
        <div className="flex flex-col gap-2">
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              addPromoRequest({ promoId: promo.id, promoName: promo.name });
              onClose();
            }}
            className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 font-label text-sm font-semibold text-background-50 transition-colors hover:bg-primary-600"
          >
            <i className="ri-whatsapp-line text-lg leading-none" />
            Solicitar por WhatsApp
          </a>
          <button
            type="button"
            onClick={onClose}
            className="h-10 w-full cursor-pointer whitespace-nowrap rounded-full font-label text-xs font-semibold text-foreground-600 transition-colors hover:text-foreground-950"
          >
            Seguir explorando
          </button>
        </div>
      }
    >
      <div className="relative h-56 w-full overflow-hidden bg-background-100">
        <img
          src={promo.image}
          alt={`Promoción ${promo.name} de ALÉA Aesthetic House`}
          title={`${promo.name} — ALÉA Club`}
          className="h-full w-full object-cover object-top"
        />
        <span className="absolute left-4 top-4">
          <Badge tone="dark" icon="ri-fire-line">
            Promo club
          </Badge>
        </span>
      </div>

      <div className="flex flex-col gap-4 p-5">
        <div>
          <h3 className="font-heading text-xl font-extrabold leading-tight text-foreground-950">
            {promo.name}
          </h3>
          <p className="mt-1 text-sm text-foreground-600">{promo.headline}</p>
        </div>

        <div className="flex items-end gap-2">
          <span className="font-heading text-2xl font-extrabold leading-none text-accent-700">
            {promo.priceLabel}
          </span>
          {promo.originalPriceLabel ? (
            <span className="font-label text-sm text-foreground-400 line-through">
              {promo.originalPriceLabel}
            </span>
          ) : null}
        </div>

        <div className="inline-flex items-center gap-2 rounded-xl bg-accent-50 px-3 py-2 text-xs font-semibold text-accent-900">
          <i className="ri-timer-line text-base leading-none" />
          {promo.validity}
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold text-foreground-950">Qué incluye</h4>
          <ul className="mt-2 flex flex-col gap-2">
            {promo.includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground-700">
                <i className="ri-check-line mt-0.5 text-base leading-none text-accent-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-background-100 p-4">
          <h4 className="font-heading text-sm font-bold text-foreground-950">Condiciones</h4>
          <p className="mt-1.5 text-xs leading-relaxed text-foreground-600">{promo.conditions}</p>
        </div>
      </div>
    </Modal>
  );
}