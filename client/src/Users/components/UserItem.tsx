import React from 'react';
import type { User } from '../UserType';

const UserItem = ({ user }: { user: User }): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <img className="w-32 h-32" src={user['Avatar.url']} alt={user.avatarId} />
      </div>
      <div className="">
        <h3 className="text-4xl font-normal text-gray-900">{user.name}</h3>
        <h3 className="text-4xl font-normal text-gray-900">{user.lastname}</h3>
      </div>
    </div>
  );
};

export default UserItem;
