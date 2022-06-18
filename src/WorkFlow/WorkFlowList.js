import React, { memo,useState,useEffect,useContext} from 'react';
import './workFlow.css';
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import { GlobalVariable } from './NodeComponent';
const WorkflowList=()=>{
    const {list,listFunction,setDraftedWorkflow,changeWorkFlowPlaneState}=useContext(GlobalVariable)
    const [workflowList, setWorkFlowList] = useState([]);
//function sends data of selected workflow json to raect flow compomnent and workflow is visible
    const setWorkFlowToPallet=(workFlowJsonData)=>{
        listFunction(workFlowJsonData)
    }
//useeffect set workflow list
    useEffect(async () => {
        const workflowdata = await API.graphql({ query: queries.listWorkflows });
        setWorkFlowList(workflowdata.data.listWorkflows.items);
        return(()=>{
            setWorkFlowList([])
        })
    }, []);
//send drafted workflow json to workflo pallet for completion
    const sendDrafetdDataforCompletion=(workFlowJsonData,workflowName,WorkFlowDescription)=>{
        setDraftedWorkflow(workFlowJsonData)
        changeWorkFlowPlaneState(false)
    }
    return(
      <>
        <div className='list-map-div'>
        {
            workflowList.map((item)=>{
               return(
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
               )                   
            })
        }
        </div>
      </>
    )
}
export default memo(WorkflowList);