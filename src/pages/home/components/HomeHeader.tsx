import { Link } from "react-router-dom";
import { useClient } from "@/hooks/useClient";

export default function HomeHeader() {
  const { client } = useClient();
  const firstName = client?.name?.split(" ")[0] ?? "bienvenida";
  const initial = (client?.name ?? "A").charAt(0).toUpperCase();

  return (
    <header className="flex items-center justify-between gap-3 px-5 pb-4 pt-6">
      <div className="min-w-0">
        <p className="font-label text-[10px] font-bold uppercase tracking-[0.28em] text-accent-700">
          ALÉA Club
        </p>
        <h1 className="mt-1 truncate font-heading text-xl font-extrabold text-foreground-950">
          Hola, {firstName}
        </h1>
        <p className="mt-0.5 text-xs text-foreground-600">Tu ritual de piel empieza aquí.</p>
      </div>
      <Link
        to="/perfil"
        aria-label="Ir a mi perfil"
        className="flex h-11 w-11 flex-none cursor-pointer items-center justify-center rounded-full border border-background-200 bg-background-100"
      >
        <span className="font-heading text-sm font-extrabold text-foreground-950">{initial}</span>
      </Link>
    </header>
  );
}