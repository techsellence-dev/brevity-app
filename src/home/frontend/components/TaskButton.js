import react from 'react';
import './inputs.css'
function TaskButton(props){
    return(
        <>
            <div className='button-body' onClick={props.onclick}>
                <h1 className='title'>{props.title}</h1>
            </div>
        </>
    )
}
export default TaskButton;