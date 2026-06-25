import { company } from "../config/company";
import { services } from "../config/services";
import { externalAttrs, withBase } from "../lib/links";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-12 text-white md:pb-12">
      <div className="container-page grid gap-8 md:grid-cols-[1fr_1fr_1fr]">
        <div>
          <Logo inverse />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
            Информация на сайте не является публичной офертой. Итоговая стоимость зависит от оборудования и условий выполнения работ.
          </p>
          <p className="mt-4 text-sm text-white/60">© {new Date().getFullYear()} {company.name}</p>
        </div>
        <div>
          <h3 className="font-extrabold">Услуги</h3>
          <ul className="mt-4 grid gap-2 text-sm text-white/70">
            {services.slice(0, 6).map((service) => <li key={service.id}>{service.title}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="font-extrabold">Контакты</h3>
          <ul className="mt-4 grid gap-2 text-sm text-white/70">
            <li>{company.city}</li>
            {company.phone && <li>{company.phone}</li>}
            {company.schedule && <li>{company.schedule}</li>}
            <li><a className="underline-offset-4 hover:underline" href={company.twoGis} {...externalAttrs}>2ГИС</a></li>
            {company.vk && <li><a className="underline-offset-4 hover:underline" href={company.vk} {...externalAttrs}>ВКонтакте</a></li>}
            <li><a className="underline-offset-4 hover:underline" href={withBase("/privacy/")}>Политика конфиденциальности</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
