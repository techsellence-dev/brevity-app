import './Button.css'
function SubButtons(props){
    return(
        <>
           <div className='button-container' onClick={props.onClick}>
                <p className='button-text'>{props.title}</p>
            </div>
        </>
    )
}
export default SubButtons;