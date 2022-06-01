
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
import '../ccs/workflow.css';
import SaveTaskOrder from '../server/SaveTaskOrder';
const priorityArray = [
    { priorityName: "Low",},
    { priorityName: "Medium",},
    { priorityName: "High",},
];
const workflowNameArray = [];
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
//function for =>{changing node data
    const changeLabel=()=>{
        try{
            if(selectedNode==null){
                throw "Plaease select an Node for Assigning a Data";
            }
            items.map((nodeLabel)=>{
                if(nodeLabel.id==selectedNode.id){
                    // console.log(nodeLabel.data.label);
                    nodeLabel.data={
                        label:taskname,
                        taskDesc:taskdesc,
                        assignedUser:nextUser,
                        date:date,
                        isFirstUser:selectedNode.data.isRootNode,
                    }
                }
            })
            setItems(items);
        }catch(error){
            alert(error)
        }
    }
//set node data on selecting
    const onNodeClick = (event, node) => {
        setSelectedNode(node);
        console.log(node);
    }
    const onInit=(reactFlowInstance)=>{
        console.log('flow loaded:', reactFlowInstance);
    }
//function check for valid task workflow
    const checkForValidateOrderTask=()=>{
        try{
            for(var i=0;i<items.length;i++){
                if(Object.keys(items[i].data).length==2){
                    throw "Please Assign task to Every Node";
                }
            }
            const orderdetail={
                order:order,
                workflow:workFlowName,
                priority:priority,
                duedate:dueData
            }
            SaveTaskOrder(items,edge,orderdetail,user);
        }catch(error){
           alert(error);
        }
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
                        onChange={(nextUserID)=>setNextUser(nextUserID.target.value)}
                    />
                </div>
                <div className="task-input-div">
                    <p className="text-para">
                        Task Name:
                    </p>
                    <input className="user-id-field"
                        placeholder="Enter Task Name"
                        onChange={(taskname)=>settaskName(taskname.target.value)}
                    />
                </div>
                <div className="task-input-div">
                    <p className="text-para">
                        Task Description:
                    </p>
                    <input className="user-id-field"
                        placeholder="Enter Task Description"
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
                        onClick={()=>changeLabel()}
                    >
                        <p>Change Data</p>
                    </div>
                    <div className='accept-button'  
                        onClick={()=>checkForValidateOrderTask()}
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