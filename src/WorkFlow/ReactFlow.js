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
import './workFlow.css';
import { GlobalVariable } from './NodeComponent';
const FlowPallet=()=>{
    const {list,listFunction} =useContext(GlobalVariable);
    const [items, setItems, onitemsChange] = useNodesState([]);
    const [edge, setEdge, onEdgeChange] = useEdgesState([]);
    const [selectedNode,setSelectedNode]=useState(null);
    const onInit=(reactFlowInstance)=>{
        // console.log('flow loaded:', reactFlowInstance);
    }

    const onNodeClick = (event, node) => {
        setSelectedNode(node);
        console.log(node);
      };
    const onConnect = useCallback(
        (connection) => setEdge((eds) => addEdge(connection, eds)),
        [setEdge]
    );
//render everytime only when user select another workflow fiomr list
    useEffect(()=>{
        setItems(list[0]);
        setEdge(list[1]);
    },[list])
    const onEdgeUpdate = (oldEdge, newConnection) => setEdge((els) => updateEdge(oldEdge, newConnection, els));
    return(
        <>
            <div className='react-render-style'>
                <div style={{width:'95%',height:550,backgroundColor:'wheat'}}>
                    <ReactFlowProvider>
                        <ReactFlow
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
                            nodesConnectable={true}
                            nodesDraggable={true}
                            onNodeClick={onNodeClick}
                        >
                        <Background gap={16} color="black"/>
                        <MiniMap nodeColor='black'/>
                        <Controls/>
                    </ReactFlow>
                    </ReactFlowProvider>
                </div>
            </div>
        </>
    )
}
export default FlowPallet;