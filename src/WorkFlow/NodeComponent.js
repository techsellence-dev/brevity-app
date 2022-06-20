import React, { createContext,useState,useCallback, memo} from 'react';
import './workFlow.css';
import FlowPallet from './ReactFlow'
import WorkflowList from './WorkFlowList';
import CreateWorkFlow from './CreateWorkFlow';
export const GlobalVariable=createContext();
function NodeComponent(){
    const [list,setList]=useState([]);
    const [workFlowPlane,setWorkFlowPlane]=useState(true);
    const [draftedWorkFLow,setDraftedWorkflow]=useState(null);
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
    return(
      <GlobalVariable.Provider
        value={{
          list:list,
          listFunction:setWorkFlowFromList,
          changeWorkFlowPlaneState:changeWorkFlowPlaneState,
          draftedWorkFLow:draftedWorkFLow,
          setDraftedWorkflow:setDrafedFlow
        }}
      >
        <>
        <h1 onClick={()=>setWorkFlowPlane(false)}>Move to workflow creation</h1>
         {
          workFlowPlane ?
          <div className='item-alignment'>
            <WorkflowList/>
            <FlowPallet/>
          </div> :
          <CreateWorkFlow/>
         }
        </>
      </GlobalVariable.Provider>
    )
}
export default memo(NodeComponent);