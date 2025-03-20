# Nuxt 3 Auth App

Это небольшое веб-приложение на Nuxt 3, демонстрирующее базовую аутентификацию и работу с данными.

## Функциональность

- Аутентификация пользователей (логин/пароль)
- Защищенная страница аккаунта
- Таблица с данными и фильтрация
- Персистентность сессии пользователя

## Технологии

- Nuxt 3
- TypeScript
- Pinia (управление состоянием)
- SCSS (стилизация)

## Почему TypeScript?

TypeScript используется для:
- Улучшения разработки через строгую типизацию
- Лучшей поддержки IDE и автодополнения
- Уменьшения количества ошибок во время выполнения
- Улучшения читаемости и поддерживаемости кода

## Развертывание на PROD сервере

1. Подготовка
   ```bash
   # Установка зависимостей
   npm install
   
   # Сборка приложения
   npm run build
   ```

2. Настройка сервера
   - Установить Node.js и npm
   - Настроить NGINX как reverse proxy
   - Настроить SSL сертификат
   - Настроить PM2 для управления процессом

3. Запуск
   ```bash
   # Запуск через PM2
   pm2 start .output/server/index.mjs
   ```

4. Мониторинг
   - Настроить логирование
   - Настроить мониторинг через PM2
   - Настроить алерты при проблемах

## Реализованные функции

1. Аутентификация
   - Хранение сессии в localStorage
   - Защита роутов
   - Обработка ошибок авторизации

2. Работа с данными
   - Фильтрация по дате
   - Мульти-выбор категорий
   - Отзывчивая таблица

3. UI/UX
   - Адаптивный дизайн
   - Понятные сообщения об ошибках
   - Удобная навигация

## Запуск для разработки

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev
```

## Тестовые данные

Логин: admin
Пароль: password123
