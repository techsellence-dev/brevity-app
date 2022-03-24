import React,{useState} from 'react';
import '../App.css';
import dataArray from '../Data'
import getOrderDetails from '../server/getOrderDetails';
const data=getOrderDetails;
function UserOrder(){{
    return(
        <>
            <div className='order-div'>
              <div className='abt-div'>
                <h1 className='names'>Order {dataArray[0].order}</h1>
                <h1 className='names'>h</h1>
              </div>
              <h1 className='names'>{dataArray[0].Description}</h1>
              <div className='abt-div'>
                <h1 className='names'>Create by Name</h1>
                <h1 className='names'>Due Date data</h1>
              </div>
              <div className='abt-div'>
                <h1 className='names'>Sent by name</h1>
                <h1 className='names'>Send to name</h1>
              </div>
            </div>
        </>
    )
}}
export default UserOrder;