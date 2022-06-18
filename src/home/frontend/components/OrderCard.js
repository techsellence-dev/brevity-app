import React, { useState ,useContext }  from "react";
import './OrderCard.css';
import { GlobalState } from "../Home";
function OrderCard(props){
//function that send selected order data to TopBar
    const {taskData}=useContext(GlobalState)
    return(
        <div>
            {props.data.map((items,index) => (
                <div key={index} className="cardBody" onClick={()=>taskData(items)}  >
                    <div className='orderDiv '>
                        <p style={{fontWeight:"bold"}}>{items.orderID} </p>
                        <p style={{fontWeight:"bold"}}>{items.currentTime}</p>
                    </div> 
                    <div className='orderDiv '>
                        <p style={{fontWeight:"bold"}}>{items.description} </p>
                        <p style={{fontWeight:"bold"}}>{items.currentData}</p>
                    </div>  
                </div>
            ))}
            
        </div>
    )
}
export default OrderCard;