import React from 'react';
import './Sender.css';
import SubButtons from './SubButtons';
function SenderInfo(){
    return(
        <>
            <div className='sender-info-box'>
                <div className='sender-info'>
                    <h1 className='send-box-title'>
                        Task to be sent to :
                    </h1>
                    <h1 className='send-box-title'>
                        Person (s) Name
                    </h1>
                    <h1 className='send-box-title'>
                        Due Date :  12/03/2022
                    </h1>
                    <h1 className='send-box-title'>
                        Subject   Requesting documents 
                    </h1>
                    <h1 className='send-box-title'>
                        Body
                    </h1>
                    <div className='body-container'>
                        <h1 className='sender-details'>Dear Madam,</h1>
                        <h1 className='sender-details'>With reference to order number 1303202. I would like to request the following.</h1>
                        <h1 className='sender-details'>1. Data Table</h1>
                        <h1 className='sender-details'>2. Benefiency Record</h1>
                        <h1 className='sender-details'>Please do needfull</h1>
                        <h1 className='sender-details'>Regard</h1>
                        <h1 className='sender-details'>Arun Das</h1>
                    </div>
                    <div className='send-button'>
                        <SubButtons title="Send"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SenderInfo;