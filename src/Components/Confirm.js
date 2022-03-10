import React from 'react';
import Button from './Button';
import './Confirm.css';
function Confirm(props){
    return(
        <>
            <div className='box-body'>
                <h1 className='confirm-box-title'> 
                   {props.title}
                </h1>
                <h2 className='confirm-box-description'>
                    {props.description}
                </h2>
                <p className='confirm-message'>
                    {props.message}
                </p>
                <div className='confirm-box-buttons'>
                    <Button title="Cancel"/>
                    <Button title="Accept"/>
                </div>
            </div>
        </>
    )
}
export default Confirm;