import './App.css';
import React, { useState } from 'react';
import Task from './Components/Task';
import Editor from './Components/Editor'
const App=()=> {
  return (
    <div className='arrange-components'>
      <Task/>
      <Editor/>
    </div> 
  )
}
export default App;
