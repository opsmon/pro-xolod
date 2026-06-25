import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BrandMark } from "./BrandMark";

type Props = {
  onRequest: (service?: string) => void;
};

export function Hero({ onRequest }: Props) {
  const points = [
    "аккуратный монтаж",
    "гарантия на работы",
    "помощь с подбором",
    "обслуживание после установки",
    "частные клиенты и организации",
  ];

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-12 sm:pt-18">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,#faeafa_0,transparent_34%),radial-gradient(circle_at_88%_0,#dff4ff_0,transparent_32%)]" />
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
        <div className="reveal">
          <p className="mb-4 inline-flex rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-bold text-muted">
            Кондиционеры и климатическое оборудование
          </p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.03] tracking-normal text-ink sm:text-6xl lg:text-7xl">
            Комфортная температура в любое время года
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Подберём, установим и обслужим кондиционер в Комсомольске-на-Амуре.
            Понятная стоимость, аккуратный монтаж и помощь на каждом этапе.
          </p>
          <p className="mt-3 max-w-2xl text-base font-semibold text-ink">
            Работаем с квартирами, частными домами, офисами и коммерческими помещениями.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="primary-button" onClick={() => onRequest("Расчёт стоимости")}>
              Рассчитать стоимость
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <a className="secondary-button" href="#services">
              Посмотреть услуги
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {points.map((point) => (
              <span className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-2 text-sm font-semibold text-muted" key={point}>
                <CheckCircle2 className="h-4 w-4 text-purple" aria-hidden="true" />
                {point}
              </span>
            ))}
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[560px] reveal" aria-hidden="true">
          <div className="absolute inset-8 rounded-[44px] brand-gradient opacity-40 blur-2xl" />
          <div className="absolute inset-0 rounded-[44px] border border-white/70 bg-white/68 shadow-soft backdrop-blur">
            <BrandMark className="absolute left-8 top-8 h-28 w-28 drop-shadow-[0_18px_30px_rgba(140,124,255,.28)]" />
            <div className="absolute right-10 top-20 h-24 w-64 rounded-[32px] border border-black/10 bg-white shadow-soft">
              <div className="mx-auto mt-4 h-2 w-44 rounded-full bg-black/10" />
              <div className="mx-auto mt-5 h-3 w-52 rounded-full bg-gradient-to-r from-blue via-lavender to-purple opacity-80" />
            </div>
            <div className="absolute bottom-16 left-10 right-10 rounded-[32px] border border-white/80 bg-white/80 p-6 shadow-soft">
              <div className="mb-5 text-sm font-bold text-muted">Свежий воздух без лишней суеты</div>
              <div className="grid gap-3">
                {[1, 2, 3].map((item) => (
                  <div className="h-3 rounded-full bg-gradient-to-r from-blue/70 to-transparent" key={item} />
                ))}
              </div>
            </div>
            <div className="absolute bottom-24 right-12 h-28 w-28 rounded-full bg-blue/30 blur-xl" />
            <div className="absolute left-24 top-48 h-40 w-40 rounded-full bg-pink/40 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
