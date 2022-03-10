import './Button.css'
function Button(props){
    return(
        <>
           <div className='button-container'>
                <p className='button-text'>{props.title}</p>
            </div>
        </>
    )
}
export default Button;