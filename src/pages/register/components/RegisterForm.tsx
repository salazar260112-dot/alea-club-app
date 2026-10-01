import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "@/components/base/Button";

export interface RegisterData {
  name: string;
  phone: string;
  email: string;
}

interface RegisterFormProps {
  onSubmit: (data: RegisterData) => void;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
  const [form, setForm] = useState<RegisterData>({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof RegisterData, string>>>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof RegisterData, string>> = {};
    if (form.name.trim().length < 2) next.name = "Escribe tu nombre";
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 10) next.phone = "Escribe un teléfono de 10 dígitos";
    if (!EMAIL_RE.test(form.email.trim())) next.email = "Escribe un correo válido";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    onSubmit({
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
    });
  };

  const fieldClass = (hasError: boolean) =>
    `h-11 w-full rounded-xl border bg-background-50 px-4 text-sm text-foreground-950 outline-none transition-colors placeholder:text-foreground-400 focus:border-accent-400 ${
      hasError ? "border-secondary-500" : "border-background-300"
    }`;

  return (
    <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3" noValidate>
      <div>
        <label htmlFor="name" className="mb-1 block font-label text-xs font-semibold text-foreground-700">
          Nombre
        </label>
        <div className="relative">
          <i className="ri-user-3-line pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-foreground-400" />
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className={`${fieldClass(Boolean(errors.name))} pl-11`}
          />
        </div>
        {errors.name ? <p className="mt-1 text-[11px] text-secondary-700">{errors.name}</p> : null}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block font-label text-xs font-semibold text-foreground-700">
          Teléfono
        </label>
        <div className="relative">
          <i className="ri-whatsapp-line pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-foreground-400" />
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="55 1234 5678"
            className={`${fieldClass(Boolean(errors.phone))} pl-11`}
          />
        </div>
        {errors.phone ? <p className="mt-1 text-[11px] text-secondary-700">{errors.phone}</p> : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block font-label text-xs font-semibold text-foreground-700">
          Correo
        </label>
        <div className="relative">
          <i className="ri-mail-line pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-foreground-400" />
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tucorreo@email.com"
            className={`${fieldClass(Boolean(errors.email))} pl-11`}
          />
        </div>
        {errors.email ? <p className="mt-1 text-[11px] text-secondary-700">{errors.email}</p> : null}
      </div>

      <Button type="submit" variant="primary" size="lg" fullWidth className="mt-1">
        Crear mi cuenta
      </Button>

      <p className="text-center text-[11px] leading-relaxed text-foreground-500">
        Sin contraseñas. Solo tus datos básicos para agendar y comprar.
      </p>
    </form>
  );
}