import { useState, type FormEvent } from "react";

interface RegisterFormProps {
  onSubmit: (data: { nombre: string; telefono: string; correo: string }) => void;
}

interface FormErrors {
  nombre?: string;
  telefono?: string;
  correo?: string;
}

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (nombre.trim().length < 2) next.nombre = "Escribe tu nombre completo.";
    const digits = telefono.replace(/[^0-9]/g, "");
    if (digits.length < 8) next.telefono = "Escribe un número válido.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.trim())) {
      next.correo = "Escribe un correo válido.";
    }
    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    onSubmit({
      nombre: nombre.trim(),
      telefono: telefono.trim(),
      correo: correo.trim(),
    });
  };

  const inputClass =
    "w-full rounded-md border border-background-300 bg-background-50 px-4 py-3 text-sm text-foreground-950 placeholder:text-foreground-400 transition-colors focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200";

  return (
    <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="reg-nombre" className="mb-1.5 block text-xs font-semibold text-foreground-700">
          Nombre completo
        </label>
        <input
          id="reg-nombre"
          name="nombre"
          type="text"
          autoComplete="name"
          placeholder="Ej. Ana Sofía Ramírez"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          className={inputClass}
        />
        {errors.nombre && <p className="mt-1 text-[11px] text-accent-700">{errors.nombre}</p>}
      </div>

      <div>
        <label htmlFor="reg-telefono" className="mb-1.5 block text-xs font-semibold text-foreground-700">
          Teléfono WhatsApp
        </label>
        <input
          id="reg-telefono"
          name="telefono"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="Ej. 55 1234 5678"
          value={telefono}
          onChange={(event) => setTelefono(event.target.value)}
          className={inputClass}
        />
        {errors.telefono && <p className="mt-1 text-[11px] text-accent-700">{errors.telefono}</p>}
      </div>

      <div>
        <label htmlFor="reg-correo" className="mb-1.5 block text-xs font-semibold text-foreground-700">
          Correo electrónico
        </label>
        <input
          id="reg-correo"
          name="correo"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Ej. ana@correo.com"
          value={correo}
          onChange={(event) => setCorreo(event.target.value)}
          className={inputClass}
        />
        {errors.correo && <p className="mt-1 text-[11px] text-accent-700">{errors.correo}</p>}
      </div>

      <button
        type="submit"
        className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-foreground-950 px-6 py-3.5 font-heading text-sm font-bold tracking-wide text-background-50 transition-colors hover:bg-foreground-800 active:scale-[0.99]"
      >
        Crear mi acceso
      </button>
    </form>
  );
}