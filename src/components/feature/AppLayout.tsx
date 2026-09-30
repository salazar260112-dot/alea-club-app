import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import BottomNav from "@/components/feature/BottomNav";
import { useClient } from "@/hooks/useClient";

export default function AppLayout() {
  const { isRegistered } = useClient();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  if (!isRegistered) {
    return <Navigate to="/register" replace />;
  }

  return (
    <div className="flex min-h-screen w-full justify-center bg-background-100">
      <div className="relative flex min-h-screen w-full max-w-[480px] flex-col bg-background-50 md:border-x md:border-background-200 md:shadow-card">
        <main className="flex-1 pb-28">
          <Outlet />
        </main>
        <BottomNav />
      </div>
    </div>
  );
}