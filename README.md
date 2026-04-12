# Tutorial: Tic-Tac-Toe. Учебная программа "Крестики-нолики"

- Позволяет играть в крестики-нолики,
- Указывает, когда игрок выиграл игру,
- Сохраняет историю игры по мере её развития,
- Позволяет игрокам просматривать историю игры и видеть предыдущие версии игрового поля,
- Подсветка клеток победителя,
- Предпросмотр (preview) поля с ходами при наведении на кнопку перехода к ходу
  
[По материалам сайта: *https://ru.react.dev/learn/tutorial-tic-tac-toe*](https://ru.react.dev/learn/tutorial-tic-tac-toe)

## Заметки по установке

[Официальный сайт: `https://reactjs.org/`](https://reactjs.org/)

### Установка React

***Установка React***

   `npm create vite@latest`
   опции:

- React
- JavaScript

или, полная запись:
  `npm create vite@latest tic-tac-toe -- --template react`,
  где:

- **tic-tac-toe** - каталог установки,
- **react** - фреймворк с шаблоном

***Переход в каталог с проектом***
  `cd tic-tac-toe`

***Установка модулей***
  `npm install`

***Локальная разработка***
   `npm run dev`

***Build проекта в папку "/docs" (Сборка для продакшена)***
(при необходимости можно изменить папку в "vite.config.js")

   `npm run build`

```bash
  ?  Local:   http://localhost:5173/
  ?  Network: use --host to expose
  ?  press h + enter to show help
```

***Предварительный просмотр сборки***

`npm run preview`

```bash
  ?  Local:   http://localhost:4173/
```

***Проверка сборки локально***
`npx serve docs`

***Роутер react-router-dom***
    `npm i react-router-dom`

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
