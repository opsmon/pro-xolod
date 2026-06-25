import { X } from "lucide-react";
import { useEffect } from "react";
import { portfolioItems } from "../config/portfolio";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { withBase } from "../lib/links";

type Props = {
  index: number | null;
  onClose: () => void;
};

export function Lightbox({ index, onClose }: Props) {
  const item = index === null ? null : portfolioItems[index];
  useEscapeKey(index !== null, onClose);

  useEffect(() => {
    if (index === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [index]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-ink/70 p-4" role="dialog" aria-modal="true" aria-label="Просмотр изображения" onMouseDown={onClose}>
      <div className="relative max-h-full w-full max-w-5xl" onMouseDown={(event) => event.stopPropagation()}>
        <button className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-ink" onClick={onClose} aria-label="Закрыть">
          <X aria-hidden="true" />
        </button>
        <img className="max-h-[84vh] w-full rounded-[8px] object-contain" src={withBase(item.src)} alt={item.alt} />
      </div>
    </div>
  );
}
