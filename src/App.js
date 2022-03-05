import './App.css';
import React, { useState } from 'react';
import Task from './Components/Task';
import App2 from './Components/RichTextEditor';
const App=()=> {
  return (
    <div className='arrange-components'>
      <Task/>
      <App2/>
    </div> 
  )
}
export default App;
