import React from 'react';
import { Link } from 'react-router-dom';

function MainPage(): JSX.Element {
  return (
    <div className='full overflow-hidden'>
      <div className="flex items-center justify-center h-screen">
        <Link to="/register">
          <button type="submit">Регистрация</button>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;