import { Building2, Home, MoveRight, Paintbrush, Search, Settings, Wind } from "lucide-react";

const quick = [
  ["Установить кондиционер", "Монтаж блоков, прокладка трассы и проверка работы системы.", Wind],
  ["Подобрать кондиционер", "Подскажем модель под площадь, бюджет и особенности помещения.", Search],
  ["Почистить кондиционер", "Очистим фильтры, теплообменник, дренаж и внутренние элементы.", Paintbrush],
  ["Заправить кондиционер", "Проверим систему и рассчитаем нужный объём хладагента.", Settings],
  ["Отремонтировать кондиционер", "Найдём причину неисправности и согласуем варианты ремонта.", Home],
  ["Перенести или демонтировать", "Аккуратно снимем или перенесём оборудование на новое место.", MoveRight],
  ["Обслужить оборудование организации", "Обсудим плановое обслуживание офисов, магазинов и помещений.", Building2],
];

export function QuickServices({ onRequest }: { onRequest: (service?: string) => void }) {
  return (
    <section className="section bg-white/70" id="services">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase text-purple">Быстрый выбор</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-normal text-ink sm:text-5xl">Что нужно сделать?</h2>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quick.map(([title, description, Icon]) => (
            <article className="card rounded-[8px] p-5 transition hover:-translate-y-1" key={title as string}>
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl bg-blue/12 text-purple">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-extrabold leading-snug text-ink">{title as string}</h3>
              <p className="mt-2 min-h-[84px] text-sm leading-6 text-muted">{description as string}</p>
              <button className="secondary-button mt-4 w-full text-sm" onClick={() => onRequest(title as string)}>
                Узнать стоимость
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
