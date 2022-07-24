import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
const SaveEditedWorkflow = async (
  // workflowid,
  workFLowName,
  workFlowDesc,
  newNode,
  newEdge
) => {
  try {
    if (
      workFLowName == null ||
      workFlowDesc == null ||
      newNode == "[]" ||
      newEdge == "[]"
    ) {
      console.log(workFLowName, workFlowDesc, newNode, newEdge);
      throw "Please enter all fields";
    }
    const workflowNamePresent = await API.graphql({
      query: queries.getWorkflow,
      variables: { workflowName: workFLowName },
    });
    // find every node child and start adding data to database
    for (let i = 0; i < newNode.length; i++) {
      let childArray = [];
      newEdge.map((edge) => {
        if (edge.source === newNode[i].id) {
          childArray.push(edge.target);
        }
      });
      const nodeData = await API.graphql({
        query: queries.nodeByNodeandWorkFlowName,
        variables: {
          NodeName: newNode[i].data.label,
          WorkFlowName: {
            eq: workFLowName,
          },
        },
      });
      if (nodeData.data.nodeByNodeandWorkFlowName.items.length == 0) {
        const workflowDefinitionDetails = {
          workflowdefinitionid: workFLowName,
          NodeName: newNode[i].data.label,
          NextNodeName: childArray,
          Description: workFlowDesc,
          isRootNode: newNode[i].data.isRootNode,
          WorkFlowName: workFLowName,
          workflowWorkflowdefinitionsId: workFLowName,
        };
        const setNodeDataToBackend = await API.graphql({
          query: mutations.createWorkflowDefinition,
          variables: { input: workflowDefinitionDetails },
        });
        console.log(setNodeDataToBackend.data.createWorkflowDefinition);
        // console.log(workflowDefinitionDetails);
      } else {
        continue;
      }
    }
    const updatedWorkFlowDetails = {
      workflowName: workFLowName,
      WorkFlowJSON: JSON.stringify([newNode, newEdge]),
      _version: workflowNamePresent.data.getWorkflow._version,
    };
    const addWorkFlowDetails = await API.graphql({
      query: mutations.updateWorkflow,
      variables: { input: updatedWorkFlowDetails },
    });
    console.log(addWorkFlowDetails);
    return true;
  } catch (error) {
    console.log("Error is ", error);
  }
};
export default SaveEditedWorkflow;
