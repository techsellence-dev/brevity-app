import React,{useState} from 'react';
import '../css/App.css';
import './/Forward.css'
import dataArray from '../data/Data';
import Options from './Optionbox';
import SenderInfo from './SenderInfo'
import List from './SenderList';
function Profile(){
  const [box,setShowBox]=useState(true)
    return(
        <>
         {
           box ?
           <Options
              title="Forward Tasks"
              subTitle="Please select any of the following"
              firstDescription="People Under any User"
              secondDescription="People outside the organization using Brevity"
              thirdDescription="People outside the organization via Email"
              firsttoken={true}
              secondtoken={true}
              thirdtoken={true}
            /> : null
         }
          <div className='arrange'>
            <div className='info-div'>
              <div className='order-div'>
                <div className='abt-div'>
                  <h1 className='names'>Order {dataArray[0].order}</h1>
                  <h1 className='names'>{dataArray[0].Description}</h1>
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
              </div>\
{/* User detaiils */}
              <div className='dtl-div'>
                <div className='profile'>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDCy3-CWVT31YSimCy2Vpn1EthN0BnIIwgxuiUCdBiaCgcf4Yq_GAV8410xDgZ1p9BqZw&usqp=CAU' alt='' 
                  className='user' />
                  <div>
                    <div className='abt-div'>
                      <h1 className='names'>Welcome Mr. Das</h1>
                      <div className='icon'>
                        <h1 className='names'>Logout</h1>
                      </div>
                    </div>
                    <div className='abt-div'>
                      <h1 className='names'>Admin Mode</h1>
                      <div className='icon'>
                        <h1 className='names'>Settings</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='sender-details'>
              <SenderInfo/>
              <List/>
            </div>
          </div>
        </>
    )
}
export default Profile;