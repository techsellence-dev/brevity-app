import React, { useState }  from "react";
import './OrderCard.css';
function OrderCard(props){
    
    return(
        <div>
            {props.data.map((items,index) => (
                <div key={items.index} className="cardBody" onClick={()=>props.onclick(items)}  >
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