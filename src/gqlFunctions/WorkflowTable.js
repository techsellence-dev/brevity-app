import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

export const addWorkFlow=async(addValue)=>{
  if(addValue.workflowName=="" || addValue.WorkFlowJSON=="" || addValue.WorkFlowDescription=="" || typeof addValue.SaveAsDraft!= "boolean"){
    throw new Error("Null value not allowed")
    }
    try {
      const workFlowData=await API.graphql({query:mutations.createWorkflow,variables:{input:addValue}});
      console.log(workFlowData);
    } catch (error) {
      console.log("error is ",error);
      throw new Error(error)

    }
  }
  export const updateWorkflow=async(updateValue)=>{
    if(updateValue.workflowName==""){
      throw new Error("null value not allowed for Workflow Name")
    }
  try {
      const updatedData=await API.graphql({query:mutations.updateWorkflow,variables:{input:updateValue}});
      console.log("Updated Workflow", updatedData);
    } catch (error) {
      console.log("Error is ",error);
      throw new Error(error)

    }
  }
  export const deletWorkFlow=async(deleteValue)=>{
    if(deleteValue.workflowName==""){
      throw new Error("null value not allowed for orderID")
    }
    try {
      const deletedItem=await API.graphql({query:mutations.deleteWorkflow,variables:{input: deleteValue}})
      console.log("workflow deleted", deletedItem);
    } catch (error) {
      console.log("Error is ",error);
      throw new Error(error)

    }
  }

  export const listWorkLFlow=async(listValue)=>{
    try {
      const list=await API.graphql({query:queries.listWorkflows});
      console.log(list);
    } catch (error) {
      console.log("error is ",error);
      throw new Error(error)

    }
  }