import { API } from "aws-amplify";
import * as mutations from '../graphql/mutations';
const saveAsDraft=async(workFLowName,workFlowDesc,newNode,newEdge)=>{
    // console.log(workFLowName,workFlowDesc,newNode,newEdge)
    const draftedData={
        workflowName:workFLowName,
        WorkFlowJSON:JSON.stringify([newNode,newEdge]),
        WorkFlowDescription:workFlowDesc ,
        SaveAsDraft:true,
        CreatedBy: "Chirag tak",
        OwnedBy: "chirag Tak"
    }
    const setDraftedData=await API.graphql({query:mutations.createWorkflow,variables:{input:draftedData}});
    console.log(setDraftedData);
}
export default saveAsDraft;