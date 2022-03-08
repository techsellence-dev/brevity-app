import React,{useState} from 'react';
import { NativeBaseProvider, Text, Box } from 'native-base';
import '../App.css';import dataArray from '../Data'
import File from './File';
import App from '../App';
const Home=()=>{
    const [show,setShow]=useState(false)
    const [Data,setData]=useState(dataArray);
    const [task,setTask]=useState(null);
    const [filebox,showFileBox]=useState(false);
    return(
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
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDCy3-CWVT31YSimCy2Vpn1EthN0BnIIwgxuiUCdBiaCgcf4Yq_GAV8410xDgZ1p9BqZw&usqp=CAU' 
                  className='user' />
                  <div>
                    <div className='abt-div'>
                      <h1 className='names'>Welcome Mr. Das</h1>
                      <div className='icon'>
                        <h1 className='names'>Logout</h1>
                        <img src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/000000/external-power-user-interface-kmg-design-detailed-outline-kmg-design.png"
                        style={{height:'15px',width:'15px'}}/>
                      </div>
                    </div>
                    <div className='abt-div'>
                      <h1 className='names'>Admin Mode</h1>
                      <div className='icon'>
                        <h1 className='names'>Settings</h1>
                        <img src="https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-setting-notifications-justicon-lineal-justicon.png"
                        style={{height:'15px',width:'15px'}}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='btn-div'>
                  <div className='button' onClick={()=>showFileBox(!filebox)}>
                    <p className='btn-name'>Files</p>
                  </div>
                  <div className='button'><p className='btn-name'>Forward</p></div>
                  <div className='button'><p className='btn-name'>Send back</p></div>
                  <div className='button'><p className='btn-name'>Reject</p></div>
                  <div className='button'><p className='btn-name'>Next Assessor</p></div>
                </div>
              </div>
            </div>
            {
              filebox ? <File/> : null
            }
          </div> 
    )
}
export default Home;