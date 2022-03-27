import React, { useEffect, useState } from 'react';
import dataArray from '../Data';
import '../App.css';
import getOrderDetails from '../server/getOrderDetails';
import './inputs.css';
import { BoxCollection } from '../ui-components';
import { NewCollection } from '../ui-components';
import { AmplifyProvider } from "@aws-amplify/ui-react";
import TaskButton from './TaskButton';
import TaskPanel from './CreateTaskPanel';
import addTask from '../server/AddTask';
import Home from './Home';
import { DataStore } from '@aws-amplify/datastore';
import { OrderTable } from '../models';
const NavBar = (props) => {
//state for managing data  
  const [taskpanel, setTaskPanel] = useState(false);
  const [order, setOrder] = useState(null);
  const [taskName, settaskName] = useState(null);
  const [taskDesc, setTaskDesc] = useState(null);

  useEffect(() => {
    console.log('useEffect in effect')
    DataStore.query(OrderTable).then(models => {
      console.log('first order details: ' + JSON.stringify(models[0]));
      props.dataFunction(models[0]);
    });
  }, []);
  return (
    <div className='App'>
{/* taskpanel will loaded.
it will pop up and user can add new order
from this popup */}
      {
        taskpanel ?
          <TaskPanel>
            <div className='input-fieds'>
              <div>
                <p className='task-titles'>Order Number</p>
                <input type="text"
                  className='input-field'
                  placeholder='Enter Order Number'
                  onChange={(order) => setOrder(order.target.value)}
                />
              </div>
              <div>
                <p className='task-titles'>Task Name</p>
                <input type="text"
                  className='input-field'
                  placeholder='Enter Order Number'
                  onChange={(taskName) => settaskName(taskName.target.value)}
                />
              </div>
              <div>
                <p className='task-titles'>Task Description</p>
                <input type="text"
                  placeholder='Enter Order Number'
                  className='input-field'
                  onChange={(taskDesc) => setTaskDesc(taskDesc.target.value)}
                />
              </div>
              <div className='task-panel-buttons'>
                <TaskButton title="Cancel" onclick={() => setTaskPanel(false)} />
                <TaskButton title="Create" 
                  onclick={() => addTask(order, taskName, taskDesc)}   //function for adding new order to database
                />
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
{/* here we show our order details in navbar using amplify ui library component */}
          <NewCollection 
            overrideItems={({ item, index }) => ({
              onClick: () => {
                  props.dataFunction(item)   //from here we send out selected order details to the top bar
              }})}
          />
        </AmplifyProvider>
      </div>
    </div>
  )
}
export default NavBar;