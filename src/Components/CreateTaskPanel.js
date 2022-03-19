import React from 'react';
import './TaskPanel.css';
function TaskPanel(props){
    return(
        <>
            <div className='task-panel-box'>
                <div className='task-panel'>
                    <h1>Create New Task</h1>
                    {props.children}
                </div>
            </div>
        </>
    )
}
export default TaskPanel;