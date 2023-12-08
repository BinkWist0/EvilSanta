import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import UsersList from '../Users/components/UsersList';
import Layout from './Layout';
import MainPage from '../mainPage';
import ProfilePage from '../profile/ProfilePage';
import { useAppDispatch } from '../store/store';
import { User } from '../Users/UserType';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch('/api/auth/check')
      .then((response) => response.json())
      .then((data) => {
        if (data.isLoggedIn) {
          const userData: User = data.user;
          dispatch({ type: 'user/check', payload: userData });
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/users" element={<UsersList />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
