const LOGO_SRC =
  "https://public.readdy.ai/ai/img_res/sandbox/2ce9f655741dd101e96c82d4f9191977/ec3fc89f-b41b-44f4-83da-1148d98f6942_alea-logo.png";

interface BrandLogoProps {
  className?: string;
  imgClassName?: string;
  showHouse?: boolean;
  align?: "center" | "start";
}

export default function BrandLogo({
  className = "",
  imgClassName = "h-12",
  showHouse = true,
  align = "center",
}: BrandLogoProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      <img
        src={LOGO_SRC}
        alt="ALÉA Aesthetic House"
        title="ALÉA Aesthetic House"
        className={`w-auto object-contain ${imgClassName}`}
      />
      {showHouse ? (
        <span className="mt-2 flex items-center gap-2">
          <span className="block h-px w-6 bg-accent-400/70" />
          <span className="font-label text-[9px] font-bold uppercase tracking-[0.38em] text-foreground-500">
            Aesthetic House
          </span>
          <span className="block h-px w-6 bg-accent-400/70" />
        </span>
      ) : null}
    </div>
  );
}