import React,{useState} from 'react';
import { NativeBaseProvider, Text, Box } from 'native-base';
import '../App.css';
import App2 from './RichTextEditor';
import dataArray from '../Data'
import File from './File';
import App from '../App';
import NavBar from './NavBar';
import Home from '../Components/Home'
const Task=()=>{
    return(
        <div className='App'>
          {/* <div className='nav-div'>
              <NavBar/>
          </div> */}
          <div className='home-div'>
              <Home/>
          </div>
        {/* <App2/> */}
       </div> 
    )
}
export default Task;