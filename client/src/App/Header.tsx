import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RootState } from '../store/store';

const Header = (): JSX.Element => {
  const users = useSelector((store: RootState) => store.usersState.users);
  console.log(users);

  return (
    <nav className="nav" style={{ marginBottom: '20px', border: '2px solid black' }}>
      {users.length > 0 ? (
        <div className='flex justify-between'>
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
