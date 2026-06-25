import { Calculator, MessageCircle, Phone } from "lucide-react";
import { company } from "../config/company";
import { externalAttrs, getPrimaryContactUrl, phoneHref } from "../lib/links";

export function MobileContactBar({ onRequest }: { onRequest: (service?: string) => void }) {
  const contactUrl = getPrimaryContactUrl();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/90 px-3 py-2 pb-[calc(8px+env(safe-area-inset-bottom))] shadow-[0_-12px_40px_rgba(74,93,132,.14)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        {company.phone ? (
          <a className="secondary-button px-2 text-sm" href={phoneHref}>
            <Phone className="h-4 w-4" aria-hidden="true" />
            Позвонить
          </a>
        ) : (
          <a className="secondary-button px-2 text-sm" href={company.twoGis} {...externalAttrs}>
            2ГИС
          </a>
        )}
        {contactUrl && (
          <a className="secondary-button px-2 text-sm" href={contactUrl} {...externalAttrs}>
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Написать
          </a>
        )}
        <button className="primary-button px-2 text-sm" onClick={() => onRequest("Расчёт стоимости")}>
          <Calculator className="h-4 w-4" aria-hidden="true" />
          Рассчитать
        </button>
      </div>
    </div>
  );
}
