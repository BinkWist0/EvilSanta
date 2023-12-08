import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { type RootState, useAppDispatch } from '../../store/store';
import UserItem from './UserItem';

function UsersList(): JSX.Element {
  const dispatch = useAppDispatch();
  const users = useSelector((store: RootState) => store.usersState.users);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'users/init', payload: data }))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex flex-wrap justify-around">
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UsersList;
