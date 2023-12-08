import React, { useState } from 'react';
import { RootState, useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';

function RegModalTwo(): JSX.Element {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [error, setError] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const userInfi = useSelector((store: RootState) => store.usersInfo.userInfo);
  console.log(userInfi);

  const handleReg = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (name === '' || lastname === '') {
      setError('Заполните все поля');
      return;
    }

    dispatch({ type: 'add/userinfo', payload: { name, lastname } });
  };

  return (
    <div className="modal">
      <form onSubmit={handleReg}>
        {error ? <div>{error}</div> : ''}
        <p>Введите Имя:</p>
        <input type="text" name="name" onChange={(e) => setName(e.target.value)}></input>
        <p>Введите Фамилию:</p>
        <input type="text" name="lastname" onChange={(e) => setLastname(e.target.value)}></input>
        <div>
          <button type="submit" onClick={() => setShowModal(true)}>
            Дальше
          </button>
        </div>
      </form>
    </div>
  );
}
export default RegModalTwo;
