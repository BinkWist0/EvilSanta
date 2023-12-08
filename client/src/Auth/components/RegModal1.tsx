import React, { useEffect, useState } from 'react';
import { RootState, useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import Avatar from '../types/AvatarTypes';

function RegModal1({ onClose }: any): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [idAvatar, setIdAvatar] = useState(0);
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [modal, setModal] = useState<'Page1' | 'Page2' | 'Page3' | 'Page4' | 'Page5'>('Page1');
  const [avatars, setAvatars] = useState<Avatar[]>([]);

  const userInfo = useSelector((store: RootState) => store.usersInfo.userInfo);

  useEffect(() => {
    fetch('/api/avatars')
      .then((res) => res.json())
      .then((data) => setAvatars(data));
  }, []);

  const dispatch = useAppDispatch();

  const handleReg = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Заполните все поля');
      return;
    }
    dispatch({ type: 'add/userinfo', payload: { email, password } });
    setModal('Page2');
  };

  const handleRegTwo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (name === '' || lastname === '') {
      setError('Заполните все поля');
      return;
    }
    dispatch({ type: 'add/userinfo', payload: { name, lastname } });
    setModal('Page3');
  };

  const handleRegThree = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (idAvatar === 0) {
      setError('Выберете аватара!!!');
      return;
    }
    dispatch({ type: 'add/userinfo', payload: { idAvatar } });
    setModal('Page4');
  };

  const handleRegFour = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (description === '') {
      setError('Заполните все поля');
      return;
    }
    dispatch({ type: 'add/userinfo', payload: { description } });
    setModal('Page5');
  };
  const handleRegFull = (): void => {
    fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'user/register', payload: data });
      });
  };

  return (
    <div className={modal !== 'Page3' && modal !== 'Page4' ? 'modal' : 'modal2'}>
      {modal === 'Page1' ? (
        <>
          <form onSubmit={handleReg}>
            {error ? <div>{error}</div> : ''}
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
              <button type="submit">Дальше</button>
              <div>
                <button type="button" onClick={onClose}>
                  Закрыть
                </button>
              </div>
            </div>
          </form>
        </>
      ) : (
        ''
      )}
      {modal === 'Page2' ? (
        <form onSubmit={handleRegTwo}>
          {error ? <div>{error}</div> : ''}
          <p>Введите Имя:</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <p>Введите Фамилию:</p>
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          ></input>
          <div>
            <button type="submit">Дальше</button>
          </div>
          <button type="button" onClick={() => setModal('Page1')}>
            Назад
          </button>
        </form>
      ) : (
        ''
      )}
      {modal === 'Page3' ? (
        <form onSubmit={handleRegThree}>
          {error ? <div>{error}</div> : ''}
          <p>Выберете аватара:</p>
          <div className="inline-grid grid-cols-4 gap-6">
            {avatars.map((avatar) => {
              return (
                <div>
                  <button type="button" onClick={() => setIdAvatar(avatar.id)}>
                    <div className="">
                      <img
                        className="rounded-full border-4 border-white w-16 h-16  "
                        src={avatar.url}
                      ></img>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
          <div>
            <button type="submit">Дальше</button>
          </div>
          <button type="button" onClick={() => setModal('Page2')}>
            Назад
          </button>
        </form>
      ) : (
        ''
      )}
      {modal === 'Page4' ? (
        <form onSubmit={handleRegFour}>
          {error ? <div>{error}</div> : ''}
          <p>
            Напишите о себе. И ваше пожалние для подарка, чтобы Санте было проще, а вам приятнее:
          </p>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div>
            <button type="submit">Дальше</button>
          </div>
          <button type="button" onClick={() => setModal('Page3')}>
            Назад
          </button>
        </form>
      ) : (
        ''
      )}
      {modal === 'Page5' ? (
        <div>
          <div>
            <button type="button" onClick={handleRegFull}>
              Зарегестрироваться
            </button>
          </div>
          <div>
            <button type="button" onClick={() => setModal('Page4')}>
              Назад
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
export default RegModal1;
