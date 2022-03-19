import React, { useState } from 'react';
import dataArray from '../Data';
import '../App.css';
import './inputs.css';
import { BoxCollection } from '../ui-components';
import { AmplifyProvider } from "@aws-amplify/ui-react";
import TaskButton from './TaskButton';
import TaskPanel from './CreateTaskPanel';
import addTask from '../server/AddTask';
const NavBar = () => {
  const [taskpanel,setTaskPanel]=useState(false);
  const [order,setOrder]=useState(null);
  const [taskName,settaskName]=useState(null);
  const [taskDesc,setTaskDesc]=useState(null);
  return (
    <div className='App'>
      {
          taskpanel ?
          <TaskPanel> 
            <div className='input-fieds'>
              <div>
                <p className='task-titles'>Order Number</p>
                <input  type="text" 
                      className='input-field'
                      placeholder='Enter Order Number' 
                      onChange={(order)=>setOrder(order.target.value)}
                />
              </div>
              <div>
                <p className='task-titles'>Task Name</p>
                <input  type="text" 
                      className='input-field'
                      placeholder='Enter Order Number' 
                      onChange={(taskName)=>settaskName(taskName.target.value)}
                />
              </div>
              <div>
                <p className='task-titles'>Task Description</p>
                <input  type="text" 
                      placeholder='Enter Order Number' 
                      className='input-field'
                      onChange={(taskDesc)=>setTaskDesc(taskDesc.target.value)}
                />
              </div>
              <div className='task-panel-buttons'>
                <TaskButton title="Cancel" onclick={()=>setTaskPanel(false)} />
                <TaskButton title="Create" onclick={()=>addTask(order,taskName,taskDesc)} />
              </div>
            </div>
          </TaskPanel> :
          null
      }
      <div className='itemDiv'>
        <div className='collapse'>
          <h2>Task List</h2>
        </div>
        <div className='task-panel-button' onClick={()=>setTaskPanel(true)} >
          <p>Create New Task</p>
        </div>
        <AmplifyProvider>
          <BoxCollection />
        </AmplifyProvider>
      </div>
    </div>
  )
}
export default NavBar;