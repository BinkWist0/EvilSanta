// Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css'; // Импортируйте стили здесь

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { createPortal } from 'react-dom';
import LoginModal from '../Auth/components/LoginModal';

const Header = (): JSX.Element => {
  const [modal, setModal] = useState(false);
  const { user } = useSelector((store: RootState) => store.usersInfo);

  return (
    <nav className="nav p-4 rounded-md mb-8 animate-gradient">
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
              to="/math"
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
            <div className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
              <button
                type="button"
                className="bg-red-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => setModal(true)}
              >
                🔒 Login
              </button>

              {modal && createPortal(<LoginModal onClose={() => setModal(false)} />, document.body)}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
