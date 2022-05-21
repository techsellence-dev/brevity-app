import React, {useEffect, useState} from 'react';
import '../Css/NavBar.css';
import './inputs.css';
import TaskButton from './TaskButton';
import TaskPanel from './CreateTaskPanel';
import addTask from '../server/AddTask';
import getOrderDetails from '../server/GetOrders';
import './OrderCard.css';
import OrderCard from './OrderCard';
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
 

  const closing=()=>{
 
    document.getElementById('item').style.display='none'
    document.getElementById('item').style.width='0%'
    
    
   
     
    
    // document.getElementById('item').style.width="0%"

}
  const opening=()=>{
    // document.getElementById('item').style.left="0%"

    document.getElementById('item').style.display="block"
    document.getElementById('item').style.width="100%"
    document.getElementById('item').style.marginTop="3px"
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
    <div id='upper_div2' style={{background:"white", border:"none"}} className='upper_div2' onClick={opening} >
      {/* <div  style={{height:"3px",width:"15px" ,background:"black" ,color:"white" ,marginBottom:"3px", marginLeft:"30px",marginTop:"20px"}} ></div>
      <div style={{height:"3px",width:"15px" ,background:"black" ,color:"white" ,marginBottom:"3px", marginLeft:"30px"}}></div>
      <div style={{height:"3px",width:"15px" ,background:"black" ,color:"white" ,marginBottom:"3px", marginLeft:"30px"}}></div> */}
    </div>
   
      <div id='item' style={{background:"white" ,width:"97%"}} className='itemDiv'>
        {/* <div className='task_reducer' onClick={closing}><img style={{width:"15px",height:"15px"}} src='https://img.icons8.com/ios-filled/344/delete-sign--v1.png'></img></div> */}
        <div className='collapse'>
          <h2 style={{textAlign:"center"}}>Task List</h2>
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

        <OrderCard data={searchResult.length>0 ? searchResult : task} onclick={props.setTopBarDataFunction} />
        <div style={{background:"skyBlue",border:'1px solid black',borderRadius:"5px",marginTop:'1cm'}}>
          <div style={{marginBottom:"20px",fontWeight:"bolder"}}>Order Number :123</div>
          <div style={{marginBottom:"20px",fontWeight:"bolder"}}>Task Name : medicine</div>
        </div>
        <div style={{background:"skyBlue",border:'1px solid black',borderRadius:"5px",marginTop:'1cm'}}>
          <div style={{marginBottom:"20px",fontWeight:"bolder"}}>Order Number :4423</div>
          <div style={{marginBottom:"20px",fontWeight:"bolder"}}>Task Name : utensils</div>
        </div>
        <div style={{background:"skyBlue",border:'1px solid black',borderRadius:"5px",marginTop:'1cm'}}>
          <div style={{marginBottom:"20px",fontWeight:"bolder"}}>Order Number :232</div>
          <div style={{marginBottom:"20px",fontWeight:"bolder"}}>Task Name : machinary</div>
        </div>
        <div style={{background:"skyBlue",border:'1px solid black',borderRadius:"5px",marginTop:'1cm'}}>
          <div style={{marginBottom:"20px",fontWeight:"bolder"}}>Order Number :333</div>
          <div style={{marginBottom:"20px",fontWeight:"bolder"}}>Task Name : electrical</div>
        </div>
      
      </div>
    </div>
  )
}
export default NavBar;