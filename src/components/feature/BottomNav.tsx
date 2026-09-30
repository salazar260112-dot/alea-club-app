import { NavLink } from "react-router-dom";

interface NavItem {
  to: string;
  label: string;
  icon: string;
  activeIcon: string;
  highlight?: boolean;
}

const ITEMS: NavItem[] = [
  { to: "/", label: "Inicio", icon: "ri-home-5-line", activeIcon: "ri-home-5-fill" },
  { to: "/promociones", label: "Promos", icon: "ri-price-tag-3-line", activeIcon: "ri-price-tag-3-fill" },
  {
    to: "/agenda",
    label: "Agenda",
    icon: "ri-calendar-check-line",
    activeIcon: "ri-calendar-check-fill",
    highlight: true,
  },
  { to: "/productos", label: "Productos", icon: "ri-store-2-line", activeIcon: "ri-store-2-fill" },
  { to: "/perfil", label: "Perfil", icon: "ri-user-3-line", activeIcon: "ri-user-3-fill" },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 z-40 w-full max-w-[480px] -translate-x-1/2 border-t border-background-200 bg-background-50/95 px-2 pb-[env(safe-area-inset-bottom)] backdrop-blur">
      <ul className="flex items-stretch justify-between">
        {ITEMS.map((item) => (
          <li key={item.to} className="flex-1">
            <NavLink
              to={item.to}
              end={item.to === "/"}
              className="group flex cursor-pointer flex-col items-center justify-center gap-1 py-2.5"
            >
              {({ isActive }) =>
                item.highlight ? (
                  <>
                    <span
                      className={`-mt-7 flex h-14 w-14 items-center justify-center rounded-full border-4 border-background-50 transition-all duration-200 ${
                        isActive
                          ? "bg-primary-600 text-background-50"
                          : "bg-primary-500 text-background-50 group-active:scale-95"
                      }`}
                    >
                      <i className={`${item.activeIcon} text-2xl leading-none`} />
                    </span>
                    <span
                      className={`font-label text-[10px] font-semibold ${
                        isActive ? "text-foreground-950" : "text-foreground-600"
                      }`}
                    >
                      {item.label}
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      className={`flex h-9 w-9 items-center justify-center transition-colors ${
                        isActive ? "text-primary-500" : "text-foreground-400"
                      }`}
                    >
                      <i
                        className={`${isActive ? item.activeIcon : item.icon} text-xl leading-none`}
                      />
                    </span>
                    <span
                      className={`font-label text-[10px] font-semibold ${
                        isActive ? "text-foreground-950" : "text-foreground-600"
                      }`}
                    >
                      {item.label}
                    </span>
                  </>
                )
              }
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}