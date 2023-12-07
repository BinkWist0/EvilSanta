import React from 'react';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <nav className="nav" style={{ marginBottom: '20px', border: '2px solid black' }}>
      <div>
        <Link to="/registration">
          <button type="button">Registration</button>
        </Link>
        <Link to="/login">
          <button type="button">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
