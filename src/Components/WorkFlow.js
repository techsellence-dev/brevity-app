import React, { useEffect,useState,useCallback} from 'react';
import ReactFlow, { 
  addEdge, 
  Background,
  Controls, 
  MiniMap,
  useNodesState,
  useEdgesState,
  updateEdge,
  ReactFlowProvider
}from 'react-flow-renderer';
import '../Css/AdminPage.css';
import SaveWorkFlowDefinition from '../server/SaveWorkFlowDefinition';
import { API } from 'aws-amplify'
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import saveAsDraft from '../server/SaveAsDraft';
let newInitialNode=[

];
let newInitialEdges=[

];
const WorkFow=()=>{
  //state which manages backend nodes ,edges array
    const [items, setItems, onitemsChange] = useNodesState([]);
    const [edge, setEdge, onEdgeChange] = useEdgesState([]);
  //state for creating new workflow
    const [newNode,setNodeNodes,onNodeChange]=useNodesState(newInitialNode);
    const [newEdge,setNewEdge,onNewEdgeChange]=useNodesState(newInitialEdges);
    const [newWorkPlane,setNewWorkPlane]=useState(true);
    const [NodeDataFields,showNodeDataFileds]=useState(false);
  //states for creating Nodes
    const [nodeName,setNodeName]=useState(null);
    const [captureElementClick, setCaptureElementClick] = useState(true);
    const [selectedNode,setSelectedNode]=useState(null);
    const [flowBox,setFlowBox]=useState(false);
    //states for data adding
    const [workFLowName,setWorkFlowName]=useState(null);
    const [workFlowDesc,setWorkFlowDesc]=useState(null);
  //state for setting the list of workflows
    const [workflowList,setWorkFlowList]=useState(null);
    useEffect(async()=>{
      // listWorkflow();
      // console.log(JSON.parse(workflowList[0].WorkFlowJSON))
      const workflowdata=await API.graphql({query:queries.listWorkflows});
      setWorkFlowList(workflowdata.data.listWorkflows.items);
      setEdge(JSON.parse(workflowList[0].WorkFlowJSON)[1]);
      setItems(JSON.parse(workflowList[0].WorkFlowJSON)[0]);
    },[])
    const listWorkflow=async()=>{
      // const workflowdata=await API.graphql({query:queries.listWorkflows});
      // setWorkFlowList(workflowdata.data.listWorkflows.items);
    }
    const setWorkFlow=(data)=>{
      console.log(data);
      setEdge(JSON.parse(data.WorkFlowJSON)[1]);
      setItems(JSON.parse(data.WorkFlowJSON)[0]);
    }
  //function that add new nodes and edges when user creating it
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
    const onChangeWorkFlowPlane=()=>{
      try {
        if(workFLowName==null || workFlowDesc==null){
          throw 'please provide workflow name and description';
        }
        setNewWorkPlane(false);
        setFlowBox(false);
        showNodeDataFileds(true);
      } catch (error) {
        console.log(error);
      }
    }
  //check for nodes
    let isNodePresent=false;
  //function for creating nodes and edges
    const createNode=()=>{
      try {
        if(nodeName==null){
          console.log("Please provide a node name");
        }
        else{
          if(newInitialNode.length==0 || selectedNode==null){ 
            setNodeNodes([...newNode, {id:nodeName,data:{label:nodeName,isRootNode:true},type:'input',position: {x:0,y:0}}])
            newInitialNode.push( {id:nodeName,data:{label:nodeName,isRootNode:true},type:'input',position: {x:0,y:0}});
          }
          else{
            for(var i=0;i<newNode.length;i++){
              if(newNode[i].id==nodeName){
                isNodePresent=true;
              }
            }
            console.log(isNodePresent);
            if(isNodePresent){
              setNewEdge([...newEdge,{id:Math.random()*Math.pow(10,16),type:'smoothstep', source:selectedNode.id, target:nodeName}])
              newInitialEdges.push({id:Math.random()*Math.pow(10,16),type:'smoothstep', source:selectedNode.id, target:nodeName});
              isNodePresent=false;
            }
            else{
              setNodeNodes([...newNode, {id:nodeName,data:{label:nodeName,isRootNode:false},position: {x:100,y:100}}]);
              setNewEdge([...newEdge,{id:Math.random()*Math.pow(10,16),type:'smoothstep', source:selectedNode.id, target:nodeName}])
              newInitialNode.push( {id:nodeName,data:{label:nodeName,isRootNode:false},position: {x:100,y:100}});
              newInitialEdges.push({id:Math.random()*Math.pow(10,16),type:'smoothstep', source:selectedNode.id, target:nodeName});
            }
          } 
        }
        setSelectedNode(null);
      } catch (error) {
        console.log(Error);
      }
      // console.log(newNode.length); 
    }
    const showjson=()=>{
      console.log(newNode,newEdge)
    }
    const deleteNode=()=>{
      for(var i=newEdge.length-1;i>=0;i--){
        if(selectedNode.id==newEdge[i].source || selectedNode.id==newEdge[i].target){
          // console.log(i,newEdge[i]);
          newInitialEdges.splice(i,1);
          setNewEdge(newInitialEdges);
          // console.log(newEdge.length)
        }
      }
      for(var i=0;i<newNode.length;i++){
        if(selectedNode.id==newNode[i].id){
          newNode.splice(i,1);
          newInitialNode.splice(i,1);
          setNodeNodes(newInitialNode);
          // console.log(newNode.length);
        }
      }
      setNodeNodes(newNode);
    }
  //check for trival nodes and single end node
    const checkForValidateWorkFlow=()=>{
      try {
        let isTrivalNode=false;
        let endNode=false;
        var i=0;
        let nodecount=0;
        for(var k=0;k<newNode.length;k++){
          for(j=0;j<newEdge.length;j++){
            if(newNode[k].id!=newEdge[j].source){
              endNode=true;
              // console.log(endNode,newNode[k].id);
            }
            else{
              endNode=false;
              // console.log(endNode,newNode[k].id);
              break;
            }
          }
          if(endNode)
            nodecount++;
          // console.log(nodecount,newNode[k].id);
        }
        while(i<newNode.length){
          for(var j=0;j<newEdge.length;j++){
            if(newNode[i].id!=newEdge[j].source && newNode[i].id!=newEdge[j].target){
              isTrivalNode=true;
            }
            else{
              isTrivalNode=false;
              break;
            }
          }
          i++
        }

        if(isTrivalNode==true || nodecount>1){
          throw "wrong workflow type";
        }
        else{
          SaveWorkFlowDefinition(workFLowName,workFlowDesc,newNode,newEdge);
          // console.log("Saving start")
        }
      } catch (error) {
        console.log("error is ",error);
      }
    }
    return(
        <>
           <div>
               <div style={{backgroundColor:"#e0eaff"}}>
                  <div className='admin-page-workflow'>
                    <h1>Super User Mode</h1>
                    <h2>Manage Your WorkFlows</h2>
                    { flowBox ?
                      <div className='workflow-name-container'>
                        <div className='title-input'>
                            <p className='workflow-box'>Name of WorkFlow</p>
                            <input className='worflow-input-field'
                                  onChange={(workflow)=>setWorkFlowName(workflow.target.value)}
                                  placeholder='Please provide a short name to identify the workflow.'
                            />
                        </div>
                        <div className='title-input'>
                            <p className='workflow-box'>Description of WorkFlow</p>
                            <textarea className='worflow-input-field'
                                  onChange={(description)=>setWorkFlowDesc(description.target.value)}
                                  placeholder='Please Provide a Description'
                            />
                        </div>
                        <div className='buttons-container'>
                          <div className='btn' onClick={()=>setFlowBox(false)}>
                            <p className='btn-text'>Cancel</p>
                          </div>
                          <div className='btn' onClick={()=>onChangeWorkFlowPlane()}>
                            <p className='btn-text'>Save</p>
                          </div>
                        </div>
                      </div>:  
                      NodeDataFields?
                      <div className='btn' onClick={()=>alert("Hello")}>
                        <p className='btn-text'>Update</p>
                      </div>:                    
                      <div className='btn' onClick={()=>setFlowBox(true)}>
                        <p className='btn-text'>Create WorkFlow</p>
                      </div>                    
                    }                
                  </div>
                  <div style={{width:'100%',height:'600px',backgroundColor:'#e0eaff'}} className="admin-workflow-container">
                    {
                      NodeDataFields?
                      <div className="main-container" style={{width:'40%',height:'600px'}}>
                          <div className="task-input-div">
                            <p className="text-para">
                                Parent Node:
                            </p>
                            <input className="user-id-field"
                                placeholder="Enter Parent Node Name"
                                onChange={(nodeName)=>setNodeName(nodeName.target.value)}
                            />
                          </div>
                          <div className='button-div'>
                            <p>For Adding child node please select parent from workflow plane</p>
                            <div className="savebutton success" 
                            // onClick={()=>SaveWorkFlowDefinition(workFLowName,workFlowDesc,newNode,newEdge)}
                            onClick={()=>checkForValidateWorkFlow()}
                            >
                              <p>Save WorkFlow</p>
                            </div>
                            <div className="savebutton success" onClick={()=>createNode()}><p>Add Node</p></div>
                            <div className="savebutton success" onClick={()=>saveAsDraft(workFLowName,workFlowDesc,newNode,newEdge)}><p>save as draft</p></div>
                            <div className="savebutton success" onClick={()=>showjson()}><p> Node</p></div>
                            <div className="savebutton success" onClick={()=>deleteNode()}><p>delete node</p></div>
                          </div>
                      </div>:null
                    } 
                    {
                      newWorkPlane ?
                      <div className='workflow-list'>
                      {
                        workflowList==null?
                        <p>No workflow you have</p>:
                        workflowList.map((list)=>(
                          <div className='workflow-name-card' onClick={()=>setWorkFlow(list)} key={list.id}>
                            <h1 className='workflow-list-title'>{list.workflowName}</h1>
                            {list.SaveAsDraft==true?<p className='draft-text'>Save as draft</p>:null}
                          </div>
                        ))
                      }
                    </div>:null
                    }
                    <ReactFlowProvider >
                      <ReactFlow
                          defaultNodes={newWorkPlane?items:newNode}
                          defaultEdges={newWorkPlane?edge:newEdge}
                          onNodesChange={newWorkPlane?onitemsChange:onNodeChange}
                          onEdgesChange={newWorkPlane?onEdgeChange:onNewEdgeChange}
                          onInit={onInit}
                          onConnect={onConnect}
                          connectionLineStyle={{stroke:"black",strokeWidth:2}}
                          connectionLineType="bezier"
                          snapToGrid={true}
                          onEdgeUpdate={onEdgeUpdate}
                          snapGrid={[16,16]}
                          onNodeClick={captureElementClick ? onNodeClick : undefined}
                          nodesConnectable={true}
                          nodesDraggable={true}
                      >
                          <Background gap={20} color="black"/>
                          <MiniMap nodeColor='black'/>
                          <Controls/>
                      </ReactFlow>
                    </ReactFlowProvider>
                  </div>
               </div>
           </div>
        </>
    )
}
export default WorkFow;