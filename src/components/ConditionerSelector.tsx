import { Copy, Send } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { company } from "../config/company";
import { buildMessage, externalAttrs } from "../lib/links";

export function ConditionerSelector() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    type: "квартира",
    area: "",
    purpose: "",
    install: "нужен",
    budget: "до 50 000 ₽",
    name: "",
    contact: "",
    comment: "",
  });

  const message = useMemo(
    () =>
      buildMessage("Здравствуйте! Хочу подобрать кондиционер.", {
        "Тип помещения": form.type,
        Площадь: form.area ? `${form.area} м²` : "",
        Назначение: form.purpose,
        Монтаж: form.install,
        Бюджет: form.budget,
        Имя: form.name,
        Контакт: form.contact,
        Комментарий: form.comment,
      }),
    [form],
  );

  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(message);
    setCopied(true);
  };

  return (
    <section className="section bg-white" id="selector">
      <div className="container-page grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="text-sm font-bold uppercase text-purple">Подбор</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-normal text-ink sm:text-5xl">
            Не знаете, какой кондиционер выбрать?
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
            Поможем подобрать подходящую модель с учётом площади помещения,
            солнечной стороны, количества людей, техники и вашего бюджета.
          </p>
        </div>
        <form className="card rounded-[8px] p-5 sm:p-7" onSubmit={submit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-ink">
              Тип помещения
              <select className="rounded-2xl border border-black/10 bg-white px-4 py-3" value={form.type} onChange={(e) => update("type", e.target.value)}>
                {["квартира", "частный дом", "офис", "магазин", "другое"].map((value) => <option key={value}>{value}</option>)}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Площадь, м²
              <input className="rounded-2xl border border-black/10 px-4 py-3" inputMode="numeric" value={form.area} onChange={(e) => update("area", e.target.value)} />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Назначение
              <input className="rounded-2xl border border-black/10 px-4 py-3" value={form.purpose} onChange={(e) => update("purpose", e.target.value)} />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Монтаж
              <select className="rounded-2xl border border-black/10 bg-white px-4 py-3" value={form.install} onChange={(e) => update("install", e.target.value)}>
                <option>нужен</option>
                <option>не нужен</option>
                <option>пока не знаю</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink sm:col-span-2">
              Бюджет
              <select className="rounded-2xl border border-black/10 bg-white px-4 py-3" value={form.budget} onChange={(e) => update("budget", e.target.value)}>
                {["до 30 000 ₽", "до 50 000 ₽", "до 80 000 ₽", "больше 80 000 ₽", "пока не определился"].map((value) => <option key={value}>{value}</option>)}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Имя
              <input className="rounded-2xl border border-black/10 px-4 py-3" value={form.name} onChange={(e) => update("name", e.target.value)} />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Телефон или VK
              <input className="rounded-2xl border border-black/10 px-4 py-3" value={form.contact} onChange={(e) => update("contact", e.target.value)} />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink sm:col-span-2">
              Комментарий
              <textarea className="min-h-28 rounded-2xl border border-black/10 px-4 py-3" value={form.comment} onChange={(e) => update("comment", e.target.value)} />
            </label>
          </div>
          <button className="primary-button mt-5 w-full" type="submit">Подготовить сообщение</button>
          {submitted && (
            <div className="mt-5 rounded-[8px] bg-[#f7f8fb] p-4">
              <p className="mb-3 text-sm font-extrabold text-ink">Готовое сообщение</p>
              <pre className="whitespace-pre-wrap text-sm leading-6 text-muted">{message}</pre>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                {company.vk && (
                  <a className="primary-button" href={company.vk} {...externalAttrs}>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Написать во ВКонтакте
                  </a>
                )}
                <button className="secondary-button" type="button" onClick={copy}>
                  <Copy className="h-4 w-4" aria-hidden="true" />
                  {copied ? "Скопировано" : "Скопировать сообщение"}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
