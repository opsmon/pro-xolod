import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "../config/company";
import { externalAttrs, getPrimaryContactUrl } from "../lib/links";
import { Logo } from "./Logo";

const nav = [
  ["Услуги", "#services"],
  ["Цены", "#prices"],
  ["Как работаем", "#steps"],
  ["Работы", "#portfolio"],
  ["Отзывы", "#reviews"],
  ["Контакты", "#contacts"],
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const contactUrl = getPrimaryContactUrl();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${scrolled ? "glass shadow-sm" : "bg-white/70 backdrop-blur"}`}
    >
      <div className="container-page flex min-h-[72px] items-center justify-between gap-4">
        <a href="#top" aria-label="На главную">
          <Logo />
        </a>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-muted lg:flex" aria-label="Основная навигация">
          {nav.map(([label, href]) => (
            <a className="transition hover:text-ink" href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {company.vk && (
            <a className="primary-button hidden sm:inline-flex" href={company.vk} {...externalAttrs}>
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Написать в VK
            </a>
          )}
          {!company.vk && contactUrl && (
            <a className="secondary-button hidden sm:inline-flex" href={contactUrl} {...externalAttrs}>
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Связаться
            </a>
          )}
          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white lg:hidden"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="container-page grid gap-2 pb-4 lg:hidden" aria-label="Мобильная навигация">
          {nav.map(([label, href]) => (
            <a
              className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-ink shadow-sm"
              href={href}
              key={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
