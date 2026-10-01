import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import RegisterForm, { type RegisterData } from "@/pages/register/components/RegisterForm";
import BrandLogo from "@/components/feature/BrandLogo";
import { useClient } from "@/hooks/useClient";
import { useInstallPrompt } from "@/hooks/useInstallPrompt";
import Button from "@/components/base/Button";

export default function Register() {
  const { isRegistered, register } = useClient();
  const { canInstall, install, isInstalled, isIos } = useInstallPrompt();
  const [showInstallCard, setShowInstallCard] = useState(false);
  const navigate = useNavigate();

  if (isRegistered && !showInstallCard) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (data: RegisterData) => {
    register(data);
    setShowInstallCard(true);
  };

  const handleInstall = async () => {
    if (canInstall) {
      await install();
      return;
    }
    setShowInstallCard(true);
  };

  return (
    <div className="flex min-h-screen w-full justify-center bg-background-100">
      <div className="relative flex min-h-screen w-full max-w-[480px] flex-col overflow-hidden bg-background-50 md:border-x md:border-background-200 md:shadow-card">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-accent-50 via-accent-50/40 to-transparent" />

        <div className="relative flex flex-1 flex-col px-6 pb-8 pt-6">
          <div className="flex w-full flex-col items-center text-center">
            <p className="font-label text-[11px] font-bold uppercase tracking-[0.32em] text-foreground-500">
              Únete a
            </p>
            <BrandLogo className="mt-2" imgClassName="h-12" />
            <p className="mt-3 max-w-[340px] text-[13px] leading-relaxed text-foreground-600">
              Regístrate en segundos para agendar, comprar y acceder a promociones exclusivas.
            </p>
          </div>

          <RegisterForm onSubmit={handleSubmit} />
        </div>

        {showInstallCard ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-950/70 px-5 backdrop-blur-md">
            <div className="relative w-full max-w-[390px] overflow-hidden rounded-[2rem] border border-background-50/20 bg-background-50 p-6 text-center shadow-[0_28px_80px_rgba(0,0,0,.35)]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-200/60 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-secondary-200/50 blur-3xl" />

              <div className="relative">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-primary-950 text-background-50 shadow-card">
                  <i className="ri-smartphone-line text-3xl leading-none" />
                </div>

                <p className="mt-5 font-label text-[11px] font-bold uppercase tracking-[0.28em] text-accent-700">
                  Tu acceso quedó listo
                </p>
                <h2 className="mt-2 font-heading text-2xl font-extrabold leading-tight text-foreground-950">
                  Descarga ALÉA Club
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground-600">
                  Guarda la app en tu pantalla de inicio para agendar, ver promociones y entrar a tus beneficios más rápido.
                </p>

                {isInstalled ? (
                  <div className="mt-5 rounded-2xl bg-accent-50 px-4 py-3 text-sm font-semibold text-accent-900">
                    ALÉA Club ya está instalada en este dispositivo.
                  </div>
                ) : (
                  <div className="mt-5 rounded-2xl border border-background-200 bg-background-100 px-4 py-3 text-left text-xs leading-relaxed text-foreground-600">
                    {canInstall ? (
                      "Toca el botón para agregar ALÉA Club junto a tus demás aplicaciones."
                    ) : isIos ? (
                      "En iPhone: toca Compartir en Safari y elige Agregar a pantalla de inicio."
                    ) : (
                      "Si no aparece el instalador automático, abre el menú del navegador y elige Instalar app o Agregar a pantalla de inicio."
                    )}
                  </div>
                )}

                {!isInstalled ? (
                  <Button
                    type="button"
                    variant="accent"
                    size="lg"
                    fullWidth
                    icon="ri-download-cloud-2-line"
                    className="mt-5"
                    onClick={handleInstall}
                  >
                    Descargar app
                  </Button>
                ) : null}

                <button
                  type="button"
                  onClick={() => navigate("/", { replace: true })}
                  className="mt-4 w-full cursor-pointer rounded-full px-5 py-3 font-label text-xs font-bold uppercase tracking-[0.16em] text-foreground-600 transition-colors hover:bg-background-100"
                >
                  Entrar a ALÉA Club
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
