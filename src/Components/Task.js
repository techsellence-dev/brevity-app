import React,{useState} from 'react';
import { NativeBaseProvider, Text, Box } from 'native-base';
import '../App.css';
import dataArray from '../Data';
import { Editor } from "react-draft-wysiwyg";
import Toast from './Info';
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const addTask=(task)=>{
  alert(task);
}
const Task=()=>{
    const [show,setShow]=useState(false)
    const [Data,setData]=useState(dataArray);
    const [task,setTask]=useState(null);
    const [bold,setbold]=useState(false)
    const [editorstate,setEditorState]=useState(()=>{
      EditorState.createEmpty();
    });
    const onEditorStateChange=({editorstate})=>{
      setEditorState(editorstate);
    }
    return(
        <div className='App'>
        {
          show ?
//Collapse Bar
          <div className='itemDiv'>
          <div className='collapse'>
            <h2>Collapse Task</h2>
            <img src="https://img.icons8.com/ios-filled/50/000000/list.png"
              className='image'
              onClick={()=>setShow(false)}
            />
          </div>
          <div className='inputs'>
            <div className='create-field'>
              <input className='input-field' 
                placeholder='Create new Task'
                onChange={(task)=>setTask(task.target.value)}
              />
              <img src="https://img.icons8.com/ios-filled/50/000000/enter-2.png"
                className='image'
                onClick={()=>addTask(task)}
              />
            </div>
            <div className='cross-div'>
              <input className='search-field'
                placeholder='Search'
              />
              <img src="https://img.icons8.com/ios-filled/50/000000/search--v4.png"
                className='image'
              />
            </div>
          </div>
          {
            Data.map((items)=>{
              return <div className='items'>
              <div className='h3-div'>
                <h3>Order {items.order}</h3>
                <h3>Time</h3>
              </div>
              <h1>{items.Task}</h1>
              <h3>{items.Description}</h3>
            </div>
            })
          }
        </div> 
        :
        null
        }
{/* Main Page */}
        <div  className='main-div'>
          <div className='arrange'>
            <img src="https://img.icons8.com/ios-filled/50/000000/list.png"
              className='image' style={{margin: '10px',}}
              onClick={()=>setShow(true)}
            />
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
              </div>
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
                  <div className='button'><p>Files</p></div>
                  <div className='button'><p>Forward</p></div>
                  <div className='button'><p>Send back</p></div>
                  <div className='button'><p>Reject</p></div>
                  <div className='button'><p>Next Assessor</p></div>
                </div>
              </div>
            </div>
          </div>
          <Editor
            editorState={editorstate}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            placeholder='Enter Text'
            onEditorStateChange={()=>onEditorStateChange(editorstate)}
          />
        </div>
       </div> 
    )
}
export default Task;