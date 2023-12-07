import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import UsersList from '../Users/components/UsersList';
import Layout from './Layout';
import MainPage from '../mainPage';
import ProfilePage from '../profile/ProfilePage';

function App(): JSX.Element {
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
