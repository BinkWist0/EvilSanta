import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import type { Mathes } from '../Users/MathesType';

function ProfilePage(): JSX.Element {
  const userList = useSelector((store: RootState) => store.usersState.users);
  const user = {
    id: 0,
    name: 'Vasya',
    lastname: 'Pupkin',
    email: 'pupkin@ya.ru',
    description: 'Happy holidays!',
  };

  const [users, setUsers] = useState(userList);
  const [recipient, setRecipient] = useState<Mathes[]>([]);

  function mathes(userId: number, userId2: number): Mathes {
    return { userId, userId2 };
  }

  function sortUsers(): void {
    const sortedUsers = [...users].sort(() => Math.random() - 0.5);
    setUsers(sortedUsers);

    const assignments = sortedUsers.map((user, i) => {
      const nextIndex = (i + 1) % sortedUsers.length;
      const match = mathes(user.id, sortedUsers[nextIndex].id);
      setRecipient((prev) => [...prev, match]);
      return { userId: user.id, mathes: sortedUsers[nextIndex].id };
    });
  }

  return (
    <div>
      <div>
        <img alt="..." src={user.name} />
      </div>
      <div>
        <h1>
          {user.name}
          {user.lastname}
        </h1>
      </div>
      <div>
        <h2>{user.email}</h2>
      </div>
      <div>
        <h3>{user.description}</h3>
      </div>
      <button onClick={sortUsers}>Запустить магию случайного распределения</button>
      <div>
        <h3>Связи пользователей:</h3>
        <ul>
          {recipient.map((match) => (
            <li key={match.userId}>
              Пользователь {match.userId} дарит подарок пользователю {match.userId2}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfilePage;
