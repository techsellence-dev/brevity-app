import React,{useState} from 'react';
import { NativeBaseProvider, Text, Box } from 'native-base';
import '../App.css';
import dataArray from '../Data'
import File from './File';
import Confirm from './Confirm';
import Button from './Button';

const Home=()=>{
    const [filebox,showFileBox]=useState(false);
    const [forward,setForward]=useState(false);
    const [back,setBack]=useState(false);
    const [next,setNext]=useState(false);
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
                <div className='btn-div'>
                  <div className='button' onClick={()=>showFileBox(!filebox)}>
                    <p className='btn-name'>Files</p>
                  </div>
                  <div className='button' onClick={()=>{
                    setForward(true)
                    setBack(false)
                    setNext(false)
                  }}>
                    <p className='btn-name'>
                      Forward
                    </p>
                  </div>
                  <div className='button' onClick={()=>{
                    setForward(false)
                    setBack(true)
                    setNext(false)
                  }}>
                    <p className='btn-name'>
                      Send back
                    </p>
                  </div>
                  <div className='button'>
                    <p className='btn-name'>
                    Reject
                    </p>
                  </div>
                  <div className='button' onClick={()=>{
                    setForward(false)
                    setBack(false)
                    setNext(true)
                  }}>
                    <p className='btn-name'>
                      Next Assessor
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {
              filebox ? <File/> : null
            }
            {
              forward ? 
                <Confirm
                  title="Forward"
                  description="Please Provide the Comments to forward the email"
                  message="Make sure you have checked all files and upload necessary documnets"
                >
                 <Button title="Cancel" onClick={()=>setForward(false)} />
                 <Button title="Accept" />
                </Confirm> :
              null
            }
            {
              back ? 
                <Confirm
                  title="Send Back"
                  description="Please Provide the Comments to Send Back the email"
                  message="Make sure you have checked all files and upload necessary documnets"
                >
                  <Button title="Cancel" onClick={()=>setBack(false)} />
                  <Button title="Accept" />
                </Confirm> :
              null
            }
            {
              next ? 
                <Confirm
                  title="Next Assesor"
                  description="Please Provide the Comments to forward the email"
                  message="Make sure you have checked all files and upload necessary documnets"
                >
                  <Button title="Cancel" onClick={()=>setNext(false)} />
                  <Button title="Accept" />
                </Confirm> :
              null
            }
          </div> 
    )
}
export default Home;