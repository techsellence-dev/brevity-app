import { API } from "aws-amplify";
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
const saveAsDraft=async(workFLowName,workFlowDesc,newNode,newEdge)=>{
   try{
    const draftedWorkFlow=await API.graphql({query:queries.getWorkflow,variables:{workflowName:workFLowName}}); //check with id
    if(draftedWorkFlow.data.getWorkflow === null){
        const draftedData={
            workflowName:workFLowName,
            workflowname:workFLowName,
            WorkFlowJSON:JSON.stringify([newNode,newEdge]),
            WorkFlowDescription:workFlowDesc ,
            SaveAsDraft:true,
            CreatedBy: "Chirag tak",
            OwnedBy: "chirag Tak"
        }
        const setDraftedData=await API.graphql({query:mutations.createWorkflow,variables:{input:draftedData}})
        console.log("Drafted Data",setDraftedData);
    }
    else{
        const updatedDraftData={
            // update via id
            workflowName:workFLowName,
            WorkFlowJSON:JSON.stringify([newNode,newEdge]),
            _version:draftedWorkFlow.data.getWorkflow._version
        }
        const updatedData=await API.graphql({query:mutations.updateWorkflow,variables:{input:updatedDraftData}});
        console.log("Updated draft Data ",updatedData)
    }
    return true;
   }catch(error){
       console.log("Error is ",error)
   }
}
export default saveAsDraft;