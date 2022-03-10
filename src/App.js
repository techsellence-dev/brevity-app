import './App.css';
import React, { useState } from 'react';
import App2 from './Components/RichTextEditor';
import NavBar from './Components/NavBar';
import Home from './Components/Home'
import FileViewer from './Components/FileViewer';
import Profile from './Components/Forward';
import Options from './Components/Optionbox';
function App() {
  return (
    <>
      <div className='arrange-divs'>
          {/* <div className='nav-div'>
              <NavBar/>
          </div>
          <div className='home-div'>
               <Home/>
               <FileViewer/>
               <App2/>
          </div>  */}
          <Profile/>
       </div> 
      </>
  )
}
export default App;
