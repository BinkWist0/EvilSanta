import React, { useState } from 'react';
import { RootState, useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';

function LoginModal({ onClose }: any): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.usersInfo.user);
  console.log(user);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'user/login', payload: data }));
  };

  return (
    <div className="modal">
      <form onSubmit={handleLogin}>
        <p>Введите email:</p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p>Введите password:</p>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div>
          <button type="submit">Войти</button>
          <div>
            <button type="button" onClick={onClose}>
              Закрыть
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default LoginModal;
