import type { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen w-full bg-background-100">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[480px] flex-col border-x border-background-200 bg-background-50">
        {children}
      </div>
    </div>
  );
}