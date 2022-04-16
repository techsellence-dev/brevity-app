import React, {useEffect, useState} from 'react';
import '../Css/NavBar.css';
import './inputs.css';
import TaskButton from './TaskButton';
import TaskPanel from './CreateTaskPanel';
import addTask from '../server/AddTask';
import getOrderDetails from '../server/GetOrders';
import './OrderCard.css';
import {Auth} from 'aws-amplify';

const NavBar = (props) => {
  const [taskpanel, setTaskPanel] = useState(false);
  const [order, setOrder] = useState(null);
  const [taskDesc, setTaskDesc] = useState(null);
  const [authedUser, setAuthedUser] = useState('');
  const [task,setTask]=useState([]);

  useEffect(() => {
    getOrderDetailsForUser();
  }, []);

// Fetch the data from the data for current 
// Authenticated User  
  const getOrderDetailsForUser=async()=>{
    let currentUser = await Auth.currentAuthenticatedUser();
    console.log('navbar user is: ' + currentUser.attributes.email);
    setAuthedUser(currentUser.attributes.email);
    const orderDetailsSet = await getOrderDetails(currentUser.attributes.email);
    setTask(Array.from(orderDetailsSet));
  }
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
              <div>
                <p className='task-titles'>Task Description</p>
                <input type="text"
                  placeholder='Enter Decription'
                  className='input-field'
                  onChange={(taskDesc) => setTaskDesc(taskDesc.target.value)}
                />
              </div>
              <div className='task-panel-buttons'>
                <TaskButton title="Cancel" onclick={() => setTaskPanel(false)} />
                <TaskButton title="Create" 
                  onclick={() => {
                    //function for adding new order to database
                    addTask(order, taskDesc, authedUser);
                  }}
                />
              </div>
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

{/* All orders were shown here */}
        <div>
            {task.map((items,index) => (
                <div key={index} className="cardBody" onClick={()=>{
                  props.dataFunction(items)
                }} >
                    <div className='orderDiv '>
                        <p style={{fontWeight:"bold"}}>{items.orderNum} </p>
                        <p style={{fontWeight:"bold"}}>{items.CurrentTime}</p>
                    </div> 
                    <div className='orderDiv '>
                        <p style={{fontWeight:"bold"}}>{items.description} </p>
                        <p style={{fontWeight:"bold"}}>{items.CurrentData}</p>
                    </div>  
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}
export default NavBar;