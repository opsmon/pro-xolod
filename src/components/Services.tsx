import { BadgeCheck } from "lucide-react";
import { services } from "../config/services";

export function Services({ onRequest }: { onRequest: (service?: string) => void }) {
  return (
    <section className="section" id="prices">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase text-purple">Цены</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-normal text-ink sm:text-5xl">
              Услуги и ориентировочные цены
            </h2>
          </div>
          <button className="primary-button self-start md:self-auto" onClick={() => onRequest("Точный расчёт")}>
            Получить точный расчёт
          </button>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {services.map((service) => (
            <article className="card relative rounded-[8px] p-6" key={service.id}>
              {service.popular && (
                <span className="absolute right-5 top-5 rounded-full bg-purple/10 px-3 py-1 text-xs font-extrabold text-purple">
                  Частый запрос
                </span>
              )}
              <BadgeCheck className="mb-5 h-7 w-7 text-purple" aria-hidden="true" />
              <h3 className="pr-28 text-xl font-extrabold text-ink">{service.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{service.description}</p>
              <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div className="text-2xl font-extrabold text-ink">{service.priceLabel}</div>
                <button className="secondary-button" onClick={() => onRequest(service.title)}>
                  Рассчитать
                </button>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 rounded-[8px] border border-black/10 bg-white/70 p-5 text-base leading-7 text-muted">
          Итоговая стоимость зависит от модели оборудования, длины трассы, материала стен, этажа,
          доступа к наружному блоку и сложности монтажа. Точный расчёт подготовим после уточнения деталей.
        </p>
      </div>
    </section>
  );
}
