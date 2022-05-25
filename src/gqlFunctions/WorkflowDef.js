import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations'
import * as queries from '../graphql/queries';

export const addWorkFlowDefinition=async(addDefinition)=>{
  if(addDefinition.workflowdefinitionid=="" || addDefinition.NodeName=="" || addDefinition.NextNodeName=="" || addDefinition.Description=="" || typeof addDefinition.isRootNode!= "boolean" || addDefinition.WorkFlowName=="")
    try {
      const workFlowDefinitionData=await API.graphql({query:mutations.createWorkflowDefinition,variables:{input:addDefinition}});
      console.log(workFlowDefinitionData);
    } catch (error) {
      console.log("Error is ",error);
      throw new Error(error)

    }
  }
export const updatedefiniton=async(updateFlow)=>{
  if(updateFlow.id=="" ){
    throw new Error("null value not allowed")
    }
    try {
      const updateWorkFlowDefinition=await API.graphql({query:mutations.updateWorkflowDefinition,variables:{input:updateFlow}});
      console.log("Updated Definition",updateWorkFlowDefinition);
    } catch (error) {
      console.log("Error is ",error);
      throw new Error(error)

    }
  }
  export const deleteDefinition=async(deleteFlow)=>{
    if(deleteFlow.id=="" ){
      throw new Error("null value not allowed")
      }
    try {
      const deleteWorkFlowDefinition=await API.graphql({query:mutations.deleteWorkflowDefinition,variables:{input: deleteFlow}});
      console.log("Deleted Definition",deleteWorkFlowDefinition);
    } catch (error) {
      console.log("Error is ",error);
      throw new Error(error)

    }
  }
  export const listDefintions=async(listFlow)=>{
    try {
      const listDefintion=await API.graphql({query:queries.listWorkflowDefinitions});
      console.log(listDefintion);
    } catch (error) {
      console.log("error is ",error);
      throw new Error(error)

    }
  }