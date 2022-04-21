import React, {useEffect, useState} from 'react';
import '../Css/NavBar.css';
import './inputs.css';
import TaskButton from './TaskButton';
import TaskPanel from './CreateTaskPanel';
import addTask from '../server/AddTask';
import getOrderDetails from '../server/GetOrders';
import './OrderCard.css';
import OrderCard from './OrderCard';
import SearchInput from './SearchInput';
import './SearchInput.css';
import {AiOutlineSearch} from 'react-icons/ai';
import {Auth} from 'aws-amplify';

const NavBar = (props) => {
  const [taskpanel, setTaskPanel] = useState(false);
  const [order, setOrder] = useState(null);
  const [taskDesc, setTaskDesc] = useState(null);
  const [authedUser, setAuthedUser] = useState('');
  const [assignedUser,setassignedUser]=useState(null);

  const [task,setTask]=useState([]);

  const [search,setSearch]=useState("");
  const [searchResult,setSearchResult]=useState([]);

  useEffect(() => {
    getOrderDetailsForUser();
  }, []);

// Fetch the data from the data for current 
// Authenticated User  
  const getOrderDetailsForUser=async()=>{
    let currentUser = await Auth.currentAuthenticatedUser();
    // console.log('navbar user is: ' + currentUser.attributes.email);
    setAuthedUser(currentUser.attributes.email);
    const orderDetailsSet = await getOrderDetails(currentUser.attributes.email);
    setTask(Array.from(orderDetailsSet));
  }
  const addData=async()=>{
    await addTask(order,taskDesc,authedUser,assignedUser);
    setTaskPanel(false);
    getOrderDetailsForUser();
  }
// function that gives search functionality
  const searchData=(searchItem)=>{
    setSearch(searchItem)
    if(search!=""){
      const searchedOrders=task.filter((filteredOrders)=>{
          return Object.values(filteredOrders)
          .join(" ")
          .toLowerCase()
          .includes(searchItem.toLowerCase());
      });
        setSearchResult(searchedOrders);
    }else{
        setSearchResult(task);
    }      
  }
  return (
    <div className='App'>
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
              <div>
                <p className='task-titles'>Assigned User</p>
                <input type="text"
                  placeholder='Enter Mail to whom you want to assign task'
                  className='input-field'
                  onChange={(assignedUser) => setassignedUser(assignedUser.target.value)}
                />
              </div>
              <div className='task-panel-buttons'>
                <TaskButton title="Cancel" onclick={() => setTaskPanel(false)} />
                <TaskButton title="Create" 
                  onclick={() => {
                    //function for adding new order to database
                    addData();
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
{/* search Input */}
        <div className="app2">
            <div className='input-element-wrapper'>
                <input placeholder="Search..." className="InputBox" 
                    type="text"
                    onChange={(search)=>searchData(search.target.value)}
                />
                <button className='passwordButton'  >
                    <AiOutlineSearch/>
                </button>
            </div>
        </div>

        <OrderCard data={searchResult.length>0 ? searchResult : task} onclick={props.dataFunction} />
      </div>
    </div>
  )
}
export default NavBar;