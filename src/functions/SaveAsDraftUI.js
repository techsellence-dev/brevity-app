import saveAsDraft from "../server/SaveAsDraft"
const SaveasDraftUI=async(workFLowName,workFlowDesc,newNode,newEdge)=>{
    await  saveAsDraft(workFLowName,workFlowDesc,newNode,newEdge)
    if(true){
      alert("WorkFlow save as draft Successfully")
    }
  }
export default SaveasDraftUI;