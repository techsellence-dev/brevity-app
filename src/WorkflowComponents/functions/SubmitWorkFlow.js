import SaveWorkFlowDefinition from "../server/SaveWorkFlowDefinition";
import * as queries from "../../graphql/queries";
import { API } from "aws-amplify";
import SaveEditedWorkflow from "../server/SaveEditedWorkflow";
const checkForValidateWorkFlow = async (workflowid,workFLowName, workFlowDesc, newNode, newEdge) => {
  try {
    let isTrivalNode = false;
    let endNode = false;
    let i = 0;
    let nodecount = 0;
    for (let k = 0; k < newNode.length; k++) {
      for (let  j = 0; j < newEdge.length; j++) {
        if (newNode[k].id != newEdge[j].source) {
          endNode = true;
          // console.log(endNode,newNode[k].id);
        } else {
          endNode = false;
          // console.log(endNode,newNode[k].id);
          break;
        }
      }
      if (endNode) nodecount++;
      // console.log(nodecount,newNode[k].id);
    }
    while (i < newNode.length) {
      for (let j = 0; j < newEdge.length; j++) {
        if (
          newNode[i].id != newEdge[j].source &&
          newNode[i].id != newEdge[j].target
        ) {
          isTrivalNode = true;
        } else {
          isTrivalNode = false;
          break;
        }
      }
      i++;
    }

    if (isTrivalNode == true) {
      throw {result:"Node Without Edge is not allowed"};
    } else if (nodecount > 1) {
      throw {result:"WorkFlow Should be Single EndPoint"};
    } else if (newNode.length == 0) {
      throw {result:"Blank WorkFlow Will not allowed"};
    } else {
      const getWorkFlowData = await API.graphql({
        query: queries.getWorkflow,
        variables: { id: workflowid },
      });
      if (getWorkFlowData.data.getWorkflow != null) {
        if (getWorkFlowData.data.getWorkflow.SaveAsDraft == false) {
          return {result:"Edit workflow"}
        }
        else{
          return {result:"Drafted workflow"};
        }
      } else {
        return {result:"validWorkflow"}
      }
    }
  } catch (error) {
    // return error;
    console.log(error)
  }
};
export default checkForValidateWorkFlow;
