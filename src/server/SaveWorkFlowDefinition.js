import { API } from 'aws-amplify'
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
const SaveWorkFlowDefinition=async(workFLowName,workFlowDesc,newNode,newEdge)=>{
    try {
      if(workFLowName==null || workFlowDesc==null || newNode=='[]' ||newEdge=='[]'){
        throw "Please enter all fields";
      }
      const workflowNamePresent=await API.graphql({query:queries.getWorkflow,variables:{workflowName:workFLowName}})
      if(workflowNamePresent.data.getWorkflow==null){
        // find every node child and start adding data to database
            for(var i=0;i<newNode.length;i++){
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
              if(nodeData.data.nodeByNodeandWorkFlowName.items.length==0){
                const workflowDefinitionDetails={
                    workflowdefinitionid:"New Workflow",
                    NodeName: newNode[i].data.label,
                    NextNodeName:childArray,
                    Description: "First Description",
                    isRootNode:newNode[i].data.isRootNode,
                    WorkFlowName: workFLowName,
                    workflowWorkflowdefinitionsId: workFLowName
                }
                const setNodeDataToBackend=await API.graphql({query:mutations.createWorkflowDefinition,variables:{input:workflowDefinitionDetails}})
                console.log(setNodeDataToBackend.data.createWorkflowDefinition);
              // console.log(workflowDefinitionDetails);
              }
              else{
                console.log("Can't add data due to multiple entries");
              }
          }
          if(workflowNamePresent.data.getWorkflow!=null){
            const updatedWorkFlowDetails={
              workflowName:workFLowName,
              WorkFlowJSON:JSON.stringify([newNode,newEdge]),
              SaveAsDraft:false,
              _version:workflowNamePresent.data.getWorkflow._version
            }
            const addWorkFlowDetails=await API.graphql({query:mutations.updateWorkflow,variables:{input:updatedWorkFlowDetails}})
            console.log(addWorkFlowDetails);
          }
          else{
            const workFlowDetails={
              workflowName:workFLowName,
              WorkFlowJSON:JSON.stringify([newNode,newEdge]),
              WorkFlowDescription:workFlowDesc,
              SaveAsDraft:false,
              CreatedBy: "Chirag tak",
              OwnedBy: "Chirag tak"
            }
            const addWorkFlowDetails=await API.graphql({query:mutations.createWorkflow,variables:{input:workFlowDetails}})
            console.log(addWorkFlowDetails);
          }
          return true;
      }
      else{
        alert("Workflow  exists")
      }
    } catch (error) {
      console.log("Error is ",error);
    }
}
export default SaveWorkFlowDefinition;