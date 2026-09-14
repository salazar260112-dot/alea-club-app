import { useState } from "react";
import type { Tip } from "@/types";

interface TipsSectionProps {
  tips: Tip[];
  featuredId: string;
}

export default function TipsSection({ tips, featuredId }: TipsSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section>
      <div className="mb-3 flex items-end justify-between">
        <h2 className="font-heading text-sm font-bold tracking-tight text-foreground-950">
          Tips de cuidado
        </h2>
        <span className="text-[10px] uppercase tracking-wider text-foreground-400">
          Lifestyle ALÉA
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
        {tips.map((tip) => {
          const featured = tip.id === featuredId;
          const open = openId === tip.id;
          return (
            <button
              key={tip.id}
              type="button"
              onClick={() => setOpenId(open ? null : tip.id)}
              className={`w-full cursor-pointer rounded-lg border p-4 text-left transition-colors ${
                featured ? "border-primary-200 bg-primary-50" : "border-background-200 bg-background-50"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${
                    featured ? "bg-primary-500 text-foreground-950" : "bg-background-200 text-foreground-700"
                  }`}
                >
                  <i className={`${tip.icono} text-lg`} />
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading text-sm font-bold leading-snug text-foreground-950">
                      {tip.titulo}
                    </h3>
                  </div>
                  <p className="mt-0.5 text-xs text-foreground-500">{tip.resumen}</p>
                  {open && (
                    <p className="mt-2 border-t border-background-200 pt-2 text-xs leading-relaxed text-foreground-700 animate-fade-in">
                      {tip.contenido}
                    </p>
                  )}
                </div>
                <i
                  className={`mt-1 shrink-0 text-foreground-400 transition-transform ${
                    open ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}