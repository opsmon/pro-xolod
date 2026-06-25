import { ExternalLink, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { company } from "../config/company";
import { externalAttrs, phoneHref } from "../lib/links";

export function Contacts({ onRequest }: { onRequest: (service?: string) => void }) {
  const rows = [
    ["Город работы", company.city],
    ["Адрес", company.address],
    ["Режим работы", company.schedule],
    ["Телефон", company.phone],
    ["Электронная почта", company.email],
  ].filter(([, value]) => value);

  return (
    <section className="section bg-white" id="contacts">
      <div className="container-page grid gap-8 lg:grid-cols-[1fr_.9fr]">
        <div>
          <p className="text-sm font-bold uppercase text-purple">Контакты</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-normal text-ink sm:text-5xl">
            Рассчитаем стоимость под вашу задачу
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            Напишите нам, расскажите о помещении и прикрепите несколько фотографий места установки.
            Специалист уточнит детали и поможет рассчитать стоимость.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {company.vk && (
              <a className="primary-button" href={company.vk} {...externalAttrs}>
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Написать во ВКонтакте
              </a>
            )}
            {company.phone && (
              <a className="secondary-button" href={phoneHref}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Позвонить
              </a>
            )}
            {company.whatsapp && (
              <a className="secondary-button" href={company.whatsapp} {...externalAttrs}>
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp
              </a>
            )}
            {company.telegram && (
              <a className="secondary-button" href={company.telegram} {...externalAttrs}>
                <Send className="h-5 w-5" aria-hidden="true" />
                Telegram
              </a>
            )}
            <a className="secondary-button" href={company.twoGis} {...externalAttrs}>
              <MapPin className="h-5 w-5" aria-hidden="true" />
              Открыть в 2ГИС
            </a>
            <button className="primary-button" onClick={() => onRequest("Расчёт стоимости")}>
              Получить расчёт
            </button>
          </div>
        </div>
        <div className="card rounded-[8px] p-6">
          <h3 className="text-2xl font-extrabold text-ink">Про-Холод</h3>
          <div className="mt-6 grid gap-4">
            {rows.map(([label, value]) => (
              <div className="rounded-[8px] bg-[#f7f8fb] p-4" key={label}>
                <p className="text-xs font-extrabold uppercase text-muted">{label}</p>
                <p className="mt-1 font-bold text-ink">{value}</p>
              </div>
            ))}
            {company.email && (
              <a className="secondary-button justify-start" href={`mailto:${company.email}`}>
                <Mail className="h-5 w-5" aria-hidden="true" />
                Написать на почту
              </a>
            )}
            <a className="secondary-button justify-start" href={company.twoGis} {...externalAttrs}>
              <ExternalLink className="h-5 w-5" aria-hidden="true" />
              Карточка компании в 2ГИС
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
