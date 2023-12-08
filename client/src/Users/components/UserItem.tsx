import React from 'react';
import type { User } from '../UserType';

const UserItem = ({ user }: { user: User }): JSX.Element => {
  return (
    <div className="card-container">
  <div className="card-pattern"></div>
  <img className="rounded-full border-4 border-white w-32 h-32" src={user['Avatar.url']} alt="" />
  <div className="p-5 text-center relative z-10">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-gray-900">
      {user.name} {user.lastname}
    </h5>
    <p className="text-green-600 font-semibold">Happy Holidays!</p>
  </div>
</div>



  );
};

export default UserItem;
