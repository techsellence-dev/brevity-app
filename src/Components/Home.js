import React, {useEffect, useState} from 'react';
import '../Css/Home.css';
import '../App.css';
import File from './File';
import Confirm from './Confirm';
import Button from './Button';
import {Amplify, Auth} from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';

Amplify.configure(awsExports);

const Home =  (props) => {
 
// states for managing different boxes
  const [filebox, showFileBox] = useState(false);
  const [forward, setForward] = useState(false);
  const [back, setBack] = useState(false);
  const [next, setNext] = useState(false);
  const [authedUser, setAuthedUser] = useState('');

  useEffect(async () => {
    let currentUser = await Auth.currentAuthenticatedUser();
    // alert(Auth.currentAuthenticatedUser())
    console.log('current user is: ' + currentUser.attributes.email);
    setAuthedUser(currentUser.attributes.email);
    }, []);

  async function SignOUT() {
    try {
      let signOutResponse = await Auth.signOut();
      console.log('sign out response: ' + signOutResponse);
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (

    // authentication part

    // <Authenticator signUpAttributes={[
    //   'email',
    //   'phone_number',
    //   'isadmin',
    // ]}>
    // {({ signOut, user }) => (
    <div className='arrange'>
      <div className='info-div'>
        {/* order details that are fetch from navbar */}


             <div className='order-div'>
                <div className='abt-div'>
                  <h1 className='names'>Order Number {props.userData==null?'':props.userData.orderNum}</h1>
                </div>
                  <h1 className='names'>{props.userData==null?'':props.userData.description}</h1>
                <div className='abt-div'>
                  <h1 className='names'>Create by Name </h1>
                  <h1 className='names'>Due Date {props.userData==null?'':props.userData.CurrentData}</h1>
                </div>
                <div className='abt-div'>
                  <h1 className='names'>Sent by {authedUser}</h1>
                  <h1 className='names'>Send to name</h1>
                </div>
              </div> 

        {/* other user detail with buttons for forward and send back    */}

        <div className='dtl-div'>
          <div className='profile'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDCy3-CWVT31YSimCy2Vpn1EthN0BnIIwgxuiUCdBiaCgcf4Yq_GAV8410xDgZ1p9BqZw&usqp=CAU'
              className='user' alt="" />
            <div>
              <div className='abt-div'>
                <h1 className='names'>Welcome {authedUser}</h1>
                {/* <h1>{authusername}</h1> */}
                <div className='icon'>
                  <button className='names' onClick={SignOUT}>Logout</button>
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
            <div className='button' onClick={() => showFileBox(!filebox)}>
              <p className='btn-name'>Files</p>
            </div>
            <div className='button' onClick={() => {
              setForward(true)
              setBack(false)
              setNext(false)
            }}>
              <p className='btn-name'>
                Forward
              </p>
            </div>
            <div className='button' onClick={() => {
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
            <div className='button' onClick={() => {
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
      {/* file box viewer           */}
      {
        filebox ? <File /> : null
      }
      {/* other popups */}
      {
        forward ?
          <Confirm
            title="Forward"
            description="Please Provide the Comments to forward the email"
            message="Make sure you have checked all files and upload necessary documnets"
          >
            <Button title="Cancel" onClick={() => setForward(false)} />
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
            <Button title="Cancel" onClick={() => setBack(false)} />
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
            <Button title="Cancel" onClick={() => setNext(false)} />
            <Button title="Accept" />
          </Confirm> :
          null
      }
    </div>
    // )
    // }
    // </Authenticator>
  )
}
export default Home;