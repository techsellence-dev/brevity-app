import React, {useState,useCallback, useContext, useEffect,memo} from 'react';
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
import { GlobalState } from '../../home/frontend/Home';
import '../WorkFlow/workFlow.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const OrderPallet=()=>{
//modal for view order flow
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
//popper for view task details
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClosePop = () => {
    setAnchorEl(null);
    };
    const openPop = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const {order}=useContext(GlobalState);
    const [items, setItems, onitemsChange] = useNodesState([]);
    const [edge, setEdge, onEdgeChange] = useEdgesState([]);
    const [selectedNode,setSelectedNode]=useState(null);
    const onInit=(reactFlowInstance)=>{
        // console.log('flow loaded:', reactFlowInstance);
    }

    const onNodeClick = (event, node) => {
        setSelectedNode(node);
        setAnchorEl(event.currentTarget);
      };
    const onConnect = useCallback(
        (connection) => setEdge((eds) => addEdge(connection, eds)),
        [setEdge]
    );
    useEffect(()=>{
        getOrderJson();
        return ;
    },[order])
    const getOrderJson= () => {
            setItems(JSON.parse(order.OrderJSON)[0]);
            setEdge(JSON.parse(order.OrderJSON)[1]);
    }
    const onEdgeUpdate = (oldEdge, newConnection) => setEdge((els) => updateEdge(oldEdge, newConnection, els));
    return(
        <>
            <Button onClick={handleOpen}  variant="h1" >View Order</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='react-render-style'>
                        <div style={{width:'100%',height:550,backgroundColor:'wheat'}}>
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
                                    nodesDraggable={false}
                                    onNodeClick={onNodeClick}
                                >
                                <Background gap={16} color="black"/>
                                <MiniMap nodeColor='black'/>
                                <Controls/>
                            </ReactFlow>
                            </ReactFlowProvider>
                        </div>
                    </div>
                    <div>
                        <Popover
                            id={id}
                            open={openPop}
                            anchorEl={anchorEl}
                            onClose={handleClosePop}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                        >
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Task Label - {selectedNode==null?null:selectedNode.data.label}
                                    </Typography>
                                    <Typography x={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Task Desciption is - {selectedNode==null?null:selectedNode.data.taskDesc}
                                    </Typography>
                                    <Typography x={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Task Assigned to - {selectedNode==null?null:selectedNode.data.assignedUser}
                                    </Typography>
                                    <Typography x={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Task due Date - {selectedNode==null?null:selectedNode.data.date}  
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Popover>
                    </div>
                </Box>
            </Modal>
        </>
    )
}
export default OrderPallet;