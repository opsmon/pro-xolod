# Про-Холод

Одностраничный сайт-визитка для компании «Про-Холод» из Комсомольска-на-Амуре. Проект сделан на React, TypeScript, Vite и Tailwind CSS, собирается в статические файлы и подготовлен для GitHub Pages.

## Запуск проекта

```bash
npm install
npm run dev
```

## Проверка

```bash
npm run lint
npm run build
npm run preview
```

## Где менять данные

- Контакты, город, 2ГИС и условия: `src/config/company.ts`
- Режим демо и ссылки проекта: `src/config/site.ts`
- Услуги и цены: `src/config/services.ts`
- Статистика посещений: `src/config/analytics.ts`
- Отзывы и рейтинг: `src/config/reviews.ts`
- FAQ: `src/config/faq.ts`
- Фотографии работ: `src/config/portfolio.ts`

## Логотип

Сейчас используется аккуратный SVG-знак в стиле задания. Когда будет предоставлен реальный логотип, положите файл в `public/images/logo/` и замените компонент `src/components/Logo.tsx`. Рекомендуемый формат: SVG, PNG или WebP с прозрачным фоном.

## Фотографии работ

Файлы лежат в `public/images/works/`. Реальные фотографии лучше сохранить в WebP или AVIF, затем обновить массив в `src/config/portfolio.ts`: путь, alt-текст и категорию.

## API посещений

Создайте `.env` на основе `.env.example`:

```env
VITE_VISITS_API_URL=https://example.com/visits
```

Ожидаемый ответ API:

```json
{
  "today": 24,
  "month": 618
}
```

В демо-режиме используются значения из `src/config/analytics.ts` и показывается подпись «Демо-данные». Для рабочего режима установите `demoMode: false` и заполните `VITE_VISITS_API_URL`.

## GitHub Pages

1. Создайте репозиторий `pro-holod`.
2. Загрузите проект в репозиторий.
3. Откройте Settings.
4. Перейдите в Pages.
5. Выберите источник GitHub Actions.
6. Выполните push в `main`.
7. Проверьте вкладку Actions.
8. Откройте публичную ссылку `https://GITHUB_USERNAME.github.io/pro-holod/`.

Workflow находится в `.github/workflows/deploy.yml`.

## Если меняется имя репозитория

Нужно обновить:

- `base` в `vite.config.ts`;
- canonical и Open Graph URL в `index.html`;
- `public/robots.txt`;
- `public/sitemap.xml`;
- ссылки в `src/config/site.ts`;
- ссылки в этом README.

## Собственный домен

В настройках GitHub Pages добавьте Custom domain. Если нужен файл `CNAME`, создайте его в `public/CNAME` с доменом без протокола, например `example.ru`. DNS-записи настраиваются у регистратора домена по инструкции GitHub Pages.

## Что запросить у клиента

- Реальный логотип.
- Телефон, адрес, режим работы, email.
- Ссылки VK, WhatsApp, Telegram.
- Подтверждённые цены.
- Условия гарантии и рассрочки.
- Районы выезда.
- Реальные фотографии работ.
- Реальные отзывы, рейтинг и количество отзывов.

## Отключение демо-режима

- В `src/config/site.ts` установите `demoMode: false`.
- В `src/config/analytics.ts` установите `demoMode: false` после подключения API.
- В `src/config/reviews.ts` замените демо-отзывы реальными и установите `demo: false`.
