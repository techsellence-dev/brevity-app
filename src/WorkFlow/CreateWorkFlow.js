import React, { Fragment,useState,useCallback, useContext, memo, useEffect} from 'react';
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
import './CreateFlowStyle.css'
import checkForValidateWorkFlow from '../functions/SubmitWorkFlow';
import DeleteNode from '../functions/DeleteNode';
import CreateNode from '../functions/AddNode';
import SaveasDraftUI from '../functions/SaveAsDraftUI';
import {GlobalVariable} from './WorkFlowComponent';
var i=1;
const CreateWorkFlow=()=>{
    const {changeWorkFlowPlaneState,draftedWorkFLow,setDraftedWorkflow,workflowname,workflowDescription}=useContext(GlobalVariable)
//data for new workflow
    const [newItems, setNewItems, onNewItemsChange] = useNodesState([]);
    const [newEdge, setNewEdge, onNewEdgeChange] = useEdgesState([]);
    const [selectedNode,setSelectedNode]=useState(null);
    const [nodeName, setNodeName] = useState('');
    const [zoomOnScroll, setZoomOnScroll] = useState(false);
    const [panOnDrag, setpanOnDrag] = useState(false);
//set drafted data to workflow pallet
    useEffect(()=>{
        if(draftedWorkFLow!=null){
            setNewItems(JSON.parse(draftedWorkFLow)[0]);
            setNewEdge(JSON.parse(draftedWorkFLow)[1]);
        }
        return(()=>{
            setDraftedWorkflow(null)
        })
        
    },[])
    const onInit=(reactFlowInstance)=>{
        // console.log('flow loaded:', reactFlowInstance);
    }
    const onNodeClick = (event, node) => {
        setSelectedNode(node);
    };
    const onConnect = useCallback(
        (connection) => setNewEdge((eds) => addEdge(connection, eds)),
        [setNewEdge]
    );
//back function . it empties all the array
    const goBack=useCallback(()=>{
        setNewItems([]);
        setNewEdge([]);
        setDraftedWorkflow(null)
        changeWorkFlowPlaneState(true)
    },[])
//delete node function
    const deleteData=()=>{
        const deletedItems=DeleteNode(selectedNode,newItems,newEdge,setNewItems,setNewEdge)
        setNewItems([...deletedItems[0]])
        setNewEdge([...deletedItems[1]])
        setSelectedNode(null)
    }
//addData
    const addData=()=>{
        try{
            if(nodeName==='')
                throw "Please provide a node name";
            CreateNode(nodeName,newItems,newEdge,setNewItems,setNewEdge,selectedNode,i++)
        }catch(error){
            alert(error);
        }
    }
    const onEdgeUpdate = (oldEdge, newConnection) => setNewEdge((els) => updateEdge(oldEdge, newConnection, els));
    return(
        <>
            <button className='custom-button-2' onClick={goBack}>Back</button>
            <div className='create-div-flow'>
                <h1 style={{textAlign:'center'}}>Manage WorkFlow</h1>    
                <h2>{workflowname}</h2>
                <div className='flow-style'>
                    <div className='checkbox-container'>
                        <div className='scroll-check'>
                            <input
                                id="zoomonscroll"
                                type="checkbox"
                                checked={zoomOnScroll}
                                onChange={(event) => setZoomOnScroll(event.target.checked)}
                                className="zoomonscroll"
                            />
                            <h4 htmlFor="zoomonscroll">Control Scroll Zoom</h4>
                        </div>
                        <div className='scroll-check'>
                            <input
                                id="panOnDrag"
                                type="checkbox"
                                checked={panOnDrag}
                                onChange={(event) => setpanOnDrag(event.target.checked)}
                                className="zoomonscroll"
                            />
                            <h4 htmlFor="panOnDrag">Control Plane Dragging</h4>
                        </div>
                    </div>
                    <div style={{width:'95%',height:500,backgroundColor:'wheat'}}>
                        <ReactFlowProvider>
                            <ReactFlow
                                defaultNodes={newItems}
                                defaultEdges={newEdge}
                                onNodesChange={onNewItemsChange}
                                onEdgesChange={onNewEdgeChange}
                                onInit={onInit}
                                onConnect={onConnect}
                                connectionLineStyle={{stroke:"black",strokeWidth:2}}
                                connectionLineType="bezier"
                                snapToGrid={true}
                                onEdgeUpdate={onEdgeUpdate}
                                snapGrid={[16,16]}
                                nodesConnectable={true}
                                nodesDraggable={true}
                                onNodeClick={onNodeClick}
                                zoomOnScroll={zoomOnScroll}
                                panOnDrag={panOnDrag}
                            >
                            <Background gap={16} color="black"/>
                            <MiniMap 
                                nodeColor={"black"}
                            />
                            <Controls/>
                            </ReactFlow>
                        </ReactFlowProvider>
                    </div>
                </div>
                <div className='input-btn-div'>
                    <input
                        className='node-input'
                        placeholder='Enter Node Name'
                        type="text"
                        onChange={(nodeName) =>setNodeName(nodeName.target.value)}
                    />
                    <p>{selectedNode==null?"Please Select a node for its child":selectedNode.data.label}</p>
                    <div>
                        <button className='custom-button-1' onClick={()=>addData()}>Add Node</button>
                        <button className='custom-button-1' onClick={()=>deleteData()}>Delete Node</button>
                        <button className='custom-button-1' onClick={()=>SaveasDraftUI(workflowname, workflowDescription, newItems, newEdge)}>Save As Draft</button>
                        <button className='custom-button-1' onClick={()=>checkForValidateWorkFlow(workflowname, workflowDescription, newItems, newEdge)}>Save WorkFlow</button>
                    </div>
                </div>
            </div>
        </>    
    )
}
export default memo(CreateWorkFlow);