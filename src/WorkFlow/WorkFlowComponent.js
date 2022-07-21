import React, { createContext,useState,useCallback, memo} from 'react';
import './workFlow.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FlowPallet from './ReactFlow'
import WorkflowList from './WorkFlowList';
import CreateWorkFlow from './CreateWorkFlow';
import WorkFlowInput from './WorkFlowInput'
export const GlobalVariable=createContext();
function WorkFlowComponent(){
    const [list,setList]=useState([]);
    const [workFlowPlane,setWorkFlowPlane]=useState(true);
    const [draftedWorkFLow,setDraftedWorkflow]=useState(null);
    const [workFlowInputPanel,setWorkFlowInputPanel]=useState(false)
//workflow data
    const [workflowname, setWorkflowname] = useState(null);
    const [workflowDescription, setDescription] = useState(null);
//set the upcoming workflow json to an list state
    const setWorkFlowFromList=useCallback((listArray)=>{
      setList(listArray)
      // console.log(list)
    },[])
//change workflow state for two pages
    const changeWorkFlowPlaneState=(planeBoolean)=>{
      setWorkFlowPlane(planeBoolean)
    } 
//get drafted workflowjson and store to state
    const setDrafedFlow=(workFlowJsonData)=>{
      setDraftedWorkflow(workFlowJsonData)
    }
//manage input box visibility
    const changeWorkFLowInput=(inputBoolean)=>{
      setWorkFlowInputPanel(inputBoolean)
    }
//set workflow information
    const workFlowData=(workflowname,workflowdesc)=>{
      try {
          setWorkflowname(workflowname);
          setDescription(workflowdesc);
          changeWorkFlowPlaneState(false)
      } catch (error) {
          alert(error)
      }
    }
    return(
      <GlobalVariable.Provider
        value={{
          list:list,
          listFunction:setWorkFlowFromList,
          changeWorkFlowPlaneState:changeWorkFlowPlaneState,
          draftedWorkFLow:draftedWorkFLow,
          setDraftedWorkflow:setDrafedFlow,
          changeWorkFLowInput:changeWorkFLowInput,
          setWorkflowData:workFlowData,
          workflowname:workflowname,
          workflowDescription:workflowDescription
        }}
      >
        <>
         {
          workFlowPlane ?
          <div className ="create-btn-parent">
            {
              workFlowInputPanel?
              <WorkFlowInput/>:
              // <Stack spacing={2} direction="row">
              // <Button  className ="button-create" onClick={()=>setWorkFlowInputPanel(true)}variant="contained">Create WorkFlow</Button>
              null
                // </Stack> 
            }
             
              <WorkflowList/>
            <div className='item-alignment'>
              {/* <FlowPallet/> */}
            </div>
          </div> :
          <CreateWorkFlow/>
         }
        </>
      </GlobalVariable.Provider>
    )
}
export default memo(WorkFlowComponent);