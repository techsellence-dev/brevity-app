import React from 'react';
import '../App.css';
function Toast(props){
    return(
        <div className={'info-div'+props.color}
            style={{
                width:150,
                height:150,
                backgroundColor:'red'
            }}
        >
            <div>{props.title}</div>
            <div>{props.left}</div>
            <div>{props.right}</div>
            {props.children}
        </div>
    )
}
export default Toast;