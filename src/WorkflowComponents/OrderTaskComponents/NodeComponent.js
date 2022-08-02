
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
import * as queries from '../../graphql/queries';
import './OrderTashCss.css';
import checkForValidateOrderTask from '../functions/CheckForValidateOrderTask';
import ChangeData from '../functions/ChangeData';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    heigth:500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

  };

const priorityArray = [
    { priorityName: "Low",},
    { priorityName: "Medium",},
    { priorityName: "High",},
];
const Node=()=>{
    //mui
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [orderTemplate,setOrderTemplate]=useState(true);
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
        setWorkFlowName(workflowdata.data.listWorkflows.items[0].workflowname)
        // console.log(workFlowList)
        // console.log(workFlowName)
        const authUser=await Auth.currentAuthenticatedUser();
        setUser(authUser.attributes.email)
    },[])
//set node data on selecting
    const onNodeClick = (event, node) => {
        setSelectedNode(node);
        setOpen(true);
        console.log(node);
    }
    const onInit=(reactFlowInstance)=>{
        // console.log('flow loaded:', reactFlowInstance);
    }
//function gets value of order details
    const setWorkFlowForOrder=(selectedWorkflow)=>{
        setWorkFlowName(selectedWorkflow)
        // console.log(workFlowName)
        workFlowList.map((list)=>{
            if(list.workflowname==selectedWorkflow){
                // console.log(JSON.parse(list.WorkFlowJSON)[0]);
                setItems(JSON.parse(list.WorkFlowJSON)[0]);
                setEdge(JSON.parse(list.WorkFlowJSON)[1]);
            }
        })
    }
    const changeLabel=async()=>{
        try{
            const response=await ChangeData(selectedNode,items,taskname,taskdesc,nextUser,date,setItems)
            if(response){
                setItems([...items]);
            }
        }catch(error){
            alert(error)
        }
    }
    return(
        <div className='flow-container'>
            {
                orderTemplate?
                <div className='top-bar-container'>
                    <h2>Please Enter the details</h2>
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
                            <select className='workflow-input' value={workFlowName} onChange={(workFlowName)=>setWorkFlowForOrder(workFlowName.target.value )}>
                                {workFlowList.map((workFlowList) => (
                                    <option value={workFlowList.workflowname} >
                                        {workFlowList.workflowname}
                                    </option>
                                ))}
                            </select>  
                        </div> 
                    </div>
                    <div className='title-pair-div'>
                        <div className='about-title'>
                            <p className='detail-title'>Priority:</p>
                            <select className='workflow-input' onChange={(priority)=>setPriority(priority.target.value)} value={priority}>
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
                    <Typography
                style={{width:"30%",marginLeft:"30%"}}
                >
                <Button  variant="outlined"
                    //  style={{margin:'20px',border:"2px solid black"}}
                    style={{margin:"5%",width:100}}
                    sx={{ color: 'black', backgroundColor: ' rgb(0, 195, 255)', borderColor: 'black'}}
                    onClick={()=>setOrderTemplate(false)}
                >Submit</Button>
                </Typography>   
                </div>
                :
                <>
                <div>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                <Typography style={{justifyContent:"end",marginLeft:"95%"}}><CloseIcon onClick={handleClose} ></CloseIcon></Typography>
                    <Typography style={{fontSize:"20px",fontWeight:"bolder",marginLeft:"100px"}} >
                            {selectedNode==null?"Please select a node":selectedNode.data.label}
                    </Typography>
                    <Typography style={{display:"flex",flexDirection:"row",width:"100%",paddingTop:"20px",paddingBottom:"20px"}}>
                    <Typography style={{display:"flex",flexDirection:"column",width:"100%"}}>
                    <Typography style={{paddingTop:"15px",fontWeight:"bold"}}>Task Assigned To:</Typography>
                    <Typography style={{paddingTop:"30px",fontWeight:"bold"}}>Task Name:</Typography>
                    <Typography style={{paddingTop:"30px",fontWeight:"bold"}}>Task Description:</Typography>
                    <Typography style={{paddingTop:"30px",fontWeight:"bold"}}>Due date:</Typography>
                        
                    </Typography>
                    <Typography style={{display:"flex",flexDirection:"column",width:"100%"}}>
                    <input className='workflow-input'
                                placeholder="Enter assignie User ID"
                                type="email"
                                onChange={(nextUserID)=>setNextUser(nextUserID.target.value)}
                            />
                            <input className='workflow-input'
                                placeholder="Enter Task Name"
                                type="text"
                                onChange={(taskname)=>settaskName(taskname.target.value)}
                            />
                            <input className='workflow-input'
                                placeholder="Enter Task Description"
                                type="text"
                                onChange={(taskDesc)=>settaskDesc(taskDesc.target.value)}
                            />
                            <input className='workflow-input'
                                type="date"
                                placeholder="Enter Days"
                                onChange={(date)=>setDate(date.target.value)}
                            />
                    </Typography>
                    </Typography>
                    <Typography style={{marginLeft:"15px"}}>
                    <Button  variant="outlined" style={{margin:"15px"}}
                    sx={{ color: 'black', backgroundColor: ' rgb(0, 195, 255)', borderColor: 'black'}}
                    className='custom-button' 
                    onClick={()=>changeLabel()}>Change Data</Button>
                <Button  variant="outlined"
                    sx={{ color: 'black', backgroundColor: ' rgb(0, 195, 255)', borderColor: 'black'}}
                    className='custom-button' 
                            onClick={()=>checkForValidateOrderTask(
                                items,edge,order,workFlowName,priority,dueData,user
                                    )}
                    >Finish</Button>
                        </Typography>
                    </Box>
                </Modal>      
                </div>
                <div className='react-render-style'>
                    <div style={{width:'97%',height:'580px',backgroundColor:'wheat'}}>
                        <ReactFlowProvider>
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
                            <Background gap={16} color="black"/>
                            <MiniMap nodeColor='black'/>
                            <Controls/>
                        </ReactFlow>
                        </ReactFlowProvider>
                    </div>
                </div>
                </>
            }
          </div>
       
    )
}
export default Node;