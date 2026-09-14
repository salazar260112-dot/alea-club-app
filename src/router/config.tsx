import type { RouteObject } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import OnboardingPage from "@/pages/onboarding/page";
import AppLayout from "@/components/feature/AppLayout";
import InicioPage from "@/pages/inicio/page";
import PromosPage from "@/pages/promos/page";
import AgendarPage from "@/pages/agendar/page";
import ProductosPage from "@/pages/productos/page";
import PerfilPage from "@/pages/perfil/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <OnboardingPage />,
  },
  {
    element: <AppLayout />,
    children: [
      { path: "/inicio", element: <InicioPage /> },
      { path: "/promos", element: <PromosPage /> },
      { path: "/agendar", element: <AgendarPage /> },
      { path: "/productos", element: <ProductosPage /> },
      { path: "/perfil", element: <PerfilPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;