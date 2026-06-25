import { BarChart3, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { analyticsConfig } from "../config/analytics";

type Counts = { today: number; month: number };
const COLLAPSED_KEY = "pro-holod-counter-collapsed";
const VISIT_SESSION_KEY = "pro-holod-visit-counted";

const validCounts = (value: unknown): value is Counts => {
  const item = value as Counts;
  return Number.isFinite(item?.today) && Number.isFinite(item?.month);
};

export function VisitCounter() {
  const [counts, setCounts] = useState<Counts | null>(analyticsConfig.demoMode ? { today: analyticsConfig.demoToday, month: analyticsConfig.demoMonth } : null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [collapsed, setCollapsed] = useState(() => localStorage.getItem(COLLAPSED_KEY) === "true");

  useEffect(() => {
    if (!analyticsConfig.enabled || !analyticsConfig.counterVisible || analyticsConfig.demoMode || !analyticsConfig.endpoint) return;
    let alive = true;

    const load = async () => {
      setStatus("loading");
      try {
        const counted = sessionStorage.getItem(VISIT_SESSION_KEY) === "true";
        const response = await fetch(analyticsConfig.endpoint!, {
          method: counted ? "GET" : "POST",
          headers: { Accept: "application/json" },
        });
        if (!counted) sessionStorage.setItem(VISIT_SESSION_KEY, "true");
        const json = await response.json();
        if (!response.ok || !validCounts(json)) throw new Error("Invalid counter response");
        if (alive) {
          setCounts(json);
          setStatus("idle");
        }
      } catch {
        if (alive) setStatus("error");
      }
    };

    load();
    const interval = window.setInterval(load, analyticsConfig.refreshInterval);
    return () => {
      alive = false;
      window.clearInterval(interval);
    };
  }, []);

  if (!analyticsConfig.enabled || !analyticsConfig.counterVisible) return null;
  if (!analyticsConfig.demoMode && !analyticsConfig.endpoint) return null;

  const toggle = () => {
    setCollapsed((value) => {
      localStorage.setItem(COLLAPSED_KEY, String(!value));
      return !value;
    });
  };

  return (
    <aside className="fixed bottom-24 right-3 z-30 w-[178px] rounded-[18px] border border-black/10 bg-white/80 p-3 text-sm shadow-soft backdrop-blur md:bottom-4 md:right-4 md:w-[196px]" aria-label="Статистика посещений">
      <button className="flex w-full items-center justify-between gap-2 text-left font-extrabold text-ink" onClick={toggle} aria-expanded={!collapsed}>
        <span className="inline-flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full brand-gradient text-white">
            <BarChart3 className="h-4 w-4" aria-hidden="true" />
          </span>
          {collapsed ? "Статистика" : "Посещения"}
        </span>
        <ChevronDown className={`h-4 w-4 transition ${collapsed ? "" : "rotate-180"}`} aria-hidden="true" />
      </button>
      {!collapsed && (
        <div className="mt-3">
          {counts ? (
            <div className="grid gap-2">
              <div className="flex justify-between gap-3"><span className="text-muted">Сегодня</span><strong>{counts.today}</strong></div>
              <div className="flex justify-between gap-3"><span className="text-muted">За месяц</span><strong>{counts.month}</strong></div>
              {analyticsConfig.demoMode && <p className="text-xs font-bold text-purple">Демо-данные</p>}
            </div>
          ) : (
            <p className="text-xs font-semibold text-muted">{status === "loading" ? "Загрузка статистики" : "Статистика временно недоступна"}</p>
          )}
        </div>
      )}
    </aside>
  );
}
