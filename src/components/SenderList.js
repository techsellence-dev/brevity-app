import React from 'react';
import './SenderList.css'
import userData from './UserData'
function List(){
    return(
        <>
            <div className="all-users-list">
                {
                    userData.map((items)=>{
                        return <div className='user-info'>
                        <input type='checkbox'/>
                        <img src="https://img.icons8.com/bubbles/50/000000/user.png" className='user-image'/>
                        <div className='users-details'>
                            <h1 className='user-detail-font'>{items.username}</h1>
                            <h1 className='user-detail-font'>Employee ID : {items.employeeId}</h1>
                            <h1 className='user-detail-font'>{items.address}</h1>
                            <h1 className='user-detail-font'>Reports to : {items.report}</h1>
                            <h1 className='user-detail-font'>{items.contact}</h1>
                            <h1 className='user-detail-font'>{items.mail}</h1>
                        </div>
                    </div>
                    })
                }
            </div>
        </>
    )
}
export default List;