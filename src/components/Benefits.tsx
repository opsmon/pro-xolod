import { BriefcaseBusiness, HandCoins, HeartHandshake, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { contactLabels } from "../config/company";

const benefits = [
  ["Понятная стоимость", "Объясняем, из чего складывается цена, и согласовываем работы до начала монтажа.", HandCoins],
  ["Аккуратная установка", "Бережно относимся к ремонту, мебели и имуществу клиента.", Sparkles],
  ["Помощь с подбором", "Подбираем оборудование под помещение, задачи и доступный бюджет.", HeartHandshake],
  ["Гарантия на работы", contactLabels.warranty, ShieldCheck],
  ["Обслуживание", "Поможем с последующей чисткой, диагностикой и ремонтом.", Wrench],
  ["Работа с организациями", "Обслуживание офисов, магазинов и других коммерческих помещений.", BriefcaseBusiness],
];

export function Benefits() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase text-purple">Доверие</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-normal text-ink sm:text-5xl">Почему выбирают «Про-Холод»</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([title, text, Icon]) => (
            <article className="card rounded-[8px] p-6" key={title as string}>
              <Icon className="mb-5 h-7 w-7 text-purple" aria-hidden="true" />
              <h3 className="text-xl font-extrabold text-ink">{title as string}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{text as string}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
