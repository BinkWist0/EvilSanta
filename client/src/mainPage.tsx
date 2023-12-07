import React from 'react';
import { Link } from 'react-router-dom';

function mainPage(): JSX.Element {
    
  return (
    <div>
      <Link to="/register">
        <button>Регистрация</button>
      </Link>
    </div>
  );
}

export default mainPage;