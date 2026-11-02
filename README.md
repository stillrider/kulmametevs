# Мурзы Кульмаметьевы

Сайт дворянского рода мурз Кульмаметьевых на [Astro](https://astro.build). Пока готов прототип главной страницы.

## Запуск

```bash
npm install
npm run dev
```

Сайт откроется на `http://localhost:4321`. Сборка для публикации: `npm run build`, результат появится в `dist/`.

## Структура

- `src/pages/index.astro` — главная страница.
- `src/components/` — её секции.
- `src/data/home.ts` — тексты ленты времени, новости и контакты.
- `src/styles/global.css` — цвета, шрифты и базовые стили.
- `images/legacy/` — оригиналы изображений с текущего сайта на Webnode, разложены по темам. Источник каждого файла указан в `manifest.json`.

## Публикация

При каждом пуше в `main` GitHub Actions собирает сайт и публикует его на GitHub Pages: <https://stillrider.github.io/kulmametevs/>.
