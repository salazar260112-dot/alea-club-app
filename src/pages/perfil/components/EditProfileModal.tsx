import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import Modal from "@/components/base/Modal";
import Button from "@/components/base/Button";
import type { ClientInfo } from "@/context/client-types";

interface EditProfileModalProps {
  open: boolean;
  client: ClientInfo | null;
  onClose: () => void;
  onSave: (info: ClientInfo) => void;
}

export default function EditProfileModal({ open, client, onClose, onSave }: EditProfileModalProps) {
  const [form, setForm] = useState<ClientInfo>({ name: "", phone: "", email: "" });

  useEffect(() => {
    if (open && client) {
      setForm(client);
    }
  }, [open, client]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave({
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
    });
    onClose();
  };

  const fieldClass =
    "h-12 w-full rounded-xl border border-background-300 bg-background-50 px-4 text-sm text-foreground-950 outline-none transition-colors placeholder:text-foreground-400 focus:border-accent-400";

  return (
    <Modal open={open} onClose={onClose} title="Editar mis datos">
      <form id="edit-profile-form" onSubmit={handleSubmit} className="flex flex-col gap-4 p-5">
        <div>
          <label
            htmlFor="edit-name"
            className="mb-1.5 block font-label text-xs font-semibold text-foreground-700"
          >
            Nombre
          </label>
          <input
            id="edit-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor="edit-phone"
            className="mb-1.5 block font-label text-xs font-semibold text-foreground-700"
          >
            Teléfono
          </label>
          <input
            id="edit-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor="edit-email"
            className="mb-1.5 block font-label text-xs font-semibold text-foreground-700"
          >
            Correo
          </label>
          <input
            id="edit-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
        <Button type="submit" variant="primary" size="lg" fullWidth className="mt-1">
          Guardar cambios
        </Button>
      </form>
    </Modal>
  );
}