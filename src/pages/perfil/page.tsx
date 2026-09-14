import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/feature/PageHeader";
import ProfileForm from "@/pages/perfil/components/ProfileForm";
import RequestsList from "@/pages/perfil/components/RequestsList";
import { useClient } from "@/hooks/useClient";

export default function PerfilPage() {
  const { client, update, logout } = useClient();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);

  if (!client) return null;

  const initial = client.nombre.trim().charAt(0).toUpperCase();

  const handleSave = (data: { nombre: string; telefono: string; correo: string }) => {
    update(data);
    setEditing(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Mi perfil"
        subtitle="Tus datos y solicitudes"
        right={
          !editing ? (
            <button
              type="button"
              onClick={() => setEditing(true)}
              aria-label="Editar datos"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-background-300 bg-background-50 text-foreground-700 transition-colors hover:bg-background-100"
            >
              <i className="ri-pencil-line" />
            </button>
          ) : undefined
        }
      />

      <div className="flex flex-col gap-6 pb-6 pt-5">
        {!editing && (
          <section className="px-5">
            <div className="rounded-xl border border-background-200 bg-background-50 p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground-950 font-heading text-xl font-bold text-background-50">
                  {initial}
                </div>
                <div className="min-w-0">
                  <p className="truncate font-heading text-base font-extrabold text-foreground-950">
                    {client.nombre}
                  </p>
                  <p className="text-[11px] uppercase tracking-wider text-primary-700">
                    Miembro ALÉA Club
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 border-t border-background-200 pt-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-background-100 text-foreground-700">
                    <i className="ri-whatsapp-line" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-foreground-400">
                      Teléfono WhatsApp
                    </p>
                    <p className="truncate text-sm font-medium text-foreground-950">{client.telefono}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-background-100 text-foreground-700">
                    <i className="ri-mail-line" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-foreground-400">
                      Correo electrónico
                    </p>
                    <p className="truncate text-sm font-medium text-foreground-950">{client.correo}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {editing && (
          <section className="px-5">
            <div className="rounded-xl border border-background-200 bg-background-50 p-5">
              <h2 className="mb-4 font-heading text-sm font-bold text-foreground-950">
                Editar mis datos
              </h2>
              <ProfileForm
                initial={{
                  nombre: client.nombre,
                  telefono: client.telefono,
                  correo: client.correo,
                }}
                onSave={handleSave}
                onCancel={() => setEditing(false)}
              />
            </div>
          </section>
        )}

        <RequestsList citas={client.citas} promos={client.promos} />

        <section className="px-5">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-background-300 bg-background-50 px-6 py-3.5 font-heading text-sm font-bold text-accent-700 transition-colors hover:bg-background-100"
          >
            <i className="ri-logout-box-r-line" />
            Cerrar sesión
          </button>
          <p className="mt-3 text-center text-[10px] uppercase tracking-[0.2em] text-foreground-400">
            ALÉA Club · Aesthetic House
          </p>
        </section>
      </div>
    </div>
  );
}