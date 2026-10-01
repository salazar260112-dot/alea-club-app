import Modal from "@/components/base/Modal";
import Badge from "@/components/base/Badge";
import { whatsappLink } from "@/config/site";
import type { ClubBenefit } from "@/types/content";

interface BenefitDetailModalProps {
  benefit: ClubBenefit | null;
  onClose: () => void;
}

export default function BenefitDetailModal({ benefit, onClose }: BenefitDetailModalProps) {
  if (!benefit) return null;

  return (
    <Modal
      open={Boolean(benefit)}
      onClose={onClose}
      title={benefit.title}
      footer={
        <div className="flex flex-col gap-2">
          <a
            href={whatsappLink(benefit.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 font-label text-sm font-semibold text-background-50 transition-colors hover:bg-primary-600"
          >
            <i className="ri-whatsapp-line text-lg leading-none" />
            {benefit.ctaLabel}
          </a>
          <button
            type="button"
            onClick={onClose}
            className="h-10 w-full cursor-pointer whitespace-nowrap rounded-full font-label text-xs font-semibold text-foreground-600 transition-colors hover:text-foreground-950"
          >
            Cerrar
          </button>
        </div>
      }
    >
      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-center gap-3.5">
          <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
            <i className={`${benefit.icon} text-2xl leading-none`} />
          </span>
          <div className="min-w-0">
            <h3 className="font-heading text-lg font-extrabold leading-tight text-foreground-950">
              {benefit.title}
            </h3>
            <div className="mt-1.5">
              <Badge tone="accent">{benefit.statusLabel}</Badge>
            </div>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-foreground-700">{benefit.detail}</p>

        <div className="rounded-2xl bg-background-100 p-4">
          <h4 className="font-heading text-sm font-bold text-foreground-950">Cómo se activa</h4>
          <p className="mt-1.5 text-xs leading-relaxed text-foreground-600">
            Validamos tu beneficio desde el panel y lo confirmamos contigo por WhatsApp. Cada clienta
            ve sus cupones, dinámicas y recompensas según su historial.
          </p>
        </div>
      </div>
    </Modal>
  );
}