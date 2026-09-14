import { NavLink } from "react-router-dom";

const items = [
  { to: "/inicio", label: "Inicio", icon: "ri-home-5-line", activeIcon: "ri-home-5-fill" },
  { to: "/promos", label: "Promos", icon: "ri-price-tag-3-line", activeIcon: "ri-price-tag-3-fill" },
  {
    to: "/agendar",
    label: "Agendar",
    icon: "ri-calendar-check-line",
    activeIcon: "ri-calendar-check-fill",
  },
  {
    to: "/productos",
    label: "Productos",
    icon: "ri-shopping-bag-3-line",
    activeIcon: "ri-shopping-bag-3-fill",
  },
  { to: "/perfil", label: "Perfil", icon: "ri-user-3-line", activeIcon: "ri-user-3-fill" },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 z-40 w-full max-w-[480px] -translate-x-1/2 border-t border-background-200 bg-background-50/95 backdrop-blur-md">
      <ul className="grid grid-cols-5 px-1 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `group flex flex-col items-center gap-1 rounded-md py-1 transition-colors ${
                  isActive ? "text-primary-700" : "text-foreground-500 hover:text-foreground-800"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative flex h-6 w-6 items-center justify-center">
                    <i className={`${isActive ? item.activeIcon : item.icon} text-xl`} />
                    {isActive && (
                      <span className="absolute -bottom-1.5 h-1 w-1 rounded-full bg-primary-600" />
                    )}
                  </span>
                  <span className="font-heading text-[10px] font-semibold tracking-wide">
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}