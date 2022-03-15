import '../App.css';
import React, { useState } from 'react';
import App2 from './RichTextEditor';
import NavBar from './NavBar';
import Home from './Home'
import FileViewer from './FileViewer';
function MainPage() {
  return (
    <>
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
      </>
  )
}
export default MainPage;
