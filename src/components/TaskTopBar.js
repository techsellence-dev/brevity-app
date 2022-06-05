import React from 'react'
import '../css/workflow.css';
const TaskTopBar=(props)=>{
    return(
        <>
            <div className='top-bar-container'>
                <h2>Please update the details of the tasks</h2>
                <div className='title-pair-div'>
                    <div className='about-title'>
                        <p className='detail-title'>Order Number:</p>
                        <h3>{props.order}</h3>
                    </div>
                    <div className='about-title'>
                        <p className='detail-title'>WorkFlowName:</p>
                        <h3>{props.workflow}</h3>
                    </div> 
                </div>
                <div className='title-pair-div'>
                    <div className='about-title'>
                        <p className='detail-title'>Priority:</p>
                        <h3>{props.priority}</h3>
                    </div>
                    <div className='about-title'>
                        <p className='detail-title'>Due Date:</p>
                        <h3>{props.duedate}</h3>
                    </div> 
                </div>
            </div>
        </>
    )
}
export default TaskTopBar;