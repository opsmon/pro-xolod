import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faq } from "../config/faq";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase text-purple">FAQ</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-normal text-ink sm:text-5xl">Ответы на вопросы</h2>
        </div>
        <div className="mt-10 grid gap-3">
          {faq.map((item, index) => (
            <div className="rounded-[8px] border border-black/10 bg-white" key={item.question}>
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-lg font-extrabold text-ink"
                aria-expanded={open === index}
                onClick={() => setOpen((current) => (current === index ? -1 : index))}
              >
                {item.question}
                <ChevronDown className={`h-5 w-5 shrink-0 text-purple transition ${open === index ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {open === index && <p className="px-5 pb-5 text-base leading-7 text-muted">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
