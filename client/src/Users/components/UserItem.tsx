import React from 'react';
import type { User } from '../UserType';

const UserItem = ({ user }: { user: User }): JSX.Element => {
  return (
    <div>
      <div>
        <img src={user.avatar} alt="" />
        <h3>{user.name}</h3>
        <h3>{user.secondName}</h3>
      </div>
    </div>
  );
};

export default UserItem;
