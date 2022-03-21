import './App.css';
import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from './Components/MainPage';
import Profile from './Components/Forward';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  )
}
export default App;
