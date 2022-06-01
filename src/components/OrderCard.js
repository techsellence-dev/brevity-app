import React, { useState }  from "react";
import './OrderCard.css';
function OrderCard(props){
    
    return(
        <div>
            {props.data.map((items,index) => (
                <div key={index} className="cardBody" onClick={()=>props.onclick(items)}  >
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