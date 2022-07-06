import React, { memo,useState,useEffect,useContext} from 'react';
import './workFlow.css';
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import { GlobalVariable } from './WorkFlowComponent';
var i=0;
var nextTokens=[];
const WorkflowList=()=>{
    const {listFunction,setDraftedWorkflow,changeWorkFlowPlaneState,setWorkflowData}=useContext(GlobalVariable)
    const [workflowList, setWorkFlowList] = useState([]);
    const [clicked,setClicked]=useState(false);
//function sends data of selected workflow json to raect flow compomnent and workflow is visible
    const setWorkFlowToPallet=(workFlowJsonData)=>{
        listFunction(workFlowJsonData)
    }
//useeffect set workflow list


    useEffect(async () => {
        await chechForData()
        return(()=>{
            setWorkFlowList([])
        })
    }, []);

    async function chechForData(){
        console.log("in check")
        const localData=localStorage.getItem("workflowList");
        if(localData==null){
            console.log("get from server")
            const workflowFetch=await fetchData();
            // console.log(workflowFetch)
            localStorage.setItem("workflowList",JSON.stringify(workflowFetch.data.listWorkflows.items))
        }else{
            console.log("get from local")
            const localDataUpdate=localStorage.getItem("workflowList");
            setWorkFlowList(JSON.parse(localDataUpdate))
        }
    }
    async function fetchData(){
        try {
          const workflowdata=await API.graphql({
            query:queries.listWorkflows,
            variables:{
              limit:5,
            }
          })
          setWorkFlowList(workflowdata.data.listWorkflows.items);
          let token = (workflowdata.data.listWorkflows.nextToken);
          const data=nextTokens.find(function(){
            if(workflowdata.data.listWorkflows.nextToken)
              return true
          });
          if(data===undefined){
            nextTokens.push(token);
          }
          console.log(nextTokens)
          return workflowdata;
        } catch (error) {
          console.log(error);
        }
    }


    async function nextItems(){
        if(clicked){
          console.log("in next if");
          return;
        }
        setClicked(true)
        // i++
        const workflowdata=await API.graphql({
          query:queries.listWorkflows,
          variables:{
            limit:5,
            nextToken:nextTokens[i]
          }
        });
        nextTokens.push(workflowdata.data.listWorkflows.nextToken);
        console.log(nextTokens)
        // i++;
        console.log(workflowdata.data.listWorkflows)
        if(workflowdata.data.listWorkflows.items.length===0){
          for(var j=nextTokens.length-1;j>=0;j--){
            console.log("Start pop up")
            nextTokens.pop()
          }
          fetchData()
          i=0;
        }
        ++i;
        // localStorage.setItem("workflowList",workflowdata.data.listWorkflows.items);
        setWorkFlowList(workflowdata.data.listWorkflows.items)
        setClicked(false)
      }
    
    
      async function prevItems(){
        if(i<0 || clicked){
          console.log("in if")
          return ;
        }
        setClicked(true)
        nextTokens.pop()
        const workflowdata=await API.graphql({
          query:queries.listWorkflows,
          variables:{
            limit:5,
            nextToken:nextTokens[i--]
          }
        });
        setWorkFlowList(workflowdata.data.listWorkflows.items)
        nextTokens.push(workflowdata.data.listWorkflows.nextToken)
        // i--;
        setClicked(false)
      }

//send drafted workflow json to workflo pallet for completion
    const sendDrafetdDataforCompletion=(workFlowJsonData,workflowName,WorkFlowDescription)=>{
        setDraftedWorkflow(workFlowJsonData);
        setWorkflowData(workflowName,WorkFlowDescription);
        changeWorkFlowPlaneState(false)
    }
    return(
      <>
        <div className='item-btns-list'>
            <div className='list-map-div'>
            {
                workflowList.map((item)=>{
                return(
                    <>
                        <div className='item-card'>
                            <div className='name-container' key={item.workflowName}>
                                <p className='workflow-name'
                                    onClick={()=>setWorkFlowToPallet(JSON.parse(item.WorkFlowJSON))}>
                                    {item.workflowName}
                                </p>
                                <div>
                                    {item.SaveAsDraft == true ? (
                                        <p className="draft-text" 
                                            onClick={()=>sendDrafetdDataforCompletion(item.WorkFlowJSON,item.workflowName,item.WorkFlowDescription)}
                                        >
                                            Save as draft
                                        </p>
                                    ) : null}
                                </div>
                            </div> 
                            <div>
                                <p className="edit-button-css" 
                                    onClick={()=>sendDrafetdDataforCompletion(item.WorkFlowJSON,item.workflowName,item.WorkFlowDescription)}
                                >
                                    Edit
                                </p>
                            </div>
                        </div>
                    </>
                )                   
                })
            }
            </div>
            <div className='buttons-alignment'>
                {i===0?null:<button className='custom-button-3' onClick={prevItems}>Previous</button>}
                <button className='custom-button-3' onClick={nextItems} >next</button>
            </div>
        </div>
      </>
    )
}
export default memo(WorkflowList);