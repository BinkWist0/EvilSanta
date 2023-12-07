import React from 'react';
import { Link } from 'react-router-dom';

function mainPage(): JSX.Element {
  return (
    <div>
      <h1>Главная страница</h1>
      <Link to="/profile">
        <button>Профиль</button>
      </Link>
      <Link to="/register">
        <button>Регистрация</button>
      </Link>
      <Link to="/login">
        <button>Авторизация</button>
      </Link>
    </div>
  );
}

export default mainPage;
