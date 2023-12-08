import React, { useState } from 'react';
import { RootState, useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';

function LoginModal({ onClose }: any): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.usersInfo.user);
  console.log(user);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Заполните все поля');
      return;
    }
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      console.log(data.message);
      dispatch({ type: 'user/login', payload: data });
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="modal">
      {error ? <div>{error}</div> : ''}
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
