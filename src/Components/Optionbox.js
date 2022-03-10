import React, { useState } from 'react';
import Button from './Button';
import './option.css'
function Options(props){
    const [button,showButton]=useState(false);
    const [firstProp,setfirstprops]=useState(props.firsttoken);
    const [secondProp,setsecondprops]=useState(props.secondtoken);
    const [thirtprop,setthirdprops]=useState(props.thirdtoken);
    return(
        <>
            <div className='option-container'>
                <div className='option-box'>
                    <h1 className='option-title'>
                        {props.title}
                    </h1>
                    <h2 className='option-subtitle'>
                        {props.subTitle}
                    </h2>
                    {
                        firstProp ?
                        <div className='option-radio-button'>
                            <input type='radio' name="forward-docs" onClick={()=>{
                                showButton(true)
                                setfirstprops(true)
                                setsecondprops(false)
                                setthirdprops(false)
                            }}/>
                            <p className='radio-button-description'>
                                {props.firstDescription}
                            </p>
                        </div> : null
                    }
                    {
                        secondProp ?
                        <div className='option-radio-button'>
                            <input type='radio' name="forward-docs" onClick={()=>{
                                showButton(true)
                                setfirstprops(false)
                                setsecondprops(true)
                                setthirdprops(false)
                            }}/>
                            <p className='radio-button-description'>
                                {props.secondDescription}
                            </p>
                        </div> :null
                    }
                    {
                        thirtprop ?
                        <div className='option-radio-button'>
                            <input type='radio' name="forward-docs" onClick={()=>{
                                showButton(true)
                                setfirstprops(false)
                                setsecondprops(false)
                                setthirdprops(true)
                            }}/>
                            <p className='radio-button-description'>
                                {props.thirdDescription}
                            </p>
                        </div> :null
                    }
                    <div className='control-buttons'>
                        <Button
                            title="Cancel"
                        />
                        {
                            button ?<Button title="Accept"/> :null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}   
export default Options;