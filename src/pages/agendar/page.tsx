import { useState } from "react";
import PageHeader from "@/components/feature/PageHeader";
import Stepper from "@/pages/agendar/components/Stepper";
import StepSelectService from "@/pages/agendar/components/StepSelectService";
import StepSelectDay from "@/pages/agendar/components/StepSelectDay";
import StepSelectTime from "@/pages/agendar/components/StepSelectTime";
import StepConfirm from "@/pages/agendar/components/StepConfirm";
import { useClient } from "@/hooks/useClient";

type Tipo = "servicio" | "promo";

export default function AgendarPage() {
  const { client, addCita } = useClient();
  const [step, setStep] = useState(1);
  const [tipo, setTipo] = useState<Tipo>("servicio");
  const [servicio, setServicio] = useState("");
  const [dia, setDia] = useState("");
  const [horario, setHorario] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  if (!client) return null;

  const canContinue =
    (step === 1 && servicio) ||
    (step === 2 && dia) ||
    (step === 3 && horario) ||
    step === 4;

  const handleConfirm = () => {
    addCita({ servicio, dia, horario });
    setConfirmed(true);
  };

  return (
    <div className="animate-fade-in">
      <PageHeader title="Agendar cita" subtitle="Solicita tu cita en 4 pasos" />

      {!confirmed && <Stepper step={step} total={4} />}

      <div className="min-h-[50vh]">
        {step === 1 && (
          <StepSelectService
            tipo={tipo}
            onTipo={(value) => setTipo(value)}
            selected={servicio}
            onSelect={setServicio}
          />
        )}
        {step === 2 && (
          <StepSelectDay
            selected={dia}
            onSelect={(value) => {
              setDia(value);
              setHorario("");
            }}
          />
        )}
        {step === 3 && (
          <StepSelectTime client={client} day={dia} selected={horario} onSelect={setHorario} />
        )}
        {step === 4 && (
          <StepConfirm
            client={client}
            servicio={servicio}
            dia={dia}
            horario={horario}
            confirmed={confirmed}
            onConfirm={handleConfirm}
          />
        )}
      </div>

      {!confirmed && (
        <div className="mt-4 flex gap-3 border-t border-background-200 px-5 pb-6 pt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep((prev) => Math.max(1, prev - 1))}
              className="flex cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-background-300 bg-background-50 px-5 py-3.5 font-heading text-sm font-bold text-foreground-800 transition-colors hover:bg-background-100"
            >
              <i className="ri-arrow-left-line" />
              Atrás
            </button>
          )}
          {step < 4 && (
            <button
              type="button"
              disabled={!canContinue}
              onClick={() => setStep((prev) => Math.min(4, prev + 1))}
              className={`flex flex-1 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-md px-6 py-3.5 font-heading text-sm font-bold tracking-wide transition-colors ${
                canContinue
                  ? "bg-foreground-950 text-background-50 hover:bg-foreground-800"
                  : "cursor-not-allowed bg-background-200 text-foreground-400"
              }`}
            >
              Continuar
              <i className="ri-arrow-right-line" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
