
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
let initialNodes = [
  {id:"A",data:{label:'A'},position: {x:160,y:80}},
  {id:"B",data:{label:'B'},position: {x:-128,y:192}},
  {id:"C",data:{label:'C'},position: {x:400,y:192}},
  {id:"D",data:{label:'D'},position: {x:144,y:400}},
  {id:"D",data:{label:"D"},position: {x:144,y:400}},
  {id:"D",data:{label:"D"},position: {x:144,y:400}},
];
const initialEdges = [
  {id: 299.16019986476374, type: 'smoothstep'},
  { id:263.1081505006261,label: 'Task from A',type: 'smoothstep', source:"A", target:"B",markerEnd: {type: MarkerType.ArrowClosed,}},
  { id:24.975781172734244,label: 'Task from A',type: 'smoothstep', source:"A",target:"C",markerEnd: {type: MarkerType.ArrowClosed,}},
  { id:641.506657481351,label: 'Task from B',type: 'smoothstep', source:"B", target:"D",markerEnd: {type: MarkerType.ArrowClosed,}},
  { id:605.8336763138401,label: 'Task from C',type: 'smoothstep', source:"C", target:"D",markerEnd: {type: MarkerType.ArrowClosed,}},

];
const Node=()=>{
    const [items, setItems, onitemsChange] = useNodesState(initialNodes);
    const [edge, setEdge, onEdgeChange] = useEdgesState(initialEdges);
    const [taskname,settaskName]=useState('');
    const [taskdesc,settaskDesc]=useState('');
    const [nextUser,setNextUser]=useState('');
    const [days,setDays]=useState('');
    const [captureElementClick, setCaptureElementClick] = useState(true);
    const [selectedNode,setSelectedNode]=useState([]);
    const change=()=>{
    }
    const onNodeClick = (event, node) => {
      setSelectedNode(node);
      console.log(node);
    }
    const onInit=(reactFlowInstance)=>{
      console.log('flow loaded:', reactFlowInstance);
    }
    const onConnect = useCallback(
      (connection) => setEdge((eds) => addEdge(connection, eds)),
      [setEdge]
    );
    const onEdgeUpdate = (oldEdge, newConnection) => setEdge((els) => updateEdge(oldEdge, newConnection, els));
    return(
      <div className='flow-container'>
             <TaskTopBar/>
            <div className='workplane-taskfield'>
              <div className="main-container" style={{width:'40%',height:'600px'}}>
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
                          Tentative days Needed:
                      </p>
                      <input className="user-id-field"
                          placeholder="Enter Days"
                          onChange={(days)=>setDays(days.target.value)}
                      />
                  </div>
                  <div>
                  <div className='button-divs'>
                      <div className='accept-button' 
                      >
                          <p>Save</p>
                      </div>
                      <div className='accept-button'  
                      >
                          <p>Finish</p>
                      </div>
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
                      onConnect={onConnect}
                      connectionLineStyle={{stroke:"black",strokeWidth:2}}
                      connectionLineType="bezier"
                      snapToGrid={true}
                      onEdgeUpdate={onEdgeUpdate}
                      snapGrid={[16,16]}
                      onNodeClick={captureElementClick ? onNodeClick : undefined}
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