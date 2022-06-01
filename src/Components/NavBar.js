import React, {useEffect, useState} from 'react';
import '../Css/NavBar.css';
import './inputs.css';
import getOrderDetails from '../server/GetOrders';
import './OrderCard.css';
import OrderCard from './OrderCard';
import './SearchInput.css';
import { useNavigate } from 'react-router-dom'
import {Auth} from 'aws-amplify';

const NavBar = (props) => {
  const [authedUser, setAuthedUser] = useState('');
  const [task,setTask]=useState([]);
  const [search,setSearch]=useState("");
  const [searchResult,setSearchResult]=useState([]);

  const navigate=useNavigate();
  
  const [flowBox,showFlowBox]=useState(false);
    const workflowNameArray = [
        { FlowName: "Project",},
        { FlowName: "College",},
        { FlowName: "Company",},
    ];
    const priorityArray = [
        { priorityName: "Low",},
        { priorityName: "Medium",},
        { priorityName: "High",},
    ];
    const [order,setOrder]=useState(null);
    const [dueDate,setDueDate]=useState(null);
    const [flowname,setflowname]=useState(workflowNameArray[0].FlowName);
    const [priority,setproiority]=useState("Low");
    const createWorkFlow=()=>{
        if(order==null || order==null)
            alert("Enter all fields")
        else{
            showFlowBox(false);
            props.onShowPlane();
            console.log(flowname,order,dueDate,priority)
        }            
    }
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
  // const addData=async()=>{
  //   await addTask(order,taskDesc,authedUser,assignedUser);
  //   setTaskPanel(false);
  //   getOrderDetailsForUser();
  // }
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
    <>
    <div style={{textAlign:"center",position:"sticky",top:"64px",background:"rgb(255, 255, 255)",borderBottom:"3px solid black"}}>
    <div className='collapse' style={{textAlign:"center",position:"sticky",top:"64px",background:"rgb(255, 255, 255)"}}>
          <h2 style={{textAlign:"center"}}>Task List</h2>
        </div>
        <div className="app2" style={{position:"sticky",top:"140px", width: "95%",marginLeft:"5px",background:"rgb(255, 255, 255)",marginBottom:"15px"}}>
            <div className='input-element-wrapper'>
                <input placeholder="Search..." className="InputBox" 
                    type="text"
                    onChange={(search)=>searchData(search.target.value)}
                />
            </div>
        </div>
        </div>
    <div className='App'>
      {
        flowBox ?
        <div className='workflow-create-div'>
            <div className='input-field-div'>
                <p>Enter Order Number</p>
                <input 
                    className='workflow-input' 
                    placeholder='Enter Order Number' 
                    type="text"
                    onChange={(order)=>setOrder(order.target.value)}
                />      
            </div>     
            <div className='input-field-div'>
                <p>Enter WorkFlow Name</p>
                <select className='workflow-select' value={flowname} onChange={(flowname)=>setflowname(flowname.target.value )}>
                    {workflowNameArray.map((workflowNameArray) => (
                        <option value={workflowNameArray.FlowName}>
                            {workflowNameArray.FlowName}
                        </option>
                    ))}
                </select>      
            </div>                              
            <div className='input-field-div'>
                <p>Enter Due Date</p>
                <input 
                    className='workflow-input' 
                    placeholder='Enter Due Date' 
                    type="text"
                    onChange={(dueDate)=>setDueDate(dueDate.target.value)}
                />         
            </div>                              
            <div className='input-field-div'>
                <p>Enter Priority</p>
                <select className='workflow-select' onChange={(priority)=>setproiority(priority.target.value)} value={priority}>
                    {priorityArray.map((priorityArray) => (
                        <option value={priorityArray.priorityName}>
                            {priorityArray.priorityName}
                        </option>
                    ))}
                </select>
            </div>                              
            <div className='button-divs'>
                <div className='accept-button' 
                    onClick={()=>showFlowBox(false)} 
                >
                    <p>Cancel</p>
                </div>
                <div className='accept-button'  
                    onClick={()=>createWorkFlow()}
                >
                    <p>Create Order</p>
                </div>
            </div>
        </div>
        :null
    }
 
        {/* <div className='collapse' style={{border:"1px solid red"}}>
          <h2 style={{textAlign:"center"}}>Task List</h2>
        </div> */}
   
      <div id='item' style={{background:"white" ,width:"97%",zIndex:"-1",border:"none"}} className='itemDiv'>
        {/* <div className='task_reducer' onClick={closing}><img style={{width:"15px",height:"15px"}} src='https://img.icons8.com/ios-filled/344/delete-sign--v1.png'></img></div> */}
        {/* <div className='task-panel-button' onClick={()=>navigate("task-order")}>
          <p>Go To Create Order</p>
        </div>
        <div className='task-panel-button' onClick={()=>navigate("workflow")}>
          <p>Go To WorkFlow</p>
        </div> */}
{/* search Input */}
        {/* <div className="app2" style={{border:"1px solid red",position:"sticky",top:"0px"}}>
            <div className='input-element-wrapper'>
                <input placeholder="Search..." className="InputBox" 
                    type="text"
                    onChange={(search)=>searchData(search.target.value)}
                />
            </div>
        </div> */}
        <OrderCard data={searchResult.length>0 ? searchResult : task} onclick={props.setTopBarDataFunction} />
      </div>
    </div>
    </>
  )
}
export default NavBar;