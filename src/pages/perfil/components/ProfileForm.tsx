import { useState, type FormEvent } from "react";

interface ProfileFormProps {
  initial: { nombre: string; telefono: string; correo: string };
  onSave: (data: { nombre: string; telefono: string; correo: string }) => void;
  onCancel: () => void;
}

export default function ProfileForm({ initial, onSave, onCancel }: ProfileFormProps) {
  const [nombre, setNombre] = useState(initial.nombre);
  const [telefono, setTelefono] = useState(initial.telefono);
  const [correo, setCorreo] = useState(initial.correo);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nombre.trim().length < 2) {
      setError("Escribe tu nombre completo.");
      return;
    }
    if (telefono.replace(/[^0-9]/g, "").length < 8) {
      setError("Escribe un número de WhatsApp válido.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.trim())) {
      setError("Escribe un correo válido.");
      return;
    }
    setError("");
    onSave({ nombre: nombre.trim(), telefono: telefono.trim(), correo: correo.trim() });
  };

  const inputClass =
    "w-full rounded-md border border-background-300 bg-background-50 px-4 py-3 text-sm text-foreground-950 placeholder:text-foreground-400 transition-colors focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div>
        <label htmlFor="perfil-nombre" className="mb-1.5 block text-xs font-semibold text-foreground-700">
          Nombre
        </label>
        <input
          id="perfil-nombre"
          name="nombre"
          type="text"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="perfil-telefono" className="mb-1.5 block text-xs font-semibold text-foreground-700">
          Teléfono WhatsApp
        </label>
        <input
          id="perfil-telefono"
          name="telefono"
          type="tel"
          inputMode="tel"
          value={telefono}
          onChange={(event) => setTelefono(event.target.value)}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="perfil-correo" className="mb-1.5 block text-xs font-semibold text-foreground-700">
          Correo electrónico
        </label>
        <input
          id="perfil-correo"
          name="correo"
          type="email"
          inputMode="email"
          value={correo}
          onChange={(event) => setCorreo(event.target.value)}
          className={inputClass}
        />
      </div>

      {error && <p className="text-[11px] text-accent-700">{error}</p>}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 cursor-pointer whitespace-nowrap rounded-md border border-background-300 bg-background-50 px-5 py-3 font-heading text-sm font-bold text-foreground-800 transition-colors hover:bg-background-100"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="flex-1 cursor-pointer whitespace-nowrap rounded-md bg-foreground-950 px-5 py-3 font-heading text-sm font-bold text-background-50 transition-colors hover:bg-foreground-800"
        >
          Guardar
        </button>
      </div>
    </form>
  );
}