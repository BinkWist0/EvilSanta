// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'; // Импортируйте стили здесь

const Header = (): JSX.Element => {
  const user = { name: 'Vasya', secondName: 'Pupkin' };
  return (
    <nav className="nav p-4 rounded-md mb-8 mt-[-35px] animate-gradient">
      {user ? (
        <div className="flex justify-between items-center container mx-auto">
          <div>
            <Link to="/" className="text-trattatello font-bold text-3xl text-white-blue">
              🎄 TS Holiday
            </Link>
          </div>
          <div className="flex space-x-4 items-center">
            <Link
              to="/users"
              className="text-trattatello hover:text-gray-300 transition duration-300 ease-in-out"
            >
              👥 Все участники
            </Link>
            <Link
              to="/"
              className="text-trattatello hover:text-gray-300 transition duration-300 ease-in-out"
            >
              🎁 Мой получатель
            </Link>
            <Link
              to="/profile"
              className="text-trattatello hover:text-gray-300 transition duration-300 ease-in-out"
            >
              🎅 Мой профиль
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between container mx-auto">
          <div>
            <Link to="/" className="text-trattatello font-bold text-3xl text-white-blue">
              🎄 TS Holiday
            </Link>
          </div>
          <div className="flex space-x-4 items-center">
            <Link
              to="/registration"
              className="text-trattatello hover:text-gray-300 transition duration-300 ease-in-out"
            >
              <button
                type="button"
                className="btn-registration"
              >
                🎁 Registration
              </button>
            </Link>
            <Link
              to="/login"
              className="text-trattatello hover:text-gray-300 transition duration-300 ease-in-out"
            >
              <button
                type="button"
                className="btn-login"
              >
                🔒 Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;


