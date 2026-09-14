import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AppShell from "@/components/feature/AppShell";
import BrandMark from "@/components/base/BrandMark";
import RegisterForm from "@/pages/onboarding/components/RegisterForm";
import { useClient } from "@/hooks/useClient";

const HERO_IMAGE =
  "https://readdy.ai/api/search-image?query=Abstract%20luxury%20aesthetic%20texture%20in%20charcoal%20black%20and%20soft%20gold%20with%20warm%20beige%20flowing%20silk%2C%20premium%20beauty%20brand%20mood%2C%20elegant%20minimal%20artistic%20background%2C%20soft%20dramatic%20lighting%2C%20dark%20tones%20for%20text%20contrast%2C%20no%20text&width=900&height=1500&seq=alea-hero-onboarding-01&orientation=portrait";

export default function OnboardingPage() {
  const { client, register } = useClient();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"hero" | "form">("hero");

  if (client) {
    return <Navigate to="/inicio" replace />;
  }

  const handleRegister = (data: { nombre: string; telefono: string; correo: string }) => {
    register(data);
    navigate("/inicio", { replace: true });
  };

  return (
    <AppShell>
      <main className="relative flex flex-1 flex-col">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Textura elegante ALÉA Club"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground-950/70 via-foreground-950/60 to-foreground-950/85" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col px-7 pb-10 pt-8">
          <div className="animate-fade-up">
            <span className="inline-flex items-baseline gap-1.5">
              <span className="font-heading text-lg font-extrabold tracking-[0.28em] text-background-50">
                ALÉA
              </span>
              <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.34em] text-primary-400">
                Club
              </span>
            </span>
          </div>

          {mode === "hero" ? (
            <div className="mt-auto flex flex-col animate-fade-up">
              <p className="mb-3 font-heading text-[11px] font-semibold uppercase tracking-[0.3em] text-primary-400">
                Aesthetic House
              </p>
              <h1 className="font-heading text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-background-50">
                ALÉA Club
              </h1>
              <p className="mt-4 max-w-[300px] text-sm leading-relaxed text-background-200">
                Promociones, beneficios y citas desde tu celular.
              </p>

              <button
                type="button"
                onClick={() => setMode("form")}
                className="mt-8 flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-6 py-4 font-heading text-sm font-bold tracking-wide text-foreground-950 transition-transform duration-200 hover:bg-primary-400 active:scale-[0.98]"
              >
                Crear mi acceso
                <i className="ri-arrow-right-line text-lg" />
              </button>

              <p className="mt-4 text-center text-[11px] leading-relaxed text-background-300">
                Solo necesitas tu nombre, WhatsApp y correo. Sin contraseñas.
              </p>
            </div>
          ) : (
            <div className="mt-8 flex flex-1 flex-col animate-fade-up">
              <div className="rounded-xl border border-background-50/10 bg-background-50/95 p-6 backdrop-blur-md">
                <BrandMark className="mb-6" />
                <h1 className="font-heading text-2xl font-extrabold tracking-tight text-foreground-950">
                  Crea tu acceso
                </h1>
                <p className="mt-1.5 text-xs leading-relaxed text-foreground-500">
                  Regístrate en segundos y empieza a disfrutar ALÉA Club.
                </p>
                <RegisterForm onSubmit={handleRegister} />
              </div>

              <button
                type="button"
                onClick={() => setMode("hero")}
                className="mx-auto mt-6 flex cursor-pointer items-center gap-1.5 text-xs font-medium text-background-200 transition-colors hover:text-background-50"
              >
                <i className="ri-arrow-left-line" />
                Volver
              </button>
            </div>
          )}
        </div>
      </main>
    </AppShell>
  );
}