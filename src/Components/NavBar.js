import React, { useState } from 'react';
import dataArray from '../Data';
import { NativeBaseProvider, FlatList } from 'native-base';
import '../App.css';
import { TaskBoxCollection } from '../ui-components';
const NavBar = () => {
  const [Data, setData] = useState(dataArray);
  const [task, setTask] = useState(null);
  const addTask = (task) => {
    alert(task);
  }
  return (
    <div className='App'>
      <div className='itemDiv'>
        <div className='collapse'>
          <h2>Task List</h2>
        </div>
        <div className='inputs'>
          <div className='create-field'>
            <input className='input-field'
              placeholder='Create new Task'
              onChange={(task) => setTask(task.target.value)}
            />
            <img src="https://img.icons8.com/ios-filled/50/000000/enter-2.png"
              className='image'
              onClick={() => addTask(task)} alt=""
            />
          </div>
          {/* <div className='cross-div'>
            <input className='search-field'
              placeholder='Search'
            />
            <img src="https://img.icons8.com/ios-filled/50/000000/search--v4.png"
              className='image' alt=""
            />
          </div> */}
        </div>
        {/* Render Items here */}
        {/* {
            Data.map((items)=>{
              return <div className='items'>
              <div className='h3-div'>
                <h3>Order {items.order}</h3>
                <h3>Time</h3>
              </div>
              <h1>{items.Task}</h1>
              <h3>{items.Description}</h3>
            </div>
            })
          } */}
        <TaskBoxCollection />
      </div>
    </div>
  )
}
export default NavBar;