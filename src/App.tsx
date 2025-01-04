import { Home } from "./pages/Home.js";
import "./styles/index.css";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

// Написать SPA на React и Typescript.
// Приложение запрашивает у Json Placeholder Api (https://jsonplaceholder.typicode.com/)
// список постов и выводит их на главной странице.
// Пользователь может кликнуть по посту,
// перейти в него и увидеть его содержание и комментарии.

// API - https://jsonplaceholder.typicode.com/posts/

// src/
// │
// ├── components/
// │   ├── PostCard.jsx       // Карточка одного поста
// │   ├── PostList.jsx       // Список всех постов
// │   ├── PostDetails.jsx    // Страница поста с комментариями
// │   ├── Comment.jsx        // Компонент для одного комментария
// │   └── CommentList.jsx    // Список комментариев
// │
// ├── pages/
// │   ├── Home.jsx           // Главная страница
// │   └── PostPage.jsx       // Страница поста
// │
// ├── App.jsx                // Основной компонент приложения
// ├── index.js               // Точка входа
// ├── api/                   // Работа с API
// │   ├── posts.js           // Методы для работы с постами
// │   └── comments.js        // Методы для работы с комментариями
// │
// └── styles/                // Стили

export default App;
