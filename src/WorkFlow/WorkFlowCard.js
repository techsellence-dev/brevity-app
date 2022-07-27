import React ,{useContext} from 'react';
import { GlobalVariable } from './WorkFlowComponent';

const WorkFlowCard=(props)=>{
    const { list } = props
    const {
        listFunction,
        setDraftedWorkflow,
        changeWorkFlowPlaneState,
        setWorkflowData,
        changeWorkFLowInput
        // setworkflowid
    } = useContext(GlobalVariable);
    const sendDrafetdDataforCompletion = (
        // workflowID,
        workFlowJsonData,
        workflowName,
        WorkFlowDescription
        ) => {
        setDraftedWorkflow(workFlowJsonData);
        setWorkflowData(workflowName, WorkFlowDescription);
        // setworkflowid(workflowID)
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
                        <div className="item-card" key={index}>
                            <div className="name-container" key={item.workflowName}>
                            <p
                                className="workflow-name"
                                onClick={() =>
                                    setWorkFlowToPallet(JSON.parse(item.WorkFlowJSON))
                                }
                            >
                                {item.workflowname}
                            </p>
                            <div>
                                {item.SaveAsDraft == true ? (
                                <p
                                    className="draft-text"
                                    onClick={() =>
                                        sendDrafetdDataforCompletion(
                                            // item.wokflowID,
                                            item.WorkFlowJSON,
                                            item.workflowName,
                                            item.WorkFlowDescription
                                        )
                                    }
                                >
                                    Save as draft
                                </p>
                                ) : null}
                            </div>
                            </div>
                            <div>
                            <p
                                className="edit-button-css"
                                onClick={() =>
                                    sendDrafetdDataforCompletion(
                                        // item.wokflowID,
                                        item.WorkFlowJSON,
                                        item.workflowName,
                                        item.WorkFlowDescription
                                    )
                                }
                            >
                                Edit
                            </p>
                            </div>
                        </div>
                        </>
                    );
                })
            }
        </>
    )
}   
export default WorkFlowCard;