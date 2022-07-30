import React ,{useContext} from 'react';
import { GlobalVariable } from './WorkFlowComponent';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import "./workFlow.css";
import { Typography } from '@mui/material';
const WorkFlowCard=(props)=>{
    const { list } = props
    const {
        listFunction,
        setDraftedWorkflow,
        changeWorkFlowPlaneState,
        setWorkflowData,
    } = useContext(GlobalVariable);
    const sendDrafetdDataforCompletion = (
        workFlowJsonData,
        workflowID,
        workflowname,
        WorkFlowDescription
        ) => {
        setDraftedWorkflow(workFlowJsonData);
        setWorkflowData(workflowID,workflowname,WorkFlowDescription);
        changeWorkFlowPlaneState(false);
    };

    const setWorkFlowToPallet = (workFlowJsonData) => {
        listFunction(workFlowJsonData);
    };


    return(
        <>
            { 
                list.map((item,index) => {
                    return (
                        <>
                        <div className="item-card" key={item=>item.id}>
                            <div className="name-container" key={item.workflowName}>
                            <p  className="workflow-name"
                                onClick={() => setWorkFlowToPallet(JSON.parse(item.WorkFlowJSON)) }
                            >
                                {item.workflowname}
                            </p>
                            <div>
                                {item.SaveAsDraft == true ? (
                                <p  className="draft-text"
                                    onClick={() =>
                                        sendDrafetdDataforCompletion(
                                            item.WorkFlowJSON,
                                            item.id,
                                            item.workflowname,
                                            item.WorkFlowDescription
                                        )
                                    }
                                >
                                    Save as draft
                                </p>
                            ) : null}
                            </div>
                            </div>
                            <Typography style={{display:"flex"}} >
                            <p className="edit-button-css" style={{fontSize:10,marginLeft:"4%"}} >
                                {item.createdAt}
                            </p>
                            <Typography>
                                <Button variant="contained"
                                    sx={{width:"20px"}}
                                    style={{backgroundColor:"transparent",marginLeft:"215%"}}>
                                    <EditIcon style={{color:"black"}}
                                        onClick={() =>
                                            sendDrafetdDataforCompletion(
                                                item.WorkFlowJSON,
                                                item.id,
                                                item.workflowname,
                                                item.WorkFlowDescription
                                            )
                                        }
                                    ></EditIcon>
                                </Button>
                                </Typography>
                            </Typography> 
                        </div>
                        </>
                    );
                })
            }            
        </>
    )
}   

export default WorkFlowCard;