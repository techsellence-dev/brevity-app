import { API , Auth } from 'aws-amplify'
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
const SaveDraftedWorkflow=async(workflowid,workFLowName,newNode,newEdge)=>{
    try {
      if(workFLowName===null ||  newNode==='[]' ||newEdge==='[]'){
        console.log(workFLowName,newNode,newEdge)
        throw "Please enter all fields";
      }
      const workflowNamePresent=await API.graphql({query:queries.getWorkflow,variables:{id:workflowid}})
      if(workflowNamePresent.data.getWorkflow===null || workflowNamePresent.data.getWorkflow.SaveAsDraft===true){
        const date=new Date();
        let createdAt=date.getTime();
        //fetch for authed user
        const authedUser=await Auth.currentAuthenticatedUser();
        // find every node child and start adding data to database
            for(let i=0;i<newNode.length;i++){
              let childArray=[];
              newEdge.map((edge)=>{
                if(edge.source===newNode[i].id){
                  childArray.push(edge.target);
                }
              })
              const nodeData=await API.graphql({
                query:queries.nodeByNodeandWorkFlowName,
                variables:{
                  NodeName:newNode[i].data.label,
                  WorkFlowName:{
                    eq:workFLowName
                  }
                }
              });
              if(nodeData.data.nodeByNodeandWorkFlowName.items.length===0){
                const workflowDefinitionDetails={
                    workflowdefinitionid:workFLowName,
                    NodeName: newNode[i].data.label,
                    NextNodeName:childArray,
                    Description: newNode[i].data.label,
                    isRootNode:newNode[i].data.isRootNode,
                    WorkFlowName: workFLowName,
                  //conect via id
                    workflowWorkflowdefinitionsId: workflowid,
                }
                const setNodeDataToBackend=await API.graphql({query:mutations.createWorkflowDefinition,variables:{input:workflowDefinitionDetails}})
                // console.log(setNodeDataToBackend);
              }
              else{
                continue;
              }
          }
        const updatedWorkFlowDetails={
            id:workflowid,
            WorkFlowJSON:JSON.stringify([newNode,newEdge]),
            SaveAsDraft:false,
            _version:workflowNamePresent.data.getWorkflow._version
        }
        const addWorkFlowDetails=await API.graphql({query:mutations.updateWorkflow,variables:{input:updatedWorkFlowDetails}})
        // console.log(addWorkFlowDetails)
        return true;
      }
      else{
        alert("Workflow  exists")
      }
    } catch (error) {
      console.log("Error is ",error);
    }
}
export default SaveDraftedWorkflow;