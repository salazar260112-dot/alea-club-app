import { tips } from "@/mocks/tips";

export default function TipsList() {
  return (
    <div className="flex flex-col gap-3">
      {tips.map((tip) => (
        <article
          key={tip.id}
          className="flex items-start gap-3 rounded-2xl border border-background-200/80 bg-background-50 p-4 shadow-soft"
        >
          <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-secondary-50 text-secondary-700">
            <i className={`${tip.icon} text-xl leading-none`} />
          </span>
          <div>
            <h3 className="font-heading text-sm font-bold text-foreground-950">{tip.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-foreground-600">{tip.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}