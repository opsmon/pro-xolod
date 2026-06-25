import { siteConfig } from "../config/site";

export function DemoBanner() {
  if (!siteConfig.demoMode) return null;
  return (
    <div className="relative z-50 border-b border-black/5 bg-white/80 py-2 text-center text-xs font-semibold text-muted backdrop-blur">
      <div className="container-page">{siteConfig.demoMessage}</div>
    </div>
  );
}
