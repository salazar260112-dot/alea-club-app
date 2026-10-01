import type { RouteObject } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import AppLayout from "@/components/feature/AppLayout";
import Register from "@/pages/register/page";
import Home from "@/pages/home/page";
import Promociones from "@/pages/promociones/page";
import Agenda from "@/pages/agenda/page";
import Productos from "@/pages/productos/page";
import ProductDetail from "@/pages/productos/detail/page";
import ServiceDetail from "@/pages/servicios/detail/page";
import Perfil from "@/pages/perfil/page";
import Beneficios from "@/pages/beneficios/page";

const routes: RouteObject[] = [
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/promociones", element: <Promociones /> },
      { path: "/agenda", element: <Agenda /> },
      { path: "/productos", element: <Productos /> },
      { path: "/productos/:id", element: <ProductDetail /> },
      { path: "/servicios/:id", element: <ServiceDetail /> },
      { path: "/perfil", element: <Perfil /> },
      { path: "/beneficios", element: <Beneficios /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;