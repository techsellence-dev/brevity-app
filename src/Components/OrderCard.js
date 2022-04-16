import React, { useState }  from "react";
import './OrderCard.css';
function OrderCard(props){
    
    return(
        <div>
            {props.data.map((items) => (
                <div key={items.id} className="cardBody" >
                    <div className='orderDiv '>
                        <p style={{fontWeight:"bold"}}>{items.orderNum} </p>
                        <p style={{fontWeight:"bold"}}>Time</p>
                    </div> 
                    <div className='orderDiv '>
                        <p style={{fontWeight:"bold"}}>{items.description} </p>
                        <p style={{fontWeight:"bold"}}>Date</p>
                    </div>  
                </div>
            ))}
            
        </div>
    )
}
export default OrderCard;