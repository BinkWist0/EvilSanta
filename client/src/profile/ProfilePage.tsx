import React, { useState } from 'react';
import NotUnregistered from './NotUnregistered';

function ProfilePage({ user }: { user: User }): JSX.Element {
  const isLoggedIn = useState((store: RootState) => store.userReducer.user);

  if (!isLoggedIn | !user) {
    return <NotUnregistered />;
  }

  return (
    <div>
      <div>
        <img alt="..." src={user.avatar} />
      </div>
      <div>
        <h1>
          {user.name}
          {user.firstName}
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
