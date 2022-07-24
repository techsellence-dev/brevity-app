import saveAsDraft from "../server/SaveAsDraft"
const SaveasDraftUI=async(workflowid,workFLowName,workFlowDesc,newNode,newEdge)=>{
    await  saveAsDraft(workflowid,workFLowName,workFlowDesc,newNode,newEdge)
    if(true){
      alert("WorkFlow save as draft Successfully")
    }
  }
export default SaveasDraftUI;