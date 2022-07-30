import saveAsDraft from "../server/SaveAsDraft"
const SaveasDraftUI=async(draftedWorkflowID,workFLowName,workFlowDesc,newNode,newEdge)=>{
    await  saveAsDraft(draftedWorkflowID,workFLowName,workFlowDesc,newNode,newEdge)
    if(true){
      alert("WorkFlow save as draft Successfully")
    }
  }
export default SaveasDraftUI;