import React from 'react';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  const user = { name: 'Vasya', secondName: 'Pupkin' };
  return (
    <nav className="nav" style={{ marginBottom: '20px', border: '2px solid black' }}>
      {user ? (
        <div className="flex justify-between">
          <div>
            <Link to="/">TS</Link>
          </div>
          <div>
            <Link to="/users">Все участники</Link>
          </div>
          <div>
            <Link to="/">Мой получатель</Link>
          </div>
          <div>
            <Link to="/profile">Мой профиль</Link>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <Link to="/">TS</Link>
          </div>
          <div>
            <Link to="/registration">
              <button type="button">Registration</button>
            </Link>
          </div>
          <div>
            <Link to="/login">
              <button type="button">Login</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
