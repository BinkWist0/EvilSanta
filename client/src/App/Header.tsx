// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';


import './Header.css'; // Импортируйте стили здесь


const Header = (): JSX.Element => {
  const user = { name: 'Vasya', secondName: 'Pupkin' };
  return (
    <nav className="nav p-4 rounded-md mb-8 animate-gradient">
      {user ? (
        <div className="flex justify-between items-center container mx-auto">
          <div>
            <Link to="/" className="text-white font-bold text-2xl">
              🎄 TS Holiday
            </Link>
          </div>
          <div className="flex space-x-4 items-center">
            <Link
              to="/users"
              className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
            >
              👥 Все участники
            </Link>
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
            >
              🎁 Мой получатель
            </Link>
            <Link
              to="/profile"
              className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
            >
              🎅 Мой профиль
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between container mx-auto">
          <div>
            <Link to="/" className="text-white font-bold text-2xl">
              🎄 TS Holiday
            </Link>
          </div>
          <div className="flex space-x-4 items-center">
            <Link
              to="/registration"
              className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
            >
              <button
                type="button"
                className="bg-red-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full"
              >
                🎁 Registration
              </button>
            </Link>
            <Link
              to="/login"
              className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
            >
              <button
                type="button"
                className="bg-red-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full"
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
