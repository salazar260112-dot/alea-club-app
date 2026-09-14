import { Link } from "react-router-dom";

const accesos = [
  { to: "/promos", label: "Promos", descripcion: "Ofertas del mes", icon: "ri-price-tag-3-line" },
  { to: "/productos", label: "Productos", descripcion: "ALÉA Skin", icon: "ri-shopping-bag-3-line" },
  { to: "/perfil", label: "Perfil", descripcion: "Tus datos", icon: "ri-user-3-line" },
];

export default function QuickAccess() {
  return (
    <section>
      <h2 className="mb-3 font-heading text-sm font-bold tracking-tight text-foreground-950">
        Accesos rápidos
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {accesos.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="flex flex-col items-start gap-2 rounded-lg border border-background-200 bg-background-50 p-3.5 transition-colors hover:border-primary-300"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-100 text-primary-700">
              <i className={`${item.icon} text-lg`} />
            </span>
            <span className="font-heading text-xs font-bold text-foreground-950">{item.label}</span>
            <span className="text-[10px] text-foreground-400">{item.descripcion}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}