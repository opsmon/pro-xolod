import { ImageIcon } from "lucide-react";
import { useState } from "react";
import { portfolioItems } from "../config/portfolio";
import { siteConfig } from "../config/site";
import { withBase } from "../lib/links";
import { Lightbox } from "./Lightbox";

export function Portfolio() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="section" id="portfolio">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase text-purple">Галерея</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-normal text-ink sm:text-5xl">Примеры выполненных работ</h2>
          </div>
          {siteConfig.demoMode && (
            <p className="max-w-sm rounded-[8px] border border-black/10 bg-white/75 p-4 text-sm font-semibold text-muted">
              В этом разделе будут размещены реальные примеры монтажей.
            </p>
          )}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <button className="group overflow-hidden rounded-[8px] border border-black/10 bg-white text-left shadow-soft" key={item.src} onClick={() => setActive(index)}>
              <span className="sr-only">Открыть изображение: {item.category}</span>
              <img className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]" src={withBase(item.src)} alt={item.alt} loading="lazy" width="640" height="480" />
              <span className="flex items-center gap-2 px-4 py-4 text-sm font-extrabold text-ink">
                <ImageIcon className="h-4 w-4 text-purple" aria-hidden="true" />
                {item.category}
              </span>
            </button>
          ))}
        </div>
      </div>
      <Lightbox index={active} onClose={() => setActive(null)} />
    </section>
  );
}
