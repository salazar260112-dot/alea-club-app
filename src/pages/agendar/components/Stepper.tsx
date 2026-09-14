interface StepperProps {
  step: number;
  total: number;
}

const labels = ["Servicio", "Día", "Horario", "Confirmar"];

export default function Stepper({ step, total }: StepperProps) {
  const progress = ((step - 1) / (total - 1)) * 100;

  return (
    <div className="px-5 pt-5">
      <div className="flex items-center justify-between">
        <span className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-primary-700">
          Paso {step} de {total}
        </span>
        <span className="text-[11px] text-foreground-400">{labels[step - 1]}</span>
      </div>
      <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-background-200">
        <div
          className="h-full rounded-full bg-primary-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}