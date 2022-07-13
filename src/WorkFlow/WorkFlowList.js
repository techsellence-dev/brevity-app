import React, { memo,useState,useEffect,useContext} from 'react';
import './workFlow.css';
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import { GlobalVariable } from './WorkFlowComponent';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

var i=0;
var nextTokens=null
function WorkflowList(){
//MAIN FUNCTION
const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    const {listFunction,setDraftedWorkflow,changeWorkFlowPlaneState,setWorkflowData}=useContext(GlobalVariable)
    const [workflowList, setWorkFlowList] = useState([]);
    const [clicked,setClicked]=useState(false);
//function sends data of selected workflow json to raect flow compomnent and workflow is visible
    const setWorkFlowToPallet=(workFlowJsonData)=>{
        listFunction(workFlowJsonData)
    }
//useeffect set workflow list


    useEffect(async () => {
        await chechForData()
        return(()=>{
            setWorkFlowList([])
        })
    }, []);

    async function chechForData(){
        console.log("in check")
        const localData=localStorage.getItem("workflowList");
        if(localData==null){
            console.log("get from server")
            const workflowFetch=await fetchData();
            // console.log(workflowFetch)
            localStorage.setItem("workflowList",JSON.stringify(workflowFetch.data.listWorkflows.items))
        }else{
            console.log("get from local")
            const localDataUpdate=localStorage.getItem("workflowList");
            setWorkFlowList(JSON.parse(localDataUpdate))
        }
    }
    async function fetchData(){
        try {
          const workflowdata=await API.graphql({
            query:queries.listWorkflows,
            variables:{
              limit:5,
            }
          })
          setWorkFlowList(workflowdata.data.listWorkflows.items);
          let token = (workflowdata.data.listWorkflows.nextToken);
            nextTokens=token;
          console.log(nextTokens)
          return workflowdata;
        } catch (error) {
          console.log(error);
        }
    }


    async function nextItems(){
        if(clicked){
          console.log("in next if");
          return;
        }
        setClicked(true)
        // i++
        const workflowdata=await API.graphql({
          query:queries.listWorkflows,
          variables:{
            limit:5,
            nextToken:nextTokens
          }
        });
        nextTokens=workflowdata.data.listWorkflows.nextToken;
        console.log(nextTokens)
        // i++;
        console.log(workflowdata.data.listWorkflows)
        if(workflowdata.data.listWorkflows.items.length===0){
          nextTokens=null;
          fetchData()
          i=0;
        }
        setWorkFlowList(workflowdata.data.listWorkflows.items)
        localStorage.setItem("workflowList",JSON.stringify(workflowdata.data.listWorkflows.items));
        ++i;
        
        setClicked(false)
      }
    
    
      // async function prevItems(){
      //   if(i<0 || clicked){
      //     console.log("in if")
      //     return ;
      //   }
      //   setClicked(true)
      //   nextTokens.pop()
      //   const workflowdata=await API.graphql({
      //     query:queries.listWorkflows,
      //     variables:{
      //       limit:5,
      //       nextToken:nextTokens[i--]
      //     }
      //   });
      //   setWorkFlowList(workflowdata.data.listWorkflows.items);
      //   nextTokens.push(workflowdata.data.listWorkflows.nextToken);
      //   localStorage.setItem("workflowList",JSON.stringify(workflowdata.data.listWorkflows.items));
      //   // i--;
      //   setClicked(false)
      // }

//send drafted workflow json to workflo pallet for completion
    const sendDrafetdDataforCompletion=(workFlowJsonData,workflowName,WorkFlowDescription)=>{
        setDraftedWorkflow(workFlowJsonData);
        setWorkflowData(workflowName,WorkFlowDescription);
        changeWorkFlowPlaneState(false)
    }
    return(
      <>

<Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Workflow List Page{" "}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {
                workflowList.map((item)=>{
                return(
                    <>
                        <div className='item-card'>
                            <div className='name-container' key={item.workflowName}>
                                <p className='workflow-name'
                                    onClick={()=>setWorkFlowToPallet(JSON.parse(item.WorkFlowJSON))}>
                                    {item.workflowName}
                                </p>
                                <div>
                                    {item.SaveAsDraft == true ? (
                                        <p className="draft-text" 
                                            onClick={()=>sendDrafetdDataforCompletion(item.WorkFlowJSON,item.workflowName,item.WorkFlowDescription)}
                                        >
                                            Save as draft
                                        </p>
                                    ) : null}
                                </div>
                            </div> 
                            <div>
                                <p className="edit-button-css" 
                                    onClick={()=>sendDrafetdDataforCompletion(item.WorkFlowJSON,item.workflowName,item.WorkFlowDescription)}
                                >
                                    Edit
                                </p>
                            </div>
                        </div>
                    </>
                )                   
                })
            }
            <div className='buttons-alignment'>
              {/* {i===0?null:<button className='custom-button-3' onClick={prevItems}>Previous</button>} */}
              <button className='custom-button-3' onClick={nextItems} >next</button>
            </div> 
      </Drawer>
      
    </Box>                            
      </>
    )
}
export default memo(WorkflowList);