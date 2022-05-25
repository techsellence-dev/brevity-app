
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
import TaskTopBar from './TaskTopBar';
import '../Css/workflow.css';
import SaveTaskOrder from '../server/SaveTaskOrder';
let initialNodes = [
  {id:"A",data:{label:'A',isFirstUser:true},position: {x:160,y:80}},
  {id:"B",data:{label:'B',isFirstUser:false},position: {x:-128,y:192}},
  {id:"C",data:{label:'C',isFirstUser:false},position: {x:400,y:192}},
  {id:"D",data:{label:'D',isFirstUser:false},position: {x:144,y:400}},
];
const initialEdges = [
  {id: 299.16019986476374, type: 'smoothstep'},
  { id:263.1081505006261,label: 'Task from A',type: 'smoothstep', source:"A", target:"B"},
  { id:24.975781172734244,label: 'Task from A',type: 'smoothstep', source:"A",target:"C"},
  { id:641.506657481351,label: 'Task from B',type: 'smoothstep', source:"B", target:"D"},
  { id:605.8336763138401,label: 'Task from C',type: 'smoothstep', source:"C", target:"D"},

];
const Node=()=>{
    const [items, setItems, onitemsChange] = useNodesState(initialNodes);
    const [edge, setEdge, onEdgeChange] = useEdgesState(initialEdges);
    const [taskname,settaskName]=useState(null);
    const [taskdesc,settaskDesc]=useState(null);
    const [nextUser,setNextUser]=useState(null);
    const [date,setDate]=useState(null);
    const [selectedNode,setSelectedNode]=useState(null);
    const [order,setOrder]=useState("123456");
    const [workFlowName,setWorkFlowName]=useState("project");
    const [priority,setPriority]=useState("medium");
    const [dueData,setDueData]=useState("12/11/2021");
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
                        isFirstUser:nodeLabel.data.isFirstUser,
                    }
                }
            })
            setItems(items);
        }catch(error){
            alert(error)
        }
    }
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
            SaveTaskOrder(items,edge,orderdetail);
        }catch(error){
           alert(error);
        }
    }
    return(
        <div className='flow-container'>
            <TaskTopBar 
                order={order}
                workflow={workFlowName}
                priority={priority}
                duedate={dueData}
            />
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