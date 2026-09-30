import { Navigate, useNavigate } from "react-router-dom";
import RegisterForm, { type RegisterData } from "@/pages/register/components/RegisterForm";
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
      <div className="relative flex min-h-screen w-full max-w-[480px] flex-col bg-background-50 md:border-x md:border-background-200 md:shadow-card">
        <div className="relative h-52 w-full overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=Soft%20abstract%20warm%20white%20beauty%20background%20with%20gentle%20beige%20gradient%20waves%20and%20delicate%20light%2C%20minimal%20clinical%20skincare%20aesthetic%2C%20clean%20premium%20texture%2C%20elegant%20calm%20mood&width=900&height=1200&seq=alea-auth-bg&orientation=portrait"
            alt="Textura minimalista en tonos blanco cálido de ALÉA Aesthetic House"
            title="ALÉA Aesthetic House"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/30 to-transparent" />
          <div className="absolute bottom-4 left-6">
            <p className="font-heading text-3xl font-extrabold tracking-tight text-foreground-950">
              ALÉA
            </p>
            <p className="font-label text-[10px] font-semibold uppercase tracking-[0.35em] text-secondary-600">
              Aesthetic House
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center px-6 pb-12 pt-4">
          <h1 className="font-heading text-2xl font-extrabold leading-tight text-foreground-950">
            Únete a ALÉA Club
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-foreground-600">
            Regístrate en segundos para agendar tus citas, comprar skincare clínico y acceder a
            promociones exclusivas del club.
          </p>

          <RegisterForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}