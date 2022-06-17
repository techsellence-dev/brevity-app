
import React, { useEffect,useState,useCallback} from 'react';
import ReactFlow, { 
  addEdge, 
  Background,
  Controls, 
  MiniMap,
  useNodesState,
  useEdgesState,
  updateEdge,
  ReactFlowProvider,
  MarkerType
}from 'react-flow-renderer';
import { API ,Auth } from 'aws-amplify';
import * as queries from '../graphql/queries';
import '../css/workflow.css';
import SaveTaskOrder from '../server/SaveTaskOrder';
import checkForValidateOrderTask from '../functions/CheckForValidateOrderTask';
import ChangeData from '../functions/ChangeData';
const priorityArray = [
    { priorityName: "Low",},
    { priorityName: "Medium",},
    { priorityName: "High",},
];
const Node=()=>{
//states for managing app
    const [items, setItems, onitemsChange] = useNodesState([]);
    const [edge, setEdge, onEdgeChange] = useEdgesState([]);
//other states
    const [workFlowList,setWorkflowList]=useState([])
    const [taskname,settaskName]=useState(null);
    const [taskdesc,settaskDesc]=useState(null);
    const [nextUser,setNextUser]=useState(null);
    const [date,setDate]=useState(null);
    const [selectedNode,setSelectedNode]=useState(null);
    const [order,setOrder]=useState(null);
    const [dueData,setDueData]=useState(null);
    const [workFlowName,setWorkFlowName]=useState(null);
    const [priority,setPriority]=useState("Low");
    const [user,setUser]=useState(null);
    useEffect(async()=>{
        const workflowdata = await API.graphql({ query: queries.listWorkflows });
        setWorkflowList(workflowdata.data.listWorkflows.items);
        setWorkFlowName(workflowdata.data.listWorkflows.items[0].workflowName)
        // console.log(workFlowList)
        // console.log(workFlowName)
        const authUser=await Auth.currentAuthenticatedUser();
        setUser(authUser.attributes.email)
    },[])
//set node data on selecting
    const onNodeClick = (event, node) => {
        setSelectedNode(node);
        console.log(node);
    }
    const onInit=(reactFlowInstance)=>{
        console.log('flow loaded:', reactFlowInstance);
    }
//function gets value of order details
    const setWorkFlowForOrder=(selectedWorkflow)=>{
        setWorkFlowName(selectedWorkflow)
        // console.log(workFlowName)
        workFlowList.map((list)=>{
            if(list.workflowName==selectedWorkflow){
                // console.log(JSON.parse(list.WorkFlowJSON)[0]);
                setItems(JSON.parse(list.WorkFlowJSON)[0]);
                setEdge(JSON.parse(list.WorkFlowJSON)[1]);
            }
        })
    }
    return(
        <div className='flow-container'>
            <div className='top-bar-container'>
                <h2>Please update the details of the tasks</h2>
                <div className='title-pair-div'>
                    <div className='about-title'>
                        <p className='detail-title'>Order Number:</p>
                        <input 
                            className='workflow-input' 
                            placeholder='Enter Order Number' 
                            type="text"
                            onChange={(order)=>setOrder(order.target.value)}
                        /> 
                    </div>
                    <div className='about-title'>
                        <p className='detail-title'>WorkFlowName:</p>
                        <select className='workflow-select' value={workFlowName} onChange={(workFlowName)=>setWorkFlowForOrder(workFlowName.target.value )}>
                            {workFlowList.map((workFlowList) => (
                                <option value={workFlowList.workflowName} >
                                    {workFlowList.workflowName}
                                </option>
                            ))}
                        </select>  
                    </div> 
                </div>
                <div className='title-pair-div'>
                    <div className='about-title'>
                        <p className='detail-title'>Priority:</p>
                        <select className='workflow-select' onChange={(priority)=>setPriority(priority.target.value)} value={priority}>
                            {priorityArray.map((priorityArray) => (
                                <option value={priorityArray.priorityName}>
                                    {priorityArray.priorityName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='about-title'>
                        <p className='detail-title'>Due Date:</p>
                        <input 
                            className='workflow-input' 
                            placeholder='Enter Due Date' 
                            type="date"
                            onChange={(dueDate)=>setDueData(dueDate.target.value)}
                        />
                    </div> 
                </div>
            </div>
            <div className='workplane-taskfield'>
              <div className="main-container" style={{width:'40%',height:'600px'}}>
                <h2 style={{marginLeft:'10%'}} >
                    {selectedNode==null?"Please select a node":selectedNode.data.label}
                </h2>
                <div className="task-input-div">
                    <p className="text-para">
                        Task Assigned To:
                    </p>
                    <input className="user-id-field"
                        placeholder="Enter assignie User ID"
                        type="email"
                        onChange={(nextUserID)=>setNextUser(nextUserID.target.value)}
                    />
                </div>
                <div className="task-input-div">
                    <p className="text-para">
                        Task Name:
                    </p>
                    <input className="user-id-field"
                        placeholder="Enter Task Name"
                        type="text"
                        onChange={(taskname)=>settaskName(taskname.target.value)}
                    />
                </div>
                <div className="task-input-div">
                    <p className="text-para">
                        Task Description:
                    </p>
                    <input className="user-id-field"
                        placeholder="Enter Task Description"
                        type="text"
                        onChange={(taskDesc)=>settaskDesc(taskDesc.target.value)}
                    />
                </div>
                <div className="task-input-div">
                    <p className="text-para">
                        Due date:
                    </p>
                    <input className="user-id-field"
                        type="date"
                        placeholder="Enter Days"
                        onChange={(date)=>setDate(date.target.value)}
                    />
                </div>
                <div className='button-divs'>
                    <div className='accept-button'  
                        onClick={()=>ChangeData(
                            selectedNode,items,taskname,taskdesc,nextUser,date,setItems
                        )}
                    >
                        <p>Change Data</p>
                    </div>
                    <div className='accept-button'  
                        onClick={()=>checkForValidateOrderTask(
                            items,edge,order,workFlowName,priority,dueData,user
                        )}
                    >
                        <p>Finish</p>
                    </div>
                </div>
            </div> 
            <div style={{width:'60%',height:'600px',backgroundColor:'#e0eaff'}}>
            <ReactFlowProvider >
                <ReactFlow
                    // style={{width:'50%',height:500,backgroundColor:'#e0eaff'}}
                    defaultNodes={items}
                    defaultEdges={edge}
                    onNodesChange={onitemsChange}
                    onEdgesChange={onEdgeChange}
                    onInit={onInit}
                    connectionLineStyle={{stroke:"black",strokeWidth:2}}
                    connectionLineType="bezier"
                    snapToGrid={true}
                    snapGrid={[16,16]}
                    onNodeClick={onNodeClick}
                    nodesConnectable={false}
                    nodesDraggable={false}
                >
                <MiniMap nodeColor='black'/>
                <Controls/>
                </ReactFlow>
            </ReactFlowProvider>
            </div>
          </div>
        </div>
    )
}
export default Node;