interface InicioHeaderProps {
  nombre: string;
}

export default function InicioHeader({ nombre }: InicioHeaderProps) {
  const initial = nombre.trim().charAt(0).toUpperCase();
  const firstName = nombre.trim().split(/\s+/)[0];

  return (
    <header className="sticky top-0 z-30 border-b border-background-200 bg-background-50/90 px-5 pb-4 pt-6 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground-400">
            ALÉA Club
          </p>
          <h1 className="mt-0.5 font-heading text-2xl font-extrabold tracking-tight text-foreground-950">
            Hola, {firstName}
          </h1>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground-950 font-heading text-base font-bold text-background-50">
          {initial}
        </div>
      </div>
    </header>
  );
}