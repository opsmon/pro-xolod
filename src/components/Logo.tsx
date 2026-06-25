import { BrandMark } from "./BrandMark";

export function Logo({ compact = false, inverse = false }: { compact?: boolean; inverse?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <BrandMark className="h-12 w-12 shrink-0 drop-shadow-[0_12px_22px_rgba(140,124,255,.25)]" />
      {!compact && (
        <div className="leading-tight">
          <div className={`text-base font-extrabold tracking-normal ${inverse ? "text-white" : "text-ink"}`}>Про-Холод</div>
          <div className={`text-xs font-medium ${inverse ? "text-white/65" : "text-muted"}`}>Комсомольск-на-Амуре</div>
        </div>
      )}
    </div>
  );
}
