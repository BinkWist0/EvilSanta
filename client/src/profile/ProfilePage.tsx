import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

function ProfilePage(): JSX.Element {
  const user = useSelector((store: RootState) => store.usersInfo.user);
  return (
    <div>
      <p>...</p>
      <div>
        <img alt="..." src={user!.avatarId} />
      </div>
      <div>
        <h1>
          {user!.name}
          {user!.lastname}
        </h1>
      </div>
      <div>
        <h2>{user!.email}</h2>
      </div>
      <div>
        <h3>{user!.description}</h3>
      </div>
    </div>
  );
}

export default ProfilePage;
