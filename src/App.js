import './App.css';
import React, { useState } from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import MainPage from './Components/MainPage';
import Profile from './Components/Forward'
function App() {
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
