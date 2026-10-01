import { Navigate, useNavigate } from "react-router-dom";
import RegisterForm, { type RegisterData } from "@/pages/register/components/RegisterForm";
import BrandLogo from "@/components/feature/BrandLogo";
import { useClient } from "@/hooks/useClient";

export default function Register() {
  const { isRegistered, register } = useClient();
  const navigate = useNavigate();

  if (isRegistered) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (data: RegisterData) => {
    register(data);
    navigate("/", { replace: true });
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
      </div>
    </div>
  );
}