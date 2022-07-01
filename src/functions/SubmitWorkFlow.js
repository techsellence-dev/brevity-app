import SaveWorkFlowDefinition from "../server/SaveWorkFlowDefinition";
import * as queries from '../graphql/queries';
import { API } from "aws-amplify";
import SaveEditedWorkflow from "../server/SaveEditedWorkflow";
const checkForValidateWorkFlow = async (workFLowName, workFlowDesc, newNode, newEdge) => {
    try {
      let isTrivalNode = false;
      let endNode = false;
      var i = 0;
      let nodecount = 0;
      for (var k = 0; k < newNode.length; k++) {
        for (j = 0; j < newEdge.length; j++) {
          if (newNode[k].id != newEdge[j].source) {
            endNode = true;
            // console.log(endNode,newNode[k].id);
          } else {
            endNode = false;
            // console.log(endNode,newNode[k].id);
            break;
          }
        }
        if (endNode) 
          nodecount++;
        // console.log(nodecount,newNode[k].id);
      }
      while (i < newNode.length) {
        for (var j = 0; j < newEdge.length; j++) {
          if (newNode[i].id != newEdge[j].source &&  newNode[i].id != newEdge[j].target){
            isTrivalNode = true;
          }else{
            isTrivalNode = false;
            break;
          }
        }
        i++;
      }

      if (isTrivalNode == true) {
        throw "Node Without Edge is not allowed";
      } 
      else if(nodecount>1){
        throw "WorkFlow Should be Single EndPoint";
      }
      else if(newNode.length == 0){
        throw "Blank WorkFlow Will not allowed";
      }
      else {
        const getWorkFlowData=await API.graphql({query:queries.getWorkflow,variables:{workflowName:workFLowName}});
        // console.log(getWorkFlowData)
        if(getWorkFlowData.data.getWorkflow!=null){
          console.log("e")
          if(getWorkFlowData.data.getWorkflow.SaveAsDraft==false){
              let newResponse=await SaveEditedWorkflow(workFLowName, workFlowDesc, newNode, newEdge)
              if(newResponse){
                await alert("WorkFlow Edited Successfully")
              // }
            }
            else if(getWorkFlowData.data.getWorkflow.SaveAsDraft==true){
              // console.log("dra")
              let response=await SaveWorkFlowDefinition(workFLowName, workFlowDesc, newNode, newEdge);
              if(response){
                await alert("WorkFlow Created Successfully")
              }
            }
          }
        }
        else{
          // console.log("c")
          let response=await SaveWorkFlowDefinition(workFLowName, workFlowDesc, newNode, newEdge);
          if(response){
            await alert("WorkFlow Created Successfully")
          }
        }
      }
    } catch (error) {
      alert(error);
    }
};   
export default checkForValidateWorkFlow;