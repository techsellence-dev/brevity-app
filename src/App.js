import './App.css';
import React, { useState } from 'react';
import App2 from './Components/RichTextEditor';
import NavBar from './Components/NavBar';
import Home from './Components/Home'
import FileViewer from './Components/FileViewer';
const App=()=> {
  return (
      <div className='arrange-divs'>
          <div className='nav-div'>
              <NavBar/>
          </div>
          <div className='home-div'>
               <Home/>
               <FileViewer/>
               <App2/>
          </div>
       </div> 
  )
}
export default App;
