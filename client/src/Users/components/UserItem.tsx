import React from 'react';
import type { User } from '../UserType';

const UserItem = ({ user }: { user: User }): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <img className="rounded-full w-96 h-96" src={user.avatar} alt="" />
      </div>
      <div className="">
        <h3 className="text-4xl font-normal text-gray-900">{user.name}</h3>
        <h3 className="text-4xl font-normal text-gray-900">{user.secondName}</h3>
      </div>
    </div>
  );
};

export default UserItem;
