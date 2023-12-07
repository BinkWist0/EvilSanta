import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { type RootState, useAppDispatch } from '../../store/store';
import UserItem from './UserItem';

function UsersList(): JSX.Element {
  const dispatch = useAppDispatch();
  const users = useSelector((store: RootState) => store.usersState.users);

  
  useEffect(() => {
    dispatch({ type: 'users/init', payload: users });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UsersList;
