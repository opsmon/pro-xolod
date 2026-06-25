import { ArrowRight } from "lucide-react";
import { BrandMark } from "./BrandMark";

type Props = {
  onRequest: (service?: string) => void;
};

export function Hero({ onRequest }: Props) {
  const points = ["подбор", "монтаж", "обслуживание"];

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_0%,rgba(234,210,236,.62)_0,transparent_30%),radial-gradient(circle_at_90%_5%,rgba(0,200,216,.28)_0,transparent_33%),linear-gradient(180deg,#f7feff_0%,#f4fbfc_58%,#fbf9fd_100%)]" />
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div className="reveal">
          <p className="mb-5 inline-flex rounded-full border border-blue/20 bg-white/72 px-4 py-2 text-sm font-bold text-muted">
            Комсомольск-на-Амуре
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.06] tracking-normal text-ink sm:text-6xl lg:text-7xl">
            Комфортная температура в любое время года
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Подберём, установим и обслужим кондиционер в Комсомольске-на-Амуре.
            Без лишней суеты: понятный расчёт, аккуратная работа и помощь после установки.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button className="primary-button" onClick={() => onRequest("Расчёт стоимости")}>
              Рассчитать стоимость
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <a className="secondary-button" href="#services">
              Посмотреть услуги
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-2 text-sm font-semibold text-muted">
            {points.map((point) => (
              <span className="inline-flex items-center gap-2" key={point}>
                <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                {point}
              </span>
            ))}
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[470px] reveal" aria-hidden="true">
          <div className="absolute inset-10 rounded-full brand-gradient opacity-20 blur-3xl" />
          <div className="absolute inset-0 rounded-[40px] border border-white/80 bg-white/54 shadow-soft backdrop-blur">
            <BrandMark className="absolute left-1/2 top-12 h-44 w-44 -translate-x-1/2 drop-shadow-[0_20px_34px_rgba(0,174,194,.25)] sm:h-56 sm:w-56" />
            <div className="absolute bottom-16 left-8 right-8 rounded-[28px] border border-blue/15 bg-white/78 p-5 shadow-soft">
              <div className="h-3 rounded-full bg-gradient-to-r from-blue/80 via-lavender to-purple/70" />
              <div className="mt-4 h-2 w-3/4 rounded-full bg-blue/25" />
              <div className="mt-2 h-2 w-1/2 rounded-full bg-pink/40" />
              <p className="mt-5 text-sm font-bold text-muted">Подбор. Монтаж. Сервис.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
