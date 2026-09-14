import { Navigate, Outlet } from "react-router-dom";
import AppShell from "@/components/feature/AppShell";
import BottomNav from "@/components/feature/BottomNav";
import { useClient } from "@/hooks/useClient";

export default function AppLayout() {
  const { client } = useClient();

  if (!client) {
    return <Navigate to="/" replace />;
  }

  return (
    <AppShell>
      <main className="flex-1 pb-28">
        <Outlet />
      </main>
      <BottomNav />
    </AppShell>
  );
}