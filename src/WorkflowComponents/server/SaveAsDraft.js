import { API,Auth } from "aws-amplify";
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import { v4 as uuidv4 } from "uuid"
const saveAsDraft=async(draftedWorkflowID,workFLowName,workFlowDesc,newNode,newEdge)=>{
   try{
    console.log(draftedWorkflowID,workFLowName,workFlowDesc,newNode,newEdge)
    const draftedWorkFlow=await API.graphql({query:queries.getWorkflow,variables:{id:draftedWorkflowID}});
    if(draftedWorkFlow.data.getWorkflow === null){
        const authed=await Auth.currentAuthenticatedUser();
        const draftedData={
            id:uuidv4(),
            workflowname:workFLowName,
            WorkFlowJSON:JSON.stringify([newNode,newEdge]),
            WorkFlowDescription:workFlowDesc ,
            SaveAsDraft:true,
            CreatedBy: authed.attributes.email,
            OwnedBy: authed.attributes.email
        }
        // console.log("created"+draftedData);
        const setDraftedData=await API.graphql({query:mutations.createWorkflow,variables:{input:draftedData}})
        console.log("Drafted Data",setDraftedData);
    }
    else{
        const updatedDraftData={
            id:draftedWorkflowID,
            WorkFlowJSON:JSON.stringify([newNode,newEdge]),
            _version:draftedWorkFlow.data.getWorkflow._version
        }
        // console.log("update"+updatedDraftData);
        const updatedData=await API.graphql({query:mutations.updateWorkflow,variables:{input:updatedDraftData}});
        console.log("Updated draft Data ",updatedData)
    }
    return true;
   }catch(error){
       console.log("Error is ",error)
   }
}
export default saveAsDraft;