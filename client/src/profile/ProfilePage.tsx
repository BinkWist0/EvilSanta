import React, { useState } from 'react';
// import type { User } from '../Users/UserType';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

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
  const [recipient, setRecipient] = useState(null);

  function sortUsers(): void {
    const sortedUsers = [...users].sort(() => Math.random() - 0.5);
    setUsers(sortedUsers);
    const assignments = sortedUsers.map((users, i) => {
      const nextIndex = (i + 1) % sortedUsers.length;
      return { userId: user.id, : sortedUsers[nextIndex] };
    });
    setRecipient(assignments);
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
    </div>
  );
}

export default ProfilePage;
