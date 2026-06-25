import { Copy, ImagePlus, Send, X } from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { company } from "../config/company";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { buildMessage, externalAttrs } from "../lib/links";

type Props = {
  open: boolean;
  initialService: string;
  onClose: () => void;
};

export function RequestModal({ open, initialService, onClose }: Props) {
  const [service, setService] = useState(initialService);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [area, setArea] = useState("");
  const [install, setInstall] = useState("уточнить");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEscapeKey(open, onClose);

  useEffect(() => {
    if (!open) return;
    returnFocusRef.current = document.activeElement as HTMLElement;
    setService(initialService || "Расчёт стоимости");
    setSubmitted(false);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = previous;
      returnFocusRef.current?.focus();
    };
  }, [open, initialService]);

  const message = useMemo(
    () =>
      buildMessage("Здравствуйте! Хочу получить расчёт.", {
        Услуга: service,
        Имя: name,
        "Телефон или VK": contact,
        "Площадь помещения": area ? `${area} м²` : "",
        Монтаж: install,
        Комментарий: comment,
      }),
    [area, comment, contact, install, name, service],
  );

  const errors = {
    service: submitted && !service.trim() ? "Укажите услугу" : "",
    contact: submitted && !contact.trim() ? "Укажите телефон или профиль VK" : "",
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const ready = submitted && !errors.service && !errors.contact;

  const copy = async () => {
    await navigator.clipboard.writeText(message);
    setCopied(true);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-ink/62 p-3" role="dialog" aria-modal="true" aria-labelledby="request-title" onMouseDown={onClose}>
      <div className="max-h-[94vh] w-full max-w-2xl overflow-auto rounded-[18px] bg-white p-5 shadow-soft sm:p-7" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="request-title" className="text-2xl font-extrabold text-ink">Заявка на расчёт</h2>
            <p className="mt-2 text-sm leading-6 text-muted">Заполните поля, а сайт подготовит сообщение для отправки в удобный канал.</p>
          </div>
          <button ref={closeButtonRef} className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/10" onClick={onClose} aria-label="Закрыть окно">
            <X aria-hidden="true" />
          </button>
        </div>
        <form className="mt-5 grid gap-4" onSubmit={submit} noValidate>
          <label className="grid gap-2 text-sm font-bold text-ink">
            Услуга
            <input className="rounded-2xl border border-black/10 px-4 py-3" value={service} onChange={(e) => setService(e.target.value)} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "service-error" : undefined} />
            {errors.service && <span id="service-error" className="text-sm text-red-600">{errors.service}</span>}
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-ink">
              Имя
              <input className="rounded-2xl border border-black/10 px-4 py-3" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Телефон или VK
              <input className="rounded-2xl border border-black/10 px-4 py-3" value={contact} onChange={(e) => setContact(e.target.value)} aria-invalid={Boolean(errors.contact)} aria-describedby={errors.contact ? "contact-error" : undefined} />
              {errors.contact && <span id="contact-error" className="text-sm text-red-600">{errors.contact}</span>}
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Площадь, м²
              <input className="rounded-2xl border border-black/10 px-4 py-3" inputMode="numeric" value={area} onChange={(e) => setArea(e.target.value)} />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Нужна установка
              <select className="rounded-2xl border border-black/10 bg-white px-4 py-3" value={install} onChange={(e) => setInstall(e.target.value)}>
                <option>уточнить</option>
                <option>да</option>
                <option>нет</option>
              </select>
            </label>
          </div>
          <label className="grid gap-2 text-sm font-bold text-ink">
            Комментарий
            <textarea className="min-h-24 rounded-2xl border border-black/10 px-4 py-3" value={comment} onChange={(e) => setComment(e.target.value)} />
          </label>
          <div className="rounded-[8px] border border-dashed border-black/15 bg-[#f7f8fb] p-4 text-sm font-semibold text-muted">
            <ImagePlus className="mb-2 h-5 w-5 text-purple" aria-hidden="true" />
            Фотографии можно будет прикрепить в сообщении во ВКонтакте или другом мессенджере.
          </div>
          <button className="primary-button" type="submit">Подготовить сообщение</button>
        </form>
        {ready && (
          <div className="mt-5 rounded-[8px] bg-[#f7f8fb] p-4">
            <p className="mb-3 text-sm font-extrabold text-ink">Сообщение для отправки</p>
            <pre className="whitespace-pre-wrap text-sm leading-6 text-muted">{message}</pre>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              {company.vk && (
                <a className="primary-button" href={company.vk} {...externalAttrs}>
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Перейти во ВКонтакте
                </a>
              )}
              <button className="secondary-button" type="button" onClick={copy}>
                <Copy className="h-4 w-4" aria-hidden="true" />
                {copied ? "Скопировано" : "Скопировать"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
