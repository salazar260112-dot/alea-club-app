import { benefits } from "@/mocks/benefits";

export default function BenefitsRow() {
  return (
    <div className="no-scrollbar -mx-5 flex gap-3 overflow-x-auto px-5 pb-1">
      {benefits.map((benefit) => (
        <article
          key={benefit.id}
          className="flex w-[150px] flex-none flex-col gap-2 rounded-2xl border border-background-200/80 bg-background-100/70 p-4"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-100 text-accent-700">
            <i className={`${benefit.icon} text-xl leading-none`} />
          </span>
          <h3 className="font-heading text-sm font-bold leading-snug text-foreground-950">
            {benefit.title}
          </h3>
          <p className="text-[11px] leading-relaxed text-foreground-600">{benefit.text}</p>
        </article>
      ))}
    </div>
  );
}