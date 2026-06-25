import { DemoBanner } from "../components/DemoBanner";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ScrollToTop } from "../components/ScrollToTop";
import { company } from "../config/company";

export function PrivacyPage() {
  return (
    <>
      <ScrollToTop />
      <DemoBanner />
      <Header />
      <main className="section">
        <article className="container-page max-w-3xl">
          <p className="text-sm font-bold uppercase text-purple">Документ</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-ink sm:text-5xl">Политика конфиденциальности</h1>
          <div className="mt-8 grid gap-6 text-base leading-8 text-muted">
            <p>
              Эта страница описывает обработку данных на демонстрационном сайте компании «{company.name}».
              Перед полноценным запуском текст должен проверить и утвердить владелец сайта.
            </p>
            <h2 className="text-2xl font-extrabold text-ink">Какие данные может вводить пользователь</h2>
            <p>
              В формах пользователь может указать имя, телефон или ссылку на профиль VK, параметры помещения,
              выбранную услугу и комментарий. Сайт не отправляет эти данные на собственный сервер: он формирует
              готовый текст обращения, который пользователь может скопировать или отправить через внешний сервис.
            </p>
            <h2 className="text-2xl font-extrabold text-ink">Статистика посещений</h2>
            <p>
              Сайт подготовлен к подключению внешнего API статистики посещений. В демо-режиме показываются
              демонстрационные значения с явной подписью. После подключения сервиса владелец сайта должен проверить,
              какие данные обрабатывает выбранный провайдер, включая IP-адреса или cookies, и обновить этот текст.
            </p>
            <h2 className="text-2xl font-extrabold text-ink">Внешние сервисы</h2>
            <p>
              Сайт может перенаправлять пользователя во ВКонтакте, 2ГИС, WhatsApp, Telegram или почтовый клиент.
              На таких площадках действуют их собственные правила обработки данных.
            </p>
            <h2 className="text-2xl font-extrabold text-ink">Cookies</h2>
            <p>
              Сам сайт не использует cookies. Для запоминания свёрнутого состояния виджета статистики и защиты
              от повторного учёта посещения в рамках сессии могут применяться localStorage и sessionStorage.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
